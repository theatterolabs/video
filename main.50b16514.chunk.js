(this["webpackJsonpaiwriter-demo"] = this["webpackJsonpaiwriter-demo"] || []).push([[0], {
    1: function(e, t, n) {
        "use strict";
        n.d(t, "s", (function() {
            return m
        }
        )),
        n.d(t, "u", (function() {
            return d
        }
        )),
        n.d(t, "v", (function() {
            return v
        }
        )),
        n.d(t, "r", (function() {
            return i
        }
        )),
        n.d(t, "z", (function() {
            return f
        }
        )),
        n.d(t, "A", (function() {
            return h
        }
        )),
        n.d(t, "k", (function() {
            return E
        }
        )),
        n.d(t, "c", (function() {
            return x
        }
        )),
        n.d(t, "d", (function() {
            return k
        }
        )),
        n.d(t, "n", (function() {
            return y
        }
        )),
        n.d(t, "e", (function() {
            return N
        }
        )),
        n.d(t, "o", (function() {
            return C
        }
        )),
        n.d(t, "b", (function() {
            return w
        }
        )),
        n.d(t, "g", (function() {
            return S
        }
        )),
        n.d(t, "m", (function() {
            return I
        }
        )),
        n.d(t, "j", (function() {
            return R
        }
        )),
        n.d(t, "l", (function() {
            return T
        }
        )),
        n.d(t, "f", (function() {
            return V
        }
        )),
        n.d(t, "q", (function() {
            return _
        }
        )),
        n.d(t, "i", (function() {
            return A
        }
        )),
        n.d(t, "p", (function() {
            return M
        }
        )),
        n.d(t, "h", (function() {
            return F
        }
        )),
        n.d(t, "a", (function() {
            return z
        }
        )),
        n.d(t, "B", (function() {
            return P
        }
        )),
        n.d(t, "x", (function() {
            return L
        }
        )),
        n.d(t, "w", (function() {
            return H
        }
        )),
        n.d(t, "y", (function() {
            return D
        }
        )),
        n.d(t, "t", (function() {
            return W
        }
        ));
        var a = n(2)
          , r = n.n(a)
          , c = n(7)
          , s = n(8)
          , o = n.n(s)
          , l = n(97)
          , i = function() {
            var e = (new Date).toUTCString()
              , t = "smart_content_frontend"
              , n = 'hmac id="'.concat("AKID5khgFhC1l7lrZI9K4WIhjcTxI47J3pPoX81i", '", algorithm="hmac-sha1", headers="x-date source", signature="')
              , a = "x-date: ".concat(e, "\nsource: ").concat(t)
              , r = n + l.enc.Base64.stringify(Object(l.HmacSHA1)(a, "caqRTTEFN78NQKB49musDOKiTvvREf9S7PC6zfz2")) + '"';
            return o.a.create({
                headers: {
                    Source: t,
                    "X-Date": e,
                    Authorization: r
                },
                withCredentials: !0
            })
        }
          , u = "https://service-6ube6p9n-1257411467.bj.apigw.tencentcs.com/release/tmp/job";
        function m(e, t, n, a) {
            return p.apply(this, arguments)
        }
        function p() {
            return (p = Object(c.a)(r.a.mark((function e(t, n, a, c) {
                var s;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            i().post(u, {
                                env: void 0,
                                action: "CreateJob",
                                body: {
                                    customId: localStorage.getItem("userId"),
                                    inputs: [t],
                                    outputs: [{
                                        contentId: a && "8c39e8b5-aa28-4d5b-8904-79fd1a8e256f",
                                        destination: a,
                                        inputSelectors: [0],
                                        smartContentDescriptor: n
                                    }]
                                },
                                jwt: localStorage.getItem("jwt")
                            }, {
                                cancelToken: c,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        case 2:
                            return s = e.sent,
                            e.abrupt("return", s.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function d(e, t) {
            return b.apply(this, arguments)
        }
        function b() {
            return (b = Object(c.a)(r.a.mark((function e(t, n) {
                var a;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            i().post(u, {
                                env: void 0,
                                action: "GetJob",
                                body: {
                                    id: t
                                },
                                jwt: localStorage.getItem("jwt")
                            }, {
                                cancelToken: n,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        case 2:
                            return a = e.sent,
                            e.abrupt("return", a.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function v(e, t, n) {
            return g.apply(this, arguments)
        }
        function g() {
            return (g = Object(c.a)(r.a.mark((function e(t, n, a) {
                var c;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            i().post("https://service-6ube6p9n-1257411467.bj.apigw.tencentcs.com/release/tmp/music_model", {
                                env: void 0,
                                action: "ListModels",
                                body: {
                                    offset: t,
                                    limit: n
                                },
                                jwt: localStorage.getItem("jwt")
                            }, {
                                cancelToken: a,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        case 2:
                            return c = e.sent,
                            e.abrupt("return", c.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function f(e) {
            return j.apply(this, arguments)
        }
        function j() {
            return (j = Object(c.a)(r.a.mark((function e(t) {
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise((function(e, n) {
                                var a = new FileReader;
                                a.onload = function(t) {
                                    var a = t.target;
                                    a && e(a),
                                    n(null)
                                }
                                ,
                                a.onerror = function() {
                                    n(null)
                                }
                                ,
                                a.readAsDataURL(t)
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function h(e) {
            return O.apply(this, arguments)
        }
        function O() {
            return (O = Object(c.a)(r.a.mark((function e(t) {
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise((function(e, n) {
                                var a = new FileReader;
                                a.onload = function(t) {
                                    var a = t.target;
                                    a && e(a),
                                    n(null)
                                }
                                ,
                                a.onerror = function(e) {
                                    console.log(e),
                                    n(null)
                                }
                                ,
                                a.readAsArrayBuffer(t)
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var E = 3e3
          , x = "/smartcontent"
          , k = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com"
          , y = "https://service-5z1ifpan-1257411467.bj.apigw.tencentcs.com/release/Token_Service"
          , N = "https://service-6ube6p9n-1257411467.bj.apigw.tencentcs.com/release/aux"
          , C = "KHtv7ite1TgwwjzJ"
          , w = "product"
          , S = "https://service-6ube6p9n-1257411467.bj.apigw.tencentcs.com/release/MagicMirror"
          , I = "https://service-6ube6p9n-1257411467.bj.apigw.tencentcs.com/release/STS"
          , R = [[{
            head: "\u6211\u7528\u771f\u5fc3\u8bdd\u53bb\u5927\u5192\u9669",
            pattern: "AAABBBCCC",
            lyricResult: "\u6211\u7528\u771f\u5fc3\u8bdd\u53bb\u5927\u5192\u9669(ian)\n\u7231 \u5c31\u5728\u4f20\u8bf4\u4e2d\u90a3\u662f\u6700\u597d\u7ec8\u70b9(ian)\n\u4e00\u76f4\u5230\u5fd8\u8bb0\u4e86\u65f6\u95f4(ian)\n\u8fd8\u6709\u6d77\u9e25\u770b\u7740\u6d77\u9762(ian)\n\u4e0d\u7ba1\u5929\u6daf\u6d77\u89d2\u6709\u591a\u8fdc(uan)\n\u6211\u4f1a\u73cd\u60dc\u8fd9\u4efd\u5bf9\u4f60\u7684\u795d\u613f(uan)\n\u7136\u800c\u8fd9\u9996\u6b4c\u53ea\u5199\u7ed9\u66fe\u7ecf\u7684\u67d0\u4e2a\u5973\u4eba(en)\n\u662f\u65f6\u5019\u9009\u62e9\u751f\u547d\u4e4b\u6240\u4ee5\u8fde\u81ea\u5df1\u90fd\u4e0d\u6562\u76f8\u4fe1(in)\n\u6211\u5374\u8981\u5ac1\u7ed9\u4e09\u5341\u5c81\u7684\u7537\u4eba(en)",
            rapResult: "\u6211\u7528\u771f\u5fc3\u8bdd\u53bb\u5927\u5192\u9669(ian)\n\u6211\u60f3\u8bf4\u6211\u4f1a\u7231\u4f60\u591a\u4e00\u70b9(ian)\n\u662f\u4e0d\u662f\u6211\u4eec\u7684\u611f\u60c5\u6ca1\u6709\u6c38\u8fdc(uan)\n\u53ef\u542c\u7740\u542c\u7740\u5c31\u89c9\u5f97\u7d2f\u4e86(e)\n\u80a9\u62ab\u6218\u58eb\u6545\u4e8b \u8c01\u4eba\u613f\u4f3c\u9996\u8bd7\u6b4c(e)\n\u53ea\u56e0\u660e\u4e89\u6697\u593a(uo)\n\u6ee1\u8eab\u9c9c\u8840\u6765\u5f81\u6218\u6740\u65e0\u8d66(e)\n\u6570\u4e0d\u6e05\u7684\u6b65\u4f10 \u8e29\u8fc7\u811a\u4e0b\u6c5f\u5c71\u53c8\u5982\u4f55(e)\n\u591a\u4e48\u5e0c\u671b\u5728\u67d0\u4e00\u5929\u80fd\u518d\u89c1\u5230\u6211(o)"
        }], [{
            head: "\u751f\u547d\u5c31\u50cf\u662f\u4e00\u4e2a\u4e00\u4e2a\u8a93\u8a00",
            pattern: "AAABBBCCC",
            lyricResult: "\u751f\u547d\u5c31\u50cf\u662f\u4e00\u4e2a\u4e00\u4e2a\u8a93\u8a00(an)\n\u66fe\u7ecf\u8bb8\u4e0b\u7684\u5fc3\u613f \u4e00\u76f4\u4e0d\u80fd\u91cd\u73b0(ian)\n\u968f\u7740\u4f60\u6e10\u884c\u6e10\u8fdc(uan)\n\u7559\u5728\u56de\u5fc6\u91cc\u6253\u8f6c(uan)\n\u8fd8\u4ee5\u4e3a\u6211\u8ba1\u7b97\u8fc7\u4e86\u660e\u5929(ian)\n\u6211\u4e5f\u5e94\u8be5\u4efb\u6027\u81ea\u5df1\u6307\u6307\u70b9\u70b9(ian)\n\u867d\u7136\u6211\u65e9\u5df2\u6ca1\u6709\u813e\u6c14\u522b\u8bf4\u8bdd\u90a3\u4e48\u5c0f\u5fc3(in)\n\u8eab\u8fb9\u6709\u4f60\u7684\u4e16\u754c\u6211\u624d\u4f1a\u5b89\u5fc3(in)\n\u5176\u5b9e\u4f60\u53ef\u4e0d\u5fc5\u518d\u505a\u5973\u4eba(en)",
            rapResult: "\u751f\u547d\u5c31\u50cf\u662f\u4e00\u4e2a\u4e00\u4e2a\u8a93\u8a00(an)\n\u53cd\u6b63\u6211\u5df2\u5c1d\u8fc7\u4e86\u5fc3\u9178 \u518d\u4e5f\u4e0d\u4f1a\u91cd\u73b0(ian)\n\u660e\u5929\u8d77\u4e0d\u7ba1\u4ec0\u4e48\u4e8b\u60c5\u90fd\u8981\u52c7\u6562\u627f\u62c5(an)\n\u611f\u8c22\u4e0a\u5929\u8ba9\u6211\u9047\u89c1\u4f60(i)\n\u53ea\u60f3\u628a\u4f60\u7d27\u7d27\u62b1\u5728\u6000\u91cc(i)\n\u6bcf\u5f53\u6211\u7741\u5f00\u773c\u775b \u770b\u7740\u8fdc\u65b9\u7684\u4f60(i)\n\u6211\u75db\u54ed\u7684\u65f6\u5019\u5c31\u8fd9\u6837\u9ed8\u9ed8\u5730\u597d\u597d\u7231\u4f60(i)\n\u4ece\u4eca\u4ee5\u540e\u4e0d\u518d\u4e3a\u8c01\u800c\u54ed\u6ce3(i)\n\u4e0d\u613f\u610f\u8ffd\u5bfb\u6ca1\u6709\u4eba\u7684\u95ee\u9898\u6211\u66fe\u7ecf\u8ff7\u5931\u81ea\u5df1(i)"
        }], [{
            head: "\u6545\u4e8b\u7684\u5c0f\u9ec4\u82b1",
            pattern: "AAABBBCCC",
            lyricResult: "\u6545\u4e8b\u7684\u5c0f\u9ec4\u82b1(ua)\n\u5feb\u4e50\u70b9\u7740\u82b1 \u7f16\u4e00\u6735\u9001\u7ed9\u5979(a)\n\u5a03\u5a03\u54ed\u5440 \u5a03\u5a03\u7b11\u5566(a)\n\u4e0d\u8bf4\u8bdd\u4f60\u7728\u7709\u6bdb\u6211\u5c31\u7ffb\u8138\u4e86(e)\n\u4f60\u786e\u5b9a\u559c\u6b22\u6211(o)\n\u60f3\u6c38\u8fdc\u966a\u7740\u6211(o)\n\u8c01\u90fd\u4e0d\u613f\u610f\u518d\u591a\u505c\u7559(iu)\n\u8c01\u4e5f\u65e0\u6cd5\u5f3a\u6c42(iu)\n\u7b80\u5355\u80fd\u76f8\u7231 \u4e0d\u9700\u8981\u7406\u7531(ou)",
            rapResult: "\u6545\u4e8b\u7684\u5c0f\u9ec4\u82b1(ua)\n\u5176\u5b9e\u4f60\u5e76\u4e0d\u662f\u6bcf\u4e2a\u4eba\u90fd\u559c\u6b22\u5979(a)\n\u5916\u9762\u4e0b\u96e8\u4e86 \u4f60\u4e5f\u4f1a\u4e56\u4e56\u542c\u6211\u591a\u8bf4\u8bdd(ua)\n\u6211\u5fc3\u7231\u7684\u59d1\u5a18 \u5343\u4e07\u4e0d\u8981\u8d70\u5f00(ai)\n\u6211\u5728\u65e0\u5c3d\u9ed1\u591c\u7b49\u5f85(ai)\n\u4e0d\u8ba9\u660e\u5929\u5230\u6765(ai)\n\u522b\u89c9\u5f97\u6709\u70b9\u5947\u602a(uai)\n\u5982\u679c\u771f\u60c5\u7edd\u5bf9\u53ea\u6c42\u4e00\u70b9\u5766\u767d(ai)\n\u5f53\u6211\u5df2\u660e\u767d\u653e\u624b\u4f60\u7684\u7231(ai)"
        }], [{
            head: "\u7ed9\u6211\u4e00\u628a\u5251",
            pattern: "AAABBBCCC",
            lyricResult: "\u7ed9\u6211\u4e00\u628a\u5251(ian)\n\u5f53\u5bd2\u98ce\u7a7f\u8d8a\u8fc7\u6591\u9a6c\u7ebf(ian)\n\u6ca1\u4eba\u5728\u8eab\u8fb9(ian)\n\u6211\u60f3\u8981\u7684\u5feb\u4e50\u4f60\u770b\u4e0d\u89c1(ian)\n\u4fa7\u8033\u542c\u7740\u8fd9\u6bb5\u65cb\u5f8b\u91cc\u9762 \u56de\u5473\u90a3\u77ac\u95f4(ian)\n\u5176\u5b9e\u4e0d\u7528\u8bf4\u6211\u4eec\u4f1a\u6709\u660e\u5929(ian)\n\u53ef\u8fd9\u8106\u5f31\u7684\u611f\u60c5\u600e\u6837\u624d\u7518\u5fc3(in)\n\u65e5\u540e\u4ea6\u4e0d\u6562\u518d\u53bb\u7231\u522b\u4eba(en)\n\u505a\u4e2a\u6700\u7231\u7684\u4eba(en)",
            rapResult: "\u7ed9\u6211\u4e00\u628a\u5251(ian)\n\u4e0d\u65ad\u731c\u6d4b\u8bd5\u7740\u8d85\u8d8a\u81ea\u5df1\u7684\u5e95\u7ebf(ian)\n\u4e16\u4e0a\u66fe\u51e0\u591a\u8981\u8138 \u5fc3\u91cc\u65e5\u5e38\u53ea\u770b\u4f60\u8868\u73b0(ian)\n\u7eb5\u662f\u6602\u9996\u633a\u80f8\u53cc\u65b9\u90fd\u5728\u53d8(ian)\n\u53c8\u4f55\u7528\u77e5\u9053\u53bb\u638c\u63e1\u6bcf\u573a\u79bb\u5408\u60b2\u6b22\u751f\u800c\u65e0\u61be(an)\n\u4f46\u5374\u65e0\u6cd5\u505c\u6b62\u76f8\u7231\u7684\u90a3\u4e2a\u77ac\u95f4(ian)\n\u6211\u4eec\u518d\u4e5f\u65e0\u6cd5\u56de\u5230\u90a3\u5e74\u79cb\u5929(ian)\n\u9192\u6765\u65f6\u522b\u7ba1\u547d\u8fd0\u5450\u558a\u4f60\u662f\u5426\u542c\u5f97\u89c1(ian)\n\u6211\u4eec\u4fe9\u6b65\u5c65\u8e52\u8dda\u5f80\u524d(ian)"
        }]]
          , T = [{
            vocals: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample1/t4oz2qinput_vocals.wav",
            drums: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample1/t4oz2qinput_drums.wav",
            bass: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample1/t4oz2qinput_bass.wav",
            accompaniment: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample1/t4oz2qinput_accompaniment.wav"
        }, {
            vocals: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample2/po8v8minput_vocals.wav",
            drums: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample2/po8v8minput_drums.wav",
            bass: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample2/po8v8minput_bass.wav",
            accompaniment: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample2/po8v8minput_accompaniment.wav"
        }, {
            vocals: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample3/d8a4wqinput_vocals.wav",
            drums: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample3/d8a4wqinput_drums.wav",
            bass: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample3/d8a4wqinput_bass.wav",
            accompaniment: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample3/d8a4wqinput_accompaniment.wav"
        }, {
            vocals: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample4/a72qkfinput_vocals.wav",
            drums: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample4/a72qkfinput_drums.wav",
            bass: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample4/a72qkfinput_bass.wav",
            accompaniment: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperate/sample4/a72qkfinput_accompaniment.wav"
        }]
          , V = [{
            chinese: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample1/4f4lojinput_chinese.wav",
            pop: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample1/4f4lojinput_pop.wav",
            light: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample1/4f4lojinput_light.wav",
            opera: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample1/4f4lojinput_opera.wav"
        }, {
            chinese: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample2/zz1ms8input_chinese.wav",
            pop: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample2/zz1ms8input_pop.wav",
            light: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample2/zz1ms8input_light.wav",
            opera: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample2/zz1ms8input_opera.wav"
        }, {
            chinese: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample3/pnz4atinput_chinese.wav",
            pop: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample3/pnz4atinput_pop.wav",
            light: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample3/pnz4atinput_light.wav",
            opera: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample3/pnz4atinput_opera.wav"
        }, {
            chinese: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample4/9ejm1linput_chinese.wav",
            pop: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample4/9ejm1linput_pop.wav",
            light: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample4/9ejm1linput_light.wav",
            opera: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/sample4/9ejm1linput_opera.wav"
        }]
          , _ = [[{
            begin: "3.0",
            end: "12.0",
            tag: ["huamulan", "Slay", "FlashEscape"],
            caption: "\u82b1\u6728\u5170\u95ea\u73b0\u9003\u751f\uff0c\u5b9e\u73b0\u51fb\u8d25\u654c\u4eba\uff0c\u5965\u529b\u7ed9\uff01",
            barrage: ["\u95ea\u73b0\u9003\u751f\uff0c\u9022\u51f6\u5316\u5409", "\u51fb\u8d25\u654c\u4eba\uff0c\u65e0\u654c\u4e86"]
        }], [{
            begin: "1.0",
            end: "24.0",
            tag: ["zhugeliang", "LargeScaleTeamFight", "Slay", "MultiPlayerKill"],
            caption: "\u8bf8\u845b\u4eae\u5728\u5927\u89c4\u6a21\u56e2\u6218\u4e2d\uff0c\u53c2\u4e0e\u591a\u4eba\u51fb\u6740\u654c\u4eba\uff0c\u5b9e\u73b0\u51fb\u8d25\u654c\u4eba\uff0c\u5e72\u5f97\u6f02\u4eae\uff01",
            barrage: ["\u5927\u89c4\u6a21\u56e2\u6218\uff0c\u52bf\u4e0d\u53ef\u6321", "\u591a\u6740\uff0c\u8840\u6761\u6d88\u5931", "\u51fb\u8d25\u654c\u4eba\uff0c\u4eca\u65e5\u624b\u611f\u5c1a\u4f73"]
        }], [{
            begin: "1.0",
            end: "14.0",
            tag: ["huamulan", "SmallScaleTeamFight", "DoubleKill", "SoloKill", "OverTowerKill"],
            caption: "\u82b1\u6728\u5170\u5728\u5c0f\u89c4\u6a21\u56e2\u6218\u4e2d\uff0c\u53c2\u4e0e\u8d8a\u5854\u5f3a\u6740\u654c\u4eba\uff0c\u5355\u6740\u654c\u4eba\uff0c\u5b9e\u73b0\u4e8c\u8fde\u51fb\u7834\uff0c\u5965\u529b\u7ed9\uff01",
            barrage: ["\u5c0f\u89c4\u6a21\u56e2\u6218\uff0c\u4ee5\u6218\u517b\u6218", "\u5355\u6740\uff0c\u5175\u5203\u76f8\u63a5", "\u8d8a\u5854\u5f3a\u6740\uff0c\u9756\u5eb7\u803b\uff0c\u72b9\u672a\u96ea\uff1b\u81e3\u5b50\u6068\uff0c\u4f55\u65f6\u706d", "\u4e8c\u8fde\u51fb\u7834\uff0c\u72af\u6211\u5927\u5510\u8005\uff0c\u867d\u8fdc\u5fc5\u8bdb"]
        }], [{
            begin: "1.0",
            end: "14.0",
            tag: ["zhugeliang", "LargeScaleTeamFight", "TripleKill", "MultiPlayerKill", "FlashEscape"],
            caption: "\u8bf8\u845b\u4eae\u5728\u5927\u89c4\u6a21\u56e2\u6218\u4e2d\uff0c\u53c2\u4e0e\u591a\u4eba\u51fb\u6740\u654c\u4eba\uff0c\u95ea\u73b0\u9003\u751f\uff0c\u5b9e\u73b0\u4e09\u8fde\u51b3\u80dc\uff0c\u5948\u65af\uff01",
            barrage: ["\u5927\u89c4\u6a21\u56e2\u6218\uff0c\u9189\u5367\u6c99\u573a\u541b\u83ab\u7b11\uff0c\u53e4\u6765\u5f81\u6218\u51e0\u4eba\u56de", "\u591a\u6740\uff0c\u6467\u67af\u62c9\u673d", "\u95ea\u73b0\u9003\u751f\uff0c\u864e\u53e3\u4f59\u751f", "\u4e09\u8fde\u51b3\u80dc\uff0c\u79c0\u79c0\u79c0"]
        }]]
          , A = [{
            Harp: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Harp.wav",
            MusicBox: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_MusicBox.wav",
            Luan: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Luan.wav",
            Trombone: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Trombone.wav",
            AcousticGuitar: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_AcousticGuitar.wav",
            Clarine: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Clarine.wav",
            Cello: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Cello.wav",
            Sax: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Sax.wav",
            Flute: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Flute.wav",
            Pipa: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Pipa.wav",
            GuZheng: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_GuZheng.wav",
            Marimba: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Marimba.wav",
            Dulcimer: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Dulcimer.wav",
            Accordion: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample1/vdc8jeinput_Accordion.wav"
        }, {
            Harp: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Harp.wav",
            MusicBox: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_MusicBox.wav",
            Luan: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Luan.wav",
            Trombone: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Trombone.wav",
            AcousticGuitar: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_AcousticGuitar.wav",
            Clarine: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Clarine.wav",
            Cello: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Cello.wav",
            Sax: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Sax.wav",
            Flute: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Flute.wav",
            Pipa: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Pipa.wav",
            GuZheng: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_GuZheng.wav",
            Marimba: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Marimba.wav",
            Dulcimer: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Dulcimer.wav",
            Accordion: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample2/vs7uihinput_Accordion.wav"
        }, {
            Harp: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Harp.wav",
            MusicBox: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_MusicBox.wav",
            Luan: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Luan.wav",
            Trombone: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Trombone.wav",
            AcousticGuitar: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_AcousticGuitar.wav",
            Clarine: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Clarine.wav",
            Cello: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Cello.wav",
            Sax: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Sax.wav",
            Flute: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Flute.wav",
            Pipa: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Pipa.wav",
            GuZheng: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_GuZheng.wav",
            Marimba: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Marimba.wav",
            Dulcimer: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Dulcimer.wav",
            Accordion: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample3/0kxl2cinput_Accordion.wav"
        }, {
            Harp: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Harp.wav",
            MusicBox: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_MusicBox.wav",
            Luan: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Luan.wav",
            Trombone: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Trombone.wav",
            AcousticGuitar: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_AcousticGuitar.wav",
            Clarine: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Clarine.wav",
            Cello: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Cello.wav",
            Sax: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Sax.wav",
            Flute: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Flute.wav",
            Pipa: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Pipa.wav",
            GuZheng: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_GuZheng.wav",
            Marimba: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Marimba.wav",
            Dulcimer: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Dulcimer.wav",
            Accordion: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/instruments/sample4/b2dbcbinput_Accordion.wav"
        }]
          , M = [{
            keywords: {
                "\u5927\u7c7b": "\u5168\u8eab",
                "\u8170\u578b": "\u4e2d\u8170",
                "\u5e74\u4efd\u5b63\u8282": "\u79cb\u5b63",
                "\u56fe\u6848": "\u7eaf\u8272",
                "\u98ce\u683c": "\u901a\u52e4",
                "\u539a\u8584": "\u5e38\u89c4",
                "\u6750\u8d28": "\u6da4\u7eb6",
                "\u9762\u6599": "\u6da4\u7eb6",
                "\u8896\u957f": "\u957f\u8896",
                "\u9002\u7528\u5e74\u9f84": "25-34\u5468\u5c81",
                "\u670d\u88c5\u7248\u578b": "\u4fee\u8eab",
                "\u9886\u578b": "V\u9886",
                "\u5c0f\u7c7b": "\u98ce\u8863",
                "\u5ed3\u5f62": "X\u578b"
            },
            article: ["\u8fd9\u6b3e\u98ce\u8863\u91c7\u7528\u6da4\u7eb6\u9762\u6599\u8bbe\u8ba1\uff0c\u67d4\u8f6f\u8212\u9002\uff0c\u4eb2\u80a4\u900f\u6c14\u3002\u7eaf\u8272\u5e95\u8574\uff0c\u5f70\u663e\u4e2a\u6027\u3002v\u9886\u8bbe\u8ba1\uff0c\u51f8\u663e\u5973\u6027\u8116\u9888\u7ebf\u6761\u7f8e\u3002\u65f6\u5c1a\u957f\u8896\u8bbe\u8ba1\u4fee\u9970\u624b\u81c2\u66f2\u7ebf\uff0c\u663e\u7626\u663e\u9ad8\u3002\u9002\u5408\u901a\u52e4\u7a7f\u7740\u3002", "\u65e9\u6625\u4e5f\u9700\u8981\u4e00\u6b3e\u98ce\u8863\u6765\u4e86\uff0c\u901a\u52e4\u98ce\u7684\u5c0f\u59d0\u59d0\u4eec\u4e0d\u8981\u4e0d\u8981\u7684\uff0c\u6027\u4ef7\u6bd4\u8d85\u9ad8\u3002\u91c7\u7528\u4e86\u6da4\u7eb6\u9762\u6599\u7cbe\u88c1\u800c\u6210\uff0c\u4f7f\u5176\u4fdd\u6301\u633a\u62ec\u4e0d\u6613\u53d8\u5f62\u7684\u4f18\u70b9\u3002\u7b80\u6d01\u7684v\u9886\uff0c\u5c06\u8138\u578b\u4fee\u9970\u7684\u6070\u5230\u597d\u5904\u3002\u957f\u8896\u7684\u8bbe\u8ba1\uff0c\u65e2\u80fd\u663e\u9732\u51fa\u7ea4\u7ec6\u7684\u624b\u81c2\uff0c\u53c8\u6709\u663e\u7626\u663e\u9ad8\u7684\u6548\u679c\u3002\u5e38\u89c4\u7684h\u578b\u5ed3\u5f62\uff0c\u642d\u914d\u4e0a\u7eaf\u8272\u7684\u8863\u8eab\uff0c\u66f4\u662f\u5c06\u804c\u4e1a\u7684\u6c14\u573a\u70d8\u6258\u51fa\u6765\u3002", "\u8fd9\u6b3e\u98ce\u8863\u4e0d\u662f\u70c2\u5927\u8857\u7684\u98ce\u8863\uff0c\u800c\u662f\u4e0d\u518d\u662f\u666e\u901a\u7684\u98ce\u8863\u3002\u6da4\u7eb6\u7684\u6750\u8d28\u770b\u4e0a\u53bb\u624b\u611f\u987a\u6ed1\uff0c\u8d28\u5730\u67d4\u8f6f\uff0c\u5177\u6709\u826f\u597d\u7684\u5f39\u6027\uff0c\u7a7f\u8d77\u6765\u4e5f\u66f4\u52a0\u8212\u9002\u3002\u7eaf\u8272\u7684\u5916\u89c2\uff0c\u5e26\u7740\u51e0\u5206\u9ad8\u7ea7\u611f\u3002v\u9886\u7684\u9886\u53e3\uff0c\u5973\u4eba\u5473\u5341\u8db3\u3002\u957f\u8896\u7684\u7248\u578b\uff0c\u4e0d\u4ec5\u663e\u7626\uff0c\u8fd8\u80fd\u5851\u9020\u4f18\u96c5\u7684\u901a\u52e4\u3002", "\u8fd9\u6b3e\u4fee\u8eab\u800c\u901a\u52e4\u7684\u957f\u8896\u98ce\u8863\uff0c\u91c7\u7528\u4e86\u6da4\u7eb6\u7684\u9762\u6599\u5236\u6210\uff0c\u6bd4\u8d77\u5e38\u89c4\u7684\u7eaf\u8272\u98ce\u8863\uff0c\u8fd8\u662f\u6da4\u7eb6\u7684\u9762\u6599\uff0c\u4e0d\u4ec5\u7a7f\u7740\u8212\u9002\uff0c\u800c\u4e14\u8fd8\u80fd\u9732\u51fa\u7ea4\u7ec6\u7684\u624b\u8155\uff0c\u663e\u5f97\u901a\u52e4\u800c\u4f18\u96c5\u3002\u52a0\u4e0av\u9886\u7684\u8bbe\u8ba1\uff0c\u9732\u51fa\u8ff7\u4eba\u7684\u9501\u9aa8\uff0c\u589e\u6dfb\u5973\u4eba\u5473\uff0c\u5438\u775b\u52a8\u4eba\u3002", "\u98ce\u8863\u4e00\u76f4\u90fd\u662f\u663e\u7626\u7684\u4ee3\u540d\u8bcd\uff0c\u8fd9\u6b3e\u98ce\u8863\u5728\u8272\u5f69\u7684\u8fd0\u7528\u4e0b\u663e\u5f97\u5f88\u6709\u5c42\u6b21\u611f\u3002\u6da4\u7eb6\u9762\u6599\u624b\u611f\u7ec6\u817b\u987a\u6ed1\uff0c\u5177\u6709\u5f88\u597d\u7684\u5782\u5760\u611f\u548c\u5782\u5760\u611f\u3002\u5e38\u89c4\u7684v\u9886\u8bbe\u8ba1\u5728\u4fee\u9970\u8138\u578b\u7684\u540c\u65f6\uff0c\u4e5f\u66f4\u52a0\u5e72\u7ec3\u5229\u843d\u3002\u57fa\u7840\u7684\u7eaf\u8272\u957f\u8896\u8bbe\u8ba1\uff0c\u65b9\u4fbf\u7a7f\u7740\u3002\u901a\u52e4\u7684\u897f\u88c5\u9886\u8bbe\u8ba1\u663e\u5f97\u5229\u843d\u800c\u5e72\u7ec3\uff0c\u975e\u5e38\u9002\u5408\u901a\u52e4\u7a7f\u7740\u7684\u5973\u6027\u7a7f\u7740\u3002"]
        }, {
            keywords: {
                "\u5927\u7c7b": "\u5168\u8eab",
                "\u8170\u578b": "\u9ad8\u8170",
                "\u5e74\u4efd\u5b63\u8282": "\u79cb\u5b63",
                "\u56fe\u6848": "\u7eaf\u8272",
                "\u98ce\u683c": "\u901a\u52e4",
                "\u539a\u8584": "\u5e38\u89c4",
                "\u6750\u8d28": "\u68c9",
                "\u9762\u6599": "\u6da4\u7eb6",
                "\u8896\u957f": "\u957f\u8896",
                "\u9002\u7528\u5e74\u9f84": "25-34\u5468\u5c81",
                "\u670d\u88c5\u7248\u578b": "\u76f4\u7b52",
                "\u9886\u578b": "\u65b9\u9886",
                "\u5ed3\u5f62": "A\u578b",
                "\u5c0f\u7c7b": "\u886c\u886b"
            },
            article: ["\u7eaf\u8272\u7684\u886c\u886b\uff0c\u7b80\u6d01\u7684\u65b9\u9886\u957f\u8896\uff0c\u9002\u5408\u901a\u52e4\u7a7f\u7740\u3002\u5e38\u89c4\u7684\u65b9\u9886\u8bbe\u8ba1\uff0c\u7b80\u6d01\u5927\u65b9\u3002\u7cbe\u9009\u4f18\u8d28\u7684\u68c9\u6da4\u7eb6\u9762\u6599\uff0c\u624b\u611f\u67d4\u8f6f\u7ec6\u817b\uff0c\u4eb2\u80a4\u900f\u6c14\u3002", "\u8fd9\u6b3e\u886c\u886b\u91c7\u7528\u4f18\u8d28\u7684\u6da4\u7eb6\u9762\u6599\uff0c\u8d28\u5730\u67d4\u8f6f\uff0c\u7a7f\u7740\u8212\u9002\u900f\u6c14\u3002\u7eaf\u8272\u7684\u8272\u8c03\uff0c\u663e\u5f97\u66f4\u52a0\u9971\u6ee1\u6709\u578b\u3002\u901a\u52e4\u7684\u57fa\u7840\u6b3e\uff0c\u9002\u5408\u5404\u79cd\u573a\u5408\u7a7f\u7740\u3002\u7b80\u6d01\u7684\u65b9\u9886\u8bbe\u8ba1\uff0c\u7a7f\u7740\u66f4\u663e\u5e72\u7ec3\u3002\u957f\u8896\u7684\u8bbe\u8ba1\uff0c\u4e0d\u6311\u8eab\u6750\u3002", "\u8fd9\u6b3e\u886c\u886b\u91c7\u7528\u6da4\u7eb6\u53ca\u6da4\u7eb6\u9762\u6599\u5236\u4f5c\uff0c\u8d28\u5730\u67d4\u8f6f\u987a\u6ed1\uff0c\u5177\u6709\u8f83\u597d\u7684\u5782\u6027\uff0c\u7a7f\u7740\u8212\u9002\u4eb2\u80a4\u3002\u5e38\u89c4\u7684\u76f4\u7b52\u7248\u578b\u4e0d\u6311\u8eab\u6750\u3002\u7cbe\u81f4\u7684\u5c0f\u65b9\u9886\uff0c\u81ea\u7136\u7684\u4fee\u9970\u8116\u9888\u66f2\u7ebf\u3002\u7b80\u6d01\u7d20\u51c0\u7eaf\u8272\u4e0d\u5e26\u4e00\u4e1d\u6742\u8d28\uff0c\u4f4e\u8c03\u8010\u770b\u3002\u901a\u52e4\u4e0d\u62d6\u6c93\u3002", "\u8fd9\u6b3e\u5e38\u89c4\u6b3e\u7684\u957f\u8896\u886c\u886b\uff0c\u7eaf\u8272\u7684\u68c9\u8d28\u9762\u6599\uff0c\u4e0d\u540c\u989c\u8272\u53ef\u9009\uff0c\u901a\u52e4\u4e5f\u53ef\u7a7f\u3002\u91c7\u7528\u4e86\u6da4\u7eb6\u7684\u6750\u8d28\uff0c\u6da4\u7eb6\u6750\u8d28\uff0c\u624b\u611f\u975e\u5e38\u597d\uff0c\u7a7f\u7740\u8212\u9002\u53c8\u663e\u6c14\u8d28\u3002\u7b80\u6d01\u7684\u5c0f\u65b9\u9886\uff0c\u5b9e\u7a7f\u6027\u5f3a\u3002", "\u68c9\u8d28\u9762\u6599\u642d\u914d\u7565\u5fae\u901a\u52e4\u7684\u886c\u886b\uff0c\u663e\u5f97\u5f88\u6709\u5973\u4eba\u5473\uff0c\u7eaf\u8272\u4e0d\u5e26\u4efb\u4f55\u88c5\u9970\uff0c\u663e\u5f97\u66f4\u6709\u7279\u8272\uff0c\u5f70\u663e\u51fa\u9ad8\u7ea7\u7684\u65f6\u5c1a\u54c1\u5473\u3002\u65b9\u9886\u8bbe\u8ba1\uff0c\u7b80\u6d01\u5927\u65b9\u3002\u957f\u8896\u7684\u8bbe\u8ba1\uff0c\u80fd\u4ece\u89c6\u89c9\u4e0a\u63d0\u5347\u8170\u7ebf\uff0c\u66f4\u663e\u4fee\u957f\u3002\u6da4\u7eb6\u7684\u9762\u6599\uff0c\u624b\u611f\u987a\u6ed1\uff0c\u5782\u5760\u611f\u5f3a\u3002\u68c9\u8d28\u9762\u6599\uff0c\u7a7f\u7740\u8212\u9002\u4eb2\u80a4\u3002"]
        }, {
            keywords: {
                "\u5927\u7c7b": "\u5916\u5957",
                "\u8170\u578b": "\u4e2d\u8170",
                "\u5e74\u4efd\u5b63\u8282": "\u79cb\u5b63",
                "\u56fe\u6848": "\u7eaf\u8272",
                "\u8863\u957f": "\u77ed\u6b3e",
                "\u98ce\u683c": "\u901a\u52e4",
                "\u539a\u8584": "\u5e38\u89c4",
                "\u6750\u8d28": "\u68c9",
                "\u9762\u6599": "\u6da4\u7eb6",
                "\u8863\u95e8\u895f": "\u62c9\u94fe",
                "\u8896\u957f": "\u957f\u8896",
                "\u9002\u7528\u5e74\u9f84": "25-34\u5468\u5c81",
                "\u670d\u88c5\u7248\u578b": "\u76f4\u7b52",
                "\u9886\u578b": "\u5706\u9886"
            },
            article: ["\u8fd9\u6b3e\u901a\u52e4\u5e38\u89c4\u7684\u5916\u5957\uff0c\u91c7\u7528\u5e38\u89c4\u7684\u77ed\u6b3e\u8bbe\u8ba1\uff0c\u7a7f\u7740\u8d77\u6765\u4e0d\u4f1a\u663e\u5f97\u539a\u91cd\uff0c\u53cd\u800c\u66f4\u5177\u5b9e\u7a7f\u6027\u3002\u91c7\u7528\u6da4\u7eb6\u9762\u6599\uff0c\u8d28\u611f\u67d4\u8f6f\u7ec6\u817b\u3002\u5b83\u7684\u5706\u9886\u8bbe\u8ba1\uff0c\u5e76\u6ca1\u6709\u8fc7\u591a\u7684\u88c5\u9970\uff0c\u51f8\u663e\u4f18\u96c5\u6c14\u8d28\u3002\u7cbe\u81f4\u7684\u91d1\u5c5e\u62c9\u94fe\u8bbe\u8ba1\uff0c\u51f8\u663e\u8d28\u611f\u3002\u957f\u8896\u7684\u70b9\u775b\u4e4b\u7b14\u3002\u7d20\u96c5\u7684\u7eaf\u8272\u8bbe\u8ba1\uff0c\u8ba9\u8fd9\u6b3e\u4e0a\u8863\u5145\u6ee1\u9ad8\u7ea7\u611f\u3002\u77ed\u6b3e\u7248\u578b\u5851\u9020\u5927\u957f\u817f\u3002", "\u8fd9\u6b3e\u5e38\u89c4\u6b3e\u5f0f\u7684\u957f\u8896\u77ed\u6b3e\u5916\u5957\uff0c\u8863\u8eab\u91c7\u7528100%\u6da4\u7eb6\u9762\u6599\uff0c\u8d28\u5730\u67d4\u548c\uff0c\u7a7f\u7740\u8212\u9002\u4eb2\u80a4\uff0c\u5728\u7eaf\u8272\u8863\u8eab\u7684\u886c\u6258\u4e0b\uff0c\u4e5f\u589e\u6dfb\u4e86\u4e00\u4efd\u901a\u52e4\u6c14\u8d28\u3002\u7ecf\u5178\u7684\u5706\u9886\u8bbe\u8ba1\uff0c\u5e26\u6765\u8212\u9002\u7684\u7a7f\u7740\u4f53\u9a8c\uff0c\u8863\u8eab\u4e0a\u6c34\u6ef4\u5f62\u7684\u91d1\u5c5e\u62c9\u94fe\uff0c\u4e5f\u662f\u4e00\u5927\u4eae\u70b9\uff0c\u5c0f\u5de7\u7cbe\u81f4\u3002\u77ed\u6b3e\u7684\u957f\u5ea6\uff0c\u642d\u914d\u77ed\u6b3e\u7684\u7248\u578b\uff0c\u80fd\u591f\u5f88\u597d\u7684\u62c9\u957f\u8eab\u4f53\u6bd4\u4f8b\u3002", "\u8fd9\u6b3e\u7eaf\u8272\u77ed\u6b3e\u5916\u5957\uff0c\u6da4\u7eb6\u9762\u6599\uff0c\u8d28\u5730\u67d4\u987a\uff0c\u7ed9\u4eba\u65e0\u6bd4\u6e29\u6696\u7684\u5475\u62a4\u3002\u5706\u9886\u957f\u8896\uff0c\u5e38\u89c4\u8584\u539a\u9002\u4e2d\uff0c\u624b\u611f\u67d4\u8f6f\u7ec6\u817b\uff0c\u7eb9\u8def\u6e05\u6670\uff0c\u5e38\u89c4\u7684\u957f\u8896\uff0c\u642d\u914d\u8d77\u6765\u66f4\u6709\u6863\u6b21\uff0c\u5927\u65b9\u5f97\u4f53\uff0c\u65f6\u5c1a\u767e\u642d\u3002\u77ed\u6b3e\u7248\u578b\uff0c\u62c9\u957f\u8eab\u6750\u6bd4\u4f8b\uff0c\u901a\u52e4\u4f18\u96c5\u4e24\u4e0d\u8bef\u3002", "\u8fd9\u6b3e\u6765\u81eaBRAND\u7684\u7537\u58eb\u5916\u5957\uff0c\u91c7\u7528\u6da4\u7eb6\u9762\u6599\u5236\u4f5c\u800c\u6210\uff0c\u624b\u611f\u67d4\u8f6f\uff0c\u7a7f\u7740\u8212\u9002\u6709\u578b\uff1b\u5e38\u89c4\u7684\u5e38\u89c4\u6b3e\u8bbe\u8ba1\uff1b\u5de6\u8fb9\u8863\u95e8\u895f\u62c9\u94fe\uff0c\u7a7f\u8131\u65b9\u4fbf\uff0c\u7eaf\u8272\u4e5f\u4e0d\u6311\u4eba\uff1b\u5706\u9886\u7684\u8bbe\u8ba1\uff0c\u901a\u52e4\u4e5f\u662f\u5341\u5206\u7684\u6709\u6c14\u8d28\uff1b\u77ed\u6b3e\u7684\u9020\u578b\uff0c\u51f8\u663e\u4f60\u7684\u4f18\u96c5\u6c14\u8d28\uff0c\u77ed\u6b3e\u7684\u7248\u578b\u8bbe\u8ba1\uff0c\u5f88\u597d\u7684\u62c9\u957f\u8eab\u7ebf\uff0c\u8ba9\u4f60\u770b\u8d77\u6765\u66f4\u9ad8\u6311\u3002", "\u7eaf\u8272\u7684\u77ed\u6b3e\u5916\u5957\uff0c\u65e0\u8bba\u662f\u65e5\u5e38\u901a\u52e4\u8fd8\u662f\u65e5\u5e38\u7a7f\u642d\uff0c\u90fd\u80fd\u8f7b\u677ehold\u4f4f\u3002\u62c9\u94fe\u95e8\u895f\u7684\u8bbe\u8ba1\u3002\u62c9\u94fe\u7684\u95e8\u895f\u3002\u957f\u8896\u7684\u8bbe\u8ba1\uff0c\u65b9\u4fbf\u7a7f\u8131\u3002\u77ed\u6b3e\u7684\u8bbe\u8ba1\uff0c\u5f88\u597d\u7684\u4fee\u9970\u8eab\u6750\u6bd4\u4f8b\u3002\u7cbe\u9009\u4f18\u8d28\u7684\u68c9\u6c28\u6da4\u7eb6\u9762\u6599\uff0c\u624b\u611f\u67d4\u8f6f\u7ec6\u817b\uff0c\u4eb2\u80a4\u900f\u6c14\uff0c\u9002\u5408\u590f\u5b63\u7a7f\u7740\u3002"]
        }, {
            keywords: {
                "\u5927\u7c7b": "\u88e4\u5b50",
                "\u8170\u578b": "\u4e2d\u8170",
                "\u5e74\u4efd\u5b63\u8282": "\u51ac\u5b63",
                "\u56fe\u6848": "\u7eaf\u8272",
                "\u88e4\u957f": "\u957f\u88e4",
                "\u98ce\u683c": "\u901a\u52e4",
                "\u6b3e\u5f0f": "\u5957\u5934",
                "\u539a\u8584": "\u5e38\u89c4",
                "\u6750\u8d28": "\u6da4\u7eb6",
                "\u9762\u6599": "\u6da4\u7eb6",
                "\u9002\u7528\u5e74\u9f84": "25-34\u5468\u5c81",
                "\u670d\u88c5\u7248\u578b": "\u76f4\u7b52",
                "\u5c0f\u7c7b": "\u94c5\u7b14\u88d9",
                "\u8896\u957f": "\u957f\u8896"
            },
            article: ["\u7eaf\u8272\u5957\u5934\u7eaf\u8272\u5957\u5934\u7684\u8bbe\u8ba1\uff0c\u7eaf\u8272\u5957\u5934\u7684\u8bbe\u8ba1\uff0c\u901a\u52e4\u7a7f\u7740\u3002\u5957\u5934\u5f0f\u7684\u8bbe\u8ba1\uff0c\u7a7f\u8131\u65b9\u4fbf\u3002\u7b80\u6d01\u7684\u5957\u5934\u8bbe\u8ba1\uff0c\u65b9\u4fbf\u7a7f\u8131\u3002\u6da4\u7eb6\u9762\u6599\uff0c\u624b\u611f\u67d4\u8f6f\u7ec6\u817b\uff0c\u8d34\u8eab\u7a7f\u642d\u4e5f\u5f88\u8212\u9002\u3002", "\u7eaf\u8272\u5957\u5934\u7eaf\u8272\u5957\u5934\u7684\u8bbe\u8ba1\uff0c\u7eaf\u8272\u5957\u5934\u7684\u8bbe\u8ba1\uff0c\u901a\u52e4\u7a7f\u7740\u3002\u5957\u5934\u5f0f\u7684\u8bbe\u8ba1\uff0c\u7a7f\u8131\u65b9\u4fbf\u3002\u7b80\u6d01\u7684\u5957\u5934\u8bbe\u8ba1\uff0c\u65b9\u4fbf\u7a7f\u8131\u3002\u6da4\u7eb6\u9762\u6599\uff0c\u624b\u611f\u67d4\u8f6f\u7ec6\u817b\uff0c\u8d34\u8eab\u7a7f\u4e5f\u5f88\u8212\u9002\u3002", "\u5e38\u89c4\u6b3e\u7684\u5957\u5934\u957f\u8896\u76f4\u7b52\u94c5\u7b14\u88d9\u7248\u578b\uff0c\u7ed3\u5408\u6da4\u7eb6\u53ca\u6da4\u7eb6\u7684\u9762\u6599\uff0c\u4fee\u9970\u51fa\u7cbe\u81f4\u7684\u811a\u8e1d\u66f2\u7ebf\u3002\u8d34\u5408\u8eab\u4f53\u7684\u4e2d\u8170\u526a\u88c1\uff0c\u524d\u90e8\u4e2d\u8170\u6536\u7701\uff0c\u81ea\u7136\u8d34\u5408\u8170\u90e8\u66f2\u7ebf\u3002\u4ee5\u7eaf\u8272\u7684\u5916\u89c2\u5448\u73b0\uff0c\u7ed9\u4eba\u5e72\u51c0\u7eaf\u7cb9\u7684\u65f6\u9ae6\u611f\u3002", "\u7ecf\u5178\u7684\u7eaf\u8272\u4f11\u95f2\u88e4\uff0c\u7cbe\u9009\u4f18\u8d28\u6da4\u7eb6\u9762\u6599\uff0c\u8d28\u611f\u633a\u62ec\u6709\u578b\u3002\u94c5\u7b14\u88d9\u7684\u8bbe\u8ba1\u505a\u5de5\uff0c\u5728\u7ec6\u8282\u4e2d\u51f8\u663e\u54c1\u8d28\u3002\u5e38\u89c4\u7684\u957f\u8896\uff0c\u901a\u52e4\u53c8\u5f88\u6709\u8303\u3002\u4e2d\u8170\u7684\u8bbe\u8ba1\uff0c\u7a7f\u7740\u8212\u9002\u4e0d\u7d27\u7ef7\u3002\u5e38\u89c4\u7684\u76f4\u7b52\u7248\u578b\uff0c\u6ca1\u6709\u675f\u7f1a\u611f\uff0c\u8ba9\u4eba\u773c\u524d\u4e00\u4eae\uff0c\u5957\u5934\u7a7f\u8131\u4e5f\u5f88\u65b9\u4fbf\u3002", "\u7eaf\u8272\u6da4\u7eb6\u9762\u6599\u5236\u4f5c\uff0c\u624b\u611f\u8212\u9002\u67d4\u548c\uff0c\u901a\u52e4\u767e\u642d\uff0c\u540c\u65f6\u53c8\u6613\u642d\u914d\u3002\u5957\u5934\u7684\u8bbe\u8ba1\uff0c\u4e0d\u6311\u8eab\u6750\uff0c\u7a7f\u8131\u65b9\u4fbf\u3002\u5e38\u89c4\u7684\u76f4\u7b52\u957f\u8896\uff0c\u76f4\u7b52\u7684\u7248\u578b\uff0c\u9002\u5f53\u4fee\u9970\u4e86\u8eab\u6750\u6bd4\u4f8b\u3002\u4e2d\u8170\u7684\u8bbe\u8ba1\uff0c\u91c7\u7528\u4e2d\u8170\u7684\u9ad8\u5ea6\uff0c\u7a7f\u7740\u8212\u9002\u4e0d\u7d27\u7ef7\u3002"]
        }]
          , F = [{
            keywords: {
                "\u5927\u7c7b": "\u5916\u5957",
                "\u8170\u578b": "\u4e2d\u8170",
                "\u5e74\u4efd\u5b63\u8282": "\u79cb\u5b63",
                "\u56fe\u6848": "\u7eaf\u8272",
                "\u8863\u957f": "\u4e2d\u957f\u6b3e",
                "\u98ce\u683c": "\u901a\u52e4",
                "\u539a\u8584": "\u5e38\u89c4",
                "\u6750\u8d28": "\u9526\u7eb6",
                "\u9762\u6599": "\u68c9\u5e03",
                "\u8863\u95e8\u895f": "\u5355\u6392\u6263",
                "\u8896\u957f": "\u957f\u8896",
                "\u9002\u7528\u5e74\u9f84": "25-34\u5468\u5c81",
                "\u670d\u88c5\u7248\u578b": "\u76f4\u7b52",
                "\u9886\u578b": "\u7acb\u9886",
                "\u5c0f\u7c7b": "\u88e4\u5b50"
            },
            article: ["\u54e5\u5f1f\u7684\u4e2d\u957f\u6b3e\u5916\u5957\uff0c\u5bbd\u677e\u7684\u7248\u578b\uff0c\u4e0d\u4ec5\u80fd\u591f\u4fee\u9970\u8eab\u6750\uff0c\u7a7f\u7740\u66f4\u663e\u901a\u52e4\u5e72\u7ec3\u3002\u522b\u81f4\u7684\u7acb\u9886\u8bbe\u8ba1\uff0c\u642d\u914d\u540c\u8272\u7684\u5355\u6392\u6263\uff0c\u66f4\u662f\u4e3a\u6574\u4f53\u589e\u6dfb\u4e86\u4e0d\u5c11\u7f8e\u611f\uff0c\u7eaf\u8272\u7684\u8bbe\u8ba1\uff0c\u66f4\u662f\u80fd\u591f\u63d0\u5347\u6c14\u8d28\u3002\u5e38\u89c4\u7684\u957f\u8896\uff0c\u5bf9\u8eab\u6750\u7684\u5305\u5bb9\u6027\u66f4\u5927\uff0c\u7a7f\u7740\u8212\u9002\u3002", "\u7eaf\u8272\u82ce\u9ebb\u5236\u4f5c\u7684\u5916\u5957\uff0c\u5728\u901a\u52e4\u98ce\u4e5f\u662f\u975e\u5e38\u7684\u767e\u642d\u4e0d\u6311\u4eba\u3002\u8fd9\u6b3e\u5e38\u89c4\u4e2d\u957f\u6b3e\u7acb\u9886\u957f\u8896\u7684\u8bbe\u8ba1\uff0c\u5728\u5e38\u89c4\u7684\u88c1\u526a\u548c\u5bbd\u677e\u7248\u578b\u7684\u6f14\u7ece\u4e2d\uff0c\u4e5f\u91c7\u7528\u4e86\u5355\u6392\u6263\u7acb\u9886\u548c\u5355\u6392\u6263\u7684\u88c5\u9970\uff0c\u7a7f\u7740\u5341\u5206\u7684\u65f6\u9ae6\u663e\u6c14\u8d28\u3002", "\u8bbe\u8ba1\u611f\u5f88\u5f3a\u7684\u4e00\u6b3e\u4e2d\u957f\u6b3e\u5916\u5957\uff0c\u5bbd\u677e\u7684\u7248\u578b\u4e0d\u6311\u4eba\u7a7f\uff0c\u7eaf\u8272\u7684\u8bbe\u8ba1\u4e0e\u7acb\u9886\u7684\u642d\u914d\u4e5f\u662f\u5f88\u597d\u7684\uff0c\u6bd4\u5e38\u89c4\u7684\u957f\u8896\u5916\u5957\u591a\u4e86\u51e0\u5206\u901a\u52e4\u6c14\u8d28\u3002\u8863\u95e8\u895f\u91c7\u7528\u5355\u6392\u6263\u8bbe\u8ba1\uff0c\u65b9\u4fbf\u7a7f\u8131\u3002\u5e38\u89c4\u7684\u8896\u5b50\u8bbe\u8ba1\uff0c\u5e38\u89c4\u7684\u957f\u5ea6\uff0c\u4f18\u96c5\u968f\u6027\u3002", "\u6625\u5929\u662f\u7a7f\u5916\u5957\u7684\u5b63\u8282\uff0c\u53ef\u4ee5\u8bf4\u662f\u5e05\u6c14\u901a\u52e4\u98ce\u4e86\u3002BRAND\u8fd9\u6b3e\u5916\u5957\uff0c\u6574\u4f53\u91c7\u7528\u4e86\u5e38\u89c4\u504f\u5bbd\u677e\u7684\u7248\u578b\u526a\u88c1\uff0c\u7a7f\u51fa\u6175\u61d2\u968f\u6027\u4e4b\u611f\u3002\u800c\u5355\u6392\u6263\u7684\u8bbe\u8ba1\uff0c\u4e5f\u65b9\u4fbf\u65e5\u5e38\u7684\u7a7f\u642d\uff0c\u7eaf\u8272\u7684\u8863\u8eab\u66f4\u5177\u5c42\u6b21\u611f\u548c\u7f8e\u89c2\u6027\u3002\u7acb\u9886\u7684\u8bbe\u8ba1\uff0c\u603b\u662f\u80fd\u5f70\u663e\u51fa\u7b80\u7ec3\u7684\u611f\u89c9\u3002\u800c\u4e2d\u957f\u6b3e\u7684\u76f4\u7b52\u7248\u578b\uff0c\u8fd8\u6709\u957f\u8896\u7684\u8bbe\u8ba1\uff0c\u5c55\u73b0\u51fa\u98d8\u9038\u7684\u611f\u89c9\u3002", "\u8fd9\u6b3e\u7eaf\u8272\u7684\u4e2d\u957f\u6b3e\u5916\u5957\uff0c\u5bbd\u677e\u7684\u7248\u578b\uff0c\u5bf9\u8eab\u6750\u7684\u5305\u5bb9\u6027\u5f88\u597d\u3002\u7acb\u9886\u7684\u8bbe\u8ba1\uff0c\u7b80\u6d01\u5927\u65b9\uff0c\u5355\u6392\u6263\u7684\u8bbe\u8ba1\uff0c\u5e38\u89c4\u957f\u8896\u7684\u8bbe\u8ba1\uff0c\u901a\u52e4\u767e\u642d\u3002\u4e2d\u957f\u7684\u7248\u578b\uff0c\u5f88\u597d\u7684\u4fee\u9970\u4e86\u8eab\u6750\u6bd4\u4f8b\uff0c\u8ba9\u4f60\u8f7b\u677e\u7a7f\u51fa\u9ad8\u6311\u7684\u8eab\u6750\u3002"]
        }, {
            keywords: {
                "\u5927\u7c7b": "\u5185\u642d",
                "\u8170\u578b": "\u81ea\u7136\u8170",
                "\u5e74\u4efd\u5b63\u8282": "\u79cb\u5b63",
                "\u56fe\u6848": "\u7eaf\u8272",
                "\u8863\u957f": "\u5e38\u89c4\u6b3e",
                "\u98ce\u683c": "\u901a\u52e4",
                "\u539a\u8584": "\u5e38\u89c4",
                "\u6750\u8d28": "\u6da4\u7eb6",
                "\u9762\u6599": "\u6da4\u7eb6",
                "\u8863\u95e8\u895f": "\u5957\u5934",
                "\u8896\u957f": "\u65e0\u8896",
                "\u9002\u7528\u5e74\u9f84": "18-24\u5468\u5c81",
                "\u670d\u88c5\u7248\u578b": "\u5bbd\u677e",
                "\u9886\u578b": "\u8fde\u5e3d",
                "\u5c0f\u7c7b": "\u5939\u514b"
            },
            article: ["\u6da4\u7eb6\u9762\u6599\u67d4\u8f6f\u7ec6\u817b\uff0c\u5177\u6709\u4e0d\u9519\u7684\u4fdd\u6696\u6548\u679c\uff0c\u5960\u5b9a\u4e86\u5973\u6027\u7684\u6e29\u67d4\u6c14\u606f\u3002\u7eaf\u8272\u7b80\u6d01\u5927\u6c14\uff0c\u6700\u80fd\u51f8\u663e\u8be5\u6709\u7684\u9ad8\u7ea7\u611f\u3002\u901a\u52e4\u4f46\u4e0d\u5938\u5f20\u5f88\u6709\u8d28\u611f\uff0c\u7acb\u4f53\u7684\u526a\u88c1\u8ba9\u8fd9\u6b3e\u4e0a\u8863\u77ac\u95f4\u6253\u52a8\u4e86\u4f60\u7684\u5fc3\u3002\u5706\u9886\u8bbe\u8ba1\u7b26\u5408\u73b0\u4ee3\u5973\u6027\u7684\u804c\u4e1a\u6c14\u8d28\u3002\u7ecf\u5178\u5e38\u89c4\u7684\u5957\u5934\u8bbe\u8ba1\uff0c\u7a7f\u8131\u65b9\u4fbf\uff0c\u4e0d\u663e\u81c3\u80bf\u3002"]
        }, {
            keywords: {
                "\u5927\u7c7b": "\u5916\u5957",
                "\u8170\u578b": "\u81ea\u7136\u8170",
                "\u5e74\u4efd\u5b63\u8282": "\u51ac\u5b63",
                "\u56fe\u6848": "\u7eaf\u8272",
                "\u8863\u957f": "\u4e2d\u957f\u6b3e",
                "\u98ce\u683c": "\u901a\u52e4",
                "\u539a\u8584": "\u5e38\u89c4",
                "\u6750\u8d28": "\u6da4\u7eb6",
                "\u9762\u6599": "\u6da4\u7eb6",
                "\u8863\u95e8\u895f": "\u5355\u6392\u6263",
                "\u8896\u957f": "\u957f\u8896",
                "\u9002\u7528\u5e74\u9f84": "25-34\u5468\u5c81",
                "\u670d\u88c5\u7248\u578b": "\u5bbd\u677e",
                "\u9886\u578b": "\u7ffb\u9886",
                "\u5c0f\u7c7b": "\u5939\u514b"
            },
            article: ["\u4e2d\u957f\u6b3e\u7684\u98ce\u8863\u5916\u5957\uff0c\u6ca1\u6709\u592a\u591a\u7684\u675f\u7f1a\u611f\uff0c\u91c7\u7528\u6da4\u7eb6\u7684\u9762\u6599\uff0c\u589e\u52a0\u4e86\u5c42\u6b21\u611f\u548c\u8bbe\u8ba1\u611f\uff0c\u8ba9\u4eba\u773c\u524d\u4e00\u4eae\uff0c\u4ece\u89c6\u89c9\u4e0a\u6253\u9020\u9ec4\u91d1\u6bd4\u4f8b\u7684\u8eab\u6750\u3002\u7b80\u6d01\u7684\u7eaf\u8272\u8863\u8eab\uff0c\u7b80\u6d01\u5927\u65b9\u53c8\u4e0d\u5931\u5973\u4eba\u5473\u3002\u4e2d\u957f\u6b3e\u5f0f\u7684\u7ffb\u9886\uff0c\u5355\u6392\u6263\u88c5\u9970\uff0c\u589e\u52a0\u901a\u52e4\u98ce\uff0c\u4e5f\u53ef\u4ee5\u655e\u5f00\u7a7f\u7740\u3002", "\u8fd9\u6b3e\u7eaf\u8272\u7684\u98ce\u8863\u5916\u5957\uff0c\u4e2d\u957f\u6b3e\u7684\u7248\u578b\uff0c\u5bf9\u8eab\u6750\u6709\u5f88\u597d\u7684\u5305\u5bb9\u6027\u3002\u7ecf\u5178\u7684\u7ffb\u9886\u548c\u5355\u6392\u6263\u7684\u8bbe\u8ba1\uff0c\u5f70\u663e\u51fa\u5e72\u7ec3\u901a\u52e4\u7684\u6c14\u8d28\u3002\u5e38\u89c4\u957f\u8896\u7684\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u4fee\u9970\u624b\u81c2\u7684\u66f2\u7ebf\uff0c\u8ba9\u7a7f\u7740\u66f4\u52a0\u7684\u8212\u9002\u81ea\u5728\u3002\u7ecf\u5178\u7684\u5c0f\u7ffb\u9886\uff0c\u5355\u6392\u6263\u7684\u95e8\u895f\uff0c\u7a7f\u8131\u65b9\u4fbf\u3002", "\u8fd9\u6b3e\u4e2d\u957f\u6b3e\u98ce\u8863\u5916\u5957\uff0c\u91c7\u7528\u4e86\u6da4\u7eb6\u9762\u6599\u7684\u8bbe\u8ba1\uff0c\u901a\u52e4\u611f\u5341\u8db3\u3002\u7ffb\u9886\u7684\u9886\u53e3\uff0c\u6709\u5f88\u6709\u8d28\u611f\u7684\u611f\u89c9\u3002\u957f\u8896\u7684\u8bbe\u8ba1\uff0c\u5e26\u6709\u5355\u6392\u6263\u7684\u88c5\u9970\uff0c\u53c8\u663e\u5f97\u6709\u5c42\u6b21\u611f\u3002\u7eaf\u8272\u51c0\u9762\u7684\u7248\u578b\uff0c\u8ba9\u4eba\u773c\u524d\u4e00\u4eae\u3002", "\u901a\u52e4\u6b3e\u7684\u98ce\u8863\u5916\u5957\uff0c\u9009\u7528\u6da4\u7eb6\u9762\u6599\u5236\u4f5c\u800c\u6210\uff0c\u5728\u7eaf\u8272\u7684\u8863\u8eab\u5916\u9762\uff0c\u6709\u7740\u5fae\u5fae\u7684\u6da4\u7eb6\u6750\u8d28\uff0c\u89e6\u611f\u8212\u9002\uff0c\u4e0a\u8eab\u633a\u62ec\u6709\u578b\u3002\u5e38\u89c4\u7684\u7ffb\u9886\u8bbe\u8ba1\uff0c\u5f70\u663e\u4f18\u96c5\u6c14\u8d28\u3002\u98d8\u9038\u7684\u957f\u8896\uff0c\u52a0\u4e0a\u5355\u6392\u6263\u7684\u70b9\u7f00\uff0c\u66f4\u6dfb\u4fcf\u76ae\u611f\u3002\u4e2d\u957f\u6b3e\u7684\u76f4\u7b52\u7248\u578b\uff0c\u4fee\u9970\u817f\u578b\u7684\u540c\u65f6\uff0c\u5e26\u6765\u59a5\u59a5\u7684\u65f6\u5c1a\u6c14\u8d28\u3002", "\u8fd9\u6b3e\u4e2d\u957f\u6b3e\u7684\u98ce\u8863\u5916\u5957\uff0c\u91c7\u7528\u4e86\u6da4\u7eb6\u7684\u9762\u6599\uff0c\u5176\u5728\u633a\u62ec\u7684\u7248\u578b\u4e4b\u4e0a\u3002\u7eaf\u8272\u7684\u8863\u8eab\uff0c\u8ba9\u4eba\u773c\u524d\u4e00\u4eae\u3002\u53ef\u4ee5\u901a\u52e4\u7684\u901a\u52e4\u98ce\u8303\uff0c\u4e5f\u80fd\u8f7b\u677ehold\u4f4f\u6574\u4f53\u9020\u578b\u3002\u7ecf\u5178\u7684\u7ffb\u9886\u914d\u5408\u5355\u6392\u6263\u95e8\u895f\uff0c\u65b9\u4fbf\u4e86\u7a7f\u8131\u3002\u5c0f\u5fc3\u673a\u7684\u8759\u8760\u957f\u8896\u8bbe\u8ba1\uff0c\u5c06\u8863\u6446\u9690\u85cf\u8d77\u6765\uff0c\u51f8\u663e\u7ea4\u7ec6\u7684\u624b\u81c2\u3002"]
        }, {
            keywords: {
                "\u5927\u7c7b": "\u5916\u5957",
                "\u8170\u578b": "\u81ea\u7136\u8170",
                "\u5e74\u4efd\u5b63\u8282": "\u51ac\u5b63",
                "\u56fe\u6848": "\u6761\u7eb9",
                "\u8863\u957f": "\u77ed\u6b3e",
                "\u98ce\u683c": "\u901a\u52e4",
                "\u539a\u8584": "\u5e38\u89c4",
                "\u6750\u8d28": "\u9526\u7eb6",
                "\u9762\u6599": "\u6da4\u7eb6",
                "\u8863\u95e8\u895f": "\u5355\u6392\u6263",
                "\u8896\u957f": "\u77ed\u8896",
                "\u9002\u7528\u5e74\u9f84": "25-34\u5468\u5c81",
                "\u670d\u88c5\u7248\u578b": "\u4fee\u8eab",
                "\u9886\u578b": "V\u9886",
                "\u5c0f\u7c7b": "\u5939\u514b"
            },
            article: ["\u8fd9\u6b3e\u5e38\u89c4\u6b3e\u5f0f\u7684\u77ed\u6b3e\u4fee\u8eab\u77ed\u6b3e\u5916\u5957\uff0c\u91c7\u7528\u6da4\u7eb6\u9762\u6599\u5236\u4f5c\u800c\u6210\uff0c\u8d34\u8eab\u7a7f\u7740\u66f4\u52a0\u663e\u7626\uff0c\u77ed\u6b3e\u7684\u957f\u5ea6\u4e5f\u9002\u5408\u901a\u52e4\u7a7f\u7740\u3002\u7ecf\u5178\u7684v\u9886\u8bbe\u8ba1\uff0c\u6070\u5230\u597d\u5904\u7684\u9732\u51fa\u9501\u9aa8\u7684\u7f8e\u611f\u3002\u7b80\u6d01\u5927\u65b9\u7684\u77ed\u8896\u8bbe\u8ba1\uff0c\u642d\u914d\u4e0a\u91d1\u5c5e\u5355\u6392\u6263\u88c5\u9970\uff0c\u6253\u7834\u7eaf\u8272\u7684\u5355\u8c03\uff0c\u53c8\u4e0d\u5931\u4f18\u96c5\u6c14\u8d28\u3002", "\u901a\u52e4\u5e38\u89c4\u7684\u77ed\u8896\u5916\u5957\uff0c\u91c7\u7528\u72ec\u7279\u7684\u6da4\u7eb6\u6750\u8d28\uff0c\u4fee\u8eab\u53c8\u663e\u7626\u3002\u6df1v\u9886\u7684\u8bbe\u8ba1\uff0c\u5728\u89c6\u89c9\u4e0a\u66f4\u662f\u9884\u9632\u8d70\u5149\u3002\u6781\u7b80\u7684\u5355\u6392\u6263\u70b9\u7f00\u5176\u4e2d\uff0c\u6253\u7834\u7eaf\u8272\u8863\u8eab\u7684\u5355\u8c03\u611f\u3002\u77ed\u6b3e\u7248\u578b\uff0c\u62c9\u957f\u8170\u7ebf\uff0c\u4f18\u5316\u8eab\u6750\u6bd4\u4f8b\uff0c\u66f4\u663e\u9ad8\u6311\uff0c\u5c3d\u663e\u5973\u6027\u5e72\u7ec3\u6c14\u8d28\u3002", "\u77ed\u6b3e\u4fee\u8eab\u7684\u77ed\u6b3e\u5916\u5957\uff0c\u65f6\u5c1a\u5229\u843d\u7684\u77ed\u6b3e\u7248\u578b\uff0c\u4e0d\u4ec5\u7a7f\u7740\u8212\u9002\uff0c\u66f4\u9002\u5e94\u4e86\u5973\u6027\u7684\u901a\u52e4\u9700\u6c42\u3002\u65f6\u9ae6v\u9886\uff0c\u51f8\u663e\u5973\u6027\u7684\u67d4\u7f8e\u6c14\u8d28\uff0c\u66f4\u6709\u5438\u775b\u4eae\u70b9\u3002\u95e8\u895f\u5355\u6392\u6263\u5f00\u5408\uff0c\u7a7f\u8131\u65b9\u4fbf\u3002\u8212\u9002\u7684\u6da4\u7eb6\u9762\u6599\u4e0e\u5e38\u89c4\u7684\u77ed\u8896\u88c1\u526a\uff0c\u4e5f\u80fd\u80dc\u4efb\u65e5\u5e38\u7684\u72ec\u7acb\u642d\u914d\u3002", "BRAND\u5e26\u6765\u7684\u8fd9\u6b3e\u5916\u5957\uff0c\u91c7\u7528\u6da4\u7eb6\u6750\u8d28\u4e3a\u57fa\u7840\uff0c\u4f7f\u5176\u7a7f\u7740\u8212\u9002\u4eb2\u80a4\uff1b\u800c\u67d4\u548c\u7684\u7eaf\u8272\u8272\u8c03\uff0c\u65e2\u6253\u7834\u4e86\u7eaf\u8272\u8c03\u7684\u5355\u8c03\u611f\uff0c\u53c8\u5e26\u6765\u4e86\u4e00\u4e1d\u6210\u719f\u7a33\u91cd\u7684\u611f\u89c9\uff1b\u77ed\u6b3e\u4fee\u8eab\u7684\u7248\u578b\uff0c\u642d\u914d\u77ed\u6b3e\u7684\u9020\u578b\uff0c\u5c06\u5973\u6027\u7684\u66fc\u5999\u8eab\u59ff\u548c\u65e5\u5e38\u901a\u52e4\u7684\u4e00\u9762\u8fdb\u884c\u4e86\u6539\u826f\uff1b\u7ecf\u5178\u7684v\u9886\u548c\u5355\u6392\u6263\u7684\u7ed3\u5408\uff0c\u5219\u6253\u7834\u4e86\u5e38\u89c4\u7684\u8bbe\u8ba1\uff0c\u8d77\u5230\u4e86\u88c5\u9970\u7684\u4f5c\u7528\u3002", "\u8fd9\u6b3e\u7eaf\u8272\u77ed\u6b3e\u5916\u5957\uff0c\u91c7\u7528\u4f18\u8d28\u7684\u6da4\u7eb6\u9762\u6599\u5236\u4f5c\uff0c\u7a7f\u7740\u67d4\u8f6f\u8212\u9002\u3002v\u9886\u7684\u8bbe\u8ba1\uff0c\u4f18\u96c5\u5927\u65b9\u3002\u5355\u6392\u6263\u7684\u95e8\u895f\u8bbe\u8ba1\uff0c\u65b9\u4fbf\u7a7f\u8131\u3002\u77ed\u8896\u7684\u8bbe\u8ba1\uff0c\u7a7f\u7740\u66f4\u52a0\u7684\u8212\u9002\u81ea\u5728\u3002\u7ecf\u5178\u7684v\u9886\u8bbe\u8ba1\uff0c\u4fee\u9970\u8116\u9888\u7684\u66f2\u7ebf\u3002\u5e38\u89c4\u901a\u52e4\u7684\u7248\u578b\uff0c\u9002\u5408\u5404\u79cd\u8eab\u6750\u7a7f\u7740\u3002\u4fee\u8eab\u7684\u7248\u578b\u3002"]
        }]
          , z = [[{
            tagType: "game_ad_mood",
            tag: "\u8f7b\u5feb",
            probility: "0.1983492523431778"
        }, {
            tagType: "game_ad_strength",
            tag: "\u5f3a",
            probility: "0.9232717752456665"
        }, {
            tagType: "game_ad_genre",
            tag: "\u7535\u5b50",
            probility: "0.9709121584892273"
        }], [{
            tagType: "game_ad_mood",
            tag: "\u6050\u6016",
            probility: "0.956697940826416"
        }, {
            tagType: "game_ad_strength",
            tag: "\u5f3a",
            probility: "0.9812937378883362"
        }, {
            tagType: "game_ad_genre",
            tag: "\u53f2\u8bd7",
            probility: "0.9619895815849304"
        }], [{
            tagType: "game_ad_mood",
            tag: "\u60b2\u4f24",
            probility: "0.4405220150947571"
        }, {
            tagType: "game_ad_strength",
            tag: "\u4e2d",
            probility: "0.988643229007721"
        }, {
            tagType: "game_ad_genre",
            tag: "\u4ed9\u4fa0\u7384\u5e7b",
            probility: "0.9629619717597961"
        }], [{
            tagType: "game_ad_mood",
            tag: "\u5b89\u9759",
            probility: "0.7847247123718262"
        }, {
            tagType: "game_ad_strength",
            tag: "\u4e2d",
            probility: "0.7440571784973145"
        }, {
            tagType: "game_ad_genre",
            tag: "\u6d41\u884c",
            probility: "0.8254172205924988"
        }]]
          , P = function(e) {
            return !!/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg|webp))/i.exec(e)
        };
        var J = n(169)
          , q = new (n.n(J).a)({
            Domain: "smartcontent-source-1257411467.cos.accelerate.myqcloud.com",
            getAuthorization: function() {
                var e = Object(c.a)(r.a.mark((function e(t, n) {
                    var a, c, s;
                    return r.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                i().post(I, {
                                    env: w
                                });
                            case 2:
                                if (a = e.sent,
                                c = a.data,
                                s = c && c.credentials,
                                c && s) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", console.error("COS credentials invalid"));
                            case 7:
                                n({
                                    TmpSecretId: s.tmpSecretId,
                                    TmpSecretKey: s.tmpSecretKey,
                                    XCosSecurityToken: s.sessionToken,
                                    StartTime: c.startTime,
                                    ExpiredTime: c.expiredTime
                                });
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
        });
        function L(e, t) {
            return B.apply(this, arguments)
        }
        function B() {
            return (B = Object(c.a)(r.a.mark((function e(t, n) {
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise((function(e, a) {
                                q.putObject({
                                    Bucket: "smartcontent-source-1257411467",
                                    Region: "ap-beijing",
                                    Key: n,
                                    Body: t
                                }, (function(t) {
                                    t ? a(new Error(t.message)) : e()
                                }
                                ))
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function H(e) {
            return U.apply(this, arguments)
        }
        function U() {
            return (U = Object(c.a)(r.a.mark((function e(t) {
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise((function(e, n) {
                                q.getObjectUrl({
                                    Bucket: "smartcontent-source-1257411467",
                                    Region: "ap-beijing",
                                    Key: t,
                                    Sign: !0
                                }, (function(t, a) {
                                    t || !a ? n(new Error((null === t || void 0 === t ? void 0 : t.message) || "Get Cos URL Error")) : e(a.Url)
                                }
                                ))
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function D(e, t) {
            return G.apply(this, arguments)
        }
        function G() {
            return (G = Object(c.a)(r.a.mark((function e(t, n) {
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise((function(e, a) {
                                q.sliceUploadFile({
                                    Bucket: "smartcontent-source-1257411467",
                                    Region: "ap-beijing",
                                    Key: n,
                                    Body: t
                                }, (function(t) {
                                    t ? a(new Error(t.message)) : e()
                                }
                                ))
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var W = function(e, t) {
            var n = null
              , a = ""
              , r = 0;
            return (t = t || {}).newlineAfterColonIfBeforeBraceOrBracket = !0 === t.newlineAfterColonIfBeforeBraceOrBracket,
            t.spaceAfterColon = !1 !== t.spaceAfterColon,
            "string" !== typeof e || (e = JSON.parse(e)),
            (e = JSON.stringify(e)) ? (n = /([{}])/g,
            e = e.replace(n, "\r\n$1\r\n"),
            n = /([[\]])/g,
            e = e.replace(n, "\r\n$1\r\n"),
            n = /(,)/g,
            e = e.replace(n, "$1\r\n"),
            n = /(\r\n\r\n)/g,
            e = e.replace(n, "\r\n"),
            n = /\r\n,/g,
            e = e.replace(n, ","),
            t.newlineAfterColonIfBeforeBraceOrBracket || (n = /:\r\n\{/g,
            e = e.replace(n, ":{"),
            n = /:\r\n\[/g,
            e = e.replace(n, ":[")),
            t.spaceAfterColon && (n = /:/g,
            e = e.replace(n, ": ")),
            e.split("\r\n").forEach((function(e, t, n) {
                var c = 0
                  , s = 0
                  , o = "";
                for (e.match(/\{$/) || e.match(/\[$/) ? s = 1 : e.match(/\}/) || e.match(/\]/) ? 0 !== r && (r -= 1) : s = 0,
                c = 0; c < r; c++)
                    o += "    ";
                a += o + e + "\r\n",
                r += s
            }
            )),
            a) : ""
        }
    },
    101: function(e, t, n) {
        "use strict";
        (function(e) {
            var a, r = n(3), c = n(4), s = n(0), o = n.n(s), l = n(177), i = n(5), u = n.n(i), m = n(15), p = n(12), d = (n(192),
            n(47)), b = n(1), v = "".concat(b.d, "/assets/image/logo.png"), g = {
                smartWriter: [{
                    path: "imageDescription"
                }, {
                    path: "imageCaption"
                }, {
                    path: "videoDescription"
                }, {
                    path: "videoCaption"
                }, {
                    path: "wzry"
                }, {
                    path: "lyrics"
                }, {
                    path: "ocr",
                    tag: "Beta"
                }],
                smartProducer: [{
                    path: "videoMusic"
                }, {
                    path: "musicVideo"
                }, {
                    path: "football"
                }, {
                    path: "smartCover"
                }, {
                    path: "removeWatermark",
                    tag: "Beta"
                }, {
                    path: "imageEnhancement"
                }],
                smartMusician: [{
                    path: "genreTransform",
                    tag: "Beta"
                }, {
                    path: "instrumentTransform"
                }, {
                    path: "seperateTransform"
                }, {
                    path: "musicBeat"
                }, {
                    path: "musicHighlight"
                }, {
                    path: "audioTagger",
                    tag: "Beta"
                }]
            };
            t.a = function() {
                var t = Object(l.a)()
                  , n = t.t
                  , i = t.i18n
                  , b = Object(d.a)().isAuthenticated
                  , f = Object(s.useCallback)((function(e) {
                    i.changeLanguage(e)
                }
                ), [i])
                  , j = Object(m.h)()
                  , h = Object(s.useState)("20vw")
                  , O = Object(c.a)(h, 2)
                  , E = O[0]
                  , x = O[1]
                  , k = Object(s.useState)("")
                  , y = Object(c.a)(k, 2)
                  , N = y[0]
                  , C = y[1]
                  , w = Object(s.useState)(!1)
                  , S = Object(c.a)(w, 2)
                  , I = S[0]
                  , R = S[1]
                  , T = e.from(localStorage.getItem("config") || "", "base64").toString("ascii")
                  , V = JSON.parse(T || "{}").ban || []
                  , _ = Object(s.useCallback)((function(e, t) {
                    var n = e.target
                      , a = n.offsetLeft + n.clientWidth / 2;
                    x("calc(".concat(a, "px - 50%)")),
                    C(t),
                    R(!0)
                }
                ), [])
                  , A = Object(s.useCallback)((function() {
                    R(!0)
                }
                ), [])
                  , M = Object(s.useCallback)((function() {
                    R(!1)
                }
                ), []);
                return o.a.createElement("header", {
                    className: u()("Header", {
                        expended: I
                    })
                }, o.a.createElement("div", {
                    className: "Header-wrapper"
                }, o.a.createElement("div", {
                    className: "Header-head"
                }, o.a.createElement("a", {
                    className: "Header-logo",
                    href: "https://multimedia.tencent.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, o.a.createElement("img", {
                    src: v,
                    alt: "Tencent Media Experience"
                })), "|", o.a.createElement("h1", {
                    className: "Header-title"
                }, o.a.createElement(p.b, {
                    className: "Header-title-link",
                    to: "/"
                }, n(a || (a = Object(r.a)(["smartContent"])))))), b ? o.a.createElement("nav", {
                    className: u()("Header-nav")
                }, Object.keys(g).map((function(e) {
                    return o.a.createElement("button", {
                        key: e,
                        className: u()("Header-nav-holder", {
                            active: e === N,
                            hidden: V.includes("all") || V.includes(e)
                        }),
                        onMouseEnter: function(t) {
                            return _(t, e)
                        },
                        onMouseLeave: M
                    }, n(e))
                }
                ))) : null, o.a.createElement("div", {
                    className: "Header-lang"
                }, o.a.createElement("button", {
                    className: u()("Header-lang-btn", {
                        active: "zh" === i.language
                    }),
                    onClick: function() {
                        return f("zh")
                    }
                }, "\u4e2d"), o.a.createElement("span", {
                    className: "Header-lang-divider"
                }, "/"), o.a.createElement("button", {
                    className: u()("Header-lang-btn", {
                        active: "en" === i.language
                    }),
                    onClick: function() {
                        return f("en")
                    }
                }, "EN"))), o.a.createElement("div", {
                    className: "Header-submenu",
                    onMouseEnter: A,
                    onMouseLeave: M
                }, o.a.createElement("div", {
                    className: "Header-submenu-content",
                    style: {
                        transform: "translateX(".concat(E, ")")
                    }
                }, o.a.createElement("div", {
                    className: u()("Header-submenu-inner", {
                        active: "smartWriter" === N
                    })
                }, o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("h5", {
                    className: u()("Header-submenu-title", {
                        hidden: V.includes("all") || V.includes("imageDir")
                    })
                }, n("imageDir")), o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/imageCaption" === j.pathname,
                        hidden: V.includes("all") || V.includes("imageCaption")
                    }),
                    to: "/imageCaption"
                }, n("imageCaption")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/ocr" === j.pathname,
                        hidden: V.includes("all") || V.includes("ocr")
                    }),
                    to: "/ocr"
                }, n("ocr"), o.a.createElement("span", {
                    className: "Header-submenu-link-tag"
                }, "Beta")))), o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("h5", {
                    className: u()("Header-submenu-title", {
                        hidden: V.includes("all") || V.includes("videoDir")
                    })
                }, n("videoDir")), o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/videoCaption" === j.pathname,
                        hidden: V.includes("all") || V.includes("videoCaption")
                    }),
                    to: "/videoCaption"
                }, n("videoCaption")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/wzry" === j.pathname,
                        hidden: V.includes("all") || V.includes("wzry")
                    }),
                    to: "/wzry"
                }, n("wzry")))), o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("h5", {
                    className: u()("Header-submenu-title", {
                        hidden: V.includes("all") || V.includes("musicDir")
                    })
                }, n("musicDir")), o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/lyrics" === j.pathname,
                        hidden: V.includes("all") || V.includes("lyrics")
                    }),
                    to: "/lyrics"
                }, n("lyrics"))))), o.a.createElement("div", {
                    className: u()("Header-submenu-inner", {
                        active: "smartProducer" === N
                    })
                }, o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/videoMusic" === j.pathname,
                        hidden: V.includes("all") || V.includes("videoMusic")
                    }),
                    to: "/videoMusic"
                }, n("videoMusic")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/musicVideo" === j.pathname,
                        hidden: V.includes("all") || V.includes("musicVideo")
                    }),
                    to: "/musicVideo"
                }, n("musicVideo")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/football" === j.pathname,
                        hidden: V.includes("all") || V.includes("football")
                    }),
                    to: "/football"
                }, n("football")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/gva" === j.pathname,
                        hidden: V.includes("all") || V.includes("gva")
                    }),
                    to: "/gva"
                }, n("gva")))), o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/videoCrop" === j.pathname,
                        hidden: V.includes("all") || V.includes("videoCrop")
                    }),
                    to: "/videoCrop"
                }, n("videoCrop")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/smartCover" === j.pathname,
                        hidden: V.includes("all") || V.includes("smartCover")
                    }),
                    to: "/smartCover"
                }, n("smartCover")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/removeWatermark" === j.pathname,
                        hidden: V.includes("all") || V.includes("removeWatermark")
                    }),
                    to: "/removeWatermark"
                }, n("removeWatermark"), o.a.createElement("span", {
                    className: "Header-submenu-link-tag"
                }, "Beta")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/smartVlog" === j.pathname,
                        hidden: V.includes("all") || V.includes("smartVlog")
                    }),
                    to: "/smartVlog"
                }, n("smartVlog")))), o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/imageScene" === j.pathname,
                        hidden: V.includes("all") || V.includes("imageScene")
                    }),
                    to: "/imageScene"
                }, n("imageScene")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/imageObject" === j.pathname,
                        hidden: V.includes("all") || V.includes("imageObject")
                    }),
                    to: "/imageObject"
                }, n("imageObject")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/videoScene" === j.pathname,
                        hidden: V.includes("all") || V.includes("videoScene")
                    }),
                    to: "/videoScene"
                }, n("videoScene")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/videoObject" === j.pathname,
                        hidden: V.includes("all") || V.includes("videoObject")
                    }),
                    to: "/videoObject"
                }, n("videoObject")))), o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/imageEnhancement" === j.pathname,
                        hidden: V.includes("all") || V.includes("imageEnhancement")
                    }),
                    to: "/imageEnhancement"
                }, n("imageEnhancement"))))), o.a.createElement("div", {
                    className: u()("Header-submenu-inner", {
                        active: "smartMusician" === N
                    })
                }, o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/genreTransform" === j.pathname,
                        hidden: V.includes("all") || V.includes("genreTransform")
                    }),
                    to: "/genreTransform"
                }, n("genreTransform"), o.a.createElement("span", {
                    className: "Header-submenu-link-tag"
                }, "Beta")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/instrumentTransform" === j.pathname,
                        hidden: V.includes("all") || V.includes("instrumentTransform")
                    }),
                    to: "/instrumentTransform"
                }, n("instrumentTransform")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/seperateTransform" === j.pathname,
                        hidden: V.includes("all") || V.includes("seperateTransform")
                    }),
                    to: "/seperateTransform"
                }, n("seperateTransform")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/audioTagger" === j.pathname,
                        hidden: V.includes("all") || V.includes("audioTagger")
                    }),
                    to: "/audioTagger"
                }, n("audioTagger"), o.a.createElement("span", {
                    className: "Header-submenu-link-tag"
                }, "Beta")))), o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("h5", {
                    className: u()("Header-submenu-title", {
                        hidden: V.includes("all") || V.includes("BeatDir")
                    })
                }, n("BeatDir")), o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/musicBeat" === j.pathname,
                        hidden: V.includes("all") || V.includes("musicBeat")
                    }),
                    to: "/musicBeat"
                }, n("musicBeat")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/musicHighlight" === j.pathname,
                        hidden: V.includes("all") || V.includes("musicHighlight")
                    }),
                    to: "/musicHighlight"
                }, n("musicHighlight")))), o.a.createElement("div", {
                    className: u()("Header-submenu-block")
                }, o.a.createElement("nav", {
                    className: "Header-submenu-list"
                }, o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/imageComposition" === j.pathname,
                        hidden: V.includes("all") || V.includes("imageComposition")
                    }),
                    to: "/imageComposition"
                }, n("imageComposition")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/videoComposition" === j.pathname,
                        hidden: V.includes("all") || V.includes("videoComposition")
                    }),
                    to: "/videoComposition"
                }, n("videoComposition")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/singingConversion" === j.pathname,
                        hidden: V.includes("all") || V.includes("singingConversion")
                    }),
                    to: "/singingConversion"
                }, n("singingConversion")), o.a.createElement(p.b, {
                    className: u()("Header-submenu-link", {
                        active: "/voiceCloning" === j.pathname,
                        hidden: V.includes("all") || V.includes("voiceCloning")
                    }),
                    to: "/voiceCloning"
                }, n("voiceCloning"))))))))
            }
        }
        ).call(this, n(17).Buffer)
    },
    14: function(e, t, n) {
        "use strict";
        n.d(t, "g", (function() {
            return S
        }
        )),
        n.d(t, "x", (function() {
            return U
        }
        )),
        n.d(t, "n", (function() {
            return ee
        }
        )),
        n.d(t, "E", (function() {
            return pe
        }
        )),
        n.d(t, "A", (function() {
            return Me
        }
        )),
        n.d(t, "c", (function() {
            return Je
        }
        )),
        n.d(t, "d", (function() {
            return Ye
        }
        )),
        n.d(t, "o", (function() {
            return vt
        }
        )),
        n.d(t, "p", (function() {
            return yt
        }
        )),
        n.d(t, "e", (function() {
            return Mt
        }
        )),
        n.d(t, "l", (function() {
            return Ut
        }
        )),
        n.d(t, "t", (function() {
            return tn
        }
        )),
        n.d(t, "q", (function() {
            return bn
        }
        )),
        n.d(t, "z", (function() {
            return Vn
        }
        )),
        n.d(t, "f", (function() {
            return An
        }
        )),
        n.d(t, "b", (function() {
            return Mn.a
        }
        )),
        n.d(t, "m", (function() {
            return Fn
        }
        )),
        n.d(t, "v", (function() {
            return Zn
        }
        )),
        n.d(t, "r", (function() {
            return sa
        }
        )),
        n.d(t, "s", (function() {
            return ha
        }
        )),
        n.d(t, "w", (function() {
            return Ta
        }
        )),
        n.d(t, "a", (function() {
            return Ua
        }
        )),
        n.d(t, "i", (function() {
            return tr
        }
        )),
        n.d(t, "h", (function() {
            return br
        }
        )),
        n.d(t, "y", (function() {
            return Cr
        }
        )),
        n.d(t, "u", (function() {
            return _r
        }
        )),
        n.d(t, "k", (function() {
            return ec
        }
        )),
        n.d(t, "j", (function() {
            return dc
        }
        )),
        n.d(t, "C", (function() {
            return Nc
        }
        )),
        n.d(t, "B", (function() {
            return ms
        }
        )),
        n.d(t, "D", (function() {
            return vs
        }
        ));
        var a = n(3)
          , r = n(2)
          , c = n.n(r)
          , s = n(4)
          , o = n(7)
          , l = n(0)
          , i = n.n(l)
          , u = n(8)
          , m = n.n(u)
          , p = n(5)
          , d = n.n(p)
          , b = n(177)
          , v = (n(364),
        n(6))
          , g = n(1);
        "".concat(g.d, "/assets/image/back11.jpg"),
        m.a.CancelToken,
        v.n.TabPane,
        g.h[0].keywords,
        g.h[0].article,
        g.h[1].keywords,
        g.h[1].article,
        g.h[2].keywords,
        g.h[2].article,
        g.h[3].keywords,
        g.h[3].article;
        n(365);
        var f, j, h, O, E, x = "".concat(g.d, "/assets/image/back1.jpg"), k = m.a.CancelToken, y = v.n.TabPane, N = [{
            url: "".concat(g.d, "/assets/caption/sample1.jpg"),
            jobId: "1",
            isSample: !0,
            result: ["\u4e00\u4e2a\u7a7f\u7740\u77ed\u8896\u4e0a\u8863\u7684\u7537\u4eba\u5728\u8fd0\u52a8\u573a\u4e0a\u6253\u7f51\u7403", "A man on a tennis court swinging a tennis racket."]
        }, {
            url: "".concat(g.d, "/assets/caption/sample2.jpg"),
            jobId: "2",
            isSample: !0,
            result: ["\u4e00\u7fa4\u4eba\u5728\u9910\u5385\u91cc\u4ea4\u8c08\u3002", "A group of people sitting around a table with wine glasses."]
        }, {
            url: "".concat(g.d, "/assets/caption/sample3.jpg"),
            jobId: "3",
            isSample: !0,
            result: ["\u4e00\u4e2a\u98de\u673a\u98de\u8d77\u6765\u7684\u98de\u673a\u3002", "A large passenger jet flying through the air."]
        }, {
            url: "".concat(g.d, "/assets/caption/sample4.jpg"),
            jobId: "4",
            isSample: !0,
            result: ["\u4e00\u4e2a\u7537\u4eba\u5728\u73a9\u6ed1\u677f\u3002", "A man riding a skateboard down a ramp."]
        }];
        function C(e) {
            return w.apply(this, arguments)
        }
        function w() {
            return (w = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/picture/caption/").concat(t.size, "-").concat(t.name.replace(".jpeg", ".jpg")),
                            e.next = 3,
                            Object(g.x)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                visualCaption: 2
                            });
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var S = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("imageCaption").t
              , n = Object(l.useState)("chinese")
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(N.length)
              , w = Object(s.a)(p, 2)
              , S = w[0]
              , I = w[1]
              , R = Object(l.useState)(N[0].url)
              , T = Object(s.a)(R, 2)
              , V = T[0]
              , _ = T[1]
              , A = Object(l.useRef)(N[0].url)
              , M = Object(l.useState)(N[0].jobId)
              , F = Object(s.a)(M, 2)
              , z = F[0]
              , P = F[1]
              , J = Object(l.useState)(!1)
              , q = Object(s.a)(J, 2)
              , L = q[0]
              , B = q[1]
              , H = Object(l.useRef)(N[0].jobId)
              , U = Object(l.useState)()
              , D = Object(s.a)(U, 2)
              , G = D[0]
              , W = D[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, m, p, d;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = N.find((function(e) {
                                        return e.jobId === z
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", W(a.result));
                                case 5:
                                    return H.current === z && W(void 0),
                                    r = k.source(),
                                    t.push(r),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(z, r.token);
                                case 11:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? (a.result = [null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.visualCaption) || void 0 === u ? void 0 : u.chinese, null === (m = l.outputs[0].smartContentResult) || void 0 === m || null === (p = m.visualCaption) || void 0 === p ? void 0 : p.english],
                                    H.current === z && W(a.result)) : l && (4 === l.state ? H.current === z && alert("Job Failed") : [1, 2].includes(l.state) && H.current === z && setTimeout(n, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (d = t.indexOf(r)) > -1 && t.splice(d, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                m("chinese"),
                z && n()
            }
            ), [z, G]);
            var K = Object(l.useCallback)((function(e) {
                P(e.jobId),
                H.current = e.jobId,
                _(e.url),
                A.current = e.url,
                B(!!e.uploading)
            }
            ), [])
              , Z = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = N.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return K(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                N.push(o),
                                _(o.url),
                                A.current = o.url,
                                P(""),
                                W(void 0),
                                B(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                C(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) && (o.jobId = u.createJobResponse.job.id,
                                A.current === o.url && P(u.createJobResponse.job.id),
                                H.current = o.jobId),
                                B(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [K])
              , $ = Object(l.useCallback)((function(e) {
                var t = N[e];
                V !== t.url && K(t)
            }
            ), [V, K])
              , X = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = N[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                V === n.url && K(N[e - 1]),
                N.splice(e, 1),
                I(S - 1)
            }
            ), [V, K, S]);
            return i.a.createElement("div", {
                className: "ImageCaption"
            }, i.a.createElement("div", {
                className: "ImageCaption-banner",
                style: {
                    backgroundImage: "url(".concat(x, ")")
                }
            }, i.a.createElement("div", {
                className: "ImageCaption-banner-content"
            }, i.a.createElement("h2", {
                className: "ImageCaption-banner-title"
            }, t(f || (f = Object(a.a)(["imageCaption"])))), i.a.createElement("p", {
                className: "ImageCaption-banner-description"
            }, t(j || (j = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "ImageCaption-demo"
            }, i.a.createElement("div", {
                className: "ImageCaption-main"
            }, i.a.createElement("div", {
                className: "ImageCaption-preview"
            }, i.a.createElement("img", {
                src: V,
                alt: "Error URL"
            })), i.a.createElement("div", {
                className: "ImageCaption-result"
            }, i.a.createElement("div", {
                className: "tab-wrapper"
            }, i.a.createElement(v.n, {
                activeKey: u,
                onChange: m
            }, i.a.createElement(y, {
                title: t(h || (h = Object(a.a)(["chinese"]))),
                paneKey: "chinese"
            }, i.a.createElement("div", {
                className: "tab-pane"
            }, i.a.createElement(v.e, {
                result: G ? G[0] || "Error" : void 0
            }))), i.a.createElement(y, {
                title: t(O || (O = Object(a.a)(["english"]))),
                paneKey: "english"
            }, i.a.createElement("div", {
                className: "tab-pane"
            }, i.a.createElement(v.e, {
                result: G ? G[1] || "Error" : void 0
            }))))), i.a.createElement("div", {
                className: d()("ImageCaption-result-placeholder", {
                    loading: L
                })
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "ImageCaption-result-placeholder-status"
            }, t(E || (E = Object(a.a)(["tip.uploadingPicture"]))))))), i.a.createElement("div", {
                className: "ImageCaption-sample"
            }, i.a.createElement("ul", {
                className: "ImageCaption-sample-list"
            }, N.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("ImageCaption-sample-item", {
                        active: a === V
                    }),
                    onClick: function() {
                        return $(t)
                    }
                }, i.a.createElement("img", {
                    src: a,
                    alt: "demo".concat(t)
                }), n ? null : i.a.createElement("span", {
                    className: "ImageDescription-sample-item-delete",
                    onClick: function(e) {
                        return X(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("ImageCaption-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: Z,
                accept: "image/jpg"
            }))))))
        };
        n(366),
        "".concat(g.d, "/assets/image/back10.jpg"),
        m.a.CancelToken,
        v.n.TabPane,
        "".concat(g.d, "/assets/videoDescription/sample1.mp4"),
        g.p[0],
        "".concat(g.d, "/assets/videoDescription/sample2.mp4"),
        g.p[1],
        "".concat(g.d, "/assets/videoDescription/sample3.mp4"),
        g.p[2],
        "".concat(g.d, "/assets/videoDescription/sample4.mp4"),
        g.p[3];
        n(367);
        var I, R, T, V, _, A = "".concat(g.d, "/assets/image/back2.jpg"), M = m.a.CancelToken, F = v.n.TabPane, z = [{
            url: "".concat(g.d, "/assets/caption/sample1.mp4"),
            jobId: "1",
            isSample: !0,
            result: ["\u4e00\u4e2a\u5973\u4eba\u5728\u7528\u624b\u6307\u6309\u6469\u7740\u8138\u90e8\uff0c\u7136\u540e\u7528\u624b\u6307\u5728\u8138\u4e0a\u6d82\u62b9\u3002", "A woman is demonstrating how to apply cream to her face."]
        }, {
            url: "".concat(g.d, "/assets/caption/sample2.mp4"),
            jobId: "2",
            isSample: !0,
            result: ["\u4e24\u4e2a\u7537\u4eba\u5728\u821e\u53f0\u4e0a\u8868\u6f14\uff0c\u5176\u4e2d\u4e00\u4e2a\u4eba\u5728\u8df3\u821e\uff0c\u65c1\u8fb9\u6709\u4eba\u5728\u89c2\u770b\u3002", "Two men are dancing in front of a crowd of people."]
        }, {
            url: "".concat(g.d, "/assets/caption/sample3.mp4"),
            jobId: "3",
            isSample: !0,
            result: ["\u4e00\u4e2a\u4eba\u4ece\u9ad8\u5904\u7684\u9ad8\u5904\u5f80\u4e0b\u8df3\uff0c\u7136\u540e\u4ece\u9ad8\u5904\u5f80\u4e0b\u6ed1\u3002", "A person is climbing down a tall building with a rope."]
        }, {
            url: "".concat(g.d, "/assets/caption/sample4.mp4"),
            jobId: "4",
            isSample: !0,
            result: ["\u4e24\u4e2a\u7537\u5b69\u5728\u63b0\u624b\u8155\uff0c\u5176\u4e2d\u4e00\u4e2a\u4eba\u5728\u65c1\u8fb9\u770b\u3002", "Two young men arm wrestle while a woman talks to them."]
        }];
        function P(e) {
            return J.apply(this, arguments)
        }
        function J() {
            return (J = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/caption/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                visualCaption: 2
                            });
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var q, L, B, H, U = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("videoCaption").t
              , n = Object(l.useState)("chinese")
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(z.length)
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useState)(z[0].url)
              , E = Object(s.a)(O, 2)
              , x = E[0]
              , k = E[1]
              , y = Object(l.useRef)(z[0].url)
              , N = Object(l.useState)(z[0].jobId)
              , C = Object(s.a)(N, 2)
              , w = C[0]
              , S = C[1]
              , J = Object(l.useState)(!1)
              , q = Object(s.a)(J, 2)
              , L = q[0]
              , B = q[1]
              , H = Object(l.useRef)(z[0].jobId)
              , U = Object(l.useState)()
              , D = Object(s.a)(U, 2)
              , G = D[0]
              , W = D[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, m, p, d;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = z.find((function(e) {
                                        return e.jobId === w
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", W(a.result));
                                case 5:
                                    return H.current === w && W(void 0),
                                    r = M.source(),
                                    t.push(r),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(w, r.token);
                                case 11:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? (a.result = [null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.visualCaption) || void 0 === u ? void 0 : u.chinese, null === (m = l.outputs[0].smartContentResult) || void 0 === m || null === (p = m.visualCaption) || void 0 === p ? void 0 : p.english],
                                    H.current === w && W(a.result)) : l && (4 === l.state ? H.current === w && alert("Job Failed") : [1, 2].includes(l.state) && H.current === w && setTimeout(n, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (d = t.indexOf(r)) > -1 && t.splice(d, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                m("chinese"),
                w && n()
            }
            ), [w]);
            var K = Object(l.useCallback)((function(e) {
                S(e.jobId),
                H.current = e.jobId,
                k(e.url),
                y.current = e.url,
                B(!!e.uploading)
            }
            ), [])
              , Z = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = z.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return K(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                z.push(o),
                                k(o.url),
                                y.current = o.url,
                                S(""),
                                W(void 0),
                                B(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                P(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) && (o.jobId = u.createJobResponse.job.id,
                                y.current === o.url && S(u.createJobResponse.job.id),
                                H.current = o.jobId),
                                B(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [K])
              , $ = Object(l.useCallback)((function(e) {
                var t = z[e];
                x !== t.url && K(t)
            }
            ), [x, K])
              , X = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = z[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                x === n.url && K(z[e - 1]),
                z.splice(e, 1),
                h(j - 1)
            }
            ), [x, K, j]);
            return i.a.createElement("div", {
                className: "VideoCaption"
            }, i.a.createElement("div", {
                className: "VideoCaption-banner",
                style: {
                    backgroundImage: "url(".concat(A, ")")
                }
            }, i.a.createElement("div", {
                className: "VideoCaption-banner-content"
            }, i.a.createElement("h2", {
                className: "VideoCaption-banner-title"
            }, t(I || (I = Object(a.a)(["videoCaption"])))), i.a.createElement("p", {
                className: "VideoCaption-banner-description"
            }, t(R || (R = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "VideoCaption-demo"
            }, i.a.createElement("div", {
                className: "VideoCaption-main"
            }, i.a.createElement("div", {
                className: "VideoCaption-preview"
            }, i.a.createElement("video", {
                src: x,
                controls: !0,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                controlsList: "nodownload"
            })), i.a.createElement("div", {
                className: "VideoCaption-result"
            }, i.a.createElement("div", {
                className: "tab-wrapper"
            }, i.a.createElement(v.n, {
                activeKey: u,
                onChange: m
            }, i.a.createElement(F, {
                title: t(T || (T = Object(a.a)(["chinese"]))),
                paneKey: "chinese"
            }, i.a.createElement("div", {
                className: "tab-pane"
            }, i.a.createElement(v.e, {
                result: G ? G[0] : void 0
            }))), i.a.createElement(F, {
                title: t(V || (V = Object(a.a)(["english"]))),
                paneKey: "english"
            }, i.a.createElement("div", {
                className: "tab-pane"
            }, i.a.createElement(v.e, {
                result: G ? G[1] : void 0
            }))))), i.a.createElement("div", {
                className: d()("VideoCaption-result-placeholder", {
                    loading: L
                })
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "VideoCaption-result-placeholder-status"
            }, t(_ || (_ = Object(a.a)(["tip.uploadingVideo"]))))))), i.a.createElement("div", {
                className: "VideoCaption-sample"
            }, i.a.createElement("ul", {
                className: "VideoCaption-sample-list"
            }, z.map((function(e, t) {
                var n = e.isSample
                  , a = e.url
                  , r = e.poster;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("VideoCaption-sample-item", {
                        active: a === x
                    }),
                    onClick: function() {
                        return $(t)
                    }
                }, i.a.createElement("video", {
                    poster: r,
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "VideoCaption-sample-item-delete",
                    onClick: function(e) {
                        return X(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("VideoCaption-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: Z,
                accept: "video/mp4"
            }))))))
        }, D = (n(368),
        "".concat(g.d, "/assets/image/back14.jpg")), G = m.a.CancelToken, W = [{
            id: 0,
            jobId: "1",
            isSample: !0,
            result: g.j[0]
        }, {
            id: 1,
            jobId: "2",
            isSample: !0,
            result: g.j[1]
        }, {
            id: 2,
            jobId: "3",
            isSample: !0,
            result: g.j[2]
        }, {
            id: 3,
            jobId: "4",
            isSample: !0,
            result: g.j[3]
        }];
        function K(e, t) {
            return Z.apply(this, arguments)
        }
        function Z() {
            return (Z = Object(o.a)(c.a.mark((function e(t, n) {
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(g.s)({
                                sourceData: t
                            }, {
                                lyricsGenerator: {
                                    option: 3,
                                    pattern: [n || "AAABBBCCC"]
                                }
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var $, X, Q, Y, ee = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("lyrics").t
              , n = Object(l.useState)(W.length)
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)("")
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useState)(W[0].jobId)
              , E = Object(s.a)(O, 2)
              , x = E[0]
              , k = E[1]
              , y = Object(l.useRef)(W[0].jobId)
              , N = Object(l.useState)()
              , C = Object(s.a)(N, 2)
              , w = C[0]
              , S = C[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = W.find((function(e) {
                                        return e.jobId === x
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", S(a.result));
                                case 5:
                                    return y.current === x && S(void 0),
                                    r = G.source(),
                                    t.push(r),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(x, r.token);
                                case 11:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? (a.result = null === (i = l.outputs[0].smartContentResult) || void 0 === i ? void 0 : i.lyricsGenerator,
                                    y.current === x && S(a.result)) : l && (4 === l.state ? y.current === x && alert("Job Failed") : [1, 2].includes(l.state) && y.current === x && setTimeout(n, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (u = t.indexOf(r)) > -1 && t.splice(u, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                x && n()
            }
            ), [x]);
            var I = Object(l.useCallback)((function(e) {
                k(e.jobId),
                y.current = e.jobId
            }
            ), [])
              , R = Object(l.useCallback)(Object(o.a)(c.a.mark((function e() {
                var t, n, a, r;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (j && /^[\u4e00-\u9fa5]{1,20}$/.test(j)) {
                                e.next = 3;
                                break
                            }
                            return alert("Invalid Input"),
                            e.abrupt("return");
                        case 3:
                            return t = {
                                id: W[W.length - 1].id + 1,
                                jobId: ""
                            },
                            W.push(t),
                            k(""),
                            S(void 0),
                            e.prev = 7,
                            h(""),
                            e.next = 11,
                            K(j);
                        case 11:
                            r = e.sent,
                            (null === (n = r.createJobResponse) || void 0 === n || null === (a = n.job) || void 0 === a ? void 0 : a.id) && (t.jobId = r.createJobResponse.job.id,
                            k(r.createJobResponse.job.id),
                            y.current = t.jobId),
                            e.next = 18;
                            break;
                        case 15:
                            e.prev = 15,
                            e.t0 = e.catch(7),
                            console.log(e.t0);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[7, 15]])
            }
            ))), [j])
              , T = Object(l.useCallback)((function(e) {
                var t = e.target.value;
                h(t)
            }
            ), [])
              , V = Object(l.useCallback)((function(e) {
                var t = W[e];
                y.current !== t.jobId && I(t)
            }
            ), [I])
              , _ = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = W[e];
                n.source && n.source.cancel("Cancel Upload"),
                y.current === n.jobId && I(W[e - 1]),
                W.splice(e, 1),
                m(u - 1)
            }
            ), [I, u]);
            return i.a.createElement("div", {
                className: "Lyrics"
            }, i.a.createElement("div", {
                className: "Lyrics-banner",
                style: {
                    backgroundImage: "url(".concat(D, ")")
                }
            }, i.a.createElement("div", {
                className: "Lyrics-banner-content"
            }, i.a.createElement("h2", {
                className: "Lyrics-banner-title"
            }, t(q || (q = Object(a.a)(["lyrics"])))), i.a.createElement("p", {
                className: "Lyrics-banner-description"
            }, t(L || (L = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "Lyrics-demo"
            }, i.a.createElement("div", {
                className: "Lyrics-main"
            }, i.a.createElement("div", {
                className: "Lyrics-result"
            }, i.a.createElement("div", {
                className: "tab-wrapper"
            }, i.a.createElement("div", {
                className: "tab-pane"
            }, i.a.createElement(v.j, {
                result: w ? w[0] : void 0
            }))))), i.a.createElement("div", {
                className: "Lyrics-sample"
            }, i.a.createElement("ul", {
                className: "Lyrics-sample-list"
            }, W.map((function(e, n) {
                return i.a.createElement("li", {
                    key: e.jobId,
                    className: d()("Lyrics-sample-item", {
                        active: e.jobId === y.current
                    }),
                    onClick: function() {
                        return V(n)
                    }
                }, "".concat(t("demo")).concat(e.id + 1), e.isSample ? null : i.a.createElement("span", {
                    className: "Lyrics-sample-item-delete",
                    onClick: function(e) {
                        return _(n, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("Lyrics-sample-item", "Lyrics-inputer")
            }, i.a.createElement("textarea", {
                className: "Lyrics-input-textarea",
                value: j,
                onChange: T,
                placeholder: t(B || (B = Object(a.a)(["tip.inputKeyword"]))),
                style: {
                    resize: "none"
                }
            }), i.a.createElement("div", {
                className: "Lyrics-inputer-bottom"
            }, i.a.createElement("div", {
                className: "Lyrics-inputer-bottom-wrapper"
            }, i.a.createElement(v.d, {
                onClick: R
            }, t(H || (H = Object(a.a)(["btn.upload"])))))))))))
        }, te = (n(369),
        "".concat(g.d, "/assets/image/back12.jpg")), ne = m.a.CancelToken, ae = [{
            url: "".concat(g.d, "/assets/wzry/sample1.mp4"),
            jobId: "1",
            isSample: !0,
            result: g.q[0]
        }, {
            url: "".concat(g.d, "/assets/wzry/sample2.mp4"),
            jobId: "2",
            isSample: !0,
            result: g.q[1]
        }, {
            url: "".concat(g.d, "/assets/wzry/sample3.mp4"),
            jobId: "3",
            isSample: !0,
            result: g.q[2]
        }, {
            url: "".concat(g.d, "/assets/wzry/sample4.mp4"),
            jobId: "4",
            isSample: !0,
            result: g.q[3]
        }];
        function re(e) {
            return ce.apply(this, arguments)
        }
        function ce() {
            return (ce = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/wzry/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                gameCaption: {
                                    intervals: void 0
                                }
                            });
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var se, oe, le, ie, ue, me, pe = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("wzry").t
              , n = Object(l.useState)(ae.length)
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(ae[0].url)
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useRef)(ae[0].url)
              , E = Object(l.useState)(ae[0].jobId)
              , x = Object(s.a)(E, 2)
              , k = x[0]
              , y = x[1]
              , N = Object(l.useState)(!1)
              , C = Object(s.a)(N, 2)
              , w = C[0]
              , S = C[1]
              , I = Object(l.useRef)(ae[0].jobId)
              , R = Object(l.useState)()
              , T = Object(s.a)(R, 2)
              , V = T[0]
              , _ = T[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = ae.find((function(e) {
                                        return e.jobId === k
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", _(a.result));
                                case 5:
                                    return I.current === k && _(void 0),
                                    r = ne.source(),
                                    t.push(r),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(k, r.token);
                                case 11:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? (a.result = (null === (i = l.outputs[0].smartContentResult) || void 0 === i ? void 0 : i.gameCaption) || [],
                                    I.current === k && _(a.result)) : l && (4 === l.state ? I.current === k && alert("Job Failed") : [1, 2].includes(l.state) && I.current === k && setTimeout(n, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (u = t.indexOf(r)) > -1 && t.splice(u, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                k && n()
            }
            ), [k]);
            var A = Object(l.useCallback)((function(e) {
                y(e.jobId),
                I.current = e.jobId,
                h(e.url),
                O.current = e.url,
                S(!!e.uploading)
            }
            ), [])
              , M = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = ae.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return A(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                ae.push(o),
                                h(o.url),
                                O.current = o.url,
                                y(""),
                                _(void 0),
                                S(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                re(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) && (o.jobId = u.createJobResponse.job.id,
                                O.current === o.url && y(u.createJobResponse.job.id),
                                I.current = o.jobId),
                                S(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [A])
              , F = Object(l.useCallback)((function(e) {
                var t = ae[e];
                j !== t.url && A(t)
            }
            ), [j, A])
              , z = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = ae[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                j === n.url && A(ae[e - 1]),
                ae.splice(e, 1),
                m(u - 1)
            }
            ), [j, A, u]);
            return i.a.createElement("div", {
                className: "Wzry"
            }, i.a.createElement("div", {
                className: "Wzry-banner",
                style: {
                    backgroundImage: "url(".concat(te, ")")
                }
            }, i.a.createElement("div", {
                className: "Wzry-banner-content"
            }, i.a.createElement("h2", {
                className: "Wzry-banner-title"
            }, t($ || ($ = Object(a.a)(["wzry"])))), i.a.createElement("p", {
                className: "Wzry-banner-description"
            }, t(X || (X = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "Wzry-demo"
            }, i.a.createElement("p", null, "* ".concat(t(Q || (Q = Object(a.a)(["supportsTip"]))))), i.a.createElement("div", {
                className: "Wzry-main"
            }, i.a.createElement("div", {
                className: "Wzry-preview"
            }, i.a.createElement("video", {
                src: j,
                controls: !0,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                controlsList: "nodownload"
            })), i.a.createElement("div", {
                className: "Wzry-result"
            }, i.a.createElement("div", {
                className: "tab-wrapper"
            }, i.a.createElement("div", {
                className: "tab-pane"
            }, i.a.createElement(v.p, {
                results: V
            }))), i.a.createElement("div", {
                className: d()("Wzry-result-placeholder", {
                    loading: w
                })
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "Wzry-result-placeholder-status"
            }, t(Y || (Y = Object(a.a)(["tip.uploadingVideo"]))))))), i.a.createElement("div", {
                className: "Wzry-sample"
            }, i.a.createElement("ul", {
                className: "Wzry-sample-list"
            }, ae.map((function(e, t) {
                var n = e.isSample
                  , a = e.url
                  , r = e.poster;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("Wzry-sample-item", {
                        active: a === j
                    }),
                    onClick: function() {
                        return F(t)
                    }
                }, i.a.createElement("video", {
                    poster: r,
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "Wzry-sample-item-delete",
                    onClick: function(e) {
                        return z(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("Wzry-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: M,
                accept: "video/mp4"
            }))))))
        }, de = (n(370),
        "".concat(g.d, "/assets/image/back3.jpg")), be = m.a.CancelToken, ve = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/videoMusic", ge = [{
            url: "".concat(ve, "/sample1.mp4"),
            jobId: "1",
            result: "".concat(ve, "/result1.mp4"),
            isSample: !0
        }, {
            url: "".concat(ve, "/sample2.mp4"),
            jobId: "2",
            result: "".concat(ve, "/result2.mp4"),
            isSample: !0
        }, {
            url: "".concat(ve, "/sample3.mp4"),
            jobId: "3",
            result: "".concat(ve, "/result3.mp4"),
            isSample: !0
        }, {
            url: "".concat(ve, "/sample4.mp4"),
            jobId: "4",
            result: "".concat(ve, "/result4.mp4"),
            isSample: !0
        }];
        function fe(e) {
            return je.apply(this, arguments)
        }
        function je() {
            return (je = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/withMusic/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                videoBGM: {
                                    type: 1
                                }
                            }, "".concat(g.b, "/result/videoMusic"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var he, Oe, Ee, xe, ke, ye, Ne, Ce, we, Se, Ie, Re, Te, Ve, _e, Ae, Me = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("videoMusic").t
              , u = Object(l.useState)(ge.length)
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(ge[0].url)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useRef)(ge[0].url)
              , k = Object(l.useState)(ge[0].jobId)
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(!1)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useRef)(ge[0].jobId)
              , V = Object(l.useState)()
              , _ = Object(s.a)(V, 2)
              , A = _[0]
              , M = _[1]
              , F = Object(l.useState)("")
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var a, r;
                null === (a = t.current) || void 0 === a || a.pause(),
                null === (r = n.current) || void 0 === r || r.pause();
                var s = e.current;
                function l() {
                    return i.apply(this, arguments)
                }
                function i() {
                    return (i = Object(o.a)(c.a.mark((function e() {
                        var t, n, a, r, o, i, u, m, p;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = ge.find((function(e) {
                                        return e.jobId === N
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", M(t.result));
                                case 5:
                                    return T.current === N && (M(void 0),
                                    J("")),
                                    n = be.source(),
                                    s.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(N, n.token);
                                case 11:
                                    if (r = e.sent,
                                    !(o = null === (a = r.getJobResponse) || void 0 === a ? void 0 : a.job) || 3 !== o.state) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 16,
                                    Object(g.w)("".concat(g.b, "/result/videoMusic/").concat(null === (i = o.outputs[0].smartContentResult) || void 0 === i || null === (u = i.videoBGM) || void 0 === u ? void 0 : u[0].outputName));
                                case 16:
                                    (m = e.sent) && (t.result = m,
                                    T.current === N && M(t.result)),
                                    e.next = 21;
                                    break;
                                case 20:
                                    r.errorResponse ? T.current === N && J(r.errorResponse.message) : o && (4 === o.state ? T.current === N && J("Job Failed") : [1, 2].includes(o.state) && T.current === N && setTimeout(l, g.k));
                                case 21:
                                    e.next = 27;
                                    break;
                                case 23:
                                    e.prev = 23,
                                    e.t0 = e.catch(8),
                                    setTimeout(l, g.k),
                                    console.log(e.t0);
                                case 27:
                                    return e.prev = 27,
                                    (p = s.indexOf(n)) > -1 && s.splice(p, 1),
                                    e.finish(27);
                                case 31:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 23, 27, 31]])
                    }
                    )))).apply(this, arguments)
                }
                N && l()
            }
            ), [N]);
            var q = Object(l.useCallback)((function(e) {
                C(e.jobId),
                T.current = e.jobId,
                E(e.url),
                x.current = e.url,
                R(!!e.uploading)
            }
            ), [])
              , L = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = ge.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return q(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                ge.push(o),
                                E(o.url),
                                x.current = o.url,
                                C(""),
                                M(void 0),
                                R(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                fe(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                x.current === o.url && C(u.createJobResponse.job.id),
                                T.current = o.jobId) : J((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                R(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [q])
              , B = Object(l.useCallback)((function(e) {
                e && O !== e.url && q(e)
            }
            ), [O, q])
              , H = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = ge[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                O === n.url && q(ge[e - 1]),
                ge.splice(e, 1),
                f(p - 1)
            }
            ), [O, q, p]);
            return i.a.createElement("div", {
                className: "VideoMusic"
            }, i.a.createElement("div", {
                className: "VideoMusic-banner",
                style: {
                    backgroundImage: "url(".concat(de, ")")
                }
            }, i.a.createElement("div", {
                className: "VideoMusic-banner-content"
            }, i.a.createElement("h2", {
                className: "VideoMusic-banner-title"
            }, r(se || (se = Object(a.a)(["videoMusic"])))), i.a.createElement("p", {
                className: "VideoMusic-banner-description"
            }, r(oe || (oe = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "VideoMusic-demo"
            }, i.a.createElement("div", {
                className: "VideoMusic-main"
            }, i.a.createElement("div", {
                className: "VideoMusic-preview"
            }, i.a.createElement("h2", {
                className: "VideoMusic-main-title"
            }, r(le || (le = Object(a.a)(["originalVideo"])))), i.a.createElement("div", {
                className: "VideoMusic-preview-wrap"
            }, i.a.createElement("video", {
                src: O,
                controls: !0,
                controlsList: "nodownload",
                ref: t
            }))), i.a.createElement("div", {
                className: "VideoMusic-result"
            }, i.a.createElement("h2", {
                className: "VideoMusic-main-title"
            }, r(ie || (ie = Object(a.a)(["processedVideo"])))), i.a.createElement("div", {
                className: d()("VideoMusic-result-wrap", {
                    loading: I || !A && !P
                })
            }, P && !A ? i.a.createElement("div", {
                className: "VideoMusic-result-message"
            }, "".concat(r(ue || (ue = Object(a.a)(["tip.processedFailed"]))), " (").concat(P, ")")) : i.a.createElement("video", {
                src: A,
                controls: !0,
                controlsList: "nodownload",
                ref: n
            }), i.a.createElement("div", {
                className: "VideoMusic-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "VideoMusic-result-cover-status"
            }, r("tip.".concat(I ? "uploadingVideo" : "processingVideo"))))))), i.a.createElement("div", {
                className: "VideoMusic-sample"
            }, i.a.createElement("ul", {
                className: "VideoMusic-sample-list"
            }, ge.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("VideoMusic-sample-item", {
                        active: a === O
                    }),
                    onClick: function() {
                        return B(ge[t])
                    }
                }, i.a.createElement("video", {
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "VideoMusic-sample-item-delete",
                    onClick: function(e) {
                        return H(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("VideoMusic-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: L,
                message: r(me || (me = Object(a.a)(["tip.videoTimeLimit"]))),
                accept: "video/*"
            }))))))
        }, Fe = (n(371),
        "".concat(g.d, "/assets/image/back7.jpg")), ze = ["original", "fast", "slow", "corner", "free"], Pe = {
            original: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/football/original.mp4",
            fast: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/football/fast.mp4",
            slow: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/football/slow.mp4",
            corner: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/football/corner.mp4",
            free: "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/football/free.mp4"
        }, Je = function() {
            var e = Object(l.useRef)(null)
              , t = Object(l.useState)(Pe.original)
              , n = Object(s.a)(t, 2)
              , r = n[0]
              , c = n[1]
              , o = Object(b.a)("football").t;
            return i.a.createElement("div", {
                className: "Football"
            }, i.a.createElement("div", {
                className: "Football-banner",
                style: {
                    backgroundImage: "url(".concat(Fe, ")")
                }
            }, i.a.createElement("div", {
                className: "Football-banner-content"
            }, i.a.createElement("h2", {
                className: "Football-banner-title"
            }, o(he || (he = Object(a.a)(["football"])))), i.a.createElement("p", {
                className: "Football-banner-description"
            }, o(Oe || (Oe = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "Football-demo"
            }, i.a.createElement("p", null, "* ".concat(o(Ee || (Ee = Object(a.a)(["supportsTip"]))))), i.a.createElement("div", {
                className: "Football-main"
            }, i.a.createElement("div", {
                className: "Football-result"
            }, i.a.createElement("video", {
                src: r,
                controls: !0,
                controlsList: "nodownload",
                ref: e
            })), i.a.createElement("div", {
                className: "Football-type"
            }, i.a.createElement("ul", {
                className: "Football-type-list"
            }, ze.map((function(e) {
                return i.a.createElement("li", {
                    key: e,
                    className: d()("Football-type-item", {
                        active: Pe[e] === r
                    }),
                    onClick: function() {
                        return c(Pe[e])
                    }
                }, o("footballType.".concat(e)))
            }
            )))))))
        }, qe = (n(372),
        m.a.CancelToken), Le = "".concat(g.d, "/assets/image/back15.jpg"), Be = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/gva/", He = [{
            id: 0,
            jobId: "1",
            original: "gva_pubg1.mp4",
            result: ["gva_pubg1_result1.mp4", "gva_pubg1_result2.mp4", "gva_pubg1_result3.mp4", "gva_pubg1_result4.mp4"]
        }, {
            id: 1,
            jobId: "2",
            original: "gva_pubg2.mp4",
            result: ["gva_pubg2_result1.mp4", "gva_pubg2_result2.mp4", "gva_pubg2_result3.mp4", "gva_pubg2_result4.mp4"]
        }], Ue = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/gva", De = [{
            id: 0,
            original: "".concat(Ue, "/gva_demo1.mp4"),
            jobId: "1",
            isSample: !0,
            result: ["".concat(Ue, "/gva_demo1_result1.mp4"), "".concat(Ue, "/gva_demo1_result2.mp4"), "".concat(Ue, "/gva_demo1_result3.mp4"), "".concat(Ue, "/gva_demo1_result4.mp4")]
        }, {
            id: 1,
            original: "".concat(Ue, "/gva_demo2.mp4"),
            jobId: "2",
            isSample: !0,
            result: ["".concat(Ue, "/gva_demo2_result1.mp4"), "".concat(Ue, "/gva_demo2_result2.mp4"), "".concat(Ue, "/gva_demo2_result3.mp4"), "".concat(Ue, "/gva_demo2_result4.mp4")]
        }];
        function Ge(e) {
            return We.apply(this, arguments)
        }
        function We() {
            return (We = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/gva/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                gameAnalysis: {
                                    analysisSwitch: 2
                                }
                            }, "/assets/result/vga");
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Ke, Ze, $e, Xe, Qe, Ye = function() {
            var e = Object(l.useRef)(null)
              , t = Object(l.useRef)([])
              , n = Object(l.useState)(0)
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(0)
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useState)(De[0].jobId)
              , E = Object(s.a)(O, 2)
              , x = E[0]
              , k = E[1]
              , y = Object(l.useState)()
              , N = Object(s.a)(y, 2)
              , C = N[0]
              , w = N[1]
              , S = Object(l.useState)(!1)
              , I = Object(s.a)(S, 2)
              , R = I[0]
              , T = I[1]
              , V = Object(l.useRef)(De[0].jobId)
              , _ = Object(l.useState)("")
              , A = Object(s.a)(_, 2)
              , M = A[0]
              , F = A[1]
              , z = Object(l.useState)(De.length)
              , P = Object(s.a)(z, 2)
              , J = P[0]
              , q = P[1]
              , L = Object(l.useState)(!1)
              , B = Object(s.a)(L, 2)
              , H = B[0]
              , U = B[1]
              , D = Object(l.useState)(1)
              , G = Object(s.a)(D, 2)
              , W = G[0]
              , K = G[1]
              , Z = Object(l.useState)(0)
              , $ = Object(s.a)(Z, 2)
              , X = $[0]
              , Q = $[1]
              , Y = Object(l.useState)(4)
              , ee = Object(s.a)(Y, 2)
              , te = ee[0]
              , ne = ee[1]
              , ae = Object(l.useState)(0)
              , re = Object(s.a)(ae, 2)
              , ce = re[0]
              , se = re[1]
              , oe = Object(b.a)("gva").t
              , le = Object(l.useCallback)((function(e, t) {
                e.result.length > 4 ? U(!0) : U(!1);
                var n = 4 * (t - 1)
                  , a = n + 4
                  , r = Math.ceil(e.result.length / 4);
                Q(n),
                ne(a),
                K(t),
                se(r)
            }
            ), []);
            Object(l.useEffect)((function() {
                le(De[0], 1);
                var e = t.current;
                return function() {
                    e.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), [le]),
            Object(l.useEffect)((function() {
                var e = t.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function t() {
                        var a, r, s, o, l, i, u, m, p, d;
                        return c.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (a = De.find((function(e) {
                                        return e.jobId === x
                                    }
                                    ))) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    if (!(a.result && a.result.length > 0)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", w(a.result));
                                case 5:
                                    return V.current === x && (w(void 0),
                                    F("")),
                                    r = qe.source(),
                                    e.push(r),
                                    t.prev = 8,
                                    t.next = 11,
                                    Object(g.u)(x, r.token);
                                case 11:
                                    o = t.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? (null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.gameAnalysis) || void 0 === u ? void 0 : u.highlights) ? (null === (m = l.outputs[0].smartContentResult) || void 0 === m || null === (p = m.gameAnalysis) || void 0 === p || p.highlights.forEach((function(e) {
                                        a.result.push("https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/result/vga/" + e)
                                    }
                                    )),
                                    V.current === x && w(a.result),
                                    le(a, 1)) : (a.result = [],
                                    V.current === x && w([])) : o.errorResponse ? V.current === x && F(o.errorResponse.message) : l && (4 === l.state ? V.current === x && F("Job Failed") : [1, 2].includes(l.state) && V.current === x && setTimeout(n, g.k)),
                                    t.next = 20;
                                    break;
                                case 16:
                                    t.prev = 16,
                                    t.t0 = t.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(t.t0);
                                case 20:
                                    return t.prev = 20,
                                    (d = e.indexOf(r)) > -1 && e.splice(d, 1),
                                    t.finish(20);
                                case 24:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                x && n()
            }
            ), [x, le]);
            var ie = Object(l.useCallback)((function(e) {
                W - 1 >= 1 && le(e, W - 1)
            }
            ), [W, le])
              , ue = Object(l.useCallback)((function(e) {
                W + 1 <= ce && le(e, W + 1)
            }
            ), [W, ce, le])
              , me = Object(l.useCallback)((function(e) {
                K(1),
                le(e, 1),
                k(e.jobId),
                V.current = e.jobId,
                h(e.id),
                T(!!e.uploading)
            }
            ), [le])
              , pe = Object(l.useCallback)((function(e) {
                e && j !== e.id && me(e)
            }
            ), [j, me])
              , de = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, r, s, o, l, i, u, m, p, d;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (n = t[0],
                                2147483648,
                                !(n.size > 2147483648)) {
                                    e.next = 7;
                                    break
                                }
                                return alert(oe(xe || (xe = Object(a.a)(["tip.videoSizeLimitDialog"])))),
                                e.abrupt("return", !1);
                            case 7:
                                return e.next = 9,
                                Object(g.A)(n);
                            case 9:
                                if (!(r = e.sent)) {
                                    e.next = 36;
                                    break
                                }
                                if (s = r.result,
                                o = URL.createObjectURL(new Blob([s])),
                                !(l = De.find((function(e) {
                                    return e.original === o
                                }
                                )))) {
                                    e.next = 17;
                                    break
                                }
                                return me(l),
                                e.abrupt("return");
                            case 17:
                                return i = {
                                    id: De[De.length - 1].id + 1,
                                    original: o,
                                    jobId: "",
                                    result: []
                                },
                                De.push(i),
                                h(i.id),
                                k(""),
                                w(void 0),
                                T(!0),
                                i.uploading = !0,
                                e.prev = 24,
                                e.next = 27,
                                Ge(n);
                            case 27:
                                p = e.sent,
                                (null === (u = p.createJobResponse) || void 0 === u || null === (m = u.job) || void 0 === m ? void 0 : m.id) ? (i.jobId = p.createJobResponse.job.id,
                                k(p.createJobResponse.job.id),
                                V.current = i.jobId) : F((null === (d = p.errorResponse) || void 0 === d ? void 0 : d.message) || "Upload Failed"),
                                T(!1),
                                i.uploading = !1,
                                e.next = 36;
                                break;
                            case 33:
                                e.prev = 33,
                                e.t0 = e.catch(24),
                                console.log(e.t0);
                            case 36:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[24, 33]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [me, oe])
              , be = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = De[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                j === n.id && me(De[e - 1]),
                De.splice(e, 1),
                q(J - 1)
            }
            ), [j, me, J]);
            return i.a.createElement("div", {
                className: "GVA"
            }, i.a.createElement("div", {
                className: "GVA-banner",
                style: {
                    backgroundImage: "url(".concat(Le, ")")
                }
            }, i.a.createElement("div", {
                className: "GVA-banner-content"
            }, i.a.createElement("h2", {
                className: "GVA-banner-title"
            }, oe(ke || (ke = Object(a.a)(["gva"])))), i.a.createElement("p", {
                className: "GVA-banner-description"
            }, oe(ye || (ye = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "GVA-demo"
            }, i.a.createElement("p", null, "* ".concat(oe(Ne || (Ne = Object(a.a)(["supportsTip"]))))), i.a.createElement("div", {
                className: "GVA-game"
            }, oe(Ce || (Ce = Object(a.a)(["lol"])))), i.a.createElement("div", {
                className: "GVA-word"
            }, i.a.createElement("div", null, oe(we || (we = Object(a.a)(["originalVideo"])))), i.a.createElement("div", null, oe(Se || (Se = Object(a.a)(["highlights"]))))), i.a.createElement("div", {
                className: "GVA-main"
            }, i.a.createElement("div", {
                className: "GVA-original"
            }, i.a.createElement("video", {
                src: De[j].original,
                controls: !0,
                controlsList: "nodownload",
                ref: e
            })), i.a.createElement("div", {
                className: d()("GVA-wrap", {
                    loading: R || !C && !M
                })
            }, M && !C ? i.a.createElement("div", {
                className: "GVA-result-message"
            }, "".concat(oe(Ie || (Ie = Object(a.a)(["tip.processedFailed"]))), " ").concat(M)) : C && C.length ? i.a.createElement("div", {
                className: "GVA-result"
            }, H && i.a.createElement("div", {
                className: "GVA-pagination"
            }, i.a.createElement("span", {
                className: d()("GVA-pagination-prev", {
                    grey: 1 === W
                }),
                onClick: function() {
                    return ie(De[j])
                }
            }, "\u4e0a\u4e00\u9875"), i.a.createElement("span", {
                className: d()("GVA-pagination-next", {
                    grey: W === ce
                }),
                onClick: function() {
                    return ue(De[j])
                }
            }, "\u4e0b\u4e00\u9875"), i.a.createElement("span", {
                className: "GVA-pagination-nums"
            }, W, "/", ce)), De[j].result.map((function(t, n) {
                return n >= X && n < te ? i.a.createElement("div", {
                    key: n
                }, i.a.createElement("video", {
                    src: t,
                    controls: !0,
                    controlsList: "nodownload",
                    ref: e
                })) : ""
            }
            ))) : i.a.createElement("div", {
                className: "GVA-result-message"
            }, "".concat(oe(Re || (Re = Object(a.a)(["tip.emptyResult"]))))), i.a.createElement("div", {
                className: "GVA-result-cover"
            }, i.a.createElement(v.m, {
                size: "20px"
            }), i.a.createElement("p", {
                className: "GVA-result-cover-status"
            }, oe("tip.".concat(R ? "uploadingVideo" : "processingVideo")), R)))), i.a.createElement("div", {
                className: "GVA-sample"
            }, i.a.createElement("ul", {
                className: "GVA-sample-list"
            }, De.map((function(e, t) {
                return i.a.createElement("li", {
                    key: e.original,
                    className: d()("GVA-sample-item", {
                        active: e.id === j
                    }),
                    onClick: function() {
                        return pe(e)
                    }
                }, "".concat(oe("demo")).concat(e.id + 1), e.isSample ? null : i.a.createElement("span", {
                    className: "GVA-sample-item-delete",
                    onClick: function(e) {
                        return be(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("GVA-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: de,
                accept: "video/*",
                message: oe(Te || (Te = Object(a.a)(["tip.videoSizeLimit"])))
            })))), i.a.createElement("div", {
                className: "GVA-game"
            }, oe(Ve || (Ve = Object(a.a)(["cod"])))), i.a.createElement("div", {
                className: "GVA-word"
            }, i.a.createElement("div", null, oe(_e || (_e = Object(a.a)(["originalVideo"])))), i.a.createElement("div", null, oe(Ae || (Ae = Object(a.a)(["highlights"]))))), i.a.createElement("div", {
                className: "GVA-main"
            }, i.a.createElement("div", {
                className: "GVA-original"
            }, i.a.createElement("video", {
                src: Be + He[u].original,
                controls: !0,
                controlsList: "nodownload",
                ref: e
            })), i.a.createElement("div", null, i.a.createElement("div", {
                className: "GVA-result"
            }, He[u].result.map((function(t, n) {
                return i.a.createElement("div", {
                    key: n
                }, i.a.createElement("video", {
                    src: Be + t,
                    controls: !0,
                    controlsList: "nodownload",
                    ref: e
                }))
            }
            ))))), i.a.createElement("div", {
                className: "GVA-sample"
            }, i.a.createElement("ul", {
                className: "GVA-sample-list"
            }, He.map((function(e, t) {
                return i.a.createElement("li", {
                    key: e.original,
                    className: d()("GVA-sample-item", {
                        active: e.id === u
                    }),
                    onClick: function() {
                        return m(e.id)
                    }
                }, "".concat(oe("demo")).concat(e.id + 1))
            }
            ))))))
        }, et = (n(373),
        "".concat(g.d, "/assets/image/back8.jpg")), tt = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/musicBeat", nt = m.a.CancelToken, at = [{
            id: 0,
            url: "".concat(tt, "/sample1.wav"),
            jobId: "1",
            isSample: !0,
            result: "".concat(tt, "/result1.mp3")
        }, {
            id: 1,
            url: "".concat(tt, "/sample2.wav"),
            jobId: "2",
            isSample: !0,
            result: "".concat(tt, "/result2.mp3")
        }, {
            id: 2,
            url: "".concat(tt, "/sample3.wav"),
            jobId: "3",
            isSample: !0,
            result: "".concat(tt, "/result3.mp3")
        }, {
            id: 3,
            url: "".concat(tt, "/sample4.wav"),
            jobId: "4",
            isSample: !0,
            result: "".concat(tt, "/result4.mp3")
        }];
        function rt(e) {
            return ct.apply(this, arguments)
        }
        function ct() {
            return (ct = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/music/beat/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                musicBeat: {
                                    outputType: 3,
                                    drumType: 4,
                                    enlargeLevel: 4
                                }
                            }, "assets/musicBeat");
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var st, ot, lt, it, ut, mt, pt, dt, bt, vt = function() {
            var e = Object(l.useRef)(null)
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)([])
              , r = Object(b.a)("musicBeat").t
              , u = Object(l.useState)(at.length)
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(at[0].url)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useRef)(at[0].url)
              , k = Object(l.useState)(at[0].jobId)
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(!1)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useRef)(at[0].jobId)
              , V = Object(l.useState)()
              , _ = Object(s.a)(V, 2)
              , A = _[0]
              , M = _[1]
              , F = Object(l.useState)("")
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1];
            Object(l.useEffect)((function() {
                var e = n.current;
                return function() {
                    e.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var e;
                null === (e = t.current) || void 0 === e || e.pause();
                var a = n.current;
                function r() {
                    return s.apply(this, arguments)
                }
                function s() {
                    return (s = Object(o.a)(c.a.mark((function e() {
                        var t, n, s, o, l, i, u, m;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = at.find((function(e) {
                                        return e.jobId === N
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", M(t.result));
                                case 5:
                                    return T.current === N && (M(void 0),
                                    J("")),
                                    n = nt.source(),
                                    a.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(N, n.token);
                                case 11:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? (t.result = "".concat(tt, "/").concat(null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.musicBeat) || void 0 === u ? void 0 : u.mergeFileName),
                                    T.current === N && M(t.result)) : o.errorResponse ? T.current === N && J(o.errorResponse.message) : l && (4 === l.state ? T.current === N && J("Job Failed") : [1, 2].includes(l.state) && T.current === N && setTimeout(r, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(r, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (m = a.indexOf(n)) > -1 && a.splice(m, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                N && r()
            }
            ), [N]);
            var q = Object(l.useCallback)((function(e) {
                C(e.jobId),
                T.current = e.jobId,
                E(e.url),
                x.current = e.url,
                R(!!e.uploading)
            }
            ), [])
              , L = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 35;
                                    break
                                }
                                if (r = a.result,
                                !(s = at.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return q(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    id: at[at.length - 1].id + 1,
                                    url: r,
                                    jobId: ""
                                },
                                at.push(o),
                                E(o.url),
                                x.current = o.url,
                                C(""),
                                M(void 0),
                                R(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                rt(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                x.current === o.url && C(u.createJobResponse.job.id),
                                T.current = o.jobId) : J((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                e.next = 31;
                                break;
                            case 27:
                                e.prev = 27,
                                e.t0 = e.catch(20),
                                J("500"),
                                console.log(e.t0);
                            case 31:
                                return e.prev = 31,
                                R(!1),
                                o.uploading = !1,
                                e.finish(31);
                            case 35:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 27, 31, 35]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [q])
              , B = Object(l.useCallback)((function(e) {
                e && O !== e.url && q(e)
            }
            ), [O, q])
              , H = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = at[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                O === n.url && q(at[e - 1]),
                at.splice(e, 1),
                f(p - 1)
            }
            ), [O, q, p]);
            return i.a.createElement("div", {
                className: "MusicBeat"
            }, i.a.createElement("div", {
                className: "MusicBeat-banner",
                style: {
                    backgroundImage: "url(".concat(et, ")")
                }
            }, i.a.createElement("div", {
                className: "MusicBeat-banner-content"
            }, i.a.createElement("h2", {
                className: "MusicBeat-banner-title"
            }, r(Ke || (Ke = Object(a.a)(["musicBeat"])))), i.a.createElement("p", {
                className: "MusicBeat-banner-description"
            }, r(Ze || (Ze = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "MusicBeat-demo"
            }, i.a.createElement("div", {
                className: "MusicBeat-main"
            }, i.a.createElement("div", {
                className: "MusicBeat-preview"
            }, i.a.createElement("h2", {
                className: "MusicBeat-main-title"
            }, r($e || ($e = Object(a.a)(["originalAudio"])))), i.a.createElement("audio", {
                ref: e,
                onPlay: function() {
                    var e;
                    return null === (e = t.current) || void 0 === e ? void 0 : e.pause()
                },
                src: O,
                controls: !0,
                controlsList: "nodownload"
            })), i.a.createElement("div", {
                className: "MusicBeat-result"
            }, i.a.createElement("h2", {
                className: "MusicBeat-main-title"
            }, r(Xe || (Xe = Object(a.a)(["processedAudio"])))), i.a.createElement("div", {
                className: d()("MusicBeat-result-wrap", {
                    loading: I || !A && !P
                })
            }, P && !A ? i.a.createElement("div", {
                className: "MusicBeat-result-message"
            }, "".concat(r(Qe || (Qe = Object(a.a)(["tip.processedFailed"]))), " (").concat(P, ")")) : i.a.createElement("audio", {
                ref: t,
                onPlay: function() {
                    var t;
                    return null === (t = e.current) || void 0 === t ? void 0 : t.pause()
                },
                src: A,
                controls: !0,
                controlsList: "nodownload"
            }), i.a.createElement("div", {
                className: "MusicBeat-result-cover"
            }, i.a.createElement(v.m, {
                size: "20px"
            }), i.a.createElement("p", {
                className: "MusicBeat-result-cover-status"
            }, r("tip.".concat(I ? "uploadingAudio" : "processingAudio"))))))), i.a.createElement("div", {
                className: "MusicBeat-sample"
            }, i.a.createElement("ul", {
                className: "MusicBeat-sample-list"
            }, at.map((function(e, t) {
                return i.a.createElement("li", {
                    key: e.url,
                    className: d()("MusicBeat-sample-item", {
                        active: e.url === O
                    }),
                    onClick: function() {
                        return B(at[t])
                    }
                }, "".concat(r("music")).concat(e.id + 1), e.isSample ? null : i.a.createElement("span", {
                    className: "MusicBeat-sample-item-delete",
                    onClick: function(e) {
                        return H(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("MusicBeat-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: L,
                accept: "audio/wav, audio/mp3"
            }))))))
        }, gt = (n(374),
        "".concat(g.d, "/assets/image/back13.jpg")), ft = m.a.CancelToken, jt = [{
            id: 0,
            url: "".concat(g.d, "/assets/highlight/sample5.mp3"),
            jobId: "1",
            isSample: !0,
            result: [{
                start: 60.937,
                end: 94.122,
                score: 1
            }, {
                start: 158.847,
                end: 223.736,
                score: 1
            }]
        }, {
            id: 1,
            url: "".concat(g.d, "/assets/highlight/sample6.mp3"),
            jobId: "2",
            isSample: !0,
            result: [{
                start: 53.907,
                end: 82.433,
                score: 1
            }, {
                start: 118.439,
                end: 147.769,
                score: 1
            }, {
                start: 153.791,
                end: 183.333,
                score: 1
            }]
        }, {
            id: 2,
            url: "".concat(g.d, "/assets/highlight/sample7.mp3"),
            jobId: "3",
            isSample: !0,
            result: [{
                start: 45.737,
                end: 74.17,
                score: 1
            }, {
                start: 103.095,
                end: 131.652,
                score: 1
            }, {
                start: 157.114,
                end: 185.593,
                score: 1
            }]
        }, {
            id: 3,
            url: "".concat(g.d, "/assets/highlight/sample8.mp3"),
            jobId: "4",
            isSample: !0,
            result: [{
                start: 69.843,
                end: 97.784,
                score: 1
            }, {
                start: 136.844,
                end: 237.993,
                score: 1
            }]
        }];
        function ht(e) {
            return Ot.apply(this, arguments)
        }
        function Ot() {
            return (Ot = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/music/highlight/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                musicHighlight: 2
                            });
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Et, xt, kt, yt = function() {
            var e = Object(l.useRef)(null)
              , t = [Object(l.useRef)(null), Object(l.useRef)(null), Object(l.useRef)(null), Object(l.useRef)(null), Object(l.useRef)(null)]
              , n = Object(l.useRef)([])
              , r = Object(b.a)("musicHighlight").t
              , u = Object(l.useState)(jt.length)
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(jt[0].url)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useRef)(jt[0].url)
              , k = Object(l.useState)(jt[0].jobId)
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(!1)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useRef)(jt[0].jobId)
              , V = Object(l.useState)()
              , _ = Object(s.a)(V, 2)
              , A = _[0]
              , M = _[1]
              , F = Object(l.useState)("")
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1];
            Object(l.useEffect)((function() {
                var e = n.current;
                return function() {
                    e.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var e = n.current;
                function t() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function n() {
                        var a, r, s, o, l, i, u, m, p;
                        return c.a.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (a = jt.find((function(e) {
                                        return e.jobId === N
                                    }
                                    ))) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        n.next = 5;
                                        break
                                    }
                                    return n.abrupt("return", M(a.result.map((function(e) {
                                        return [e.start, e.end, e.score]
                                    }
                                    ))));
                                case 5:
                                    return T.current === N && (M(void 0),
                                    J("")),
                                    r = ft.source(),
                                    e.push(r),
                                    n.prev = 8,
                                    n.next = 11,
                                    Object(g.u)(N, r.token);
                                case 11:
                                    o = n.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? (a.result = null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.musicHighlight) || void 0 === u ? void 0 : u.map((function(e) {
                                        return {
                                            start: parseFloat(parseFloat(e.start).toFixed(3)),
                                            end: parseFloat(parseFloat(e.end).toFixed(3)),
                                            score: parseFloat(parseFloat(e.score).toFixed(3))
                                        }
                                    }
                                    )),
                                    T.current === N && M(null === (m = a.result) || void 0 === m ? void 0 : m.map((function(e) {
                                        return [e.start, e.end, e.score]
                                    }
                                    )))) : o.errorResponse ? T.current === N && J(o.errorResponse.message) : l && (4 === l.state ? T.current === N && J("Job Failed") : [1, 2].includes(l.state) && T.current === N && setTimeout(t, g.k)),
                                    n.next = 20;
                                    break;
                                case 16:
                                    n.prev = 16,
                                    n.t0 = n.catch(8),
                                    setTimeout(t, g.k),
                                    console.log(n.t0);
                                case 20:
                                    return n.prev = 20,
                                    (p = e.indexOf(r)) > -1 && e.splice(p, 1),
                                    n.finish(20);
                                case 24:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                N && t()
            }
            ), [N]);
            var q = Object(l.useCallback)((function(e) {
                C(e.jobId),
                T.current = e.jobId,
                E(e.url),
                x.current = e.url,
                R(!!e.uploading)
            }
            ), [])
              , L = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 35;
                                    break
                                }
                                if (r = a.result,
                                !(s = jt.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return q(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    id: jt[jt.length - 1].id + 1,
                                    url: r,
                                    jobId: ""
                                },
                                jt.push(o),
                                E(o.url),
                                x.current = o.url,
                                C(""),
                                M(void 0),
                                R(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                ht(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                x.current === o.url && C(o.jobId),
                                T.current = o.jobId) : J((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                e.next = 31;
                                break;
                            case 27:
                                e.prev = 27,
                                e.t0 = e.catch(20),
                                J("500"),
                                console.log(e.t0);
                            case 31:
                                return e.prev = 31,
                                R(!1),
                                o.uploading = !1,
                                e.finish(31);
                            case 35:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 27, 31, 35]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [q])
              , B = Object(l.useCallback)((function(e) {
                e && O !== e.url && q(e)
            }
            ), [O, q])
              , H = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = jt[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                O === n.url && q(jt[e - 1]),
                jt.splice(e, 1),
                f(p - 1)
            }
            ), [O, q, p]);
            return i.a.createElement("div", {
                className: "MusicHighlight"
            }, i.a.createElement("div", {
                className: "MusicHighlight-banner",
                style: {
                    backgroundImage: "url(".concat(gt, ")")
                }
            }, i.a.createElement("div", {
                className: "MusicHighlight-banner-content"
            }, i.a.createElement("h2", {
                className: "MusicHighlight-banner-title"
            }, r(st || (st = Object(a.a)(["musicHighlight"])))), i.a.createElement("p", {
                className: "MusicHighlight-banner-description"
            }, r(ot || (ot = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "MusicHighlight-demo"
            }, i.a.createElement("div", {
                className: "MusicHighlight-main"
            }, i.a.createElement("div", {
                className: "MusicHighlight-preview"
            }, i.a.createElement("h2", {
                className: "MusicHighlight-main-title"
            }, r(lt || (lt = Object(a.a)(["originalAudio"])))), i.a.createElement("audio", {
                ref: e,
                onPlay: function(e) {
                    t.forEach((function(e) {
                        var t;
                        return null === (t = e.current) || void 0 === t ? void 0 : t.pause()
                    }
                    ))
                },
                src: O,
                controls: !0,
                controlsList: "nodownload"
            })), i.a.createElement("div", {
                className: "MusicHighlight-result"
            }, i.a.createElement("h2", {
                className: "MusicHighlight-main-title"
            }, r(it || (it = Object(a.a)(["processedAudio"])))), i.a.createElement("div", {
                className: d()("MusicHighlight-result-wrap", {
                    loading: I || !A && !P
                })
            }, P && !A ? i.a.createElement("div", {
                className: "MusicHighlight-result-message"
            }, "".concat(r(ut || (ut = Object(a.a)(["tip.processedFailed"]))), " (").concat(P, ")")) : A && A.length ? A.map((function(n, c) {
                return i.a.createElement("div", {
                    key: c
                }, i.a.createElement("h2", {
                    className: "MusicHighlight-main-info"
                }, "".concat(r(mt || (mt = Object(a.a)(["highlightStart"]))), ": ").concat(n[0], ", ").concat(r(pt || (pt = Object(a.a)(["highlightEnd"]))), ": ").concat(n[1], ", ").concat(r(dt || (dt = Object(a.a)(["highlightScore"]))), ": ").concat(100 * n[2], "%")), i.a.createElement("audio", {
                    ref: t[c],
                    src: O,
                    onPlay: function(a) {
                        var r;
                        null === (r = e.current) || void 0 === r || r.pause(),
                        t.forEach((function(e, t) {
                            var n;
                            t !== c && (null === (n = e.current) || void 0 === n || n.pause())
                        }
                        ));
                        var s = a.target;
                        (s.currentTime < n[0] || s.currentTime > n[1]) && (s.currentTime = n[0])
                    },
                    onTimeUpdate: function(e) {
                        var t = e.target;
                        t.currentTime > n[1] && t.pause()
                    },
                    controls: !0,
                    controlsList: "nodownload"
                }))
            }
            )) : i.a.createElement("div", {
                className: "MusicHighlight-result-message"
            }, "".concat(r(bt || (bt = Object(a.a)(["tip.emptyResult"]))))), i.a.createElement("div", {
                className: "MusicHighlight-result-cover"
            }, i.a.createElement(v.m, {
                size: "20px"
            }), i.a.createElement("p", {
                className: "MusicHighlight-result-cover-status"
            }, r("tip.".concat(I ? "uploadingAudio" : "processingAudio"))))))), i.a.createElement("div", {
                className: "MusicHighlight-sample"
            }, i.a.createElement("ul", {
                className: "MusicHighlight-sample-list"
            }, jt.map((function(e, t) {
                return i.a.createElement("li", {
                    key: e.url,
                    className: d()("MusicHighlight-sample-item", {
                        active: e.url === O
                    }),
                    onClick: function() {
                        return B(jt[t])
                    }
                }, "".concat(r("music")).concat(e.id + 1), e.isSample ? null : i.a.createElement("span", {
                    className: "MusicHighlight-sample-item-delete",
                    onClick: function(e) {
                        return H(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("MusicHighlight-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: L,
                accept: "audio/wav, audio/mp3"
            }))))))
        }, Nt = n(20), Ct = (n(375),
        "".concat(g.d, "/assets/image/back5.jpg")), wt = m.a.CancelToken, St = ["original", "opera", "pop", "chinese", "light"], It = [{
            id: 0,
            jobId: "1",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/genre/sample1.wav")
            }, g.f[0])
        }, {
            id: 1,
            jobId: "2",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/genre/sample2.mp3")
            }, g.f[1])
        }, {
            id: 2,
            jobId: "3",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/genre/sample3.wav")
            }, g.f[2])
        }, {
            id: 3,
            jobId: "4",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/genre/sample4.wav")
            }, g.f[3])
        }];
        function Rt(e) {
            switch (e) {
            case 6:
                return "opera";
            case 1:
                return "pop";
            case 8:
                return "light";
            default:
                return "chinese"
            }
        }
        function Tt(e) {
            return Vt.apply(this, arguments)
        }
        function Vt() {
            return (Vt = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/music/genre/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                musicStyleTransform: {
                                    styles: [1, 6, 8, 9]
                                }
                            }, "assets/genre");
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var _t, At, Mt = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("genreTransform").t
              , n = Object(l.useState)(It.length)
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(St[0])
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useState)(!1)
              , E = Object(s.a)(O, 2)
              , x = E[0]
              , k = E[1]
              , y = Object(l.useState)(It[0].jobId)
              , N = Object(s.a)(y, 2)
              , C = N[0]
              , w = N[1]
              , S = Object(l.useState)(!1)
              , I = Object(s.a)(S, 2)
              , R = I[0]
              , T = I[1]
              , V = Object(l.useRef)(It[0].jobId)
              , _ = Object(l.useState)(It[0].result)
              , A = Object(s.a)(_, 2)
              , M = A[0]
              , F = A[1]
              , z = Object(l.useState)("")
              , P = Object(s.a)(z, 2)
              , J = P[0]
              , q = P[1]
              , L = Object(l.useRef)(It[0].result.original);
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, m, p;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = It.find((function(e) {
                                        return e.jobId === C
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!(Object.keys(a.result).length > 1)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", F(a.result));
                                case 5:
                                    return V.current === C && q(""),
                                    r = wt.source(),
                                    t.push(r),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(C, r.token);
                                case 11:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? ((m = {}).original = a.result.original,
                                    null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.musicStyleTransform) || void 0 === u || u.forEach((function(e) {
                                        var t = e.fileName
                                          , n = e.style;
                                        m[Rt(n)] = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/genre/".concat(t)
                                    }
                                    )),
                                    a.result = m,
                                    V.current === C && F(a.result)) : o.errorResponse ? V.current === C && q(o.errorResponse.message) : l && (4 === l.state ? V.current === C && q("Job Failed") : [1, 2].includes(l.state) && V.current === C && setTimeout(n, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (p = t.indexOf(r)) > -1 && t.splice(p, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                C && n()
            }
            ), [C]);
            var B = Object(l.useCallback)((function(e) {
                w(e.jobId),
                V.current = e.jobId,
                F(e.result),
                L.current = e.result.original,
                h(St[0]),
                k(!1),
                T(!!e.uploading)
            }
            ), [])
              , H = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 36;
                                    break
                                }
                                if (r = a.result,
                                !(s = It.find((function(e) {
                                    return e.result.original === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return B(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    id: It[It.length - 1].id + 1,
                                    jobId: "",
                                    result: {
                                        original: r
                                    }
                                },
                                It.push(o),
                                F(o.result),
                                L.current = o.result.original,
                                w(""),
                                h(St[0]),
                                k(!1),
                                T(!0),
                                o.uploading = !0,
                                e.prev = 21,
                                e.next = 24,
                                Tt(n);
                            case 24:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                L.current === o.result.original && (w(o.jobId),
                                F(o.result)),
                                V.current = o.jobId) : q((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                e.next = 32;
                                break;
                            case 28:
                                e.prev = 28,
                                e.t0 = e.catch(21),
                                console.log(e.t0),
                                q("500");
                            case 32:
                                return e.prev = 32,
                                T(!1),
                                o.uploading = !1,
                                e.finish(32);
                            case 36:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[21, 28, 32, 36]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [B])
              , U = Object(l.useCallback)((function(e) {
                e && M !== e.result && B(e)
            }
            ), [M, B])
              , D = Object(l.useCallback)((function(e) {
                k(!0),
                h(e)
            }
            ), [])
              , G = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = It[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                M === n.result && B(It[e - 1]),
                It.splice(e, 1),
                m(u - 1)
            }
            ), [M, u, B]);
            return i.a.createElement("div", {
                className: "GenreTransform"
            }, i.a.createElement("div", {
                className: "GenreTransform-banner",
                style: {
                    backgroundImage: "url(".concat(Ct, ")")
                }
            }, i.a.createElement("div", {
                className: "GenreTransform-banner-content"
            }, i.a.createElement("h2", {
                className: "GenreTransform-banner-title"
            }, t(Et || (Et = Object(a.a)(["genreTransform"]))), " ", i.a.createElement("span", {
                className: "GenreTransform-banner-title-tag"
            }, "Beta")), i.a.createElement("p", {
                className: "GenreTransform-banner-description"
            }, t(xt || (xt = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "GenreTransform-demo"
            }, i.a.createElement("div", {
                className: "GenreTransform-main"
            }, i.a.createElement("div", {
                className: "GenreTransform-preview"
            }, i.a.createElement("audio", {
                src: M[j],
                autoPlay: x,
                controls: !0,
                controlsList: "nodownload",
                onPlay: function() {
                    return k(!0)
                }
            })), i.a.createElement("div", {
                className: d()("GenreTransform-result", {
                    loading: !M.chinese || J
                })
            }, J ? i.a.createElement("div", {
                className: "GenreTransform-result-message"
            }, "".concat(t(kt || (kt = Object(a.a)(["tip.processedFailed"]))), " (").concat(J, ")")) : i.a.createElement(i.a.Fragment, null, i.a.createElement("ul", {
                className: "GenreTransform-result-list"
            }, St.map((function(e) {
                return i.a.createElement("li", {
                    key: e,
                    className: d()("GenreTransform-result-item", {
                        active: j === e
                    }),
                    onClick: function() {
                        return D(e)
                    }
                }, t("genre.".concat(e)))
            }
            ))), i.a.createElement("div", {
                className: d()("GenreTransform-result-cover", {
                    loading: R
                })
            }, i.a.createElement(v.m, {
                size: "20px"
            }), i.a.createElement("p", {
                className: "GenreTransform-result-status"
            }, t("tip.uploadingAudio")))))), i.a.createElement("div", {
                className: "GenreTransform-sample"
            }, i.a.createElement("ul", {
                className: "GenreTransform-sample-list"
            }, It.map((function(e, n) {
                return i.a.createElement("li", {
                    key: e.result.original,
                    className: d()("GenreTransform-sample-item", {
                        active: e.result === M
                    }),
                    onClick: function() {
                        return U(It[n])
                    }
                }, "".concat(t("music")).concat(e.id + 1), e.isSample ? null : i.a.createElement("span", {
                    className: "GenreTransform-sample-item-delete",
                    onClick: function(e) {
                        return G(n, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("GenreTransform-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: H,
                accept: "audio/wav, audio/mp3"
            }))))))
        }, Ft = (n(376),
        "".concat(g.d, "/assets/image/back6.jpg")), zt = m.a.CancelToken, Pt = ["original", "Harp", "MusicBox", "Luan", "Trombone", "AcousticGuitar", "Clarine", "Cello", "Sax", "Flute", "Pipa", "GuZheng", "Marimba", "Dulcimer", "Accordion"], Jt = [{
            id: 0,
            jobId: "1",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/instruments/sample1.mp3")
            }, g.i[0])
        }, {
            id: 1,
            jobId: "2",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/instruments/sample2.mp3")
            }, g.i[1])
        }, {
            id: 2,
            jobId: "3",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/instruments/sample3.mp3")
            }, g.i[2])
        }, {
            id: 3,
            jobId: "4",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/instruments/sample4.mp3")
            }, g.i[3])
        }];
        function qt(e) {
            return Lt.apply(this, arguments)
        }
        function Lt() {
            return (Lt = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/music/instrumentTransform/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                musicInstrumentTransform: {
                                    instruments: [23, 26, 28, 11, 14, 13, 9, 18, 10, 27, 29, 20, 21, 22]
                                }
                            }, "".concat(g.b, "/result/instrumentTransform"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Bt, Ht, Ut = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("instrumentTransform").t
              , n = Object(l.useState)(Jt.length)
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(Pt[0])
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useState)(!1)
              , E = Object(s.a)(O, 2)
              , x = E[0]
              , k = E[1]
              , y = Object(l.useState)(Jt[0].jobId)
              , N = Object(s.a)(y, 2)
              , C = N[0]
              , w = N[1]
              , S = Object(l.useState)(!1)
              , I = Object(s.a)(S, 2)
              , R = I[0]
              , T = I[1]
              , V = Object(l.useRef)(Jt[0].jobId)
              , _ = Object(l.useState)(Jt[0].result)
              , A = Object(s.a)(_, 2)
              , M = A[0]
              , F = A[1]
              , z = Object(l.useRef)(Jt[0].result.original);
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, m, p;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = Jt.find((function(e) {
                                        return e.jobId === C
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!(Object.keys(a.result).length > 1)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", F(a.result));
                                case 5:
                                    return r = zt.source(),
                                    t.push(r),
                                    e.prev = 7,
                                    e.next = 10,
                                    Object(g.u)(C, r.token);
                                case 10:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? ((m = {}).original = a.result.original,
                                    null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.musicInstrumentTransform) || void 0 === u || u.forEach((function(e) {
                                        var t = e.fileName;
                                        m.Pipa = t
                                    }
                                    )),
                                    a.result = m,
                                    V.current === C && F(a.result)) : l && (4 === l.state ? V.current === C && alert("Job Failed") : [1, 2].includes(l.state) && V.current === C && setTimeout(n, g.k)),
                                    e.next = 19;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(7),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 19:
                                    return e.prev = 19,
                                    (p = t.indexOf(r)) > -1 && t.splice(p, 1),
                                    e.finish(19);
                                case 23:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[7, 15, 19, 23]])
                    }
                    )))).apply(this, arguments)
                }
                C && n()
            }
            ), [C]);
            var P = Object(l.useCallback)((function(e) {
                w(e.jobId),
                V.current = e.jobId,
                F(e.result),
                z.current = e.result.original,
                h(Pt[0]),
                k(!1),
                T(!!e.uploading)
            }
            ), [])
              , J = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 33;
                                    break
                                }
                                if (r = a.result,
                                !(s = Jt.find((function(e) {
                                    return e.result.original === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return P(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    id: Jt[Jt.length - 1].id + 1,
                                    jobId: "",
                                    result: {
                                        original: r
                                    }
                                },
                                Jt.push(o),
                                F(o.result),
                                z.current = o.result.original,
                                w(""),
                                h(Pt[0]),
                                k(!1),
                                T(!0),
                                o.uploading = !0,
                                e.prev = 21,
                                e.next = 24,
                                qt(n);
                            case 24:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) && (o.jobId = u.createJobResponse.job.id,
                                z.current === o.result.original && (w(o.jobId),
                                F(o.result)),
                                V.current = o.jobId),
                                T(!1),
                                o.uploading = !1,
                                e.next = 33;
                                break;
                            case 30:
                                e.prev = 30,
                                e.t0 = e.catch(21),
                                console.log(e.t0);
                            case 33:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[21, 30]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [P])
              , q = Object(l.useCallback)((function(e) {
                e && M !== e.result && P(e)
            }
            ), [M, P])
              , L = Object(l.useCallback)((function(e) {
                k(!0),
                h(e)
            }
            ), [])
              , B = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = Jt[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                M === n.result && P(Jt[e - 1]),
                Jt.splice(e, 1),
                m(u - 1)
            }
            ), [M, u, P]);
            return i.a.createElement("div", {
                className: "InstrumentTransform"
            }, i.a.createElement("div", {
                className: "InstrumentTransform-banner",
                style: {
                    backgroundImage: "url(".concat(Ft, ")")
                }
            }, i.a.createElement("div", {
                className: "InstrumentTransform-banner-content"
            }, i.a.createElement("h2", {
                className: "InstrumentTransform-banner-title"
            }, t(_t || (_t = Object(a.a)(["instrumentTransform"])))), i.a.createElement("p", {
                className: "InstrumentTransform-banner-description"
            }, t(At || (At = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "InstrumentTransform-demo"
            }, i.a.createElement("div", {
                className: "InstrumentTransform-main"
            }, i.a.createElement("div", {
                className: "InstrumentTransform-preview"
            }, i.a.createElement("audio", {
                src: M[j],
                autoPlay: x,
                controls: !0,
                controlsList: "nodownload",
                onPlay: function() {
                    return k(!0)
                }
            })), i.a.createElement("div", {
                className: d()("InstrumentTransform-result", {
                    loading: 1 === Object.keys(M).length
                })
            }, i.a.createElement("ul", {
                className: "InstrumentTransform-result-list"
            }, Pt.map((function(e) {
                return i.a.createElement("li", {
                    key: e,
                    className: d()("InstrumentTransform-result-item", {
                        active: j === e
                    }),
                    onClick: function() {
                        return L(e)
                    }
                }, t("instrument.".concat(e)))
            }
            ))), i.a.createElement("div", {
                className: d()("InstrumentTransform-result-cover", {
                    loading: R
                })
            }, i.a.createElement(v.m, {
                size: "20px"
            }), i.a.createElement("p", {
                className: "InstrumentTransform-result-status"
            }, t("tip.uploadingAudio"))))), i.a.createElement("div", {
                className: "InstrumentTransform-sample"
            }, i.a.createElement("ul", {
                className: "InstrumentTransform-sample-list"
            }, Jt.map((function(e, n) {
                return i.a.createElement("li", {
                    key: e.result.original,
                    className: d()("InstrumentTransform-sample-item", {
                        active: e.result === M
                    }),
                    onClick: function() {
                        return q(Jt[n])
                    }
                }, "".concat(t("music")).concat(e.id + 1), e.isSample ? null : i.a.createElement("span", {
                    className: "InstrumentTransform-sample-item-delete",
                    onClick: function(e) {
                        return B(n, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                style: {
                    display: "none"
                },
                className: d()("InstrumentTransform-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: J,
                accept: "audio/wav, audio/mp3, video/mp4"
            }))))))
        }, Dt = (n(377),
        "".concat(g.d, "/assets/image/back9.jpg")), Gt = m.a.CancelToken, Wt = ["original", "vocals", "drums", "bass", "accompaniment"], Kt = [{
            id: 0,
            jobId: "1",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/seperate/sample1.mp3")
            }, g.l[0])
        }, {
            id: 1,
            jobId: "2",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/seperate/sample2.mp3")
            }, g.l[1])
        }, {
            id: 2,
            jobId: "3",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/seperate/sample3.mp3")
            }, g.l[2])
        }, {
            id: 3,
            jobId: "4",
            isSample: !0,
            result: Object(Nt.a)({
                original: "".concat(g.d, "/assets/seperate/sample4.mp3")
            }, g.l[3])
        }];
        function Zt(e) {
            switch (e) {
            case 1:
                return "vocals";
            case 2:
                return "drums";
            case 3:
                return "bass";
            default:
                return "accompaniment"
            }
        }
        function $t(e) {
            return Xt.apply(this, arguments)
        }
        function Xt() {
            return (Xt = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/music/seperate/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                musicSeperate: {
                                    method: 2
                                }
                            }, "assets/seperateTransofrm");
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Qt, Yt, en, tn = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("seperateTransform").t
              , n = Object(l.useState)(Kt.length)
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(Wt[0])
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useState)(!1)
              , E = Object(s.a)(O, 2)
              , x = E[0]
              , k = E[1]
              , y = Object(l.useState)(Kt[0].jobId)
              , N = Object(s.a)(y, 2)
              , C = N[0]
              , w = N[1]
              , S = Object(l.useState)(!1)
              , I = Object(s.a)(S, 2)
              , R = I[0]
              , T = I[1]
              , V = Object(l.useRef)(Kt[0].jobId)
              , _ = Object(l.useState)(Kt[0].result)
              , A = Object(s.a)(_, 2)
              , M = A[0]
              , F = A[1]
              , z = Object(l.useRef)(Kt[0].result.original);
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, m, p;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = Kt.find((function(e) {
                                        return e.jobId === C
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!(Object.keys(a.result).length > 1)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", F(a.result));
                                case 5:
                                    return r = Gt.source(),
                                    t.push(r),
                                    e.prev = 7,
                                    e.next = 10,
                                    Object(g.u)(C, r.token);
                                case 10:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? ((m = {}).original = a.result.original,
                                    null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.musicSeperate) || void 0 === u || u.forEach((function(e) {
                                        var t = e.fileName
                                          , n = e.tone;
                                        m[Zt(n)] = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/seperateTransofrm/".concat(t)
                                    }
                                    )),
                                    a.result = m,
                                    V.current === C && F(a.result)) : l && (4 === l.state ? V.current === C && alert("Job Failed") : [1, 2].includes(l.state) && V.current === C && setTimeout(n, g.k)),
                                    e.next = 19;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(7),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 19:
                                    return e.prev = 19,
                                    (p = t.indexOf(r)) > -1 && t.splice(p, 1),
                                    e.finish(19);
                                case 23:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[7, 15, 19, 23]])
                    }
                    )))).apply(this, arguments)
                }
                C && n()
            }
            ), [C]);
            var P = Object(l.useCallback)((function(e) {
                w(e.jobId),
                V.current = e.jobId,
                F(e.result),
                z.current = e.result.original,
                h(Wt[0]),
                k(!1),
                T(!!e.uploading)
            }
            ), [])
              , J = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 33;
                                    break
                                }
                                if (r = a.result,
                                !(s = Kt.find((function(e) {
                                    return e.result.original === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return P(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    id: Kt[Kt.length - 1].id + 1,
                                    jobId: "",
                                    result: {
                                        original: r
                                    }
                                },
                                Kt.push(o),
                                F(o.result),
                                z.current = o.result.original,
                                w(""),
                                h(Wt[0]),
                                k(!1),
                                T(!0),
                                o.uploading = !0,
                                e.prev = 21,
                                e.next = 24,
                                $t(n);
                            case 24:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) && (o.jobId = u.createJobResponse.job.id,
                                z.current === o.result.original && (w(o.jobId),
                                F(o.result)),
                                V.current = o.jobId),
                                T(!1),
                                o.uploading = !1,
                                e.next = 33;
                                break;
                            case 30:
                                e.prev = 30,
                                e.t0 = e.catch(21),
                                console.log(e.t0);
                            case 33:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[21, 30]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [P])
              , q = Object(l.useCallback)((function(e) {
                e && M !== e.result && P(e)
            }
            ), [M, P])
              , L = Object(l.useCallback)((function(e) {
                k(!0),
                h(e)
            }
            ), [])
              , B = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = Kt[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                M === n.result && P(Kt[e - 1]),
                Kt.splice(e, 1),
                m(u - 1)
            }
            ), [M, u, P]);
            return i.a.createElement("div", {
                className: "SeperateTransform"
            }, i.a.createElement("div", {
                className: "SeperateTransform-banner",
                style: {
                    backgroundImage: "url(".concat(Dt, ")")
                }
            }, i.a.createElement("div", {
                className: "SeperateTransform-banner-content"
            }, i.a.createElement("h2", {
                className: "SeperateTransform-banner-title"
            }, t(Bt || (Bt = Object(a.a)(["seperateTransform"])))), i.a.createElement("p", {
                className: "SeperateTransform-banner-description"
            }, t(Ht || (Ht = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "SeperateTransform-demo"
            }, i.a.createElement("div", {
                className: "SeperateTransform-main"
            }, i.a.createElement("div", {
                className: "SeperateTransform-preview"
            }, i.a.createElement("audio", {
                src: M[j],
                autoPlay: x,
                controls: !0,
                controlsList: "nodownload",
                onPlay: function() {
                    return k(!0)
                }
            })), i.a.createElement("div", {
                className: d()("SeperateTransform-result", {
                    loading: 1 === Object.keys(M).length
                })
            }, i.a.createElement("ul", {
                className: "SeperateTransform-result-list"
            }, Wt.map((function(e) {
                return i.a.createElement("li", {
                    key: e,
                    className: d()("SeperateTransform-result-item", {
                        active: j === e
                    }),
                    onClick: function() {
                        return L(e)
                    }
                }, t("seperate.".concat(e)))
            }
            ))), i.a.createElement("div", {
                className: d()("SeperateTransform-result-cover", {
                    loading: R
                })
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "SeperateTransform-result-status"
            }, t("tip.uploadingAudio"))))), i.a.createElement("div", {
                className: "SeperateTransform-sample"
            }, i.a.createElement("ul", {
                className: "SeperateTransform-sample-list"
            }, Kt.map((function(e, n) {
                return i.a.createElement("li", {
                    key: e.result.original,
                    className: d()("SeperateTransform-sample-item", {
                        active: e.result === M
                    }),
                    onClick: function() {
                        return q(Kt[n])
                    }
                }, "".concat(t("music")).concat(e.id + 1), e.isSample ? null : i.a.createElement("span", {
                    className: "SeperateTransform-sample-item-delete",
                    onClick: function(e) {
                        return B(n, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("SeperateTransform-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: J,
                accept: "audio/wav, audio/mp3"
            }))))))
        }, nn = (n(378),
        "".concat(g.d, "/assets/image/back4.jpg")), an = m.a.CancelToken, rn = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/musicVideo", cn = [{
            id: 0,
            url: "".concat(rn, "/sample1.mp3"),
            jobId: "1",
            result: "".concat(rn, "/result1.mp4"),
            isSample: !0
        }, {
            id: 1,
            url: "".concat(rn, "/sample2.mp3"),
            jobId: "2",
            result: "".concat(rn, "/result2.mp4"),
            isSample: !0
        }, {
            id: 2,
            url: "".concat(rn, "/sample3.mp3"),
            jobId: "3",
            result: "".concat(rn, "/result3.mp4"),
            isSample: !0
        }, {
            id: 3,
            url: "".concat(rn, "/sample4.mp3"),
            jobId: "4",
            result: "".concat(rn, "/result4.mp4"),
            isSample: !0
        }];
        function sn(e) {
            return on.apply(this, arguments)
        }
        function on() {
            return (on = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/music/toVideo/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                musicMV: {
                                    outputNum: 1
                                }
                            }, "".concat(g.b, "/result/musicVideo"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var ln, un, mn, pn, dn, bn = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(b.a)("musicVideo").t
              , r = Object(l.useState)(cn.length)
              , u = Object(s.a)(r, 2)
              , m = u[0]
              , p = u[1]
              , f = Object(l.useState)(cn[0].url)
              , j = Object(s.a)(f, 2)
              , h = j[0]
              , O = j[1]
              , E = Object(l.useRef)(cn[0].url)
              , x = Object(l.useState)(cn[0].jobId)
              , k = Object(s.a)(x, 2)
              , y = k[0]
              , N = k[1]
              , C = Object(l.useState)(!1)
              , w = Object(s.a)(C, 2)
              , S = w[0]
              , I = w[1]
              , R = Object(l.useRef)(cn[0].jobId)
              , T = Object(l.useState)()
              , V = Object(s.a)(T, 2)
              , _ = V[0]
              , A = V[1]
              , M = Object(l.useState)("")
              , F = Object(s.a)(M, 2)
              , z = F[0]
              , P = F[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var n;
                null === (n = t.current) || void 0 === n || n.pause();
                var a = e.current;
                function r() {
                    return s.apply(this, arguments)
                }
                function s() {
                    return (s = Object(o.a)(c.a.mark((function e() {
                        var t, n, s, o, l, i, u, m, p;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = cn.find((function(e) {
                                        return e.jobId === y
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", A(t.result));
                                case 5:
                                    return R.current === y && (A(void 0),
                                    P("")),
                                    n = an.source(),
                                    a.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(y, n.token);
                                case 11:
                                    if (o = e.sent,
                                    !(l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) || 3 !== l.state) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 16,
                                    Object(g.w)("".concat(g.b, "/result/musicVideo/").concat(null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.musicMV) || void 0 === u ? void 0 : u[0]));
                                case 16:
                                    (m = e.sent) && (t.result = m,
                                    R.current === y && A(t.result)),
                                    e.next = 21;
                                    break;
                                case 20:
                                    o.errorResponse ? R.current === y && P(o.errorResponse.message) : l && (4 === l.state ? R.current === y && P("Job Failed") : [1, 2].includes(l.state) && R.current === y && setTimeout(r, g.k));
                                case 21:
                                    e.next = 27;
                                    break;
                                case 23:
                                    e.prev = 23,
                                    e.t0 = e.catch(8),
                                    setTimeout(r, g.k),
                                    console.log(e.t0);
                                case 27:
                                    return e.prev = 27,
                                    (p = a.indexOf(n)) > -1 && a.splice(p, 1),
                                    e.finish(27);
                                case 31:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 23, 27, 31]])
                    }
                    )))).apply(this, arguments)
                }
                y && r()
            }
            ), [y]);
            var J = Object(l.useCallback)((function(e) {
                N(e.jobId),
                R.current = e.jobId,
                O(e.url),
                E.current = e.url,
                I(!!e.uploading)
            }
            ), [])
              , q = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = cn.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return J(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    id: cn[cn.length - 1].id + 1,
                                    url: r,
                                    jobId: ""
                                },
                                cn.push(o),
                                O(o.url),
                                E.current = o.url,
                                N(""),
                                A(void 0),
                                I(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                sn(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                E.current === o.url && N(u.createJobResponse.job.id),
                                R.current = o.jobId) : P((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                I(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [J])
              , L = Object(l.useCallback)((function(e) {
                e && h !== e.url && J(e)
            }
            ), [h, J])
              , B = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = cn[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                h === n.url && J(cn[e - 1]),
                cn.splice(e, 1),
                p(m - 1)
            }
            ), [h, J, m]);
            return i.a.createElement("div", {
                className: "MusicVideo"
            }, i.a.createElement("div", {
                className: "MusicVideo-banner",
                style: {
                    backgroundImage: "url(".concat(nn, ")")
                }
            }, i.a.createElement("div", {
                className: "MusicVideo-banner-content"
            }, i.a.createElement("h2", {
                className: "MusicVideo-banner-title"
            }, n(Qt || (Qt = Object(a.a)(["musicVideo"])))), i.a.createElement("p", {
                className: "MusicVideo-banner-description"
            }, n(Yt || (Yt = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "MusicVideo-demo"
            }, i.a.createElement("div", {
                className: "MusicVideo-main"
            }, i.a.createElement("div", {
                className: "MusicVideo-result"
            }, i.a.createElement("div", {
                className: d()("MusicVideo-result-wrap", {
                    loading: S || !_ && !z
                })
            }, z && !_ ? i.a.createElement("div", {
                className: "MusicVideo-result-message"
            }, "".concat(n(en || (en = Object(a.a)(["tip.processedFailed"]))), " (").concat(z, ")")) : i.a.createElement("video", {
                src: _,
                controls: !0,
                controlsList: "nodownload",
                ref: t
            }), i.a.createElement("div", {
                className: "MusicVideo-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "MusicVideo-result-cover-status"
            }, n("tip.".concat(S ? "uploadingAudio" : "processingAudio"))))))), i.a.createElement("div", {
                className: "MusicVideo-sample"
            }, i.a.createElement("ul", {
                className: "MusicVideo-sample-list"
            }, cn.map((function(e, t) {
                var a = e.id
                  , r = e.isSample
                  , c = e.url;
                return i.a.createElement("li", {
                    key: c,
                    className: d()("MusicVideo-sample-item", {
                        active: c === h
                    }),
                    onClick: function() {
                        return L(cn[t])
                    }
                }, "".concat(n("music")).concat(a + 1), r ? null : i.a.createElement("span", {
                    className: "MusicVideo-sample-item-delete",
                    onClick: function(e) {
                        return B(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("MusicVideo-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: q,
                accept: "audio/wav, audio/mp3"
            }))))))
        }, vn = (n(379),
        "".concat(g.d, "/assets/image/back16.jpg")), gn = m.a.CancelToken, fn = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/videoCrop", jn = [{
            url: "".concat(fn, "/sample1.mp4"),
            jobId: "1",
            isSample: !0,
            result: "".concat(fn, "/result1.mp4")
        }, {
            url: "".concat(fn, "/sample2.mp4"),
            jobId: "2",
            isSample: !0,
            result: "".concat(fn, "/result2.mp4")
        }, {
            url: "".concat(fn, "/sample3.mp4"),
            jobId: "3",
            isSample: !0,
            result: "".concat(fn, "/result3.mp4")
        }, {
            url: "".concat(fn, "/sample4.mp4"),
            jobId: "4",
            isSample: !0,
            result: "".concat(fn, "/result4.mp4")
        }];
        function hn(e) {
            return On.apply(this, arguments)
        }
        function On() {
            return (On = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/crop/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(t.size, "-").concat(Math.random().toString(36).slice(-6)),
                                videoCrop: {
                                    width: 100,
                                    height: 178
                                }
                            }, "".concat(g.b, "/result/videoCrop"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var En, xn, kn, yn, Nn, Cn, wn, Sn, In, Rn, Tn, Vn = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("videoCrop").t
              , u = Object(l.useState)(jn.length)
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(jn[0].url)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useRef)(jn[0].url)
              , k = Object(l.useState)(jn[0].jobId)
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(!1)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useRef)(jn[0].jobId)
              , V = Object(l.useState)()
              , _ = Object(s.a)(V, 2)
              , A = _[0]
              , M = _[1]
              , F = Object(l.useState)("")
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var a, r;
                null === (a = t.current) || void 0 === a || a.pause(),
                null === (r = n.current) || void 0 === r || r.pause();
                var s = e.current;
                function l() {
                    return i.apply(this, arguments)
                }
                function i() {
                    return (i = Object(o.a)(c.a.mark((function e() {
                        var t, n, a, r, o, i, u, m;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = jn.find((function(e) {
                                        return e.jobId === N
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", M(t.result));
                                case 5:
                                    return T.current === N && (M(void 0),
                                    J("")),
                                    n = gn.source(),
                                    s.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(N, n.token);
                                case 11:
                                    if (r = e.sent,
                                    !(o = null === (a = r.getJobResponse) || void 0 === a ? void 0 : a.job) || 3 !== o.state) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 16,
                                    Object(g.w)("".concat(g.b, "/result/videoCrop/").concat(null === (i = o.outputs[0].smartContentResult) || void 0 === i ? void 0 : i.videoCrop));
                                case 16:
                                    (u = e.sent) && (t.result = u,
                                    T.current === N && M(t.result)),
                                    e.next = 21;
                                    break;
                                case 20:
                                    r.errorResponse ? T.current === N && J(r.errorResponse.message) : o && (4 === o.state ? T.current === N && J("Job Failed") : [1, 2].includes(o.state) && T.current === N && setTimeout(l, g.k));
                                case 21:
                                    e.next = 27;
                                    break;
                                case 23:
                                    e.prev = 23,
                                    e.t0 = e.catch(8),
                                    setTimeout(l, g.k),
                                    console.log(e.t0);
                                case 27:
                                    return e.prev = 27,
                                    (m = s.indexOf(n)) > -1 && s.splice(m, 1),
                                    e.finish(27);
                                case 31:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 23, 27, 31]])
                    }
                    )))).apply(this, arguments)
                }
                N && l()
            }
            ), [N]);
            var q = Object(l.useCallback)((function(e) {
                C(e.jobId),
                T.current = e.jobId,
                E(e.url),
                x.current = e.url,
                R(!!e.uploading)
            }
            ), [])
              , L = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = jn.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return q(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                jn.push(o),
                                E(o.url),
                                x.current = o.url,
                                C(""),
                                M(void 0),
                                R(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                hn(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                x.current === o.url && C(u.createJobResponse.job.id),
                                T.current = o.jobId) : J((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                R(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [q])
              , B = Object(l.useCallback)((function(e) {
                e && O !== e.url && q(e)
            }
            ), [O, q])
              , H = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = jn[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                O === n.url && q(jn[e - 1]),
                jn.splice(e, 1),
                f(p - 1)
            }
            ), [O, q, p]);
            return i.a.createElement("div", {
                className: "VideoCrop"
            }, i.a.createElement("div", {
                className: "VideoCrop-banner",
                style: {
                    backgroundImage: "url(".concat(vn, ")")
                }
            }, i.a.createElement("div", {
                className: "VideoCrop-banner-content"
            }, i.a.createElement("h2", {
                className: "VideoCrop-banner-title"
            }, r(ln || (ln = Object(a.a)(["videoCrop"])))), i.a.createElement("p", {
                className: "VideoCrop-banner-description"
            }, r(un || (un = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "VideoCrop-demo"
            }, i.a.createElement("div", {
                className: "VideoCrop-main"
            }, i.a.createElement("div", {
                className: "VideoCrop-preview"
            }, i.a.createElement("h2", {
                className: "VideoCrop-main-title"
            }, r(mn || (mn = Object(a.a)(["originalVideo"])))), i.a.createElement("div", {
                className: "VideoCrop-preview-wrap"
            }, i.a.createElement("video", {
                src: O,
                controls: !0,
                controlsList: "nodownload",
                ref: t
            }))), i.a.createElement("div", {
                className: "VideoCrop-result"
            }, i.a.createElement("h2", {
                className: "VideoCrop-main-title"
            }, r(pn || (pn = Object(a.a)(["processedVideo"])))), i.a.createElement("div", {
                className: d()("VideoCrop-result-wrap", {
                    loading: I || !A && !P
                })
            }, P && !A ? i.a.createElement("div", {
                className: "VideoCrop-result-message"
            }, "".concat(r(dn || (dn = Object(a.a)(["tip.processedFailed"]))), " (").concat(P, ")")) : i.a.createElement("video", {
                src: A,
                controls: !0,
                controlsList: "nodownload",
                ref: n
            }), i.a.createElement("div", {
                className: "VideoCrop-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "VideoCrop-result-cover-status"
            }, r("tip.".concat(I ? "uploadingVideo" : "processingVideo"))))))), i.a.createElement("div", {
                className: "VideoCrop-sample"
            }, i.a.createElement("ul", {
                className: "VideoCrop-sample-list"
            }, jn.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("VideoCrop-sample-item", {
                        active: a === O
                    }),
                    onClick: function() {
                        return B(jn[t])
                    }
                }, i.a.createElement("video", {
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "VideoCrop-sample-item-delete",
                    onClick: function(e) {
                        return H(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("VideoCrop-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: L,
                accept: "video/mp4"
            }))))))
        }, _n = (n(380),
        "".concat(g.d, "/assets/image/home_banner.jpg")), An = function() {
            return i.a.createElement("div", {
                className: "Home"
            }, i.a.createElement("div", {
                className: "Home-banner",
                style: {
                    backgroundImage: "url(".concat(_n, ")")
                }
            }))
        }, Mn = n(167), Fn = (n(382),
        function() {
            return i.a.createElement("div", {
                className: "Loading"
            }, i.a.createElement("div", {
                className: "Loading-loader"
            }, i.a.createElement("div", null), i.a.createElement("div", null), i.a.createElement("div", null), i.a.createElement("div", null), i.a.createElement("div", null)))
        }
        ), zn = (n(383),
        "".concat(g.d, "/assets/image/back17.jpg")), Pn = m.a.CancelToken, Jn = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/smartCover", qn = v.n.TabPane, Ln = [{
            url: "".concat(Jn, "/sample1.mp4"),
            jobId: "1",
            result: ["".concat(Jn, "/result1_1.jpg"), "".concat(Jn, "/result1_2.jpg"), "".concat(Jn, "/result1_3.jpg")],
            isSample: !0
        }, {
            url: "".concat(Jn, "/sample2.mp4"),
            jobId: "2",
            result: ["".concat(Jn, "/result2_1.jpg"), "".concat(Jn, "/result2_2.jpg"), "".concat(Jn, "/result2_3.jpg")],
            isSample: !0
        }, {
            url: "".concat(Jn, "/sample3.mp4"),
            jobId: "3",
            result: ["".concat(Jn, "/result3_1.jpg"), "".concat(Jn, "/result3_2.jpg"), "".concat(Jn, "/result3_3.jpg")],
            isSample: !0
        }];
        function Bn(e) {
            return Hn.apply(this, arguments)
        }
        function Hn() {
            return (Hn = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/smartCover/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                smartCover: {
                                    outputType: 1
                                }
                            }, "".concat(g.b, "/result/smartCover"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Un, Dn, Gn, Wn, Kn, Zn = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("smartCover").t
              , u = Object(l.useState)("cover1")
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(Ln.length)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useState)(Ln[0].url)
              , k = Object(s.a)(x, 2)
              , y = k[0]
              , N = k[1]
              , C = Object(l.useRef)(Ln[0].url)
              , w = Object(l.useState)(Ln[0].jobId)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useState)(!1)
              , V = Object(s.a)(T, 2)
              , _ = V[0]
              , A = V[1]
              , M = Object(l.useRef)(Ln[0].jobId)
              , F = Object(l.useState)()
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1]
              , q = Object(l.useState)("")
              , L = Object(s.a)(q, 2)
              , B = L[0]
              , H = L[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var n;
                null === (n = t.current) || void 0 === n || n.pause();
                var a = e.current;
                function r() {
                    return s.apply(this, arguments)
                }
                function s() {
                    return (s = Object(o.a)(c.a.mark((function e() {
                        var t, n, s, o, l, i, u, m, p, d, b, v, f;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = Ln.find((function(e) {
                                        return e.jobId === I
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", J(t.result));
                                case 5:
                                    return M.current === I && (J(void 0),
                                    H("")),
                                    n = Pn.source(),
                                    a.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(I, n.token);
                                case 11:
                                    if (o = e.sent,
                                    l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job,
                                    i = [],
                                    !l || 3 !== l.state) {
                                        e.next = 33;
                                        break
                                    }
                                    return e.t0 = i,
                                    e.next = 18,
                                    Object(g.w)("".concat(g.b, "/result/smartCover/").concat(null === (u = l.outputs[0].smartContentResult) || void 0 === u || null === (m = u.smartCover) || void 0 === m ? void 0 : m[0].fileName));
                                case 18:
                                    return e.t1 = e.sent,
                                    e.t0.push.call(e.t0, e.t1),
                                    e.t2 = i,
                                    e.next = 23,
                                    Object(g.w)("".concat(g.b, "/result/smartCover/").concat(null === (p = l.outputs[0].smartContentResult) || void 0 === p || null === (d = p.smartCover) || void 0 === d ? void 0 : d[1].fileName));
                                case 23:
                                    return e.t3 = e.sent,
                                    e.t2.push.call(e.t2, e.t3),
                                    e.t4 = i,
                                    e.next = 28,
                                    Object(g.w)("".concat(g.b, "/result/smartCover/").concat(null === (b = l.outputs[0].smartContentResult) || void 0 === b || null === (v = b.smartCover) || void 0 === v ? void 0 : v[2].fileName));
                                case 28:
                                    e.t5 = e.sent,
                                    e.t4.push.call(e.t4, e.t5),
                                    3 === i.length && (t.result = i,
                                    M.current === I && J(t.result)),
                                    e.next = 34;
                                    break;
                                case 33:
                                    o.errorResponse ? M.current === I && H(o.errorResponse.message) : l && (4 === l.state ? M.current === I && H("Job Failed") : [1, 2].includes(l.state) && M.current === I && setTimeout(r, g.k));
                                case 34:
                                    e.next = 40;
                                    break;
                                case 36:
                                    e.prev = 36,
                                    e.t6 = e.catch(8),
                                    setTimeout(r, g.k),
                                    console.log(e.t6);
                                case 40:
                                    return e.prev = 40,
                                    (f = a.indexOf(n)) > -1 && a.splice(f, 1),
                                    e.finish(40);
                                case 44:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 36, 40, 44]])
                    }
                    )))).apply(this, arguments)
                }
                f("cover1"),
                I && r()
            }
            ), [I]);
            var U = Object(l.useCallback)((function(e) {
                R(e.jobId),
                M.current = e.jobId,
                N(e.url),
                C.current = e.url,
                A(!!e.uploading)
            }
            ), [])
              , D = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = Ln.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return U(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                Ln.push(o),
                                N(o.url),
                                C.current = o.url,
                                R(""),
                                J(void 0),
                                A(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                Bn(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                C.current === o.url && R(u.createJobResponse.job.id),
                                M.current = o.jobId) : H((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                A(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [U])
              , G = Object(l.useCallback)((function(e) {
                e && y !== e.url && U(e)
            }
            ), [y, U])
              , W = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = Ln[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                y === n.url && U(Ln[e - 1]),
                Ln.splice(e, 1),
                E(O - 1)
            }
            ), [y, U, O]);
            return i.a.createElement("div", {
                className: "SmartCover"
            }, i.a.createElement("div", {
                className: "SmartCover-banner",
                style: {
                    backgroundImage: "url(".concat(zn, ")")
                }
            }, i.a.createElement("div", {
                className: "SmartCover-banner-content"
            }, i.a.createElement("h2", {
                className: "SmartCover-banner-title"
            }, r(En || (En = Object(a.a)(["smartCover"])))), i.a.createElement("p", {
                className: "SmartCover-banner-description"
            }, r(xn || (xn = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "SmartCover-demo"
            }, i.a.createElement("div", {
                className: "SmartCover-main"
            }, i.a.createElement("div", {
                className: "SmartCover-preview"
            }, i.a.createElement("h2", {
                className: "SmartCover-main-title"
            }, r(kn || (kn = Object(a.a)(["originalVideo"])))), i.a.createElement("div", {
                className: "SmartCover-preview-wrap"
            }, i.a.createElement("video", {
                src: y,
                controls: !0,
                controlsList: "nodownload",
                ref: t
            }))), i.a.createElement("div", {
                className: "SmartCover-result"
            }, i.a.createElement("h2", {
                className: "SmartCover-main-title"
            }, r(yn || (yn = Object(a.a)(["coverResults"])))), i.a.createElement("div", {
                className: d()("SmartCover-result-wrap", {
                    loading: _ || !P && !B
                })
            }, i.a.createElement(v.n, {
                activeKey: p,
                onChange: f
            }, i.a.createElement(qn, {
                title: r(Nn || (Nn = Object(a.a)(["cover.cover1"]))),
                paneKey: "cover1"
            }, i.a.createElement("div", {
                className: "tab-pane"
            }, B && !P ? i.a.createElement("div", {
                className: "SmartCover-result-message"
            }, "".concat(r(Cn || (Cn = Object(a.a)(["tip.processedFailed"]))), " (").concat(B, ")")) : "undefined" == typeof P ? i.a.createElement("div", {
                className: "SmartCover-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "SmartCover-result-cover-status"
            }, r("tip.".concat(_ ? "uploadingVideo" : "processingVideo")))) : i.a.createElement("img", {
                src: P[0],
                ref: n,
                alt: "Result Covers"
            }))), i.a.createElement(qn, {
                title: r(wn || (wn = Object(a.a)(["cover.cover2"]))),
                paneKey: "cover2"
            }, i.a.createElement("div", {
                className: "tab-pane"
            }, B && !P ? i.a.createElement("div", {
                className: "SmartCover-result-message"
            }, "".concat(r(Sn || (Sn = Object(a.a)(["tip.processedFailed"]))), " (").concat(B, ")")) : "undefined" == typeof P ? i.a.createElement("div", {
                className: "SmartCover-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "SmartCover-result-cover-status"
            }, r("tip.".concat(_ ? "uploadingVideo" : "processingVideo")))) : i.a.createElement("img", {
                src: P[1],
                ref: n,
                alt: "Result Covers"
            }))), i.a.createElement(qn, {
                title: r(In || (In = Object(a.a)(["cover.cover3"]))),
                paneKey: "cover3"
            }, i.a.createElement("div", {
                className: "tab-pane"
            }, B && !P ? i.a.createElement("div", {
                className: "SmartCover-result-message"
            }, "".concat(r(Rn || (Rn = Object(a.a)(["tip.processedFailed"]))), " (").concat(B, ")")) : "undefined" == typeof P ? i.a.createElement("div", {
                className: "SmartCover-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "SmartCover-result-cover-status"
            }, r("tip.".concat(_ ? "uploadingVideo" : "processingVideo")))) : i.a.createElement("img", {
                src: P[2],
                ref: n,
                alt: "Result Covers"
            }))))))), i.a.createElement("div", {
                className: "SmartCover-sample"
            }, i.a.createElement("ul", {
                className: "SmartCover-sample-list"
            }, Ln.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("SmartCover-sample-item", {
                        active: a === y
                    }),
                    onClick: function() {
                        return G(Ln[t])
                    }
                }, i.a.createElement("video", {
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "SmartCover-sample-item-delete",
                    onClick: function(e) {
                        return W(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("SmartCover-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: D,
                message: r(Tn || (Tn = Object(a.a)(["tip.videoTimeLimit"]))),
                accept: "video/*"
            }))))))
        }, $n = (n(384),
        "".concat(g.d, "/assets/image/back18.jpeg")), Xn = m.a.CancelToken, Qn = [{
            url: "".concat(g.d, "/assets/ocr/sample1.jpg"),
            jobId: "1",
            isSample: !0,
            result: ["\u90a3\u6c11\u4e0d\u804a\u751f\u7684\u60e8\u72b6"]
        }, {
            url: "".concat(g.d, "/assets/ocr/sample2.jpeg"),
            jobId: "2",
            isSample: !0,
            result: ["2004\u5e74\u521d\u5ba1\u901a\u8fc7", "\u7ecf\u5168\u56fd\u4e2d\u5c0f\u5b66\u6559\u6750\u5ba1\u5b9a\u59d4\u5458\u4f1a", "\u4e49\u52a1\u6559\u80b2", "\u6570", "\u4e5d\u5e74\u7ea7", "\u4e2d\u5b66\u6570\u5b66\u8bfe\u7a0b\u6559\u6750\u7814\u7a76\u5f00\u53d1\u4e2d\u5fc3", "\u8bfe\u7a0b\u6559\u6750\u7814\u7a76\u6240", "SHUXUE", "\u4e0b\u518c", "\u6c11\u6728\u5e02\u5927\u8d28\u793e", "\u7f16\u8457", "\u65c5", "\u8bfe\u7a0b\u6807\u51c6\u5b9e\u9a8c\u6559\u79d1\u4e66"]
        }, {
            url: "".concat(g.d, "/assets/ocr/sample3.jpeg"),
            jobId: "3",
            isSample: !0,
            result: ["\u4e16\u754c\u8fd9\u4e48\u5927\uff0c", "\u80fd\u9047\u89c1\uff0c\u4e0d\u5bb9\u6613"]
        }, {
            url: "".concat(g.d, "/assets/ocr/sample4.png"),
            jobId: "4",
            isSample: !0,
            result: ["\u665a\u5b89", "\u559c\u6b22\u4f60", "\u8981\u8ddf\u559c\u6b22\u7684\u4eba\u8bf4\u665a\u5b89", "\u6211\u4e5f\u559c\u6b22\u4f60"]
        }];
        function Yn(e) {
            return ea.apply(this, arguments)
        }
        function ea() {
            return (ea = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/image/ocr/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.x)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                ocr: 2
                            }, "".concat(g.b, "/result/ocr"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var ta, na, aa, ra, ca, sa = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("ocr").t
              , n = Object(l.useState)(Qn.length)
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(Qn[0].url)
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useRef)(Qn[0].url)
              , E = Object(l.useState)(Qn[0].jobId)
              , x = Object(s.a)(E, 2)
              , k = x[0]
              , y = x[1]
              , N = Object(l.useState)(!1)
              , C = Object(s.a)(N, 2)
              , w = C[0]
              , S = C[1]
              , I = Object(l.useRef)(Qn[0].jobId)
              , R = Object(l.useState)()
              , T = Object(s.a)(R, 2)
              , V = T[0]
              , _ = T[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, m, p, d, b, v, f;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = Qn.find((function(e) {
                                        return e.jobId === k
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", _(a.result));
                                case 5:
                                    return I.current === k && _(void 0),
                                    r = Xn.source(),
                                    t.push(r),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(k, r.token);
                                case 11:
                                    if (l = e.sent,
                                    i = null === (s = l.getJobResponse) || void 0 === s ? void 0 : s.job,
                                    u = [],
                                    i && 3 === i.state && "undefined" !== typeof (null === (o = i.outputs[0].smartContentResult) || void 0 === o ? void 0 : o.ocr)) {
                                        for (m = 0; m < (null === (p = i.outputs[0].smartContentResult) || void 0 === p || null === (d = p.ocr) || void 0 === d ? void 0 : d.length); m++)
                                            u.push(null === (b = i.outputs[0].smartContentResult) || void 0 === b || null === (v = b.ocr) || void 0 === v ? void 0 : v[m].text);
                                        u && (a.result = u,
                                        I.current === k && _(a.result))
                                    } else
                                        i && (4 === i.state ? I.current === k && alert("Job Failed") : [1, 2].includes(i.state) && I.current === k && setTimeout(n, g.k));
                                    e.next = 21;
                                    break;
                                case 17:
                                    e.prev = 17,
                                    e.t0 = e.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 21:
                                    return e.prev = 21,
                                    (f = t.indexOf(r)) > -1 && t.splice(f, 1),
                                    e.finish(21);
                                case 25:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 17, 21, 25]])
                    }
                    )))).apply(this, arguments)
                }
                k && n()
            }
            ), [k, V]);
            var A = Object(l.useCallback)((function(e) {
                y(e.jobId),
                I.current = e.jobId,
                h(e.url),
                O.current = e.url,
                S(!!e.uploading)
            }
            ), [])
              , M = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = Qn.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return A(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                Qn.push(o),
                                h(o.url),
                                O.current = o.url,
                                y(""),
                                _(void 0),
                                S(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                Yn(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) && (o.jobId = u.createJobResponse.job.id,
                                O.current === o.url && y(u.createJobResponse.job.id),
                                I.current = o.jobId),
                                S(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [A])
              , F = Object(l.useCallback)((function(e) {
                var t = Qn[e];
                j !== t.url && A(t)
            }
            ), [j, A])
              , z = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = Qn[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                j === n.url && A(Qn[e - 1]),
                Qn.splice(e, 1),
                m(u - 1)
            }
            ), [j, A, u]);
            return i.a.createElement("div", {
                className: "OCR"
            }, i.a.createElement("div", {
                className: "OCR-banner",
                style: {
                    backgroundImage: "url(".concat($n, ")")
                }
            }, i.a.createElement("div", {
                className: "OCR-banner-content"
            }, i.a.createElement("h2", {
                className: "OCR-banner-title"
            }, t(Un || (Un = Object(a.a)(["ocr"]))), i.a.createElement("span", {
                className: "OCR-banner-title-tag"
            }, "Beta")), i.a.createElement("p", {
                className: "OCR-banner-description"
            }, t(Dn || (Dn = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "OCR-demo"
            }, i.a.createElement("div", {
                className: "OCR-main"
            }, i.a.createElement("div", {
                className: "OCR-preview"
            }, i.a.createElement("h2", {
                className: "OCR-main-title"
            }, t(Gn || (Gn = Object(a.a)(["originalPicture"])))), i.a.createElement("div", {
                className: "OCR-preview-wrap"
            }, i.a.createElement("img", {
                src: j,
                alt: "Original Picture"
            }))), i.a.createElement("div", {
                className: "OCR-result"
            }, i.a.createElement("h2", {
                className: "OCR-result-title"
            }, t(Wn || (Wn = Object(a.a)(["OCRResult"])))), i.a.createElement("div", {
                className: "OCR-result-wrap"
            }, i.a.createElement(v.k, {
                result: V ? V || "Error" : void 0
            })), i.a.createElement("div", {
                className: d()("OCR-result-placeholder", {
                    loading: w
                })
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "OCR-result-placeholder-status"
            }, t(Kn || (Kn = Object(a.a)(["tip.uploadingPicture"]))))))), i.a.createElement("div", {
                className: "OCR-sample"
            }, i.a.createElement("ul", {
                className: "OCR-sample-list"
            }, Qn.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("OCR-sample-item", {
                        active: a === j
                    }),
                    onClick: function() {
                        return F(t)
                    }
                }, i.a.createElement("img", {
                    src: a,
                    alt: "OCR samples"
                }), n ? null : i.a.createElement("span", {
                    className: "OCR-sample-item-delete",
                    onClick: function(e) {
                        return z(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("OCR-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: M,
                accept: "image/jpg"
            }))))))
        }, oa = (n(385),
        "".concat(g.d, "/assets/image/back19.jpg")), la = m.a.CancelToken, ia = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/removeWatermark", ua = [{
            url: "".concat(ia, "/DouYin.mp4"),
            jobId: "1",
            result: {
                watermarkInfos: [{
                    xCoordinate: "605",
                    yCoordinate: "1838",
                    width: "432",
                    height: "50",
                    content: "\u6211\u7684\u6296\u97f3\u53f7\uff1a1314988"
                }, {
                    xCoordinate: "904",
                    yCoordinate: "1748",
                    width: "142",
                    height: "88",
                    content: "\u6296\u97f3"
                }, {
                    xCoordinate: "33",
                    yCoordinate: "134",
                    width: "435",
                    height: "42",
                    content: "\u6211\u7684\u6296\u97f3\u53f7\uff1a1314988"
                }, {
                    xCoordinate: "119",
                    yCoordinate: "40",
                    width: "144",
                    height: "82",
                    content: "\u6296\u97f3"
                }],
                fileName: "934a71537c964d899dee515e2ba7598c_1623900672365.mp4"
            },
            isSample: !0
        }, {
            url: "".concat(ia, "/Tencent.mp4"),
            jobId: "2",
            result: {
                watermarkInfos: [{
                    xCoordinate: "1112",
                    yCoordinate: "40",
                    width: "116",
                    height: "33",
                    content: "\u817e\u8baf\u89c6\u9891"
                }],
                fileName: "93cbc9e19dc445c79e39ebda492f8ad9_1623942106515.mp4"
            },
            isSample: !0
        }, {
            url: "".concat(ia, "/KuaiShou.mp4"),
            jobId: "3",
            result: {
                watermarkInfos: [{
                    xCoordinate: "253",
                    yCoordinate: "1234",
                    width: "212",
                    height: "34",
                    content: "\u5feb\u624b@939855539"
                }, {
                    xCoordinate: "279",
                    yCoordinate: "1141",
                    width: "165",
                    height: "72",
                    content: "\u7559\u5feb\u624b"
                }],
                fileName: "8e5ff0cc0122415193543c949b0e28f9_1623942657957.mp4"
            },
            isSample: !0
        }, {
            url: "".concat(ia, "/XiGua.MP4"),
            jobId: "4",
            result: {
                watermarkInfos: [{
                    xCoordinate: "540",
                    yCoordinate: "22",
                    width: "80",
                    height: "25",
                    content: "\u897f\u74dc\u89c6\u9891"
                }],
                fileName: "5619187a169d45088c16ce1b4fdab60c_1624344568856.mp4"
            },
            isSample: !0
        }];
        function ma(e) {
            return pa.apply(this, arguments)
        }
        function pa() {
            return (pa = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/removeWatermark/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                removeWatermark: {
                                    outputFile: 2
                                }
                            }, "".concat(g.b, "/result/removeWatermark"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var da, ba, va, ga, fa, ja, ha = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("removeWatermark").t
              , u = Object(l.useState)(ua.length)
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(ua[0].url)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useRef)(ua[0].url)
              , k = Object(l.useState)(ua[0].jobId)
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(!1)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useRef)(ua[0].jobId)
              , V = Object(l.useState)()
              , _ = Object(s.a)(V, 2)
              , A = _[0]
              , M = _[1]
              , F = Object(l.useState)("")
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var a, r;
                null === (a = t.current) || void 0 === a || a.pause(),
                null === (r = n.current) || void 0 === r || r.pause();
                var s = e.current;
                function l() {
                    return i.apply(this, arguments)
                }
                function i() {
                    return (i = Object(o.a)(c.a.mark((function e() {
                        var t, n, a, r, o, i, u, m;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = ua.find((function(e) {
                                        return e.jobId === N
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", M(t.result));
                                case 5:
                                    return T.current === N && (M(void 0),
                                    J("")),
                                    n = la.source(),
                                    s.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(N, n.token);
                                case 11:
                                    r = e.sent,
                                    (o = null === (a = r.getJobResponse) || void 0 === a ? void 0 : a.job) && 3 === o.state ? (u = null === (i = o.outputs[0].smartContentResult) || void 0 === i ? void 0 : i.removeWatermark) && (t.result = u,
                                    T.current === N && M(t.result)) : r.errorResponse ? T.current === N && J(r.errorResponse.message) : o && (4 === o.state ? T.current === N && J("Job Failed") : [1, 2].includes(o.state) && T.current === N && setTimeout(l, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(l, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (m = s.indexOf(n)) > -1 && s.splice(m, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                N && l()
            }
            ), [N]);
            var q = Object(l.useCallback)((function(e) {
                C(e.jobId),
                T.current = e.jobId,
                E(e.url),
                x.current = e.url,
                R(!!e.uploading)
            }
            ), [])
              , L = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = ua.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return q(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                ua.push(o),
                                E(o.url),
                                x.current = o.url,
                                C(""),
                                M(void 0),
                                R(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                ma(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                x.current === o.url && C(u.createJobResponse.job.id),
                                T.current = o.jobId) : J((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                R(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [q])
              , B = Object(l.useCallback)((function(e) {
                e && O !== e.url && q(e)
            }
            ), [O, q])
              , H = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = ua[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                O === n.url && q(ua[e - 1]),
                ua.splice(e, 1),
                f(p - 1)
            }
            ), [O, q, p]);
            return i.a.createElement("div", {
                className: "RemoveWatermark"
            }, i.a.createElement("div", {
                className: "RemoveWatermark-banner",
                style: {
                    backgroundImage: "url(".concat(oa, ")")
                }
            }, i.a.createElement("div", {
                className: "RemoveWatermark-banner-content"
            }, i.a.createElement("h2", {
                className: "RemoveWatermark-banner-title"
            }, r(ta || (ta = Object(a.a)(["removeWatermark"]))), i.a.createElement("span", {
                className: "RemoveWatermark-banner-title-tag"
            }, "Beta")), i.a.createElement("p", {
                className: "RemoveWatermark-banner-description"
            }, r(na || (na = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "RemoveWatermark-demo"
            }, i.a.createElement("div", {
                className: "RemoveWatermark-main"
            }, i.a.createElement("div", {
                className: "RemoveWatermark-preview"
            }, i.a.createElement("h2", {
                className: "RemoveWatermark-main-title"
            }, r(aa || (aa = Object(a.a)(["originalVideo"])))), i.a.createElement("div", {
                className: "RemoveWatermark-preview-wrap"
            }, i.a.createElement("video", {
                src: O,
                controls: !0,
                controlsList: "nodownload",
                ref: t
            }, " "))), i.a.createElement("div", {
                className: "RemoveWatermark-result"
            }, i.a.createElement("h2", {
                className: "RemoveWatermark-result-title"
            }, r(ra || (ra = Object(a.a)(["removedWatermarks"])))), i.a.createElement("div", {
                className: "RemoveWatermark-result-wrap"
            }, i.a.createElement(v.l, {
                result: A ? A || "Error" : void 0
            })), i.a.createElement("div", {
                className: d()("RemoveWatermark-result-placeholder", {
                    loading: I || !A && !P
                })
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "RemoveWatermark-result-placeholder-status"
            }, r("tip.".concat(I ? "uploadingVideo" : "processingVideo")))))), i.a.createElement("div", {
                className: "RemoveWatermark-sample"
            }, i.a.createElement("ul", {
                className: "RemoveWatermark-sample-list"
            }, ua.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("RemoveWatermark-sample-item", {
                        active: a === O
                    }),
                    onClick: function() {
                        return B(ua[t])
                    }
                }, i.a.createElement("video", {
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "RemoveWatermark-sample-item-delete",
                    onClick: function(e) {
                        return H(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("RemoveWatermark-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: L,
                message: r(ca || (ca = Object(a.a)(["tip.videoTimeLimit"]))),
                accept: "video/*"
            }))))))
        }, Oa = (n(386),
        "".concat(g.d, "/assets/image/back20.jpg")), Ea = m.a.CancelToken, xa = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/smartVlog", ka = [{
            url: "".concat(xa, "/Copenhagen_City_Walk.mp4"),
            jobId: "1",
            result: "".concat(xa, "/Copenhagen_City_Walk_result.mp4"),
            isSample: !0
        }, {
            url: "".concat(xa, "/Bordeaux_City_Walk.mp4"),
            jobId: "2",
            result: "".concat(xa, "/Bordeaux_City_Walk_result.mp4"),
            isSample: !0
        }, {
            url: "".concat(xa, "/Japanese_Forest_Park.mp4"),
            jobId: "3",
            result: "".concat(xa, "/Japanese_Forest_Park_result.mp4"),
            isSample: !0
        }];
        function ya(e) {
            return Na.apply(this, arguments)
        }
        function Na() {
            return (Na = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/smartVlog/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "vlog",
                                vlog: {
                                    outputNum: 1,
                                    bgmOption: 1
                                }
                            }, "".concat(g.b, "/result/smartVlog"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Ca, wa, Sa, Ia, Ra, Ta = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("smartVlog").t
              , u = Object(l.useState)(ka.length)
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(ka[0].url)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useRef)(ka[0].url)
              , k = Object(l.useState)(ka[0].jobId)
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(!1)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useRef)(ka[0].jobId)
              , V = Object(l.useState)()
              , _ = Object(s.a)(V, 2)
              , A = _[0]
              , M = _[1]
              , F = Object(l.useState)("")
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var a, r;
                null === (a = t.current) || void 0 === a || a.pause(),
                null === (r = n.current) || void 0 === r || r.pause();
                var s = e.current;
                function l() {
                    return i.apply(this, arguments)
                }
                function i() {
                    return (i = Object(o.a)(c.a.mark((function e() {
                        var t, n, a, r, o, i, u, m, p, d;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = ka.find((function(e) {
                                        return e.jobId === N
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", M(t.result));
                                case 5:
                                    return T.current === N && (M(void 0),
                                    J("")),
                                    n = Ea.source(),
                                    s.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(N, n.token);
                                case 11:
                                    if (o = e.sent,
                                    !(i = null === (a = o.getJobResponse) || void 0 === a ? void 0 : a.job) || 3 !== i.state || "undefined" === typeof (null === (r = i.outputs[0].smartContentResult) || void 0 === r ? void 0 : r.vlog)) {
                                        e.next = 24;
                                        break
                                    }
                                    if (0 !== Object.keys(null === (u = i.outputs[0].smartContentResult) || void 0 === u ? void 0 : u.vlog).length) {
                                        e.next = 18;
                                        break
                                    }
                                    T.current === N && J("Video is too short"),
                                    e.next = 22;
                                    break;
                                case 18:
                                    return e.next = 20,
                                    Object(g.w)("".concat(g.b, "/result/smartVlog/").concat(null === (m = i.outputs[0].smartContentResult) || void 0 === m ? void 0 : m.vlog.bgmOutputs[0]));
                                case 20:
                                    (p = e.sent) && (t.result = p,
                                    T.current === N && M(t.result));
                                case 22:
                                    e.next = 25;
                                    break;
                                case 24:
                                    o.errorResponse ? T.current === N && J(o.errorResponse.message) : i && (4 === i.state ? T.current === N && J("Job Failed") : [1, 2].includes(i.state) && T.current === N && setTimeout(l, g.k));
                                case 25:
                                    e.next = 31;
                                    break;
                                case 27:
                                    e.prev = 27,
                                    e.t0 = e.catch(8),
                                    setTimeout(l, g.k),
                                    console.log(e.t0);
                                case 31:
                                    return e.prev = 31,
                                    (d = s.indexOf(n)) > -1 && s.splice(d, 1),
                                    e.finish(31);
                                case 35:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 27, 31, 35]])
                    }
                    )))).apply(this, arguments)
                }
                N && l()
            }
            ), [N]);
            var q = Object(l.useCallback)((function(e) {
                C(e.jobId),
                T.current = e.jobId,
                E(e.url),
                x.current = e.url,
                R(!!e.uploading)
            }
            ), [])
              , L = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = ka.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return q(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                ka.push(o),
                                E(o.url),
                                x.current = o.url,
                                C(""),
                                M(void 0),
                                R(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                ya(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                x.current === o.url && C(u.createJobResponse.job.id),
                                T.current = o.jobId) : J((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                R(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [q])
              , B = Object(l.useCallback)((function(e) {
                e && O !== e.url && q(e)
            }
            ), [O, q])
              , H = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = ka[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                O === n.url && q(ka[e - 1]),
                ka.splice(e, 1),
                f(p - 1)
            }
            ), [O, q, p]);
            return i.a.createElement("div", {
                className: "SmartVlog"
            }, i.a.createElement("div", {
                className: "SmartVlog-banner",
                style: {
                    backgroundImage: "url(".concat(Oa, ")")
                }
            }, i.a.createElement("div", {
                className: "SmartVlog-banner-content"
            }, i.a.createElement("h2", {
                className: "SmartVlog-banner-title"
            }, r(da || (da = Object(a.a)(["smartVlog"])))), i.a.createElement("p", {
                className: "SmartVlog-banner-description"
            }, r(ba || (ba = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "SmartVlog-demo"
            }, i.a.createElement("div", {
                className: "SmartVlog-main"
            }, i.a.createElement("div", {
                className: "SmartVlog-preview"
            }, i.a.createElement("h2", {
                className: "SmartVlog-main-title"
            }, r(va || (va = Object(a.a)(["originalVideo"])))), i.a.createElement("div", {
                className: "SmartVlog-preview-wrap"
            }, i.a.createElement("video", {
                src: O,
                controls: !0,
                controlsList: "nodownload",
                ref: t
            }))), i.a.createElement("div", {
                className: "SmartVlog-result"
            }, i.a.createElement("h2", {
                className: "SmartVlog-main-title"
            }, r(ga || (ga = Object(a.a)(["processedVideo"])))), i.a.createElement("div", {
                className: d()("SmartVlog-result-wrap", {
                    loading: I || !A && !P
                })
            }, P && !A ? i.a.createElement("div", {
                className: "SmartVlog-result-message"
            }, "".concat(r(fa || (fa = Object(a.a)(["tip.processedFailed"]))), " (").concat(P, ")")) : i.a.createElement("video", {
                src: A,
                controls: !0,
                controlsList: "nodownload",
                ref: n
            }), i.a.createElement("div", {
                className: "SmartVlog-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "SmartVlog-result-cover-status"
            }, r("tip.".concat(I ? "uploadingVideo" : "processingVideo"))))))), i.a.createElement("div", {
                className: "SmartVlog-sample"
            }, i.a.createElement("ul", {
                className: "SmartVlog-sample-list"
            }, ka.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("SmartVlog-sample-item", {
                        active: a === O
                    }),
                    onClick: function() {
                        return B(ka[t])
                    }
                }, i.a.createElement("video", {
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "SmartVlog-sample-item-delete",
                    onClick: function(e) {
                        return H(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("SmartVlog-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: L,
                message: r(ja || (ja = Object(a.a)(["tip.videoTimeLimit"]))),
                accept: "video/*"
            }))))))
        }, Va = n(58), _a = (n(387),
        "".concat(g.d, "/assets/image/back22.jpg")), Aa = m.a.CancelToken, Ma = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/audioTagger", Fa = [{
            id: 0,
            url: "".concat(Ma, "/sample1.mp3"),
            jobId: "1",
            isSample: !0,
            result: Object(Va.a)(g.a[0])
        }, {
            id: 1,
            url: "".concat(Ma, "/sample2.mp3"),
            jobId: "2",
            isSample: !0,
            result: Object(Va.a)(g.a[1])
        }, {
            id: 2,
            url: "".concat(Ma, "/sample3.mp3"),
            jobId: "3",
            isSample: !0,
            result: Object(Va.a)(g.a[2])
        }, {
            id: 3,
            url: "".concat(Ma, "/sample4.mp3"),
            jobId: "4",
            isSample: !0,
            result: Object(Va.a)(g.a[3])
        }];
        function za(e) {
            return Pa.apply(this, arguments)
        }
        function Pa() {
            return (Pa = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/music/audioTagger/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.x)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                audioTagger: {
                                    tags: [1, 2, 3]
                                }
                            }, "".concat(g.b, "/result/audioTagger"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Ja, qa, La, Ba, Ha, Ua = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("audioTagger").t
              , n = Object(l.useState)(Fa.length)
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(Fa[0].url)
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useRef)(Fa[0].url)
              , E = Object(l.useState)(Fa[0].jobId)
              , x = Object(s.a)(E, 2)
              , k = x[0]
              , y = x[1]
              , N = Object(l.useState)(!1)
              , C = Object(s.a)(N, 2)
              , w = C[0]
              , S = C[1]
              , I = Object(l.useRef)(Fa[0].jobId)
              , R = Object(l.useState)()
              , T = Object(s.a)(R, 2)
              , V = T[0]
              , _ = T[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, m;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = Fa.find((function(e) {
                                        return e.jobId === k
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", _(a.result));
                                case 5:
                                    return I.current === k && _(void 0),
                                    r = Aa.source(),
                                    t.push(r),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(k, r.token);
                                case 11:
                                    l = e.sent,
                                    (i = null === (s = l.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === i.state && "undefined" !== typeof (null === (o = i.outputs[0].smartContentResult) || void 0 === o ? void 0 : o.audioTagger) ? (u = i.outputs[0].smartContentResult.audioTagger) && (a.result = u,
                                    I.current === k && _(a.result)) : i && (4 === i.state ? I.current === k && alert("Job Failed") : [1, 2].includes(i.state) && I.current === k && setTimeout(n, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (m = t.indexOf(r)) > -1 && t.splice(m, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                k && n()
            }
            ), [k, V]);
            var A = Object(l.useCallback)((function(e) {
                y(e.jobId),
                I.current = e.jobId,
                h(e.url),
                O.current = e.url,
                S(!!e.uploading)
            }
            ), [])
              , M = (Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = Fa.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return A(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    id: Fa[Fa.length - 1].id + 1,
                                    url: r,
                                    jobId: ""
                                },
                                Fa.push(o),
                                h(o.url),
                                O.current = o.url,
                                y(""),
                                _(void 0),
                                S(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                za(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) && (o.jobId = u.createJobResponse.job.id,
                                O.current === o.url && y(u.createJobResponse.job.id),
                                I.current = o.jobId),
                                S(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [A]),
            Object(l.useCallback)((function(e) {
                var t = Fa[e];
                j !== t.url && A(t)
            }
            ), [j, A]))
              , F = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = Fa[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                j === n.url && A(Fa[e - 1]),
                Fa.splice(e, 1),
                m(u - 1)
            }
            ), [j, A, u]);
            return i.a.createElement("div", {
                className: "AudioTagger"
            }, i.a.createElement("div", {
                className: "AudioTagger-banner",
                style: {
                    backgroundImage: "url(".concat(_a, ")")
                }
            }, i.a.createElement("div", {
                className: "AudioTagger-banner-content"
            }, i.a.createElement("h2", {
                className: "AudioTagger-banner-title"
            }, t(Ca || (Ca = Object(a.a)(["audioTagger"]))), i.a.createElement("span", {
                className: "AudioTagger-banner-title-tag"
            }, "Beta")), i.a.createElement("p", {
                className: "AudioTagger-banner-description"
            }, t(wa || (wa = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "AudioTagger-demo"
            }, i.a.createElement("div", {
                className: "AudioTagger-main"
            }, i.a.createElement("div", {
                className: "AudioTagger-preview"
            }, i.a.createElement("h2", {
                className: "AudioTagger-main-title"
            }, t(Sa || (Sa = Object(a.a)(["originalAudio"])))), i.a.createElement("audio", {
                src: j,
                controls: !0,
                controlsList: "nodownload"
            })), i.a.createElement("div", {
                className: "AudioTagger-result"
            }, i.a.createElement("h2", {
                className: "AudioTagger-result-title"
            }, t(Ia || (Ia = Object(a.a)(["audioTaggerResult"])))), i.a.createElement("div", {
                className: "AudioTagger-result-wrap"
            }, i.a.createElement(v.b, {
                result: V ? V || "Error" : void 0
            })), i.a.createElement("div", {
                className: d()("AudioTagger-result-placeholder", {
                    loading: w
                })
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "AudioTagger-result-placeholder-status"
            }, t(Ra || (Ra = Object(a.a)(["tip.uploadingAudio"]))))))), i.a.createElement("div", {
                className: "AudioTagger-sample"
            }, i.a.createElement("ul", {
                className: "AudioTagger-sample-list"
            }, Fa.map((function(e, n) {
                return i.a.createElement("li", {
                    key: e.url,
                    className: d()("AudioTagger-sample-item", {
                        active: e.url === j
                    }),
                    onClick: function() {
                        return M(e.id)
                    }
                }, "".concat(t("music")).concat(e.id + 1), e.isSample ? null : i.a.createElement("span", {
                    className: "AudioTagger-sample-item-delete",
                    onClick: function(e) {
                        return F(n, e)
                    }
                }))
            }
            ))))))
        }, Da = (n(388),
        "".concat(g.d, "/assets/image/back21.jpeg")), Ga = m.a.CancelToken, Wa = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/imageEnhancement", Ka = [{
            url: "".concat(Wa, "/Demo1-before.jpg"),
            jobId: "1",
            result: "".concat(Wa, "/Demo1-after.jfif"),
            isSample: !0
        }, {
            url: "".concat(Wa, "/Demo2-before.jpg"),
            jobId: "2",
            result: "".concat(Wa, "/Demo2-after.jfif"),
            isSample: !0
        }, {
            url: "".concat(Wa, "/Demo3-before.png"),
            jobId: "3",
            result: "".concat(Wa, "/Demo3-after.png"),
            isSample: !0
        }, {
            url: "".concat(Wa, "/Demo4-before.jpg"),
            jobId: "4",
            result: "".concat(Wa, "/Demo4-after.jfif"),
            isSample: !0
        }];
        function Za(e) {
            return $a.apply(this, arguments)
        }
        function $a() {
            return ($a = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/image/enhancement/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                imageEnhancement: {
                                    restoration: 1
                                }
                            }, "".concat(g.b, "/result/imageEnhancement"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Xa, Qa, Ya, er, tr = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("imageEnhancement").t
              , u = Object(l.useState)(Ka.length)
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(Ka[0].url)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useRef)(Ka[0].url)
              , k = Object(l.useState)(Ka[0].jobId)
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(!1)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useRef)(Ka[0].jobId)
              , V = Object(l.useState)()
              , _ = Object(s.a)(V, 2)
              , A = _[0]
              , M = _[1]
              , F = Object(l.useState)("")
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, m;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = Ka.find((function(e) {
                                        return e.jobId === N
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", M(a.result));
                                case 5:
                                    return T.current === N && (M(void 0),
                                    J("")),
                                    r = Ga.source(),
                                    t.push(r),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(N, r.token);
                                case 11:
                                    if (o = e.sent,
                                    !(l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) || 3 !== l.state) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 16,
                                    Object(g.w)("".concat(g.b, "/result/imageEnhancement/").concat(null === (i = l.outputs[0].smartContentResult) || void 0 === i ? void 0 : i.imageEnhancement));
                                case 16:
                                    (u = e.sent) && (a.result = u,
                                    T.current === N && M(a.result)),
                                    e.next = 21;
                                    break;
                                case 20:
                                    o.errorResponse ? T.current === N && J(o.errorResponse.message) : l && (4 === l.state ? T.current === N && J("Job Failed") : [1, 2].includes(l.state) && T.current === N && setTimeout(n, g.k));
                                case 21:
                                    e.next = 27;
                                    break;
                                case 23:
                                    e.prev = 23,
                                    e.t0 = e.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 27:
                                    return e.prev = 27,
                                    (m = t.indexOf(r)) > -1 && t.splice(m, 1),
                                    e.finish(27);
                                case 31:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 23, 27, 31]])
                    }
                    )))).apply(this, arguments)
                }
                N && n()
            }
            ), [N]);
            var q = Object(l.useCallback)((function(e) {
                C(e.jobId),
                T.current = e.jobId,
                E(e.url),
                x.current = e.url,
                R(!!e.uploading)
            }
            ), [])
              , L = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = Ka.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return q(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                Ka.push(o),
                                E(o.url),
                                x.current = o.url,
                                C(""),
                                M(void 0),
                                R(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                Za(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                x.current === o.url && C(u.createJobResponse.job.id),
                                T.current = o.jobId) : J((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                R(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [q])
              , B = Object(l.useCallback)((function(e) {
                e && O !== e.url && q(e)
            }
            ), [O, q])
              , H = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = Ka[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                O === n.url && q(Ka[e - 1]),
                Ka.splice(e, 1),
                f(p - 1)
            }
            ), [O, q, p]);
            return i.a.createElement("div", {
                className: "ImageEnhancement"
            }, i.a.createElement("div", {
                className: "ImageEnhancement-banner",
                style: {
                    backgroundImage: "url(".concat(Da, ")")
                }
            }, i.a.createElement("div", {
                className: "ImageEnhancement-banner-content"
            }, i.a.createElement("h2", {
                className: "ImageEnhancement-banner-title"
            }, r(Ja || (Ja = Object(a.a)(["imageEnhancement"])))), i.a.createElement("p", {
                className: "ImageEnhancement-banner-description"
            }, r(qa || (qa = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "ImageEnhancement-demo"
            }, i.a.createElement("div", {
                className: "ImageEnhancement-main"
            }, i.a.createElement("div", {
                className: "ImageEnhancement-preview"
            }, i.a.createElement("h2", {
                className: "ImageEnhancement-main-title"
            }, r(La || (La = Object(a.a)(["originalPicture"])))), i.a.createElement("div", {
                className: "ImageEnhancement-preview-wrap"
            }, i.a.createElement("img", {
                src: O,
                ref: t,
                alt: ""
            }))), i.a.createElement("div", {
                className: "ImageEnhancement-result"
            }, i.a.createElement("h2", {
                className: "ImageEnhancement-main-title"
            }, r(Ba || (Ba = Object(a.a)(["processedPicture"])))), i.a.createElement("div", {
                className: d()("ImageEnhancement-result-wrap", {
                    loading: I || !A && !P
                })
            }, P && !A ? i.a.createElement("div", {
                className: "ImageEnhancement-result-message"
            }, "".concat(r(Ha || (Ha = Object(a.a)(["tip.imageFailed"]))), " (").concat(P, ")")) : i.a.createElement("img", {
                src: A,
                ref: n,
                alt: ""
            }), i.a.createElement("div", {
                className: "ImageEnhancement-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "ImageEnhancement-result-cover-status"
            }, r("tip.".concat(I ? "uploadingPicture" : "processingPicture"))))))), i.a.createElement("div", {
                className: "ImageEnhancement-sample"
            }, i.a.createElement("ul", {
                className: "ImageEnhancement-sample-list"
            }, Ka.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("ImageEnhancement-sample-item", {
                        active: a === O
                    }),
                    onClick: function() {
                        return B(Ka[t])
                    }
                }, i.a.createElement("img", {
                    src: a,
                    alt: ""
                }), n ? null : i.a.createElement("span", {
                    className: "ImageEnhancement-sample-item-delete",
                    onClick: function(e) {
                        return H(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("ImageEnhancement-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: L,
                accept: "image/jpg"
            }))))))
        }, nr = (n(389),
        "".concat(g.d, "/assets/image/back1.jpg")), ar = m.a.CancelToken, rr = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/imageComposition", cr = [{
            url: rr + "/quiet.jpeg",
            jobId: "1",
            isSample: !0,
            outputUrl: rr + "/quiet.mp3",
            name: "\u5b89\u9759"
        }, {
            url: rr + "/lazy.jpg",
            jobId: "2",
            isSample: !0,
            outputUrl: rr + "/lazy.mp3",
            name: "\u6175\u61d2"
        }, {
            url: rr + "/magnificent.jpeg",
            jobId: "3",
            isSample: !0,
            outputUrl: rr + "/magnificent.mp3",
            name: "\u6062\u5f18"
        }, {
            url: rr + "/sad.jpg",
            jobId: "4",
            isSample: !0,
            outputUrl: rr + "/sad.mp3",
            name: "\u4f24\u611f"
        }];
        function sr(e) {
            return or.apply(this, arguments)
        }
        function or() {
            return (or = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/picture/imgcomp/").concat(t.size, "-").concat(t.name.replace(".jpeg", ".jpg")),
                            e.next = 3,
                            Object(g.x)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "",
                                imageBgmGeneration: {
                                    songQuantity: 1
                                }
                            }, "/assets/imagecomp");
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var lr, ir, ur, mr, pr, dr, br = function() {
            var e = Object(l.useRef)([])
              , t = Object(b.a)("imageComposition").t
              , n = Object(l.useState)(cr.length)
              , r = Object(s.a)(n, 2)
              , u = r[0]
              , m = r[1]
              , p = Object(l.useState)(cr[0].url)
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useRef)(cr[0].url)
              , E = Object(l.useState)(cr[0].jobId)
              , x = Object(s.a)(E, 2)
              , k = x[0]
              , y = x[1]
              , N = Object(l.useState)(!1)
              , C = Object(s.a)(N, 2)
              , w = C[0]
              , S = C[1]
              , I = Object(l.useRef)(cr[0].jobId)
              , R = Object(l.useState)(cr[0].outputUrl || "")
              , T = Object(s.a)(R, 2)
              , V = T[0]
              , _ = T[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, m, p;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = cr.find((function(e) {
                                        return e.jobId === k
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.outputUrl) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", _(a.outputUrl));
                                case 5:
                                    return I.current === k && _(""),
                                    r = ar.source(),
                                    t.push(r),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(k, r.token);
                                case 11:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? (console.log(l),
                                    S(!1),
                                    m = null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.imageBgmGeneration) || void 0 === u ? void 0 : u[0].songName,
                                    a.outputUrl = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/imagecomp/".concat(m),
                                    I.current === k && _(a.outputUrl)) : l && (4 === l.state ? I.current === k && alert("Job Failed") : [1, 2].includes(l.state) && I.current === k && setTimeout(n, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (p = t.indexOf(r)) > -1 && t.splice(p, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                k && n()
            }
            ), [k, V]);
            var A = Object(l.useCallback)((function(e) {
                y(e.jobId),
                I.current = e.jobId,
                _(e.outputUrl),
                h(e.url),
                O.current = e.url,
                S(!!e.uploading)
            }
            ), [])
              , M = Object(l.useCallback)((function(e) {
                var t = cr[e];
                j !== t.url && A(t)
            }
            ), [j, A])
              , F = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 34;
                                    break
                                }
                                if (r = a.result,
                                !(s = cr.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return A(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: "",
                                    outputUrl: ""
                                },
                                cr.push(o),
                                h(o.url),
                                O.current = o.url,
                                y(""),
                                _(""),
                                S(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                sr(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) && (o.jobId = u.createJobResponse.job.id,
                                O.current === o.url && y(u.createJobResponse.job.id),
                                I.current = o.jobId),
                                e.next = 30;
                                break;
                            case 27:
                                e.prev = 27,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 30:
                                return e.prev = 30,
                                S(!1),
                                o.uploading = !1,
                                e.finish(30);
                            case 34:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 27, 30, 34]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [A])
              , z = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = cr[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                j === n.url && A(cr[e - 1]),
                cr.splice(e, 1),
                m(u - 1)
            }
            ), [j, A, u]);
            return i.a.createElement("div", {
                className: "ImageComposition"
            }, i.a.createElement("div", {
                className: "ImageComposition-banner",
                style: {
                    backgroundImage: "url(".concat(nr, ")")
                }
            }, i.a.createElement("div", {
                className: "ImageComposition-banner-content"
            }, i.a.createElement("h2", {
                className: "ImageComposition-banner-title"
            }, t(Xa || (Xa = Object(a.a)(["imageComposition"])))), i.a.createElement("p", {
                className: "ImageComposition-banner-description"
            }, t(Qa || (Qa = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "ImageComposition-demo"
            }, i.a.createElement("div", {
                className: "ImageComposition-titles"
            }, i.a.createElement("h2", {
                className: "ImageComposition-titles-title1"
            }, t(Ya || (Ya = Object(a.a)(["originalImg"])))), i.a.createElement("h2", {
                className: "ImageComposition-titles-title2"
            }, t(er || (er = Object(a.a)(["processedMusic"]))))), i.a.createElement("div", {
                className: "ImageComposition-main"
            }, i.a.createElement("div", {
                className: "ImageComposition-preview"
            }, i.a.createElement("img", {
                src: j,
                alt: "Error URL"
            })), i.a.createElement("div", {
                className: "ImageComposition-result"
            }, i.a.createElement("audio", {
                className: "ImageComposition-video",
                src: V,
                autoPlay: !1,
                controls: !0,
                controlsList: "nodownload"
            }), i.a.createElement("div", {
                className: d()("ImageComposition-result-placeholder", {
                    loading: w || !V
                })
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "ImageComposition-result-placeholder-status"
            }, t("tip.".concat(w ? "uploadingPicture" : "processingMusic")))))), i.a.createElement("div", {
                className: "ImageComposition-sample"
            }, i.a.createElement("ul", {
                className: "ImageComposition-sample-list"
            }, cr.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("ImageComposition-sample-item", {
                        active: a === j
                    }),
                    onClick: function() {
                        return M(t)
                    }
                }, i.a.createElement("img", {
                    src: a,
                    alt: "demo".concat(t)
                }), n ? null : i.a.createElement("span", {
                    className: "ImageDescription-sample-item-delete",
                    onClick: function(e) {
                        return z(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("ImageComposition-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: F,
                accept: "image/jpg"
            }))))))
        }, vr = (n(390),
        "".concat(g.d, "/assets/image/back10.jpg")), gr = m.a.CancelToken, fr = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/videoComp", jr = [{
            url: "".concat(fr, "/sample1.mp4"),
            jobId: "1",
            result: "".concat(fr, "/result1.mp4"),
            isSample: !0
        }, {
            url: "".concat(fr, "/sample2.mp4"),
            jobId: "2",
            result: "".concat(fr, "/result2.mp4"),
            isSample: !0
        }, {
            url: "".concat(fr, "/sample3.mp4"),
            jobId: "3",
            result: "".concat(fr, "/result3.mp4"),
            isSample: !0
        }, {
            url: "".concat(fr, "/sample4.mp4"),
            jobId: "4",
            result: "".concat(fr, "/result4.mp4"),
            isSample: !0
        }];
        function hr(e) {
            return Or.apply(this, arguments)
        }
        function Or() {
            return (Or = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/videoComp/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                videoBgmGeneration: {
                                    bgmNum: 1
                                }
                            }, "".concat(g.b, "/result/videoComp"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Er, xr, kr, yr, Nr, Cr = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("videoComposition").t
              , u = Object(l.useState)(jr.length)
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(jr[0].url)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useRef)(jr[0].url)
              , k = Object(l.useState)(jr[0].jobId)
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(!1)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useRef)(jr[0].jobId)
              , V = Object(l.useState)()
              , _ = Object(s.a)(V, 2)
              , A = _[0]
              , M = _[1]
              , F = Object(l.useState)("")
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var a, r;
                null === (a = t.current) || void 0 === a || a.pause(),
                null === (r = n.current) || void 0 === r || r.pause();
                var s = e.current;
                function l() {
                    return i.apply(this, arguments)
                }
                function i() {
                    return (i = Object(o.a)(c.a.mark((function e() {
                        var t, n, a, r, o, i, u, m, p;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = jr.find((function(e) {
                                        return e.jobId === N
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", M(t.result));
                                case 5:
                                    return T.current === N && (M(void 0),
                                    J("")),
                                    n = gr.source(),
                                    s.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(N, n.token);
                                case 11:
                                    if (r = e.sent,
                                    !(o = null === (a = r.getJobResponse) || void 0 === a ? void 0 : a.job) || 3 !== o.state) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 16,
                                    Object(g.w)("".concat(g.b, "/result/videoComp/").concat(null === (i = o.outputs[0].smartContentResult) || void 0 === i || null === (u = i.videoBgmGeneration) || void 0 === u ? void 0 : u[0].videoName));
                                case 16:
                                    (m = e.sent) && (t.result = m,
                                    T.current === N && M(t.result)),
                                    e.next = 21;
                                    break;
                                case 20:
                                    r.errorResponse ? T.current === N && J(r.errorResponse.message) : o && (4 === o.state ? T.current === N && J("Job Failed") : [1, 2].includes(o.state) && T.current === N && setTimeout(l, g.k));
                                case 21:
                                    e.next = 27;
                                    break;
                                case 23:
                                    e.prev = 23,
                                    e.t0 = e.catch(8),
                                    setTimeout(l, g.k),
                                    console.log(e.t0);
                                case 27:
                                    return e.prev = 27,
                                    (p = s.indexOf(n)) > -1 && s.splice(p, 1),
                                    e.finish(27);
                                case 31:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 23, 27, 31]])
                    }
                    )))).apply(this, arguments)
                }
                N && l()
            }
            ), [N]);
            var q = Object(l.useCallback)((function(e) {
                C(e.jobId),
                T.current = e.jobId,
                E(e.url),
                x.current = e.url,
                R(!!e.uploading)
            }
            ), [])
              , L = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = jr.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return q(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                jr.push(o),
                                E(o.url),
                                x.current = o.url,
                                C(""),
                                M(void 0),
                                R(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                hr(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                x.current === o.url && C(u.createJobResponse.job.id),
                                T.current = o.jobId) : J((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                R(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [q])
              , B = Object(l.useCallback)((function(e) {
                e && O !== e.url && q(e)
            }
            ), [O, q])
              , H = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = jr[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                O === n.url && q(jr[e - 1]),
                jr.splice(e, 1),
                f(p - 1)
            }
            ), [O, q, p]);
            return i.a.createElement("div", {
                className: "VideoComp"
            }, i.a.createElement("div", {
                className: "VideoComp-banner",
                style: {
                    backgroundImage: "url(".concat(vr, ")")
                }
            }, i.a.createElement("div", {
                className: "VideoComp-banner-content"
            }, i.a.createElement("h2", {
                className: "VideoComp-banner-title"
            }, r(lr || (lr = Object(a.a)(["videoComposition"])))), i.a.createElement("p", {
                className: "VideoComp-banner-description"
            }, r(ir || (ir = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "VideoComp-demo"
            }, i.a.createElement("div", {
                className: "VideoComp-main"
            }, i.a.createElement("div", {
                className: "VideoComp-preview"
            }, i.a.createElement("h2", {
                className: "VideoComp-main-title"
            }, r(ur || (ur = Object(a.a)(["silentVideo"])))), i.a.createElement("div", {
                className: "VideoComp-preview-wrap"
            }, i.a.createElement("video", {
                src: O,
                controls: !0,
                controlsList: "nodownload",
                ref: t
            }))), i.a.createElement("div", {
                className: "VideoComp-result"
            }, i.a.createElement("h2", {
                className: "VideoComp-main-title"
            }, r(mr || (mr = Object(a.a)(["generatedVideo"])))), i.a.createElement("div", {
                className: d()("VideoComp-result-wrap", {
                    loading: I || !A && !P
                })
            }, P && !A ? i.a.createElement("div", {
                className: "VideoComp-result-message"
            }, "".concat(r(pr || (pr = Object(a.a)(["tip.processedFailed"]))), " (").concat(P, ")")) : i.a.createElement("video", {
                src: A,
                controls: !0,
                controlsList: "nodownload",
                ref: n
            }), i.a.createElement("div", {
                className: "VideoComp-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "VideoComp-result-cover-status"
            }, r("tip.".concat(I ? "uploadingVideo" : "processingVideo"))))))), i.a.createElement("div", {
                className: "VideoComp-sample"
            }, i.a.createElement("ul", {
                className: "VideoComp-sample-list"
            }, jr.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("VideoComp-sample-item", {
                        active: a === O
                    }),
                    onClick: function() {
                        return B(jr[t])
                    }
                }, i.a.createElement("video", {
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "VideoComp-sample-item-delete",
                    onClick: function(e) {
                        return H(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("VideoComp-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: L,
                message: r(dr || (dr = Object(a.a)(["tip.videoTimeLimit"]))),
                accept: "video/*"
            }))))))
        }, wr = (n(391),
        "".concat(g.d, "/assets/image/back13.jpg")), Sr = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/singingConver", Ir = m.a.CancelToken, Rr = [{
            id: 0,
            url: "".concat(Sr, "/yesterday21.mp3"),
            jobId: "1",
            isSample: !0,
            result: "".concat(Sr, "/yesterday21_vocal_base_female1.wav")
        }, {
            id: 1,
            url: "".concat(Sr, "/shinian36.mp3"),
            jobId: "2",
            isSample: !0,
            result: "".concat(Sr, "/shinian36_vocal_base_female.wav")
        }, {
            id: 2,
            url: "".concat(Sr, "/shapeofyou4.mp3"),
            jobId: "3",
            isSample: !0,
            result: "".concat(Sr, "/shapeofyou4_vocal_base_female.wav")
        }, {
            id: 3,
            url: "".concat(Sr, "/qiying40.mp3"),
            jobId: "4",
            isSample: !0,
            result: "".concat(Sr, "/qiying40_vocal_base_female.wav")
        }];
        function Tr(e) {
            return Vr.apply(this, arguments)
        }
        function Vr() {
            return (Vr = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/singingconver/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                singingConversion: {
                                    outputFormat: 1
                                }
                            }, "assets/singingConver");
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var _r = function() {
            var e = Object(l.useRef)(null)
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)([])
              , r = Object(b.a)("singingConversion").t
              , u = Object(l.useState)(Rr.length)
              , m = Object(s.a)(u, 2)
              , p = m[0]
              , f = m[1]
              , j = Object(l.useState)(Rr[0].url)
              , h = Object(s.a)(j, 2)
              , O = h[0]
              , E = h[1]
              , x = Object(l.useRef)(Rr[0].url)
              , k = Object(l.useState)(Rr[0].jobId)
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(!1)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useRef)(Rr[0].jobId)
              , V = Object(l.useState)()
              , _ = Object(s.a)(V, 2)
              , A = _[0]
              , M = _[1]
              , F = Object(l.useState)("")
              , z = Object(s.a)(F, 2)
              , P = z[0]
              , J = z[1];
            Object(l.useEffect)((function() {
                var e = n.current;
                return function() {
                    e.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var e;
                null === (e = t.current) || void 0 === e || e.pause();
                var a = n.current;
                function r() {
                    return s.apply(this, arguments)
                }
                function s() {
                    return (s = Object(o.a)(c.a.mark((function e() {
                        var t, n, s, o, l, i, u, m, p;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = Rr.find((function(e) {
                                        return e.jobId === N
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", M(t.result));
                                case 5:
                                    return T.current === N && (M(void 0),
                                    J("")),
                                    n = Ir.source(),
                                    a.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(N, n.token);
                                case 11:
                                    o = e.sent,
                                    (l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) && 3 === l.state ? (console.log(l),
                                    m = null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.singingConversion) || void 0 === u ? void 0 : u.songName,
                                    t.result = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/singingConver/".concat(m),
                                    T.current === N && M(t.result)) : o.errorResponse ? T.current === N && J(o.errorResponse.message) : l && (4 === l.state ? T.current === N && J("Job Failed") : [1, 2].includes(l.state) && T.current === N && setTimeout(r, g.k)),
                                    e.next = 20;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(8),
                                    setTimeout(r, g.k),
                                    console.log(e.t0);
                                case 20:
                                    return e.prev = 20,
                                    (p = a.indexOf(n)) > -1 && a.splice(p, 1),
                                    e.finish(20);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 16, 20, 24]])
                    }
                    )))).apply(this, arguments)
                }
                N && r()
            }
            ), [N]);
            var q = Object(l.useCallback)((function(e) {
                C(e.jobId),
                T.current = e.jobId,
                E(e.url),
                x.current = e.url,
                R(!!e.uploading)
            }
            ), [])
              , L = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 35;
                                    break
                                }
                                if (r = a.result,
                                !(s = Rr.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return q(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    id: Rr[Rr.length - 1].id + 1,
                                    url: r,
                                    jobId: ""
                                },
                                Rr.push(o),
                                E(o.url),
                                x.current = o.url,
                                C(""),
                                M(void 0),
                                R(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                Tr(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                x.current === o.url && C(u.createJobResponse.job.id),
                                T.current = o.jobId) : J((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                e.next = 31;
                                break;
                            case 27:
                                e.prev = 27,
                                e.t0 = e.catch(20),
                                J("500"),
                                console.log(e.t0);
                            case 31:
                                return e.prev = 31,
                                R(!1),
                                o.uploading = !1,
                                e.finish(31);
                            case 35:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 27, 31, 35]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [q])
              , B = Object(l.useCallback)((function(e) {
                e && O !== e.url && q(e)
            }
            ), [O, q])
              , H = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = Rr[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                O === n.url && q(Rr[e - 1]),
                Rr.splice(e, 1),
                f(p - 1)
            }
            ), [O, q, p]);
            return i.a.createElement("div", {
                className: "SingingConver"
            }, i.a.createElement("div", {
                className: "SingingConver-banner",
                style: {
                    backgroundImage: "url(".concat(wr, ")")
                }
            }, i.a.createElement("div", {
                className: "SingingConver-banner-content"
            }, i.a.createElement("h2", {
                className: "SingingConver-banner-title"
            }, r(Er || (Er = Object(a.a)(["singingConversion"])))), i.a.createElement("p", {
                className: "SingingConver-banner-description"
            }, r(xr || (xr = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "SingingConver-demo"
            }, i.a.createElement("div", {
                className: "SingingConver-main"
            }, i.a.createElement("div", {
                className: "SingingConver-preview"
            }, i.a.createElement("h2", {
                className: "SingingConver-main-title"
            }, r(kr || (kr = Object(a.a)(["originalMusic"])))), i.a.createElement("audio", {
                ref: e,
                onPlay: function() {
                    var e;
                    return null === (e = t.current) || void 0 === e ? void 0 : e.pause()
                },
                src: O,
                controls: !0,
                controlsList: "nodownload"
            })), i.a.createElement("div", {
                className: "SingingConver-result"
            }, i.a.createElement("h2", {
                className: "SingingConver-main-title"
            }, r(yr || (yr = Object(a.a)(["processedMusic"])))), i.a.createElement("div", {
                className: d()("SingingConver-result-wrap", {
                    loading: I || !A && !P
                })
            }, P && !A ? i.a.createElement("div", {
                className: "SingingConver-result-message"
            }, "".concat(r(Nr || (Nr = Object(a.a)(["tip.processedFailed"]))), " (").concat(P, ")")) : i.a.createElement("audio", {
                ref: t,
                onPlay: function() {
                    var t;
                    return null === (t = e.current) || void 0 === t ? void 0 : t.pause()
                },
                src: A,
                controls: !0,
                controlsList: "nodownload"
            }), i.a.createElement("div", {
                className: "SingingConver-result-cover"
            }, i.a.createElement(v.m, {
                size: "20px"
            }), i.a.createElement("p", {
                className: "SingingConver-result-cover-status"
            }, r("tip.".concat(I ? "uploadingMusic" : "processingMusic"))))))), i.a.createElement("div", {
                className: "SingingConver-sample"
            }, i.a.createElement("ul", {
                className: "SingingConver-sample-list"
            }, Rr.map((function(e, t) {
                return i.a.createElement("li", {
                    key: e.url,
                    className: d()("SingingConver-sample-item", {
                        active: e.url === O
                    }),
                    onClick: function() {
                        return B(Rr[t])
                    }
                }, "".concat(r("music")).concat(e.id + 1), e.isSample ? null : i.a.createElement("span", {
                    className: "SingingConver-sample-item-delete",
                    onClick: function(e) {
                        return H(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("SingingConver-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: L,
                accept: "audio/wav, audio/mp3"
            }))))))
        }
          , Ar = (n(392),
        "".concat(g.d, "/assets/image/back3.jpg"),
        "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/speechConver");
        m.a.CancelToken,
        "".concat(Ar, "/female2.wav"),
        "".concat(Ar, "/female2_base_female.wav"),
        "".concat(Ar, "/male2.wav"),
        "".concat(Ar, "/male2_base_female.wav"),
        "".concat(Ar, "/eng_female.wav"),
        "".concat(Ar, "/eng_female_base_female.wav"),
        "".concat(Ar, "/eng_male.wav"),
        "".concat(Ar, "/eng_male_base_female.wav");
        n(393);
        var Mr, Fr, zr, Pr, Jr, qr = "".concat(g.d, "/assets/image/back16.jpg"), Lr = m.a.CancelToken, Br = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/imageRecognition", Hr = [{
            url: "".concat(Br, "/demo1.jpg"),
            jobId: "1",
            result: "\u8bc6\u522b\u7ed3\u679c:coast_beach\n    \n    \u6982\u7387top5:\n    - coast_beach: 0.5452\n    - rivers_and_lakes: 0.1129\n    - ocean: 0.0905\n    - wild: 0.0482\n    - sports_ground_outdoor: 0.0263",
            isSample: !0
        }, {
            url: "".concat(Br, "/demo2.jpg"),
            jobId: "2",
            result: "\u8bc6\u522b\u7ed3\u679c:bar\n\n    \u6982\u7387top5:\n    - bar: 0.5638\n    - shop: 0.23\n    - entertainment_venues: 0.0682\n    - restaurant: 0.0442\n    - hospital: 0.0314\n    ",
            isSample: !0
        }, {
            url: "".concat(Br, "/demo3.jpg"),
            jobId: "3",
            result: "\u8bc6\u522b\u7ed3\u679c:mountain\n\n    \u6982\u7387top5:\n    - mountain: 0.7955\n    - ice_and_snow: 0.1158\n    - ski_resort: 0.0425\n    - wild: 0.016\n    - grass: 0.0133\n    ",
            isSample: !0
        }, {
            url: "".concat(Br, "/demo4.jpg"),
            jobId: "4",
            result: "\u8bc6\u522b\u7ed3\u679c:village\n\n    \u6982\u7387top5:\n    - village: 0.8978\n    - castle: 0.0436\n    - religious_buildings: 0.0204\n    - building: 0.0131\n    - rivers_and_lakes: 0.0032\n    ",
            isSample: !0
        }];
        function Ur(e) {
            return Dr.apply(this, arguments)
        }
        function Dr() {
            return (Dr = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/image/scene/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                imageAnalysis: {
                                    type: 3
                                }
                            }, "".concat(g.b, "/result/imageScene"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Gr, Wr, Kr, Zr, $r, Xr, Qr, Yr, ec = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("imageScene")
              , u = r.t
              , m = r.i18n.language
              , p = Object(l.useState)(Hr.length)
              , f = Object(s.a)(p, 2)
              , j = f[0]
              , h = f[1]
              , O = Object(l.useState)(Hr[0].url)
              , E = Object(s.a)(O, 2)
              , x = E[0]
              , k = E[1]
              , y = Object(l.useRef)(Hr[0].url)
              , N = Object(l.useState)(Hr[0].jobId)
              , C = Object(s.a)(N, 2)
              , w = C[0]
              , S = C[1]
              , I = Object(l.useState)(!1)
              , R = Object(s.a)(I, 2)
              , T = R[0]
              , V = R[1]
              , _ = Object(l.useRef)(Hr[0].jobId)
              , A = Object(l.useState)()
              , M = Object(s.a)(A, 2)
              , F = M[0]
              , z = M[1]
              , P = Object(l.useState)("")
              , J = Object(s.a)(P, 2)
              , q = J[0]
              , L = J[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, p, d, b, v, f, j, h;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = Hr.find((function(e) {
                                        return e.jobId === w
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        e.next = 9;
                                        break
                                    }
                                    if ("en" !== m) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", z(null === (r = a.result) || void 0 === r ? void 0 : r.replace("\u8bc6\u522b\u7ed3\u679c:", "Prediction:").replace("\u6982\u7387top5:", "Top5 probabilities:")));
                                case 8:
                                    return e.abrupt("return", z(null === (s = a.result) || void 0 === s ? void 0 : s.replace("Prediction:", "\u8bc6\u522b\u7ed3\u679c:").replace("Top5 probabilities:", "\u6982\u7387top5:")));
                                case 9:
                                    return _.current === w && (z(void 0),
                                    L("")),
                                    o = Lr.source(),
                                    t.push(o),
                                    e.prev = 12,
                                    e.next = 15,
                                    Object(g.u)(w, o.token);
                                case 15:
                                    i = e.sent,
                                    (u = null === (l = i.getJobResponse) || void 0 === l ? void 0 : l.job) && 3 === u.state ? (j = "",
                                    j += ("en" === m ? "Prediction:" : "\u8bc6\u522b\u7ed3\u679c:") + (null === (p = u.outputs[0].smartContentResult) || void 0 === p || null === (d = p.imageAnalysis) || void 0 === d ? void 0 : d.prediction) + "\n\n",
                                    j += ("en" === m ? "Top5 probabilities:" : "\u6982\u7387top5:") + "\n",
                                    null === (b = u.outputs[0].smartContentResult) || void 0 === b || null === (v = b.imageAnalysis) || void 0 === v || null === (f = v.probabilities) || void 0 === f || f.forEach((function(e) {
                                        j += "- ".concat(e.category, ":").concat(e.probability, "\n")
                                    }
                                    )),
                                    a.result = j,
                                    _.current === w && z(a.result)) : i.errorResponse ? _.current === w && L(i.errorResponse.message) : u && (4 === u.state ? _.current === w && L("Job Failed") : [1, 2].includes(u.state) && _.current === w && setTimeout(n, g.k)),
                                    e.next = 24;
                                    break;
                                case 20:
                                    e.prev = 20,
                                    e.t0 = e.catch(12),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 24:
                                    return e.prev = 24,
                                    (h = t.indexOf(o)) > -1 && t.splice(h, 1),
                                    e.finish(24);
                                case 28:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[12, 20, 24, 28]])
                    }
                    )))).apply(this, arguments)
                }
                w && n()
            }
            ), [w, m]),
            Object(l.useEffect)((function() {
                F && ("en" === m ? z(null === F || void 0 === F ? void 0 : F.replace("\u8bc6\u522b\u7ed3\u679c:", "Prediction:").replace("\u6982\u7387top5:", "Top5 probabilities:")) : "zh" === m && z(null === F || void 0 === F ? void 0 : F.replace("Prediction:", "\u8bc6\u522b\u7ed3\u679c:").replace("Top5 probabilities:", "\u6982\u7387top5:")))
            }
            ), [m, F]);
            var B = Object(l.useCallback)((function(e) {
                S(e.jobId),
                _.current = e.jobId,
                k(e.url),
                y.current = e.url,
                V(!!e.uploading)
            }
            ), [])
              , H = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 32;
                                    break
                                }
                                if (r = a.result,
                                !(s = Hr.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return B(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                Hr.push(o),
                                k(o.url),
                                y.current = o.url,
                                S(""),
                                z(void 0),
                                V(!0),
                                o.uploading = !0,
                                e.prev = 20,
                                e.next = 23,
                                Ur(n);
                            case 23:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                y.current === o.url && S(u.createJobResponse.job.id),
                                _.current = o.jobId) : L((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                V(!1),
                                o.uploading = !1,
                                e.next = 32;
                                break;
                            case 29:
                                e.prev = 29,
                                e.t0 = e.catch(20),
                                console.log(e.t0);
                            case 32:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[20, 29]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [B])
              , U = Object(l.useCallback)((function(e) {
                e && x !== e.url && B(e)
            }
            ), [x, B])
              , D = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = Hr[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                x === n.url && B(Hr[e - 1]),
                Hr.splice(e, 1),
                h(j - 1)
            }
            ), [x, B, j]);
            return i.a.createElement("div", {
                className: "ImageScene"
            }, i.a.createElement("div", {
                className: "ImageScene-banner",
                style: {
                    backgroundImage: "url(".concat(qr, ")")
                }
            }, i.a.createElement("div", {
                className: "ImageScene-banner-content"
            }, i.a.createElement("h2", {
                className: "ImageScene-banner-title"
            }, u(Mr || (Mr = Object(a.a)(["imageScene"])))), i.a.createElement("p", {
                className: "ImageScene-banner-description"
            }, u(Fr || (Fr = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "ImageScene-demo"
            }, i.a.createElement("div", {
                className: "ImageScene-main"
            }, i.a.createElement("div", {
                className: "ImageScene-preview"
            }, i.a.createElement("h2", {
                className: "ImageScene-main-title"
            }, u(zr || (zr = Object(a.a)(["inputImage"])))), i.a.createElement("div", {
                className: "ImageScene-preview-wrap"
            }, i.a.createElement("img", {
                src: x,
                ref: t,
                alt: ""
            }))), i.a.createElement("div", {
                className: "ImageScene-result"
            }, i.a.createElement("h2", {
                className: "ImageScene-main-title"
            }, u(Pr || (Pr = Object(a.a)(["recognitionResult"])))), i.a.createElement("div", {
                className: d()("ImageScene-result-wrap", {
                    loading: T || !F && !q
                })
            }, q && !F ? i.a.createElement("div", {
                className: "ImageScene-result-message"
            }, "".concat(u(Jr || (Jr = Object(a.a)(["tip.processedFailed"]))), " (").concat(q, ")")) : i.a.createElement("div", {
                className: "ImageScene-preview-result",
                ref: n
            }, F), i.a.createElement("div", {
                className: "ImageScene-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "ImageScene-result-cover-status"
            }, u("tip.".concat(T ? "uploadingPicture" : "processingPicture"))))))), i.a.createElement("div", {
                className: "ImageScene-sample"
            }, i.a.createElement("ul", {
                className: "ImageScene-sample-list"
            }, Hr.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("ImageScene-sample-item", {
                        active: a === x
                    }),
                    onClick: function() {
                        return U(Hr[t])
                    }
                }, i.a.createElement("img", {
                    src: a,
                    alt: ""
                }), n ? null : i.a.createElement("span", {
                    className: "ImageScene-sample-item-delete",
                    onClick: function(e) {
                        return D(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("ImageScene-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: H,
                accept: "image/jpg"
            }))))))
        }, tc = (n(394),
        "".concat(g.d, "/assets/image/back21.jpeg")), nc = m.a.CancelToken, ac = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/imageDetection", rc = [{
            url: "".concat(ac, "/demo1.jpg"),
            jobId: "1",
            result: "".concat(ac, "/result1.jpg"),
            isSample: !0,
            resultJson: '[\n    {\n        "class": "chair",\n        "box": [\n            518.5505,\n            78.9696,\n            799.7687,\n            251.4735\n        ],\n        "score": 0.989\n    },\n    {\n        "class": "cup",\n        "box": [\n            431.4066,\n            277.5686,\n            686.8904,\n            454.1647\n        ],\n        "score": 0.9888\n    },\n    {\n        "class": "dining table",\n        "box": [\n            0.0,\n            222.0689,\n            797.9321,\n            568.0848\n        ],\n        "score": 0.9837\n    },\n    {\n        "class": "spoon",\n        "box": [\n            483.6286,\n            391.8563,\n            717.0266,\n            468.4075\n        ],\n        "score": 0.9767\n    }\n]'
        }, {
            url: "".concat(ac, "/demo2.jpg"),
            jobId: "2",
            result: "".concat(ac, "/result2.jpg"),
            isSample: !0,
            resultJson: '[\n    {\n        "class": "person",\n        "box": [\n            42.5378,\n            293.0087,\n            437.0698,\n            727.4437\n        ],\n        "score": 0.9987\n    },\n    {\n        "class": "person",\n        "box": [\n            856.9778,\n            293.7812,\n            1173.9835,\n            639.9827\n        ],\n        "score": 0.9984\n    },\n    {\n        "class": "person",\n        "box": [\n            381.4131,\n            102.7175,\n            613.9995,\n            652.9283\n        ],\n        "score": 0.9972\n    },\n    {\n        "class": "person",\n        "box": [\n            671.974,\n            71.3998,\n            925.382,\n            662.0091\n        ],\n        "score": 0.9971\n    },\n    {\n        "class": "person",\n        "box": [\n            462.5752,\n            323.174,\n            787.4453,\n            676.7104\n        ],\n        "score": 0.9971\n    },\n    {\n        "class": "cup",\n        "box": [\n            886.1078,\n            642.0176,\n            953.6769,\n            750.845\n        ],\n        "score": 0.995\n    },\n    {\n        "class": "laptop",\n        "box": [\n            97.042,\n            586.727,\n            374.8212,\n            780.3599\n        ],\n        "score": 0.99\n    },\n    {\n        "class": "scissors",\n        "box": [\n            1182.9457,\n            621.5542,\n            1245.8706,\n            695.0829\n        ],\n        "score": 0.9748\n    },\n    {\n        "class": "laptop",\n        "box": [\n            943.8076,\n            562.558,\n            1207.681,\n            724.8631\n        ],\n        "score": 0.9732\n    },\n    {\n        "class": "book",\n        "box": [\n            476.1946,\n            752.5308,\n            728.3314,\n            848.1555\n        ],\n        "score": 0.9066\n    },\n    {\n        "class": "scissors",\n        "box": [\n            1202.7224,\n            622.6173,\n            1245.0767,\n            668.5786\n        ],\n        "score": 0.8306\n    },\n    {\n        "class": "potted plant",\n        "box": [\n            685.7178,\n            5.3729,\n            1099.8264,\n            286.0059\n        ],\n        "score": 0.7949\n    },\n    {\n        "class": "tv",\n        "box": [\n            1035.3348,\n            345.5078,\n            1117.2277,\n            450.7619\n        ],\n        "score": 0.7826\n    },\n    {\n        "class": "dining table",\n        "box": [\n            0.0,\n            273.481,\n            231.9687,\n            325.0509\n        ],\n        "score": 0.7544\n    },\n    {\n        "class": "potted plant",\n        "box": [\n            639.4241,\n            183.8295,\n            770.7582,\n            371.0916\n        ],\n        "score": 0.7506\n    },\n    {\n        "class": "book",\n        "box": [\n            539.3278,\n            668.0228,\n            708.0803,\n            733.0292\n        ],\n        "score": 0.6921\n    },\n    {\n        "class": "chair",\n        "box": [\n            322.2285,\n            395.5607,\n            376.729,\n            431.6972\n        ],\n        "score": 0.6884\n    },\n    {\n        "class": "cell phone",\n        "box": [\n            432.3052,\n            374.2716,\n            529.8709,\n            422.8972\n        ],\n        "score": 0.6689\n    },\n    {\n        "class": "bowl",\n        "box": [\n            101.9754,\n            255.9895,\n            157.0828,\n            288.2627\n        ],\n        "score": 0.6667\n    },\n    {\n        "class": "cup",\n        "box": [\n            1214.629,\n            677.8532,\n            1278.6125,\n            772.7993\n        ],\n        "score": 0.5904\n    },\n    {\n        "class": "vase",\n        "box": [\n            79.1665,\n            253.3725,\n            95.1909,\n            287.541\n        ],\n        "score": 0.5572\n    },\n    {\n        "class": "dining table",\n        "box": [\n            370.1022,\n            615.9763,\n            1278.4908,\n            844.7905\n        ],\n        "score": 0.5459\n    }\n]'
        }, {
            url: "".concat(ac, "/demo3.jpg"),
            jobId: "3",
            result: "".concat(ac, "/result3.jpg"),
            isSample: !0,
            resultJson: '[\n    {\n        "class": "person",\n        "box": [\n            172.6108,\n            1299.3751,\n            323.6431,\n            1633.6556\n        ],\n        "score": 0.9992\n    },\n    {\n        "class": "person",\n        "box": [\n            764.0134,\n            1269.6302,\n            978.0527,\n            1663.6835\n        ],\n        "score": 0.9992\n    },\n    {\n        "class": "person",\n        "box": [\n            336.9329,\n            1273.3428,\n            471.5107,\n            1580.4803\n        ],\n        "score": 0.9988\n    },\n    {\n        "class": "person",\n        "box": [\n            1039.603,\n            1308.1566,\n            1148.7069,\n            1573.4437\n        ],\n        "score": 0.9966\n    },\n    {\n        "class": "person",\n        "box": [\n            522.2166,\n            1295.6912,\n            740.41,\n            1764.8043\n        ],\n        "score": 0.9964\n    },\n    {\n        "class": "car",\n        "box": [\n            24.8477,\n            1337.3807,\n            221.7129,\n            1492.7467\n        ],\n        "score": 0.9876\n    },\n    {\n        "class": "bicycle",\n        "box": [\n            198.4534,\n            1428.1874,\n            307.4063,\n            1684.2821\n        ],\n        "score": 0.9847\n    },\n    {\n        "class": "bicycle",\n        "box": [\n            770.4977,\n            1457.5938,\n            1013.9573,\n            1802.6581\n        ],\n        "score": 0.9643\n    },\n    {\n        "class": "car",\n        "box": [\n            482.7975,\n            1295.3881,\n            579.7429,\n            1399.932\n        ],\n        "score": 0.9387\n    },\n    {\n        "class": "bicycle",\n        "box": [\n            351.3618,\n            1422.5951,\n            461.7721,\n            1645.8705\n        ],\n        "score": 0.9385\n    },\n    {\n        "class": "bicycle",\n        "box": [\n            510.1172,\n            1464.924,\n            831.2961,\n            1876.6461\n        ],\n        "score": 0.9337\n    },\n    {\n        "class": "car",\n        "box": [\n            614.4508,\n            1308.9901,\n            749.9311,\n            1410.5438\n        ],\n        "score": 0.8956\n    },\n    {\n        "class": "person",\n        "box": [\n            937.9301,\n            1335.0751,\n            1000.66,\n            1463.58\n        ],\n        "score": 0.8566\n    },\n    {\n        "class": "car",\n        "box": [\n            283.273,\n            1316.7921,\n            350.3999,\n            1371.5072\n        ],\n        "score": 0.8553\n    },\n    {\n        "class": "car",\n        "box": [\n            683.414,\n            1367.1202,\n            758.5459,\n            1430.7343\n        ],\n        "score": 0.7837\n    },\n    {\n        "class": "car",\n        "box": [\n            426.9328,\n            1308.9843,\n            466.0071,\n            1356.3557\n        ],\n        "score": 0.7426\n    },\n    {\n        "class": "person",\n        "box": [\n            141.4724,\n            1300.7108,\n            169.1214,\n            1328.2728\n        ],\n        "score": 0.7371\n    },\n    {\n        "class": "car",\n        "box": [\n            332.2171,\n            1302.3051,\n            377.9594,\n            1329.9224\n        ],\n        "score": 0.6893\n    },\n    {\n        "class": "car",\n        "box": [\n            453.566,\n            1307.4817,\n            492.8604,\n            1353.0637\n        ],\n        "score": 0.5588\n    },\n    {\n        "class": "person",\n        "box": [\n            123.0467,\n            1294.1107,\n            150.3508,\n            1327.9222\n        ],\n        "score": 0.5413\n    },\n    {\n        "class": "handbag",\n        "box": [\n            602.4827,\n            1507.9574,\n            690.2124,\n            1605.8766\n        ],\n        "score": 0.5296\n    }\n]'
        }, {
            url: "".concat(ac, "/demo4.jpg"),
            jobId: "4",
            result: "".concat(ac, "/result4.jpg"),
            isSample: !0,
            resultJson: '[\n    {\n        "class": "person",\n        "box": [\n            74.223,\n            216.3755,\n            182.608,\n            524.767\n        ],\n        "score": 0.9986\n    },\n    {\n        "class": "person",\n        "box": [\n            1086.7671,\n            339.3677,\n            1214.9204,\n            544.4125\n        ],\n        "score": 0.9927\n    },\n    {\n        "class": "person",\n        "box": [\n            1024.6104,\n            232.4173,\n            1116.1361,\n            505.8779\n        ],\n        "score": 0.975\n    },\n    {\n        "class": "person",\n        "box": [\n            268.7902,\n            368.2395,\n            406.9849,\n            525.8497\n        ],\n        "score": 0.9467\n    },\n    {\n        "class": "person",\n        "box": [\n            163.8076,\n            241.151,\n            238.4759,\n            509.9554\n        ],\n        "score": 0.9364\n    },\n    {\n        "class": "person",\n        "box": [\n            802.7108,\n            341.6336,\n            880.7231,\n            457.705\n        ],\n        "score": 0.9169\n    },\n    {\n        "class": "person",\n        "box": [\n            878.1882,\n            264.8662,\n            967.269,\n            430.6359\n        ],\n        "score": 0.9042\n    },\n    {\n        "class": "person",\n        "box": [\n            962.1898,\n            362.6789,\n            1087.6932,\n            530.2974\n        ],\n        "score": 0.9021\n    },\n    {\n        "class": "person",\n        "box": [\n            591.0391,\n            385.3219,\n            715.9745,\n            520.5255\n        ],\n        "score": 0.8969\n    },\n    {\n        "class": "person",\n        "box": [\n            190.1136,\n            244.0819,\n            280.9543,\n            502.5983\n        ],\n        "score": 0.8964\n    },\n    {\n        "class": "person",\n        "box": [\n            455.2523,\n            349.0179,\n            535.3115,\n            507.1191\n        ],\n        "score": 0.8505\n    },\n    {\n        "class": "person",\n        "box": [\n            977.9697,\n            265.1126,\n            1029.2776,\n            399.5222\n        ],\n        "score": 0.85\n    },\n    {\n        "class": "person",\n        "box": [\n            213.7405,\n            347.4901,\n            308.9037,\n            518.5756\n        ],\n        "score": 0.8472\n    },\n    {\n        "class": "person",\n        "box": [\n            647.6576,\n            268.2632,\n            718.6907,\n            411.4585\n        ],\n        "score": 0.8349\n    },\n    {\n        "class": "person",\n        "box": [\n            782.3984,\n            276.1421,\n            832.9567,\n            443.5096\n        ],\n        "score": 0.8337\n    },\n    {\n        "class": "person",\n        "box": [\n            693.9337,\n            265.5047,\n            756.0162,\n            412.0952\n        ],\n        "score": 0.8202\n    },\n    {\n        "class": "person",\n        "box": [\n            63.8862,\n            203.2114,\n            145.4029,\n            463.7489\n        ],\n        "score": 0.8057\n    },\n    {\n        "class": "person",\n        "box": [\n            402.6536,\n            344.5226,\n            467.0081,\n            515.2573\n        ],\n        "score": 0.7945\n    },\n    {\n        "class": "person",\n        "box": [\n            702.9654,\n            374.1655,\n            801.3299,\n            492.3229\n        ],\n        "score": 0.7877\n    },\n    {\n        "class": "person",\n        "box": [\n            289.5488,\n            254.7332,\n            360.9405,\n            413.9047\n        ],\n        "score": 0.7814\n    },\n    {\n        "class": "person",\n        "box": [\n            747.4139,\n            278.062,\n            788.2593,\n            420.6211\n        ],\n        "score": 0.7714\n    },\n    {\n        "class": "person",\n        "box": [\n            269.2881,\n            245.5012,\n            333.0531,\n            424.7332\n        ],\n        "score": 0.7487\n    },\n    {\n        "class": "person",\n        "box": [\n            521.9386,\n            376.3032,\n            607.5194,\n            515.1159\n        ],\n        "score": 0.7479\n    },\n    {\n        "class": "person",\n        "box": [\n            481.5992,\n            265.7993,\n            529.3837,\n            359.7104\n        ],\n        "score": 0.7371\n    },\n    {\n        "class": "person",\n        "box": [\n            697.5264,\n            363.7094,\n            956.006,\n            533.9471\n        ],\n        "score": 0.7103\n    },\n    {\n        "class": "backpack",\n        "box": [\n            1178.3662,\n            395.2499,\n            1229.1315,\n            475.1361\n        ],\n        "score": 0.7001\n    },\n    {\n        "class": "person",\n        "box": [\n            345.1338,\n            250.6081,\n            431.6133,\n            387.4652\n        ],\n        "score": 0.6881\n    },\n    {\n        "class": "person",\n        "box": [\n            359.649,\n            331.4411,\n            450.7726,\n            516.0129\n        ],\n        "score": 0.6788\n    },\n    {\n        "class": "person",\n        "box": [\n            430.268,\n            292.671,\n            498.5681,\n            391.7702\n        ],\n        "score": 0.6538\n    },\n    {\n        "class": "person",\n        "box": [\n            521.123,\n            280.073,\n            585.0938,\n            408.1722\n        ],\n        "score": 0.6509\n    },\n    {\n        "class": "person",\n        "box": [\n            848.0644,\n            274.6744,\n            897.7385,\n            402.1515\n        ],\n        "score": 0.6463\n    },\n    {\n        "class": "person",\n        "box": [\n            859.7476,\n            370.5294,\n            957.7751,\n            530.0757\n        ],\n        "score": 0.6289\n    },\n    {\n        "class": "person",\n        "box": [\n            579.7683,\n            258.7408,\n            639.1519,\n            389.9147\n        ],\n        "score": 0.6187\n    },\n    {\n        "class": "person",\n        "box": [\n            934.4554,\n            248.4438,\n            999.8767,\n            446.7802\n        ],\n        "score": 0.5144\n    },\n    {\n        "class": "person",\n        "box": [\n            944.2668,\n            252.2375,\n            1025.5586,\n            504.9803\n        ],\n        "score": 0.5084\n    }\n]'
        }];
        function cc(e) {
            return sc.apply(this, arguments)
        }
        function sc() {
            return (sc = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/image/object/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                imageAnalysis: {
                                    type: 4
                                }
                            }, "".concat(g.b, "/result/imageObject"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var oc, lc, ic, uc, mc, pc, dc = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("imageObject").t
              , u = Object(l.useState)(rc.length)
              , p = Object(s.a)(u, 2)
              , f = p[0]
              , j = p[1]
              , h = Object(l.useState)(rc[0].url)
              , O = Object(s.a)(h, 2)
              , E = O[0]
              , x = O[1]
              , k = Object(l.useRef)(rc[0].url)
              , y = Object(l.useState)(rc[0].jobId)
              , N = Object(s.a)(y, 2)
              , C = N[0]
              , w = N[1]
              , S = Object(l.useState)(!1)
              , I = Object(s.a)(S, 2)
              , R = I[0]
              , T = I[1]
              , V = Object(l.useRef)(rc[0].jobId)
              , _ = Object(l.useState)()
              , A = Object(s.a)(_, 2)
              , M = A[0]
              , F = A[1]
              , z = Object(l.useState)()
              , P = Object(s.a)(z, 2)
              , J = P[0]
              , q = P[1]
              , L = Object(l.useState)("")
              , B = Object(s.a)(L, 2)
              , H = B[0]
              , U = B[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var t = e.current;
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(o.a)(c.a.mark((function e() {
                        var a, r, s, o, l, i, u, p, d, b, v, f, j;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = rc.find((function(e) {
                                        return e.jobId === C
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!a.result) {
                                        e.next = 7;
                                        break
                                    }
                                    return q(a.resultJson),
                                    F(a.result),
                                    e.abrupt("return");
                                case 7:
                                    return V.current === C && (q(void 0),
                                    F(void 0),
                                    U("")),
                                    r = nc.source(),
                                    t.push(r),
                                    e.prev = 10,
                                    e.next = 13,
                                    Object(g.u)(C, r.token);
                                case 13:
                                    if (o = e.sent,
                                    !(l = null === (s = o.getJobResponse) || void 0 === s ? void 0 : s.job) || 3 !== l.state) {
                                        e.next = 29;
                                        break
                                    }
                                    return console.log(l),
                                    e.next = 19,
                                    Object(g.w)("".concat(g.b, "/result/imageObject/").concat(null === (i = l.outputs[0].smartContentResult) || void 0 === i || null === (u = i.imageAnalysis) || void 0 === u ? void 0 : u.visualizationFileName));
                                case 19:
                                    return b = e.sent,
                                    e.next = 22,
                                    Object(g.w)("".concat(g.b, "/result/imageObject/").concat(null === (p = l.outputs[0].smartContentResult) || void 0 === p || null === (d = p.imageAnalysis) || void 0 === d ? void 0 : d.detectionFileName));
                                case 22:
                                    return v = e.sent,
                                    e.next = 25,
                                    m.a.get(v);
                                case 25:
                                    f = e.sent,
                                    b && f.data && (a.result = b,
                                    a.resultJson = f.data,
                                    V.current === C && (F(a.result),
                                    q(a.resultJson))),
                                    e.next = 30;
                                    break;
                                case 29:
                                    o.errorResponse ? V.current === C && U(o.errorResponse.message) : l && (4 === l.state ? V.current === C && U("Job Failed") : [1, 2].includes(l.state) && V.current === C && setTimeout(n, g.k));
                                case 30:
                                    e.next = 36;
                                    break;
                                case 32:
                                    e.prev = 32,
                                    e.t0 = e.catch(10),
                                    setTimeout(n, g.k),
                                    console.log(e.t0);
                                case 36:
                                    return e.prev = 36,
                                    (j = t.indexOf(r)) > -1 && t.splice(j, 1),
                                    e.finish(36);
                                case 40:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[10, 32, 36, 40]])
                    }
                    )))).apply(this, arguments)
                }
                C && n()
            }
            ), [C]);
            var D = Object(l.useCallback)((function(e) {
                w(e.jobId),
                V.current = e.jobId,
                x(e.url),
                k.current = e.url,
                T(!!e.uploading)
            }
            ), [])
              , G = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 33;
                                    break
                                }
                                if (r = a.result,
                                !(s = rc.find((function(e) {
                                    return e.url === r
                                }
                                )))) {
                                    e.next = 12;
                                    break
                                }
                                return D(s),
                                e.abrupt("return");
                            case 12:
                                return o = {
                                    url: r,
                                    jobId: ""
                                },
                                rc.push(o),
                                x(o.url),
                                k.current = o.url,
                                w(""),
                                F(void 0),
                                q(void 0),
                                T(!0),
                                o.uploading = !0,
                                e.prev = 21,
                                e.next = 24,
                                cc(n);
                            case 24:
                                u = e.sent,
                                (null === (l = u.createJobResponse) || void 0 === l || null === (i = l.job) || void 0 === i ? void 0 : i.id) ? (o.jobId = u.createJobResponse.job.id,
                                k.current === o.url && w(u.createJobResponse.job.id),
                                V.current = o.jobId) : U((null === (m = u.errorResponse) || void 0 === m ? void 0 : m.message) || "Upload Failed"),
                                T(!1),
                                o.uploading = !1,
                                e.next = 33;
                                break;
                            case 30:
                                e.prev = 30,
                                e.t0 = e.catch(21),
                                console.log(e.t0);
                            case 33:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[21, 30]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [D])
              , W = Object(l.useCallback)((function(e) {
                e && E !== e.url && D(e)
            }
            ), [E, D])
              , K = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = rc[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                E === n.url && D(rc[e - 1]),
                rc.splice(e, 1),
                j(f - 1)
            }
            ), [E, D, f]);
            return i.a.createElement("div", {
                className: "ImageObject"
            }, i.a.createElement("div", {
                className: "ImageObject-banner",
                style: {
                    backgroundImage: "url(".concat(tc, ")")
                }
            }, i.a.createElement("div", {
                className: "ImageObject-banner-content"
            }, i.a.createElement("h2", {
                className: "ImageObject-banner-title"
            }, r(Gr || (Gr = Object(a.a)(["imageObject"])))), i.a.createElement("p", {
                className: "ImageObject-banner-description"
            }, r(Wr || (Wr = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "ImageObject-demo"
            }, i.a.createElement("div", {
                className: "ImageObject-main"
            }, i.a.createElement("div", {
                className: "ImageObject-preview"
            }, i.a.createElement("h2", {
                className: "ImageObject-main-title"
            }, r(Kr || (Kr = Object(a.a)(["inputImage"])))), i.a.createElement("div", {
                className: "ImageObject-preview-wrap"
            }, i.a.createElement("img", {
                src: E,
                ref: t,
                alt: ""
            }))), i.a.createElement("div", {
                className: "ImageObject-result"
            }, i.a.createElement("h2", {
                className: "ImageObject-main-title"
            }, r(Zr || (Zr = Object(a.a)(["detectionResult1"])))), i.a.createElement("div", {
                className: d()("ImageObject-result-wrap", {
                    loading: R || !M && !H
                })
            }, H && !M ? i.a.createElement("div", {
                className: "ImageObject-result-message"
            }, "".concat(r($r || ($r = Object(a.a)(["tip.imageFailed"]))), " (").concat(H, ")")) : i.a.createElement("img", {
                src: M,
                ref: n,
                alt: ""
            }), i.a.createElement("div", {
                className: "ImageObject-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "ImageObject-result-cover-status"
            }, r("tip.".concat(R ? "uploadingPicture" : "processingPicture")))))), i.a.createElement("div", {
                className: "ImageObject-result"
            }, i.a.createElement("h2", {
                className: "ImageObject-main-title"
            }, r(Xr || (Xr = Object(a.a)(["detectionResult2"])))), i.a.createElement("div", {
                className: d()("ImageObject-result-wrap", {
                    loading: R || !J && !H
                })
            }, H && !J ? i.a.createElement("div", {
                className: "ImageObject-result-message"
            }, "".concat(r(Qr || (Qr = Object(a.a)(["tip.imageFailed"]))), " (").concat(H, ")")) : J && J.length > 0 ? i.a.createElement("textarea", {
                className: "ImageObject-result-json",
                value: Object(g.t)(J),
                readOnly: !0
            }) : i.a.createElement("div", {
                className: "ImageObject-result-message"
            }, "".concat(r(Yr || (Yr = Object(a.a)(["tip.emptyResult"]))))), i.a.createElement("div", {
                className: "ImageObject-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "ImageObject-result-cover-status"
            }, r("tip.".concat(R ? "uploadingPicture" : "processingPicture"))))))), i.a.createElement("div", {
                className: "ImageObject-sample"
            }, i.a.createElement("ul", {
                className: "ImageObject-sample-list"
            }, rc.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("ImageObject-sample-item", {
                        active: a === E
                    }),
                    onClick: function() {
                        return W(rc[t])
                    }
                }, i.a.createElement("img", {
                    src: a,
                    alt: ""
                }), n ? null : i.a.createElement("span", {
                    className: "ImageObject-sample-item-delete",
                    onClick: function(e) {
                        return K(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("ImageObject-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: G,
                accept: "image/jpg"
            }))))))
        }, bc = (n(395),
        "".concat(g.d, "/assets/image/back20.jpg")), vc = m.a.CancelToken, gc = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/videoTemporal", fc = [{
            url: "".concat(gc, "/sample1.mp4"),
            jobId: "1",
            result: '[\n    {\n        "clss": "mountain",\n        "start": 0.0,\n        "end": 11.0,\n        "duration": 11.0\n    },\n    {\n        "clss": "farm",\n        "start": 11.0,\n        "end": 13.5,\n        "duration": 2.5\n    }\n]',
            isSample: !0
        }, {
            url: "".concat(gc, "/sample2.mp4"),
            jobId: "2",
            result: '[\n    {\n        "clss": "desert",\n        "start": 0.0,\n        "end": 52.0,\n        "duration": 52.0\n    },\n    {\n        "clss": "castle",\n        "start": 52.0,\n        "end": 54.9,\n        "duration": 2.9\n    },\n    {\n        "clss": "desert",\n        "start": 54.9,\n        "end": 57.5,\n        "duration": 2.6\n    },\n    {\n        "clss": "castle",\n        "start": 57.5,\n        "end": 61.5,\n        "duration": 4.0\n    },\n    {\n        "clss": "arch",\n        "start": 74.8,\n        "end": 78.6,\n        "duration": 3.8\n    },\n    {\n        "clss": "castle",\n        "start": 78.6,\n        "end": 85.2,\n        "duration": 6.6\n    }\n]',
            isSample: !0
        }, {
            url: "".concat(gc, "/sample3.mp4"),
            jobId: "3",
            result: '[\n    {\n        "clss": "boat",\n        "start": 0.6,\n        "end": 3.8,\n        "duration": 3.2\n    },\n    {\n        "clss": "ski_resort",\n        "start": 3.8,\n        "end": 5.1,\n        "duration": 1.3\n    },\n    {\n        "clss": "pond",\n        "start": 5.1,\n        "end": 7.1,\n        "duration": 2.0\n    },\n    {\n        "clss": "ice_and_snow",\n        "start": 7.1,\n        "end": 8.6,\n        "duration": 1.5\n    },\n    {\n        "clss": "ice_and_snow",\n        "start": 11.5,\n        "end": 13.1,\n        "duration": 1.6\n    },\n    {\n        "clss": "ice_and_snow",\n        "start": 13.9,\n        "end": 16.4,\n        "duration": 2.5\n    },\n    {\n        "clss": "stage",\n        "start": 17.4,\n        "end": 19.5,\n        "duration": 2.1\n    }\n]',
            isSample: !0
        }, {
            url: "".concat(gc, "/sample4.mp4"),
            jobId: "4",
            result: '[\n    {\n        "clss": "restaurant",\n        "start": 3.2,\n        "end": 5.1,\n        "duration": 1.9\n    },\n    {\n        "clss": "shop",\n        "start": 5.1,\n        "end": 6.2,\n        "duration": 1.1\n    },\n    {\n        "clss": "road",\n        "start": 11.9,\n        "end": 18.2,\n        "duration": 6.3\n    },\n    {\n        "clss": "woods",\n        "start": 19.9,\n        "end": 21.8,\n        "duration": 1.9\n    },\n    {\n        "clss": "courtyard",\n        "start": 30.3,\n        "end": 31.7,\n        "duration": 1.4\n    },\n    {\n        "clss": "woods",\n        "start": 31.7,\n        "end": 34.9,\n        "duration": 3.2\n    }\n]',
            isSample: !0
        }];
        function jc(e) {
            return hc.apply(this, arguments)
        }
        function hc() {
            return (hc = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/videoScene/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                videoAnalysis: {
                                    type: 1
                                }
                            }, "".concat(g.b, "/result/videoScene"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Oc, Ec, xc, kc, yc, Nc = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("videoScene").t
              , u = Object(l.useState)(fc.length)
              , p = Object(s.a)(u, 2)
              , f = p[0]
              , j = p[1]
              , h = Object(l.useState)(fc[0].url)
              , O = Object(s.a)(h, 2)
              , E = O[0]
              , x = O[1]
              , k = Object(l.useRef)(fc[0].url)
              , y = Object(l.useState)(fc[0].jobId)
              , N = Object(s.a)(y, 2)
              , C = N[0]
              , w = N[1]
              , S = Object(l.useState)(!1)
              , I = Object(s.a)(S, 2)
              , R = I[0]
              , T = I[1]
              , V = Object(l.useRef)(fc[0].jobId)
              , _ = Object(l.useState)()
              , A = Object(s.a)(_, 2)
              , M = A[0]
              , F = A[1]
              , z = Object(l.useState)("")
              , P = Object(s.a)(z, 2)
              , J = P[0]
              , q = P[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var a, r;
                null === (a = t.current) || void 0 === a || a.pause(),
                null === (r = n.current) || void 0 === r || r.pause();
                var s = e.current;
                function l() {
                    return i.apply(this, arguments)
                }
                function i() {
                    return (i = Object(o.a)(c.a.mark((function e() {
                        var t, n, a, r, o, i, u, p, d, b;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = fc.find((function(e) {
                                        return e.jobId === C
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", F(t.result));
                                case 5:
                                    return V.current === C && (F(void 0),
                                    q("")),
                                    n = vc.source(),
                                    s.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(C, n.token);
                                case 11:
                                    if (r = e.sent,
                                    !(o = null === (a = r.getJobResponse) || void 0 === a ? void 0 : a.job) || 3 !== o.state) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 16,
                                    Object(g.w)("".concat(g.b, "/result/videoScene/").concat(null === (i = o.outputs[0].smartContentResult) || void 0 === i || null === (u = i.videoAnalysis) || void 0 === u ? void 0 : u.detectionFileName));
                                case 16:
                                    return p = e.sent,
                                    e.next = 19,
                                    m.a.get(p);
                                case 19:
                                    (d = e.sent).data && (t.result = d.data,
                                    V.current === C && F(t.result)),
                                    e.next = 24;
                                    break;
                                case 23:
                                    r.errorResponse ? V.current === C && q(r.errorResponse.message) : o && (4 === o.state ? V.current === C && q("Job Failed") : [1, 2].includes(o.state) && V.current === C && setTimeout(l, g.k));
                                case 24:
                                    e.next = 30;
                                    break;
                                case 26:
                                    e.prev = 26,
                                    e.t0 = e.catch(8),
                                    setTimeout(l, g.k),
                                    console.log(e.t0);
                                case 30:
                                    return e.prev = 30,
                                    (b = s.indexOf(n)) > -1 && s.splice(b, 1),
                                    e.finish(30);
                                case 34:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 26, 30, 34]])
                    }
                    )))).apply(this, arguments)
                }
                C && l()
            }
            ), [C]);
            var L = Object(l.useCallback)((function(e) {
                w(e.jobId),
                V.current = e.jobId,
                x(e.url),
                k.current = e.url,
                T(!!e.uploading)
            }
            ), [])
              , B = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m, p;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.A)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 33;
                                    break
                                }
                                if (r = a.result,
                                s = URL.createObjectURL(new Blob([r])),
                                !(o = fc.find((function(e) {
                                    return e.url === s
                                }
                                )))) {
                                    e.next = 13;
                                    break
                                }
                                return L(o),
                                e.abrupt("return");
                            case 13:
                                return l = {
                                    url: s,
                                    jobId: ""
                                },
                                fc.push(l),
                                x(l.url),
                                k.current = l.url,
                                w(""),
                                F(void 0),
                                T(!0),
                                l.uploading = !0,
                                e.prev = 21,
                                e.next = 24,
                                jc(n);
                            case 24:
                                m = e.sent,
                                (null === (i = m.createJobResponse) || void 0 === i || null === (u = i.job) || void 0 === u ? void 0 : u.id) ? (l.jobId = m.createJobResponse.job.id,
                                k.current === l.url && w(m.createJobResponse.job.id),
                                V.current = l.jobId) : q((null === (p = m.errorResponse) || void 0 === p ? void 0 : p.message) || "Upload Failed"),
                                T(!1),
                                l.uploading = !1,
                                e.next = 33;
                                break;
                            case 30:
                                e.prev = 30,
                                e.t0 = e.catch(21),
                                console.log(e.t0);
                            case 33:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[21, 30]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [L])
              , H = Object(l.useCallback)((function(e) {
                e && E !== e.url && L(e)
            }
            ), [E, L])
              , U = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = fc[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                E === n.url && L(fc[e - 1]),
                fc.splice(e, 1),
                j(f - 1)
            }
            ), [E, L, f]);
            return i.a.createElement("div", {
                className: "VideoScene"
            }, i.a.createElement("div", {
                className: "VideoScene-banner",
                style: {
                    backgroundImage: "url(".concat(bc, ")")
                }
            }, i.a.createElement("div", {
                className: "VideoScene-banner-content"
            }, i.a.createElement("h2", {
                className: "VideoScene-banner-title"
            }, r(oc || (oc = Object(a.a)(["videoScene"])))), i.a.createElement("p", {
                className: "VideoScene-banner-description"
            }, r(lc || (lc = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "VideoScene-demo"
            }, i.a.createElement("div", {
                className: "VideoScene-main"
            }, i.a.createElement("div", {
                className: "VideoScene-preview"
            }, i.a.createElement("h2", {
                className: "VideoScene-main-title"
            }, r(ic || (ic = Object(a.a)(["inputVideo"])))), i.a.createElement("div", {
                className: "VideoScene-preview-wrap"
            }, i.a.createElement("video", {
                src: E,
                controls: !0,
                controlsList: "nodownload",
                ref: t
            }))), i.a.createElement("div", {
                className: "VideoScene-result"
            }, i.a.createElement("h2", {
                className: "VideoScene-main-title"
            }, r(uc || (uc = Object(a.a)(["detectionResult2"])))), i.a.createElement("div", {
                className: d()("VideoScene-result-wrap", {
                    loading: R || !M && !J
                })
            }, J && !M ? i.a.createElement("div", {
                className: "VideoScene-result-message"
            }, "".concat(r(mc || (mc = Object(a.a)(["tip.processedFailed"]))), " (").concat(J, ")")) : M && M.length > 0 ? i.a.createElement("textarea", {
                className: "VideoScene-result-json",
                value: Object(g.t)(M),
                readOnly: !0
            }) : i.a.createElement("div", {
                className: "VideoScene-result-message"
            }, "".concat(r(pc || (pc = Object(a.a)(["tip.emptyResult"]))))), i.a.createElement("div", {
                className: "VideoScene-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "VideoScene-result-cover-status"
            }, r("tip.".concat(R ? "uploadingVideo" : "processingVideo"))))))), i.a.createElement("div", {
                className: "VideoScene-sample"
            }, i.a.createElement("ul", {
                className: "VideoScene-sample-list"
            }, fc.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("VideoScene-sample-item", {
                        active: a === E
                    }),
                    onClick: function() {
                        return H(fc[t])
                    }
                }, i.a.createElement("video", {
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "VideoScene-sample-item-delete",
                    onClick: function(e) {
                        return U(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("VideoScene-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: B,
                accept: "video/*"
            }))))))
        }, Cc = (n(396),
        "".concat(g.d, "/assets/image/back10.jpg")), wc = m.a.CancelToken, Sc = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/videoObject", Ic = [{
            url: "".concat(Sc, "/sample1.mp4"),
            jobId: "1",
            result: '{\n    "objects": [\n        "car",\n        "person",\n        "suitcase",\n        "traffic light"\n    ],\n    "details": [\n        {\n            "timestamp @ 0s": [\n                {\n                    "class": "person",\n                    "box": [\n                        293.8698,\n                        171.4172,\n                        408.4563,\n                        582.9492\n                    ],\n                    "score": 0.9992\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        696.7617,\n                        105.4024,\n                        866.1206,\n                        677.8038\n                    ],\n                    "score": 0.9987\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        437.1367,\n                        134.846,\n                        629.3788,\n                        598.1685\n                    ],\n                    "score": 0.9982\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1123.6176,\n                        173.0738,\n                        1250.6848,\n                        564.7358\n                    ],\n                    "score": 0.9977\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        992.6674,\n                        216.9466,\n                        1116.8541,\n                        559.0189\n                    ],\n                    "score": 0.9947\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        835.2434,\n                        352.2169,\n                        961.1943,\n                        516.0472\n                    ],\n                    "score": 0.9914\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        411.5079,\n                        174.9606,\n                        512.9452,\n                        573.7906\n                    ],\n                    "score": 0.9904\n                },\n                {\n                    "class": "car",\n                    "box": [\n                        3.0547,\n                        285.9279,\n                        212.4321,\n                        438.7656\n                    ],\n                    "score": 0.9876\n                },\n                {\n                    "class": "suitcase",\n                    "box": [\n                        398.0599,\n                        335.03,\n                        487.9261,\n                        591.5298\n                    ],\n                    "score": 0.9857\n                },\n                {\n                    "class": "traffic light",\n                    "box": [\n                        1191.8142,\n                        131.697,\n                        1234.1217,\n                        206.0115\n                    ],\n                    "score": 0.9828\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        598.179,\n                        160.7101,\n                        727.9999,\n                        625.7451\n                    ],\n                    "score": 0.9687\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        585.3029,\n                        169.9504,\n                        653.0389,\n                        279.8117\n                    ],\n                    "score": 0.9456\n                },\n                {\n                    "class": "traffic light",\n                    "box": [\n                        233.8791,\n                        178.7661,\n                        263.8186,\n                        239.055\n                    ],\n                    "score": 0.9428\n                }\n            ]\n        },\n        {\n            "timestamp @ 1s": [\n                {\n                    "class": "person",\n                    "box": [\n                        611.4479,\n                        97.9247,\n                        824.4878,\n                        709.3956\n                    ],\n                    "score": 0.9992\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        293.639,\n                        169.1096,\n                        406.9835,\n                        582.8045\n                    ],\n                    "score": 0.9992\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        442.7123,\n                        131.5495,\n                        622.8875,\n                        600.2589\n                    ],\n                    "score": 0.9983\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1122.4878,\n                        174.6289,\n                        1252.1287,\n                        566.6976\n                    ],\n                    "score": 0.9978\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        407.7653,\n                        163.9288,\n                        512.4409,\n                        586.025\n                    ],\n                    "score": 0.9946\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        841.3951,\n                        350.4001,\n                        966.6582,\n                        509.0237\n                    ],\n                    "score": 0.9938\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        989.4002,\n                        216.9155,\n                        1112.8643,\n                        559.1808\n                    ],\n                    "score": 0.9928\n                },\n                {\n                    "class": "car",\n                    "box": [\n                        2.8901,\n                        280.2581,\n                        212.7437,\n                        438.85\n                    ],\n                    "score": 0.9865\n                },\n                {\n                    "class": "traffic light",\n                    "box": [\n                        1192.2847,\n                        131.5749,\n                        1234.114,\n                        204.8295\n                    ],\n                    "score": 0.9826\n                },\n                {\n                    "class": "suitcase",\n                    "box": [\n                        393.4642,\n                        352.3306,\n                        480.9264,\n                        591.5716\n                    ],\n                    "score": 0.9714\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        239.3039,\n                        313.6708,\n                        264.2794,\n                        390.3023\n                    ],\n                    "score": 0.9677\n                },\n                {\n                    "class": "traffic light",\n                    "box": [\n                        233.8513,\n                        179.3495,\n                        263.2773,\n                        239.4737\n                    ],\n                    "score": 0.9464\n                }\n            ]\n        },\n        {\n            "timestamp @ 2s": [\n                {\n                    "class": "person",\n                    "box": [\n                        561.3845,\n                        67.3825,\n                        775.999,\n                        713.3786\n                    ],\n                    "score": 0.9992\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        290.5234,\n                        161.0148,\n                        405.6659,\n                        583.9015\n                    ],\n                    "score": 0.9992\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1130.2493,\n                        171.0864,\n                        1250.8997,\n                        568.181\n                    ],\n                    "score": 0.9971\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        989.6856,\n                        218.3101,\n                        1110.7328,\n                        555.8411\n                    ],\n                    "score": 0.9967\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        841.3588,\n                        350.6374,\n                        966.6359,\n                        510.0781\n                    ],\n                    "score": 0.9951\n                },\n                {\n                    "class": "suitcase",\n                    "box": [\n                        397.1951,\n                        365.5495,\n                        486.6363,\n                        590.7129\n                    ],\n                    "score": 0.9919\n                },\n                {\n                    "class": "traffic light",\n                    "box": [\n                        1192.5059,\n                        131.6201,\n                        1234.2484,\n                        203.6965\n                    ],\n                    "score": 0.9835\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        411.6263,\n                        175.5087,\n                        502.644,\n                        450.0433\n                    ],\n                    "score": 0.9826\n                },\n                {\n                    "class": "car",\n                    "box": [\n                        26.8978,\n                        297.2256,\n                        213.3411,\n                        438.4021\n                    ],\n                    "score": 0.9812\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        806.2781,\n                        312.5666,\n                        834.9198,\n                        378.4558\n                    ],\n                    "score": 0.9598\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.7133,\n                        36.5979,\n                        49.0667,\n                        671.9568\n                    ],\n                    "score": 0.9593\n                }\n            ]\n        },\n        {\n            "timestamp @ 3s": [\n                {\n                    "class": "person",\n                    "box": [\n                        292.2414,\n                        168.0791,\n                        403.308,\n                        582.6654\n                    ],\n                    "score": 0.9994\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        492.994,\n                        33.238,\n                        749.6943,\n                        716.9476\n                    ],\n                    "score": 0.9994\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        69.1206,\n                        63.8614,\n                        248.4266,\n                        692.6149\n                    ],\n                    "score": 0.9991\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1123.2439,\n                        171.5368,\n                        1250.9166,\n                        566.1426\n                    ],\n                    "score": 0.9978\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        835.4807,\n                        351.2675,\n                        956.4099,\n                        517.012\n                    ],\n                    "score": 0.9942\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        991.0952,\n                        213.7808,\n                        1114.585,\n                        552.2267\n                    ],\n                    "score": 0.9919\n                },\n                {\n                    "class": "traffic light",\n                    "box": [\n                        1192.0354,\n                        131.567,\n                        1233.7212,\n                        203.7846\n                    ],\n                    "score": 0.9829\n                },\n                {\n                    "class": "car",\n                    "box": [\n                        1.1587,\n                        273.2071,\n                        97.5354,\n                        438.474\n                    ],\n                    "score": 0.9829\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        404.6233,\n                        172.5981,\n                        491.6566,\n                        326.6401\n                    ],\n                    "score": 0.9751\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        781.8016,\n                        309.986,\n                        808.3629,\n                        375.3484\n                    ],\n                    "score": 0.9511\n                }\n            ]\n        },\n        {\n            "timestamp @ 4s": [\n                {\n                    "class": "person",\n                    "box": [\n                        406.3465,\n                        0.4893,\n                        697.5464,\n                        708.5263\n                    ],\n                    "score": 0.9993\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        936.5114,\n                        0.0,\n                        1274.1256,\n                        701.4825\n                    ],\n                    "score": 0.9957\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        829.6757,\n                        353.3685,\n                        956.6331,\n                        510.5151\n                    ],\n                    "score": 0.9956\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        650.7351,\n                        175.1252,\n                        743.9066,\n                        552.7881\n                    ],\n                    "score": 0.9929\n                },\n                {\n                    "class": "car",\n                    "box": [\n                        1.4424,\n                        279.675,\n                        211.1566,\n                        439.4545\n                    ],\n                    "score": 0.9846\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        764.584,\n                        308.0648,\n                        787.4208,\n                        376.9716\n                    ],\n                    "score": 0.9802\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        783.7283,\n                        310.0345,\n                        806.3519,\n                        376.7855\n                    ],\n                    "score": 0.9477\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        269.3495,\n                        64.6172,\n                        462.5036,\n                        714.3302\n                    ],\n                    "score": 0.9414\n                }\n            ]\n        },\n        {\n            "timestamp @ 5s": [\n                {\n                    "class": "person",\n                    "box": [\n                        284.9479,\n                        4.1476,\n                        620.2876,\n                        717.4116\n                    ],\n                    "score": 0.9989\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        602.6579,\n                        167.7856,\n                        743.5087,\n                        572.228\n                    ],\n                    "score": 0.9989\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        86.7519,\n                        4.3353,\n                        358.7645,\n                        716.3812\n                    ],\n                    "score": 0.9968\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        746.9271,\n                        0.6334,\n                        1272.8092,\n                        713.2057\n                    ],\n                    "score": 0.9752\n                },\n                {\n                    "class": "car",\n                    "box": [\n                        0.8583,\n                        290.1854,\n                        102.9764,\n                        424.7681\n                    ],\n                    "score": 0.9607\n                }\n            ]\n        },\n        {\n            "timestamp @ 6s": [\n                {\n                    "class": "person",\n                    "box": [\n                        1096.1049,\n                        176.3082,\n                        1217.1959,\n                        568.6783\n                    ],\n                    "score": 0.9991\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        928.1668,\n                        216.0338,\n                        1076.9149,\n                        553.4445\n                    ],\n                    "score": 0.9964\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        791.4127,\n                        354.6996,\n                        903.2992,\n                        528.3168\n                    ],\n                    "score": 0.9926\n                },\n                {\n                    "class": "traffic light",\n                    "box": [\n                        1190.4495,\n                        131.5228,\n                        1233.2977,\n                        204.8518\n                    ],\n                    "score": 0.9891\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        2.9289,\n                        151.6575,\n                        663.1032\n                    ],\n                    "score": 0.9604\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        135.1843,\n                        0.0,\n                        816.8197,\n                        720.0\n                    ],\n                    "score": 0.9404\n                }\n            ]\n        },\n        {\n            "timestamp @ 7s": [\n                {\n                    "class": "person",\n                    "box": [\n                        696.3818,\n                        143.7294,\n                        898.1242,\n                        628.8599\n                    ],\n                    "score": 0.999\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1079.0623,\n                        168.8266,\n                        1203.1426,\n                        566.3582\n                    ],\n                    "score": 0.999\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        582.3107,\n                        146.658,\n                        714.5519,\n                        585.13\n                    ],\n                    "score": 0.9986\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        287.7443,\n                        160.7366,\n                        404.5252,\n                        585.316\n                    ],\n                    "score": 0.9976\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        428.722,\n                        134.1032,\n                        546.6309,\n                        602.8791\n                    ],\n                    "score": 0.9972\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        880.9176,\n                        213.5086,\n                        1044.7356,\n                        574.5839\n                    ],\n                    "score": 0.9967\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        2.2501,\n                        274.1158,\n                        709.58\n                    ],\n                    "score": 0.9919\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        500.0158,\n                        143.726,\n                        591.798,\n                        567.3765\n                    ],\n                    "score": 0.9913\n                },\n                {\n                    "class": "traffic light",\n                    "box": [\n                        1190.3497,\n                        132.0259,\n                        1233.3835,\n                        205.1368\n                    ],\n                    "score": 0.9891\n                },\n                {\n                    "class": "suitcase",\n                    "box": [\n                        383.6565,\n                        445.5261,\n                        459.4978,\n                        583.0641\n                    ],\n                    "score": 0.9724\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        369.5651,\n                        168.6349,\n                        456.4472,\n                        509.5209\n                    ],\n                    "score": 0.9429\n                }\n            ]\n        }\n    ]\n}',
            isSample: !0
        }, {
            url: "".concat(Sc, "/sample2.mp4"),
            jobId: "2",
            result: '{\n    "objects": [\n        "cup",\n        "dining table",\n        "laptop",\n        "person"\n    ],\n    "details": [\n        {\n            "timestamp @ 0s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        843.4589,\n                        299.9975,\n                        1161.1503,\n                        624.6043\n                    ],\n                    "score": 0.9993\n                },\n                {\n                    "class": "dining table",\n                    "box": [\n                        261.9068,\n                        140.1291,\n                        1276.8899,\n                        710.4763\n                    ],\n                    "score": 0.9528\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        65.6104,\n                        717.7807,\n                        708.8654\n                    ],\n                    "score": 0.9485\n                }\n            ]\n        },\n        {\n            "timestamp @ 1s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        787.2807,\n                        294.0705,\n                        1118.4706,\n                        623.2335\n                    ],\n                    "score": 0.9991\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        167.2227,\n                        826.7774,\n                        711.84\n                    ],\n                    "score": 0.9594\n                }\n            ]\n        },\n        {\n            "timestamp @ 2s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        782.2293,\n                        257.851,\n                        1117.4984,\n                        592.553\n                    ],\n                    "score": 0.9991\n                },\n                {\n                    "class": "laptop",\n                    "box": [\n                        445.5397,\n                        0.0,\n                        950.3589,\n                        489.8604\n                    ],\n                    "score": 0.9923\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        67.0084,\n                        712.9409,\n                        701.4271\n                    ],\n                    "score": 0.9912\n                }\n            ]\n        },\n        {\n            "timestamp @ 3s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        777.8011,\n                        255.0232,\n                        1114.1117,\n                        600.2449\n                    ],\n                    "score": 0.9987\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        109.8508,\n                        753.7131,\n                        691.77\n                    ],\n                    "score": 0.9934\n                },\n                {\n                    "class": "laptop",\n                    "box": [\n                        457.9612,\n                        20.3428,\n                        1001.3808,\n                        490.0936\n                    ],\n                    "score": 0.9679\n                }\n            ]\n        },\n        {\n            "timestamp @ 4s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        768.4304,\n                        278.3382,\n                        1102.3436,\n                        635.952\n                    ],\n                    "score": 0.9977\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        68.0413,\n                        754.4629,\n                        712.0563\n                    ],\n                    "score": 0.9898\n                },\n                {\n                    "class": "laptop",\n                    "box": [\n                        440.0344,\n                        0.6449,\n                        1051.3357,\n                        543.8288\n                    ],\n                    "score": 0.9739\n                }\n            ]\n        },\n        {\n            "timestamp @ 5s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        790.1329,\n                        307.4552,\n                        1143.8329,\n                        669.5975\n                    ],\n                    "score": 0.9984\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        116.8289,\n                        742.2084,\n                        713.3219\n                    ],\n                    "score": 0.9875\n                },\n                {\n                    "class": "laptop",\n                    "box": [\n                        409.6149,\n                        8.5706,\n                        1147.6176,\n                        574.8098\n                    ],\n                    "score": 0.9792\n                }\n            ]\n        },\n        {\n            "timestamp @ 6s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        796.902,\n                        325.6141,\n                        1156.213,\n                        700.111\n                    ],\n                    "score": 0.9991\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1.2512,\n                        128.6763,\n                        670.4062,\n                        720.0\n                    ],\n                    "score": 0.9822\n                },\n                {\n                    "class": "laptop",\n                    "box": [\n                        417.5004,\n                        11.7806,\n                        1165.3086,\n                        575.0599\n                    ],\n                    "score": 0.9748\n                }\n            ]\n        },\n        {\n            "timestamp @ 7s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        793.3951,\n                        333.8016,\n                        1160.2169,\n                        711.7119\n                    ],\n                    "score": 0.9987\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        68.9636,\n                        618.4186,\n                        714.428\n                    ],\n                    "score": 0.9917\n                },\n                {\n                    "class": "laptop",\n                    "box": [\n                        370.3372,\n                        4.6169,\n                        1247.9397,\n                        585.1473\n                    ],\n                    "score": 0.9787\n                }\n            ]\n        },\n        {\n            "timestamp @ 8s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        782.1551,\n                        333.2739,\n                        1157.3153,\n                        709.063\n                    ],\n                    "score": 0.999\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        89.7744,\n                        584.2856,\n                        694.9903\n                    ],\n                    "score": 0.9774\n                }\n            ]\n        },\n        {\n            "timestamp @ 9s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        801.0312,\n                        324.0053,\n                        1170.5081,\n                        705.119\n                    ],\n                    "score": 0.9987\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        81.8895,\n                        588.6036,\n                        693.1756\n                    ],\n                    "score": 0.9777\n                },\n                {\n                    "class": "laptop",\n                    "box": [\n                        365.5963,\n                        0.0,\n                        1279.2441,\n                        600.7041\n                    ],\n                    "score": 0.9519\n                }\n            ]\n        },\n        {\n            "timestamp @ 10s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        842.0308,\n                        317.6393,\n                        1211.3702,\n                        694.9647\n                    ],\n                    "score": 0.9975\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        73.8481,\n                        629.0659,\n                        689.9591\n                    ],\n                    "score": 0.9818\n                },\n                {\n                    "class": "laptop",\n                    "box": [\n                        402.1309,\n                        1.6545,\n                        1273.9458,\n                        571.0809\n                    ],\n                    "score": 0.9754\n                }\n            ]\n        },\n        {\n            "timestamp @ 11s": [\n                {\n                    "class": "cup",\n                    "box": [\n                        879.2003,\n                        330.3511,\n                        1245.7313,\n                        706.1223\n                    ],\n                    "score": 0.9983\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        2.1492,\n                        75.9277,\n                        673.4098,\n                        705.0486\n                    ],\n                    "score": 0.9941\n                },\n                {\n                    "class": "laptop",\n                    "box": [\n                        453.7665,\n                        14.6277,\n                        1243.9841,\n                        591.5175\n                    ],\n                    "score": 0.9771\n                }\n            ]\n        }\n    ]\n}',
            isSample: !0
        }, {
            url: "".concat(Sc, "/sample3.mp4"),
            jobId: "3",
            result: '{\n    "objects": [\n        "cake",\n        "cell phone",\n        "cup",\n        "person"\n    ],\n    "details": [\n        {\n            "timestamp @ 0s": [\n                {\n                    "class": "person",\n                    "box": [\n                        464.5132,\n                        42.0316,\n                        912.7632,\n                        644.9755\n                    ],\n                    "score": 0.9948\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        6.4007,\n                        0.7159,\n                        627.054,\n                        715.9877\n                    ],\n                    "score": 0.9915\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1073.6816,\n                        7.3137,\n                        1277.2207,\n                        515.4591\n                    ],\n                    "score": 0.9882\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        885.7647,\n                        112.0484,\n                        1096.6262,\n                        466.6794\n                    ],\n                    "score": 0.9874\n                },\n                {\n                    "class": "cake",\n                    "box": [\n                        793.7169,\n                        469.7841,\n                        1136.7756,\n                        714.0353\n                    ],\n                    "score": 0.9844\n                }\n            ]\n        },\n        {\n            "timestamp @ 1s": [\n                {\n                    "class": "person",\n                    "box": [\n                        468.2688,\n                        29.2982,\n                        919.3655,\n                        614.965\n                    ],\n                    "score": 0.9956\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        79.4615,\n                        1.2042,\n                        811.0358,\n                        689.7823\n                    ],\n                    "score": 0.992\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        950.1293,\n                        98.5581,\n                        1157.3904,\n                        438.8826\n                    ],\n                    "score": 0.9758\n                },\n                {\n                    "class": "cake",\n                    "box": [\n                        799.5432,\n                        440.2085,\n                        1152.1882,\n                        708.9955\n                    ],\n                    "score": 0.95\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        874.5388,\n                        216.329,\n                        959.4142,\n                        420.4019\n                    ],\n                    "score": 0.9465\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1104.5417,\n                        3.4698,\n                        1279.5664,\n                        540.0005\n                    ],\n                    "score": 0.931\n                }\n            ]\n        },\n        {\n            "timestamp @ 2s": [\n                {\n                    "class": "person",\n                    "box": [\n                        438.7319,\n                        22.3261,\n                        917.2637,\n                        630.4457\n                    ],\n                    "score": 0.9952\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        97.5628,\n                        6.9079,\n                        875.4384,\n                        683.7995\n                    ],\n                    "score": 0.9952\n                },\n                {\n                    "class": "cake",\n                    "box": [\n                        805.4128,\n                        477.106,\n                        1155.6327,\n                        709.6998\n                    ],\n                    "score": 0.9828\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1041.3326,\n                        91.3143,\n                        1246.2224,\n                        503.5426\n                    ],\n                    "score": 0.9768\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        171.7698,\n                        82.5221,\n                        562.7728\n                    ],\n                    "score": 0.9718\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        966.2179,\n                        216.1079,\n                        1050.8271,\n                        438.7921\n                    ],\n                    "score": 0.9407\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        735.8674,\n                        60.7422,\n                        960.5848,\n                        437.7803\n                    ],\n                    "score": 0.9305\n                }\n            ]\n        },\n        {\n            "timestamp @ 3s": [\n                {\n                    "class": "person",\n                    "box": [\n                        0.3648,\n                        21.02,\n                        155.8978,\n                        709.779\n                    ],\n                    "score": 0.9992\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        100.9985,\n                        3.7764,\n                        829.3002,\n                        718.7932\n                    ],\n                    "score": 0.9962\n                },\n                {\n                    "class": "cake",\n                    "box": [\n                        775.391,\n                        481.3299,\n                        1136.6726,\n                        707.8181\n                    ],\n                    "score": 0.9921\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        436.0057,\n                        23.4393,\n                        894.8609,\n                        634.7811\n                    ],\n                    "score": 0.9915\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1094.714,\n                        93.1663,\n                        1279.5696,\n                        564.7184\n                    ],\n                    "score": 0.99\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        785.5142,\n                        25.0131,\n                        1006.6502,\n                        463.8101\n                    ],\n                    "score": 0.9846\n                }\n            ]\n        },\n        {\n            "timestamp @ 4s": [\n                {\n                    "class": "person",\n                    "box": [\n                        0.0,\n                        49.0001,\n                        248.5689,\n                        716.1221\n                    ],\n                    "score": 0.9989\n                },\n                {\n                    "class": "cake",\n                    "box": [\n                        817.9729,\n                        487.1118,\n                        1175.5481,\n                        701.3734\n                    ],\n                    "score": 0.9945\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        332.335,\n                        16.2367,\n                        896.5383,\n                        696.3674\n                    ],\n                    "score": 0.994\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        865.0556,\n                        25.6721,\n                        1066.359,\n                        474.4559\n                    ],\n                    "score": 0.9684\n                }\n            ]\n        },\n        {\n            "timestamp @ 5s": [\n                {\n                    "class": "person",\n                    "box": [\n                        38.2033,\n                        20.0947,\n                        300.9016,\n                        707.0524\n                    ],\n                    "score": 0.9989\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        299.9929,\n                        5.6363,\n                        904.2972,\n                        702.1601\n                    ],\n                    "score": 0.9959\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        878.421,\n                        22.3526,\n                        1112.9583,\n                        464.2485\n                    ],\n                    "score": 0.9911\n                },\n                {\n                    "class": "cake",\n                    "box": [\n                        800.0667,\n                        506.635,\n                        1166.316,\n                        709.3704\n                    ],\n                    "score": 0.9842\n                }\n            ]\n        },\n        {\n            "timestamp @ 6s": [\n                {\n                    "class": "person",\n                    "box": [\n                        925.4259,\n                        20.3231,\n                        1223.4155,\n                        561.8223\n                    ],\n                    "score": 0.9977\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        269.5792,\n                        0.0,\n                        876.9068,\n                        708.6161\n                    ],\n                    "score": 0.9972\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        105.4817,\n                        46.5224,\n                        336.7282,\n                        659.2718\n                    ],\n                    "score": 0.9943\n                },\n                {\n                    "class": "cup",\n                    "box": [\n                        941.5592,\n                        263.1625,\n                        994.441,\n                        328.8374\n                    ],\n                    "score": 0.9765\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        543.0275,\n                        10.3079,\n                        932.6805,\n                        658.4781\n                    ],\n                    "score": 0.9763\n                },\n                {\n                    "class": "cake",\n                    "box": [\n                        780.1754,\n                        467.9047,\n                        1162.9244,\n                        701.5975\n                    ],\n                    "score": 0.949\n                }\n            ]\n        },\n        {\n            "timestamp @ 7s": [\n                {\n                    "class": "person",\n                    "box": [\n                        229.3401,\n                        13.9732,\n                        962.9658,\n                        700.8035\n                    ],\n                    "score": 0.9979\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1038.5503,\n                        5.4106,\n                        1276.4476,\n                        576.3702\n                    ],\n                    "score": 0.9964\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        191.9557,\n                        56.0348,\n                        399.9103,\n                        698.3143\n                    ],\n                    "score": 0.9959\n                },\n                {\n                    "class": "cup",\n                    "box": [\n                        1034.1918,\n                        264.9241,\n                        1086.4283,\n                        330.2114\n                    ],\n                    "score": 0.9824\n                },\n                {\n                    "class": "cake",\n                    "box": [\n                        775.2587,\n                        493.1158,\n                        1165.7543,\n                        702.2491\n                    ],\n                    "score": 0.9776\n                }\n            ]\n        },\n        {\n            "timestamp @ 8s": [\n                {\n                    "class": "person",\n                    "box": [\n                        296.7162,\n                        3.3508,\n                        1019.2482,\n                        689.1154\n                    ],\n                    "score": 0.9985\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1109.299,\n                        7.2998,\n                        1276.285,\n                        606.4118\n                    ],\n                    "score": 0.9983\n                },\n                {\n                    "class": "cup",\n                    "box": [\n                        1147.239,\n                        262.4497,\n                        1205.849,\n                        326.8715\n                    ],\n                    "score": 0.9915\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        279.9952,\n                        58.6611,\n                        465.596,\n                        370.3963\n                    ],\n                    "score": 0.9872\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        806.2601,\n                        172.5777,\n                        1056.087,\n                        615.8216\n                    ],\n                    "score": 0.9793\n                }\n            ]\n        },\n        {\n            "timestamp @ 9s": [\n                {\n                    "class": "person",\n                    "box": [\n                        330.8834,\n                        1.4633,\n                        963.8267,\n                        710.105\n                    ],\n                    "score": 0.9978\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        869.1652,\n                        185.4024,\n                        1134.8577,\n                        652.1097\n                    ],\n                    "score": 0.9941\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        1169.7301,\n                        138.7141,\n                        1280.0,\n                        638.1091\n                    ],\n                    "score": 0.9927\n                },\n                {\n                    "class": "cake",\n                    "box": [\n                        730.3079,\n                        504.6953,\n                        1027.4883,\n                        700.4708\n                    ],\n                    "score": 0.9508\n                }\n            ]\n        },\n        {\n            "timestamp @ 10s": [\n                {\n                    "class": "cell phone",\n                    "box": [\n                        1124.0582,\n                        285.2005,\n                        1183.1019,\n                        350.0307\n                    ],\n                    "score": 0.9952\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        362.1335,\n                        16.8215,\n                        1113.9222,\n                        703.1019\n                    ],\n                    "score": 0.9917\n                },\n                {\n                    "class": "person",\n                    "box": [\n                        960.8713,\n                        203.5688,\n                        1275.8724,\n                        709.9604\n                    ],\n                    "score": 0.9859\n                }\n            ]\n        }\n    ]\n}',
            isSample: !0
        }, {
            url: "".concat(Sc, "/sample4.mp4"),
            jobId: "4",
            result: '{\n    "objects": [\n        "airplane"\n    ],\n    "details": [\n        {\n            "timestamp @ 0s": [\n                {\n                    "class": "airplane",\n                    "box": [\n                        463.3098,\n                        322.8346,\n                        788.6504,\n                        392.2428\n                    ],\n                    "score": 0.9977\n                }\n            ]\n        },\n        {\n            "timestamp @ 1s": [\n                {\n                    "class": "airplane",\n                    "box": [\n                        420.5629,\n                        295.5713,\n                        791.6238,\n                        399.1063\n                    ],\n                    "score": 0.9984\n                }\n            ]\n        },\n        {\n            "timestamp @ 2s": [\n                {\n                    "class": "airplane",\n                    "box": [\n                        369.9221,\n                        284.177,\n                        755.3912,\n                        403.1081\n                    ],\n                    "score": 0.998\n                },\n                {\n                    "class": "airplane",\n                    "box": [\n                        891.5623,\n                        360.912,\n                        1034.886,\n                        425.5945\n                    ],\n                    "score": 0.9931\n                },\n                {\n                    "class": "airplane",\n                    "box": [\n                        1102.1946,\n                        389.1454,\n                        1218.1907,\n                        430.0295\n                    ],\n                    "score": 0.9588\n                }\n            ]\n        },\n        {\n            "timestamp @ 3s": [\n                {\n                    "class": "airplane",\n                    "box": [\n                        257.5988,\n                        226.8959,\n                        751.6627,\n                        382.1426\n                    ],\n                    "score": 0.9988\n                },\n                {\n                    "class": "airplane",\n                    "box": [\n                        411.4245,\n                        394.786,\n                        550.0074,\n                        461.0291\n                    ],\n                    "score": 0.9875\n                },\n                {\n                    "class": "airplane",\n                    "box": [\n                        612.3351,\n                        425.3364,\n                        706.7176,\n                        462.0328\n                    ],\n                    "score": 0.9773\n                }\n            ]\n        },\n        {\n            "timestamp @ 4s": [\n                {\n                    "class": "airplane",\n                    "box": [\n                        185.5984,\n                        173.9607,\n                        877.0572,\n                        391.111\n                    ],\n                    "score": 0.9995\n                }\n            ]\n        },\n        {\n            "timestamp @ 5s": [\n                {\n                    "class": "airplane",\n                    "box": [\n                        162.898,\n                        151.4707,\n                        996.4196,\n                        382.6429\n                    ],\n                    "score": 0.9983\n                }\n            ]\n        },\n        {\n            "timestamp @ 6s": [\n                {\n                    "class": "airplane",\n                    "box": [\n                        235.3448,\n                        170.1478,\n                        986.0632,\n                        380.6359\n                    ],\n                    "score": 0.9996\n                }\n            ]\n        },\n        {\n            "timestamp @ 7s": [\n                {\n                    "class": "airplane",\n                    "box": [\n                        377.9742,\n                        248.216,\n                        862.3831,\n                        396.4203\n                    ],\n                    "score": 0.9994\n                }\n            ]\n        }\n    ]\n}',
            isSample: !0
        }];
        function Rc(e) {
            return Tc.apply(this, arguments)
        }
        function Tc() {
            return (Tc = Object(o.a)(c.a.mark((function e(t) {
                var n, a;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(g.b, "/video/videoObject/").concat(t.size, "-").concat(t.name),
                            e.next = 3,
                            Object(g.y)(t, n);
                        case 3:
                            return e.next = 5,
                            Object(g.w)(n);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            Object(g.s)({
                                url: a
                            }, {
                                outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                videoAnalysis: {
                                    type: 2
                                }
                            }, "".concat(g.b, "/result/videoObject"));
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Vc, _c, Ac, Mc, Fc, zc, Pc, Jc, qc, Lc, Bc, Hc, Uc, Dc, Gc, Wc, Kc, Zc, $c, Xc, Qc, Yc, es, ts, ns, as, rs, cs, ss, os, ls, is, us, ms = function() {
            var e = Object(l.useRef)([])
              , t = Object(l.useRef)(null)
              , n = Object(l.useRef)(null)
              , r = Object(b.a)("videoObject").t
              , u = Object(l.useState)(Ic.length)
              , p = Object(s.a)(u, 2)
              , f = p[0]
              , j = p[1]
              , h = Object(l.useState)(Ic[0].url)
              , O = Object(s.a)(h, 2)
              , E = O[0]
              , x = O[1]
              , k = Object(l.useRef)(Ic[0].url)
              , y = Object(l.useState)(Ic[0].jobId)
              , N = Object(s.a)(y, 2)
              , C = N[0]
              , w = N[1]
              , S = Object(l.useState)(!1)
              , I = Object(s.a)(S, 2)
              , R = I[0]
              , T = I[1]
              , V = Object(l.useRef)(Ic[0].jobId)
              , _ = Object(l.useState)()
              , A = Object(s.a)(_, 2)
              , M = A[0]
              , F = A[1]
              , z = Object(l.useState)("")
              , P = Object(s.a)(z, 2)
              , J = P[0]
              , q = P[1];
            Object(l.useEffect)((function() {
                var t = e.current;
                return function() {
                    t.forEach((function(e) {
                        e.cancel("Exit page")
                    }
                    ))
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                var a, r;
                null === (a = t.current) || void 0 === a || a.pause(),
                null === (r = n.current) || void 0 === r || r.pause();
                var s = e.current;
                function l() {
                    return i.apply(this, arguments)
                }
                function i() {
                    return (i = Object(o.a)(c.a.mark((function e() {
                        var t, n, a, r, o, i, u, p, d, b;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = Ic.find((function(e) {
                                        return e.jobId === C
                                    }
                                    ))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!t.result) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", F(t.result));
                                case 5:
                                    return V.current === C && (F(void 0),
                                    q("")),
                                    n = wc.source(),
                                    s.push(n),
                                    e.prev = 8,
                                    e.next = 11,
                                    Object(g.u)(C, n.token);
                                case 11:
                                    if (r = e.sent,
                                    o = null === (a = r.getJobResponse) || void 0 === a ? void 0 : a.job,
                                    console.log(o),
                                    !o || 3 !== o.state) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.next = 17,
                                    Object(g.w)("".concat(g.b, "/result/videoObject/").concat(null === (i = o.outputs[0].smartContentResult) || void 0 === i || null === (u = i.videoAnalysis) || void 0 === u ? void 0 : u.detectionFileName));
                                case 17:
                                    return p = e.sent,
                                    e.next = 20,
                                    m.a.get(p);
                                case 20:
                                    (d = e.sent).data && (t.result = d.data,
                                    V.current === C && F(t.result)),
                                    e.next = 25;
                                    break;
                                case 24:
                                    r.errorResponse ? V.current === C && q(r.errorResponse.message) : o && (4 === o.state ? V.current === C && q("Job Failed") : [1, 2].includes(o.state) && V.current === C && setTimeout(l, g.k));
                                case 25:
                                    e.next = 31;
                                    break;
                                case 27:
                                    e.prev = 27,
                                    e.t0 = e.catch(8),
                                    setTimeout(l, g.k),
                                    console.log(e.t0);
                                case 31:
                                    return e.prev = 31,
                                    (b = s.indexOf(n)) > -1 && s.splice(b, 1),
                                    e.finish(31);
                                case 35:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[8, 27, 31, 35]])
                    }
                    )))).apply(this, arguments)
                }
                C && l()
            }
            ), [C]);
            var L = Object(l.useCallback)((function(e) {
                w(e.jobId),
                V.current = e.jobId,
                x(e.url),
                k.current = e.url,
                T(!!e.uploading)
            }
            ), [])
              , B = Object(l.useCallback)(function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r, s, o, l, i, u, m, p;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.A)(n);
                            case 5:
                                if (!(a = e.sent)) {
                                    e.next = 33;
                                    break
                                }
                                if (r = a.result,
                                s = URL.createObjectURL(new Blob([r])),
                                !(o = Ic.find((function(e) {
                                    return e.url === s
                                }
                                )))) {
                                    e.next = 13;
                                    break
                                }
                                return L(o),
                                e.abrupt("return");
                            case 13:
                                return l = {
                                    url: s,
                                    jobId: ""
                                },
                                Ic.push(l),
                                x(l.url),
                                k.current = l.url,
                                w(""),
                                F(void 0),
                                T(!0),
                                l.uploading = !0,
                                e.prev = 21,
                                e.next = 24,
                                Rc(n);
                            case 24:
                                m = e.sent,
                                (null === (i = m.createJobResponse) || void 0 === i || null === (u = i.job) || void 0 === u ? void 0 : u.id) ? (l.jobId = m.createJobResponse.job.id,
                                k.current === l.url && w(m.createJobResponse.job.id),
                                V.current = l.jobId) : q((null === (p = m.errorResponse) || void 0 === p ? void 0 : p.message) || "Upload Failed"),
                                T(!1),
                                l.uploading = !1,
                                e.next = 33;
                                break;
                            case 30:
                                e.prev = 30,
                                e.t0 = e.catch(21),
                                console.log(e.t0);
                            case 33:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[21, 30]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [L])
              , H = Object(l.useCallback)((function(e) {
                e && E !== e.url && L(e)
            }
            ), [E, L])
              , U = Object(l.useCallback)((function(e, t) {
                t.stopPropagation();
                var n = Ic[e];
                n.uploading && n.source && n.source.cancel("Cancel Upload"),
                E === n.url && L(Ic[e - 1]),
                Ic.splice(e, 1),
                j(f - 1)
            }
            ), [E, L, f]);
            return i.a.createElement("div", {
                className: "VideoObject"
            }, i.a.createElement("div", {
                className: "VideoObject-banner",
                style: {
                    backgroundImage: "url(".concat(Cc, ")")
                }
            }, i.a.createElement("div", {
                className: "VideoObject-banner-content"
            }, i.a.createElement("h2", {
                className: "VideoObject-banner-title"
            }, r(Oc || (Oc = Object(a.a)(["videoObject"])))), i.a.createElement("p", {
                className: "VideoObject-banner-description"
            }, r(Ec || (Ec = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "VideoObject-demo"
            }, i.a.createElement("div", {
                className: "VideoObject-main"
            }, i.a.createElement("div", {
                className: "VideoObject-preview"
            }, i.a.createElement("h2", {
                className: "VideoObject-main-title"
            }, r(xc || (xc = Object(a.a)(["inputVideo"])))), i.a.createElement("div", {
                className: "VideoObject-preview-wrap"
            }, i.a.createElement("video", {
                src: E,
                controls: !0,
                controlsList: "nodownload",
                ref: t
            }))), i.a.createElement("div", {
                className: "VideoObject-result"
            }, i.a.createElement("h2", {
                className: "VideoObject-main-title"
            }, r(kc || (kc = Object(a.a)(["detectionResult2"])))), i.a.createElement("div", {
                className: d()("VideoObject-result-wrap", {
                    loading: R || !M && !J
                })
            }, J && !M ? i.a.createElement("div", {
                className: "VideoObject-result-message"
            }, "".concat(r(yc || (yc = Object(a.a)(["tip.processedFailed"]))), " (").concat(J, ")")) : i.a.createElement("textarea", {
                className: "VideoObject-result-json",
                value: Object(g.t)(M),
                readOnly: !0
            }), i.a.createElement("div", {
                className: "VideoObject-result-cover"
            }, i.a.createElement(v.m, null), i.a.createElement("p", {
                className: "VideoObject-result-cover-status"
            }, r("tip.".concat(R ? "uploadingVideo" : "processingVideo"))))))), i.a.createElement("div", {
                className: "VideoObject-sample"
            }, i.a.createElement("ul", {
                className: "VideoObject-sample-list"
            }, Ic.map((function(e, t) {
                var n = e.isSample
                  , a = e.url;
                return i.a.createElement("li", {
                    key: a,
                    className: d()("VideoObject-sample-item", {
                        active: a === E
                    }),
                    onClick: function() {
                        return H(Ic[t])
                    }
                }, i.a.createElement("video", {
                    src: a
                }), n ? null : i.a.createElement("span", {
                    className: "VideoObject-sample-item-delete",
                    onClick: function(e) {
                        return U(t, e)
                    }
                }))
            }
            )), i.a.createElement("li", {
                className: d()("VideoObject-sample-item", "uploader")
            }, i.a.createElement(v.o, {
                onUpload: B,
                accept: "video/*"
            }))))))
        }, ps = (n(397),
        function() {
            var e = Object(b.a)("voiceCloning").t
              , t = Object(l.useState)("text")
              , n = Object(s.a)(t, 2)
              , r = n[0]
              , u = n[1]
              , m = Object(l.useState)([])
              , p = Object(s.a)(m, 2)
              , f = p[0]
              , j = p[1]
              , h = Object(l.useState)("default")
              , O = Object(s.a)(h, 2)
              , E = O[0]
              , x = O[1]
              , k = Object(l.useState)("")
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(2)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useState)(1)
              , V = Object(s.a)(T, 2)
              , _ = V[0]
              , A = V[1]
              , M = Object(l.useState)("")
              , F = Object(s.a)(M, 2)
              , z = F[0]
              , P = F[1]
              , J = Object(l.useState)("")
              , q = Object(s.a)(J, 2)
              , L = q[0]
              , B = q[1]
              , H = Object(l.useState)("")
              , U = Object(s.a)(H, 2)
              , D = U[0]
              , G = U[1]
              , W = Object(l.useState)("")
              , K = Object(s.a)(W, 2)
              , Z = K[0]
              , $ = K[1]
              , X = Object(l.useState)(void 0)
              , Q = Object(s.a)(X, 2)
              , Y = Q[0]
              , ee = Q[1]
              , te = Object(l.useState)(!1)
              , ne = Object(s.a)(te, 2)
              , ae = ne[0]
              , re = ne[1]
              , ce = Object(l.useState)(!1)
              , se = Object(s.a)(ce, 2)
              , oe = se[0]
              , le = se[1]
              , ie = Object(l.useState)(!1)
              , ue = Object(s.a)(ie, 2)
              , me = ue[0]
              , pe = ue[1]
              , de = function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                (a = e.sent) && (r = a.result,
                                $(r),
                                ee(n));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            function be() {
                return (be = Object(o.a)(c.a.mark((function e() {
                    var t, n, a;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                Object(g.v)(0, 100);
                            case 3:
                                (null === (a = e.sent) || void 0 === a || null === (t = a.body) || void 0 === t || null === (n = t.listModelsResponse) || void 0 === n ? void 0 : n.models) ? j(a.body.listModelsResponse.models) : console.log("error", a.body),
                                e.next = 10;
                                break;
                            case 7:
                                e.prev = 7,
                                e.t0 = e.catch(0),
                                console.log(e.t0);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )))).apply(this, arguments)
            }
            function ve(e, t) {
                return ge.apply(this, arguments)
            }
            function ge() {
                return (ge = Object(o.a)(c.a.mark((function e(t, n) {
                    var a, r, s, o;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Object(g.s)(t, {
                                    outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                    voiceCloning: {
                                        type: 1,
                                        modelName: n,
                                        language: I,
                                        speechRate: _
                                    }
                                }, "assets/speechConver");
                            case 2:
                                s = e.sent,
                                (null === (a = s.createJobResponse) || void 0 === a || null === (r = a.job) || void 0 === r ? void 0 : r.id) ? P(s.createJobResponse.job.id) : (alert("error:" + (null === s || void 0 === s || null === (o = s.errorResponse) || void 0 === o ? void 0 : o.message)),
                                re(!1),
                                le(!1),
                                pe(!1),
                                C(""),
                                x("default"),
                                $(""),
                                ee(void 0));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            Object(l.useEffect)((function() {
                !function() {
                    be.apply(this, arguments)
                }()
            }
            ), []),
            Object(l.useEffect)((function() {
                function e() {
                    return t.apply(this, arguments)
                }
                function t() {
                    return (t = Object(o.a)(c.a.mark((function t() {
                        var n, a, r, s, o, l, i;
                        return c.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return G(""),
                                    B(""),
                                    t.prev = 2,
                                    t.next = 5,
                                    Object(g.u)(z);
                                case 5:
                                    a = t.sent,
                                    (r = null === (n = a.getJobResponse) || void 0 === n ? void 0 : n.job) && 3 === r.state ? (console.log(r),
                                    l = null === (s = r.outputs[0].smartContentResult) || void 0 === s || null === (o = s.voiceCloning) || void 0 === o ? void 0 : o.voiceName,
                                    i = "https://smartcontent-source-1257411467.cos.accelerate.myqcloud.com/assets/speechConver/".concat(l),
                                    G(i),
                                    re(!1),
                                    pe(!1),
                                    C(""),
                                    x("default"),
                                    $(""),
                                    ee(void 0)) : a.errorResponse ? (re(!1),
                                    pe(!1),
                                    B(a.errorResponse.message)) : r && (4 === r.state ? (re(!1),
                                    pe(!1),
                                    B("Job Failed")) : [1, 2].includes(r.state) && setTimeout(e, 500)),
                                    t.next = 14;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(2),
                                    setTimeout(e, 500),
                                    console.log(t.t0);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 10]])
                    }
                    )))).apply(this, arguments)
                }
                z && e()
            }
            ), [z]);
            var fe = function() {
                var t = Object(o.a)(c.a.mark((function t() {
                    var n, s;
                    return c.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if ("" !== E) {
                                    t.next = 3;
                                    break
                                }
                                return alert(e(Vc || (Vc = Object(a.a)(["pleaseSelectModel"])))),
                                t.abrupt("return", !1);
                            case 3:
                                if ("text" !== r) {
                                    t.next = 12;
                                    break
                                }
                                if ("" !== N.trim()) {
                                    t.next = 7;
                                    break
                                }
                                return alert(e(_c || (_c = Object(a.a)(["pleaseInputText"])))),
                                t.abrupt("return", !1);
                            case 7:
                                re(!0),
                                pe(!0),
                                ve({
                                    sourceData: N
                                }, E),
                                t.next = 28;
                                break;
                            case 12:
                                if ("audio" !== r) {
                                    t.next = 28;
                                    break
                                }
                                if ("" !== Z) {
                                    t.next = 16;
                                    break
                                }
                                return alert(e(Ac || (Ac = Object(a.a)(["pleaseInputAudio"])))),
                                t.abrupt("return", !1);
                            case 16:
                                if (!Y) {
                                    t.next = 28;
                                    break
                                }
                                return re(!0),
                                le(!0),
                                n = "".concat(g.b, "/speechconver/").concat(null === Y || void 0 === Y ? void 0 : Y.size, "-").concat(null === Y || void 0 === Y ? void 0 : Y.name),
                                t.next = 22,
                                Object(g.y)(Y, n);
                            case 22:
                                return t.next = 24,
                                Object(g.w)(n);
                            case 24:
                                s = t.sent,
                                le(!1),
                                pe(!0),
                                ve({
                                    url: s
                                }, E);
                            case 28:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            return i.a.createElement("div", {
                className: "VoiceCloning-generate"
            }, i.a.createElement("div", {
                className: "VoiceCloning-main"
            }, i.a.createElement("div", {
                className: "VoiceCloning-preview"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem-left"
            }, i.a.createElement("input", {
                type: "radio",
                value: "text",
                checked: "text" === r,
                onChange: function(e) {
                    u(e.target.value)
                },
                className: "VoiceCloning-formitem-radio"
            }), e(Mc || (Mc = Object(a.a)(["inputText"]))), "\uff1a"), i.a.createElement("div", {
                className: "VoiceCloning-formitem-right"
            }, i.a.createElement("textarea", {
                value: N,
                onChange: function(e) {
                    C(e.target.value)
                },
                className: "VoiceCloning-formitem-textarea"
            }), i.a.createElement("div", {
                className: "upload-tip"
            }, e(Fc || (Fc = Object(a.a)(["textTip"])))))), "text" === r && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                className: "VoiceCloning-formitem"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem-left"
            }, e(zc || (zc = Object(a.a)(["outputLanguage"]))), "\uff1a"), i.a.createElement("div", {
                className: "VoiceCloning-formitem-right"
            }, i.a.createElement("input", {
                type: "radio",
                value: 2,
                checked: 2 === I,
                onChange: function(e) {
                    R(parseInt(e.target.value))
                },
                className: "VoiceCloning-formitem-radio"
            }), e(Pc || (Pc = Object(a.a)(["chinese"]))), "\xa0\xa0", i.a.createElement("input", {
                type: "radio",
                value: 1,
                checked: 1 === I,
                onChange: function(e) {
                    R(parseInt(e.target.value))
                },
                className: "VoiceCloning-formitem-radio"
            }), e(Jc || (Jc = Object(a.a)(["english"]))))), i.a.createElement("div", {
                className: "VoiceCloning-formitem"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem-left"
            }, e(qc || (qc = Object(a.a)(["outputSpeed"]))), "\uff1a"), i.a.createElement("div", {
                className: "VoiceCloning-formitem-right"
            }, i.a.createElement("input", {
                type: "range",
                max: 2,
                min: 0,
                step: .1,
                value: _,
                onChange: function(e) {
                    A(parseFloat(e.target.value))
                }
            }), i.a.createElement("span", null, _)))), i.a.createElement("div", {
                className: "VoiceCloning-formitem"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem-left"
            }, i.a.createElement("input", {
                type: "radio",
                value: "audio",
                checked: "audio" === r,
                onChange: function(e) {
                    u(e.target.value)
                },
                className: "VoiceCloning-formitem-radio"
            }), e(Lc || (Lc = Object(a.a)(["inputAudio"]))), "\uff1a"), i.a.createElement("div", {
                className: "VoiceCloning-formitem-upload"
            }, !Z && i.a.createElement(v.o, {
                onUpload: de,
                accept: "audio/wav, audio/mp3"
            }), Z && i.a.createElement("div", {
                className: "VoiceCloning-formitem-preview"
            }, i.a.createElement("audio", {
                src: Z,
                controls: !0,
                controlsList: "nodownload"
            }), i.a.createElement("span", {
                className: "VoiceCloning-formitem-del",
                onClick: function() {
                    $(""),
                    ee(void 0)
                }
            }, e(Bc || (Bc = Object(a.a)(["delete"]))))), i.a.createElement("div", {
                className: "upload-tip"
            }, e(Hc || (Hc = Object(a.a)(["inputTip"])))))), i.a.createElement("div", {
                className: "VoiceCloning-formitem"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem-left"
            }, e(Uc || (Uc = Object(a.a)(["selectModel"]))), "\uff1a"), i.a.createElement("select", {
                id: "select",
                value: E,
                onChange: function(e) {
                    x(e.target.value)
                },
                className: "VoiceCloning-formitem-select"
            }, i.a.createElement("option", {
                value: "default"
            }, "default"), f.map((function(e) {
                return i.a.createElement("option", {
                    key: e.name,
                    value: e.name
                }, e.name)
            }
            )))), i.a.createElement("div", {
                className: "VoiceCloning-button"
            }, i.a.createElement(v.d, {
                loading: ae,
                onClick: fe
            }, e(Dc || (Dc = Object(a.a)(["generateAudio"])))))), i.a.createElement("div", {
                className: "VoiceCloning-result"
            }, i.a.createElement("h2", {
                className: "VoiceCloning-main-title"
            }, e(Gc || (Gc = Object(a.a)(["displayResults"])))), i.a.createElement("div", {
                className: d()("VoiceCloning-result-wrap", {
                    loading: ae
                })
            }, L && !D ? i.a.createElement("div", {
                className: "VoiceCloning-result-message"
            }, "".concat(e(Wc || (Wc = Object(a.a)(["tip.processedFailed"]))), " (").concat(L, ")")) : i.a.createElement("audio", {
                src: D,
                controls: !0,
                controlsList: "nodownload"
            }), i.a.createElement("div", {
                className: "VoiceCloning-result-cover"
            }, i.a.createElement(v.m, {
                size: "20px"
            }), i.a.createElement("p", {
                className: "VoiceCloning-result-cover-status"
            }, me && e("tip.processingFile"), oe && e("tip.uploadingFile")))))))
        }
        ), ds = function() {
            var e = Object(b.a)("voiceCloning").t
              , t = Object(l.useState)("")
              , n = Object(s.a)(t, 2)
              , r = n[0]
              , u = n[1]
              , m = Object(l.useState)(!1)
              , p = Object(s.a)(m, 2)
              , f = p[0]
              , j = p[1]
              , h = Object(l.useState)("30")
              , O = Object(s.a)(h, 2)
              , E = O[0]
              , x = O[1]
              , k = Object(l.useState)("")
              , y = Object(s.a)(k, 2)
              , N = y[0]
              , C = y[1]
              , w = Object(l.useState)(void 0)
              , S = Object(s.a)(w, 2)
              , I = S[0]
              , R = S[1]
              , T = Object(l.useState)(!1)
              , V = Object(s.a)(T, 2)
              , _ = V[0]
              , A = V[1]
              , M = Object(l.useState)(!1)
              , F = Object(s.a)(M, 2)
              , z = F[0]
              , P = F[1]
              , J = Object(l.useState)("")
              , q = Object(s.a)(J, 2)
              , L = q[0]
              , B = q[1]
              , H = Object(l.useState)("")
              , U = Object(s.a)(H, 2)
              , D = U[0]
              , G = U[1]
              , W = Object(l.useState)("")
              , K = Object(s.a)(W, 2)
              , Z = K[0]
              , $ = K[1]
              , X = function() {
                var t = Object(o.a)(c.a.mark((function t() {
                    var n, s;
                    return c.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (/^[a-zA-Z0-9_]+$/.test(r)) {
                                    t.next = 4;
                                    break
                                }
                                return alert(e(Kc || (Kc = Object(a.a)(["incorrectName"])))),
                                t.abrupt("return", !1);
                            case 4:
                                if (parseInt(E) >= 0 && parseInt(E) <= 50) {
                                    t.next = 7;
                                    break
                                }
                                return alert(e(Zc || (Zc = Object(a.a)(["incorrectTimes"])))),
                                t.abrupt("return", !1);
                            case 7:
                                if ("" !== N) {
                                    t.next = 10;
                                    break
                                }
                                return alert(e($c || ($c = Object(a.a)(["incorrectData"])))),
                                t.abrupt("return", !1);
                            case 10:
                                if (!I) {
                                    t.next = 22;
                                    break
                                }
                                return j(!0),
                                A(!0),
                                n = "".concat(g.b, "/speechconver/").concat(null === I || void 0 === I ? void 0 : I.size, "-").concat(null === I || void 0 === I ? void 0 : I.name),
                                t.next = 16,
                                Object(g.y)(I, n);
                            case 16:
                                return t.next = 18,
                                Object(g.w)(n);
                            case 18:
                                s = t.sent,
                                A(!1),
                                P(!0),
                                Q({
                                    url: s
                                });
                            case 22:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            function Q(e) {
                return Y.apply(this, arguments)
            }
            function Y() {
                return (Y = Object(o.a)(c.a.mark((function t(n) {
                    var s, o, l;
                    return c.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Object(g.s)(n, {
                                    outputPrefix: "".concat(Math.random().toString(36).slice(-6)),
                                    voiceCloning: {
                                        type: 2,
                                        totalEpoch: E,
                                        modelName: r
                                    }
                                }, "assets/speechConver");
                            case 2:
                                l = t.sent,
                                (null === (s = l.createJobResponse) || void 0 === s || null === (o = s.job) || void 0 === o ? void 0 : o.id) ? (B(l.createJobResponse.job.id),
                                localStorage.setItem("trainingModel", JSON.stringify(Object(Nt.a)({
                                    id: l.createJobResponse.job.id,
                                    trainingCount: E,
                                    modelName: r
                                }, n)))) : l.errorResponse && (P(!1),
                                j(!1),
                                alert(e(ss || (ss = Object(a.a)(["nameExists"])))));
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))).apply(this, arguments)
            }
            Object(l.useEffect)((function() {
                if (localStorage.getItem("trainingModel")) {
                    var e = JSON.parse(localStorage.getItem("trainingModel"));
                    B(e.id),
                    u(e.modelName),
                    x(e.trainingCount),
                    C(e.url),
                    j(!0),
                    P(!0)
                }
            }
            ), []),
            Object(l.useEffect)((function() {
                function e() {
                    return t.apply(this, arguments)
                }
                function t() {
                    return (t = Object(o.a)(c.a.mark((function t() {
                        var n, a, r, s, o, l;
                        return c.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return G(""),
                                    $(""),
                                    t.prev = 2,
                                    t.next = 5,
                                    Object(g.u)(L);
                                case 5:
                                    a = t.sent,
                                    (r = null === (n = a.getJobResponse) || void 0 === n ? void 0 : n.job) && 3 === r.state ? (l = null === (s = r.outputs[0].smartContentResult) || void 0 === s || null === (o = s.voiceCloning) || void 0 === o ? void 0 : o.modelName) && (G(l),
                                    j(!1),
                                    P(!1),
                                    x(""),
                                    u(""),
                                    C(""),
                                    R(void 0),
                                    localStorage.setItem("trainingModel", "")) : a.errorResponse ? (j(!1),
                                    P(!1),
                                    $(a.errorResponse.message)) : r && (4 === r.state ? (j(!1),
                                    P(!1),
                                    $("Job Failed")) : [1, 2].includes(r.state) && setTimeout(e, 500)),
                                    t.next = 14;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(2),
                                    setTimeout(e, 500),
                                    console.log(t.t0);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 10]])
                    }
                    )))).apply(this, arguments)
                }
                L && e()
            }
            ), [L]);
            var ee = function() {
                var e = Object(o.a)(c.a.mark((function e(t) {
                    var n, a, r;
                    return c.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t[0],
                                e.next = 5,
                                Object(g.z)(n);
                            case 5:
                                (a = e.sent) && (r = a.result,
                                C(r),
                                R(n));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return i.a.createElement("div", {
                className: "VoiceCloning-tranining"
            }, i.a.createElement("div", {
                className: "VoiceCloning-main"
            }, i.a.createElement("div", {
                className: "VoiceCloning-preview"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem-left"
            }, e(Xc || (Xc = Object(a.a)(["modelName"]))), "\uff1a"), i.a.createElement("input", {
                type: "text",
                value: r,
                onChange: function(e) {
                    u(e.target.value)
                },
                className: "VoiceCloning-formitem-text",
                placeholder: e(Qc || (Qc = Object(a.a)(["modelNameFormat"])))
            })), i.a.createElement("div", {
                className: "VoiceCloning-formitem"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem-left"
            }, e(Yc || (Yc = Object(a.a)(["trainingTimes"]))), "\uff1a"), i.a.createElement("input", {
                type: "number",
                value: E,
                onChange: function(e) {
                    x(e.target.value)
                },
                className: "VoiceCloning-formitem-text",
                placeholder: "0-50"
            })), i.a.createElement("div", {
                className: "VoiceCloning-formitem"
            }, i.a.createElement("div", {
                className: "VoiceCloning-formitem-left"
            }, e(es || (es = Object(a.a)(["trainingData"]))), "\uff1a"), i.a.createElement("div", {
                className: "VoiceCloning-formitem-upload"
            }, !N && i.a.createElement(v.o, {
                onUpload: ee,
                accept: "audio/wav, audio/mp3"
            }), N && i.a.createElement("div", {
                className: "VoiceCloning-formitem-preview"
            }, i.a.createElement("audio", {
                src: N,
                controls: !0,
                controlsList: "nodownload"
            }), i.a.createElement("span", {
                className: "VoiceCloning-formitem-del",
                onClick: function() {
                    C(""),
                    R(void 0)
                }
            }, e(ts || (ts = Object(a.a)(["delete"]))))), i.a.createElement("div", {
                className: "upload-tip"
            }, e(ns || (ns = Object(a.a)(["trainingTip"])))))), i.a.createElement("div", {
                className: "VoiceCloning-button"
            }, i.a.createElement(v.d, {
                loading: f,
                onClick: X
            }, e(as || (as = Object(a.a)(["trainModel"])))))), i.a.createElement("div", {
                className: "VoiceCloning-result"
            }, i.a.createElement("h2", {
                className: "VoiceCloning-main-title"
            }, e(rs || (rs = Object(a.a)(["processDescription"])))), i.a.createElement("div", {
                className: d()("VoiceCloning-result-wrap", {
                    loading: f
                })
            }, Z && !D ? i.a.createElement("div", {
                className: "VoiceCloning-result-message"
            }, "".concat(e(cs || (cs = Object(a.a)(["tip.processedFailed"]))), " (").concat(Z, ")")) : D && i.a.createElement("p", null, D, " ", e("tip.modelCompleted")), i.a.createElement("div", {
                className: "VoiceCloning-result-cover"
            }, i.a.createElement(v.m, {
                size: "20px"
            }), i.a.createElement("p", {
                className: "VoiceCloning-result-cover-status"
            }, z && e("tip.progressModel"), _ && e("tip.uploadingData")))))))
        }, bs = "".concat(g.d, "/assets/image/back3.jpg"), vs = function() {
            var e = Object(b.a)("voiceCloning").t
              , t = Object(l.useState)("audio")
              , n = Object(s.a)(t, 2)
              , r = n[0]
              , c = n[1]
              , o = function(e) {
                c(e)
            };
            return i.a.createElement("div", {
                className: "VoiceCloning"
            }, i.a.createElement("div", {
                className: "VoiceCloning-banner",
                style: {
                    backgroundImage: "url(".concat(bs, ")")
                }
            }, i.a.createElement("div", {
                className: "VoiceCloning-banner-content"
            }, i.a.createElement("h2", {
                className: "VoiceCloning-banner-title"
            }, e(os || (os = Object(a.a)(["voiceCloning"])))), i.a.createElement("p", {
                className: "VoiceCloning-banner-description"
            }, e(ls || (ls = Object(a.a)(["intro"])))))), i.a.createElement("div", {
                className: "VoiceCloning-demo"
            }, i.a.createElement("div", {
                className: "VoiceCloning-demo-tab"
            }, i.a.createElement("span", {
                className: "audio" === r ? "active" : "",
                onClick: function() {
                    return o("audio")
                }
            }, e(is || (is = Object(a.a)(["generateAudio"])))), i.a.createElement("span", null, " / "), i.a.createElement("span", {
                className: "model" === r ? "active" : "",
                onClick: function() {
                    return o("model")
                }
            }, e(us || (us = Object(a.a)(["trainModel"]))))), "audio" === r && i.a.createElement(ps, null), "model" === r && i.a.createElement(ds, null)))
        };
        n(398),
        "".concat(g.d, "/assets/image/back3.jpg")
    },
    167: function(e, t, n) {
        "use strict";
        (function(e) {
            var a, r, c, s = n(3), o = n(2), l = n.n(o), i = n(7), u = n(4), m = n(0), p = n.n(m), d = n(177), b = n(15), v = n(5), g = n.n(v), f = (n(381),
            n(6)), j = n(1), h = n(47), O = "".concat(j.d, "/assets/image/auth_banner.jpg");
            t.a = function() {
                var t = Object(d.a)().t
                  , n = Object(h.a)()
                  , o = n.isAuthenticated
                  , v = n.setIsAuthenticated
                  , E = Object(b.g)()
                  , x = Object(b.h)()
                  , k = Object(m.useState)(!1)
                  , y = Object(u.a)(k, 2)
                  , N = y[0]
                  , C = y[1]
                  , w = Object(m.useState)(!1)
                  , S = Object(u.a)(w, 2)
                  , I = S[0]
                  , R = S[1]
                  , T = Object(m.useState)("")
                  , V = Object(u.a)(T, 2)
                  , _ = V[0]
                  , A = V[1]
                  , M = Object(m.useCallback)((function(e) {
                    A(e),
                    C(!1)
                }
                ), [])
                  , F = Object(m.useCallback)(Object(i.a)(l.a.mark((function t() {
                    var n, a, r, c;
                    return l.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!I) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.prev = 2,
                                R(!0),
                                t.next = 6,
                                Object(j.r)().post(j.n, {
                                    access_code: j.o,
                                    action: "Login",
                                    product: "SmartContent_Demo",
                                    token: _.trim()
                                });
                            case 6:
                                if (n = t.sent.data.jwt) {
                                    t.next = 9;
                                    break
                                }
                                throw new Error("Login failed");
                            case 9:
                                return localStorage.setItem("jwt", n),
                                t.next = 12,
                                Object(j.r)().post(j.n, {
                                    access_code: j.o,
                                    action: "Validate",
                                    product: "SmartContent_Demo",
                                    jwt: localStorage.getItem("jwt")
                                });
                            case 12:
                                if (a = t.sent.data.role) {
                                    t.next = 15;
                                    break
                                }
                                throw new Error("Validate failed");
                            case 15:
                                return localStorage.setItem("userId", a),
                                t.next = 18,
                                Object(j.r)().post(j.e, {
                                    userId: a
                                });
                            case 18:
                                r = t.sent.data,
                                localStorage.setItem("config", r),
                                c = JSON.parse(e.from(r || "", "base64").toString("ascii")),
                                v(!0),
                                c.home ? E.push(c.home) : E.push(x.state.from || "/"),
                                t.next = 29;
                                break;
                            case 25:
                                t.prev = 25,
                                t.t0 = t.catch(2),
                                C(!0),
                                R(!1);
                            case 29:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[2, 25]])
                }
                ))), [I, _, v, E, x.state.from])
                  , z = Object(m.useCallback)((function(e) {
                    switch (e.keyCode) {
                    case 13:
                        F()
                    }
                }
                ), [F]);
                return o ? p.a.createElement(b.a, {
                    to: "/"
                }) : p.a.createElement("div", {
                    className: "Auth",
                    style: {
                        backgroundImage: "url(".concat(O, ")")
                    }
                }, p.a.createElement("div", {
                    className: "Auth-content"
                }, p.a.createElement("div", {
                    className: "Auth-form"
                }, p.a.createElement(f.h, {
                    placeholder: t(a || (a = Object(s.a)(["tip.inputToken"]))),
                    value: _,
                    onChange: function(e) {
                        return M(e.target.value)
                    },
                    onKeyDown: z
                }), p.a.createElement(f.d, {
                    loading: I,
                    onClick: F
                }, t(r || (r = Object(s.a)(["btn.enter"]))))), p.a.createElement("div", {
                    className: g()("Auth-message", {
                        visible: N
                    })
                }, t(c || (c = Object(s.a)(["tip.invalidToken"]))))))
            }
        }
        ).call(this, n(17).Buffer)
    },
    178: function(e, t, n) {
        e.exports = n(404)
    },
    184: function(e, t, n) {},
    185: function(e, t, n) {},
    186: function(e, t, n) {},
    187: function(e, t, n) {},
    188: function(e, t, n) {},
    192: function(e, t, n) {},
    213: function(e, t) {},
    215: function(e, t) {},
    226: function(e, t) {},
    228: function(e, t) {},
    255: function(e, t) {},
    257: function(e, t) {},
    258: function(e, t) {},
    263: function(e, t) {},
    265: function(e, t) {},
    271: function(e, t) {},
    273: function(e, t) {},
    292: function(e, t) {},
    304: function(e, t) {},
    307: function(e, t) {},
    357: function(e, t, n) {},
    358: function(e, t, n) {},
    359: function(e, t, n) {},
    360: function(e, t, n) {},
    361: function(e, t, n) {},
    362: function(e, t, n) {},
    363: function(e, t, n) {},
    364: function(e, t, n) {},
    365: function(e, t, n) {},
    366: function(e, t, n) {},
    367: function(e, t, n) {},
    368: function(e, t, n) {},
    369: function(e, t, n) {},
    370: function(e, t, n) {},
    371: function(e, t, n) {},
    372: function(e, t, n) {},
    373: function(e, t, n) {},
    374: function(e, t, n) {},
    375: function(e, t, n) {},
    376: function(e, t, n) {},
    377: function(e, t, n) {},
    378: function(e, t, n) {},
    379: function(e, t, n) {},
    380: function(e, t, n) {},
    381: function(e, t, n) {},
    382: function(e, t, n) {},
    383: function(e, t, n) {},
    384: function(e, t, n) {},
    385: function(e, t, n) {},
    386: function(e, t, n) {},
    387: function(e, t, n) {},
    388: function(e, t, n) {},
    389: function(e, t, n) {},
    390: function(e, t, n) {},
    391: function(e, t, n) {},
    392: function(e, t, n) {},
    393: function(e, t, n) {},
    394: function(e, t, n) {},
    395: function(e, t, n) {},
    396: function(e, t, n) {},
    397: function(e, t, n) {},
    398: function(e, t, n) {},
    399: function(e, t, n) {},
    400: function(e, t, n) {},
    401: function(e, t, n) {},
    402: function(e, t, n) {},
    403: function(e, t, n) {},
    404: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
          , r = n.n(a)
          , c = n(168)
          , s = n.n(c)
          , o = n(2)
          , l = n.n(o)
          , i = n(7)
          , u = n(4)
          , m = n(15)
          , p = n(408)
          , d = n(407)
          , b = (n(184),
        n(6))
          , v = n(14)
          , g = function() {
            var e = Object(m.h)().pathname
              , t = Object(d.a)(["uuid"])
              , n = Object(u.a)(t, 2)
              , c = n[0]
              , s = n[1]
              , o = Object(a.useRef)(c.uuid);
            return Object(a.useEffect)((function() {
                if (window.scrollTo(0, 0),
                !o.current) {
                    var t = Object(p.a)();
                    s("uuid", t, {
                        path: "/",
                        sameSite: "none",
                        secure: !0
                    }),
                    o.current = t
                }
                function n() {
                    return (n = Object(i.a)(l.a.mark((function t() {
                        var n;
                        return l.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = {
                                        token: "gv#ffq09Jvn",
                                        accessSession: o.current,
                                        pageId: e,
                                        host: "smartContent"
                                    },
                                    t.prev = 1,
                                    t.next = 4,
                                    fetch("https://service-fdxdzlbf-1251316161.bj.apigw.tencentcs.com/release/MmediaAccessReport", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(n)
                                    });
                                case 4:
                                    t.next = 9;
                                    break;
                                case 6:
                                    t.prev = 6,
                                    t.t0 = t.catch(1),
                                    console.log(t.t0);
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 6]])
                    }
                    )))).apply(this, arguments)
                }
                (function() {
                    n.apply(this, arguments)
                }
                )()
            }
            ), [e, s]),
            r.a.createElement(r.a.Fragment, null, r.a.createElement(b.g, null), r.a.createElement("div", {
                className: "Layout"
            }, r.a.createElement(m.d, null, r.a.createElement(b.c, {
                path: "/",
                exact: !0
            }, r.a.createElement(v.f, null)), r.a.createElement(b.c, {
                path: "/imageCaption",
                exact: !0
            }, r.a.createElement(v.g, null)), r.a.createElement(b.c, {
                path: "/videoCaption",
                exact: !0
            }, r.a.createElement(v.x, null)), r.a.createElement(b.c, {
                path: "/wzry",
                exact: !0
            }, r.a.createElement(v.E, null)), r.a.createElement(b.c, {
                path: "/lyrics",
                exact: !0
            }, r.a.createElement(v.n, null)), r.a.createElement(b.c, {
                path: "/videoMusic",
                exact: !0
            }, r.a.createElement(v.A, null)), r.a.createElement(b.c, {
                path: "/musicVideo",
                exact: !0
            }, r.a.createElement(v.q, null)), r.a.createElement(b.c, {
                path: "/football",
                exact: !0
            }, r.a.createElement(v.c, null)), r.a.createElement(b.c, {
                path: "/genreTransform",
                exact: !0
            }, r.a.createElement(v.e, null)), r.a.createElement(b.c, {
                path: "/instrumentTransform",
                exact: !0
            }, r.a.createElement(v.l, null)), r.a.createElement(b.c, {
                path: "/seperateTransform",
                exact: !0
            }, r.a.createElement(v.t, null)), r.a.createElement(b.c, {
                path: "/musicBeat",
                exact: !0
            }, r.a.createElement(v.o, null)), r.a.createElement(b.c, {
                path: "/musicHighlight",
                exact: !0
            }, r.a.createElement(v.p, null)), r.a.createElement(b.c, {
                path: "/audioTagger",
                exact: !0
            }, r.a.createElement(v.a, null)), r.a.createElement(b.c, {
                path: "/gva",
                exact: !0
            }, r.a.createElement(v.d, null)), r.a.createElement(b.c, {
                path: "/videoCrop",
                exact: !0
            }, r.a.createElement(v.z, null)), r.a.createElement(b.c, {
                path: "/smartCover",
                exact: !0
            }, r.a.createElement(v.v, null)), r.a.createElement(b.c, {
                path: "/ocr",
                exact: !0
            }, r.a.createElement(v.r, null)), r.a.createElement(b.c, {
                path: "/removeWatermark",
                exact: !0
            }, r.a.createElement(v.s, null)), r.a.createElement(b.c, {
                path: "/smartVlog",
                exact: !0
            }, r.a.createElement(v.w, null)), r.a.createElement(b.c, {
                path: "/imageEnhancement",
                exact: !0
            }, r.a.createElement(v.i, null)), r.a.createElement(b.c, {
                path: "/imageComposition",
                exact: !0
            }, r.a.createElement(v.h, null)), r.a.createElement(b.c, {
                path: "/imageScene",
                exact: !0
            }, r.a.createElement(v.k, null)), r.a.createElement(b.c, {
                path: "/imageObject",
                exact: !0
            }, r.a.createElement(v.j, null)), r.a.createElement(b.c, {
                path: "/videoComposition",
                exact: !0
            }, r.a.createElement(v.y, null)), r.a.createElement(b.c, {
                path: "/singingConversion",
                exact: !0
            }, r.a.createElement(v.u, null)), r.a.createElement(b.c, {
                path: "/voiceCloning",
                exact: !0
            }, r.a.createElement(v.D, null)), r.a.createElement(b.c, {
                path: "/videoScene",
                exact: !0
            }, r.a.createElement(v.C, null)), r.a.createElement(b.c, {
                path: "/videoObject",
                exact: !0
            }, r.a.createElement(v.B, null)), r.a.createElement(m.b, {
                path: "/auth",
                exact: !0
            }, r.a.createElement(v.b, null))), r.a.createElement(b.f, null)))
        }
          , f = n(12);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        n(403);
        var j = n(176)
          , h = n(57)
          , O = n(175);
        j.a.use(O.a).use(h.e).init({
            resources: {
                en: {
                    common: {
                        lab: "Tencent Media Lab",
                        exp: "Tencent Media Experience",
                        smartContent: "Tencent ConTech Platform",
                        smartWriter: "Smart Writer",
                        smartProducer: "Smart Producer",
                        smartMusician: "Smart Musician",
                        samples: "Samples",
                        results: "Results",
                        keywords: "Keywords",
                        articles: "Articles",
                        chinese: "Chinese",
                        english: "English",
                        imageDir: "Image Description",
                        imageDescription: "E-commerce Image Description",
                        imageCaption: "General Image Description",
                        imageComposition: "Image Composition",
                        imageScene: "Image Scene Recognition",
                        imageObject: "Image Object Detection",
                        videoComposition: "Video Composition",
                        videoDir: "Video Description",
                        videoDescription: "E-commerce Video Description",
                        videoCaption: "General Video Description",
                        instrumentTransform: "Instrument Transform",
                        wzry: "Game barrage commentary",
                        musicDir: "Music Description",
                        lyrics: "Lyrics Production",
                        videoMusic: "Video BGM Generation",
                        musicVideo: "Music Video Generation",
                        football: "Sport Highlights",
                        gva: "Game Video Analysis",
                        videoCrop: "Video Crop",
                        BeatDir: "Music Highlight",
                        musicBeat: "Beat Recognition",
                        musicHighlight: "Highlight Recognition",
                        genreTransform: "Genre Transform",
                        instrumentTransfor: "Instrument Transform",
                        seperateTransform: "Music Seperate",
                        originalVideo: "Original Video",
                        originalImg: "Original Image",
                        originalAudio: "Original Audio",
                        originalMusic: "Original Music",
                        originalFile: "Original File",
                        silentVideo: "Silent Video",
                        generatedVideo: "Video With Generated Music",
                        processedVideo: "Processed Video",
                        processedAudio: "Processed Audio",
                        processedMusic: "Processed Music",
                        processedFile: "Processed File",
                        highlightStart: "Start time",
                        highlightEnd: "End time",
                        highlightScore: "Score",
                        smartCover: "Smart Cover",
                        coverResults: "Cover Results",
                        displayResults: "Display Results",
                        generateAudio: "Generate Audio",
                        trainModel: "Train Model",
                        removeWatermark: "Watermarks Detection",
                        removedWatermarks: "Watermarks Detected",
                        watermarkUnsupported: "Watermark is not supported, please contact smartmedia@tencent.com to update",
                        ocr: "Optical Character Recognition",
                        OCRResult: "Detection Result",
                        smartVlog: "Smart vlog",
                        originalPicture: "Original Picture",
                        inputImage: "Input Image",
                        inputVideo: "Input Video",
                        recognitionResult: "Recognition Result",
                        audioTagger: "Audio Tagger",
                        audioTaggerResult: "Audio Tagger Result",
                        game_ad_genre: "Game Ad Genre",
                        game_ad_mood: "Game Ad Mood",
                        game_ad_strength: "Game Ad Strength",
                        processedPicture: "Processed Picture",
                        imageEnhancement: "Image Enhancement",
                        singingConversion: "Singing Timbre Conversion",
                        speechConversion: "Speech Tone Conversion",
                        voiceCloning: "Voice Cloning",
                        voiceCloning2: "Voice Cloning(real-time)",
                        music: "Music",
                        file: "File",
                        detectionResult1: "Detection Result (Visualization)",
                        detectionResult2: "Detection Result (Json)",
                        videoScene: "Video Scene Detection",
                        videoObject: "Video Object Detection",
                        processDescription: "Process Description",
                        btn: {
                            upload: "Upload",
                            enter: "Enter"
                        },
                        tip: {
                            inputKeyword: "Please input sentence (almost twenty characters)",
                            inputURL: "Please input your image URL",
                            uploadingVideo: "Uploading video",
                            processingVideo: "Processing video",
                            uploadingAudio: "Uploading audio",
                            processingAudio: "Processing audio",
                            uploadingMusic: "Uploading music",
                            processingMusic: "Processing music",
                            uploadingPicture: "Uploading picture",
                            processingPicture: "Processing picture",
                            uploadingFile: "Uploading file",
                            uploadingData: "Uploading data",
                            processingFile: "Processing file",
                            progressModel: "Model Training in Progress",
                            inputToken: "Please input access token",
                            invalidToken: "Invalid token. Please make sure the token is correct.",
                            invalidImageURL: "Invalid image URL",
                            keywordsFailed: "Cannot generate keywords",
                            articleFailed: "Cannot generate articles",
                            videoTimeLimit: "Video time limit: 2min",
                            videoSizeLimit: "Video size limit: 2GB",
                            videoSizeLimitDialog: "Due to browser limitations, please upload files smaller than 2GB.",
                            videoFailed: "Cannot process video",
                            audioFailed: "Cannot process audio",
                            pictureFailed: "Cannot process picture",
                            processedFailed: "Processed Failed",
                            emptyResult: "Empty Result",
                            modelCompleted: "Model Training Completed"
                        },
                        cover: {
                            cover1: "Cover 1",
                            cover2: "Cover 2",
                            cover3: "Cover 3"
                        },
                        wzryResult: {
                            time: "Time",
                            tag: "Tag",
                            caption: "Caption",
                            barrage: "Barrage"
                        },
                        lyricsPannel: {
                            head: "Sentence",
                            pattern: "Rhyme Pattern",
                            lyric: "Normal Lyric",
                            rap: "Rap Lyric"
                        },
                        footballType: {
                            original: "Original",
                            fast: "Normal",
                            slow: "Slow",
                            corner: "Corner",
                            free: "Free"
                        },
                        genre: {
                            original: "Original",
                            chinese: "Chinese",
                            pop: "Pop",
                            rnb: "R&B",
                            rock: "Rock",
                            dj: "DJ",
                            futurebass: "Future Bass",
                            opera: "Opera",
                            ballad: "Ballad",
                            light: "Light"
                        },
                        instrument: {
                            original: "Original",
                            Marimba: "Marimba",
                            Dulcimer: "Dulcimer",
                            Harp: "Harp",
                            MusicBox: "MusicBox",
                            Luan: "Luan",
                            Trombone: "Trombone",
                            AcousticGuitar: "AcousticGuitar",
                            Clarine: "Clarine",
                            Cello: "Cello",
                            Sax: "Sax",
                            Flute: "Flute",
                            Pipa: "Pipa",
                            GuZheng: "GuZheng",
                            Accordion: "Accordion"
                        },
                        seperate: {
                            original: "Original",
                            vocals: "Vocals",
                            drums: "Drums",
                            bass: "Bass",
                            piano: "Piano",
                            accompaniment: "Other"
                        },
                        contactUs: "Contact Us"
                    },
                    videoComposition: {
                        intro: "Intelligent video analysis, automatically generating background music that matches emotions, styles, and rhythms."
                    },
                    imageComposition: {
                        intro: "Intelligent image analysis, automatically generating emotional and style matching background music, which can be applied in e-commerce, games, creative and other scenarios."
                    },
                    imageDescription: {
                        intro: "Generate specific categories of tags from the content on the image, and expand into paragraphs according to the tags. It supports custom language styles and subdivided fields, and can be applied to e-commerce, games and other scenarios.",
                        supportsTip: "Currently only supports outfit images"
                    },
                    imageCaption: {
                        intro: "Generate specific categories of tags from the content on the image, and expand into paragraphs according to the tags. It supports custom language styles and subdivided fields, and can be applied to e-commerce, games and other scenarios."
                    },
                    imageScene: {
                        intro: "Automatically analyze the content of an image, and identify the scene category of the given image."
                    },
                    videoDescription: {
                        intro: "Identify elements such as scenes,events in the video,and generate corresponding tags or paragraphs based on them. It can customize subdivision fields or language styles, support real-time generation, and can be applied to scenes such as barrage.",
                        supportsTip: "Currently only supports outfit videos"
                    },
                    videoCaption: {
                        intro: "Generate specific categories of tags from the content on the video, and expand into paragraphs according to the tags. It supports custom language styles and subdivided fields, and can be applied to e-commerce, games and other scenarios."
                    },
                    singingConversion: {
                        intro: "Extract the timbers from the song and convert them into customized timbers. Applied to voice conversion, AI singer and other scenarios."
                    },
                    voiceCloning2: {
                        intro: "The voice cloning technology models the vocal characteristics of specific individuals, allowing the conversion of anyone's speech input into highly realistic replicas with specific vocal characteristics. This technology is applied in scenarios such as virtual assistants and intelligent broadcasting."
                    },
                    voiceCloning: {
                        intro: "The voice cloning technology models the vocal characteristics of specific individuals, allowing the conversion of anyone's speech input into highly realistic replicas with specific vocal characteristics. This technology is applied in scenarios such as virtual assistants and intelligent broadcasting.",
                        inputText: "Input Text",
                        outputLanguage: "Output Language",
                        outputSpeed: "Output Speech Speed",
                        inputAudio: "input Audio",
                        selectModel: "Select Model",
                        modelName: "Model Name",
                        trainingTimes: "Training Times",
                        trainingData: "Training Data",
                        delete: "Delete",
                        pleaseSelect: "Please Select",
                        pleaseSelectModel: "Please Select Model",
                        pleaseInputText: "Please Input Text",
                        pleaseInputAudio: "Please Input Audio",
                        errorInputText: "Only English input is supported",
                        modelNameFormat: "Combination of Letters and Underscores",
                        incorrectName: "Incorrect Name Input",
                        incorrectTimes: "Incorrect Times Input",
                        incorrectData: "Please Input Training Data",
                        nameExists: "Model Name Already Exists, Please Rename",
                        textTip: "Text can be read out using model voices",
                        inputTip: "The input voice can be replaced with model voices",
                        trainingTip: "Only one segment of speech can be uploaded for training at one time"
                    },
                    wzry: {
                        intro: "Identify elements such as scenes,events in the video,and generate corresponding tags or paragraphs based on them. It can customize subdivision fields or language styles, support real-time generation, and can be applied to scenes such as barrage.",
                        supportsTip: "Currently only supports Honor of Kings"
                    },
                    lyrics: {
                        intro: "The lyrics creation engine can continue to write the first lyrics entered by the user, relying on the powerful AI algorithm capabilities behind it, can generate lyrics in both popular and rap modes, and provides a variety of rhyming modes to choose from. Quickly help musicians provide materials and creative ideas."
                    },
                    videoMusic: {
                        intro: "Automatically match background music that matches the video content and atmosphere, and generate new videos without manual editing. You can customize the music library or use our rich music library to score the video."
                    },
                    musicVideo: {
                        intro: "Find the video that best expresses its emotions or rhythm for your music, and automatically make a music MV. Support custom video library to create exclusive MV."
                    },
                    genreTransform: {
                        intro: "Through artificial intelligence, songs can be quickly adapted to opera, pop and other styles. Support vocal stripping, re-interpret the changed song."
                    },
                    instrumentTransform: {
                        intro: "Automatically convert music into a style played by various instruments such as piano, guitar, and guzheng to adapt to different styles of videos and provide more possibilities for video creation."
                    },
                    seperateTransform: {
                        intro: "Recognize and separate the vocals, drums, guitars, bass and other instruments in music, support multiple separation modes, and provide rich gameplay for dubbing, cover singing, and small videos."
                    },
                    football: {
                        intro: "Based on multi-modal recognition, analyze the content, automatically complete the stripping, soundtrack, and editing, make a video hightlights for a sports game to review the wonderful moments of the game.",
                        supportsTip: "Contact smartmedia@tencent.com to access more demos"
                    },
                    musicBeat: {
                        intro: "Analyze rhythms, drum beats, climaxes, etc. in the music and mark their positions. Used in Video soundtrack, video editing, etc. to make the video more rhythmic."
                    },
                    musicHighlight: {
                        intro: "Analyze rhythms, drum beats, climaxes, etc. in the music and mark their positions. Used in Video soundtrack, video editing, etc. to make the video more rhythmic."
                    },
                    gva: {
                        intro: "Automatically recognize game actions, analyze game scenes, capture highlights in game videos and automatically complete stripping. With automatic cover, automatic soundtrack and other capabilities, it can provide editors and content distributors with rich materials.",
                        supportsTip: "The website currently only supports League of Legends and Call of Duty Mobile for gaming experiences. For more game experiences, please contact smartmedia@tencent.com.",
                        originalVideo: "Original Video",
                        highlights: "Highlight Results",
                        lol: "League of Legends",
                        cod: "Call of Duty"
                    },
                    videoCrop: {
                        intro: "Dynamically recognize the visual attention area, and tailor the video to different scales to adapt to different playback terminals. It is common to convert horizontal screen video to vertical screen video, which is convenient for distribution and playback on mobile phones."
                    },
                    smartCover: {
                        intro: "Based on various video comprehension capabilities such as content understanding, face detection, and aesthetic analysis, comprehensively evaluate the content, color, structure and other information of the picture, and automatically select a still frame cover or a dynamic gif cover for the video."
                    },
                    ocr: {
                        intro: "Recognize the text information in the video, you can quickly add subtitles to the video."
                    },
                    removeWatermark: {
                        intro: "Detect the type of watermark contained in the video, and support adding and deleting watermarks at the same time. It can be used in scenarios such as content review, copyright monitoring, and copyright protection."
                    },
                    smartVlog: {
                        intro: "Automatically identify the wonderful segments in the video, and complete the editing, soundtrack, and generate a unique vlog."
                    },
                    audioTagger: {
                        intro: "Understand the dimensions of music intensity, mood, style, emotion, etc., and add corresponding tags to the music."
                    },
                    imageEnhancement: {
                        intro: "Repair and enhance human faces, texture details, and colors to improve image clarity."
                    },
                    imageObject: {
                        intro: "Automatically analyze the content of an image, identify and locate objects of interest in an image."
                    },
                    videoScene: {
                        intro: "Automatically analyze video content, identify the main scene categories of a given video, and give the corresponding time interval."
                    },
                    videoObject: {
                        intro: "Automatically analyze video content, identify the objects of interest in a given video."
                    }
                },
                zh: {
                    common: {
                        lab: "\u817e\u8baf\u591a\u5a92\u4f53\u5b9e\u9a8c\u5ba4",
                        exp: "\u817e\u8baf\u591a\u5a92\u4f53\u5b9e\u9a8c\u4f53\u9a8c",
                        smartContent: "\u817e\u8baf\u667a\u5a92\xb7\u5185\u5bb9\u751f\u4ea7\u5e73\u53f0",
                        smartWriter: "\u667a\u6587\u667a\u80fd\u5199\u4f5c",
                        smartProducer: "\u667a\u5a92\u667a\u80fd\u5a92\u4f53",
                        smartMusician: "\u667a\u97f5\u667a\u80fd\u97f3\u4e50",
                        samples: "\u793a\u4f8b",
                        results: "\u7ed3\u679c",
                        keywords: "\u5173\u952e\u8bcd",
                        articles: "\u6bb5\u843d",
                        chinese: "\u4e2d\u6587",
                        english: "\u82f1\u6587",
                        imageDir: "\u56fe\u7247\u63cf\u8ff0",
                        imageDescription: "\u7535\u5546\u56fe\u7247\u63cf\u8ff0",
                        imageCaption: "\u901a\u7528\u56fe\u7247\u63cf\u8ff0",
                        imageComposition: "\u56fe\u7247\u4f5c\u66f2",
                        imageScene: "\u56fe\u7247\u573a\u666f\u8bc6\u522b",
                        imageObject: "\u56fe\u7247\u76ee\u6807\u68c0\u6d4b",
                        videoComposition: "\u89c6\u9891\u4f5c\u66f2",
                        videoDir: "\u89c6\u9891\u63cf\u8ff0",
                        videoDescription: "\u7535\u5546\u89c6\u9891\u63cf\u8ff0",
                        videoCaption: "\u901a\u7528\u89c6\u9891\u63cf\u8ff0",
                        wzry: "\u6e38\u620f\u5f39\u5e55\u89e3\u8bf4",
                        musicDir: "\u97f3\u4e50\u63cf\u8ff0",
                        lyrics: "\u6b4c\u8bcd\u521b\u4f5c",
                        videoMusic: "\u89c6\u9891\u914d\u4e50",
                        musicVideo: "\u97f3\u4e50MV",
                        football: "\u4f53\u80b2\u96c6\u9526",
                        gva: "\u6e38\u620f\u89c6\u9891\u5206\u6790",
                        BeatDir: "\u97f3\u4e50\u6253\u70b9",
                        musicBeat: "\u9f13\u70b9\u8bc6\u522b",
                        singingConversion: "\u5531\u6b4c\u97f3\u8272\u8f6c\u6362",
                        musicHighlight: "\u9ad8\u6f6e\u8bc6\u522b",
                        genreTransform: "\u66f2\u98ce\u8f6c\u6362",
                        instrumentTransform: "\u4e50\u5668\u8f6c\u6362",
                        seperateTransform: "\u97f3\u6e90\u5206\u79bb",
                        silentVideo: "\u65e0\u58f0\u89c6\u9891",
                        originalVideo: "\u539f\u89c6\u9891",
                        originalImg: "\u539f\u56fe\u7247",
                        originalAudio: "\u539f\u97f3\u9891",
                        originalFile: "\u539f\u6587\u4ef6",
                        originalMusic: "\u539f\u97f3\u4e50",
                        detectionResult1: "\u68c0\u6d4b\u7ed3\u679c\uff08\u53ef\u89c6\u5316\uff09",
                        detectionResult2: "\u68c0\u6d4b\u7ed3\u679c\uff08Json\uff09",
                        displayResults: "\u7ed3\u679c\u5c55\u793a",
                        processDescription: "\u8fc7\u7a0b\u8bf4\u660e",
                        generateAudio: "\u751f\u6210\u97f3\u9891",
                        trainModel: "\u8bad\u7ec3\u6a21\u578b",
                        generatedVideo: "\u914d\u4e50\u89c6\u9891",
                        processedVideo: "\u5904\u7406\u89c6\u9891",
                        processedAudio: "\u5904\u7406\u97f3\u9891",
                        processedMusic: "\u5904\u7406\u97f3\u4e50",
                        processedFile: "\u5904\u7406\u6587\u4ef6",
                        highlightStart: "\u5f00\u59cb\u65f6\u95f4",
                        highlightEnd: "\u7ed3\u675f\u65f6\u95f4",
                        highlightScore: "\u5206\u6570",
                        videoCrop: "\u6a2a\u7ad6\u5c4f\u8f6c\u6362",
                        smartCover: "\u667a\u80fd\u5c01\u9762",
                        speechConversion: "\u8bf4\u8bdd\u97f3\u8272\u8f6c\u6362",
                        voiceCloning: "\u8bed\u97f3\u514b\u9686",
                        voiceCloning2: "\u8bed\u97f3\u514b\u9686(\u5b9e\u65f6)",
                        coverResults: "\u5c01\u9762\u7ed3\u679c",
                        removeWatermark: "\u6c34\u5370\u68c0\u6d4b",
                        removedWatermarks: "\u68c0\u6d4b\u7ed3\u679c",
                        watermarkUnsupported: "\u6682\u4e0d\u652f\u6301\u6c34\u5370\uff0c\u8bf7\u8054\u7cfbsmartmedia@tencent.com\u8fdb\u884c\u66f4\u65b0",
                        ocr: "OCR\u6587\u672c\u68c0\u6d4b",
                        OCRResult: "\u68c0\u6d4b\u7ed3\u679c",
                        originalPicture: "\u539f\u56fe\u7247",
                        inputImage: "\u8f93\u5165\u56fe\u7247",
                        inputVideo: "\u8f93\u5165\u89c6\u9891",
                        recognitionResult: "\u8bc6\u522b\u7ed3\u679c",
                        smartVlog: "\u667a\u80fdvlog",
                        audioTagger: "\u97f3\u4e50\u6807\u7b7e\u8bc6\u522b",
                        audioTaggerResult: "\u8bc6\u522b\u7ed3\u679c",
                        game_ad_genre: "\u6e38\u620f\u5e7f\u544a\u98ce\u683c",
                        game_ad_mood: "\u6e38\u620f\u5e7f\u544a\u60c5\u7eea",
                        game_ad_strength: "\u6e38\u620f\u5e7f\u544a\u5f3a\u5ea6",
                        processedPicture: "\u52a0\u6e05\u7ed3\u679c",
                        imageEnhancement: "\u56fe\u7247\u667a\u80fd\u52a0\u6e05",
                        videoScene: "\u89c6\u9891\u573a\u666f\u68c0\u6d4b",
                        videoObject: "\u89c6\u9891\u76ee\u6807\u68c0\u6d4b",
                        music: "\u97f3\u4e50",
                        file: "\u6587\u4ef6",
                        demo: "Demo",
                        btn: {
                            upload: "\u4e0a\u4f20",
                            enter: "\u8fdb\u5165"
                        },
                        tip: {
                            inputKeyword: "\u8bf7\u8f93\u5165\u8bed\u53e5\uff08\u4e8c\u5341\u4e2a\u5b57\u4ee5\u4e0b\uff09",
                            inputURL: "\u8bf7\u8f93\u5165\u56fe\u7247URL",
                            uploadingVideo: "\u4e0a\u4f20\u89c6\u9891\u4e2d",
                            processingVideo: "\u5904\u7406\u89c6\u9891\u4e2d",
                            uploadingAudio: "\u4e0a\u4f20\u97f3\u9891\u4e2d",
                            processingAudio: "\u5904\u7406\u97f3\u9891\u4e2d",
                            uploadingMusic: "\u4e0a\u4f20\u97f3\u4e50\u4e2d",
                            processingMusic: "\u5904\u7406\u97f3\u4e50\u4e2d",
                            uploadingPicture: "\u4e0a\u4f20\u56fe\u7247\u4e2d",
                            processingPicture: "\u5904\u7406\u56fe\u7247\u4e2d",
                            uploadingFile: "\u4e0a\u4f20\u6587\u4ef6\u4e2d",
                            processingFile: "\u5904\u7406\u6587\u4ef6\u4e2d",
                            progressModel: "\u6a21\u578b\u8bad\u7ec3\u4e2d",
                            uploadingData: "\u4e0a\u4f20\u6570\u636e\u4e2d",
                            inputToken: "\u8bf7\u8f93\u5165\u8bbf\u95ee\u51ed\u8bc1",
                            invalidToken: "\u65e0\u6548\u51ed\u8bc1\u3002\u8bf7\u786e\u4fdd\u8f93\u5165\u51ed\u8bc1\u6b63\u786e\u3002",
                            invalidImageURL: "\u65e0\u6548\u56fe\u7247URL",
                            keywordsFailed: "\u65e0\u6cd5\u751f\u6210\u5173\u952e\u8bcd",
                            articleFailed: "\u65e0\u6cd5\u751f\u6210\u6bb5\u843d",
                            videoTimeLimit: "\u89c6\u9891\u65f6\u957f\u9650\u5236: 2\u5206\u949f",
                            videoSizeLimit: "\u89c6\u9891\u5927\u5c0f\u9650\u5236: 2GB",
                            videoSizeLimitDialog: "\u56e0\u6d4f\u89c8\u5668\u9650\u5236\uff0c\u8bf7\u4e0a\u4f20\u5c0f\u4e8e2GB\u7684\u6587\u4ef6",
                            videoFailed: "\u65e0\u6cd5\u5904\u7406\u89c6\u9891",
                            audioFailed: "\u65e0\u6cd5\u5904\u7406\u97f3\u9891",
                            pictureFailed: "\u65e0\u6cd5\u5904\u7406\u56fe\u7247",
                            processedFailed: "\u5904\u7406\u5931\u8d25",
                            emptyResult: "\u7ed3\u679c\u4e3a\u7a7a",
                            modelCompleted: "\u6a21\u578b\u8bad\u7ec3\u5b8c\u6210"
                        },
                        cover: {
                            cover1: "\u5c01\u9762 1",
                            cover2: "\u5c01\u9762 2",
                            cover3: "\u5c01\u9762 3"
                        },
                        wzryResult: {
                            time: "\u65f6\u95f4",
                            tag: "\u6807\u7b7e",
                            caption: "\u6807\u9898",
                            barrage: "\u5f39\u5e55"
                        },
                        lyricsPannel: {
                            head: "\u8bed\u53e5",
                            pattern: "\u62bc\u97f5\u6a21\u5f0f",
                            lyric: "\u666e\u901a\u6b4c\u8bcd",
                            rap: "\u8bf4\u5531\u6b4c\u8bcd"
                        },
                        footballType: {
                            original: "\u539f\u7247",
                            fast: "\u6b63\u5e38\u955c\u5934",
                            slow: "\u6162\u955c\u5934",
                            corner: "\u89d2\u7403",
                            free: "\u4efb\u610f\u7403"
                        },
                        genre: {
                            original: "\u539f\u66f2",
                            chinese: "\u4e2d\u56fd\u98ce",
                            pop: "\u6d41\u884c",
                            rnb: "R&B",
                            rock: "\u6447\u6eda",
                            dj: "DJ",
                            futurebass: "\u672a\u6765\u4f4e\u97f3",
                            opera: "\u6b4c\u5267",
                            ballad: "\u6c11\u8c23",
                            light: "\u8f7b\u97f3\u4e50"
                        },
                        instrument: {
                            original: "\u539f\u66f2",
                            Marimba: "\u9a6c\u6797\u5df4\u7434",
                            Dulcimer: "\u6d0b\u7434",
                            Harp: "\u7ad6\u7434",
                            MusicBox: "\u97f3\u4e50\u76d2",
                            Luan: "\u683e",
                            Trombone: "\u957f\u53f7",
                            AcousticGuitar: "\u6728\u5409\u4ed6",
                            Clarine: "\u5355\u7c27\u7ba1",
                            Cello: "\u5927\u63d0\u7434",
                            Sax: "\u8428\u514b\u65af",
                            Flute: "\u7b1b",
                            Pipa: "\u7435\u7436",
                            GuZheng: "\u53e4\u7b5d",
                            Accordion: "\u98ce\u7434"
                        },
                        seperate: {
                            original: "\u539f\u66f2",
                            vocals: "\u4eba\u58f0",
                            drums: "\u9f13",
                            bass: "\u8d1d\u65af",
                            piano: "\u94a2\u7434",
                            accompaniment: "\u5176\u4ed6"
                        },
                        contactUs: "\u8054\u7cfb\u6211\u4eec"
                    },
                    videoComposition: {
                        intro: "\u667a\u80fd\u89c6\u9891\u5206\u6790\uff0c\u81ea\u52a8\u751f\u6210\u60c5\u611f\u3001\u98ce\u683c\u548c\u8282\u594f\u5339\u914d\u7684\u80cc\u666f\u97f3\u4e50\u3002"
                    },
                    singingConversion: {
                        intro: "\u63d0\u53d6\u6b4c\u66f2\u4e2d\u7684\u97f3\u8272\uff0c\u5c06\u5176\u8f6c\u6362\u6210\u5b9a\u5236\u7684\u97f3\u8272\u3002\u5e94\u7528\u4e8e\u97f3\u8272\u8f6c\u6362\uff0cAI\u6b4c\u624b\u7b49\u573a\u666f\u3002"
                    },
                    voiceCloning2: {
                        intro: "\u8bed\u97f3\u514b\u9686\u6280\u672f\u901a\u8fc7\u5bf9\u7279\u5b9a\u4eba\u7269\u7684\u97f3\u8272\u8fdb\u884c\u5efa\u6a21\uff0c\u53ef\u5c06\u4efb\u610f\u4eba\u7684\u8bed\u97f3\u8f93\u5165\u8f6c\u6362\u6210\u9ad8\u5ea6\u903c\u771f\u7684\u7279\u5b9a\u97f3\u8272\u526f\u672c\uff0c\u5e94\u7528\u4e8e\u865a\u62df\u52a9\u624b\u548c\u667a\u80fd\u64ad\u62a5\u7b49\u573a\u666f\u3002"
                    },
                    voiceCloning: {
                        intro: "\u8bed\u97f3\u514b\u9686\u6280\u672f\u901a\u8fc7\u5bf9\u7279\u5b9a\u4eba\u7269\u7684\u97f3\u8272\u8fdb\u884c\u5efa\u6a21\uff0c\u53ef\u5c06\u4efb\u610f\u4eba\u7684\u8bed\u97f3\u8f93\u5165\u8f6c\u6362\u6210\u9ad8\u5ea6\u903c\u771f\u7684\u7279\u5b9a\u97f3\u8272\u526f\u672c\uff0c\u5e94\u7528\u4e8e\u865a\u62df\u52a9\u624b\u548c\u667a\u80fd\u64ad\u62a5\u7b49\u573a\u666f\u3002",
                        inputText: "\u8f93\u5165\u6587\u672c",
                        outputLanguage: "\u8f93\u51fa\u8bed\u8a00",
                        outputSpeed: "\u8f93\u51fa\u8bed\u901f",
                        inputAudio: "\u8f93\u5165\u97f3\u9891",
                        selectModel: "\u9009\u62e9\u6a21\u578b",
                        modelName: "\u6a21\u578b\u540d\u79f0",
                        trainingTimes: "\u8bad\u7ec3\u8f6e\u6b21",
                        trainingData: "\u8bad\u7ec3\u6570\u636e",
                        delete: "\u5220\u9664",
                        pleaseSelect: "\u8bf7\u9009\u62e9",
                        pleaseSelectModel: "\u8bf7\u9009\u62e9\u6a21\u578b",
                        pleaseInputText: "\u8bf7\u8f93\u5165\u6587\u672c",
                        pleaseInputAudio: "\u8bf7\u8f93\u5165\u97f3\u9891",
                        errorInputText: "\u4ec5\u652f\u6301\u8f93\u5165\u82f1\u6587",
                        modelNameFormat: "\u5b57\u6bcd\u548c\u4e0b\u5212\u7ebf\u7ec4\u5408",
                        incorrectName: "\u8f93\u5165\u7684\u540d\u79f0\u4e0d\u6b63\u786e",
                        incorrectTimes: "\u8f93\u5165\u7684\u6b21\u6570\u4e0d\u6b63\u786e",
                        incorrectData: "\u8bf7\u8f93\u5165\u8bad\u7ec3\u6570\u636e",
                        nameExists: "\u6a21\u578b\u540d\u91cd\u590d\uff0c\u8bf7\u91cd\u65b0\u547d\u540d",
                        textTip: "\u53ef\u4ee5\u4f7f\u7528\u6a21\u578b\u97f3\u8272\u5ff5\u51fa\u6587\u672c",
                        inputTip: "\u53ef\u4ee5\u5c06\u8f93\u5165\u97f3\u8272\u66ff\u6362\u6210\u6a21\u578b\u97f3\u8272",
                        trainingTip: "\u6bcf\u6b21\u8bad\u7ec3\u53ea\u80fd\u4e0a\u4f20\u4e00\u6bb5\u8bed\u97f3\u8fdb\u884c\u8bad\u7ec3\uff0c\u53ef\u4ee5\u5c06\u591a\u6bb5\u8bed\u97f3\u5408\u6210\u4e00\u6bb5"
                    },
                    imageComposition: {
                        intro: "\u667a\u80fd\u56fe\u7247\u5206\u6790\uff0c\u81ea\u52a8\u751f\u6210\u60c5\u611f\u3001\u98ce\u683c\u5339\u914d\u7684\u80cc\u666f\u97f3\u4e50\uff0c\u53ef\u4ee5\u5e94\u7528\u5728\u7535\u5546\u3001\u6e38\u620f\u3001\u521b\u4f5c\u7b49\u573a\u666f\u3002"
                    },
                    imageScene: {
                        intro: "\u81ea\u52a8\u5206\u6790\u56fe\u7247\u5185\u5bb9\uff0c\u8bc6\u522b\u7ed9\u5b9a\u56fe\u7247\u7684\u573a\u666f\u7c7b\u522b\u3002"
                    },
                    imageDescription: {
                        intro: "\u8bc6\u522b\u753b\u9762\u5185\u5bb9\uff0c\u751f\u6210\u7279\u5b9a\u7c7b\u522b\u7684\u6807\u7b7e\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u6807\u7b7e\u6269\u5199\u6210\u6bb5\u843d\u6587\u6848\u3002\u652f\u6301\u81ea\u5b9a\u4e49\u8bed\u8a00\u98ce\u683c\u548c\u7ec6\u5206\u9886\u57df\uff0c\u53ef\u4ee5\u5e94\u7528\u5728\u7535\u5546\u3001\u6e38\u620f\u7b49\u573a\u666f\u3002",
                        supportsTip: "\u5f53\u524d\u4ec5\u652f\u6301\u670d\u9970\u7c7b\u56fe\u7247"
                    },
                    imageCaption: {
                        intro: "\u8bc6\u522b\u753b\u9762\u5185\u5bb9\uff0c\u751f\u6210\u7279\u5b9a\u7c7b\u522b\u7684\u6807\u7b7e\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u6807\u7b7e\u6269\u5199\u6210\u6bb5\u843d\u6587\u6848\u3002\u652f\u6301\u81ea\u5b9a\u4e49\u8bed\u8a00\u98ce\u683c\u548c\u7ec6\u5206\u9886\u57df\uff0c\u53ef\u4ee5\u5e94\u7528\u5728\u7535\u5546\u3001\u6e38\u620f\u7b49\u573a\u666f\u3002"
                    },
                    videoDescription: {
                        intro: "\u8bc6\u522b\u89c6\u9891\u4e2d\u573a\u666f\u3001\u52a8\u4f5c\u3001\u4e8b\u4ef6\u7b49\u8981\u7d20\uff0c\u5f62\u6210\u5bf9\u5e94\u6807\u7b7e\u6216\u8005\u6bb5\u843d\u6587\u6848\u3002\u53ef\u81ea\u5b9a\u4e49\u7ec6\u5206\u9886\u57df\u6216\u8bed\u8a00\u98ce\u683c\uff0c\u652f\u6301\u5b9e\u65f6\u751f\u6210\uff0c\u53ef\u4ee5\u5e94\u7528\u4e8e\u5f39\u5e55\u7b49\u573a\u666f\u3002",
                        supportsTip: "\u5f53\u524d\u4ec5\u652f\u6301\u670d\u9970\u7c7b\u89c6\u9891"
                    },
                    videoCaption: {
                        intro: "\u8bc6\u522b\u89c6\u9891\u5185\u5bb9\uff0c\u751f\u6210\u7279\u5b9a\u7c7b\u522b\u7684\u6807\u7b7e\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u6807\u7b7e\u6269\u5199\u6210\u6bb5\u843d\u6587\u6848\u3002\u652f\u6301\u81ea\u5b9a\u4e49\u8bed\u8a00\u98ce\u683c\u548c\u7ec6\u5206\u9886\u57df\uff0c\u53ef\u4ee5\u5e94\u7528\u5728\u7535\u5546\u3001\u6e38\u620f\u7b49\u573a\u666f\u3002"
                    },
                    wzry: {
                        intro: "\u8bc6\u522b\u89c6\u9891\u4e2d\u573a\u666f\u3001\u52a8\u4f5c\u3001\u4e8b\u4ef6\u7b49\u8981\u7d20\uff0c\u5f62\u6210\u5bf9\u5e94\u6807\u7b7e\u6216\u8005\u6bb5\u843d\u6587\u6848\u3002\u53ef\u81ea\u5b9a\u4e49\u7ec6\u5206\u9886\u57df\u6216\u8bed\u8a00\u98ce\u683c\uff0c\u652f\u6301\u5b9e\u65f6\u751f\u6210\uff0c\u53ef\u4ee5\u5e94\u7528\u4e8e\u5f39\u5e55\u7b49\u573a\u666f\u3002",
                        supportsTip: "\u5f53\u524d\u4ec5\u652f\u6301\u738b\u8005\u8363\u8000\u89c6\u9891"
                    },
                    lyrics: {
                        intro: "\u6b4c\u8bcd\u521b\u4f5c\u5f15\u64ce\u53ef\u4ee5\u5bf9\u7528\u6237\u8f93\u5165\u7684\u7b2c\u4e00\u53e5\u6b4c\u8bcd\u8fdb\u884c\u7eed\u5199\uff0c\u4f9d\u8d56\u80cc\u540e\u5f3a\u5927\u7684AI\u7b97\u6cd5\u80fd\u529b\uff0c\u53ef\u751f\u6210\u6d41\u884c\u548crap\u4e24\u79cd\u6a21\u5f0f\u7684\u6b4c\u8bcd\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u62bc\u97f5\u6a21\u5f0f\u8fdb\u884c\u9009\u62e9\u3002\u5feb\u901f\u5e2e\u52a9\u97f3\u4e50\u4eba\u63d0\u4f9b\u7d20\u6750\u548c\u521b\u4f5c\u601d\u8def\u3002"
                    },
                    videoMusic: {
                        intro: "\u81ea\u52a8\u5339\u914d\u7b26\u5408\u89c6\u9891\u5185\u5bb9\u3001\u6c1b\u56f4\u7684\u80cc\u666f\u97f3\u4e50\uff0c\u5e76\u751f\u6210\u65b0\u7684\u89c6\u9891\uff0c\u65e0\u9700\u4eba\u5de5\u7f16\u8f91\u3002\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u97f3\u4e50\u5e93\u6216\u8005\u7528\u6211\u4eec\u4e30\u5bcc\u7684\u66f2\u5e93\u6765\u7ed9\u89c6\u9891\u914d\u4e50\u3002",
                        tip: {
                            videoFailed: "\u5f53\u524d\u4ec5\u652f\u6301\u4e0d\u8d85\u8fc72\u5206\u949f\u7684\u89c6\u9891"
                        }
                    },
                    musicVideo: {
                        intro: "\u4e3a\u4f60\u7684\u97f3\u4e50\u627e\u5230\u6700\u80fd\u8868\u8fbe\u5b83\u60c5\u7eea\u6216\u5f8b\u52a8\u7684\u89c6\u9891\uff0c\u5e76\u81ea\u52a8\u5236\u4f5c\u6210\u97f3\u4e50MV\u3002\u652f\u6301\u81ea\u5b9a\u4e49\u89c6\u9891\u5e93\uff0c\u6253\u9020\u4e13\u5c5eMV\u3002"
                    },
                    genreTransform: {
                        intro: "\u901a\u8fc7\u4eba\u5de5\u667a\u80fd\uff0c\u5feb\u901f\u5c06\u6b4c\u66f2\u8fdb\u884c\u6b4c\u5267\u3001\u6d41\u884c\u7b49\u591a\u79cd\u66f2\u98ce\u7684\u6539\u7f16\u3002\u652f\u6301\u4eba\u58f0\u5265\u79bb\uff0c\u5c06\u4f34\u594f\u6539\u7f16\u540e\uff0c\u83b7\u5f97\u91cd\u65b0\u6f14\u7ece\u3002"
                    },
                    instrumentTransform: {
                        intro: "\u81ea\u52a8\u5c06\u97f3\u4e50\u8f6c\u6362\u4e3a\u7531\u94a2\u7434\u3001\u5409\u4ed6\u3001\u53e4\u7b5d\u7b49\u5404\u79cd\u4e50\u5668\u6f14\u594f\u7684\u98ce\u683c\uff0c\u4ee5\u9002\u5e94\u4e0d\u540c\u98ce\u683c\u7684\u89c6\u9891\uff0c\u4e3a\u89c6\u9891\u521b\u4f5c\u63d0\u4f9b\u66f4\u591a\u53ef\u80fd\u3002"
                    },
                    seperateTransform: {
                        intro: "\u5c06\u97f3\u4e50\u4e2d\u7684\u4eba\u58f0\u3001\u9f13\u3001\u5409\u4ed6\u3001\u8d1d\u65af\u7b49\u4e50\u5668\u8fdb\u884c\u8bc6\u522b\u548c\u5206\u79bb\uff0c\u652f\u6301\u591a\u79cd\u5206\u79bb\u6a21\u5f0f\uff0c\u4e3a\u914d\u97f3\u3001\u7ffb\u5531\u3001\u5c0f\u89c6\u9891\u63d0\u4f9b\u4e30\u5bcc\u73a9\u6cd5\u3002"
                    },
                    football: {
                        intro: "\u57fa\u4e8e\u591a\u6a21\u6001\u8bc6\u522b\uff0c\u5206\u6790\u753b\u9762\u5185\u5bb9\uff0c\u81ea\u52a8\u5b8c\u6210\u62c6\u6761\u3001\u914d\u4e50\u3001\u526a\u8f91\uff0c\u4e3a\u4e00\u573a\u4f53\u80b2\u6bd4\u8d5b\u5236\u4f5c\u89c6\u9891\u96c6\u9526\uff0c\u56de\u987e\u6bd4\u8d5b\u7cbe\u5f69\u77ac\u95f4\u3002",
                        supportsTip: "\u53ef\u8054\u7cfbsmartmedia@tencent.com\u8fdb\u884c\u4f53\u9a8c"
                    },
                    musicBeat: {
                        intro: "\u5bf9\u97f3\u4e50\u4e2d\u8282\u594f\u3001\u9f13\u70b9\u3001\u9ad8\u6f6e\u7b49\u7ed3\u6784\u8fdb\u884c\u5206\u6790\uff0c\u5e76\u6807\u8bb0\u5176\u4f4d\u7f6e\u3002\u5e94\u7528\u4e8e\u89c6\u9891\u914d\u4e50\u3001\u89c6\u9891\u526a\u8f91\u7b49\uff0c\u4f7f\u89c6\u9891\u66f4\u5177\u6709\u5f8b\u52a8\u611f\u3002"
                    },
                    musicHighlight: {
                        intro: "\u5bf9\u97f3\u4e50\u4e2d\u8282\u594f\u3001\u9f13\u70b9\u3001\u9ad8\u6f6e\u7b49\u7ed3\u6784\u8fdb\u884c\u5206\u6790\uff0c\u5e76\u6807\u8bb0\u5176\u4f4d\u7f6e\u3002\u5e94\u7528\u4e8e\u89c6\u9891\u914d\u4e50\u3001\u89c6\u9891\u526a\u8f91\u7b49\uff0c\u4f7f\u89c6\u9891\u66f4\u5177\u6709\u5f8b\u52a8\u611f\u3002"
                    },
                    gva: {
                        intro: "\u81ea\u52a8\u8bc6\u522b\u6e38\u620f\u52a8\u4f5c\uff0c\u5206\u6790\u6e38\u620f\u573a\u666f\uff0c\u6355\u6349\u6e38\u620f\u89c6\u9891\u4e2d\u7684\u7cbe\u5f69\u77ac\u95f4\uff0c\u5e76\u81ea\u52a8\u5b8c\u6210\u62c6\u6761\u3002\u914d\u5408\u81ea\u52a8\u5c01\u9762\u3001\u81ea\u52a8\u914d\u4e50\u7b49\u80fd\u529b\uff0c\u53ef\u4e3a\u526a\u8f91\u5e08\u3001\u5185\u5bb9\u5206\u53d1\u8005\u63d0\u4f9b\u4e30\u5bcc\u7d20\u6750\u3002",
                        supportsTip: "\u4f53\u9a8c\u7f51\u7ad9\u76ee\u524d\u4ec5\u652f\u6301\u82f1\u96c4\u8054\u76df\u548c\u4f7f\u547d\u53ec\u5524\u624b\u6e38\uff0c\u66f4\u591a\u6e38\u620f\u4f53\u9a8c\u53ef\u8054\u7cfbsmartmedia@tencent.com",
                        originalVideo: "\u539f\u59cb\u6e38\u620f\u89c6\u9891",
                        highlights: "\u9ad8\u5149\u65f6\u523b",
                        lol: "\u82f1\u96c4\u8054\u76df",
                        cod: "\u4f7f\u547d\u53ec\u5524"
                    },
                    videoCrop: {
                        intro: "\u52a8\u6001\u8bc6\u522b\u89c6\u89c9\u5173\u6ce8\u7684\u533a\u57df\uff0c\u5bf9\u89c6\u9891\u8fdb\u884c\u4e0d\u540c\u5c3a\u5ea6\u7684\u526a\u88c1\uff0c\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u64ad\u653e\u7ec8\u7aef\u3002\u5e38\u89c1\u4e8e\u5c06\u6a2a\u5c4f\u89c6\u9891\u8f6c\u6362\u4e3a\u7ad6\u5c4f\u89c6\u9891\uff0c\u4fbf\u4e8e\u5728\u624b\u673a\u7aef\u7684\u5206\u53d1\u548c\u64ad\u653e\u3002"
                    },
                    smartCover: {
                        intro: "\u57fa\u4e8e\u5185\u5bb9\u7406\u89e3\u3001\u4eba\u8138\u68c0\u6d4b\u3001\u7f8e\u5b66\u5206\u6790\u7b49\u591a\u79cd\u89c6\u9891\u7406\u89e3\u80fd\u529b\uff0c\u7efc\u5408\u8bc4\u4f30\u753b\u9762\u5185\u5bb9\u3001\u8272\u5f69\u3001\u7ed3\u6784\u7b49\u4fe1\u606f\uff0c\u81ea\u52a8\u4e3a\u89c6\u9891\u9009\u62e9\u9759\u5e27\u5c01\u9762\u6216gif\u52a8\u6001\u5c01\u9762\u3002"
                    },
                    ocr: {
                        intro: "\u8bc6\u522b\u89c6\u9891\u4e2d\u7684\u6587\u672c\u4fe1\u606f\uff0c\u53ef\u5feb\u901f\u4e3a\u89c6\u9891\u6dfb\u52a0\u5b57\u5e55\u3002"
                    },
                    removeWatermark: {
                        intro: "\u68c0\u6d4b\u89c6\u9891\u4e2d\u542b\u6709\u7684\u6c34\u5370\u5185\u5bb9\uff0c\u540c\u65f6\u652f\u6301\u6c34\u5370\u6dfb\u52a0\u548c\u5220\u9664\u3002\u5728\u5185\u5bb9\u5ba1\u6838\u3001\u7248\u6743\u76d1\u63a7\u3001\u7248\u6743\u4fdd\u62a4\u7b49\u573a\u666f\u4e0b\u5747\u53ef\u4f7f\u7528\u3002"
                    },
                    smartVlog: {
                        intro: "\u81ea\u52a8\u8bc6\u522b\u89c6\u9891\u4e2d\u7cbe\u5f69\u7684\u7247\u6bb5\uff0c\u5e76\u5b8c\u6210\u526a\u8f91\u3001\u914d\u4e50\uff0c\u751f\u6210\u72ec\u7279\u7684vlog\u77ed\u7247\u3002"
                    },
                    audioTagger: {
                        intro: "\u5bf9\u97f3\u4e50\u7684\u5f3a\u5ea6\u3001\u60c5\u7eea\u3001\u98ce\u683c\u3001\u60c5\u611f\u7b49\u7ef4\u5ea6\u8fdb\u884c\u97f3\u4e50\u7406\u89e3\uff0c\u5e76\u4e3a\u97f3\u4e50\u6dfb\u52a0\u5bf9\u5e94\u7684\u6807\u7b7e\u3002"
                    },
                    imageEnhancement: {
                        intro: "\u901a\u8fc7\u5bf9\u4eba\u8138\u3001\u7eb9\u7406\u7ec6\u8282\u3001\u8272\u5f69\u7b49\u7ef4\u5ea6\u8fdb\u884c\u4fee\u590d\u548c\u589e\u5f3a\uff0c\u63d0\u5347\u56fe\u7247\u6e05\u6670\u5ea6\u3002"
                    },
                    imageObject: {
                        intro: "\u81ea\u52a8\u5206\u6790\u56fe\u7247\u5185\u5bb9\uff0c\u8bc6\u522b\u548c\u5b9a\u4f4d\u56fe\u50cf\u4e2d\u7684\u5174\u8da3\u76ee\u6807\u3002"
                    },
                    videoScene: {
                        intro: "\u81ea\u52a8\u5206\u6790\u89c6\u9891\u5185\u5bb9\uff0c\u8bc6\u522b\u7ed9\u5b9a\u89c6\u9891\u7684\u4e3b\u8981\u573a\u666f\u7c7b\u522b\uff0c\u5e76\u7ed9\u51fa\u5bf9\u5e94\u7684\u65f6\u95f4\u533a\u95f4\u3002"
                    },
                    videoObject: {
                        intro: "\u81ea\u52a8\u5206\u6790\u89c6\u9891\u5185\u5bb9\uff0c\u8bc6\u522b\u89c6\u9891\u4e2d\u51fa\u73b0\u7684\u5174\u8da3\u76ee\u6807\u3002"
                    }
                }
            },
            fallbackLng: "en",
            fallbackNS: "common",
            defaultNS: "common",
            interpolation: {
                escapeValue: !1
            }
        });
        var E = n(1)
          , x = n(71);
        s.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(x.b, null, r.a.createElement(f.a, {
            basename: E.c
        }, r.a.createElement(g, null)))), document.getElementById("root")),
        "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
            e.unregister()
        }
        )).catch((function(e) {
            console.error(e.message)
        }
        ))
    },
    47: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var a = n(0)
          , r = n(71)
          , c = function() {
            return Object(a.useContext)(r.a)
        }
    },
    6: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return i
        }
        )),
        n.d(t, "n", (function() {
            return d
        }
        )),
        n.d(t, "o", (function() {
            return N
        }
        )),
        n.d(t, "g", (function() {
            return C.a
        }
        )),
        n.d(t, "f", (function() {
            return T
        }
        )),
        n.d(t, "m", (function() {
            return V
        }
        )),
        n.d(t, "i", (function() {
            return _
        }
        )),
        n.d(t, "a", (function() {
            return A
        }
        )),
        n.d(t, "p", (function() {
            return M
        }
        )),
        n.d(t, "j", (function() {
            return F
        }
        )),
        n.d(t, "e", (function() {
            return z
        }
        )),
        n.d(t, "c", (function() {
            return L
        }
        )),
        n.d(t, "h", (function() {
            return U
        }
        )),
        n.d(t, "k", (function() {
            return D
        }
        )),
        n.d(t, "l", (function() {
            return G
        }
        )),
        n.d(t, "b", (function() {
            return W
        }
        ));
        var a = n(32)
          , r = n(0)
          , c = n.n(r)
          , s = n(5)
          , o = n.n(s)
          , l = (n(185),
        Object(r.forwardRef)((function(e, t) {
            var n = e.className
              , r = e.styleType
              , s = void 0 === r ? "primary" : r
              , l = e.loading
              , i = e.children
              , u = Object(a.a)(e, ["className", "styleType", "loading", "children"]);
            return c.a.createElement("button", Object.assign({
                className: o()("Button", s, n, {
                    loading: l
                }),
                ref: t
            }, u), c.a.createElement("span", {
                className: "Button-cover"
            }, c.a.createElement(V, {
                size: "1.4em",
                strokeWidth: 3
            })), i)
        }
        )));
        l.displayName = "Button";
        var i = l
          , u = n(4);
        n(186),
        n(187);
        function m(e) {
            var t = [];
            return function(e) {
                return e instanceof Object
            }(e) ? (Array.isArray(e) ? e.filter((function(e) {
                return e.props.title
            }
            )).map((function(e) {
                return t.push(e)
            }
            )) : t.push(e),
            t) : []
        }
        var p = function(e) {
            var t = e.children
              , n = e.activeKey
              , a = e.zIndex
              , s = e.onChange
              , l = Object(r.useRef)(new Map)
              , i = m(t)
              , p = Object(r.useState)(i[0].props.paneKey || "")
              , d = Object(u.a)(p, 2)
              , b = d[0]
              , v = d[1];
            return Object(r.useEffect)((function() {
                var e = l.current;
                n ? e.has(n) || e.set(n, !0) : e.has(b) || e.set(b, !0)
            }
            ), [n, b]),
            c.a.createElement("div", {
                className: "Tabs"
            }, c.a.createElement("nav", {
                className: "Tabs-nav",
                style: {
                    zIndex: a
                }
            }, i.map((function(e) {
                var t = e.props
                  , a = t.title
                  , r = t.paneKey;
                return c.a.createElement("button", {
                    key: r,
                    className: o()("Tabs-nav-item", {
                        active: r === (n || b)
                    }),
                    onClick: function() {
                        return n ? s && s(r) : v(r)
                    }
                }, a)
            }
            ))), c.a.createElement("ul", {
                className: "Tabs-content"
            }, i.map((function(e) {
                var t = e.props
                  , a = t.paneKey
                  , s = t.prerender
                  , o = a === (n || b);
                return o || l.current.get(a) || s ? c.a.createElement(r.Fragment, {
                    key: a
                }, Object(r.cloneElement)(e, {
                    active: o
                })) : null
            }
            ))))
        };
        p.TabPane = function(e) {
            var t = e.children
              , n = e.active;
            return c.a.createElement("li", {
                className: o()("Tabpane", {
                    active: n
                })
            }, t)
        }
        ;
        var d = p
          , b = (n(188),
        Object(r.forwardRef)((function(e, t) {
            var n = e.className
              , r = e.onChange
              , s = e.onUpload
              , l = e.message
              , i = Object(a.a)(e, ["className", "onChange", "onUpload", "message"]);
            return c.a.createElement("label", {
                className: "Uploader"
            }, c.a.createElement("input", Object.assign({
                type: "file",
                className: o()("Uploader-input", n),
                ref: t,
                onChange: function(e) {
                    r && r(e),
                    s && s(e.target.files, e),
                    e.target.value = ""
                }
            }, i)), l ? c.a.createElement("p", {
                className: "Uploader-message"
            }, l) : null)
        }
        )));
        b.displayName = "Uploader";
        var v, g, f, j, h, O, E, x, k, y, N = b, C = n(101), w = n(3), S = n(177), I = (n(357),
        n(1)), R = "".concat(I.d, "/assets/image/logo.png"), T = function() {
            var e = Object(S.a)().t
              , t = (new Date).getFullYear();
            return c.a.createElement("footer", {
                className: "Footer"
            }, c.a.createElement("div", {
                className: "Footer-content"
            }, c.a.createElement("div", {
                className: "Footer-brand"
            }, c.a.createElement("a", {
                className: "Footer-logo",
                href: "https://multimedia.tencent.com",
                target: "_blank",
                rel: "noopener noreferrer"
            }, c.a.createElement("img", {
                src: R,
                alt: e(v || (v = Object(w.a)(["lab"])))
            })), c.a.createElement("p", {
                className: "Footer-copyright"
            }, "\xa9 ".concat(t, " ").concat(e(g || (g = Object(w.a)(["lab"])))))), c.a.createElement("div", {
                className: "Footer-info"
            }, c.a.createElement("section", {
                className: "Footer-info-block"
            }, c.a.createElement("h3", {
                className: "Footer-info-title"
            }, e(f || (f = Object(w.a)(["contactUs"])))), c.a.createElement("ul", {
                className: "Footer-info-list"
            }, c.a.createElement("li", null, c.a.createElement("a", {
                href: "mailto:medialab@tencent.com"
            }, "medialab@tencent.com")), c.a.createElement("li", null, c.a.createElement("a", {
                href: "https://multimedia.tencent.com/contact",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "https://multimedia.tencent.com/contact")))))))
        }, V = (n(358),
        function(e) {
            var t = e.size
              , n = e.strokeWidth
              , a = void 0 === n ? 2 : n;
            return c.a.createElement("div", {
                className: "Spinner"
            }, c.a.createElement("svg", {
                className: "Spinner-icon",
                style: {
                    width: t,
                    height: t
                },
                viewBox: "0 0 50 50"
            }, c.a.createElement("circle", {
                className: "Spinner-path",
                cx: "25",
                cy: "25",
                r: "20",
                fill: "none",
                strokeWidth: a
            })))
        }
        ), _ = (n(359),
        function(e) {
            var t = e.keywords;
            return c.a.createElement("div", {
                className: o()("KeywordsResult", {
                    loading: !t
                })
            }, t ? Object.entries(t).map((function(e) {
                var t = Object(u.a)(e, 2)
                  , n = t[0]
                  , a = t[1];
                return c.a.createElement(r.Fragment, {
                    key: "".concat(n).concat(a)
                }, c.a.createElement("span", {
                    className: "KeywordsResult-key"
                }, "".concat(n, "\uff1a")), c.a.createElement("span", {
                    className: "KeywordsResult-value"
                }, a))
            }
            )) : c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "KeywordsResult-key"
            }), c.a.createElement("span", {
                className: "KeywordsResult-value"
            }), c.a.createElement("span", {
                className: "KeywordsResult-key"
            }), c.a.createElement("span", {
                className: "KeywordsResult-value"
            }), c.a.createElement("span", {
                className: "KeywordsResult-key"
            }), c.a.createElement("span", {
                className: "KeywordsResult-value"
            }), c.a.createElement("span", {
                className: "KeywordsResult-key"
            }), c.a.createElement("span", {
                className: "KeywordsResult-value"
            }), c.a.createElement("span", {
                className: "KeywordsResult-key"
            }), c.a.createElement("span", {
                className: "KeywordsResult-value"
            }), c.a.createElement("span", {
                className: "KeywordsResult-key"
            }), c.a.createElement("span", {
                className: "KeywordsResult-value"
            }), c.a.createElement("span", {
                className: "KeywordsResult-key"
            }), c.a.createElement("span", {
                className: "KeywordsResult-value"
            })))
        }
        ), A = (n(360),
        function(e) {
            var t = e.article;
            return c.a.createElement("div", {
                className: o()("ArticlesResult", {
                    loading: !t
                })
            }, t ? t.map((function(e, t) {
                return c.a.createElement(r.Fragment, {
                    key: t
                }, c.a.createElement("span", {
                    className: "ArticlesResult-value"
                }, e))
            }
            )) : c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "ArticlesResult-value"
            }), c.a.createElement("span", {
                className: "ArticlesResult-value"
            }), c.a.createElement("span", {
                className: "ArticlesResult-value"
            })))
        }
        ), M = (n(361),
        function(e) {
            var t = e.results
              , n = Object(S.a)().t;
            return c.a.createElement("div", {
                className: o()("WzryResult", {
                    loading: !t
                })
            }, (null === t || void 0 === t ? void 0 : t.length) ? t.map((function(e, t) {
                return [c.a.createElement(r.Fragment, {
                    key: "time".concat(t)
                }, c.a.createElement("span", {
                    className: "WzryResult-key"
                }, n(j || (j = Object(w.a)(["wzryResult.time"])))), c.a.createElement("span", {
                    className: "WzryResult-value"
                }, "".concat(parseFloat(e.begin).toFixed(1), "s - ").concat(parseFloat(e.end).toFixed(1), "s"))), c.a.createElement(r.Fragment, {
                    key: "tag".concat(t)
                }, c.a.createElement("span", {
                    className: "WzryResult-key"
                }, n(h || (h = Object(w.a)(["wzryResult.tag"])))), c.a.createElement("span", {
                    className: "WzryResult-value"
                }, e.tag.join(", "))), c.a.createElement(r.Fragment, {
                    key: "caption".concat(t)
                }, c.a.createElement("span", {
                    className: "WzryResult-key"
                }, n(O || (O = Object(w.a)(["wzryResult.caption"])))), c.a.createElement("span", {
                    className: "WzryResult-value"
                }, e.caption)), c.a.createElement(r.Fragment, {
                    key: "barrage".concat(t)
                }, c.a.createElement("span", {
                    className: "WzryResult-key"
                }, n(E || (E = Object(w.a)(["wzryResult.barrage"])))), c.a.createElement("span", {
                    className: "WzryResult-value"
                }, e.barrage.join("; ")))]
            }
            )) : c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "WzryResult-key"
            }), c.a.createElement("span", {
                className: "WzryResult-value"
            }), c.a.createElement("span", {
                className: "WzryResult-key"
            }), c.a.createElement("span", {
                className: "WzryResult-value"
            }), c.a.createElement("span", {
                className: "WzryResult-key"
            }), c.a.createElement("span", {
                className: "WzryResult-value"
            }), c.a.createElement("span", {
                className: "WzryResult-key"
            }), c.a.createElement("span", {
                className: "WzryResult-value"
            })))
        }
        ), F = (n(362),
        function(e) {
            var t = e.result
              , n = Object(S.a)().t;
            return c.a.createElement("div", {
                className: o()("LyricsPannel", {
                    loading: !t
                })
            }, t ? [c.a.createElement(r.Fragment, {
                key: "head"
            }, c.a.createElement("span", {
                className: "LyricsPannel-key"
            }, n(x || (x = Object(w.a)(["lyricsPannel.head"])))), c.a.createElement("span", {
                className: "LyricsPannel-value"
            }, "".concat(t.head))), c.a.createElement(r.Fragment, {
                key: "pattern"
            }, c.a.createElement("span", {
                className: "LyricsPannel-key"
            }), c.a.createElement("span", {
                className: "LyricsPannel-value"
            })), c.a.createElement(r.Fragment, {
                key: "lyric$"
            }, c.a.createElement("span", {
                className: "LyricsPannel-key"
            }, n(k || (k = Object(w.a)(["lyricsPannel.lyric"])))), c.a.createElement("span", {
                className: "LyricsPannel-value"
            }, t.lyricResult)), c.a.createElement(r.Fragment, {
                key: "rap"
            }, c.a.createElement("span", {
                className: "LyricsPannel-key"
            }, n(y || (y = Object(w.a)(["lyricsPannel.rap"])))), c.a.createElement("span", {
                className: "LyricsPannel-value"
            }, t.rapResult))] : c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "LyricsPannel-key"
            }), c.a.createElement("span", {
                className: "LyricsPannel-value"
            }), c.a.createElement("span", {
                className: "LyricsPannel-key"
            }), c.a.createElement("span", {
                className: "LyricsPannel-value"
            }), c.a.createElement("span", {
                className: "LyricsPannel-key"
            }), c.a.createElement("span", {
                className: "LyricsPannel-value"
            }), c.a.createElement("span", {
                className: "LyricsPannel-key"
            }), c.a.createElement("span", {
                className: "LyricsPannel-value"
            })))
        }
        ), z = (n(363),
        function(e) {
            var t = e.result;
            return c.a.createElement("div", {
                className: o()("CaptionResult", {
                    loading: !t
                })
            }, t ? c.a.createElement(c.a.Fragment, null, c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "CaptionResult-value"
            }, t))) : c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "CaptionResult-value"
            }), c.a.createElement("span", {
                className: "CaptionResult-value"
            })))
        }
        ), P = n(15), J = n(47), q = n(14), L = function(e) {
            var t = e.children
              , n = Object(a.a)(e, ["children"])
              , r = Object(J.a)()
              , s = r.isAuthenticated
              , o = r.authenticating;
            return c.a.createElement(P.b, Object.assign({}, n, {
                render: function(e) {
                    var n = e.location;
                    return s ? t : o ? c.a.createElement(q.m, null) : c.a.createElement(P.a, {
                        to: {
                            pathname: "/auth",
                            state: {
                                from: n
                            }
                        }
                    })
                }
            }))
        }, B = (n(399),
        Object(r.forwardRef)((function(e, t) {
            var n = e.className
              , r = Object(a.a)(e, ["className"]);
            return c.a.createElement("input", Object.assign({
                className: o()("Input", n),
                ref: t
            }, r))
        }
        )));
        B.displayName = "Input";
        var H, U = B, D = (n(400),
        function(e) {
            var t = e.result
              , n = null === t || void 0 === t ? void 0 : t.map((function(e) {
                return c.a.createElement("div", null, e)
            }
            ));
            return c.a.createElement("div", {
                className: o()("OCRResult", {
                    loading: !t
                })
            }, t ? c.a.createElement(c.a.Fragment, null, c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "OCRResult-value"
            }, n))) : c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "OCRResult-value"
            })))
        }
        ), G = (n(401),
        function(e) {
            var t = e.result
              , n = Object(S.a)().t
              , a = [];
            if (null === t || void 0 === t ? void 0 : t.watermarkInfos)
                for (var s = 0; s < (null === t || void 0 === t ? void 0 : t.watermarkInfos.length); s++)
                    a.push(null === t || void 0 === t ? void 0 : t.watermarkInfos[s].content);
            var l = null === a || void 0 === a ? void 0 : a.map((function(e) {
                return c.a.createElement("div", null, e)
            }
            ));
            return c.a.createElement("div", {
                className: o()("RemoveWatermarkResult", {
                    loading: !t
                })
            }, t ? t.watermarkInfos ? c.a.createElement(c.a.Fragment, null, c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "RemoveWatermarkResult-value"
            }, l))) : c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "RemoveWatermarkResult-value"
            }, n(H || (H = Object(w.a)(["watermarkUnsupported"]))))) : c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "RemoveWatermarkResult-value"
            })))
        }
        ), W = (n(402),
        function(e) {
            var t = e.result
              , n = Object(S.a)("audioTagger").t;
            return c.a.createElement("div", {
                className: o()("AudioTaggerResult", {
                    loading: !t
                })
            }, t ? c.a.createElement(c.a.Fragment, null, c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "AudioTaggerResult-value"
            }, n(t[0].tagType) + ": " + t[0].tag), c.a.createElement("span", {
                className: "AudioTaggerResult-value"
            }, n(t[1].tagType) + ": " + t[1].tag), c.a.createElement("span", {
                className: "AudioTaggerResult-value"
            }, n(t[2].tagType) + ": " + t[2].tag))) : c.a.createElement(r.Fragment, null, c.a.createElement("span", {
                className: "AudioTaggerResult-value"
            })))
        }
        )
    },
    71: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        }
        )),
        n.d(t, "b", (function() {
            return m
        }
        ));
        var a = n(2)
          , r = n.n(a)
          , c = n(7)
          , s = n(4)
          , o = n(0)
          , l = n.n(o)
          , i = n(1)
          , u = l.a.createContext(void 0)
          , m = function(e) {
            var t = e.children
              , n = Object(o.useState)(!1)
              , a = Object(s.a)(n, 2)
              , m = a[0]
              , p = a[1]
              , d = Object(o.useState)(!0)
              , b = Object(s.a)(d, 2)
              , v = b[0]
              , g = b[1];
            return Object(o.useEffect)((function() {
                function e() {
                    return (e = Object(c.a)(r.a.mark((function e() {
                        return r.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Object(i.r)().post(i.g, {
                                        product: "SmartContent"
                                    }).catch((function(e) {
                                        var t = e.response;
                                        if (t && 503 === t.status)
                                            throw t.data
                                    }
                                    ));
                                case 3:
                                    return e.next = 5,
                                    Object(i.r)().post(i.n, {
                                        access_code: i.o,
                                        action: "Validate",
                                        product: "SmartContent_Demo",
                                        jwt: localStorage.getItem("jwt")
                                    });
                                case 5:
                                    return e.t0 = localStorage,
                                    e.next = 8,
                                    Object(i.r)().post(i.e, {
                                        userId: localStorage.getItem("userId")
                                    });
                                case 8:
                                    e.t1 = e.sent.data,
                                    e.t0.setItem.call(e.t0, "config", e.t1),
                                    p(!0),
                                    e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13,
                                    e.t2 = e.catch(0),
                                    console.log(e.t2);
                                case 16:
                                    g(!1);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 13]])
                    }
                    )))).apply(this, arguments)
                }
                !function() {
                    e.apply(this, arguments)
                }()
            }
            ), []),
            l.a.createElement(u.Provider, {
                value: {
                    isAuthenticated: m,
                    authenticating: v,
                    setIsAuthenticated: p
                }
            }, t)
        }
    }
}, [[178, 1, 2]]]);
//# sourceMappingURL=main.50b16514.chunk.js.map
