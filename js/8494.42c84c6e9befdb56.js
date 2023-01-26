"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8494], {
        88494: function (e, t, s) {
            s.d(t, {
                tq: function () {
                    return b
                },
                o5: function () {
                    return y
                }
            });
            var i = s(67294),
                r = s(89979);

            function n(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function a(e, t) {
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : n(t[s]) && n(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : a(e[s], t[s]) : e[s] = t[s]
                }))
            }

            function o(e) {
                return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function l(e) {
                return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
            }

            function d(e) {
                return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function c(e) {
                void 0 === e && (e = "");
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    s = [];
                return t.forEach((e => {
                    s.indexOf(e) < 0 && s.push(e)
                })), s.join(" ")
            }
            const p = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];

            function u(e, t) {
                let s = t.slidesPerView;
                if (t.breakpoints) {
                    const e = r.ZP.prototype.getBreakpoint(t.breakpoints),
                        i = e in t.breakpoints ? t.breakpoints[e] : void 0;
                    i && i.slidesPerView && (s = i.slidesPerView)
                }
                let i = Math.ceil(parseFloat(t.loopedSlides || s, 10));
                return i += t.loopAdditionalSlides, i > e.length && t.loopedSlidesLimit && (i = e.length), i
            }

            function f(e) {
                const t = [];
                return i.Children.toArray(e).forEach((e => {
                    e.type && "SwiperSlide" === e.type.displayName ? t.push(e) : e.props && e.props.children && f(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function h(e) {
                const t = [],
                    s = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return i.Children.toArray(e).forEach((e => {
                    if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
                    else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const i = f(e.props.children);
                        i.length > 0 ? i.forEach((e => t.push(e))) : s["container-end"].push(e)
                    } else s["container-end"].push(e)
                })), {
                    slides: t,
                    slots: s
                }
            }

            function m(e) {
                let {
                    swiper: t,
                    slides: s,
                    passedParams: i,
                    changedParams: r,
                    nextEl: o,
                    prevEl: l,
                    scrollbarEl: d,
                    paginationEl: c
                } = e;
                const p = r.filter((e => "children" !== e && "direction" !== e)),
                    {
                        params: u,
                        pagination: f,
                        navigation: h,
                        scrollbar: m,
                        virtual: g,
                        thumbs: v
                    } = t;
                let w, S, b, T, y;
                r.includes("thumbs") && i.thumbs && i.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (w = !0), r.includes("controller") && i.controller && i.controller.control && u.controller && !u.controller.control && (S = !0), r.includes("pagination") && i.pagination && (i.pagination.el || c) && (u.pagination || !1 === u.pagination) && f && !f.el && (b = !0), r.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || d) && (u.scrollbar || !1 === u.scrollbar) && m && !m.el && (T = !0), r.includes("navigation") && i.navigation && (i.navigation.prevEl || l) && (i.navigation.nextEl || o) && (u.navigation || !1 === u.navigation) && h && !h.prevEl && !h.nextEl && (y = !0);
                if (p.forEach((e => {
                        if (n(u[e]) && n(i[e])) a(u[e], i[e]);
                        else {
                            const r = i[e];
                            !0 !== r && !1 !== r || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? u[e] = i[e] : !1 === r && t[s = e] && (t[s].destroy(), "navigation" === s ? (u[s].prevEl = void 0, u[s].nextEl = void 0, t[s].prevEl = void 0, t[s].nextEl = void 0) : (u[s].el = void 0, t[s].el = void 0))
                        }
                        var s
                    })), p.includes("controller") && !S && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control), r.includes("children") && s && g && u.virtual.enabled ? (g.slides = s, g.update(!0)) : r.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(), w) {
                    v.init() && v.update(!0)
                }
                S && (t.controller.control = u.controller.control), b && (c && (u.pagination.el = c), f.init(), f.render(), f.update()), T && (d && (u.scrollbar.el = d), m.init(), m.updateSize(), m.setTranslate()), y && (o && (u.navigation.nextEl = o), l && (u.navigation.prevEl = l), h.init(), h.update()), r.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), r.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), r.includes("direction") && t.changeDirection(i.direction, !1), t.update()
            }

            function g(e, t) {
                return "undefined" === typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
            }
            const v = (0, i.createContext)(null),
                w = (0, i.createContext)(null);

            function S() {
                return S = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }, S.apply(this, arguments)
            }
            const b = (0, i.forwardRef)((function (e, t) {
                let {
                    className: s,
                    tag: f = "div",
                    wrapperTag: v = "div",
                    children: b,
                    onSwiper: T,
                    ...y
                } = void 0 === e ? {} : e, E = !1;
                const [x, C] = (0, i.useState)("swiper"), [M, P] = (0, i.useState)(null), [k, O] = (0, i.useState)(!1), L = (0, i.useRef)(!1), $ = (0, i.useRef)(null), _ = (0, i.useRef)(null), z = (0, i.useRef)(null), A = (0, i.useRef)(null), I = (0, i.useRef)(null), N = (0, i.useRef)(null), D = (0, i.useRef)(null), G = (0, i.useRef)(null), {
                    params: B,
                    passedParams: j,
                    rest: H,
                    events: R
                } = function (e, t) {
                    void 0 === e && (e = {}), void 0 === t && (t = !0);
                    const s = {
                            on: {}
                        },
                        i = {},
                        o = {};
                    a(s, r.ZP.defaults), a(s, r.ZP.extendedDefaults), s._emitClasses = !0, s.init = !1;
                    const l = {},
                        d = p.map((e => e.replace(/_/, ""))),
                        c = Object.assign({}, e);
                    return Object.keys(c).forEach((r => {
                        "undefined" !== typeof e[r] && (d.indexOf(r) >= 0 ? n(e[r]) ? (s[r] = {}, o[r] = {}, a(s[r], e[r]), a(o[r], e[r])) : (s[r] = e[r], o[r] = e[r]) : 0 === r.search(/on[A-Z]/) && "function" === typeof e[r] ? t ? i[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : s.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : l[r] = e[r])
                    })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
                    })), {
                        params: s,
                        passedParams: o,
                        rest: l,
                        events: i
                    }
                }(y), {
                    slides: V,
                    slots: F
                } = h(b), W = () => {
                    O(!k)
                };
                Object.assign(B.on, {
                    _containerClasses(e, t) {
                        C(t)
                    }
                });
                const q = () => {
                    if (Object.assign(B.on, R), E = !0, _.current = new r.ZP(B), _.current.loopCreate = () => {}, _.current.loopDestroy = () => {}, B.loop && (_.current.loopedSlides = u(V, B)), _.current.virtual && _.current.params.virtual.enabled) {
                        _.current.virtual.slides = V;
                        const e = {
                            cache: !1,
                            slides: V,
                            renderExternal: P,
                            renderExternalUpdate: !1
                        };
                        a(_.current.params.virtual, e), a(_.current.originalParams.virtual, e)
                    }
                };
                $.current || q(), _.current && _.current.on("_beforeBreakpoint", W);
                return (0, i.useEffect)((() => () => {
                    _.current && _.current.off("_beforeBreakpoint", W)
                })), (0, i.useEffect)((() => {
                    !L.current && _.current && (_.current.emitSlidesClasses(), L.current = !0)
                })), g((() => {
                    if (t && (t.current = $.current), $.current) return _.current.destroyed && q(),
                        function (e, t) {
                            let {
                                el: s,
                                nextEl: i,
                                prevEl: r,
                                paginationEl: n,
                                scrollbarEl: a,
                                swiper: c
                            } = e;
                            o(t) && i && r && (c.params.navigation.nextEl = i, c.originalParams.navigation.nextEl = i, c.params.navigation.prevEl = r, c.originalParams.navigation.prevEl = r), l(t) && n && (c.params.pagination.el = n, c.originalParams.pagination.el = n), d(t) && a && (c.params.scrollbar.el = a, c.originalParams.scrollbar.el = a), c.init(s)
                        }({
                            el: $.current,
                            nextEl: I.current,
                            prevEl: N.current,
                            paginationEl: D.current,
                            scrollbarEl: G.current,
                            swiper: _.current
                        }, B), T && T(_.current), () => {
                            _.current && !_.current.destroyed && _.current.destroy(!0, !1)
                        }
                }), []), g((() => {
                    !E && R && _.current && Object.keys(R).forEach((e => {
                        _.current.on(e, R[e])
                    }));
                    const e = function (e, t, s, i, r) {
                        const a = [];
                        if (!t) return a;
                        const o = e => {
                            a.indexOf(e) < 0 && a.push(e)
                        };
                        if (s && i) {
                            const e = i.map(r),
                                t = s.map(r);
                            e.join("") !== t.join("") && o("children"), i.length !== s.length && o("children")
                        }
                        return p.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                            if (s in e && s in t)
                                if (n(e[s]) && n(t[s])) {
                                    const i = Object.keys(e[s]),
                                        r = Object.keys(t[s]);
                                    i.length !== r.length ? o(s) : (i.forEach((i => {
                                        e[s][i] !== t[s][i] && o(s)
                                    })), r.forEach((i => {
                                        e[s][i] !== t[s][i] && o(s)
                                    })))
                                } else e[s] !== t[s] && o(s)
                        })), a
                    }(j, z.current, V, A.current, (e => e.key));
                    return z.current = j, A.current = V, e.length && _.current && !_.current.destroyed && m({
                        swiper: _.current,
                        slides: V,
                        passedParams: j,
                        changedParams: e,
                        nextEl: I.current,
                        prevEl: N.current,
                        scrollbarEl: G.current,
                        paginationEl: D.current
                    }), () => {
                        R && _.current && Object.keys(R).forEach((e => {
                            _.current.off(e, R[e])
                        }))
                    }
                })), g((() => {
                    var e;
                    !(e = _.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [M]), i.createElement(f, S({
                    ref: $,
                    className: c(`${x}${s?` ${s}`:""}`)
                }, H), i.createElement(w.Provider, {
                    value: _.current
                }, F["container-start"], i.createElement(v, {
                    className: "swiper-wrapper"
                }, F["wrapper-start"], B.virtual ? function (e, t, s) {
                    if (!s) return null;
                    const r = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
                    } : {
                        top: `${s.offset}px`
                    };
                    return t.filter(((e, t) => t >= s.from && t <= s.to)).map((t => i.cloneElement(t, {
                        swiper: e,
                        style: r
                    })))
                }(_.current, V, M) : !B.loop || _.current && _.current.destroyed ? V.map((e => i.cloneElement(e, {
                    swiper: _.current
                }))) : function (e, t, s) {
                    const r = t.map(((t, s) => i.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": s
                    })));

                    function n(e, t, r) {
                        return i.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${r}`,
                            className: `${e.props.className||""} ${s.slideDuplicateClass}`
                        })
                    }
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - r.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup)
                            for (let t = 0; t < e; t += 1) {
                                const e = i.createElement("div", {
                                    className: `${s.slideClass} ${s.slideBlankClass}`
                                });
                                r.push(e)
                            }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length);
                    const a = u(r, s),
                        o = [],
                        l = [];
                    for (let i = 0; i < a; i += 1) {
                        const e = i - Math.floor(i / r.length) * r.length;
                        l.push(n(r[e], i, "append")), o.unshift(n(r[r.length - e - 1], i, "prepend"))
                    }
                    return e && (e.loopedSlides = a), [...o, ...r, ...l]
                }(_.current, V, B), F["wrapper-end"]), o(B) && i.createElement(i.Fragment, null, i.createElement("div", {
                    ref: N,
                    className: "swiper-button-prev"
                }), i.createElement("div", {
                    ref: I,
                    className: "swiper-button-next"
                })), d(B) && i.createElement("div", {
                    ref: G,
                    className: "swiper-scrollbar"
                }), l(B) && i.createElement("div", {
                    ref: D,
                    className: "swiper-pagination"
                }), F["container-end"]))
            }));

            function T() {
                return T = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }, T.apply(this, arguments)
            }
            b.displayName = "Swiper";
            const y = (0, i.forwardRef)((function (e, t) {
                let {
                    tag: s = "div",
                    children: r,
                    className: n = "",
                    swiper: a,
                    zoom: o,
                    virtualIndex: l,
                    ...d
                } = void 0 === e ? {} : e;
                const p = (0, i.useRef)(null),
                    [u, f] = (0, i.useState)("swiper-slide");

                function h(e, t, s) {
                    t === p.current && f(s)
                }
                g((() => {
                    if (t && (t.current = p.current), p.current && a) {
                        if (!a.destroyed) return a.on("_slideClass", h), () => {
                            a && a.off("_slideClass", h)
                        };
                        "swiper-slide" !== u && f("swiper-slide")
                    }
                })), g((() => {
                    a && p.current && !a.destroyed && f(a.getSlideClasses(p.current))
                }), [a]);
                const m = {
                        isActive: u.indexOf("swiper-slide-active") >= 0 || u.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: u.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: u.indexOf("swiper-slide-prev") >= 0 || u.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: u.indexOf("swiper-slide-next") >= 0 || u.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    w = () => "function" === typeof r ? r(m) : r;
                return i.createElement(s, T({
                    ref: p,
                    className: c(`${u}${n?` ${n}`:""}`),
                    "data-swiper-slide-index": l
                }, d), i.createElement(v.Provider, {
                    value: m
                }, o ? i.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof o ? o : void 0
                }, w()) : w()))
            }));
            y.displayName = "SwiperSlide"
        },
        89979: function (e, t, s) {
            function i(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function r(e = {}, t = {}) {
                Object.keys(t).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && r(e[s], t[s])
                }))
            }
            s.d(t, {
                c4: function () {
                    return re
                },
                ZP: function () {
                    return te
                }
            });
            const n = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return r(e, n), e
            }
            const o = {
                document: n,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function () {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function l() {
                const e = "undefined" !== typeof window ? window : {};
                return r(e, o), e
            }
            class d extends Array {
                constructor(e) {
                    "number" === typeof e ? super(e) : (super(...e || []), function (e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function c(e = []) {
                const t = [];
                return e.forEach((e => {
                    Array.isArray(e) ? t.push(...c(e)) : t.push(e)
                })), t
            }

            function p(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function u(e, t) {
                const s = l(),
                    i = a();
                let r = [];
                if (!t && e instanceof d) return e;
                if (!e) return new d(r);
                if ("string" === typeof e) {
                    const s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                        const t = i.createElement(e);
                        t.innerHTML = s;
                        for (let s = 0; s < t.childNodes.length; s += 1) r.push(t.childNodes[s])
                    } else r = function (e, t) {
                        if ("string" !== typeof e) return [e];
                        const s = [],
                            i = t.querySelectorAll(e);
                        for (let r = 0; r < i.length; r += 1) s.push(i[r]);
                        return s
                    }(e.trim(), t || i)
                } else if (e.nodeType || e === s || e === i) r.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof d) return e;
                    r = e
                }
                return new d(function (e) {
                    const t = [];
                    for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                    return t
                }(r))
            }
            u.fn = d.prototype;
            const f = "resize scroll".split(" ");

            function h(e) {
                return function (...t) {
                    if ("undefined" === typeof t[0]) {
                        for (let t = 0; t < this.length; t += 1) f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : u(this[t]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            h("click"), h("blur"), h("focus"), h("focusin"), h("focusout"), h("keyup"), h("keydown"), h("keypress"), h("submit"), h("change"), h("mousedown"), h("mousemove"), h("mouseup"), h("mouseenter"), h("mouseleave"), h("mouseout"), h("mouseover"), h("touchstart"), h("touchend"), h("touchmove"), h("resize"), h("scroll");
            const m = {
                addClass: function (...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.add(...t)
                    })), this
                },
                removeClass: function (...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.remove(...t)
                    })), this
                },
                hasClass: function (...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return p(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
                },
                toggleClass: function (...e) {
                    const t = c(e.map((e => e.split(" "))));
                    this.forEach((e => {
                        t.forEach((t => {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function (e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 === arguments.length) this[s].setAttribute(e, t);
                        else
                            for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? `${e}ms` : e;
                    return this
                },
                on: function (...e) {
                    let [t, s, i, r] = e;

                    function n(e) {
                        const t = e.target;
                        if (!t) return;
                        const r = e.target.dom7EventData || [];
                        if (r.indexOf(e) < 0 && r.unshift(e), u(t).is(s)) i.apply(t, r);
                        else {
                            const e = u(t).parents();
                            for (let t = 0; t < e.length; t += 1) u(e[t]).is(s) && i.apply(e[t], r)
                        }
                    }

                    function a(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
                    }
                    "function" === typeof e[1] && ([t, i, r] = e, s = void 0), r || (r = !1);
                    const o = t.split(" ");
                    let l;
                    for (let d = 0; d < this.length; d += 1) {
                        const e = this[d];
                        if (s)
                            for (l = 0; l < o.length; l += 1) {
                                const t = o[l];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                    listener: i,
                                    proxyListener: n
                                }), e.addEventListener(t, n, r)
                            } else
                                for (l = 0; l < o.length; l += 1) {
                                    const t = o[l];
                                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                        listener: i,
                                        proxyListener: a
                                    }), e.addEventListener(t, a, r)
                                }
                    }
                    return this
                },
                off: function (...e) {
                    let [t, s, i, r] = e;
                    "function" === typeof e[1] && ([t, i, r] = e, s = void 0), r || (r = !1);
                    const n = t.split(" ");
                    for (let a = 0; a < n.length; a += 1) {
                        const e = n[a];
                        for (let t = 0; t < this.length; t += 1) {
                            const n = this[t];
                            let a;
                            if (!s && n.dom7Listeners ? a = n.dom7Listeners[e] : s && n.dom7LiveListeners && (a = n.dom7LiveListeners[e]), a && a.length)
                                for (let t = a.length - 1; t >= 0; t -= 1) {
                                    const s = a[t];
                                    i && s.listener === i || i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i ? (n.removeEventListener(e, s.proxyListener, r), a.splice(t, 1)) : i || (n.removeEventListener(e, s.proxyListener, r), a.splice(t, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function (...e) {
                    const t = l(),
                        s = e[0].split(" "),
                        i = e[1];
                    for (let r = 0; r < s.length; r += 1) {
                        const n = s[r];
                        for (let s = 0; s < this.length; s += 1) {
                            const r = this[s];
                            if (t.CustomEvent) {
                                const s = new t.CustomEvent(n, {
                                    detail: i,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                r.dom7EventData = e.filter(((e, t) => t > 0)), r.dispatchEvent(s), r.dom7EventData = [], delete r.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function (e) {
                    const t = this;
                    return e && t.on("transitionend", (function s(i) {
                        i.target === this && (e.call(this, i), t.off("transitionend", s))
                    })), this
                },
                outerWidth: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function () {
                    const e = l();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function () {
                    if (this.length > 0) {
                        const e = l(),
                            t = a(),
                            s = this[0],
                            i = s.getBoundingClientRect(),
                            r = t.body,
                            n = s.clientTop || r.clientTop || 0,
                            o = s.clientLeft || r.clientLeft || 0,
                            d = s === e ? e.scrollY : s.scrollTop,
                            c = s === e ? e.scrollX : s.scrollLeft;
                        return {
                            top: i.top + d - n,
                            left: i.left + c - o
                        }
                    }
                    return null
                },
                css: function (e, t) {
                    const s = l();
                    let i;
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (const t in e) this[i].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function (e) {
                    return e ? (this.forEach(((t, s) => {
                        e.apply(t, [t, s])
                    })), this) : this
                },
                html: function (e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function (e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function (e) {
                    const t = l(),
                        s = a(),
                        i = this[0];
                    let r, n;
                    if (!i || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (i.matches) return i.matches(e);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                        if (i.msMatchesSelector) return i.msMatchesSelector(e);
                        for (r = u(e), n = 0; n < r.length; n += 1)
                            if (r[n] === i) return !0;
                        return !1
                    }
                    if (e === s) return i === s;
                    if (e === t) return i === t;
                    if (e.nodeType || e instanceof d) {
                        for (r = e.nodeType ? [e] : e, n = 0; n < r.length; n += 1)
                            if (r[n] === i) return !0;
                        return !1
                    }
                    return !1
                },
                index: function () {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function (e) {
                    if ("undefined" === typeof e) return this;
                    const t = this.length;
                    if (e > t - 1) return u([]);
                    if (e < 0) {
                        const s = t + e;
                        return u(s < 0 ? [] : [this[s]])
                    }
                    return u([this[e]])
                },
                append: function (...e) {
                    let t;
                    const s = a();
                    for (let i = 0; i < e.length; i += 1) {
                        t = e[i];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" === typeof t) {
                                const i = s.createElement("div");
                                for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                            } else if (t instanceof d)
                            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t)
                    }
                    return this
                },
                prepend: function (e) {
                    const t = a();
                    let s, i;
                    for (s = 0; s < this.length; s += 1)
                        if ("string" === typeof e) {
                            const r = t.createElement("div");
                            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(r.childNodes[i], this[s].childNodes[0])
                        } else if (e instanceof d)
                        for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
                    else this[s].insertBefore(e, this[s].childNodes[0]);
                    return this
                },
                next: function (e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? u([this[0].nextElementSibling]) : u([]) : this[0].nextElementSibling ? u([this[0].nextElementSibling]) : u([]) : u([])
                },
                nextAll: function (e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.nextElementSibling;) {
                        const i = s.nextElementSibling;
                        e ? u(i).is(e) && t.push(i) : t.push(i), s = i
                    }
                    return u(t)
                },
                prev: function (e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && u(t.previousElementSibling).is(e) ? u([t.previousElementSibling]) : u([]) : t.previousElementSibling ? u([t.previousElementSibling]) : u([])
                    }
                    return u([])
                },
                prevAll: function (e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.previousElementSibling;) {
                        const i = s.previousElementSibling;
                        e ? u(i).is(e) && t.push(i) : t.push(i), s = i
                    }
                    return u(t)
                },
                parent: function (e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                    return u(t)
                },
                parents: function (e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let i = this[s].parentNode;
                        for (; i;) e ? u(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
                    }
                    return u(t)
                },
                closest: function (e) {
                    let t = this;
                    return "undefined" === typeof e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function (e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) t.push(i[e])
                    }
                    return u(t)
                },
                children: function (e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].children;
                        for (let s = 0; s < i.length; s += 1) e && !u(i[s]).is(e) || t.push(i[s])
                    }
                    return u(t)
                },
                filter: function (e) {
                    return u(p(this, e))
                },
                remove: function () {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(m).forEach((e => {
                Object.defineProperty(u.fn, e, {
                    value: m[e],
                    writable: !0
                })
            }));
            var g = u;

            function v(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function w() {
                return Date.now()
            }

            function S(e, t) {
                void 0 === t && (t = "x");
                const s = l();
                let i, r, n;
                const a = function (e) {
                    const t = l();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = s.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
            }

            function b(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function T(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function y() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < arguments.length; s += 1) {
                    const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                    if (void 0 !== i && null !== i && !T(i)) {
                        const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                        for (let t = 0, r = s.length; t < r; t += 1) {
                            const r = s[t],
                                n = Object.getOwnPropertyDescriptor(i, r);
                            void 0 !== n && n.enumerable && (b(e[r]) && b(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : y(e[r], i[r]) : !b(e[r]) && b(i[r]) ? (e[r] = {}, i[r].__swiper__ ? e[r] = i[r] : y(e[r], i[r])) : e[r] = i[r])
                        }
                    }
                }
                return e
            }

            function E(e, t, s) {
                e.style.setProperty(t, s)
            }

            function x(e) {
                let {
                    swiper: t,
                    targetPosition: s,
                    side: i
                } = e;
                const r = l(),
                    n = -t.translate;
                let a, o = null;
                const d = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
                const c = s > n ? "next" : "prev",
                    p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    u = () => {
                        a = (new Date).getTime(), null === o && (o = a);
                        const e = Math.max(Math.min((a - o) / d, 1), 0),
                            l = .5 - Math.cos(e * Math.PI) / 2;
                        let c = n + l * (s - n);
                        if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                                [i]: c
                            }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [i]: c
                            })
                        })), void r.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = r.requestAnimationFrame(u)
                    };
                u()
            }
            let C, M, P;

            function k() {
                return C || (C = function () {
                    const e = l(),
                        t = a();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function () {
                            let t = !1;
                            try {
                                const s = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, s)
                            } catch (s) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), C
            }

            function O(e) {
                return void 0 === e && (e = {}), M || (M = function (e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const s = k(),
                        i = l(),
                        r = i.navigator.platform,
                        n = t || i.navigator.userAgent,
                        a = {
                            ios: !1,
                            android: !1
                        },
                        o = i.screen.width,
                        d = i.screen.height,
                        c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let p = n.match(/(iPad).*OS\s([\d_]+)/);
                    const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                        f = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === r;
                    let m = "MacIntel" === r;
                    return !p && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), c && !h && (a.os = "android", a.android = !0), (p || f || u) && (a.os = "ios", a.ios = !0), a
                }(e)), M
            }

            function L() {
                return P || (P = function () {
                    const e = l();
                    return {
                        isSafari: function () {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), P
            }
            var $ = {
                on(e, t, s) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;
                    const r = s ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                    })), i
                },
                once(e, t, s) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;

                    function r() {
                        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                        for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
                        t.apply(i, n)
                    }
                    return r.__emitterProxy = t, i.on(e, r, s)
                },
                onAny(e, t) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" !== typeof e) return s;
                    const i = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
                },
                off(e, t) {
                    const s = this;
                    return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, r) => {
                            (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1)
                        }))
                    })), s) : s
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, s, i;
                    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                    "string" === typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i);
                    return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(i, [t, ...s])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(i, s)
                        }))
                    })), e
                }
            };
            var _ = {
                updateSize: function () {
                    const e = this;
                    let t, s;
                    const i = e.$el;
                    t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function () {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        } [t]
                    }

                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0)
                    }
                    const i = e.params,
                        {
                            $wrapperEl: r,
                            size: n,
                            rtlTranslate: a,
                            wrongRTL: o
                        } = e,
                        l = e.virtual && i.virtual.enabled,
                        d = l ? e.virtual.slides.length : e.slides.length,
                        c = r.children(`.${e.params.slideClass}`),
                        p = l ? e.virtual.slides.length : c.length;
                    let u = [];
                    const f = [],
                        h = [];
                    let m = i.slidesOffsetBefore;
                    "function" === typeof m && (m = i.slidesOffsetBefore.call(e));
                    let g = i.slidesOffsetAfter;
                    "function" === typeof g && (g = i.slidesOffsetAfter.call(e));
                    const v = e.snapGrid.length,
                        w = e.slidesGrid.length;
                    let S = i.spaceBetween,
                        b = -m,
                        T = 0,
                        y = 0;
                    if ("undefined" === typeof n) return;
                    "string" === typeof S && S.indexOf("%") >= 0 && (S = parseFloat(S.replace("%", "")) / 100 * n), e.virtualSize = -S, a ? c.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), i.centeredSlides && i.cssMode && (E(e.wrapperEl, "--swiper-centered-offset-before", ""), E(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const x = i.grid && i.grid.rows > 1 && e.grid;
                    let C;
                    x && e.grid.initSlides(p);
                    const M = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => "undefined" !== typeof i.breakpoints[e].slidesPerView)).length > 0;
                    for (let E = 0; E < p; E += 1) {
                        C = 0;
                        const r = c.eq(E);
                        if (x && e.grid.updateSlide(E, r, p, t), "none" !== r.css("display")) {
                            if ("auto" === i.slidesPerView) {
                                M && (c[E].style[t("width")] = "");
                                const n = getComputedStyle(r[0]),
                                    a = r[0].style.transform,
                                    o = r[0].style.webkitTransform;
                                if (a && (r[0].style.transform = "none"), o && (r[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
                                else {
                                    const e = s(n, "width"),
                                        t = s(n, "padding-left"),
                                        i = s(n, "padding-right"),
                                        a = s(n, "margin-left"),
                                        o = s(n, "margin-right"),
                                        l = n.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) C = e + a + o;
                                    else {
                                        const {
                                            clientWidth: s,
                                            offsetWidth: n
                                        } = r[0];
                                        C = e + t + i + a + o + (n - s)
                                    }
                                }
                                a && (r[0].style.transform = a), o && (r[0].style.webkitTransform = o), i.roundLengths && (C = Math.floor(C))
                            } else C = (n - (i.slidesPerView - 1) * S) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), c[E] && (c[E].style[t("width")] = `${C}px`);
                            c[E] && (c[E].swiperSlideSize = C), h.push(C), i.centeredSlides ? (b = b + C / 2 + T / 2 + S, 0 === T && 0 !== E && (b = b - n / 2 - S), 0 === E && (b = b - n / 2 - S), Math.abs(b) < .001 && (b = 0), i.roundLengths && (b = Math.floor(b)), y % i.slidesPerGroup === 0 && u.push(b), f.push(b)) : (i.roundLengths && (b = Math.floor(b)), (y - Math.min(e.params.slidesPerGroupSkip, y)) % e.params.slidesPerGroup === 0 && u.push(b), f.push(b), b = b + C + S), e.virtualSize += C + S, T = C, y += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, n) + g, a && o && ("slide" === i.effect || "coverflow" === i.effect) && r.css({
                            width: `${e.virtualSize+i.spaceBetween}px`
                        }), i.setWrapperSize && r.css({
                            [t("width")]: `${e.virtualSize+i.spaceBetween}px`
                        }), x && e.grid.updateWrapperSize(C, u, t), !i.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < u.length; s += 1) {
                            let r = u[s];
                            i.roundLengths && (r = Math.floor(r)), u[s] <= e.virtualSize - n && t.push(r)
                        }
                        u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n)
                    }
                    if (0 === u.length && (u = [0]), 0 !== i.spaceBetween) {
                        const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                        c.filter(((e, t) => !i.cssMode || t !== c.length - 1)).css({
                            [s]: `${S}px`
                        })
                    }
                    if (i.centeredSlides && i.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (i.spaceBetween ? i.spaceBetween : 0)
                        })), e -= i.spaceBetween;
                        const t = e - n;
                        u = u.map((e => e < 0 ? -m : e > t ? t + g : e))
                    }
                    if (i.centerInsufficientSlides) {
                        let e = 0;
                        if (h.forEach((t => {
                                e += t + (i.spaceBetween ? i.spaceBetween : 0)
                            })), e -= i.spaceBetween, e < n) {
                            const t = (n - e) / 2;
                            u.forEach(((e, s) => {
                                u[s] = e - t
                            })), f.forEach(((e, s) => {
                                f[s] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: c,
                            snapGrid: u,
                            slidesGrid: f,
                            slidesSizesGrid: h
                        }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                        E(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), E(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    if (p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== w && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !l && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                        const t = `${i.containerModifierClass}backface-hidden`,
                            s = e.$el.hasClass(t);
                        p <= i.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
                    }
                },
                updateAutoHeight: function (e) {
                    const t = this,
                        s = [],
                        i = t.virtual && t.params.virtual.enabled;
                    let r, n = 0;
                    "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const a = e => i ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || g([])).each((e => {
                            s.push(e)
                        }));
                        else
                            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                                const e = t.activeIndex + r;
                                if (e > t.slides.length && !i) break;
                                s.push(a(e))
                            } else s.push(a(t.activeIndex));
                    for (r = 0; r < s.length; r += 1)
                        if ("undefined" !== typeof s[r]) {
                            const e = s[r].offsetHeight;
                            n = e > n ? e : n
                        }(n || 0 === n) && t.$wrapperEl.css("height", `${n}px`)
                },
                updateSlidesOffset: function () {
                    const e = this,
                        t = e.slides;
                    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        s = t.params,
                        {
                            slides: i,
                            rtlTranslate: r,
                            snapGrid: n
                        } = t;
                    if (0 === i.length) return;
                    "undefined" === typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
                    let a = -e;
                    r && (a = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let o = 0; o < i.length; o += 1) {
                        const e = i[o];
                        let l = e.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
                        const d = (a + (s.centeredSlides ? t.minTranslate() : 0) - l) / (e.swiperSlideSize + s.spaceBetween),
                            c = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) / (e.swiperSlideSize + s.spaceBetween),
                            p = -(a - l),
                            u = p + t.slidesSizesGrid[o];
                        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o), i.eq(o).addClass(s.slideVisibleClass)), e.progress = r ? -d : d, e.originalProgress = r ? -c : c
                    }
                    t.visibleSlides = g(t.visibleSlides)
                },
                updateProgress: function (e) {
                    const t = this;
                    if ("undefined" === typeof e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        i = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: r,
                        isBeginning: n,
                        isEnd: a
                    } = t;
                    const o = n,
                        l = a;
                    0 === i ? (r = 0, n = !0, a = !0) : (r = (e - t.minTranslate()) / i, n = r <= 0, a = r >= 1), Object.assign(t, {
                        progress: r,
                        isBeginning: n,
                        isEnd: a
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !n || l && !a) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function () {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            $wrapperEl: i,
                            activeIndex: r,
                            realIndex: n
                        } = e,
                        a = e.virtual && s.virtual.enabled;
                    let o;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), o = a ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r), o.addClass(s.slideActiveClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
                    let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === l.length && (l = t.eq(0), l.addClass(s.slideNextClass));
                    let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function (e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: i,
                            snapGrid: r,
                            params: n,
                            activeIndex: a,
                            realIndex: o,
                            snapIndex: l
                        } = t;
                    let d, c = e;
                    if ("undefined" === typeof c) {
                        for (let e = 0; e < i.length; e += 1) "undefined" !== typeof i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? c = e : s >= i[e] && s < i[e + 1] && (c = e + 1) : s >= i[e] && (c = e);
                        n.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
                    }
                    if (r.indexOf(s) >= 0) d = r.indexOf(s);
                    else {
                        const e = Math.min(n.slidesPerGroupSkip, c);
                        d = e + Math.floor((c - e) / n.slidesPerGroup)
                    }
                    if (d >= r.length && (d = r.length - 1), c === a) return void(d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: p,
                        previousIndex: a,
                        activeIndex: c
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function (e) {
                    const t = this,
                        s = t.params,
                        i = g(e).closest(`.${s.slideClass}`)[0];
                    let r, n = !1;
                    if (i)
                        for (let a = 0; a < t.slides.length; a += 1)
                            if (t.slides[a] === i) {
                                n = !0, r = a;
                                break
                            } if (!i || !n) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var z = {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: i,
                        $wrapperEl: r
                    } = this;
                    if (t.virtualTranslate) return s ? -i : i;
                    if (t.cssMode) return i;
                    let n = S(r[0], e);
                    return s && (n = -n), n || 0
                },
                setTranslate: function (e, t) {
                    const s = this,
                        {
                            rtlTranslate: i,
                            params: r,
                            $wrapperEl: n,
                            wrapperEl: a,
                            progress: o
                        } = s;
                    let l, d = 0,
                        c = 0;
                    s.isHorizontal() ? d = i ? -e : e : c = e, r.roundLengths && (d = Math.floor(d), c = Math.floor(c)), r.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : r.virtualTranslate || n.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                    const p = s.maxTranslate() - s.minTranslate();
                    l = 0 === p ? 0 : (e - s.minTranslate()) / p, l !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e, t, s, i, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
                    const n = this,
                        {
                            params: a,
                            wrapperEl: o
                        } = n;
                    if (n.animating && a.preventInteractionOnTransition) return !1;
                    const l = n.minTranslate(),
                        d = n.maxTranslate();
                    let c;
                    if (c = i && e > l ? l : i && e < d ? d : e, n.updateProgress(c), a.cssMode) {
                        const e = n.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!n.support.smoothScroll) return x({
                                swiper: n,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"))
                    }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function A(e) {
                let {
                    swiper: t,
                    runCallbacks: s,
                    direction: i,
                    step: r
                } = e;
                const {
                    activeIndex: n,
                    previousIndex: a
                } = t;
                let o = i;
                if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), s && n !== a) {
                    if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
                    t.emit(`slideChangeTransition${r}`), "next" === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
                }
            }
            var I = {
                slideTo: function (e, t, s, i, r) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" !== typeof e && "string" !== typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const n = this;
                    let a = e;
                    a < 0 && (a = 0);
                    const {
                        params: o,
                        snapGrid: l,
                        slidesGrid: d,
                        previousIndex: c,
                        activeIndex: p,
                        rtlTranslate: u,
                        wrapperEl: f,
                        enabled: h
                    } = n;
                    if (n.animating && o.preventInteractionOnTransition || !h && !i && !r) return !1;
                    const m = Math.min(n.params.slidesPerGroupSkip, a);
                    let g = m + Math.floor((a - m) / n.params.slidesPerGroup);
                    g >= l.length && (g = l.length - 1), (p || o.initialSlide || 0) === (c || 0) && s && n.emit("beforeSlideChangeStart");
                    const v = -l[g];
                    if (n.updateProgress(v), o.normalizeSlideIndex)
                        for (let S = 0; S < d.length; S += 1) {
                            const e = -Math.floor(100 * v),
                                t = Math.floor(100 * d[S]),
                                s = Math.floor(100 * d[S + 1]);
                            "undefined" !== typeof d[S + 1] ? e >= t && e < s - (s - t) / 2 ? a = S : e >= t && e < s && (a = S + 1) : e >= t && (a = S)
                        }
                    if (n.initialized && a !== p) {
                        if (!n.allowSlideNext && v < n.translate && v < n.minTranslate()) return !1;
                        if (!n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (p || 0) !== a) return !1
                    }
                    let w;
                    if (w = a > p ? "next" : a < p ? "prev" : "reset", u && -v === n.translate || !u && v === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(v), "reset" !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)), !1;
                    if (o.cssMode) {
                        const e = n.isHorizontal(),
                            s = u ? v : -v;
                        if (0 === t) {
                            const t = n.virtual && n.params.virtual.enabled;
                            t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                                n.wrapperEl.style.scrollSnapType = "", n._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!n.support.smoothScroll) return x({
                                swiper: n,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return n.setTransition(t), n.setTranslate(v), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, w), 0 === t ? n.transitionEnd(s, w) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, w))
                    }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function (e, t, s, i) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const r = this;
                    let n = e;
                    return r.params.loop && (n += r.loopedSlides), r.slideTo(n, t, s, i)
                },
                slideNext: function (e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const i = this,
                        {
                            animating: r,
                            enabled: n,
                            params: a
                        } = i;
                    if (!n) return i;
                    let o = a.slidesPerGroup;
                    "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                    const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
                    if (a.loop) {
                        if (r && a.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }
                    return a.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s)
                },
                slidePrev: function (e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const i = this,
                        {
                            params: r,
                            animating: n,
                            snapGrid: a,
                            slidesGrid: o,
                            rtlTranslate: l,
                            enabled: d
                        } = i;
                    if (!d) return i;
                    if (r.loop) {
                        if (n && r.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const p = c(l ? i.translate : -i.translate),
                        u = a.map((e => c(e)));
                    let f = a[u.indexOf(p) - 1];
                    if ("undefined" === typeof f && r.cssMode) {
                        let e;
                        a.forEach(((t, s) => {
                            p >= t && (e = s)
                        })), "undefined" !== typeof e && (f = a[e > 0 ? e - 1 : e])
                    }
                    let h = 0;
                    if ("undefined" !== typeof f && (h = o.indexOf(f), h < 0 && (h = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), r.rewind && i.isBeginning) {
                        const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                        return i.slideTo(r, e, t, s)
                    }
                    return i.slideTo(h, e, t, s)
                },
                slideReset: function (e, t, s) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
                },
                slideToClosest: function (e, t, s, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                    const r = this;
                    let n = r.activeIndex;
                    const a = Math.min(r.params.slidesPerGroupSkip, n),
                        o = a + Math.floor((n - a) / r.params.slidesPerGroup),
                        l = r.rtlTranslate ? r.translate : -r.translate;
                    if (l >= r.snapGrid[o]) {
                        const e = r.snapGrid[o];
                        l - e > (r.snapGrid[o + 1] - e) * i && (n += r.params.slidesPerGroup)
                    } else {
                        const e = r.snapGrid[o - 1];
                        l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup)
                    }
                    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s)
                },
                slideToClickedSlide: function () {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: s
                        } = e,
                        i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let r, n = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        r = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                            e.slideTo(n)
                        }))) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                            e.slideTo(n)
                        }))) : e.slideTo(n)
                    } else e.slideTo(n)
                }
            };
            var N = {
                loopCreate: function () {
                    const e = this,
                        t = a(),
                        {
                            params: s,
                            $wrapperEl: i
                        } = e,
                        r = i.children().length > 0 ? g(i.children()[0].parentNode) : i;
                    r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let n = r.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup) {
                            for (let i = 0; i < e; i += 1) {
                                const e = g(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                r.append(e)
                            }
                            n = r.children(`.${s.slideClass}`)
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
                    const o = [],
                        l = [];
                    n.each(((e, t) => {
                        g(e).attr("data-swiper-slide-index", t)
                    }));
                    for (let a = 0; a < e.loopedSlides; a += 1) {
                        const e = a - Math.floor(a / n.length) * n.length;
                        l.push(n.eq(e)[0]), o.unshift(n.eq(n.length - e - 1)[0])
                    }
                    for (let a = 0; a < l.length; a += 1) r.append(g(l[a].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let a = o.length - 1; a >= 0; a -= 1) r.prepend(g(o[a].cloneNode(!0)).addClass(s.slideDuplicateClass))
                },
                loopFix: function () {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: s,
                        loopedSlides: i,
                        allowSlidePrev: r,
                        allowSlideNext: n,
                        snapGrid: a,
                        rtlTranslate: o
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const d = -a[t] - e.getTranslate();
                    if (t < i) {
                        l = s.length - 3 * i + t, l += i;
                        e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                    } else if (t >= s.length - i) {
                        l = -s.length + t + i, l += i;
                        e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix")
                },
                loopDestroy: function () {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: s
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                }
            };

            function D(e) {
                const t = this,
                    s = a(),
                    i = l(),
                    r = t.touchEventsData,
                    {
                        params: n,
                        touches: o,
                        enabled: d
                    } = t;
                if (!d) return;
                if (t.animating && n.preventInteractionOnTransition) return;
                !t.animating && n.cssMode && n.loop && t.loopFix();
                let c = e;
                c.originalEvent && (c = c.originalEvent);
                let p = g(c.target);
                if ("wrapper" === n.touchEventsTarget && !p.closest(t.wrapperEl).length) return;
                if (r.isTouchEvent = "touchstart" === c.type, !r.isTouchEvent && "which" in c && 3 === c.which) return;
                if (!r.isTouchEvent && "button" in c && c.button > 0) return;
                if (r.isTouched && r.isMoved) return;
                !!n.noSwipingClass && "" !== n.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (p = g(e.path[0]));
                const u = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
                    f = !(!c.target || !c.target.shadowRoot);
                if (n.noSwiping && (f ? function (e, t) {
                        return void 0 === t && (t = this),
                            function t(s) {
                                if (!s || s === a() || s === l()) return null;
                                s.assignedSlot && (s = s.assignedSlot);
                                const i = s.closest(e);
                                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                            }(t)
                    }(u, p[0]) : p.closest(u)[0])) return void(t.allowClick = !0);
                if (n.swipeHandler && !p.closest(n.swipeHandler)[0]) return;
                o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
                const h = o.currentX,
                    m = o.currentY,
                    v = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                    S = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (v && (h <= S || h >= i.innerWidth - S)) {
                    if ("prevent" !== v) return;
                    e.preventDefault()
                }
                if (Object.assign(r, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), o.startX = h, o.startY = m, r.touchStartTime = w(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== c.type) {
                    let e = !0;
                    p.is(r.focusableElements) && (e = !1, "SELECT" === p[0].nodeName && (r.isTouched = !1)), s.activeElement && g(s.activeElement).is(r.focusableElements) && s.activeElement !== p[0] && s.activeElement.blur();
                    const i = e && t.allowTouchMove && n.touchStartPreventDefault;
                    !n.touchStartForcePreventDefault && !i || p[0].isContentEditable || c.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c)
            }

            function G(e) {
                const t = a(),
                    s = this,
                    i = s.touchEventsData,
                    {
                        params: r,
                        touches: n,
                        rtlTranslate: o,
                        enabled: l
                    } = s;
                if (!l) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
                if (i.isTouchEvent && "touchmove" !== d.type) return;
                const c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    p = "touchmove" === d.type ? c.pageX : d.pageX,
                    u = "touchmove" === d.type ? c.pageY : d.pageY;
                if (d.preventedByNestedSwiper) return n.startX = p, void(n.startY = u);
                if (!s.allowTouchMove) return g(d.target).is(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
                    startX: p,
                    startY: u,
                    currentX: p,
                    currentY: u
                }), i.touchStartTime = w()));
                if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                    if (s.isVertical()) {
                        if (u < n.startY && s.translate <= s.maxTranslate() || u > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (p < n.startX && s.translate <= s.maxTranslate() || p > n.startX && s.translate >= s.minTranslate()) return;
                if (i.isTouchEvent && t.activeElement && d.target === t.activeElement && g(d.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
                if (i.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                n.currentX = p, n.currentY = u;
                const f = n.currentX - n.startX,
                    h = n.currentY - n.startY;
                if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold) return;
                if ("undefined" === typeof i.isScrolling) {
                    let e;
                    s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
                }
                if (i.isScrolling && s.emit("touchMoveOpposite", d), "undefined" === typeof i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
                if (!i.startMoving) return;
                s.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)), s.emit("sliderMove", d), i.isMoved = !0;
                let m = s.isHorizontal() ? f : h;
                n.diff = m, m *= r.touchRatio, o && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
                let v = !0,
                    S = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (S = 0), m > 0 && i.currentTranslate > s.minTranslate() ? (v = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** S)) : m < 0 && i.currentTranslate < s.maxTranslate() && (v = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** S)), v && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
                    if (!(Math.abs(m) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
            }

            function B(e) {
                const t = this,
                    s = t.touchEventsData,
                    {
                        params: i,
                        touches: r,
                        rtlTranslate: n,
                        slidesGrid: a,
                        enabled: o
                    } = t;
                if (!o) return;
                let l = e;
                if (l.originalEvent && (l = l.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", l), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const d = w(),
                    c = d - s.touchStartTime;
                if (t.allowClick) {
                    const e = l.path || l.composedPath && l.composedPath();
                    t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
                }
                if (s.lastClickTime = w(), v((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                let p;
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = i.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
                if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: p
                });
                let u = 0,
                    f = t.slidesSizesGrid[0];
                for (let v = 0; v < a.length; v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                    const e = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    "undefined" !== typeof a[v + e] ? p >= a[v] && p < a[v + e] && (u = v, f = a[v + e] - a[v]) : p >= a[v] && (u = v, f = a[a.length - 1] - a[a.length - 2])
                }
                let h = null,
                    m = null;
                i.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
                const g = (p - a[u]) / f,
                    S = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (c > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? h : u + S) : t.slideTo(u)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(u + S) : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(m) : t.slideTo(u))
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(u + S) : t.slideTo(u) : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : u + S), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u))
                }
            }

            function j() {
                const e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: i,
                    allowSlidePrev: r,
                    snapGrid: n
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
            }

            function H(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function R() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: s,
                        enabled: i
                    } = e;
                if (!i) return;
                let r;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const n = e.maxTranslate() - e.minTranslate();
                r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let V = !1;

            function F() {}
            const W = (e, t) => {
                const s = a(),
                    {
                        params: i,
                        touchEvents: r,
                        el: n,
                        wrapperEl: o,
                        device: l,
                        support: d
                    } = e,
                    c = !!i.nested,
                    p = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (d.touch) {
                    const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                        passive: !1,
                        capture: c
                    } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
                } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
                (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && o[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j, !0) : e[u]("observerUpdate", j, !0)
            };
            var q = {
                attachEvents: function () {
                    const e = this,
                        t = a(),
                        {
                            params: s,
                            support: i
                        } = e;
                    e.onTouchStart = D.bind(e), e.onTouchMove = G.bind(e), e.onTouchEnd = B.bind(e), s.cssMode && (e.onScroll = R.bind(e)), e.onClick = H.bind(e), i.touch && !V && (t.addEventListener("touchstart", F), V = !0), W(e, "on")
                },
                detachEvents: function () {
                    W(this, "off")
                }
            };
            const X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var Y = {
                setBreakpoint: function () {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: i = 0,
                            params: r,
                            $el: n
                        } = e,
                        a = r.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!o || e.currentBreakpoint === o) return;
                    const l = (o in a ? a[o] : void 0) || e.originalParams,
                        d = X(e, r),
                        c = X(e, l),
                        p = r.enabled;
                    d && !c ? (n.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (n.addClass(`${r.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === r.grid.fill) && n.addClass(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = r[t] && r[t].enabled,
                            i = l[t] && l[t].enabled;
                        s && !i && e[t].disable(), !s && i && e[t].enable()
                    }));
                    const u = l.direction && l.direction !== r.direction,
                        f = r.loop && (l.slidesPerView !== r.slidesPerView || u);
                    u && s && e.changeDirection(), y(e.params, l);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), f && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function (e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let i = !1;
                    const r = l(),
                        n = "window" === t ? r.innerHeight : s.clientHeight,
                        a = Object.keys(e).map((e => {
                            if ("string" === typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let o = 0; o < a.length; o += 1) {
                        const {
                            point: e,
                            value: n
                        } = a[o];
                        "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (i = e) : n <= s.clientWidth && (i = e)
                    }
                    return i || "max"
                }
            };
            var U = {
                addClasses: function () {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: i,
                            $el: r,
                            device: n,
                            support: a
                        } = e,
                        o = function (e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" === typeof e ? Object.keys(e).forEach((i => {
                                    e[i] && s.push(t + i)
                                })) : "string" === typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "pointer-events": !a.touch
                        }, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: i
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: n.android
                        }, {
                            ios: n.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }, {
                            "watch-progress": s.watchSlidesProgress
                        }], s.containerModifierClass);
                    t.push(...o), r.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function () {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            };
            var Z = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function K(e, t) {
                return function (s) {
                    void 0 === s && (s = {});
                    const i = Object.keys(s)[0],
                        r = s[i];
                    "object" === typeof r && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
                        auto: !0
                    }), i in e && "enabled" in r ? (!0 === e[i] && (e[i] = {
                        enabled: !0
                    }), "object" !== typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                        enabled: !1
                    }), y(t, s)) : y(t, s)) : y(t, s)
                }
            }
            const J = {
                    eventsEmitter: $,
                    update: _,
                    translate: z,
                    transition: {
                        setTransition: function (e, t) {
                            const s = this;
                            s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                        },
                        transitionStart: function (e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: i
                                } = s;
                            i.cssMode || (i.autoHeight && s.updateAutoHeight(), A({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function (e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: i
                                } = s;
                            s.animating = !1, i.cssMode || (s.setTransition(0), A({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: I,
                    loop: N,
                    grabCursor: {
                        setGrabCursor: function (e) {
                            const t = this;
                            if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function () {
                            const e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: q,
                    breakpoints: Y,
                    checkOverflow: {
                        checkOverflow: function () {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: s
                                } = e,
                                {
                                    slidesOffsetBefore: i
                                } = s;
                            if (i) {
                                const t = e.slides.length - 1,
                                    s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                                e.isLocked = e.size > s
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: U,
                    images: {
                        loadImage: function (e, t, s, i, r, n) {
                            const a = l();
                            let o;

                            function d() {
                                n && n()
                            }
                            g(e).parent("picture")[0] || e.complete && r ? d() : t ? (o = new a.Image, o.onload = d, o.onerror = d, i && (o.sizes = i), s && (o.srcset = s), t && (o.src = t)) : d()
                        },
                        preloadImages: function () {
                            const e = this;

                            function t() {
                                "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                const i = e.imagesToLoad[s];
                                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                Q = {};
            class ee {
                constructor() {
                    let e, t;
                    for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
                    if (1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = y({}, t), e && !t.el && (t.el = e), t.el && g(t.el).length > 1) {
                        const e = [];
                        return g(t.el).each((s => {
                            const i = y({}, t, {
                                el: s
                            });
                            e.push(new ee(i))
                        })), e
                    }
                    const n = this;
                    n.__swiper__ = !0, n.support = k(), n.device = O({
                        userAgent: t.userAgent
                    }), n.browser = L(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], t.modules && Array.isArray(t.modules) && n.modules.push(...t.modules);
                    const a = {};
                    n.modules.forEach((e => {
                        e({
                            swiper: n,
                            extendParams: K(t, a),
                            on: n.on.bind(n),
                            once: n.once.bind(n),
                            off: n.off.bind(n),
                            emit: n.emit.bind(n)
                        })
                    }));
                    const o = y({}, Z, a);
                    return n.params = y({}, o, Q, t), n.originalParams = y({}, n.params), n.passedParams = y({}, t), n.params && n.params.on && Object.keys(n.params.on).forEach((e => {
                        n.on(e, n.params.on[e])
                    })), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = g, Object.assign(n, {
                        enabled: n.params.enabled,
                        el: e,
                        classNames: [],
                        slides: g(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === n.params.direction,
                        isVertical: () => "vertical" === n.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: n.params.allowSlideNext,
                        allowSlidePrev: n.params.allowSlidePrev,
                        touchEvents: function () {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return n.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, n.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: n.params.focusableElements,
                            lastClickTime: w(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: n.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), n.emit("_swiper"), n.params.init && n.init(), n
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const i = s.minTranslate(),
                        r = (s.maxTranslate() - i) * e + i;
                    s.translateTo(r, "undefined" === typeof t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each((s => {
                        const i = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: i
                        }), e.emit("_slideClass", s, i)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: s,
                        slides: i,
                        slidesGrid: r,
                        slidesSizesGrid: n,
                        size: a,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if (s.centeredSlides) {
                        let e, t = i[o].swiperSlideSize;
                        for (let s = o + 1; s < i.length; s += 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > a && (e = !0));
                        for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let d = o + 1; d < i.length; d += 1) {
                            (t ? r[d] + n[d] - r[o] < a : r[d] - r[o] < a) && (l += 1)
                        } else
                            for (let d = o - 1; d >= 0; d -= 1) {
                                r[o] - r[d] < a && (l += 1)
                            }
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: s
                    } = e;

                    function i() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let r;
                    s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (r = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), r || i()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const s = this,
                        i = s.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${i}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), s.emit("changeDirection"), t && s.update()), s
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const s = g(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;
                    const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let r = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = g(e.shadowRoot.querySelector(i()));
                            return t.children = e => s.children(e), t
                        }
                        return s.children ? s.children(i()) : g(s).children(i())
                    })();
                    if (0 === r.length && t.params.createElements) {
                        const e = a().createElement("div");
                        r = g(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                            r.append(e)
                        }))
                    }
                    return Object.assign(t, {
                        $el: s,
                        el: e,
                        $wrapperEl: r,
                        wrapperEl: r[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                        wrongRTL: "-webkit-box" === r.css("display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const s = this,
                        {
                            params: i,
                            $el: r,
                            $wrapperEl: n,
                            slides: a
                        } = s;
                    return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                        s.off(e)
                    })), !1 !== e && (s.$el[0].swiper = null, function (e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                            try {
                                t[e] = null
                            } catch (s) {}
                            try {
                                delete t[e]
                            } catch (s) {}
                        }))
                    }(s)), s.destroyed = !0), null
                }
                static extendDefaults(e) {
                    y(Q, e)
                }
                static get extendedDefaults() {
                    return Q
                }
                static get defaults() {
                    return Z
                }
                static installModule(e) {
                    ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
                    const t = ee.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => ee.installModule(e))), ee) : (ee.installModule(e), ee)
                }
            }
            Object.keys(J).forEach((e => {
                Object.keys(J[e]).forEach((t => {
                    ee.prototype[t] = J[e][t]
                }))
            })), ee.use([function (e) {
                let {
                    swiper: t,
                    on: s,
                    emit: i
                } = e;
                const r = l();
                let n = null,
                    a = null;
                const o = () => {
                        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && i("orientationchange")
                    };
                s("init", (() => {
                    t.params.resizeObserver && "undefined" !== typeof r.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                        a = r.requestAnimationFrame((() => {
                            const {
                                width: s,
                                height: i
                            } = t;
                            let r = s,
                                n = i;
                            e.forEach((e => {
                                let {
                                    contentBoxSize: s,
                                    contentRect: i,
                                    target: a
                                } = e;
                                a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize)
                            })), r === s && n === i || o()
                        }))
                    })), n.observe(t.el)) : (r.addEventListener("resize", o), r.addEventListener("orientationchange", d))
                })), s("destroy", (() => {
                    a && r.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", d)
                }))
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: r
                } = e;
                const n = [],
                    a = l(),
                    o = function (e, t) {
                        void 0 === t && (t = {});
                        const s = new(a.MutationObserver || a.WebkitMutationObserver)((e => {
                            if (1 === e.length) return void r("observerUpdate", e[0]);
                            const t = function () {
                                r("observerUpdate", e[0])
                            };
                            a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                        }));
                        s.observe(e, {
                            attributes: "undefined" === typeof t.attributes || t.attributes,
                            childList: "undefined" === typeof t.childList || t.childList,
                            characterData: "undefined" === typeof t.characterData || t.characterData
                        }), n.push(s)
                    };
                s({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", (() => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = t.$el.parents();
                            for (let t = 0; t < e.length; t += 1) o(e[t])
                        }
                        o(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), o(t.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), i("destroy", (() => {
                    n.forEach((e => {
                        e.disconnect()
                    })), n.splice(0, n.length)
                }))
            }]);
            var te = ee;

            function se(e, t, s) {
                const i = "swiper-slide-shadow" + (s ? `-${s}` : ""),
                    r = e.transformEl ? t.find(e.transformEl) : t;
                let n = r.children(`.${i}`);
                return n.length || (n = g(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`), r.append(n)), n
            }

            function ie(e, t) {
                return e.transformEl ? t.find(e.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : t
            }

            function re(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i
                } = e;
                s({
                    cardsEffect: {
                        slideShadows: !0,
                        transformEl: null,
                        rotate: !0
                    }
                });
                ! function (e) {
                    const {
                        effect: t,
                        swiper: s,
                        on: i,
                        setTranslate: r,
                        setTransition: n,
                        overwriteParams: a,
                        perspective: o,
                        recreateShadows: l,
                        getEffectParams: d
                    } = e;
                    let c;
                    i("beforeInit", (() => {
                        if (s.params.effect !== t) return;
                        s.classNames.push(`${s.params.containerModifierClass}${t}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                        const e = a ? a() : {};
                        Object.assign(s.params, e), Object.assign(s.originalParams, e)
                    })), i("setTranslate", (() => {
                        s.params.effect === t && r()
                    })), i("setTransition", ((e, i) => {
                        s.params.effect === t && n(i)
                    })), i("transitionEnd", (() => {
                        if (s.params.effect === t && l) {
                            if (!d || !d().slideShadows) return;
                            s.slides.each((e => {
                                s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                            })), l()
                        }
                    })), i("virtualUpdate", (() => {
                        s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                            c && s.slides && s.slides.length && (r(), c = !1)
                        })))
                    }))
                }({
                    effect: "cards",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        const {
                            slides: e,
                            activeIndex: s
                        } = t, i = t.params.cardsEffect, {
                            startTranslate: r,
                            isTouched: n
                        } = t.touchEventsData, a = t.translate;
                        for (let o = 0; o < e.length; o += 1) {
                            const l = e.eq(o),
                                d = l[0].progress,
                                c = Math.min(Math.max(d, -4), 4);
                            let p = l[0].swiperSlideOffset;
                            t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                            let u = t.params.cssMode ? -p - t.translate : -p,
                                f = 0;
                            const h = -100 * Math.abs(c);
                            let m = 1,
                                g = -2 * c,
                                v = 8 - .75 * Math.abs(c);
                            const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
                                S = (w === s || w === s - 1) && c > 0 && c < 1 && (n || t.params.cssMode) && a < r,
                                b = (w === s || w === s + 1) && c < 0 && c > -1 && (n || t.params.cssMode) && a > r;
                            if (S || b) {
                                const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                                g += -28 * c * e, m += -.5 * e, v += 96 * e, f = -25 * e * Math.abs(c) + "%"
                            }
                            if (u = c < 0 ? `calc(${u}px + (${v*Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v*Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                                const e = f;
                                f = u, u = e
                            }
                            const T = c < 0 ? "" + (1 + (1 - m) * c) : "" + (1 - (1 - m) * c),
                                y = `\n        translate3d(${u}, ${f}, ${h}px)\n        rotateZ(${i.rotate?g:0}deg)\n        scale(${T})\n      `;
                            if (i.slideShadows) {
                                let e = l.find(".swiper-slide-shadow");
                                0 === e.length && (e = se(i, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                            }
                            l[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                            ie(i, l).transform(y)
                        }
                    },
                    setTransition: e => {
                        const {
                            transformEl: s
                        } = t.params.cardsEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                            function (e) {
                                let {
                                    swiper: t,
                                    duration: s,
                                    transformEl: i,
                                    allSlides: r
                                } = e;
                                const {
                                    slides: n,
                                    activeIndex: a,
                                    $wrapperEl: o
                                } = t;
                                if (t.params.virtualTranslate && 0 !== s) {
                                    let e, s = !1;
                                    e = r ? i ? n.find(i) : n : i ? n.eq(a).find(i) : n.eq(a), e.transitionEnd((() => {
                                        if (s) return;
                                        if (!t || t.destroyed) return;
                                        s = !0, t.animating = !1;
                                        const e = ["webkitTransitionEnd", "transitionend"];
                                        for (let t = 0; t < e.length; t += 1) o.trigger(e[t])
                                    }))
                                }
                            }({
                                swiper: t,
                                duration: e,
                                transformEl: s
                            })
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }
        }
    }
]);