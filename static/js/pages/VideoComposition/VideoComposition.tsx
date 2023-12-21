import React, { useState, useRef, useEffect, useCallback } from 'react'
import cn from 'classnames'
import axiosStatic, { CancelTokenSource } from 'axios'
import { useTranslation } from 'react-i18next'

import './VideoComposition.scss'
import { Uploader, Spinner } from 'common'
import { readFile, POLLING_INTERVAL, BACK_ENV, putObjectSlice, getTempUrl, getJob, createJob, CDN_COS } from 'utils'

const bannerURL = `${CDN_COS}/assets/image/back10.jpg`
/** Types */
type Demo = {
  url: string
  jobId: string
  source?: CancelTokenSource
  isSample?: boolean
  result?: string
  uploading?: boolean
}

/** Variables */
const CancelTokenStatic = axiosStatic.CancelToken
const COS_PREFIX = 'https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/videoComp'

const demos: Demo[] = [
  {
    url: `${COS_PREFIX}/sample1.mp4`,
    jobId: '1',
    result: `${COS_PREFIX}/result1.mp4`,
    isSample: true,
  },
  {
    url: `${COS_PREFIX}/sample2.mp4`,
    jobId: '2',
    result: `${COS_PREFIX}/result2.mp4`,
    isSample: true,
  },
  {
    url: `${COS_PREFIX}/sample3.mp4`,
    jobId: '3',
    result: `${COS_PREFIX}/result3.mp4`,
    isSample: true,
  },
  {
    url: `${COS_PREFIX}/sample4.mp4`,
    jobId: '4',
    result: `${COS_PREFIX}/result4.mp4`,
    isSample: true,
  },
]

/** Functions */
async function uploadVideo(file: File) {
  const cosKey = `${BACK_ENV}/video/videoComp/${file.size}-${file.name}`
  
  await putObjectSlice(file, cosKey)
  const url = await getTempUrl(cosKey)

  return await createJob(
    { url },
    {
      outputPrefix: `${Math.random().toString(36).slice(-6)}`,
      "videoBgmGeneration": {
        "bgmNum": 1
      }
    },
    `${BACK_ENV}/result/videoComp`,
  )
}

