(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5021], {
        9099: function (t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function () {
                    return T
                }
            });
            var r = i(46096),
                a = i(13168),
                o = i(49478),
                s = i(85746),
                l = i(46760),
                n = i(69083),
                c = i(2592),
                u = i(25467),
                m = i(71588),
                x = i(95989),
                h = i(67294),
                d = i(2962),
                p = i(50725),
                f = i(5152),
                C = i(22338),
                b = i(28110),
                g = i(32670),
                w = i(87619),
                M = i(85893),
                v = (0, f.default)((function () {
                    return i.e(6813).then(i.bind(i, 16813))
                }), {
                    loadableGenerated: {
                        webpack: function () {
                            return [16813]
                        }
                    }
                });

            function T() {
                var t = (0, h.useState)(!1),
                    e = t[0],
                    i = t[1],
                    f = (0, h.useState)(!1),
                    T = f[0],
                    _ = f[1],
                    S = (0, h.useContext)(p.CourseContext).courses.find((function (t) {
                        return "basic-c-sharp" === t.key
                    })),
                    I = {
                        banner: {
                            name: S.name,
                            video: {
                                text: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u0448\u0435\u0433\u043e \u0443\u0440\u043e\u043a\u0430 \u043f\u043e C#",
                                preview: "baner__video__box__preview-charp",
                                ym: "video_click_sharp",
                                link: "https://www.youtube.com/embed/y_KltG3Rc1c"
                            },
                            subTitle: "\u042f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f C#",
                            textPart1: "C# \u2014 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0442\u0438\u043f\u043e\u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u0438 \u043d\u0430\u0434\u0451\u0436\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u0432 \u044d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u0435 .NET.",
                            textPart2: "\u041a\u0443\u0440\u0441 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043d\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0438 \u043d\u0430 \u0442\u0435\u0445, \u043a\u0442\u043e \u0445\u043e\u0447\u0435\u0442 \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0431\u0430\u0437\u0443 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0438 \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u043d\u0430\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0432\u0430\u043c \u043f\u0440\u0435\u0442\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0442\u0430\u0436\u0451\u0440\u0441\u043a\u0438\u0435 \u0438 junior-\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445.",
                            list: ["\u0422\u043e\u043b\u044c\u043a\u043e \u201c\u0436\u0438\u0432\u043e\u0435\u201d \u043e\u043d\u043b\u0430\u0439\u043d-\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c \u0441 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u043c", "\u0417\u0430\u043d\u044f\u0442\u0438\u044f \u0432 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0433\u0440\u0443\u043f\u043f\u0430\u0445 \u0441 \u0436\u0438\u0432\u043e\u0439 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u044c\u044e", "\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 middle/senior \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u0432", "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 IT Школа WinPoWer \u0438\u043b\u0438 \u0443 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0439-\u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432", "\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043a\u0443\u043f\u0438\u0442\u044c \u043a\u0443\u0440\u0441 \u0432 \u0440\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0443 \u0434\u043e 36 \u043c\u0435\u0441\u044f\u0446\u0435\u0432"],
                            vacancies: [{
                                title: "4000+",
                                text: "\u0412\u044b\u043f\u0443\u0441\u043a\u043d\u0438\u043a\u043e\u0432 \u0423\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430 IT Школа WinPoWer"
                            }, {
                                title: "75%",
                                text: "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0438 \u043d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b \u0438 \u043d\u0430\u0448\u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"
                            }, {
                                title: "80%",
                                text: "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442 100000+ \u0440\u0443\u0431. \u0447\u0435\u0440\u0435\u0437 1,5 \u0433\u043e\u0434\u0430 \u043f\u043e\u0441\u043b\u0435 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"
                            }]
                        },
                        vacancies: {
                            title: "\u0412\u043e\u0441\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u044b \u043b\u0438 C#-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438?",
                            text: "\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 hh.ru \u043e\u0442\u043a\u0440\u044b\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 5 300 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439 C#-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432. \u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u043d\u0443\u0436\u043d\u044b \u043c\u043d\u043e\u0433\u0438\u043c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u043c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443, \u043e\u0441\u0432\u043e\u0438\u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0432\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0432\u044b\u0441\u043e\u043a\u043e\u043e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0435\u043c\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443. \u0417\u0430\u0440\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0432\u0438\u043b\u043a\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442 70 000 \u0434\u043e 250 000 \u0440\u0443\u0431\u043b\u0435\u0439, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0441 \u043e\u043f\u044b\u0442\u043e\u043c \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 330 000 \u0440\u0443\u0431\u043b\u0435\u0439.",
                            list: [{
                                title: "2 600",
                                text: "\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0439 C#-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432"
                            }, {
                                title: "\u0434\u043e 250 \u0442.\u0440.",
                                text: "\u0417/\u041f  \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430 \u043f\u043e\u0441\u043b\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 IT Школа WinPoWer"
                            }, {
                                title: "330 \u0442.\u0440.",
                                text: "\u041c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0441 \u043e\u043f\u044b\u0442\u043e\u043c"
                            }]
                        },
                        program: {
                            url: "/learnPrograms/basic-c-sharp.pdf",
                            structure: {
                                title: "\u041a\u0430\u043a \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u043a\u0443\u0440\u0441 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 C# (\u0441\u0438 \u0448\u0430\u0440\u043f)?",
                                list: [{
                                    title: "\u041e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u043a \u0441\u043b\u043e\u0436\u043d\u043e\u043c\u0443 ",
                                    text: "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0432\u044b\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0432 \u043e\u0441\u043d\u043e\u0432\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0431\u044b\u043b\u043e \u043f\u043b\u0430\u0432\u043d\u044b\u043c \u0438 \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u044b\u043c. "
                                }, {
                                    title: "\u041c\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0445 \u0437\u0430\u0434\u0430\u043d\u0438\u0439 ",
                                    text: "\u041a\u0430\u0436\u0434\u0443\u044e \u0442\u0435\u043c\u0443 \u043c\u044b \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u044f\u0435\u043c \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435."
                                }, {
                                    title: "\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0437\u043d\u0430\u043d\u0438\u0439",
                                    text: "\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0430 C# \u0432\u044b \u043f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u0438 \u0441\u0434\u0430\u0434\u0438\u0442\u0435 \u044d\u043a\u0437\u0430\u043c\u0435\u043d."
                                }, {
                                    title: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430",
                                    text: "\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b, \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u043a\u043e\u043d\u0447\u0438\u0432\u0448\u0438\u0435 \u043a\u0443\u0440\u0441\u044b, \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u043e\u0439\u0442\u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443 \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438 \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430\u0434 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c."
                                }, {
                                    title: "\u0422\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e",
                                    text: "\u041f\u043e\u0441\u043b\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 HR \u0438\u0437 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0441 \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u043f\u0435\u0440\u0432\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 IT \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0444\u0444\u0435\u0440\u0430."
                                }]
                            },
                            list: [{
                                subTitle: "\u0418\u0437\u0443\u0447\u0438\u0442\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 C#"
                            }, {
                                subTitle: "\u0423\u0437\u043d\u0430\u0435\u0442\u0435 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u044f\u0437\u044b\u043a\u0430"
                            }, {
                                subTitle: "\u0423\u0437\u043d\u0430\u0435\u0442\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445"
                            }, {
                                subTitle: "\u0418\u0437\u0443\u0447\u0438\u0442\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0438 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b"
                            }, {
                                subTitle: "\u041f\u043e\u0439\u043c\u0435\u0442\u0435 \u043f\u0430\u0440\u0430\u0434\u0438\u0433\u043c\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"
                            }, {
                                subTitle: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u043f\u044b\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 C#"
                            }, {
                                subTitle: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0411\u0414 \u0438 ORM Entity Framework"
                            }, {
                                subTitle: "\u041d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0432\u0435\u0440\u0441\u0438\u0439 Git"
                            }]
                        },
                        favor: [{
                            title: "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c, \u0436\u0435\u043b\u0430\u044e\u0449\u0438\u043c \u0432\u044b\u0443\u0447\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u044f\u0437\u044b\u043a",
                            img: "/images/course-favor-1.svg"
                        }, {
                            title: "\u041d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u043c C#-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c ",
                            img: "/images/course-favor-2.svg"
                        }, {
                            title: "\u0422\u0435\u043c, \u043a\u0442\u043e \u0445\u043e\u0447\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c backend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c\u0438 ",
                            img: "/images/course-favor-3.svg"
                        }],
                        question: {
                            title: "\u041d\u0443\u0436\u043d\u043e \u043b\u0438 \u0437\u043d\u0430\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u0430? ",
                            textPart1: "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043a\u0443\u0440\u0441\u0430 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u0430 \u043d\u0430 \u0441\u043b\u0443\u0448\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043d\u0443\u043b\u0435\u0432\u044b\u043c \u0438\u043b\u0438 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u043c \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u0437\u043d\u0430\u043d\u0438\u0439. \u0422\u0435\u043c, \u043a\u0442\u043e \u0432\u043b\u0430\u0434\u0435\u0435\u0442 \u043e\u0441\u043d\u043e\u0432\u0430\u043c\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043b\u0435\u0433\u0447\u0435.",
                            textPart2: "\u041d\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0441\u0442\u0443\u043f\u0430\u0435\u0442\u0435 \u043d\u0430 IT-\u043f\u0443\u0442\u044c \u0438 \u0435\u0449\u0451 \u043d\u0435 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043d\u0430\u0432\u044b\u043a\u0430\u043c\u0438, \u0442\u043e \u043d\u0430 \u043a\u0443\u0440\u0441\u0435 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c \u0434\u0430\u0441\u0442 \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0431\u0430\u0437\u0443 \u0437\u043d\u0430\u043d\u0438\u0439. \u0414\u043b\u044f \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u0436\u0434\u0443\u0442 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044f. "
                        },
                        teacher: {
                            title: "\u041e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 C# ",
                            list: [{
                                name: "\u0422\u0438\u043c\u0443\u0440 \u042f\u043b\u0447\u0438\u0431\u0430\u0435\u0432 ",
                                experience: "\u0411\u043e\u043b\u0435\u0435 7 \u043b\u0435\u0442 \u043e\u043f\u044b\u0442\u0430 \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438",
                                title: null,
                                text: null,
                                listExperience: ["\u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u044e \u0442\u0438\u043c\u043b\u0438\u0434\u0430 \u0432 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0438\u0433\u0440;", "\u041d\u0430\u0447\u0438\u043d\u0430\u043b \u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f desktop-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 WPF, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430;", "\u0427\u0435\u0440\u0435\u0437 \u0433\u043e\u0434 \u043f\u0435\u0440\u0435\u0448\u0451\u043b \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u0438\u0433\u0440\u043e\u0432\u043e\u043c \u0434\u0432\u0438\u0436\u043a\u0435 Unity;", "\u041d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0432\u0435\u0434\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0437\u0430\u043d\u0438\u043c\u0430\u043b\u0441\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0431\u044d\u043a\u0435\u043d\u0434\u0430 \u0434\u043b\u044f \u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u043e\u0432\u043e\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b."],
                                img: "/images/teacherCh1.webp"
                            }]
                        },
                        after: [{
                            title: "\u0412\u0440\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u043e\u0432, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e\u0449\u0438\u0445, \u0447\u0442\u043e \u0432\u044b \u043f\u0440\u043e\u0448\u043b\u0438 \u043a\u0443\u0440\u0441 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0431\u0430\u0437\u0443 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0438 \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u043d\u0430\u043d\u0438\u0439 \u043f\u043e C# ",
                            img: "/images/course-after-1.png"
                        }, {
                            title: "\u041b\u0443\u0447\u0448\u0438\u0435 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b \u0441\u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u043e\u0439\u0442\u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443 \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 IT Школа WinPoWer \u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445-\u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430\u0445 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 Junior C#-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 ",
                            img: "/images/course-after-2.png"
                        }, {
                            title: "\u0421\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 ",
                            img: "/images/course-after-3.png"
                        }],
                        offer: {
                            price: S.price,
                            cost: {
                                price: S.price,
                                title: "\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043a\u0443\u0440\u0441\u0430 \u043f\u0440\u0438 \u0440\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0435 \u043d\u0430 12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432"
                            },
                            duration: {
                                duration: S.duration,
                                title: "\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043a\u0443\u0440\u0441\u0430"
                            },
                            installment: {
                                installment: "\u0414\u043e 36",
                                title: "\u041c\u0435\u0441\u044f\u0446\u0435\u0432 - \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430\u044f \u0440\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 "
                            },
                            start: S.start,
                            donabor: S.donabor
                        }
                    };
                return (0, M.jsxs)("div", {
                    className: "",
                    children: [(0, M.jsx)(d.PB, {
                        title: "\u041e\u043d\u043b\u0430\u0439\u043d \u043a\u0443\u0440\u0441 \xab\u041e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 C#\xbb: \u043a\u0443\u0440\u0441 \u043d\u0430 C Sharp \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0441 \u043d\u0443\u043b\u044f \u043e\u043d\u043b\u0430\u0439\u043d - IT Школа WinPoWer",
                        description: "\u041e\u043d\u043b\u0430\u0439\u043d-\u043a\u0443\u0440\u0441 \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u043d\u0430 C Sharp \xab\u041e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 C#\xbb \u043e\u0442 IT Школа WinPoWer. \u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0421\u0438 \u0428\u0430\u0440\u043f \u0432 \u041c\u043e\u0441\u043a\u0432\u0435, \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435, \u0432 \u043b\u044e\u0431\u043e\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 \u0420\u043e\u0441\u0441\u0438\u0438. \u0412\u0440\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u043e\u0432. \u0421\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",
                        canonical: "https://maxima.school/basic-c-sharp",
                        openGraph: {
                            title: "\u041e\u043d\u043b\u0430\u0439\u043d \u043a\u0443\u0440\u0441 \xab\u041e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 C#\xbb: \u043a\u0443\u0440\u0441 \u043d\u0430 C Sharp \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0441 \u043d\u0443\u043b\u044f \u043e\u043d\u043b\u0430\u0439\u043d - IT Школа WinPoWer",
                            description: "\u041e\u043d\u043b\u0430\u0439\u043d-\u043a\u0443\u0440\u0441 \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u043d\u0430 C Sharp \xab\u041e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 C#\xbb \u043e\u0442 IT Школа WinPoWer. \u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0421\u0438 \u0428\u0430\u0440\u043f \u0432 \u041c\u043e\u0441\u043a\u0432\u0435, \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435, \u0432 \u043b\u044e\u0431\u043e\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 \u0420\u043e\u0441\u0441\u0438\u0438. \u0412\u0440\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u043e\u0432. \u0421\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435."
                        }
                    }), (0, M.jsx)(r.Z, {}), (0, M.jsx)(o.Z, {
                        baner: I.banner,
                        setShowFormModal: i,
                        setShowDemoCourseModal: _
                    }), (0, M.jsx)(l.Z, {
                        vacancies: I.vacancies,
                        setShowFormModal: i
                    }), (0, M.jsx)(C.Z, {}), (0, M.jsx)(b.Z, {
                        structure: I.program.structure
                    }), (0, M.jsx)(n.Z, {
                        program: I.program
                    }), (0, M.jsx)(c.Z, {
                        favor: I.favor,
                        setShowDemoCourseModal: _,
                        setShowFormModal: i,
                        favorText1: "\u041d\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u2014 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0443\u0447\u0438\u0442\u044c \u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0434, \u0430 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u043a \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435. \u0418\u043c\u0435\u043d\u043d\u043e \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 Gitlab, \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0432\u0435\u0440\u0441\u0438\u0439. \u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b \u0441 \u043f\u0435\u0440\u0432\u044b\u0445 \u0437\u0430\u043d\u044f\u0442\u0438\u0439 \u043f\u043e\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044e git-flow \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u0434 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u043c\u0438 \u0438 \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u043c\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438.",
                        favorText2: "\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0430\u0441 \u0436\u0434\u0443\u0442: \u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438, Git, \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 C#. \u0417\u0430\u0442\u0435\u043c \u0432\u044b \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u0435\u0441\u044c \u0441\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0430\u043c\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043e\u0434\u0430, \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c\u0438 \u041e\u041e\u041f, \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e, \u043e\u0441\u0432\u043e\u0438\u0442\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u044b\u0435 \u0432 \u043e\u0442\u0440\u0430\u0441\u043b\u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u0438 \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u0445, \u043f\u0440\u043e\u0434\u0443\u043c\u044b\u0432\u0430\u0442\u044c \u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0443\u044e \u043b\u043e\u0433\u0438\u043a\u0443, \u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
                        title: "\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438 C#-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0432 \u0423\u0447\u0435\u0431\u043d\u043e\u043c \u0446\u0435\u043d\u0442\u0440\u0435 IT Школа WinPoWer"
                    }), (0, M.jsx)(u.Z, {
                        teacher: I.teacher
                    }), (0, M.jsx)(m.Z, {
                        afterItem: I.after
                    }), (0, M.jsx)(x.Z, {
                        offer: I.offer,
                        setShowFormModal: i,
                        setShowDemoCourseModal: _
                    }), (0, M.jsx)(s.Z, {}), (0, M.jsx)(a.Z, {}), (0, M.jsx)(v, {
                        modal: {
                            showFormModal: e,
                            setShowFormModal: i,
                            modalContent: g.I.basicQa
                        }
                    }), (0, M.jsx)(w.Z, {
                        modal: {
                            showFormModal: T,
                            setShowFormModal: _
                        }
                    })]
                })
            }
        },
        791: function (t, e, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/basic-c-sharp", function () {
                return i(9099)
            }])
        }
    },
    function (t) {
        t.O(0, [3247, 9612, 4081, 1033, 8838, 3420, 8805, 9233, 4950, 1763, 3421, 1361, 8486, 5170, 9774, 2888, 179], (function () {
            return e = 791, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);