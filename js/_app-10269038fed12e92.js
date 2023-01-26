(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        26747: function (e, t) {
            "use strict";
            t.Z = function (e, t) {
                var n;
                void 0 === t && (t = "localhost:3000");
                var r = ((null === (n = e) || void 0 === n ? void 0 : n.headers) ? e.headers.host : window.location.host) || t,
                    o = /^localhost(:\d+)?$/.test(r) ? "http:" : "https:";
                return e && e.headers["x-forwarded-host"] && "string" === typeof e.headers["x-forwarded-host"] && (r = e.headers["x-forwarded-host"]), e && e.headers["x-forwarded-proto"] && "string" === typeof e.headers["x-forwarded-proto"] && (o = e.headers["x-forwarded-proto"] + ":"), {
                    protocol: o,
                    host: r,
                    origin: o + "//" + r
                }
            }
        },
        2962: function (e, t, n) {
            "use strict";
            n.d(t, {
                PB: function () {
                    return p
                },
                lX: function () {
                    return s
                }
            });
            var r = n(9008),
                o = n(67294);

            function a() {
                return a = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, a.apply(this, arguments)
            }

            function i(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }
            var c = {
                    templateTitle: "",
                    noindex: !1,
                    nofollow: !1,
                    defaultOpenGraphImageWidth: 0,
                    defaultOpenGraphImageHeight: 0,
                    defaultOpenGraphVideoWidth: 0,
                    defaultOpenGraphVideoHeight: 0
                },
                l = function (e, t, n) {
                    void 0 === t && (t = []);
                    var r = void 0 === n ? {} : n,
                        a = r.defaultWidth,
                        i = r.defaultHeight;
                    return t.reduce((function (t, n, r) {
                        return t.push(o.createElement("meta", {
                            key: "og:" + e + ":0" + r,
                            property: "og:" + e,
                            content: n.url
                        })), n.alt && t.push(o.createElement("meta", {
                            key: "og:" + e + ":alt0" + r,
                            property: "og:" + e + ":alt",
                            content: n.alt
                        })), n.secureUrl && t.push(o.createElement("meta", {
                            key: "og:" + e + ":secure_url0" + r,
                            property: "og:" + e + ":secure_url",
                            content: n.secureUrl.toString()
                        })), n.type && t.push(o.createElement("meta", {
                            key: "og:" + e + ":type0" + r,
                            property: "og:" + e + ":type",
                            content: n.type.toString()
                        })), n.width ? t.push(o.createElement("meta", {
                            key: "og:" + e + ":width0" + r,
                            property: "og:" + e + ":width",
                            content: n.width.toString()
                        })) : a && t.push(o.createElement("meta", {
                            key: "og:" + e + ":width0" + r,
                            property: "og:" + e + ":width",
                            content: a.toString()
                        })), n.height ? t.push(o.createElement("meta", {
                            key: "og:" + e + ":height" + r,
                            property: "og:" + e + ":height",
                            content: n.height.toString()
                        })) : i && t.push(o.createElement("meta", {
                            key: "og:" + e + ":height" + r,
                            property: "og:" + e + ":height",
                            content: i.toString()
                        })), t
                    }), [])
                },
                u = function (e) {
                    var t, n, r, i = [];
                    e.titleTemplate && (c.templateTitle = e.titleTemplate);
                    var u = "";
                    e.title ? (u = e.title, c.templateTitle && (u = c.templateTitle.replace(/%s/g, (function () {
                        return u
                    })))) : e.defaultTitle && (u = e.defaultTitle), u && i.push(o.createElement("title", {
                        key: "title"
                    }, u));
                    var s, p, f = e.noindex || c.noindex || e.dangerouslySetAllPagesToNoIndex,
                        d = e.nofollow || c.nofollow || e.dangerouslySetAllPagesToNoFollow,
                        h = "";
                    if (e.robotsProps) {
                        var g = e.robotsProps,
                            m = g.nosnippet,
                            y = g.maxSnippet,
                            v = g.maxImagePreview,
                            b = g.maxVideoPreview,
                            w = g.noarchive,
                            O = g.noimageindex,
                            k = g.notranslate,
                            j = g.unavailableAfter;
                        h = (m ? ",nosnippet" : "") + (y ? ",max-snippet:" + y : "") + (v ? ",max-image-preview:" + v : "") + (w ? ",noarchive" : "") + (j ? ",unavailable_after:" + j : "") + (O ? ",noimageindex" : "") + (b ? ",max-video-preview:" + b : "") + (k ? ",notranslate" : "")
                    }(f || d ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0), i.push(o.createElement("meta", {
                        key: "robots",
                        name: "robots",
                        content: (f ? "noindex" : "index") + "," + (d ? "nofollow" : "follow") + h
                    }))) : i.push(o.createElement("meta", {
                        key: "robots",
                        name: "robots",
                        content: "index,follow" + h
                    })), e.description && i.push(o.createElement("meta", {
                        key: "description",
                        name: "description",
                        content: e.description
                    })), e.mobileAlternate && i.push(o.createElement("link", {
                        rel: "alternate",
                        key: "mobileAlternate",
                        media: e.mobileAlternate.media,
                        href: e.mobileAlternate.href
                    })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach((function (e) {
                        i.push(o.createElement("link", {
                            rel: "alternate",
                            key: "languageAlternate-" + e.hrefLang,
                            hrefLang: e.hrefLang,
                            href: e.href
                        }))
                    })), e.twitter && (e.twitter.cardType && i.push(o.createElement("meta", {
                        key: "twitter:card",
                        name: "twitter:card",
                        content: e.twitter.cardType
                    })), e.twitter.site && i.push(o.createElement("meta", {
                        key: "twitter:site",
                        name: "twitter:site",
                        content: e.twitter.site
                    })), e.twitter.handle && i.push(o.createElement("meta", {
                        key: "twitter:creator",
                        name: "twitter:creator",
                        content: e.twitter.handle
                    }))), e.facebook && e.facebook.appId && i.push(o.createElement("meta", {
                        key: "fb:app_id",
                        property: "fb:app_id",
                        content: e.facebook.appId
                    })), null != (t = e.openGraph) && t.title || u) && i.push(o.createElement("meta", {
                        key: "og:title",
                        property: "og:title",
                        content: (null == (s = e.openGraph) ? void 0 : s.title) || u
                    }));
                    (null != (n = e.openGraph) && n.description || e.description) && i.push(o.createElement("meta", {
                        key: "og:description",
                        property: "og:description",
                        content: (null == (p = e.openGraph) ? void 0 : p.description) || e.description
                    }));
                    if (e.openGraph) {
                        if ((e.openGraph.url || e.canonical) && i.push(o.createElement("meta", {
                                key: "og:url",
                                property: "og:url",
                                content: e.openGraph.url || e.canonical
                            })), e.openGraph.type) {
                            var x = e.openGraph.type.toLowerCase();
                            i.push(o.createElement("meta", {
                                key: "og:type",
                                property: "og:type",
                                content: x
                            })), "profile" === x && e.openGraph.profile ? (e.openGraph.profile.firstName && i.push(o.createElement("meta", {
                                key: "profile:first_name",
                                property: "profile:first_name",
                                content: e.openGraph.profile.firstName
                            })), e.openGraph.profile.lastName && i.push(o.createElement("meta", {
                                key: "profile:last_name",
                                property: "profile:last_name",
                                content: e.openGraph.profile.lastName
                            })), e.openGraph.profile.username && i.push(o.createElement("meta", {
                                key: "profile:username",
                                property: "profile:username",
                                content: e.openGraph.profile.username
                            })), e.openGraph.profile.gender && i.push(o.createElement("meta", {
                                key: "profile:gender",
                                property: "profile:gender",
                                content: e.openGraph.profile.gender
                            }))) : "book" === x && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach((function (e, t) {
                                i.push(o.createElement("meta", {
                                    key: "book:author:0" + t,
                                    property: "book:author",
                                    content: e
                                }))
                            })), e.openGraph.book.isbn && i.push(o.createElement("meta", {
                                key: "book:isbn",
                                property: "book:isbn",
                                content: e.openGraph.book.isbn
                            })), e.openGraph.book.releaseDate && i.push(o.createElement("meta", {
                                key: "book:release_date",
                                property: "book:release_date",
                                content: e.openGraph.book.releaseDate
                            })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach((function (e, t) {
                                i.push(o.createElement("meta", {
                                    key: "book:tag:0" + t,
                                    property: "book:tag",
                                    content: e
                                }))
                            }))) : "article" === x && e.openGraph.article ? (e.openGraph.article.publishedTime && i.push(o.createElement("meta", {
                                key: "article:published_time",
                                property: "article:published_time",
                                content: e.openGraph.article.publishedTime
                            })), e.openGraph.article.modifiedTime && i.push(o.createElement("meta", {
                                key: "article:modified_time",
                                property: "article:modified_time",
                                content: e.openGraph.article.modifiedTime
                            })), e.openGraph.article.expirationTime && i.push(o.createElement("meta", {
                                key: "article:expiration_time",
                                property: "article:expiration_time",
                                content: e.openGraph.article.expirationTime
                            })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach((function (e, t) {
                                i.push(o.createElement("meta", {
                                    key: "article:author:0" + t,
                                    property: "article:author",
                                    content: e
                                }))
                            })), e.openGraph.article.section && i.push(o.createElement("meta", {
                                key: "article:section",
                                property: "article:section",
                                content: e.openGraph.article.section
                            })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach((function (e, t) {
                                i.push(o.createElement("meta", {
                                    key: "article:tag:0" + t,
                                    property: "article:tag",
                                    content: e
                                }))
                            }))) : "video.movie" !== x && "video.episode" !== x && "video.tv_show" !== x && "video.other" !== x || !e.openGraph.video || (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach((function (e, t) {
                                e.profile && i.push(o.createElement("meta", {
                                    key: "video:actor:0" + t,
                                    property: "video:actor",
                                    content: e.profile
                                })), e.role && i.push(o.createElement("meta", {
                                    key: "video:actor:role:0" + t,
                                    property: "video:actor:role",
                                    content: e.role
                                }))
                            })), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach((function (e, t) {
                                i.push(o.createElement("meta", {
                                    key: "video:director:0" + t,
                                    property: "video:director",
                                    content: e
                                }))
                            })), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach((function (e, t) {
                                i.push(o.createElement("meta", {
                                    key: "video:writer:0" + t,
                                    property: "video:writer",
                                    content: e
                                }))
                            })), e.openGraph.video.duration && i.push(o.createElement("meta", {
                                key: "video:duration",
                                property: "video:duration",
                                content: e.openGraph.video.duration.toString()
                            })), e.openGraph.video.releaseDate && i.push(o.createElement("meta", {
                                key: "video:release_date",
                                property: "video:release_date",
                                content: e.openGraph.video.releaseDate
                            })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach((function (e, t) {
                                i.push(o.createElement("meta", {
                                    key: "video:tag:0" + t,
                                    property: "video:tag",
                                    content: e
                                }))
                            })), e.openGraph.video.series && i.push(o.createElement("meta", {
                                key: "video:series",
                                property: "video:series",
                                content: e.openGraph.video.series
                            })))
                        }
                        e.defaultOpenGraphImageWidth && (c.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (c.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && i.push.apply(i, l("image", e.openGraph.images, {
                            defaultWidth: c.defaultOpenGraphImageWidth,
                            defaultHeight: c.defaultOpenGraphImageHeight
                        })), e.defaultOpenGraphVideoWidth && (c.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (c.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && i.push.apply(i, l("video", e.openGraph.videos, {
                            defaultWidth: c.defaultOpenGraphVideoWidth,
                            defaultHeight: c.defaultOpenGraphVideoHeight
                        })), e.openGraph.locale && i.push(o.createElement("meta", {
                            key: "og:locale",
                            property: "og:locale",
                            content: e.openGraph.locale
                        })), e.openGraph.site_name && i.push(o.createElement("meta", {
                            key: "og:site_name",
                            property: "og:site_name",
                            content: e.openGraph.site_name
                        }))
                    }
                    return e.canonical && i.push(o.createElement("link", {
                        rel: "canonical",
                        href: e.canonical,
                        key: "canonical"
                    })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach((function (e) {
                        var t, n, r;
                        i.push(o.createElement("meta", a({
                            key: "meta:" + (null != (t = null != (n = null != (r = e.keyOverride) ? r : e.name) ? n : e.property) ? t : e.httpEquiv)
                        }, e)))
                    })), null != (r = e.additionalLinkTags) && r.length && e.additionalLinkTags.forEach((function (e) {
                        var t;
                        i.push(o.createElement("link", a({
                            key: "link" + (null != (t = e.keyOverride) ? t : e.href) + e.rel
                        }, e)))
                    })), i
                },
                s = function (e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i(t, e), t.prototype.render = function () {
                        var e = this.props,
                            t = e.title,
                            n = e.titleTemplate,
                            a = e.defaultTitle,
                            i = e.dangerouslySetAllPagesToNoIndex,
                            c = void 0 !== i && i,
                            l = e.dangerouslySetAllPagesToNoFollow,
                            s = void 0 !== l && l,
                            p = e.description,
                            f = e.canonical,
                            d = e.facebook,
                            h = e.openGraph,
                            g = e.additionalMetaTags,
                            m = e.twitter,
                            y = e.defaultOpenGraphImageWidth,
                            v = e.defaultOpenGraphImageHeight,
                            b = e.defaultOpenGraphVideoWidth,
                            w = e.defaultOpenGraphVideoHeight,
                            O = e.mobileAlternate,
                            k = e.languageAlternates,
                            j = e.additionalLinkTags,
                            x = e.robotsProps;
                        return o.createElement(r.default, null, u({
                            title: t,
                            titleTemplate: n,
                            defaultTitle: a,
                            dangerouslySetAllPagesToNoIndex: c,
                            dangerouslySetAllPagesToNoFollow: s,
                            description: p,
                            canonical: f,
                            facebook: d,
                            openGraph: h,
                            additionalMetaTags: g,
                            twitter: m,
                            defaultOpenGraphImageWidth: y,
                            defaultOpenGraphImageHeight: v,
                            defaultOpenGraphVideoWidth: b,
                            defaultOpenGraphVideoHeight: w,
                            mobileAlternate: O,
                            languageAlternates: k,
                            additionalLinkTags: j,
                            robotsProps: x
                        }))
                    }, t
                }(o.Component),
                p = function (e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i(t, e), t.prototype.render = function () {
                        var e = this.props,
                            t = e.title,
                            n = e.noindex,
                            a = void 0 !== n && n,
                            i = e.nofollow,
                            c = e.robotsProps,
                            l = e.description,
                            s = e.canonical,
                            p = e.openGraph,
                            f = e.facebook,
                            d = e.twitter,
                            h = e.additionalMetaTags,
                            g = e.titleTemplate,
                            m = e.defaultTitle,
                            y = e.mobileAlternate,
                            v = e.languageAlternates,
                            b = e.additionalLinkTags;
                        return o.createElement(r.default, null, u({
                            title: t,
                            noindex: a,
                            nofollow: i,
                            robotsProps: c,
                            description: l,
                            canonical: s,
                            facebook: f,
                            openGraph: p,
                            additionalMetaTags: h,
                            twitter: d,
                            titleTemplate: g,
                            defaultTitle: m,
                            mobileAlternate: y,
                            languageAlternates: v,
                            additionalLinkTags: b
                        }))
                    }, t
                }(o.Component),
                f = Object.freeze({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&apos;"
                });
            new RegExp("[" + Object.keys(f).join("") + "]", "g")
        },
        29938: function (e, t, n) {
            "use strict";
            var r = n(930),
                o = n(85696),
                a = n(7980);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                var t, n = e.src,
                    i = e.sizes,
                    c = e.unoptimized,
                    d = void 0 !== c && c,
                    h = e.priority,
                    w = void 0 !== h && h,
                    E = e.loading,
                    S = e.lazyRoot,
                    _ = void 0 === S ? null : S,
                    A = e.lazyBoundary,
                    G = void 0 === A ? "200px" : A,
                    T = e.className,
                    I = e.quality,
                    D = e.width,
                    C = e.height,
                    M = e.style,
                    N = e.objectFit,
                    z = e.objectPosition,
                    L = e.onLoadingComplete,
                    R = (e.onError, e.placeholder),
                    q = void 0 === R ? "empty" : R,
                    B = e.blurDataURL,
                    W = m(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "onError", "placeholder", "blurDataURL"]),
                    V = l.useContext(f.ImageConfigContext),
                    H = l.useMemo((function () {
                        var e = y || V || s.imageConfigDefault,
                            t = [].concat(a(e.deviceSizes), a(e.imageSizes)).sort((function (e, t) {
                                return e - t
                            })),
                            n = e.deviceSizes.sort((function (e, t) {
                                return e - t
                            }));
                        return g({}, e, {
                            allSizes: t,
                            deviceSizes: n
                        })
                    }), [V]),
                    F = W,
                    Z = i ? "responsive" : "intrinsic";
                "layout" in F && (F.layout && (Z = F.layout), delete F.layout);
                var U = x;
                if ("loader" in F) {
                    if (F.loader) {
                        var $ = F.loader;
                        U = function (e) {
                            e.config;
                            var t = m(e, ["config"]);
                            return $(t)
                        }
                    }
                    delete F.loader
                }
                var J = "";
                if (function (e) {
                        return "object" === typeof e && (O(e) || function (e) {
                            return void 0 !== e.src
                        }(e))
                    }(n)) {
                    var X = O(n) ? n.default : n;
                    if (!X.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));
                    if (B = B || X.blurDataURL, J = X.src, (!Z || "fill" !== Z) && (C = C || X.height, D = D || X.width, !X.height || !X.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))
                }
                n = "string" === typeof n ? n : J;
                var K = j(D),
                    Y = j(C),
                    Q = j(I),
                    ee = !w && ("lazy" === E || "undefined" === typeof E);
                (n.startsWith("data:") || n.startsWith("blob:")) && (d = !0, ee = !1);
                v.has(n) && (ee = !1);
                var te, ne = l.useState(!1),
                    re = o(ne, 2),
                    oe = re[0],
                    ae = re[1],
                    ie = p.useIntersection({
                        rootRef: _,
                        rootMargin: G,
                        disabled: !ee
                    }),
                    ce = o(ie, 3),
                    le = ce[0],
                    ue = ce[1],
                    se = ce[2],
                    pe = !ee || ue,
                    fe = {
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    de = {
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    he = !1,
                    ge = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: N,
                        objectPosition: z
                    };
                0;
                0;
                var me = Object.assign({}, M, "raw" === Z ? {
                        aspectRatio: "".concat(K, " / ").concat(Y)
                    } : ge),
                    ye = "blur" !== q || oe ? {} : {
                        filter: "blur(20px)",
                        backgroundSize: N || "cover",
                        backgroundImage: 'url("'.concat(B, '")'),
                        backgroundPosition: z || "0% 0%"
                    };
                if ("fill" === Z) fe.display = "block", fe.position = "absolute", fe.top = 0, fe.left = 0, fe.bottom = 0, fe.right = 0;
                else if ("undefined" !== typeof K && "undefined" !== typeof Y) {
                    var ve = Y / K,
                        be = isNaN(ve) ? "100%" : "".concat(100 * ve, "%");
                    "responsive" === Z ? (fe.display = "block", fe.position = "relative", he = !0, de.paddingTop = be) : "intrinsic" === Z ? (fe.display = "inline-block", fe.position = "relative", fe.maxWidth = "100%", he = !0, de.maxWidth = "100%", te = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K, "%27%20height=%27").concat(Y, "%27/%3e")) : "fixed" === Z && (fe.display = "inline-block", fe.position = "relative", fe.width = K, fe.height = Y)
                } else 0;
                var we = {
                    src: b,
                    srcSet: void 0,
                    sizes: void 0
                };
                pe && (we = k({
                    config: H,
                    src: n,
                    unoptimized: d,
                    layout: Z,
                    width: K,
                    quality: Q,
                    sizes: i,
                    loader: U
                }));
                var Oe = n;
                0;
                var ke = "imagesrcset",
                    je = "imagesizes";
                ke = "imageSrcSet", je = "imageSizes";
                var xe = (r(t = {}, ke, we.srcSet), r(t, je, we.sizes), t),
                    Ee = l.default.useLayoutEffect,
                    Pe = l.useRef(L),
                    Se = l.useRef(n);
                l.useEffect((function () {
                    Pe.current = L
                }), [L]), Ee((function () {
                    Se.current !== n && (se(), Se.current = n)
                }), [se, n]);
                var _e = g({
                    isLazy: ee,
                    imgAttributes: we,
                    heightInt: Y,
                    widthInt: K,
                    qualityInt: Q,
                    layout: Z,
                    className: T,
                    imgStyle: me,
                    blurStyle: ye,
                    loading: E,
                    config: H,
                    unoptimized: d,
                    placeholder: q,
                    loader: U,
                    srcString: Oe,
                    onLoadingCompleteRef: Pe,
                    setBlurComplete: ae,
                    setIntersection: le,
                    isVisible: pe
                }, F);
                return l.default.createElement(l.default.Fragment, null, "raw" === Z ? l.default.createElement(P, Object.assign({}, _e)) : l.default.createElement("span", {
                    style: fe
                }, he ? l.default.createElement("span", {
                    style: de
                }, te ? l.default.createElement("img", {
                    style: {
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    alt: "",
                    "aria-hidden": !0,
                    src: te
                }) : null) : null, l.default.createElement(P, Object.assign({}, _e))), w ? l.default.createElement(u.default, null, l.default.createElement("link", Object.assign({
                    key: "__nimg-" + we.src + we.srcSet + we.sizes,
                    rel: "preload",
                    as: "image",
                    href: we.srcSet ? void 0 : we.src
                }, xe))) : null)
            };
            var i, c, l = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            } return t.default = e, t
                }(n(67294)),
                u = (i = n(16505)) && i.__esModule ? i : {
                    default: i
                },
                s = n(35980),
                p = n(27215),
                f = n(11059),
                d = (n(67206), n(24979));

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function (t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                if (null == e) return {};
                var n, r, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            c = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                experimentalLayoutRaw: !1
            };
            var y = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    experimentalLayoutRaw: !1
                },
                v = new Set,
                b = (new Map, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
            var w = new Map([
                ["default", function (e) {
                    var t = e.config,
                        n = e.src,
                        r = e.width,
                        o = e.quality;
                    0;
                    if (n.endsWith(".svg") && !t.dangerouslyAllowSVG) return n;
                    return "".concat(d.normalizePathTrailingSlash(t.path), "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
                }],
                ["imgix", function (e) {
                    var t = e.config,
                        n = e.src,
                        r = e.width,
                        o = e.quality,
                        a = new URL("".concat(t.path).concat(S(n))),
                        i = a.searchParams;
                    i.set("auto", i.get("auto") || "format"), i.set("fit", i.get("fit") || "max"), i.set("w", i.get("w") || r.toString()), o && i.set("q", o.toString());
                    return a.href
                }],
                ["cloudinary", function (e) {
                    var t = e.config,
                        n = e.src,
                        r = e.width,
                        o = e.quality,
                        a = ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(",") + "/";
                    return "".concat(t.path).concat(a).concat(S(n))
                }],
                ["akamai", function (e) {
                    var t = e.config,
                        n = e.src,
                        r = e.width;
                    return "".concat(t.path).concat(S(n), "?imwidth=").concat(r)
                }],
                ["custom", function (e) {
                    var t = e.src;
                    throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                }]
            ]);

            function O(e) {
                return void 0 !== e.default
            }

            function k(e) {
                var t = e.config,
                    n = e.src,
                    r = e.unoptimized,
                    o = e.layout,
                    i = e.width,
                    c = e.quality,
                    l = e.sizes,
                    u = e.loader;
                if (r) return {
                    src: n,
                    srcSet: void 0,
                    sizes: void 0
                };
                var s = function (e, t, n, r) {
                        var o = e.deviceSizes,
                            i = e.allSizes;
                        if (r && ("fill" === n || "responsive" === n || "raw" === n)) {
                            for (var c, l = /(^|\s)(1?\d?\d)vw/g, u = []; c = l.exec(r); c) u.push(parseInt(c[2]));
                            if (u.length) {
                                var s = .01 * Math.min.apply(Math, u);
                                return {
                                    widths: i.filter((function (e) {
                                        return e >= o[0] * s
                                    })),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: i,
                                kind: "w"
                            }
                        }
                        return "number" !== typeof t || "fill" === n || "responsive" === n ? {
                            widths: o,
                            kind: "w"
                        } : {
                            widths: a(new Set([t, 2 * t].map((function (e) {
                                return i.find((function (t) {
                                    return t >= e
                                })) || i[i.length - 1]
                            })))),
                            kind: "x"
                        }
                    }(t, i, o, l),
                    p = s.widths,
                    f = s.kind,
                    d = p.length - 1;
                return {
                    sizes: l || "w" !== f ? l : "100vw",
                    srcSet: p.map((function (e, r) {
                        return "".concat(u({
                            config: t,
                            src: n,
                            quality: c,
                            width: e
                        }), " ").concat("w" === f ? e : r + 1).concat(f)
                    })).join(", "),
                    src: u({
                        config: t,
                        src: n,
                        quality: c,
                        width: p[d]
                    })
                }
            }

            function j(e) {
                return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
            }

            function x(e) {
                var t, n = (null === (t = e.config) || void 0 === t ? void 0 : t.loader) || "default",
                    r = w.get(n);
                if (r) return r(e);
                throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "), ". Received: ").concat(n))
            }

            function E(e, t, n, r, o, a) {
                e && e.src !== b && e["data-loaded-src"] !== t && (e["data-loaded-src"] = t, ("decode" in e ? e.decode() : Promise.resolve()).catch((function () {})).then((function () {
                    if (e.parentNode && (v.add(t), "blur" === r && a(!0), null === o || void 0 === o ? void 0 : o.current)) {
                        var n = e.naturalWidth,
                            i = e.naturalHeight;
                        o.current({
                            naturalWidth: n,
                            naturalHeight: i
                        })
                    }
                })))
            }
            var P = function (e) {
                var t = e.imgAttributes,
                    n = e.heightInt,
                    r = e.widthInt,
                    o = e.qualityInt,
                    a = e.layout,
                    i = e.className,
                    c = e.imgStyle,
                    u = e.blurStyle,
                    s = e.isLazy,
                    p = e.placeholder,
                    f = e.loading,
                    d = e.srcString,
                    h = e.config,
                    y = e.unoptimized,
                    v = e.loader,
                    b = e.onLoadingCompleteRef,
                    w = e.setBlurComplete,
                    O = e.setIntersection,
                    j = e.onError,
                    x = (e.isVisible, m(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onError", "isVisible"]));
                return l.default.createElement(l.default.Fragment, null, l.default.createElement("img", Object.assign({}, x, t, "raw" !== a || t.sizes ? {} : {
                    height: n,
                    width: r
                }, {
                    decoding: "async",
                    "data-nimg": a,
                    className: i,
                    style: g({}, c, u),
                    ref: l.useCallback((function (e) {
                        O(e), (null === e || void 0 === e ? void 0 : e.complete) && E(e, d, 0, p, b, w)
                    }), [O, d, a, p, b, w]),
                    onLoad: function (e) {
                        E(e.currentTarget, d, 0, p, b, w)
                    },
                    onError: function (e) {
                        "blur" === p && w(!0), j && j(e)
                    }
                })), (s || "blur" === p) && l.default.createElement("noscript", null, l.default.createElement("img", Object.assign({}, x, k({
                    config: h,
                    src: d,
                    unoptimized: y,
                    layout: a,
                    width: r,
                    quality: o,
                    sizes: t.sizes,
                    loader: v
                }), "raw" !== a || t.sizes ? {} : {
                    height: n,
                    width: r
                }, {
                    decoding: "async",
                    "data-nimg": a,
                    style: c,
                    className: i,
                    loading: f || "lazy"
                }))))
            };

            function S(e) {
                return "/" === e[0] ? e.slice(1) : e
            }("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && (Object.assign(t.default, t), e.exports = t.default)
        },
        27215: function (e, t, n) {
            "use strict";
            var r = n(85696);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function (e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    u = e.disabled || !i,
                    s = o.useRef(),
                    p = o.useState(!1),
                    f = r(p, 2),
                    d = f[0],
                    h = f[1],
                    g = o.useState(t ? t.current : null),
                    m = r(g, 2),
                    y = m[0],
                    v = m[1],
                    b = o.useCallback((function (e) {
                        s.current && (s.current(), s.current = void 0), u || d || e && e.tagName && (s.current = function (e, t, n) {
                            var r = function (e) {
                                    var t, n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = l.find((function (e) {
                                            return e.root === n.root && e.margin === n.margin
                                        }));
                                    r ? t = c.get(r) : (t = c.get(n), l.push(n));
                                    if (t) return t;
                                    var o = new Map,
                                        a = new IntersectionObserver((function (e) {
                                            e.forEach((function (e) {
                                                var t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return c.set(n, t = {
                                        id: n,
                                        observer: a,
                                        elements: o
                                    }), t
                                }(n),
                                o = r.id,
                                a = r.observer,
                                i = r.elements;
                            return i.set(e, t), a.observe(e),
                                function () {
                                    if (i.delete(e), a.unobserve(e), 0 === i.size) {
                                        a.disconnect(), c.delete(o);
                                        var t = l.findIndex((function (e) {
                                            return e.root === o.root && e.margin === o.margin
                                        }));
                                        t > -1 && l.splice(t, 1)
                                    }
                                }
                        }(e, (function (e) {
                            return e && h(e)
                        }), {
                            root: y,
                            rootMargin: n
                        }))
                    }), [u, y, n, d]),
                    w = o.useCallback((function () {
                        h(!1)
                    }), []);
                return o.useEffect((function () {
                    if (!i && !d) {
                        var e = a.requestIdleCallback((function () {
                            return h(!0)
                        }));
                        return function () {
                            return a.cancelIdleCallback(e)
                        }
                    }
                }), [d]), o.useEffect((function () {
                    t && v(t.current)
                }), [t]), [b, d, w]
            };
            var o = n(67294),
                a = n(98065),
                i = "undefined" !== typeof IntersectionObserver;
            var c = new Map,
                l = [];
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && (Object.assign(t.default, t), e.exports = t.default)
        },
        17285: function (e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AmpStateContext = void 0;
            var o = ((r = n(67294)) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = o
        },
        49546: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isInAmpMode = i, t.useAmp = function () {
                return i(o.default.useContext(a.AmpStateContext))
            };
            var r, o = (r = n(67294)) && r.__esModule ? r : {
                    default: r
                },
                a = n(17285);

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    o = void 0 !== r && r,
                    a = e.hasQuery,
                    i = void 0 !== a && a;
                return n || o && i
            }
        },
        16505: function (e, t, n) {
            "use strict";
            var r = n(930);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultHead = p, t.default = void 0;
            var a, i = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            } return t.default = e, t
                }(n(67294)),
                c = (a = n(70148)) && a.__esModule ? a : {
                    default: a
                },
                l = n(17285),
                u = n(60523),
                s = n(49546);
            n(67206);

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [i.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(i.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function f(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === i.default.Fragment ? e.concat(i.default.Children.toArray(t.props.children).reduce((function (e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var d = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(e, t) {
                return e.reduce((function (e, t) {
                    var n = i.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(f, []).reverse().concat(p(t.inAmpMode)).filter(function () {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function (o) {
                        var a = !0,
                            i = !1;
                        if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                            i = !0;
                            var c = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(c) ? a = !1 : e.add(c)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? a = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (var l = 0, u = d.length; l < u; l++) {
                                    var s = d[l];
                                    if (o.props.hasOwnProperty(s))
                                        if ("charSet" === s) n.has(s) ? a = !1 : n.add(s);
                                        else {
                                            var p = o.props[s],
                                                f = r[s] || new Set;
                                            "name" === s && i || !f.has(p) ? (f.add(p), r[s] = f) : a = !1
                                        }
                                }
                        }
                        return a
                    }
                }()).reverse().map((function (e, n) {
                    var a = e.key || n;
                    if (!t.inAmpMode && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function (t) {
                            return e.props.href.startsWith(t)
                        }))) {
                        var c = function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? o(Object(n), !0).forEach((function (t) {
                                    r(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e.props || {});
                        return c["data-href"] = c.href, c.href = void 0, c["data-optimized-fonts"] = !0, i.default.cloneElement(e, c)
                    }
                    return i.default.cloneElement(e, {
                        key: a
                    })
                }))
            }
            var g = function (e) {
                var t = e.children,
                    n = i.useContext(l.AmpStateContext),
                    r = i.useContext(u.HeadManagerContext);
                return i.default.createElement(c.default, {
                    reduceComponentsToState: h,
                    headManager: r,
                    inAmpMode: s.isInAmpMode(n)
                }, t)
            };
            t.default = g
        },
        70148: function (e, t, n) {
            "use strict";
            var r = n(7980),
                o = n(33227),
                a = n(88361),
                i = (n(92191), n(85971)),
                c = n(52715),
                l = n(91193);

            function u(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }(n(67294));
            var p = function (e) {
                i(n, e);
                var t = u(n);

                function n(e) {
                    var a;
                    return o(this, n), (a = t.call(this, e)).emitChange = function () {
                        a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props))
                    }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a
                }
                return a(n, [{
                    key: "componentDidMount",
                    value: function () {
                        this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function () {
                        this.emitChange()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                    }
                }, {
                    key: "render",
                    value: function () {
                        return null
                    }
                }]), n
            }(s.Component);
            t.default = p
        },
        50725: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CourseContext: function () {
                    return k
                },
                ModalContext: function () {
                    return O
                },
                default: function () {
                    return j
                }
            });
            var r = n(50029),
                o = n(59499),
                a = n(87794),
                i = n.n(a),
                c = (n(45635), n(95867), n(9919), n(27952), n(54816), n(67294)),
                l = n(9008),
                u = n(25675),
                s = n.n(u),
                p = n(85893),
                f = function () {
                    return (0, p.jsx)("div", {
                        className: "preloader",
                        children: (0, p.jsx)("div", {
                            className: "preloader__wrp",
                            children: (0, p.jsx)(s(), {
                                width: 159,
                                height: 159,
                                alt: "IT Школа WinPoWer LOGO",
                                src: "/images/logo.svg"
                            })
                        })
                    })
                },
                d = function () {
                    return (0, p.jsx)("a", {
                        className: "whatsApp",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://wa.me/79274581674?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82.%20%D0%9C%D0%BD%D0%B5%20%D0%BD%D1%83%D0%B6%D0%BD%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BA%D1%83%D1%80%D1%81%D0%B0%D0%BC",
                        children: (0, p.jsx)("span", {
                            className: "visually-hidden",
                            children: "whatsApp"
                        })
                    })
                },
                h = n(11163),
                g = n(50542),
                m = n(2962),
                y = n(26747),
                v = n(63282);

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function (t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            g.ZP.initialize("UA-233188046-1");
            var O = (0, c.createContext)({
                    showModal: !1,
                    setShowModal: function () {}
                }),
                k = (0, c.createContext)({
                    courses: []
                });

            function j(e) {
                var t = e.Component,
                    n = e.pageProps,
                    r = e.courses,
                    o = (0, c.useState)(!1),
                    a = o[0],
                    i = o[1],
                    u = (0, c.useState)(!1),
                    s = u[0],
                    g = u[1],
                    y = (0, c.useState)(""),
                    b = y[0],
                    j = y[1],
                    x = (0, c.useState)(null),
                    E = x[0],
                    P = x[1],
                    S = (0, c.useState)(!1),
                    _ = S[0],
                    A = S[1],
                    G = (0, c.useState)(!1),
                    T = (G[0], G[1]),
                    I = (0, h.useRouter)();
                return (0, c.useEffect)((function () {
                    document.addEventListener("DOMContentLoaded", (function (e) {
                        console.log("DOM fully loaded and parsed")
                    })), I.events.on("routeChangeStart", (function () {
                        A(!0), T(!0)
                    })), I.events.on("routeChangeComplete", (function () {
                        A(!1), T(!1), (0, v.ZP)("hit", window.location.href)
                    }));
                    var e = 0,
                        t = window.setInterval((function () {
                            document.hidden || (60 === ++e ? (0, v.ZP)("reachGoal", "time60") : 120 === e ? ((0, v.ZP)("reachGoal", "time120"), (0, v.ZP)("reachGoal", "time_2min")) : 180 === e ? (0, v.ZP)("reachGoal", "time180") : e > 180 && clearInterval(t))
                        }), 1e3)
                }), []), (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsx)(m.lX, {
                        title: "IT Школа WinPoWer - \u043e\u043d\u043b\u0430\u0439\u043d \u0448\u043a\u043e\u043b\u0430 IT \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432, \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e, \u043a\u0443\u0440\u0441\u044b IT",
                        description: "\u0412 \u0441\u0442\u0435\u043d\u0430\u0445 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c IT-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u043c. \u041d\u0430\u0448\u0438 \u043e\u043d\u043b\u0430\u0439\u043d \u043a\u0443\u0440\u0441\u044b \u0432\u0435\u0434\u0443\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u044e\u0449\u0438\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f. \u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u0443\u0440\u0441\u0430\u0445 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.",
                        canonical: "https://IT Школа WinPoWer.school/",
                        openGraph: {
                            title: "IT Школа WinPoWer - \u043e\u043d\u043b\u0430\u0439\u043d \u0448\u043a\u043e\u043b\u0430 IT \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432, \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e, \u043a\u0443\u0440\u0441\u044b IT",
                            description: "\u0412 \u0441\u0442\u0435\u043d\u0430\u0445 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c IT-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u043c. \u041d\u0430\u0448\u0438 \u043e\u043d\u043b\u0430\u0439\u043d \u043a\u0443\u0440\u0441\u044b \u0432\u0435\u0434\u0443\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u044e\u0449\u0438\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f. \u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u0443\u0440\u0441\u0430\u0445 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."
                        }
                    }), (0, p.jsxs)(l.default, {
                        children: [(0, p.jsx)("meta", {
                            charSet: "UTF-8"
                        }), (0, p.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, p.jsx)("meta", {
                            name: "facebook-domain-verification",
                            content: "ryz1ftetk92kft4v0xz6q41czh08kd"
                        }), (0, p.jsx)("meta", {
                            name: "google-site-verification",
                            content: "q5ROXzxal36cQXqf4o0cS-6PmfFsza2RGwZhTvo0SbA"
                        }), (0, p.jsx)("meta", {
                            name: "robots",
                            content: "max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                        }), (0, p.jsx)("meta", {
                            property: "og:locale",
                            content: "ru_RU"
                        }), (0, p.jsx)("meta", {
                            property: "og:type",
                            content: "article"
                        }), (0, p.jsx)("meta", {
                            name: "yandex-verification",
                            content: "ecc41cebbbd16a3e"
                        }), (0, p.jsx)("link", {
                            rel: "dns-prefetch",
                            href: "//www.google.com"
                        }), (0, p.jsx)("link", {
                            rel: "dns-prefetch",
                            href: "//s.w.org"
                        }), (0, p.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/apple-touch-icon.png"
                        }), (0, p.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon-32x32.png"
                        }), (0, p.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon-16x16.png"
                        }), (0, p.jsx)("link", {
                            rel: "manifest",
                            href: "/site.webmanifest"
                        }), (0, p.jsx)("link", {
                            rel: "mask-icon",
                            href: "/safari-pinned-tab.svg",
                            color: "#5bbad5"
                        }), (0, p.jsx)("meta", {
                            name: "msapplication-TileColor",
                            content: "#da532c"
                        }), (0, p.jsx)("meta", {
                            name: "theme-color",
                            content: "#ffffff"
                        }), (0, p.jsx)("meta", {
                            name: "mailru-domain",
                            content: "yF0ko5djyNfI0TIp"
                        })]
                    }), _ && (0, p.jsx)(f, {}), (0, p.jsx)(O.Provider, {
                        value: {
                            showModal: a,
                            setShowModal: i,
                            modalContent: b,
                            setModalContent: j,
                            modalTypeContent: E,
                            setModalTypeContent: P,
                            showNavBar: s,
                            setShowNavBar: g
                        },
                        children: (0, p.jsx)(k.Provider, {
                            value: {
                                courses: r
                            },
                            children: (0, p.jsx)(t, w({}, n))
                        })
                    }), (0, p.jsx)(d, {}), (0, p.jsx)(v.OR, {
                        accounts: [88480976],
                        options: {
                            clickmap: !0,
                            trackLinks: !0,
                            accurateTrackBounce: !0,
                            webvisor: !0,
                            ecommerce: "dataLayer"
                        }
                    }), (0, p.jsx)("div", {
                        className: "visually-hidden",
                        dangerouslySetInnerHTML: {
                            __html: '<script type="text/javascript">!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=\'https://vk.com/js/api/openapi.js?169\',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1568226-VAqW"),VK.Retargeting.Hit()},document.head.appendChild(t)}();<\/script><noscript><img src="https://vk.com/rtrg?p=VK-RTRG-1568226-VAqW" style="position:fixed; left:-999px;" alt=""/></noscript>'
                        }
                    }), (0, p.jsx)("div", {
                        className: "visually-hidden",
                        dangerouslySetInnerHTML: {
                            __html: '$(document).ready(function () {\n            $("a").each(function () {\n                var href = $(this).attr("href");\n                var search = "?" + window.location.search.split("&").filter(val => val.replace(\'?\', \'\').indexOf(\'s_\') !== 0).join("&").replace(\'?\', \'\');\n                if (search !== "?" && href != undefined && !href.includes("#")) {\n                    if (!href.includes("?")) {\n                        $(this).attr("href", href + search);\n                    } else {\n                        $(this).attr("href", href + search.replace("?", "&"));\n                    }\n                }\n            });\n        });\n        '
                        }
                    })]
                })
            }
            j.getInitialProps = function () {
                var e = (0, r.Z)(i().mark((function e(t) {
                    var n, r, o, a;
                    return i().wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.ctx, r = (0, y.Z)(n.req), o = r.origin, e.prev = 2, e.next = 5, fetch(o + "/api/courses").then((function (e) {
                                    return e.json()
                                }));
                            case 5:
                                return a = e.sent, e.abrupt("return", {
                                    courses: a.courses
                                });
                            case 9:
                                return e.prev = 9, e.t0 = e.catch(2), e.abrupt("return", {
                                    courses: []
                                });
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 9]
                    ])
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()
        },
        50071: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n(50725)
            }])
        },
        54816: function () {},
        45635: function () {},
        27952: function () {},
        9919: function () {},
        95867: function () {},
        9008: function (e, t, n) {
            e.exports = n(16505)
        },
        25675: function (e, t, n) {
            e.exports = n(29938)
        },
        11163: function (e, t, n) {
            e.exports = n(61587)
        },
        92703: function (e, t, n) {
            "use strict";
            var r = n(50414);

            function o() {}

            function a() {}
            a.resetWarningCache = o, e.exports = function () {
                function e(e, t, n, o, a, i) {
                    if (i !== r) {
                        var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw c.name = "Invariant Violation", c
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        45697: function (e, t, n) {
            e.exports = n(92703)()
        },
        50414: function (e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        50542: function (e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function () {
                    return fe
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                addTrackers: function () {
                    return $
                },
                default: function () {
                    return ce
                },
                event: function () {
                    return ne
                },
                exception: function () {
                    return re
                },
                ga: function () {
                    return X
                },
                initialize: function () {
                    return J
                },
                modalview: function () {
                    return ee
                },
                outboundLink: function () {
                    return ae
                },
                pageview: function () {
                    return Q
                },
                plugin: function () {
                    return oe
                },
                send: function () {
                    return Y
                },
                set: function () {
                    return K
                },
                testModeAPI: function () {
                    return ie
                },
                timing: function () {
                    return te
                }
            });
            var o = n(67294),
                a = n(45697),
                i = n.n(a);

            function c(e) {
                console.warn("[react-ga]", e)
            }

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }
            var u = ["to", "target"];

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function (t) {
                        w(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                }, g(e, t)
            }

            function m(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }

            function y(e, t) {
                if (t && ("object" === l(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return v(e)
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function w(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var O = "_blank",
                k = function (e) {
                    ! function (e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && g(e, t)
                    }(i, e);
                    var t, n, r, a = m(i);

                    function i() {
                        var e;
                        d(this, i);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return w(v(e = a.call.apply(a, [this].concat(n))), "handleClick", (function (t) {
                            var n = e.props,
                                r = n.target,
                                o = n.eventLabel,
                                a = n.to,
                                c = n.onClick,
                                l = n.trackerNames,
                                u = {
                                    label: o
                                },
                                s = r !== O,
                                p = !(t.ctrlKey || t.shiftKey || t.metaKey || 1 === t.button);
                            s && p ? (t.preventDefault(), i.trackLink(u, (function () {
                                window.location.href = a
                            }), l)) : i.trackLink(u, (function () {}), l), c && c(t)
                        })), e
                    }
                    return t = i, (n = [{
                        key: "render",
                        value: function () {
                            var e = this.props,
                                t = e.to,
                                n = e.target,
                                r = p(p({}, f(e, u)), {}, {
                                    target: n,
                                    href: t,
                                    onClick: this.handleClick
                                });
                            return n === O && (r.rel = "".concat(r.rel ? r.rel : "", " noopener noreferrer").trim()), delete r.eventLabel, delete r.trackerNames, o.createElement("a", r)
                        }
                    }]) && h(t.prototype, n), r && h(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), i
                }(o.Component);
            w(k, "trackLink", (function () {
                c("ga tracking not enabled")
            })), k.propTypes = {
                eventLabel: i().string.isRequired,
                target: i().string,
                to: i().string,
                onClick: i().func,
                trackerNames: i().arrayOf(i().string)
            }, k.defaultProps = {
                target: null,
                to: null,
                onClick: null,
                trackerNames: null
            };

            function j(e) {
                return "string" === typeof (t = e) && -1 !== t.indexOf("@") ? (c("This arg looks like an email address, redacting."), "REDACTED (Potential Email Address)") : e;
                var t
            }

            function x(e) {
                return e && e.toString().replace(/^\s+|\s+$/g, "")
            }
            var E = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

            function P(e) {
                return x(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, (function (e, t, n) {
                    return t > 0 && t + e.length !== n.length && e.search(E) > -1 && ":" !== n.charAt(t - 2) && ("-" !== n.charAt(t + e.length) || "-" === n.charAt(t - 1)) && n.charAt(t - 1).search(/[^\s-]/) < 0 ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1)
                }))
            }
            var S = !1;

            function _(e) {
                console.info("[react-ga]", e)
            }
            var A = [],
                G = {
                    calls: A,
                    ga: function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        A.push([].concat(t))
                    },
                    resetCalls: function () {
                        A.length = 0
                    }
                },
                T = ["category", "action", "label", "value", "nonInteraction", "transport"];

            function I(e, t) {
                if (null == e) return {};
                var n, r, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function C(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function M(e) {
                return M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, M(e)
            }

            function N(e) {
                return function (e) {
                    if (Array.isArray(e)) return z(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return z(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var L = "undefined" === typeof window || "undefined" === typeof document,
                R = !1,
                q = !0,
                B = !1,
                W = !0,
                V = !0,
                H = function () {
                    var e;
                    return B ? G.ga.apply(G, arguments) : !L && (window.ga ? (e = window).ga.apply(e, arguments) : c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))
                };

            function F(e) {
                return function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = e || "";
                    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (n = P(e)), t && (n = j(n)), n
                }(e, q, V)
            }

            function Z(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var o = n[0];
                "string" === typeof o ? (!W && Array.isArray(e) || H.apply(void 0, n), Array.isArray(e) && e.forEach((function (e) {
                    H.apply(void 0, N(["".concat(e, ".").concat(o)].concat(n.slice(1))))
                }))) : c("ga command must be a string")
            }

            function U(e, t) {
                e ? t && (t.debug && !0 === t.debug && (R = !0), !1 === t.titleCase && (q = !1), !1 === t.redactEmail && (V = !1), t.useExistingGa) || (t && t.gaOptions ? H("create", e, t.gaOptions) : H("create", e, "auto")) : c("gaTrackingID is required in initialize()")
            }

            function $(e, t) {
                return Array.isArray(e) ? e.forEach((function (e) {
                    "object" === M(e) ? U(e.trackingId, e) : c("All configs must be an object")
                })) : U(e, t), !0
            }

            function J(e, t) {
                if (t && !0 === t.testMode) B = !0;
                else {
                    if (L) return;
                    t && !0 === t.standardImplementation || function (e) {
                        if (!S) {
                            S = !0;
                            var t = "https://www.google-analytics.com/analytics.js";
                            e && e.gaAddress ? t = e.gaAddress : e && e.debug && (t = "https://www.google-analytics.com/analytics_debug.js");
                            var n, r, o, a, i, c, l, u = e && e.onerror;
                            n = window, r = document, o = "script", a = t, i = "ga", n.GoogleAnalyticsObject = i, n.ga = n.ga || function () {
                                (n.ga.q = n.ga.q || []).push(arguments)
                            }, n.ga.l = 1 * new Date, c = r.createElement(o), l = r.getElementsByTagName(o)[0], c.async = 1, c.src = a, c.onerror = u, l.parentNode.insertBefore(c, l)
                        }
                    }(t)
                }
                W = !t || "boolean" !== typeof t.alwaysSendToDefaultTracker || t.alwaysSendToDefaultTracker, $(e, t)
            }

            function X() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.length > 0 && (H.apply(void 0, t), R && (_("called ga('arguments');"), _("with arguments: ".concat(JSON.stringify(t))))), window.ga
            }

            function K(e, t) {
                e ? "object" === M(e) ? (0 === Object.keys(e).length && c("empty `fieldsObject` given to .set()"), Z(t, "set", e), R && (_("called ga('set', fieldsObject);"), _("with fieldsObject: ".concat(JSON.stringify(e))))) : c("Expected `fieldsObject` arg to be an Object") : c("`fieldsObject` is required in .set()")
            }

            function Y(e, t) {
                Z(t, "send", e), R && (_("called ga('send', fieldObject);"), _("with fieldObject: ".concat(JSON.stringify(e))), _("with trackers: ".concat(JSON.stringify(t))))
            }

            function Q(e, t, n) {
                if (e) {
                    var r = x(e);
                    if ("" !== r) {
                        var o = {};
                        if (n && (o.title = n), Z(t, "send", function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? D(Object(n), !0).forEach((function (t) {
                                        C(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                hitType: "pageview",
                                page: r
                            }, o)), R) {
                            _("called ga('send', 'pageview', path);");
                            var a = "";
                            n && (a = " and title: ".concat(n)), _("with path: ".concat(r).concat(a))
                        }
                    } else c("path cannot be an empty string in .pageview()")
                } else c("path is required in .pageview()")
            }

            function ee(e, t) {
                if (e) {
                    var n, r = "/" === (n = x(e)).substring(0, 1) ? n.substring(1) : n;
                    if ("" !== r) {
                        var o = "/modal/".concat(r);
                        Z(t, "send", "pageview", o), R && (_("called ga('send', 'pageview', path);"), _("with path: ".concat(o)))
                    } else c("modalName cannot be an empty string or a single / in .modalview()")
                } else c("modalName is required in .modalview(modalName)")
            }

            function te() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.category,
                    n = e.variable,
                    r = e.value,
                    o = e.label,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                if (t && n && "number" === typeof r) {
                    var i = {
                        hitType: "timing",
                        timingCategory: F(t),
                        timingVar: F(n),
                        timingValue: r
                    };
                    o && (i.timingLabel = F(o)), Y(i, a)
                } else c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")
            }

            function ne() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.category,
                    n = e.action,
                    r = e.label,
                    o = e.value,
                    a = e.nonInteraction,
                    i = e.transport,
                    l = I(e, T),
                    u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                if (t && n) {
                    var s = {
                        hitType: "event",
                        eventCategory: F(t),
                        eventAction: F(n)
                    };
                    r && (s.eventLabel = F(r)), "undefined" !== typeof o && ("number" !== typeof o ? c("Expected `args.value` arg to be a Number.") : s.eventValue = o), "undefined" !== typeof a && ("boolean" !== typeof a ? c("`args.nonInteraction` must be a boolean.") : s.nonInteraction = a), "undefined" !== typeof i && ("string" !== typeof i ? c("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(i) && c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), s.transport = i)), Object.keys(l).filter((function (e) {
                        return "dimension" === e.substr(0, "dimension".length)
                    })).forEach((function (e) {
                        s[e] = l[e]
                    })), Object.keys(l).filter((function (e) {
                        return "metric" === e.substr(0, "metric".length)
                    })).forEach((function (e) {
                        s[e] = l[e]
                    })), Y(s, u)
                } else c("args.category AND args.action are required in event()")
            }

            function re(e, t) {
                var n = e.description,
                    r = e.fatal,
                    o = {
                        hitType: "exception"
                    };
                n && (o.exDescription = F(n)), "undefined" !== typeof r && ("boolean" !== typeof r ? c("`args.fatal` must be a boolean.") : o.exFatal = r), Y(o, t)
            }
            var oe = {
                require: function (e, t, n) {
                    if (e) {
                        var r = x(e);
                        if ("" !== r) {
                            var o = n ? "".concat(n, ".require") : "require";
                            if (t) {
                                if ("object" !== M(t)) return void c("Expected `options` arg to be an Object");
                                0 === Object.keys(t).length && c("Empty `options` given to .require()"), X(o, r, t), R && _("called ga('require', '".concat(r, "', ").concat(JSON.stringify(t)))
                            } else X(o, r), R && _("called ga('require', '".concat(r, "');"))
                        } else c("`name` cannot be an empty string in .require()")
                    } else c("`name` is required in .require()")
                },
                execute: function (e, t) {
                    for (var n, r, o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++) a[i - 2] = arguments[i];
                    if (1 === a.length ? n = a[0] : (r = a[0], n = a[1]), "string" !== typeof e) c("Expected `pluginName` arg to be a String.");
                    else if ("string" !== typeof t) c("Expected `action` arg to be a String.");
                    else {
                        var l = "".concat(e, ":").concat(t);
                        n = n || null, r && n ? (X(l, r, n), R && (_("called ga('".concat(l, "');")), _('actionType: "'.concat(r, '" with payload: ').concat(JSON.stringify(n))))) : n ? (X(l, n), R && (_("called ga('".concat(l, "');")), _("with payload: ".concat(JSON.stringify(n))))) : (X(l), R && _("called ga('".concat(l, "');")))
                    }
                }
            };

            function ae(e, t, n) {
                if ("function" === typeof t)
                    if (e && e.label) {
                        var r = {
                                hitType: "event",
                                eventCategory: "Outbound",
                                eventAction: "Click",
                                eventLabel: F(e.label)
                            },
                            o = !1,
                            a = setTimeout((function () {
                                o = !0, t()
                            }), 250);
                        r.hitCallback = function () {
                            clearTimeout(a), o || t()
                        }, Y(r, n)
                    } else c("args.label is required in outboundLink()");
                else c("hitCallback function is required")
            }
            var ie = G,
                ce = {
                    initialize: J,
                    ga: X,
                    set: K,
                    send: Y,
                    pageview: Q,
                    modalview: ee,
                    timing: te,
                    event: ne,
                    exception: re,
                    plugin: oe,
                    outboundLink: ae,
                    testModeAPI: G
                };

            function le(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? le(Object(n), !0).forEach((function (t) {
                        se(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function se(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            k.origTrackLink = k.trackLink, k.trackLink = ae;
            var pe = k,
                fe = ue(ue({}, r), {}, {
                    OutboundLink: pe
                })
        },
        52541: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.YMInitializer = void 0;
            var r = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== u(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(67294)),
                o = c(n(45697)),
                a = c(n(27343)),
                i = n(53746);

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return l = function () {
                    return e
                }, e
            }

            function u(e) {
                return u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, u(e)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t) {
                return !t || "object" !== u(t) && "function" !== typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }

            function h(e, t) {
                return h = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }
            var g = function (e) {
                function t() {
                    return s(this, t), f(this, d(t).apply(this, arguments))
                }
                var n, o, c;
                return function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && h(e, t)
                }(t, e), n = t, (o = [{
                    key: "componentDidMount",
                    value: function () {
                        (0, a.default)(this.props.accounts, this.props.options, this.props.version);
                        var e = document.createElement("script"),
                            t = this.props.attrs;
                        e.type = "text/javascript", e.async = !0, e.src = (0, i.scriptPath)(this.props.version), Object.keys(t).map((function (n) {
                            e.__proto__.hasOwnProperty(n) && e.setAttribute(n, t[n])
                        })), this.insertPoint.insertBefore(e, null)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this;
                        return r.default.createElement(this.props.containerElement, {
                            ref: function (t) {
                                e.insertPoint = t
                            }
                        }, this.props.children)
                    }
                }]) && p(n.prototype, o), c && p(n, c), t
            }(r.Component);
            t.YMInitializer = g, g.displayName = "YMInitializer", g.propTypes = {
                accounts: o.default.arrayOf(o.default.number).isRequired,
                containerElement: o.default.string,
                options: o.default.object,
                attrs: o.default.object,
                version: o.default.oneOf(["1", "2"])
            }, g.defaultProps = {
                containerElement: "div",
                options: {},
                attrs: {},
                version: "1"
            }
        },
        53746: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.callbackQueueName = function (e) {
                if ("1" === e) return "yandex_metrika_callbacks";
                if ("2" === e) return "yandex_metrika_callbacks2";
                n()
            }, t.scriptPath = function (e) {
                if ("1" === e) return "https://mc.yandex.ru/metrika/watch.js";
                if ("2" === e) return "https://mc.yandex.ru/metrika/tag.js";
                n()
            }, t.trackerConstructorName = function (e) {
                if ("1" === e) return "Metrika";
                if ("2" === e) return "Metrika2";
                n()
            }, t.trackerInstanceName = function (e) {
                return "yaCounter".concat(e)
            }, t.trackerVersionName = function (e) {
                return "yaCounterVersion".concat(e)
            }, t.accountListName = void 0;

            function n() {
                throw new Error("invalid Ya.Metrika version")
            }
            t.accountListName = "yandex_metrika_accounts"
        },
        63282: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "OR", {
                enumerable: !0,
                get: function () {
                    return o.YMInitializer
                }
            }), t.ZP = void 0;
            var r = n(53746),
                o = n(52541);

            function a(e, t) {
                try {
                    for (var n, o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++) a[i - 2] = arguments[i];
                    (n = window[(0, r.trackerInstanceName)(e)])[t].apply(n, a)
                } catch (c) {
                    console.warn(c)
                }
            }

            function i() {
                return "undefined" !== typeof window ? window[r.accountListName] : []
            }

            function c(e) {
                return function () {
                    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    e.forEach((function (e) {
                        var t = window[(0, r.trackerVersionName)(e)],
                            o = window[(0, r.callbackQueueName)(t)];
                        o ? o.push((function () {
                            return a.apply(void 0, [e].concat(n))
                        })) : a.apply(void 0, [e].concat(n))
                    }))
                }
            }

            function l(e) {
                return c(i().filter(e))
            }
            var u = function () {
                return c(i()).apply(void 0, arguments)
            };
            t.ZP = u
        },
        27343: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1",
                    o = (0, r.callbackQueueName)(n);
                window[r.accountListName] = window[r.accountListName] || [], window[r.accountListName] = window[r.accountListName].concat(e), window[o] = window[o] || [], window[o].push((function () {
                    e.forEach((function (e) {
                        var o = {
                            id: e
                        };
                        try {
                            window[(0, r.trackerInstanceName)(e)] = new(Ya[(0, r.trackerConstructorName)(n)])(Object.assign(o, t))
                        } catch (a) {
                            console.warn(a)
                        }
                    }))
                })), e.forEach((function (e) {
                    window[(0, r.trackerVersionName)(e)] = n
                }))
            };
            var r = n(53746)
        },
        50029: function (e, t, n) {
            "use strict";

            function r(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        l = c.value
                } catch (u) {
                    return void n(u)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function o(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (o, a) {
                        var i = e.apply(t, n);

                        function c(e) {
                            r(i, o, a, c, l, "next", e)
                        }

                        function l(e) {
                            r(i, o, a, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            n.d(t, {
                Z: function () {
                    return o
                }
            })
        },
        59499: function (e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                Z: function () {
                    return r
                }
            })
        }
    },
    function (e) {
        var t = function (t) {
            return e(e.s = t)
        };
        e.O(0, [9774, 179], (function () {
            return t(50071), t(61587)
        }));
        var n = e.O();
        _N_E = n
    }
]);