const VideoComposition: React.FC = () => {
  const requestStackRef = useRef<CancelTokenSource[]>([])

  const videoPreviewRef = useRef<HTMLVideoElement>(null)
  const videoResultRef = useRef<HTMLVideoElement>(null)

  const { t } = useTranslation('videoComposition')

  const [demosLength, setDemosLength] = useState(demos.length)
  const [previewURL, setPreviewURL] = useState<string>(demos[0].url)
  const previewURLRef = useRef(demos[0].url)

  const [currentTuuid, setCurrentTuuid] = useState<string>(demos[0].jobId)
  const [loadingTuuid, setLoadingTuuid] = useState<boolean>(false)
  const tuuidRef = useRef(demos[0].jobId)

  const [result, setResult] = useState<string>()

  const [videoMSG, setVideoMSG] = useState<string | number>('')

  useEffect(() => {
    const requestStack = requestStackRef.current

    return () => {
      requestStack.forEach((source) => {
        source.cancel('Exit page')
      })
    }
  }, [])

  useEffect(() => {
    /** Stop playing video when currentTuuid changes */
    videoPreviewRef.current?.pause()
    videoResultRef.current?.pause()

    const requestStack = requestStackRef.current

    async function request() {
      const demo = demos.find((demo) => demo.jobId === currentTuuid)
      if (!demo) return
      if (demo.result) {
        return setResult(demo.result)
      }

      if (tuuidRef.current === currentTuuid) {
        setResult(undefined)
        setVideoMSG('')
      }
      const source = CancelTokenStatic.source()
      requestStack.push(source)

      try {
        const data = await getJob(currentTuuid, source.token)
        const job = data.getJobResponse?.job
        if (job && job.state === 3) {
          const resultUrl = await getTempUrl(
            `${BACK_ENV}/result/videoComp/${job.outputs[0].smartContentResult?.videoBgmGeneration?.[0].videoName}`,
          )

          if (resultUrl) {
            demo.result = resultUrl
            tuuidRef.current === currentTuuid && setResult(demo.result)
          }
        } else {
          if (data.errorResponse) {
            tuuidRef.current === currentTuuid && setVideoMSG(data.errorResponse.message)
          } else if (job) {
            if (job.state === 4) {
              tuuidRef.current === currentTuuid && setVideoMSG('Job Failed')
            } else if ([1, 2].includes(job.state) && tuuidRef.current === currentTuuid) {
              setTimeout(request, POLLING_INTERVAL)
            }
          }
        }
      } catch (e) {
        setTimeout(request, POLLING_INTERVAL)
        console.log(e)
      } finally {
        /** Remove the source when request is finished */
        const sourceIndex = requestStack.indexOf(source)
        sourceIndex > -1 && requestStack.splice(sourceIndex, 1)
      }
    }

    currentTuuid && request()
  }, [currentTuuid])

  const switchDemo = useCallback((demo: Demo) => {
    setCurrentTuuid(demo.jobId)
    tuuidRef.current = demo.jobId

    setPreviewURL(demo.url)
    previewURLRef.current = demo.url

    setLoadingTuuid(!!demo.uploading)
  }, [])

  const onUpload = useCallback(
    async (files: FileList | null) => {
      if (!files || !files.length) return
      const file = files[0]
      const target = await readFile(file)

      if (target) {
        const url = target.result as string

        const duplicateDemo = demos.find((demo) => demo.url === url)
        if (duplicateDemo) {
          switchDemo(duplicateDemo)

          return
        }

        const demo: Demo = { url, jobId: '' }
        
        demos.push(demo)

        setPreviewURL(demo.url)
        previewURLRef.current = demo.url

        setCurrentTuuid('')
        setResult(undefined)

        /** Upload video */
        setLoadingTuuid(true)
        demo.uploading = true
        try {
          const data = await uploadVideo(file)
          if (data.createJobResponse?.job?.id) {
            demo.jobId = data.createJobResponse.job.id
            previewURLRef.current === demo.url && setCurrentTuuid(data.createJobResponse.job.id)
            
            

            tuuidRef.current = demo.jobId
          } else {
            setVideoMSG(data.errorResponse?.message || 'Upload Failed')
          }

          setLoadingTuuid(false)
          demo.uploading = false
        } catch (e) {
          console.log(e)
        }
      }
    },
    [switchDemo],
  )

  const onChangeSample = useCallback(
    (demo: Demo) => {
      if (demo && previewURL !== demo.url) {
        switchDemo(demo)
      }
    },
    [previewURL, switchDemo],
  )

  const onDelete = useCallback(
    (index: number, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      e.stopPropagation()

      const demo = demos[index]

      if (demo.uploading && demo.source) {
        demo.source.cancel('Cancel Upload')
      }

      if (previewURL === demo.url) switchDemo(demos[index - 1])

      demos.splice(index, 1)
      setDemosLength(demosLength - 1)
    },
    [previewURL, switchDemo, demosLength],
  )

  return (
    <div className="VideoComp">
      <div
        className="VideoComp-banner"
        style={{
          backgroundImage: `url(${bannerURL})`,
        }}
      >
        <div className="VideoComp-banner-content">
          <h2 className="VideoComp-banner-title">{t`videoComposition`}</h2>
          <p className="VideoComp-banner-description">{t`intro`}</p>
        </div>
      </div>

      <div className="VideoComp-demo">
        <div className="VideoComp-main">
          <div className="VideoComp-preview">
            <h2 className="VideoComp-main-title">{t`silentVideo`}</h2>
            <div className="VideoComp-preview-wrap">
              <video src={previewURL} controls controlsList="nodownload" ref={videoPreviewRef}></video>
            </div>
          </div>
          <div className="VideoComp-result">
            <h2 className="VideoComp-main-title">{t`generatedVideo`}</h2>
            <div
              className={cn('VideoComp-result-wrap', {
                loading: loadingTuuid || (!result && !videoMSG),
              })}
            >
              {videoMSG && !result ? (
                <div className="VideoComp-result-message">{`${t`tip.processedFailed`} (${videoMSG})`}</div>
              ) : (
                <video src={result} controls controlsList="nodownload" ref={videoResultRef}></video>
              )}
              <div className="VideoComp-result-cover">
                <Spinner />
                <p className="VideoComp-result-cover-status">
                  {t(`tip.${loadingTuuid ? 'uploadingVideo' : 'processingVideo'}`)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="VideoComp-sample">
          <ul className="VideoComp-sample-list">
            {demos.map(({ isSample, url }, index) => (
              <li
                key={url}
                className={cn('VideoComp-sample-item', { active: url === previewURL })}
                onClick={() => onChangeSample(demos[index])}
              >
                <video src={url}></video>
                {isSample ? null : (
                  <span className="VideoComp-sample-item-delete" onClick={(e) => onDelete(index, e)}></span>
                )}
              </li>
            ))}
            <li className={cn('VideoComp-sample-item', 'uploader')}>
              <Uploader onUpload={onUpload} message={t`tip.videoTimeLimit`} accept="video/*" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VideoComposition
