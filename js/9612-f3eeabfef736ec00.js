(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9612], {
        77913: function (t, e, n) {
            "use strict";
            var r = n(85696);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a, d = (a = n(67294)) && a.__esModule ? a : {
                    default: a
                },
                i = n(12199),
                o = n(61587),
                u = n(27215);
            var l = {};

            function $(t, e, n, r) {
                if (t && i.isLocalURL(e)) {
                    t.prefetch(e, n, r).catch((function (t) {
                        0
                    }));
                    var a = r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
                    l[e + "%" + n + (a ? "%" + a : "")] = !0
                }
            }
            var c = function (t) {
                var e, n = !1 !== t.prefetch,
                    a = o.useRouter(),
                    c = d.default.useMemo((function () {
                        var e = i.resolveHref(a, t.href, !0),
                            n = r(e, 2),
                            d = n[0],
                            o = n[1];
                        return {
                            href: d,
                            as: t.as ? i.resolveHref(a, t.as) : o || d
                        }
                    }), [a, t.href, t.as]),
                    s = c.href,
                    f = c.as,
                    h = d.default.useRef(s),
                    p = d.default.useRef(f),
                    y = t.children,
                    m = t.replace,
                    g = t.shallow,
                    v = t.scroll,
                    b = t.locale;
                "string" === typeof y && (y = d.default.createElement("a", null, y));
                var C = (e = d.default.Children.only(y)) && "object" === typeof e && e.ref,
                    O = u.useIntersection({
                        rootMargin: "200px"
                    }),
                    N = r(O, 3),
                    P = N[0],
                    S = N[1],
                    w = N[2],
                    x = d.default.useCallback((function (t) {
                        p.current === f && h.current === s || (w(), p.current = f, h.current = s), P(t), C && ("function" === typeof C ? C(t) : "object" === typeof C && (C.current = t))
                    }), [f, C, s, w, P]);
                d.default.useEffect((function () {
                    var t = S && n && i.isLocalURL(s),
                        e = "undefined" !== typeof b ? b : a && a.locale,
                        r = l[s + "%" + f + (e ? "%" + e : "")];
                    t && !r && $(a, s, f, {
                        locale: e
                    })
                }), [f, s, S, b, n, a]);
                var I = {
                    ref: x,
                    onClick: function (t) {
                        e.props && "function" === typeof e.props.onClick && e.props.onClick(t), t.defaultPrevented || function (t, e, n, r, a, d, o, u) {
                            ("A" !== t.currentTarget.nodeName.toUpperCase() || ! function (t) {
                                var e = t.currentTarget.target;
                                return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                            }(t) && i.isLocalURL(n)) && (t.preventDefault(), e[a ? "replace" : "push"](n, r, {
                                shallow: d,
                                locale: u,
                                scroll: o
                            }))
                        }(t, a, s, f, m, g, v, b)
                    },
                    onMouseEnter: function (t) {
                        e.props && "function" === typeof e.props.onMouseEnter && e.props.onMouseEnter(t), i.isLocalURL(s) && $(a, s, f, {
                            priority: !0
                        })
                    }
                };
                if (t.passHref || "a" === e.type && !("href" in e.props)) {
                    var E = "undefined" !== typeof b ? b : a && a.locale,
                        A = a && a.isLocaleDomain && i.getDomainLocale(f, E, a && a.locales, a && a.domainLocales);
                    I.href = A || i.addBasePath(i.addLocale(f, E, a && a.defaultLocale))
                }
                return d.default.cloneElement(e, I)
            };
            e.default = c, ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && (Object.assign(e.default, e), t.exports = e.default)
        },
        38973: function () {},
        41664: function (t, e, n) {
            t.exports = n(77913)
        },
        15034: function (t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function () {
                    return Br
                }
            });
            var r = n(67294),
                a = {
                    ext: "ext.",
                    country: "Phone number country",
                    phone: "Phone",
                    AB: "Abkhazia",
                    AC: "Ascension Island",
                    AD: "Andorra",
                    AE: "United Arab Emirates",
                    AF: "Afghanistan",
                    AG: "Antigua and Barbuda",
                    AI: "Anguilla",
                    AL: "Albania",
                    AM: "Armenia",
                    AO: "Angola",
                    AQ: "Antarctica",
                    AR: "Argentina",
                    AS: "American Samoa",
                    AT: "Austria",
                    AU: "Australia",
                    AW: "Aruba",
                    AX: "\xc5land Islands",
                    AZ: "Azerbaijan",
                    BA: "Bosnia and Herzegovina",
                    BB: "Barbados",
                    BD: "Bangladesh",
                    BE: "Belgium",
                    BF: "Burkina Faso",
                    BG: "Bulgaria",
                    BH: "Bahrain",
                    BI: "Burundi",
                    BJ: "Benin",
                    BL: "Saint Barth\xe9lemy",
                    BM: "Bermuda",
                    BN: "Brunei Darussalam",
                    BO: "Bolivia",
                    BQ: "Bonaire, Sint Eustatius and Saba",
                    BR: "Brazil",
                    BS: "Bahamas",
                    BT: "Bhutan",
                    BV: "Bouvet Island",
                    BW: "Botswana",
                    BY: "Belarus",
                    BZ: "Belize",
                    CA: "Canada",
                    CC: "Cocos (Keeling) Islands",
                    CD: "Congo, Democratic Republic of the",
                    CF: "Central African Republic",
                    CG: "Congo",
                    CH: "Switzerland",
                    CI: "Cote d'Ivoire",
                    CK: "Cook Islands",
                    CL: "Chile",
                    CM: "Cameroon",
                    CN: "China",
                    CO: "Colombia",
                    CR: "Costa Rica",
                    CU: "Cuba",
                    CV: "Cape Verde",
                    CW: "Cura\xe7ao",
                    CX: "Christmas Island",
                    CY: "Cyprus",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DJ: "Djibouti",
                    DK: "Denmark",
                    DM: "Dominica",
                    DO: "Dominican Republic",
                    DZ: "Algeria",
                    EC: "Ecuador",
                    EE: "Estonia",
                    EG: "Egypt",
                    EH: "Western Sahara",
                    ER: "Eritrea",
                    ES: "Spain",
                    ET: "Ethiopia",
                    FI: "Finland",
                    FJ: "Fiji",
                    FK: "Falkland Islands",
                    FM: "Federated States of Micronesia",
                    FO: "Faroe Islands",
                    FR: "France",
                    GA: "Gabon",
                    GB: "United Kingdom",
                    GD: "Grenada",
                    GE: "Georgia",
                    GF: "French Guiana",
                    GG: "Guernsey",
                    GH: "Ghana",
                    GI: "Gibraltar",
                    GL: "Greenland",
                    GM: "Gambia",
                    GN: "Guinea",
                    GP: "Guadeloupe",
                    GQ: "Equatorial Guinea",
                    GR: "Greece",
                    GS: "South Georgia and the South Sandwich Islands",
                    GT: "Guatemala",
                    GU: "Guam",
                    GW: "Guinea-Bissau",
                    GY: "Guyana",
                    HK: "Hong Kong",
                    HM: "Heard Island and McDonald Islands",
                    HN: "Honduras",
                    HR: "Croatia",
                    HT: "Haiti",
                    HU: "Hungary",
                    ID: "Indonesia",
                    IE: "Ireland",
                    IL: "Israel",
                    IM: "Isle of Man",
                    IN: "India",
                    IO: "British Indian Ocean Territory",
                    IQ: "Iraq",
                    IR: "Iran",
                    IS: "Iceland",
                    IT: "Italy",
                    JE: "Jersey",
                    JM: "Jamaica",
                    JO: "Jordan",
                    JP: "Japan",
                    KE: "Kenya",
                    KG: "Kyrgyzstan",
                    KH: "Cambodia",
                    KI: "Kiribati",
                    KM: "Comoros",
                    KN: "Saint Kitts and Nevis",
                    KP: "North Korea",
                    KR: "South Korea",
                    KW: "Kuwait",
                    KY: "Cayman Islands",
                    KZ: "Kazakhstan",
                    LA: "Laos",
                    LB: "Lebanon",
                    LC: "Saint Lucia",
                    LI: "Liechtenstein",
                    LK: "Sri Lanka",
                    LR: "Liberia",
                    LS: "Lesotho",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    LV: "Latvia",
                    LY: "Libya",
                    MA: "Morocco",
                    MC: "Monaco",
                    MD: "Moldova",
                    ME: "Montenegro",
                    MF: "Saint Martin (French Part)",
                    MG: "Madagascar",
                    MH: "Marshall Islands",
                    MK: "North Macedonia",
                    ML: "Mali",
                    MM: "Burma",
                    MN: "Mongolia",
                    MO: "Macao",
                    MP: "Northern Mariana Islands",
                    MQ: "Martinique",
                    MR: "Mauritania",
                    MS: "Montserrat",
                    MT: "Malta",
                    MU: "Mauritius",
                    MV: "Maldives",
                    MW: "Malawi",
                    MX: "Mexico",
                    MY: "Malaysia",
                    MZ: "Mozambique",
                    NA: "Namibia",
                    NC: "New Caledonia",
                    NE: "Niger",
                    NF: "Norfolk Island",
                    NG: "Nigeria",
                    NI: "Nicaragua",
                    NL: "Netherlands",
                    NO: "Norway",
                    NP: "Nepal",
                    NR: "Nauru",
                    NU: "Niue",
                    NZ: "New Zealand",
                    OM: "Oman",
                    OS: "South Ossetia",
                    PA: "Panama",
                    PE: "Peru",
                    PF: "French Polynesia",
                    PG: "Papua New Guinea",
                    PH: "Philippines",
                    PK: "Pakistan",
                    PL: "Poland",
                    PM: "Saint Pierre and Miquelon",
                    PN: "Pitcairn",
                    PR: "Puerto Rico",
                    PS: "Palestine",
                    PT: "Portugal",
                    PW: "Palau",
                    PY: "Paraguay",
                    QA: "Qatar",
                    RE: "Reunion",
                    RO: "Romania",
                    RS: "Serbia",
                    RU: "Russia",
                    RW: "Rwanda",
                    SA: "Saudi Arabia",
                    SB: "Solomon Islands",
                    SC: "Seychelles",
                    SD: "Sudan",
                    SE: "Sweden",
                    SG: "Singapore",
                    SH: "Saint Helena",
                    SI: "Slovenia",
                    SJ: "Svalbard and Jan Mayen",
                    SK: "Slovakia",
                    SL: "Sierra Leone",
                    SM: "San Marino",
                    SN: "Senegal",
                    SO: "Somalia",
                    SR: "Suriname",
                    SS: "South Sudan",
                    ST: "Sao Tome and Principe",
                    SV: "El Salvador",
                    SX: "Sint Maarten",
                    SY: "Syria",
                    SZ: "Swaziland",
                    TA: "Tristan da Cunha",
                    TC: "Turks and Caicos Islands",
                    TD: "Chad",
                    TF: "French Southern Territories",
                    TG: "Togo",
                    TH: "Thailand",
                    TJ: "Tajikistan",
                    TK: "Tokelau",
                    TL: "Timor-Leste",
                    TM: "Turkmenistan",
                    TN: "Tunisia",
                    TO: "Tonga",
                    TR: "Turkey",
                    TT: "Trinidad and Tobago",
                    TV: "Tuvalu",
                    TW: "Taiwan",
                    TZ: "Tanzania",
                    UA: "Ukraine",
                    UG: "Uganda",
                    UM: "United States Minor Outlying Islands",
                    US: "United States",
                    UY: "Uruguay",
                    UZ: "Uzbekistan",
                    VA: "Holy See (Vatican City State)",
                    VC: "Saint Vincent and the Grenadines",
                    VE: "Venezuela",
                    VG: "Virgin Islands, British",
                    VI: "Virgin Islands, U.S.",
                    VN: "Vietnam",
                    VU: "Vanuatu",
                    WF: "Wallis and Futuna",
                    WS: "Samoa",
                    XK: "Kosovo",
                    YE: "Yemen",
                    YT: "Mayotte",
                    ZA: "South Africa",
                    ZM: "Zambia",
                    ZW: "Zimbabwe",
                    ZZ: "International"
                },
                d = n(45697),
                i = d.shape({
                    country_calling_codes: d.object.isRequired,
                    countries: d.object.isRequired
                }),
                o = d.objectOf(d.string),
                u = n(94184);

            function l(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return $(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function $(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function c(t, e) {
                for (var n, r = 0, a = l(e.split("")); !(n = a()).done;) {
                    n.value === t && r++
                }
                return r
            }

            function s(t, e) {
                for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x", r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : " ", a = t.length, d = c("(", t), i = c(")", t), o = d - i; o > 0 && a < e.length;) t += e[a].replace(n, r), ")" === e[a] && o--, a++;
                return t
            }

            function f(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return h(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function p(t, e, n) {
                "string" === typeof n && (n = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    if (!t) return function (t) {
                        return {
                            text: t
                        }
                    };
                    var r = c(e, t);
                    return function (a) {
                        if (!a) return {
                            text: "",
                            template: t
                        };
                        for (var d, i = 0, o = "", u = f(t.split("")); !(d = u()).done;) {
                            var l = d.value;
                            if (l === e) {
                                if (o += a[i], ++i === a.length && a.length < r) break
                            } else o += l
                        }
                        return n && (o = s(o, t)), {
                            text: o,
                            template: t
                        }
                    }
                }(n));
                var r = n(t) || {},
                    a = r.text,
                    d = r.template;
                if (void 0 === a && (a = t), d)
                    if (void 0 === e) e = a.length;
                    else {
                        for (var i = 0, o = !1, u = -1; i < a.length && i < d.length;) {
                            if (a[i] !== d[i]) {
                                if (0 === e) {
                                    o = !0, e = i;
                                    break
                                }
                                u = i, e--
                            }
                            i++
                        }
                        o || (e = u + 1)
                    } return {
                    text: a,
                    caret: e
                }
            }
            var y = 8,
                m = 46;

            function g(t, e) {
                void 0 !== e && (! function () {
                    if ("undefined" !== typeof navigator) return v.test(navigator.userAgent)
                }() ? t.setSelectionRange(e, e) : setTimeout((function () {
                    return t.setSelectionRange(e, e)
                }), 0))
            }
            var v = /Android/i;

            function b(t, e, n, r, a) {
                if (!e.hasAttribute("readonly")) {
                    var d = function (t) {
                        switch (t.keyCode) {
                            case y:
                                return "Backspace";
                            case m:
                                return "Delete"
                        }
                    }(t);
                    switch (d) {
                        case "Delete":
                        case "Backspace":
                            t.preventDefault();
                            var i = function (t) {
                                if (t.selectionStart !== t.selectionEnd) return {
                                    start: t.selectionStart,
                                    end: t.selectionEnd
                                }
                            }(e);
                            return i ? (C(e, i), O(e, n, r, void 0, a)) : O(e, n, r, d, a)
                    }
                }
            }

            function C(t, e) {
                var n = t.value;
                n = n.slice(0, e.start) + n.slice(e.end), t.value = n, g(t, e.start)
            }

            function O(t, e, n, r, a) {
                var d = function (t, e, n) {
                        for (var r = "", a = 0, d = 0; d < t.length;) {
                            var i = n(t[d], r);
                            void 0 !== i && (r += i, void 0 !== e && (e === d ? a = r.length - 1 : e > d && (a = r.length))), d++
                        }
                        return void 0 === e && (a = r.length), {
                            value: r,
                            caret: a
                        }
                    }(t.value, t.selectionStart, e),
                    i = d.value,
                    o = d.caret;
                if (r) {
                    var u = function (t, e, n) {
                        switch (n) {
                            case "Backspace":
                                e > 0 && (t = t.slice(0, e - 1) + t.slice(e), e--);
                                break;
                            case "Delete":
                                t = t.slice(0, e) + t.slice(e + 1)
                        }
                        return {
                            value: t,
                            caret: e
                        }
                    }(i, o, r);
                    i = u.value, o = u.caret
                }
                var l = p(i, o, n),
                    $ = l.text;
                o = l.caret, t.value = $, g(t, o), a(i)
            }
            var N = ["value", "parse", "format", "inputComponent", "onChange", "onKeyDown"];

            function P() {
                return P = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, P.apply(this, arguments)
            }

            function S(t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }

            function w(t, e) {
                var n = t.value,
                    a = t.parse,
                    d = t.format,
                    i = t.inputComponent,
                    o = t.onChange,
                    u = t.onKeyDown,
                    l = S(t, N),
                    $ = (0, r.useRef)(),
                    c = (0, r.useCallback)((function (t) {
                        $.current = t, e && ("function" === typeof e ? e(t) : e.current = t)
                    }), [e]),
                    s = (0, r.useCallback)((function (t) {
                        O($.current, a, d, void 0, o)
                    }), [$, a, d, o]),
                    f = (0, r.useCallback)((function (t) {
                        return u && u(t), b(t, $.current, a, d, o)
                    }), [$, a, d, o, u]);
                return r.createElement(i, P({}, l, {
                    ref: c,
                    value: d(I(n) ? "" : n).text,
                    onKeyDown: f,
                    onChange: s
                }))
            }(w = r.forwardRef(w)).propTypes = {
                parse: d.func.isRequired,
                format: d.func.isRequired,
                inputComponent: d.elementType.isRequired,
                type: d.string.isRequired,
                value: d.string,
                onChange: d.func.isRequired,
                onKeyDown: d.func,
                onCut: d.func,
                onPaste: d.func
            }, w.defaultProps = {
                inputComponent: "input",
                type: "text"
            };
            var x = w;

            function I(t) {
                return void 0 === t || null === t
            }

            function E(t, e) {
                t = t.split("-"), e = e.split("-");
                for (var n = t[0].split("."), r = e[0].split("."), a = 0; a < 3; a++) {
                    var d = Number(n[a]),
                        i = Number(r[a]);
                    if (d > i) return 1;
                    if (i > d) return -1;
                    if (!isNaN(d) && isNaN(i)) return 1;
                    if (isNaN(d) && !isNaN(i)) return -1
                }
                return t[1] && e[1] ? t[1] > e[1] ? 1 : t[1] < e[1] ? -1 : 0 : !t[1] && e[1] ? 1 : t[1] && !e[1] ? -1 : 0
            }

            function A(t) {
                return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, A(t)
            }

            function j(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function T(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function M(t, e, n) {
                return e && T(t.prototype, e), n && T(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            var R = " ext. ",
                k = /^\d+$/,
                F = function () {
                    function t(e) {
                        j(this, t),
                            function (t) {
                                if (!t) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
                                if (!_(t) || !_(t.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(_(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + K(t) + ": " + t, "."))
                            }(e), this.metadata = e, W.call(this, e)
                    }
                    return M(t, [{
                        key: "getCountries",
                        value: function () {
                            return Object.keys(this.metadata.countries).filter((function (t) {
                                return "001" !== t
                            }))
                        }
                    }, {
                        key: "getCountryMetadata",
                        value: function (t) {
                            return this.metadata.countries[t]
                        }
                    }, {
                        key: "nonGeographic",
                        value: function () {
                            if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
                        }
                    }, {
                        key: "hasCountry",
                        value: function (t) {
                            return void 0 !== this.getCountryMetadata(t)
                        }
                    }, {
                        key: "hasCallingCode",
                        value: function (t) {
                            if (this.getCountryCodesForCallingCode(t)) return !0;
                            if (this.nonGeographic()) {
                                if (this.nonGeographic()[t]) return !0
                            } else {
                                var e = this.countryCallingCodes()[t];
                                if (e && 1 === e.length && "001" === e[0]) return !0
                            }
                        }
                    }, {
                        key: "isNonGeographicCallingCode",
                        value: function (t) {
                            return this.nonGeographic() ? !!this.nonGeographic()[t] : !this.getCountryCodesForCallingCode(t)
                        }
                    }, {
                        key: "country",
                        value: function (t) {
                            return this.selectNumberingPlan(t)
                        }
                    }, {
                        key: "selectNumberingPlan",
                        value: function (t, e) {
                            if (t && k.test(t) && (e = t, t = null), t && "001" !== t) {
                                if (!this.hasCountry(t)) throw new Error("Unknown country: ".concat(t));
                                this.numberingPlan = new D(this.getCountryMetadata(t), this)
                            } else if (e) {
                                if (!this.hasCallingCode(e)) throw new Error("Unknown calling code: ".concat(e));
                                this.numberingPlan = new D(this.getNumberingPlanMetadata(e), this)
                            } else this.numberingPlan = void 0;
                            return this
                        }
                    }, {
                        key: "getCountryCodesForCallingCode",
                        value: function (t) {
                            var e = this.countryCallingCodes()[t];
                            if (e) {
                                if (1 === e.length && 3 === e[0].length) return;
                                return e
                            }
                        }
                    }, {
                        key: "getCountryCodeForCallingCode",
                        value: function (t) {
                            var e = this.getCountryCodesForCallingCode(t);
                            if (e) return e[0]
                        }
                    }, {
                        key: "getNumberingPlanMetadata",
                        value: function (t) {
                            var e = this.getCountryCodeForCallingCode(t);
                            if (e) return this.getCountryMetadata(e);
                            if (this.nonGeographic()) {
                                var n = this.nonGeographic()[t];
                                if (n) return n
                            } else {
                                var r = this.countryCallingCodes()[t];
                                if (r && 1 === r.length && "001" === r[0]) return this.metadata.countries["001"]
                            }
                        }
                    }, {
                        key: "countryCallingCode",
                        value: function () {
                            return this.numberingPlan.callingCode()
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function () {
                            return this.numberingPlan.IDDPrefix()
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function () {
                            return this.numberingPlan.defaultIDDPrefix()
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function () {
                            return this.numberingPlan.nationalNumberPattern()
                        }
                    }, {
                        key: "possibleLengths",
                        value: function () {
                            return this.numberingPlan.possibleLengths()
                        }
                    }, {
                        key: "formats",
                        value: function () {
                            return this.numberingPlan.formats()
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function () {
                            return this.numberingPlan.nationalPrefixForParsing()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function () {
                            return this.numberingPlan.nationalPrefixTransformRule()
                        }
                    }, {
                        key: "leadingDigits",
                        value: function () {
                            return this.numberingPlan.leadingDigits()
                        }
                    }, {
                        key: "hasTypes",
                        value: function () {
                            return this.numberingPlan.hasTypes()
                        }
                    }, {
                        key: "type",
                        value: function (t) {
                            return this.numberingPlan.type(t)
                        }
                    }, {
                        key: "ext",
                        value: function () {
                            return this.numberingPlan.ext()
                        }
                    }, {
                        key: "countryCallingCodes",
                        value: function () {
                            return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                        }
                    }, {
                        key: "chooseCountryByCountryCallingCode",
                        value: function (t) {
                            return this.selectNumberingPlan(t)
                        }
                    }, {
                        key: "hasSelectedNumberingPlan",
                        value: function () {
                            return void 0 !== this.numberingPlan
                        }
                    }]), t
                }(),
                D = function () {
                    function t(e, n) {
                        j(this, t), this.globalMetadataObject = n, this.metadata = e, W.call(this, n.metadata)
                    }
                    return M(t, [{
                        key: "callingCode",
                        value: function () {
                            return this.metadata[0]
                        }
                    }, {
                        key: "getDefaultCountryMetadataForRegion",
                        value: function () {
                            return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function () {
                            if (!this.v1 && !this.v2) return this.metadata[1]
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function () {
                            if (!this.v1 && !this.v2) return this.metadata[12]
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function () {
                            return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function () {
                            if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
                        }
                    }, {
                        key: "_getFormats",
                        value: function (t) {
                            return t[this.v1 ? 2 : this.v2 ? 3 : 4]
                        }
                    }, {
                        key: "formats",
                        value: function () {
                            var t = this,
                                e = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                            return e.map((function (e) {
                                return new L(e, t)
                            }))
                        }
                    }, {
                        key: "nationalPrefix",
                        value: function () {
                            return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                        }
                    }, {
                        key: "_getNationalPrefixFormattingRule",
                        value: function (t) {
                            return t[this.v1 ? 4 : this.v2 ? 5 : 6]
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function () {
                            return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "_nationalPrefixForParsing",
                        value: function () {
                            return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function () {
                            return this._nationalPrefixForParsing() || this.nationalPrefix()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function () {
                            return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                        }
                    }, {
                        key: "_getNationalPrefixIsOptionalWhenFormatting",
                        value: function () {
                            return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function () {
                            return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "leadingDigits",
                        value: function () {
                            return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                        }
                    }, {
                        key: "types",
                        value: function () {
                            return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                        }
                    }, {
                        key: "hasTypes",
                        value: function () {
                            return (!this.types() || 0 !== this.types().length) && !!this.types()
                        }
                    }, {
                        key: "type",
                        value: function (t) {
                            if (this.hasTypes() && U(this.types(), t)) return new G(U(this.types(), t), this)
                        }
                    }, {
                        key: "ext",
                        value: function () {
                            return this.v1 || this.v2 ? R : this.metadata[13] || R
                        }
                    }]), t
                }(),
                L = function () {
                    function t(e, n) {
                        j(this, t), this._format = e, this.metadata = n
                    }
                    return M(t, [{
                        key: "pattern",
                        value: function () {
                            return this._format[0]
                        }
                    }, {
                        key: "format",
                        value: function () {
                            return this._format[1]
                        }
                    }, {
                        key: "leadingDigitsPatterns",
                        value: function () {
                            return this._format[2] || []
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function () {
                            return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function () {
                            return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                        value: function () {
                            return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "usesNationalPrefix",
                        value: function () {
                            return !(!this.nationalPrefixFormattingRule() || B.test(this.nationalPrefixFormattingRule()))
                        }
                    }, {
                        key: "internationalFormat",
                        value: function () {
                            return this._format[5] || this.format()
                        }
                    }]), t
                }(),
                B = /^\(?\$1\)?$/,
                G = function () {
                    function t(e, n) {
                        j(this, t), this.type = e, this.metadata = n
                    }
                    return M(t, [{
                        key: "pattern",
                        value: function () {
                            return this.metadata.v1 ? this.type : this.type[0]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function () {
                            if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                        }
                    }]), t
                }();

            function U(t, e) {
                switch (e) {
                    case "FIXED_LINE":
                        return t[0];
                    case "MOBILE":
                        return t[1];
                    case "TOLL_FREE":
                        return t[2];
                    case "PREMIUM_RATE":
                        return t[3];
                    case "PERSONAL_NUMBER":
                        return t[4];
                    case "VOICEMAIL":
                        return t[5];
                    case "UAN":
                        return t[6];
                    case "PAGER":
                        return t[7];
                    case "VOIP":
                        return t[8];
                    case "SHARED_COST":
                        return t[9]
                }
            }
            var _ = function (t) {
                    return "object" === A(t)
                },
                K = function (t) {
                    return A(t)
                };

            function V(t, e) {
                if ((e = new F(e)).hasCountry(t)) return e.country(t).countryCallingCode();
                throw new Error("Unknown country: ".concat(t))
            }

            function H(t, e) {
                return void 0 !== e.countries[t]
            }

            function W(t) {
                var e = t.version;
                "number" === typeof e ? (this.v1 = 1 === e, this.v2 = 2 === e, this.v3 = 3 === e, this.v4 = 4 === e) : e ? -1 === E(e, "1.2.0") ? this.v2 = !0 : -1 === E(e, "1.7.35") ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
            }

            function Z(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return q(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return q(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function q(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Y(t, e) {
                return J(t, void 0, e)
            }

            function J(t, e, n) {
                var r = n.type(e),
                    a = r && r.possibleLengths() || n.possibleLengths();
                if (!a) return "IS_POSSIBLE";
                if ("FIXED_LINE_OR_MOBILE" === e) {
                    if (!n.type("FIXED_LINE")) return J(t, "MOBILE", n);
                    var d = n.type("MOBILE");
                    d && (a = function (t, e) {
                        for (var n, r = t.slice(), a = Z(e); !(n = a()).done;) {
                            var d = n.value;
                            t.indexOf(d) < 0 && r.push(d)
                        }
                        return r.sort((function (t, e) {
                            return t - e
                        }))
                    }(a, d.possibleLengths()))
                } else if (e && !r) return "INVALID_LENGTH";
                var i = t.length,
                    o = a[0];
                return o === i ? "IS_POSSIBLE" : o > i ? "TOO_SHORT" : a[a.length - 1] < i ? "TOO_LONG" : a.indexOf(i, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
            }

            function X(t, e) {
                return "IS_POSSIBLE" === Y(t, e)
            }

            function z(t, e) {
                return t = t || "", new RegExp("^(?:" + e + ")$").test(t)
            }

            function Q(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return tt(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tt(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function tt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var et = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

            function nt(t, e, n) {
                if (e = e || {}, t.country) {
                    (n = new F(n)).selectNumberingPlan(t.country, t.countryCallingCode);
                    var r = e.v2 ? t.nationalNumber : t.phone;
                    if (z(r, n.nationalNumberPattern())) {
                        if (rt(r, "FIXED_LINE", n)) return n.type("MOBILE") && "" === n.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : n.type("MOBILE") ? rt(r, "MOBILE", n) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
                        for (var a, d = Q(et); !(a = d()).done;) {
                            var i = a.value;
                            if (rt(r, i, n)) return i
                        }
                    }
                }
            }

            function rt(t, e, n) {
                return !(!(e = n.type(e)) || !e.pattern()) && (!(e.possibleLengths() && e.possibleLengths().indexOf(t.length) < 0) && z(t, e.pattern()))
            }
            var at = "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9",
                dt = "".concat("-\u2010-\u2015\u2212\u30fc\uff0d").concat("\uff0f/").concat("\uff0e.").concat(" \xa0\xad\u200b\u2060\u3000").concat("()\uff08\uff09\uff3b\uff3d\\[\\]").concat("~\u2053\u223c\uff5e");

            function it(t) {
                return t.replace(new RegExp("[".concat(dt, "]+"), "g"), " ").trim()
            }
            var ot = /(\$\d)/;

            function ut(t, e, n) {
                var r = n.useInternationalFormat,
                    a = n.withNationalPrefix,
                    d = (n.carrierCode, n.metadata, t.replace(new RegExp(e.pattern()), r ? e.internationalFormat() : a && e.nationalPrefixFormattingRule() ? e.format().replace(ot, e.nationalPrefixFormattingRule()) : e.format()));
                return r ? it(d) : d
            }
            var lt = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
            var $t = function (t) {
                return "([".concat(at, "]{1,").concat(t, "})")
            };

            function ct(t) {
                var e = "#?";
                return ";ext=" + $t("20") + "|" + ("[ \xa0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\xf3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|anexo)[:\\.\uff0e]?[ \xa0\\t,-]*" + $t("20") + e) + "|" + ("[ \xa0\\t,]*(?:[x\uff58#\uff03~\uff5e]|int|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \xa0\\t,-]*" + $t("9") + e) + "|" + ("[- ]+" + $t("6") + "#") + "|" + ("[ \xa0\\t]*(?:,{2}|;)[:\\.\uff0e]?[ \xa0\\t,-]*" + $t("15") + e) + "|" + ("[ \xa0\\t]*(?:,)+[:\\.\uff0e]?[ \xa0\\t,-]*" + $t("9") + e)
            }
            var st = "[+\uff0b]{0,1}(?:[" + dt + "]*[" + "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[" + dt + "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*",
                ft = new RegExp("^[+\uff0b]{0,1}(?:[" + dt + "]*[" + "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){1,2}$", "i"),
                ht = st + "(?:" + ct() + ")?",
                pt = new RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^" + ht + "$", "i");

            function yt(t) {
                return t.length >= 2 && pt.test(t)
            }

            function mt(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n) return;
                    var r, a, d = [],
                        i = !0,
                        o = !1;
                    try {
                        for (n = n.call(t); !(i = (r = n.next()).done) && (d.push(r.value), !e || d.length !== e); i = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return d
                }(t, e) || gt(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function gt(t, e) {
                if (t) {
                    if ("string" === typeof t) return vt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vt(t, e) : void 0
                }
            }

            function vt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function bt(t) {
                for (var e, n, r, a = function (t, e) {
                        var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (n) return (n = n.call(t)).next.bind(n);
                        if (Array.isArray(t) || (n = gt(t)) || e && t && "number" === typeof t.length) {
                            n && (t = n);
                            var r = 0;
                            return function () {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }((t = t.replace(/^tel:/, "tel=")).split(";")); !(r = a()).done;) {
                    var d = mt(r.value.split("="), 2),
                        i = d[0],
                        o = d[1];
                    switch (i) {
                        case "tel":
                            e = o;
                            break;
                        case "ext":
                            n = o;
                            break;
                        case "phone-context":
                            "+" === o[0] && (e = o + e)
                    }
                }
                if (!yt(e)) return {};
                var u = {
                    number: e
                };
                return n && (u.ext = n), u
            }

            function Ct(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return Ot(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ot(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function Ot(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Nt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Nt(Object(n), !0).forEach((function (e) {
                        St(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function St(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var wt = {
                formatExtension: function (t, e, n) {
                    return "".concat(t).concat(n.ext()).concat(e)
                }
            };

            function xt(t, e, n, r) {
                if (n = n ? Pt(Pt({}, wt), n) : wt, r = new F(r), t.country && "001" !== t.country) {
                    if (!r.hasCountry(t.country)) throw new Error("Unknown country: ".concat(t.country));
                    r.country(t.country)
                } else {
                    if (!t.countryCallingCode) return t.phone || "";
                    r.selectNumberingPlan(t.countryCallingCode)
                }
                var a, d = r.countryCallingCode(),
                    i = n.v2 ? t.nationalNumber : t.phone;
                switch (e) {
                    case "NATIONAL":
                        return i ? Et(a = It(i, t.carrierCode, "NATIONAL", r, n), t.ext, r, n.formatExtension) : "";
                    case "INTERNATIONAL":
                        return i ? (a = It(i, null, "INTERNATIONAL", r, n), Et(a = "+".concat(d, " ").concat(a), t.ext, r, n.formatExtension)) : "+".concat(d);
                    case "E.164":
                        return "+".concat(d).concat(i);
                    case "RFC3966":
                        return function (t) {
                            var e = t.number,
                                n = t.ext;
                            if (!e) return "";
                            if ("+" !== e[0]) throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
                            return "tel:".concat(e).concat(n ? ";ext=" + n : "")
                        }({
                            number: "+".concat(d).concat(i),
                            ext: t.ext
                        });
                    case "IDD":
                        if (!n.fromCountry) return;
                        var o = function (t, e, n, r, a) {
                            if (V(r, a.metadata) === n) {
                                var d = It(t, e, "NATIONAL", a);
                                return "1" === n ? n + " " + d : d
                            }
                            var i = function (t, e, n) {
                                var r = new F(n);
                                return r.selectNumberingPlan(t, e), r.defaultIDDPrefix() ? r.defaultIDDPrefix() : lt.test(r.IDDPrefix()) ? r.IDDPrefix() : void 0
                            }(r, void 0, a.metadata);
                            if (i) return "".concat(i, " ").concat(n, " ").concat(It(t, null, "INTERNATIONAL", a))
                        }(i, t.carrierCode, d, n.fromCountry, r);
                        return Et(o, t.ext, r, n.formatExtension);
                    default:
                        throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(e, '"'))
                }
            }

            function It(t, e, n, r, a) {
                var d = function (t, e) {
                    for (var n, r = Ct(t); !(n = r()).done;) {
                        var a = n.value;
                        if (a.leadingDigitsPatterns().length > 0) {
                            var d = a.leadingDigitsPatterns()[a.leadingDigitsPatterns().length - 1];
                            if (0 !== e.search(d)) continue
                        }
                        if (z(e, a.pattern())) return a
                    }
                }(r.formats(), t);
                return d ? ut(t, d, {
                    useInternationalFormat: "INTERNATIONAL" === n,
                    withNationalPrefix: !d.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !a || !1 !== a.nationalPrefix,
                    carrierCode: e,
                    metadata: r
                }) : t
            }

            function Et(t, e, n, r) {
                return e ? r(t, e, n) : t
            }

            function At(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function jt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? At(Object(n), !0).forEach((function (e) {
                        Tt(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Tt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Mt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var Rt = function () {
                    function t(e, n, r) {
                        if (function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), !e) throw new TypeError("`country` or `countryCallingCode` not passed");
                        if (!n) throw new TypeError("`nationalNumber` not passed");
                        if (!r) throw new TypeError("`metadata` not passed");
                        var a = new F(r);
                        kt(e) && (this.country = e, a.country(e), e = a.countryCallingCode()), this.countryCallingCode = e, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = r
                    }
                    var e, n, r;
                    return e = t, (n = [{
                        key: "setExt",
                        value: function (t) {
                            this.ext = t
                        }
                    }, {
                        key: "isPossible",
                        value: function () {
                            return function (t, e, n) {
                                if (void 0 === e && (e = {}), n = new F(n), e.v2) {
                                    if (!t.countryCallingCode) throw new Error("Invalid phone number object passed");
                                    n.selectNumberingPlan(t.countryCallingCode)
                                } else {
                                    if (!t.phone) return !1;
                                    if (t.country) {
                                        if (!n.hasCountry(t.country)) throw new Error("Unknown country: ".concat(t.country));
                                        n.country(t.country)
                                    } else {
                                        if (!t.countryCallingCode) throw new Error("Invalid phone number object passed");
                                        n.selectNumberingPlan(t.countryCallingCode)
                                    }
                                }
                                if (n.possibleLengths()) return X(t.phone || t.nationalNumber, n);
                                if (t.countryCallingCode && n.isNonGeographicCallingCode(t.countryCallingCode)) return !0;
                                throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
                            }(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "isValid",
                        value: function () {
                            return function (t, e, n) {
                                return e = e || {}, n = new F(n), !!t.country && (n.selectNumberingPlan(t.country, t.countryCallingCode), n.hasTypes() ? void 0 !== nt(t, e, n.metadata) : z(e.v2 ? t.nationalNumber : t.phone, n.nationalNumberPattern()))
                            }(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "isNonGeographic",
                        value: function () {
                            return new F(this.metadata).isNonGeographicCallingCode(this.countryCallingCode)
                        }
                    }, {
                        key: "isEqual",
                        value: function (t) {
                            return this.number === t.number && this.ext === t.ext
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return nt(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "format",
                        value: function (t, e) {
                            return xt(this, t, e ? jt(jt({}, e), {}, {
                                v2: !0
                            }) : {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "formatNational",
                        value: function (t) {
                            return this.format("NATIONAL", t)
                        }
                    }, {
                        key: "formatInternational",
                        value: function (t) {
                            return this.format("INTERNATIONAL", t)
                        }
                    }, {
                        key: "getURI",
                        value: function (t) {
                            return this.format("RFC3966", t)
                        }
                    }]) && Mt(e.prototype, n), r && Mt(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                kt = function (t) {
                    return /^[A-Z]{2}$/.test(t)
                };

            function Ft(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var Dt = function () {
                function t(e) {
                    var n = e.onCountryChange,
                        r = e.onCallingCodeChange;
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.onCountryChange = n, this.onCallingCodeChange = r
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "reset",
                    value: function (t, e) {
                        this.international = !1, this.IDDPrefix = void 0, this.missingPlus = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(t, e)
                    }
                }, {
                    key: "resetNationalSignificantNumber",
                    value: function () {
                        this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0
                    }
                }, {
                    key: "update",
                    value: function (t) {
                        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
                            var r = n[e];
                            this[r] = t[r]
                        }
                    }
                }, {
                    key: "initCountryAndCallingCode",
                    value: function (t, e) {
                        this.setCountry(t), this.setCallingCode(e)
                    }
                }, {
                    key: "setCountry",
                    value: function (t) {
                        this.country = t, this.onCountryChange(t)
                    }
                }, {
                    key: "setCallingCode",
                    value: function (t) {
                        return this.callingCode = t, this.onCallingCodeChange(this.country, t)
                    }
                }, {
                    key: "startInternationalNumber",
                    value: function () {
                        this.international = !0, this.initCountryAndCallingCode()
                    }
                }, {
                    key: "appendDigits",
                    value: function (t) {
                        this.digits += t
                    }
                }, {
                    key: "appendNationalSignificantNumberDigits",
                    value: function (t) {
                        this.nationalSignificantNumber += t
                    }
                }, {
                    key: "getNationalDigits",
                    value: function () {
                        return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits
                    }
                }, {
                    key: "getDigitsWithoutInternationalPrefix",
                    value: function () {
                        return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits
                    }
                }]) && Ft(e.prototype, n), r && Ft(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function Lt(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return Bt(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bt(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function Bt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var Gt = "x",
                Ut = new RegExp(Gt);

            function _t(t, e) {
                if (e < 1) return "";
                for (var n = ""; e > 1;) 1 & e && (n += t), e >>= 1, t += t;
                return n + t
            }

            function Kt(t, e) {
                return ")" === t[e] && e++,
                    function (t) {
                        var e = [],
                            n = 0;
                        for (; n < t.length;) "(" === t[n] ? e.push(n) : ")" === t[n] && e.pop(), n++;
                        var r = 0,
                            a = "";
                        e.push(t.length);
                        for (var d = 0, i = e; d < i.length; d++) {
                            var o = i[d];
                            a += t.slice(r, o), r = o + 1
                        }
                        return a
                    }(t.slice(0, e))
            }

            function Vt(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return Ht(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ht(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function Ht(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var Wt = {
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                "\uff10": "0",
                "\uff11": "1",
                "\uff12": "2",
                "\uff13": "3",
                "\uff14": "4",
                "\uff15": "5",
                "\uff16": "6",
                "\uff17": "7",
                "\uff18": "8",
                "\uff19": "9",
                "\u0660": "0",
                "\u0661": "1",
                "\u0662": "2",
                "\u0663": "3",
                "\u0664": "4",
                "\u0665": "5",
                "\u0666": "6",
                "\u0667": "7",
                "\u0668": "8",
                "\u0669": "9",
                "\u06f0": "0",
                "\u06f1": "1",
                "\u06f2": "2",
                "\u06f3": "3",
                "\u06f4": "4",
                "\u06f5": "5",
                "\u06f6": "6",
                "\u06f7": "7",
                "\u06f8": "8",
                "\u06f9": "9"
            };

            function Zt(t) {
                return Wt[t]
            }

            function qt(t) {
                for (var e, n = "", r = Vt(t.split("")); !(e = r()).done;) {
                    var a = Zt(e.value);
                    a && (n += a)
                }
                return n
            }

            function Yt(t, e, n) {
                var r = n.metadata,
                    a = n.shouldTryNationalPrefixFormattingRule,
                    d = n.getSeparatorAfterNationalPrefix;
                if (new RegExp("^(?:".concat(e.pattern(), ")$")).test(t.nationalSignificantNumber)) return function (t, e, n) {
                    var r = n.metadata,
                        a = n.shouldTryNationalPrefixFormattingRule,
                        d = n.getSeparatorAfterNationalPrefix;
                    t.nationalSignificantNumber, t.international, t.nationalPrefix, t.carrierCode;
                    if (a(e)) {
                        var i = Jt(t, e, {
                            useNationalPrefixFormattingRule: !0,
                            getSeparatorAfterNationalPrefix: d,
                            metadata: r
                        });
                        if (i) return i
                    }
                    return Jt(t, e, {
                        useNationalPrefixFormattingRule: !1,
                        getSeparatorAfterNationalPrefix: d,
                        metadata: r
                    })
                }(t, e, {
                    metadata: r,
                    shouldTryNationalPrefixFormattingRule: a,
                    getSeparatorAfterNationalPrefix: d
                })
            }

            function Jt(t, e, n) {
                var r = n.metadata,
                    a = n.useNationalPrefixFormattingRule,
                    d = n.getSeparatorAfterNationalPrefix,
                    i = ut(t.nationalSignificantNumber, e, {
                        carrierCode: t.carrierCode,
                        useInternationalFormat: t.international,
                        withNationalPrefix: a,
                        metadata: r
                    });
                if (a || (t.nationalPrefix ? i = t.nationalPrefix + d(e) + i : t.complexPrefixBeforeNationalSignificantNumber && (i = t.complexPrefixBeforeNationalSignificantNumber + " " + i)), function (t, e) {
                        return qt(t) === e.getNationalDigits()
                    }(i, t)) return i
            }

            function Xt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var zt = function () {
                function t() {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "parse",
                    value: function (t) {
                        if (this.context = [{
                                or: !0,
                                instructions: []
                            }], this.parsePattern(t), 1 !== this.context.length) throw new Error("Non-finalized contexts left when pattern parse ended");
                        var e = this.context[0],
                            n = e.branches,
                            r = e.instructions;
                        if (n) return {
                            op: "|",
                            args: n.concat([ne(r)])
                        };
                        if (0 === r.length) throw new Error("Pattern is required");
                        return 1 === r.length ? r[0] : r
                    }
                }, {
                    key: "startContext",
                    value: function (t) {
                        this.context.push(t)
                    }
                }, {
                    key: "endContext",
                    value: function () {
                        this.context.pop()
                    }
                }, {
                    key: "getContext",
                    value: function () {
                        return this.context[this.context.length - 1]
                    }
                }, {
                    key: "parsePattern",
                    value: function (t) {
                        if (!t) throw new Error("Pattern is required");
                        var e = t.match(ee);
                        if (e) {
                            var n = e[1],
                                r = t.slice(0, e.index),
                                a = t.slice(e.index + n.length);
                            switch (n) {
                                case "(?:":
                                    r && this.parsePattern(r), this.startContext({
                                        or: !0,
                                        instructions: [],
                                        branches: []
                                    });
                                    break;
                                case ")":
                                    if (!this.getContext().or) throw new Error('")" operator must be preceded by "(?:" operator');
                                    if (r && this.parsePattern(r), 0 === this.getContext().instructions.length) throw new Error('No instructions found after "|" operator in an "or" group');
                                    var d = this.getContext().branches;
                                    d.push(ne(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
                                        op: "|",
                                        args: d
                                    });
                                    break;
                                case "|":
                                    if (!this.getContext().or) throw new Error('"|" operator can only be used inside "or" groups');
                                    if (r && this.parsePattern(r), !this.getContext().branches) {
                                        if (1 !== this.context.length) throw new Error('"branches" not found in an "or" group context');
                                        this.getContext().branches = []
                                    }
                                    this.getContext().branches.push(ne(this.getContext().instructions)), this.getContext().instructions = [];
                                    break;
                                case "[":
                                    r && this.parsePattern(r), this.startContext({
                                        oneOfSet: !0
                                    });
                                    break;
                                case "]":
                                    if (!this.getContext().oneOfSet) throw new Error('"]" operator must be preceded by "[" operator');
                                    this.endContext(), this.getContext().instructions.push({
                                        op: "[]",
                                        args: Qt(r)
                                    });
                                    break;
                                default:
                                    throw new Error("Unknown operator: ".concat(n))
                            }
                            a && this.parsePattern(a)
                        } else {
                            if (te.test(t)) throw new Error("Illegal characters found in a pattern: ".concat(t));
                            this.getContext().instructions = this.getContext().instructions.concat(t.split(""))
                        }
                    }
                }]) && Xt(e.prototype, n), r && Xt(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function Qt(t) {
                for (var e = [], n = 0; n < t.length;) {
                    if ("-" === t[n]) {
                        if (0 === n || n === t.length - 1) throw new Error("Couldn't parse a one-of set pattern: ".concat(t));
                        for (var r = t[n - 1].charCodeAt(0) + 1, a = t[n + 1].charCodeAt(0) - 1, d = r; d <= a;) e.push(String.fromCharCode(d)), d++
                    } else e.push(t[n]);
                    n++
                }
                return e
            }
            var te = /[\(\)\[\]\?\:\|]/,
                ee = new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");

            function ne(t) {
                return 1 === t.length ? t[0] : t
            }

            function re(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return ae(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function ae(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function de(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var ie = function () {
                function t(e) {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.matchTree = (new zt).parse(e)
                }
                var e, n, r;
                return e = t, n = [{
                    key: "match",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.allowOverflow;
                        if (!t) throw new Error("String is required");
                        var r = oe(t.split(""), this.matchTree, !0);
                        if (r && r.match && delete r.matchedChars, !r || !r.overflow || n) return r
                    }
                }], n && de(e.prototype, n), r && de(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function oe(t, e, n) {
                if ("string" === typeof e) {
                    var r = t.join("");
                    return 0 === e.indexOf(r) ? t.length === e.length ? {
                        match: !0,
                        matchedChars: t
                    } : {
                        partialMatch: !0
                    } : 0 === r.indexOf(e) ? n && t.length > e.length ? {
                        overflow: !0
                    } : {
                        match: !0,
                        matchedChars: t.slice(0, e.length)
                    } : void 0
                }
                if (Array.isArray(e)) {
                    for (var a = t.slice(), d = 0; d < e.length;) {
                        var i = oe(a, e[d], n && d === e.length - 1);
                        if (!i) return;
                        if (i.overflow) return i;
                        if (!i.match) {
                            if (i.partialMatch) return {
                                partialMatch: !0
                            };
                            throw new Error("Unsupported match result:\n".concat(JSON.stringify(i, null, 2)))
                        }
                        if (0 === (a = a.slice(i.matchedChars.length)).length) return d === e.length - 1 ? {
                            match: !0,
                            matchedChars: t
                        } : {
                            partialMatch: !0
                        };
                        d++
                    }
                    return n ? {
                        overflow: !0
                    } : {
                        match: !0,
                        matchedChars: t.slice(0, t.length - a.length)
                    }
                }
                switch (e.op) {
                    case "|":
                        for (var o, u, l = re(e.args); !(u = l()).done;) {
                            var $ = oe(t, u.value, n);
                            if ($) {
                                if ($.overflow) return $;
                                if ($.match) return {
                                    match: !0,
                                    matchedChars: $.matchedChars
                                };
                                if (!$.partialMatch) throw new Error("Unsupported match result:\n".concat(JSON.stringify($, null, 2)));
                                o = !0
                            }
                        }
                        return o ? {
                            partialMatch: !0
                        } : void 0;
                    case "[]":
                        for (var c, s = re(e.args); !(c = s()).done;) {
                            var f = c.value;
                            if (t[0] === f) return 1 === t.length ? {
                                match: !0,
                                matchedChars: t
                            } : n ? {
                                overflow: !0
                            } : {
                                match: !0,
                                matchedChars: [f]
                            }
                        }
                        return;
                    default:
                        throw new Error("Unsupported instruction tree: ".concat(e))
                }
            }

            function ue(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return le(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return le(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function le(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function $e(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var ce = _t("9", 15),
                se = /[- ]/,
                fe = function () {
                    return /\[([^\[\]])*\]/g
                },
                he = function () {
                    return /\d(?=[^,}][^,}])/g
                },
                pe = new RegExp("[" + dt + "]*\\$1[" + dt + "]*(\\$\\d[" + dt + "]*)*$"),
                ye = function () {
                    function t(e) {
                        e.state;
                        var n = e.metadata;
                        ! function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.metadata = n, this.resetFormat()
                    }
                    var e, n, r;
                    return e = t, n = [{
                        key: "resetFormat",
                        value: function () {
                            this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1
                        }
                    }, {
                        key: "reset",
                        value: function (t, e) {
                            this.resetFormat(), t ? (this.isNANP = "1" === t.callingCode(), this.matchingFormats = t.formats(), e.nationalSignificantNumber && this.narrowDownMatchingFormats(e)) : (this.isNANP = void 0, this.matchingFormats = [])
                        }
                    }, {
                        key: "format",
                        value: function (t, e) {
                            var n = this;
                            if (function (t, e) {
                                    return "IS_POSSIBLE" === Y(t, e)
                                }(e.nationalSignificantNumber, this.metadata))
                                for (var r, a = ue(this.matchingFormats); !(r = a()).done;) {
                                    var d = r.value,
                                        i = Yt(e, d, {
                                            metadata: this.metadata,
                                            shouldTryNationalPrefixFormattingRule: function (t) {
                                                return n.shouldTryNationalPrefixFormattingRule(t, {
                                                    international: e.international,
                                                    nationalPrefix: e.nationalPrefix
                                                })
                                            },
                                            getSeparatorAfterNationalPrefix: function (t) {
                                                return n.getSeparatorAfterNationalPrefix(t)
                                            }
                                        });
                                    if (i) return this.resetFormat(), this.chosenFormat = d, this.setNationalNumberTemplate(i.replace(/\d/g, Gt), e), this.populatedNationalNumberTemplate = i, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(Gt), i
                                }
                            return this.formatNationalNumberWithNextDigits(t, e)
                        }
                    }, {
                        key: "formatNationalNumberWithNextDigits",
                        value: function (t, e) {
                            var n = this.chosenFormat,
                                r = this.chooseFormat(e);
                            if (r) return r === n ? this.formatNextNationalNumberDigits(t) : this.formatNextNationalNumberDigits(e.getNationalDigits())
                        }
                    }, {
                        key: "narrowDownMatchingFormats",
                        value: function (t) {
                            var e = this,
                                n = t.nationalSignificantNumber,
                                r = t.nationalPrefix,
                                a = t.international,
                                d = n,
                                i = d.length - 3;
                            i < 0 && (i = 0), this.matchingFormats = this.matchingFormats.filter((function (t) {
                                return e.formatSuits(t, a, r) && e.formatMatches(t, d, i)
                            })), this.chosenFormat && -1 === this.matchingFormats.indexOf(this.chosenFormat) && this.resetFormat()
                        }
                    }, {
                        key: "formatSuits",
                        value: function (t, e, n) {
                            return !(n && !t.usesNationalPrefix() && !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) && !(!e && !n && t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
                        }
                    }, {
                        key: "formatMatches",
                        value: function (t, e, n) {
                            var r = t.leadingDigitsPatterns().length;
                            if (0 === r) return !0;
                            n = Math.min(n, r - 1);
                            var a = t.leadingDigitsPatterns()[n];
                            if (e.length < 3) try {
                                return void 0 !== new ie(a).match(e, {
                                    allowOverflow: !0
                                })
                            } catch (d) {
                                return console.error(d), !0
                            }
                            return new RegExp("^(".concat(a, ")")).test(e)
                        }
                    }, {
                        key: "getFormatFormat",
                        value: function (t, e) {
                            return e ? t.internationalFormat() : t.format()
                        }
                    }, {
                        key: "chooseFormat",
                        value: function (t) {
                            for (var e, n = this, r = function () {
                                    var r = e.value;
                                    return n.chosenFormat === r ? "break" : pe.test(n.getFormatFormat(r, t.international)) ? n.createTemplateForFormat(r, t) ? (n.chosenFormat = r, "break") : (n.matchingFormats = n.matchingFormats.filter((function (t) {
                                        return t !== r
                                    })), "continue") : "continue"
                                }, a = ue(this.matchingFormats.slice()); !(e = a()).done;) {
                                var d = r();
                                if ("break" === d) break
                            }
                            return this.chosenFormat || this.resetFormat(), this.chosenFormat
                        }
                    }, {
                        key: "createTemplateForFormat",
                        value: function (t, e) {
                            if (!(t.pattern().indexOf("|") >= 0)) {
                                var n = this.getTemplateForFormat(t, e);
                                return n ? (this.setNationalNumberTemplate(n, e), !0) : void 0
                            }
                        }
                    }, {
                        key: "getSeparatorAfterNationalPrefix",
                        value: function (t) {
                            return this.isNANP || t && t.nationalPrefixFormattingRule() && se.test(t.nationalPrefixFormattingRule()) ? " " : ""
                        }
                    }, {
                        key: "getInternationalPrefixBeforeCountryCallingCode",
                        value: function (t, e) {
                            var n = t.IDDPrefix,
                                r = t.missingPlus;
                            return n ? e && !1 === e.spacing ? n : n + " " : r ? "" : "+"
                        }
                    }, {
                        key: "getTemplate",
                        value: function (t) {
                            if (this.template) {
                                for (var e = -1, n = 0, r = t.international ? this.getInternationalPrefixBeforeCountryCallingCode(t, {
                                        spacing: !1
                                    }) : ""; n < r.length + t.getDigitsWithoutInternationalPrefix().length;) e = this.template.indexOf(Gt, e + 1), n++;
                                return Kt(this.template, e + 1)
                            }
                        }
                    }, {
                        key: "setNationalNumberTemplate",
                        value: function (t, e) {
                            this.nationalNumberTemplate = t, this.populatedNationalNumberTemplate = t, this.populatedNationalNumberTemplatePosition = -1, e.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(e).replace(/[\d\+]/g, Gt) + _t(Gt, e.callingCode.length) + " " + t : this.template = t
                        }
                    }, {
                        key: "getTemplateForFormat",
                        value: function (t, e) {
                            var n = e.nationalSignificantNumber,
                                r = e.international,
                                a = e.nationalPrefix,
                                d = e.complexPrefixBeforeNationalSignificantNumber,
                                i = t.pattern();
                            i = i.replace(fe(), "\\d").replace(he(), "\\d");
                            var o = ce.match(i)[0];
                            if (!(n.length > o.length)) {
                                var u = new RegExp("^" + i + "$"),
                                    l = n.replace(/\d/g, "9");
                                u.test(l) && (o = l);
                                var $, c = this.getFormatFormat(t, r);
                                if (this.shouldTryNationalPrefixFormattingRule(t, {
                                        international: r,
                                        nationalPrefix: a
                                    })) {
                                    var s = c.replace(ot, t.nationalPrefixFormattingRule());
                                    if (qt(t.nationalPrefixFormattingRule()) === (a || "") + qt("$1") && (c = s, $ = !0, a))
                                        for (var f = a.length; f > 0;) c = c.replace(/\d/, Gt), f--
                                }
                                var h = o.replace(new RegExp(i), c).replace(new RegExp("9", "g"), Gt);
                                return $ || (d ? h = _t(Gt, d.length) + " " + h : a && (h = _t(Gt, a.length) + this.getSeparatorAfterNationalPrefix(t) + h)), r && (h = it(h)), h
                            }
                        }
                    }, {
                        key: "formatNextNationalNumberDigits",
                        value: function (t) {
                            var e = function (t, e, n) {
                                for (var r, a = Lt(n.split("")); !(r = a()).done;) {
                                    var d = r.value;
                                    if (t.slice(e + 1).search(Ut) < 0) return;
                                    e = t.search(Ut), t = t.replace(Ut, d)
                                }
                                return [t, e]
                            }(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, t);
                            if (e) return this.populatedNationalNumberTemplate = e[0], this.populatedNationalNumberTemplatePosition = e[1], Kt(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
                            this.resetFormat()
                        }
                    }, {
                        key: "shouldTryNationalPrefixFormattingRule",
                        value: function (t, e) {
                            var n = e.international,
                                r = e.nationalPrefix;
                            if (t.nationalPrefixFormattingRule()) {
                                var a = t.usesNationalPrefix();
                                if (a && r || !a && !n) return !0
                            }
                        }
                    }], n && $e(e.prototype, n), r && $e(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                me = new RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])");

            function ge(t, e, n, r) {
                if (e) {
                    var a = new F(r);
                    a.selectNumberingPlan(e, n);
                    var d = new RegExp(a.IDDPrefix());
                    if (0 === t.search(d)) {
                        var i = (t = t.slice(t.match(d)[0].length)).match(me);
                        if (!(i && null != i[1] && i[1].length > 0 && "0" === i[1])) return t
                    }
                }
            }

            function ve(t, e) {
                if (t && e.numberingPlan.nationalPrefixForParsing()) {
                    var n = new RegExp("^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"),
                        r = n.exec(t);
                    if (r) {
                        var a, d, i, o = r.length - 1,
                            u = o > 0 && r[o];
                        if (e.nationalPrefixTransformRule() && u) a = t.replace(n, e.nationalPrefixTransformRule()), o > 1 && (d = r[1]);
                        else {
                            var l = r[0];
                            a = t.slice(l.length), u && (d = r[1])
                        }
                        if (u) {
                            var $ = t.indexOf(r[1]);
                            t.slice(0, $) === e.numberingPlan.nationalPrefix() && (i = e.numberingPlan.nationalPrefix())
                        } else i = r[0];
                        return {
                            nationalNumber: a,
                            nationalPrefix: i,
                            carrierCode: d
                        }
                    }
                }
                return {
                    nationalNumber: t
                }
            }

            function be(t, e) {
                var n = ve(t, e),
                    r = n.carrierCode,
                    a = n.nationalNumber;
                if (a !== t) {
                    if (! function (t, e, n) {
                            if (z(t, n.nationalNumberPattern()) && !z(e, n.nationalNumberPattern())) return !1;
                            return !0
                        }(t, a, e)) return {
                        nationalNumber: t
                    };
                    if (e.possibleLengths() && ! function (t, e) {
                            switch (Y(t, e)) {
                                case "TOO_SHORT":
                                case "INVALID_LENGTH":
                                    return !1;
                                default:
                                    return !0
                            }
                        }(a, e)) return {
                        nationalNumber: t
                    }
                }
                return {
                    nationalNumber: a,
                    carrierCode: r
                }
            }

            function Ce(t, e, n, r) {
                var a = e ? V(e, r) : n;
                if (0 === t.indexOf(a)) {
                    (r = new F(r)).selectNumberingPlan(e, n);
                    var d = t.slice(a.length),
                        i = be(d, r).nationalNumber,
                        o = be(t, r).nationalNumber;
                    if (!z(o, r.nationalNumberPattern()) && z(i, r.nationalNumberPattern()) || "TOO_LONG" === Y(o, r)) return {
                        countryCallingCode: a,
                        number: d
                    }
                }
                return {
                    number: t
                }
            }

            function Oe(t, e, n, r) {
                if (!t) return {};
                if ("+" !== t[0]) {
                    var a = ge(t, e, n, r);
                    if (!a || a === t) {
                        if (e || n) {
                            var d = Ce(t, e, n, r),
                                i = d.countryCallingCode,
                                o = d.number;
                            if (i) return {
                                countryCallingCode: i,
                                number: o
                            }
                        }
                        return {
                            number: t
                        }
                    }
                    t = "+" + a
                }
                if ("0" === t[1]) return {};
                r = new F(r);
                for (var u = 2; u - 1 <= 3 && u <= t.length;) {
                    var l = t.slice(1, u);
                    if (r.hasCallingCode(l)) return r.selectNumberingPlan(l), {
                        countryCallingCode: l,
                        number: t.slice(u)
                    };
                    u++
                }
                return {}
            }

            function Ne(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n) return;
                    var r, a, d = [],
                        i = !0,
                        o = !1;
                    try {
                        for (n = n.call(t); !(i = (r = n.next()).done) && (d.push(r.value), !e || d.length !== e); i = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return d
                }(t, e) || function (t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return Pe(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pe(t, e)
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Pe(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Se(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var we = new RegExp("^" + ("[" + dt + "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]+") + "$", "i"),
                xe = "(?:[+\uff0b][" + dt + "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*|[" + dt + "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]+)",
                Ie = new RegExp("[^" + dt + "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]+.*$"),
                Ee = /[^\d\[\]]/,
                Ae = function () {
                    function t(e) {
                        var n = e.defaultCountry,
                            r = e.defaultCallingCode,
                            a = e.metadata,
                            d = e.onNationalSignificantNumberChange;
                        ! function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.defaultCountry = n, this.defaultCallingCode = r, this.metadata = a, this.onNationalSignificantNumberChange = d
                    }
                    var e, n, r;
                    return e = t, (n = [{
                        key: "input",
                        value: function (t, e) {
                            var n, r = function (t) {
                                    var e = Ne(function (t) {
                                            var e = function (t) {
                                                var e, n = t.search(xe);
                                                if (!(n < 0)) return "+" === (t = t.slice(n))[0] && (e = !0, t = t.slice("+".length)), t = t.replace(Ie, ""), e && (t = "+" + t), t
                                            }(t) || "";
                                            return "+" === e[0] ? [e.slice("+".length), !0] : [e]
                                        }(t), 2),
                                        n = e[0],
                                        r = e[1];
                                    return we.test(n) || (n = ""), [n, r]
                                }(t),
                                a = Ne(r, 2),
                                d = a[0],
                                i = a[1],
                                o = qt(d);
                            return i && (e.digits || (e.startInternationalNumber(), o || (n = !0))), o && this.inputDigits(o, e), {
                                digits: o,
                                justLeadingPlus: n
                            }
                        }
                    }, {
                        key: "inputDigits",
                        value: function (t, e) {
                            var n = e.digits,
                                r = n.length < 3 && n.length + t.length >= 3;
                            if (e.appendDigits(t), r && this.extractIddPrefix(e), this.isWaitingForCountryCallingCode(e)) {
                                if (!this.extractCountryCallingCode(e)) return
                            } else e.appendNationalSignificantNumberDigits(t);
                            e.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(e.getNationalDigits(), (function (t) {
                                return e.update(t)
                            }))
                        }
                    }, {
                        key: "isWaitingForCountryCallingCode",
                        value: function (t) {
                            var e = t.international,
                                n = t.callingCode;
                            return e && !n
                        }
                    }, {
                        key: "extractCountryCallingCode",
                        value: function (t) {
                            var e = Oe("+" + t.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                                n = e.countryCallingCode,
                                r = e.number;
                            if (n) return t.setCallingCode(n), t.update({
                                nationalSignificantNumber: r
                            }), !0
                        }
                    }, {
                        key: "reset",
                        value: function (t) {
                            if (t) {
                                this.hasSelectedNumberingPlan = !0;
                                var e = t._nationalPrefixForParsing();
                                this.couldPossiblyExtractAnotherNationalSignificantNumber = e && Ee.test(e)
                            } else this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0
                        }
                    }, {
                        key: "extractNationalSignificantNumber",
                        value: function (t, e) {
                            if (this.hasSelectedNumberingPlan) {
                                var n = ve(t, this.metadata),
                                    r = n.nationalPrefix,
                                    a = n.nationalNumber,
                                    d = n.carrierCode;
                                if (a !== t) return this.onExtractedNationalNumber(r, d, a, t, e), !0
                            }
                        }
                    }, {
                        key: "extractAnotherNationalSignificantNumber",
                        value: function (t, e, n) {
                            if (!this.hasExtractedNationalSignificantNumber) return this.extractNationalSignificantNumber(t, n);
                            if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
                                var r = ve(t, this.metadata),
                                    a = r.nationalPrefix,
                                    d = r.nationalNumber,
                                    i = r.carrierCode;
                                if (d !== e) return this.onExtractedNationalNumber(a, i, d, t, n), !0
                            }
                        }
                    }, {
                        key: "onExtractedNationalNumber",
                        value: function (t, e, n, r, a) {
                            var d, i, o = r.lastIndexOf(n);
                            if (o >= 0 && o === r.length - n.length) {
                                i = !0;
                                var u = r.slice(0, o);
                                u !== t && (d = u)
                            }
                            a({
                                nationalPrefix: t,
                                carrierCode: e,
                                nationalSignificantNumber: n,
                                nationalSignificantNumberMatchesInput: i,
                                complexPrefixBeforeNationalSignificantNumber: d
                            }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange()
                        }
                    }, {
                        key: "reExtractNationalSignificantNumber",
                        value: function (t) {
                            return !!this.extractAnotherNationalSignificantNumber(t.getNationalDigits(), t.nationalSignificantNumber, (function (e) {
                                return t.update(e)
                            })) || (this.extractIddPrefix(t) || this.fixMissingPlus(t) ? (this.extractCallingCodeAndNationalSignificantNumber(t), !0) : void 0)
                        }
                    }, {
                        key: "extractIddPrefix",
                        value: function (t) {
                            var e = t.international,
                                n = t.IDDPrefix,
                                r = t.digits;
                            if (t.nationalSignificantNumber, !e && !n) {
                                var a = ge(r, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
                                return void 0 !== a && a !== r ? (t.update({
                                    IDDPrefix: r.slice(0, r.length - a.length)
                                }), this.startInternationalNumber(t), !0) : void 0
                            }
                        }
                    }, {
                        key: "fixMissingPlus",
                        value: function (t) {
                            if (!t.international) {
                                var e = Ce(t.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                                    n = e.countryCallingCode;
                                if (e.number, n) return t.update({
                                    missingPlus: !0
                                }), this.startInternationalNumber(t), !0
                            }
                        }
                    }, {
                        key: "startInternationalNumber",
                        value: function (t) {
                            t.startInternationalNumber(), t.nationalSignificantNumber && (t.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0)
                        }
                    }, {
                        key: "extractCallingCodeAndNationalSignificantNumber",
                        value: function (t) {
                            this.extractCountryCallingCode(t) && this.extractNationalSignificantNumber(t.getNationalDigits(), (function (e) {
                                return t.update(e)
                            }))
                        }
                    }]) && Se(e.prototype, n), r && Se(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();

            function je(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return Te(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Te(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function Te(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Me(t, e, n) {
                var r = n.getCountryCodesForCallingCode(t);
                if (r) return 1 === r.length ? r[0] : function (t, e, n) {
                    n = new F(n);
                    for (var r, a = je(t); !(r = a()).done;) {
                        var d = r.value;
                        if (n.country(d), n.leadingDigits()) {
                            if (e && 0 === e.search(n.leadingDigits())) return d
                        } else if (nt({
                                phone: e,
                                country: d
                            }, void 0, n.metadata)) return d
                    }
                }(r, e, n.metadata)
            }

            function Re(t) {
                return Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Re(t)
            }

            function ke(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n) return;
                    var r, a, d = [],
                        i = !0,
                        o = !1;
                    try {
                        for (n = n.call(t); !(i = (r = n.next()).done) && (d.push(r.value), !e || d.length !== e); i = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return d
                }(t, e) || function (t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return Fe(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fe(t, e)
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Fe(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function De(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var Le = function () {
                function t(e, n) {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.metadata = new F(n);
                    var r = ke(this.getCountryAndCallingCode(e), 2),
                        a = r[0],
                        d = r[1];
                    this.defaultCountry = a, this.defaultCallingCode = d, this.reset()
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "getCountryAndCallingCode",
                    value: function (t) {
                        var e, n;
                        return t && ("object" === Re(t) ? (e = t.defaultCountry, n = t.defaultCallingCode) : e = t), e && !this.metadata.hasCountry(e) && (e = void 0), [e, n]
                    }
                }, {
                    key: "input",
                    value: function (t) {
                        var e = this.parser.input(t, this.state),
                            n = e.digits;
                        if (e.justLeadingPlus) this.formattedOutput = "+";
                        else if (n) {
                            var r;
                            if (this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state), this.metadata.hasSelectedNumberingPlan() && (r = this.formatter.format(n, this.state)), void 0 === r && this.parser.reExtractNationalSignificantNumber(this.state)) {
                                this.determineTheCountryIfNeeded();
                                var a = this.state.getNationalDigits();
                                a && (r = this.formatter.format(a, this.state))
                            }
                            this.formattedOutput = r ? this.getFullNumber(r) : this.getNonFormattedNumber()
                        }
                        return this.formattedOutput
                    }
                }, {
                    key: "reset",
                    value: function () {
                        var t = this;
                        return this.state = new Dt({
                            onCountryChange: function (e) {
                                t.country = e
                            },
                            onCallingCodeChange: function (e, n) {
                                t.metadata.selectNumberingPlan(e, n), t.formatter.reset(t.metadata.numberingPlan, t.state), t.parser.reset(t.metadata.numberingPlan)
                            }
                        }), this.formatter = new ye({
                            state: this.state,
                            metadata: this.metadata
                        }), this.parser = new Ae({
                            defaultCountry: this.defaultCountry,
                            defaultCallingCode: this.defaultCallingCode,
                            metadata: this.metadata,
                            state: this.state,
                            onNationalSignificantNumberChange: function () {
                                t.determineTheCountryIfNeeded(), t.formatter.reset(t.metadata.numberingPlan, t.state)
                            }
                        }), this.state.reset(this.defaultCountry, this.defaultCallingCode), this.formattedOutput = "", this
                    }
                }, {
                    key: "isInternational",
                    value: function () {
                        return this.state.international
                    }
                }, {
                    key: "getCallingCode",
                    value: function () {
                        if (this.isInternational()) return this.state.callingCode
                    }
                }, {
                    key: "getCountryCallingCode",
                    value: function () {
                        return this.getCallingCode()
                    }
                }, {
                    key: "getCountry",
                    value: function () {
                        if (this.state.digits) return this._getCountry()
                    }
                }, {
                    key: "_getCountry",
                    value: function () {
                        var t = this.state.country;
                        return t
                    }
                }, {
                    key: "determineTheCountryIfNeeded",
                    value: function () {
                        this.state.country && !this.isCountryCallingCodeAmbiguous() || this.determineTheCountry()
                    }
                }, {
                    key: "getFullNumber",
                    value: function (t) {
                        var e = this;
                        if (this.isInternational()) {
                            var n = function (t) {
                                    return e.formatter.getInternationalPrefixBeforeCountryCallingCode(e.state, {
                                        spacing: !!t
                                    }) + t
                                },
                                r = this.state.callingCode;
                            return n(r ? t ? "".concat(r, " ").concat(t) : r : "".concat(this.state.getDigitsWithoutInternationalPrefix()))
                        }
                        return t
                    }
                }, {
                    key: "getNonFormattedNationalNumberWithPrefix",
                    value: function () {
                        var t = this.state,
                            e = t.nationalSignificantNumber,
                            n = t.complexPrefixBeforeNationalSignificantNumber,
                            r = t.nationalPrefix,
                            a = e,
                            d = n || r;
                        return d && (a = d + a), a
                    }
                }, {
                    key: "getNonFormattedNumber",
                    value: function () {
                        var t = this.state.nationalSignificantNumberMatchesInput;
                        return this.getFullNumber(t ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits())
                    }
                }, {
                    key: "getNonFormattedTemplate",
                    value: function () {
                        var t = this.getNonFormattedNumber();
                        if (t) return t.replace(/[\+\d]/g, Gt)
                    }
                }, {
                    key: "isCountryCallingCodeAmbiguous",
                    value: function () {
                        var t = this.state.callingCode,
                            e = this.metadata.getCountryCodesForCallingCode(t);
                        return e && e.length > 1
                    }
                }, {
                    key: "determineTheCountry",
                    value: function () {
                        this.state.setCountry(Me(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, this.state.nationalSignificantNumber, this.metadata))
                    }
                }, {
                    key: "getNumberValue",
                    value: function () {
                        var t = this.state,
                            e = t.digits,
                            n = t.callingCode,
                            r = t.country,
                            a = t.nationalSignificantNumber;
                        if (e) return this.isInternational() ? n ? "+" + n + a : "+" + e : r || n ? "+" + (r ? this.metadata.countryCallingCode() : n) + a : void 0
                    }
                }, {
                    key: "getNumber",
                    value: function () {
                        var t = this.state,
                            e = t.nationalSignificantNumber,
                            n = t.carrierCode,
                            r = t.callingCode,
                            a = this._getCountry();
                        if (e && (a || r)) {
                            var d = new Rt(a || r, e, this.metadata.metadata);
                            return n && (d.carrierCode = n), d
                        }
                    }
                }, {
                    key: "isPossible",
                    value: function () {
                        var t = this.getNumber();
                        return !!t && t.isPossible()
                    }
                }, {
                    key: "isValid",
                    value: function () {
                        var t = this.getNumber();
                        return !!t && t.isValid()
                    }
                }, {
                    key: "getNationalNumber",
                    value: function () {
                        return this.state.nationalSignificantNumber
                    }
                }, {
                    key: "getChars",
                    value: function () {
                        return (this.state.international ? "+" : "") + this.state.digits
                    }
                }, {
                    key: "getTemplate",
                    value: function () {
                        return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || ""
                    }
                }]) && De(e.prototype, n), r && De(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function Be(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return Ge(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ge(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function Ge(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Ue(t) {
                for (var e, n = "", r = Be(t.split("")); !(e = r()).done;) {
                    n += _e(e.value, n) || ""
                }
                return n
            }

            function _e(t, e) {
                if ("+" === t) {
                    if (e) return;
                    return "+"
                }
                return Zt(t)
            }

            function Ke(t) {
                var e = t.country,
                    n = t.international,
                    r = t.withCountryCallingCode,
                    a = t.metadata;
                return e && n && !r ? "+".concat(V(e, a)) : ""
            }

            function Ve(t, e) {
                return e && " " === (t = t.slice(e.length))[0] && (t = t.slice(1)), t
            }
            var He = ["country", "international", "withCountryCallingCode", "metadata"];

            function We() {
                return We = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, We.apply(this, arguments)
            }

            function Ze(t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var qe = function (t) {
                function e(t, e) {
                    var n = t.country,
                        a = t.international,
                        d = t.withCountryCallingCode,
                        i = t.metadata,
                        o = Ze(t, He),
                        u = (0, r.useCallback)((function (t) {
                            var e = new Le(n, i),
                                r = Ke({
                                    country: n,
                                    international: a,
                                    withCountryCallingCode: d,
                                    metadata: i
                                }),
                                o = e.input(r + t),
                                u = e.getTemplate();
                            return r && (o = Ve(o, r), u && (u = Ve(u, r))), {
                                text: o,
                                template: u
                            }
                        }), [n, i]);
                    return r.createElement(x, We({}, o, {
                        ref: e,
                        parse: _e,
                        format: u
                    }))
                }
                return (e = r.forwardRef(e)).propTypes = {
                    value: d.string.isRequired,
                    onChange: d.func.isRequired,
                    country: d.string,
                    international: d.bool,
                    withCountryCallingCode: d.bool,
                    metadata: d.object.isRequired
                }, e.defaultProps = {
                    metadata: t
                }, e
            }();
            var Ye = ["value", "onChange", "country", "international", "withCountryCallingCode", "metadata", "inputComponent"];

            function Je() {
                return Je = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, Je.apply(this, arguments)
            }

            function Xe(t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var ze = function (t) {
                function e(t, e) {
                    var n = t.value,
                        a = t.onChange,
                        d = t.country,
                        i = t.international,
                        o = t.withCountryCallingCode,
                        u = t.metadata,
                        l = t.inputComponent,
                        $ = Xe(t, Ye),
                        c = Ke({
                            country: d,
                            international: i,
                            withCountryCallingCode: o,
                            metadata: u
                        }),
                        s = (0, r.useCallback)((function (t) {
                            var e = Ue(t.target.value);
                            e === n && (0 === Qe(c, e, d, u).indexOf(t.target.value) && (e = e.slice(0, -1)));
                            a(e)
                        }), [c, n, a, d, u]);
                    return r.createElement(l, Je({}, $, {
                        ref: e,
                        value: Qe(c, n, d, u),
                        onChange: s
                    }))
                }
                return (e = r.forwardRef(e)).propTypes = {
                    value: d.string.isRequired,
                    onChange: d.func.isRequired,
                    country: d.string,
                    international: d.bool,
                    withCountryCallingCode: d.bool,
                    metadata: d.object.isRequired,
                    inputComponent: d.elementType.isRequired
                }, e.defaultProps = {
                    metadata: t,
                    inputComponent: "input"
                }, e
            }();

            function Qe(t, e, n, r) {
                return Ve(function (t, e, n) {
                    return n || (n = e, e = void 0), new Le(e, n).input(t)
                }(t + e, n, r), t)
            }

            function tn(t) {
                return String.fromCodePoint(127397 + t.toUpperCase().charCodeAt(0))
            }
            var en = ["value", "onChange", "options"],
                nn = ["value", "options", "className", "iconComponent", "getIconAspectRatio", "arrowComponent", "unicodeFlags"];

            function rn(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return an(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return an(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function an(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function dn() {
                return dn = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, dn.apply(this, arguments)
            }

            function on(t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }

            function un(t) {
                var e = t.value,
                    n = t.onChange,
                    a = t.options,
                    d = on(t, en),
                    i = (0, r.useCallback)((function (t) {
                        var e = t.target.value;
                        n("ZZ" === e ? void 0 : e)
                    }), [n]);
                (0, r.useMemo)((function () {
                    return cn(a, e)
                }), [a, e]);
                return r.createElement("select", dn({}, d, {
                    value: e || "ZZ",
                    onChange: i
                }), a.map((function (t) {
                    var e = t.value,
                        n = t.label,
                        a = t.divider;
                    return r.createElement("option", {
                        key: a ? "|" : e || "ZZ",
                        value: a ? "|" : e || "ZZ",
                        disabled: !!a,
                        style: a ? ln : void 0
                    }, n)
                })))
            }
            un.propTypes = {
                value: d.string,
                onChange: d.func.isRequired,
                options: d.arrayOf(d.shape({
                    value: d.string,
                    label: d.string,
                    divider: d.bool
                })).isRequired
            };
            var ln = {
                fontSize: "1px",
                backgroundColor: "currentColor",
                color: "inherit"
            };

            function $n(t) {
                var e, n = t.value,
                    a = t.options,
                    d = t.className,
                    i = t.iconComponent,
                    o = (t.getIconAspectRatio, t.arrowComponent),
                    l = t.unicodeFlags,
                    $ = on(t, nn),
                    c = (0, r.useMemo)((function () {
                        return cn(a, n)
                    }), [a, n]);
                return r.createElement("div", {
                    className: "PhoneInputCountry"
                }, r.createElement(un, dn({}, $, {
                    value: n,
                    options: a,
                    className: u("PhoneInputCountrySelect", d)
                })), l && n && r.createElement("div", {
                    className: "PhoneInputCountryIconUnicode"
                }, tn((e = n)[0]) + tn(e[1])), !(l && n) && r.createElement(i, {
                    "aria-hidden": !0,
                    country: n,
                    label: c && c.label,
                    aspectRatio: l ? 1 : void 0
                }), r.createElement(o, null))
            }

            function cn(t, e) {
                for (var n, r = rn(t); !(n = r()).done;) {
                    var a = n.value;
                    if (!a.divider && a.value === e) return a
                }
            }
            $n.propTypes = {
                iconComponent: d.elementType,
                arrowComponent: d.elementType.isRequired,
                unicodeFlags: d.bool
            }, $n.defaultProps = {
                arrowComponent: function () {
                    return r.createElement("div", {
                        className: "PhoneInputCountrySelectArrow"
                    })
                }
            };
            var sn = ["country", "countryName", "flags", "flagUrl"];

            function fn() {
                return fn = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, fn.apply(this, arguments)
            }

            function hn(t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }

            function pn(t) {
                var e = t.country,
                    n = t.countryName,
                    a = t.flags,
                    d = t.flagUrl,
                    i = hn(t, sn);
                return a && a[e] ? a[e]({
                    title: n
                }) : r.createElement("img", fn({}, i, {
                    alt: n,
                    role: n ? void 0 : "presentation",
                    src: d.replace("{XX}", e).replace("{xx}", e.toLowerCase())
                }))
            }
            pn.propTypes = {
                country: d.string.isRequired,
                countryName: d.string.isRequired,
                flags: d.objectOf(d.elementType),
                flagUrl: d.string.isRequired
            };
            var yn = ["aspectRatio"],
                mn = ["title"],
                gn = ["title"];

            function vn() {
                return vn = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, vn.apply(this, arguments)
            }

            function bn(t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }

            function Cn(t) {
                var e = t.aspectRatio,
                    n = bn(t, yn);
                return 1 === e ? r.createElement(Nn, n) : r.createElement(On, n)
            }

            function On(t) {
                var e = t.title,
                    n = bn(t, mn);
                return r.createElement("svg", vn({}, n, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 75 50"
                }), r.createElement("title", null, e), r.createElement("g", {
                    className: "PhoneInputInternationalIconGlobe",
                    stroke: "currentColor",
                    fill: "none",
                    strokeWidth: "2",
                    strokeMiterlimit: "10"
                }, r.createElement("path", {
                    strokeLinecap: "round",
                    d: "M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"
                }), r.createElement("path", {
                    d: "M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"
                }), r.createElement("line", {
                    x1: "26",
                    y1: "25",
                    x2: "74",
                    y2: "25"
                }), r.createElement("line", {
                    x1: "50",
                    y1: "1",
                    x2: "50",
                    y2: "49"
                }), r.createElement("path", {
                    strokeLinecap: "round",
                    d: "M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"
                }), r.createElement("path", {
                    strokeLinecap: "round",
                    d: "M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"
                })), r.createElement("path", {
                    className: "PhoneInputInternationalIconPhone",
                    stroke: "none",
                    fill: "currentColor",
                    d: "M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"
                }))
            }

            function Nn(t) {
                var e = t.title,
                    n = bn(t, gn);
                return r.createElement("svg", vn({}, n, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 50 50"
                }), r.createElement("title", null, e), r.createElement("g", {
                    className: "PhoneInputInternationalIconGlobe",
                    stroke: "currentColor",
                    fill: "none",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, r.createElement("path", {
                    d: "M8.45,13A21.44,21.44,0,1,1,37.08,41.56"
                }), r.createElement("path", {
                    d: "M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"
                }), r.createElement("path", {
                    d: "M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"
                }), r.createElement("path", {
                    d: "M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"
                }), r.createElement("line", {
                    x1: "27.8",
                    y1: "0.85",
                    x2: "27.8",
                    y2: "34.61"
                }), r.createElement("line", {
                    x1: "15.2",
                    y1: "22.23",
                    x2: "49.15",
                    y2: "22.23"
                })), r.createElement("path", {
                    className: "PhoneInputInternationalIconPhone",
                    stroke: "transparent",
                    fill: "currentColor",
                    d: "M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"
                }))
            }

            function Pn(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return Sn(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Sn(t, e)
                    }(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function Sn(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function wn(t, e) {
                return !!H(t, e) || (console.error("Country not found: ".concat(t)), !1)
            }

            function xn(t, e) {
                return t && 0 === (t = t.filter((function (t) {
                    return wn(t, e)
                }))).length && (t = void 0), t
            }

            function In(t) {
                return new F(t).getCountries()
            }
            Cn.propTypes = {
                title: d.string.isRequired,
                aspectRatio: d.number
            }, On.propTypes = {
                title: d.string.isRequired
            }, Nn.propTypes = {
                title: d.string.isRequired
            };
            var En = ["country", "label", "aspectRatio"];

            function An() {
                return An = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, An.apply(this, arguments)
            }

            function jn(t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }

            function Tn(t) {
                var e = t.flags,
                    n = t.flagUrl,
                    a = t.flagComponent,
                    i = t.internationalIcon;

                function o(t) {
                    var d = t.country,
                        o = t.label,
                        l = t.aspectRatio,
                        $ = jn(t, En),
                        c = i === Cn ? l : void 0;
                    return r.createElement("div", An({}, $, {
                        className: u("PhoneInputCountryIcon", {
                            "PhoneInputCountryIcon--square": 1 === c,
                            "PhoneInputCountryIcon--border": d
                        })
                    }), d ? r.createElement(a, {
                        country: d,
                        countryName: o,
                        flags: e,
                        flagUrl: n,
                        className: "PhoneInputCountryIconImg"
                    }) : r.createElement(i, {
                        title: o,
                        aspectRatio: c,
                        className: "PhoneInputCountryIconImg"
                    }))
                }
                return o.propTypes = {
                    country: d.string,
                    label: d.string.isRequired,
                    aspectRatio: d.number
                }, o
            }
            Tn({
                flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
                flagComponent: pn,
                internationalIcon: Cn
            });

            function Mn(t) {
                return Mn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Mn(t)
            }

            function Rn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function kn(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Fn(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n) return;
                    var r, a, d = [],
                        i = !0,
                        o = !1;
                    try {
                        for (n = n.call(t); !(i = (r = n.next()).done) && (d.push(r.value), !e || d.length !== e); i = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return d
                }(t, e) || function (t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return Dn(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dn(t, e)
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Dn(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Ln(t) {
                var e, n, r, a = Fn(Array.prototype.slice.call(t), 4),
                    d = a[0],
                    i = a[1],
                    o = a[2],
                    u = a[3];
                if ("string" !== typeof d) throw new TypeError("A text for parsing must be a string.");
                if (e = d, i && "string" !== typeof i) {
                    if (!Bn(i)) throw new Error("Invalid second argument: ".concat(i));
                    o ? (n = i, r = o) : r = i
                } else u ? (n = o, r = u) : (n = void 0, r = o), i && (n = function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Rn(Object(n), !0).forEach((function (e) {
                            kn(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Rn(Object(n)).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({
                    defaultCountry: i
                }, n));
                return {
                    text: e,
                    options: n,
                    metadata: r
                }
            }
            var Bn = function (t) {
                return "object" === Mn(t)
            };

            function Gn(t) {
                return Gn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Gn(t)
            }

            function Un(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function _n(t, e) {
                if (e && ("object" === Gn(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Kn(t)
            }

            function Kn(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Vn(t) {
                var e = "function" === typeof Map ? new Map : void 0;
                return Vn = function (t) {
                    if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                    var n;
                    if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, r)
                    }

                    function r() {
                        return Hn(t, arguments, qn(this).constructor)
                    }
                    return r.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), Zn(r, t)
                }, Vn(t)
            }

            function Hn(t, e, n) {
                return Hn = Wn() ? Reflect.construct : function (t, e, n) {
                    var r = [null];
                    r.push.apply(r, e);
                    var a = new(Function.bind.apply(t, r));
                    return n && Zn(a, n.prototype), a
                }, Hn.apply(null, arguments)
            }

            function Wn() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function Zn(t, e) {
                return Zn = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                }, Zn(t, e)
            }

            function qn(t) {
                return qn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, qn(t)
            }
            var Yn = function (t) {
                    ! function (t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && Zn(t, e)
                    }(d, t);
                    var e, n, r, a = function (t) {
                        var e = Wn();
                        return function () {
                            var n, r = qn(t);
                            if (e) {
                                var a = qn(this).constructor;
                                n = Reflect.construct(r, arguments, a)
                            } else n = r.apply(this, arguments);
                            return _n(this, n)
                        }
                    }(d);

                    function d(t) {
                        var e;
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, d), e = a.call(this, t), Object.setPrototypeOf(Kn(e), d.prototype), e.name = e.constructor.name, e
                    }
                    return e = d, n && Un(e.prototype, n), r && Un(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }(Vn(Error)),
                Jn = new RegExp("(?:" + ct() + ")$", "i");
            var Xn = new RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),
                zn = new RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9#]+$");

            function Qn(t, e, n) {
                if (e = e || {}, n = new F(n), e.defaultCountry && !n.hasCountry(e.defaultCountry)) {
                    if (e.v2) throw new Yn("INVALID_COUNTRY");
                    throw new Error("Unknown country: ".concat(e.defaultCountry))
                }
                var r = function (t, e, n) {
                        if (t && 0 === t.indexOf("tel:")) return bt(t);
                        var r = function (t, e, n) {
                            if (!t) return;
                            if (t.length > 250) {
                                if (n) throw new Yn("TOO_LONG");
                                return
                            }
                            if (!1 === e) return t;
                            var r = t.search(Xn);
                            if (r < 0) return;
                            return t.slice(r).replace(zn, "")
                        }(t, n, e);
                        if (!r) return {};
                        if (!yt(r)) return function (t) {
                            return ft.test(t)
                        }(r) ? {
                            error: "TOO_SHORT"
                        } : {};
                        var a = function (t) {
                            var e = t.search(Jn);
                            if (e < 0) return {};
                            for (var n = t.slice(0, e), r = t.match(Jn), a = 1; a < r.length;) {
                                if (r[a]) return {
                                    number: n,
                                    ext: r[a]
                                };
                                a++
                            }
                        }(r);
                        if (a.ext) return a;
                        return {
                            number: r
                        }
                    }(t, e.v2, e.extract),
                    a = r.number,
                    d = r.ext,
                    i = r.error;
                if (!a) {
                    if (e.v2) {
                        if ("TOO_SHORT" === i) throw new Yn("TOO_SHORT");
                        throw new Yn("NOT_A_NUMBER")
                    }
                    return {}
                }
                var o = function (t, e, n, r) {
                        var a, d = Oe(Ue(t), e, n, r.metadata),
                            i = d.countryCallingCode,
                            o = d.number;
                        if (i) r.selectNumberingPlan(i);
                        else {
                            if (!o || !e && !n) return {};
                            r.selectNumberingPlan(e, n), e && (a = e), i = n || V(e, r.metadata)
                        }
                        if (!o) return {
                            countryCallingCode: i
                        };
                        var u = be(Ue(o), r),
                            l = u.nationalNumber,
                            $ = u.carrierCode,
                            c = Me(i, l, r);
                        c && (a = c, "001" === c || r.country(a));
                        return {
                            country: a,
                            countryCallingCode: i,
                            nationalNumber: l,
                            carrierCode: $
                        }
                    }(a, e.defaultCountry, e.defaultCallingCode, n),
                    u = o.country,
                    l = o.nationalNumber,
                    $ = o.countryCallingCode,
                    c = o.carrierCode;
                if (!n.hasSelectedNumberingPlan()) {
                    if (e.v2) throw new Yn("INVALID_COUNTRY");
                    return {}
                }
                if (!l || l.length < 2) {
                    if (e.v2) throw new Yn("TOO_SHORT");
                    return {}
                }
                if (l.length > 17) {
                    if (e.v2) throw new Yn("TOO_LONG");
                    return {}
                }
                if (e.v2) {
                    var s = new Rt($, l, n.metadata);
                    return u && (s.country = u), c && (s.carrierCode = c), d && (s.ext = d), s
                }
                var f = !!(e.extended ? n.hasSelectedNumberingPlan() : u) && z(l, n.nationalNumberPattern());
                return e.extended ? {
                    country: u,
                    countryCallingCode: $,
                    carrierCode: c,
                    valid: f,
                    possible: !!f || !(!0 !== e.extended || !n.possibleLengths() || !X(l, n)),
                    phone: l,
                    ext: d
                } : f ? function (t, e, n) {
                    var r = {
                        country: t,
                        phone: e
                    };
                    n && (r.ext = n);
                    return r
                }(u, l, d) : {}
            }

            function tr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function er(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tr(Object(n), !0).forEach((function (e) {
                        nr(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tr(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function nr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function rr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ar(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? rr(Object(n), !0).forEach((function (e) {
                        dr(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rr(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function dr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function ir(t, e, n) {
                e && e.defaultCountry && !H(e.defaultCountry, n) && (e = ar(ar({}, e), {}, {
                    defaultCountry: void 0
                }));
                try {
                    return function (t, e, n) {
                        return Qn(t, er(er({}, e), {}, {
                            v2: !0
                        }), n)
                    }(t, e, n)
                } catch (r) {
                    if (!(r instanceof Yn)) throw r
                }
            }
            var or = /^\d+$/;

            function ur(t, e) {
                var n = "+" + V(t, e);
                return (e = new F(e)).selectNumberingPlan(t), e.numberingPlan.leadingDigits() && or.test(e.numberingPlan.leadingDigits()) && (n += e.numberingPlan.leadingDigits()), n
            }

            function lr(t, e) {
                return function () {
                    var t = Ln(arguments),
                        e = t.text,
                        n = t.options,
                        r = t.metadata;
                    return ir(e, n, r)
                }(t || "", e)
            }

            function $r(t, e) {
                var n = e.prevCountry,
                    r = e.newCountry,
                    a = e.metadata,
                    d = e.useNationalFormat;
                if (n === r) return t;
                if (!t) return d ? "" : ur(r, a);
                if (r) {
                    if ("+" === t[0]) {
                        if (d) return 0 === t.indexOf("+" + V(r, a)) ? function (t, e, n) {
                            if (e) {
                                var r = "+" + V(e, n);
                                if (t.length < r.length) {
                                    if (0 === r.indexOf(t)) return ""
                                } else if (0 === t.indexOf(r)) return t.slice(r.length)
                            }
                            for (var a = 0, d = Object.keys(n.country_calling_codes); a < d.length; a++) {
                                var i = d[a];
                                if (t.indexOf(i) === "+".length) return t.slice("+".length + i.length)
                            }
                            return ""
                        }(t, r, a) : "";
                        if (n) {
                            var i = ur(r, a);
                            return 0 === t.indexOf(i) ? t : i
                        }
                        var o = ur(r, a);
                        return 0 === t.indexOf(o) ? t : o
                    }
                } else if ("+" !== t[0]) return cr(t, n, a) || "";
                return t
            }

            function cr(t, e, n) {
                if (t) {
                    if ("+" === t[0]) {
                        if ("+" === t) return;
                        var r = new Le(e, n);
                        return r.input(t), r.getNumberValue()
                    }
                    if (e) {
                        var a = yr(t, e, n);
                        return "+".concat(V(e, n)).concat(a || "")
                    }
                }
            }

            function sr(t, e, n) {
                var r = yr(t, e, n);
                if (r) {
                    var a = r.length - function (t, e) {
                        return (e = new F(e)).selectNumberingPlan(t), e.numberingPlan.possibleLengths()[e.numberingPlan.possibleLengths().length - 1]
                    }(e, n);
                    if (a > 0) return t.slice(0, t.length - a)
                }
                return t
            }

            function fr(t, e) {
                var n = e.country,
                    r = e.countries,
                    a = e.required,
                    d = e.metadata;
                if ("+" === t) return n;
                var i = function (t, e) {
                    var n = new Le(null, e);
                    return n.input(t), n.getCountry()
                }(t, d);
                return i && (!r || r.indexOf(i) >= 0) ? i : !n || a || mr(t, n, d) ? n : void 0
            }

            function hr(t, e, n) {
                if (0 === t.indexOf(ur(e, n))) {
                    var r = new Le(e, n);
                    r.input(t);
                    var a = r.getNumber();
                    return a ? a.formatNational().replace(/\D/g, "") : ""
                }
                return t.replace(/\D/g, "")
            }

            function pr(t, e, n) {
                return String.prototype.localeCompare ? t.localeCompare(e, n) : t < e ? -1 : t > e ? 1 : 0
            }

            function yr(t, e, n) {
                var r = new Le(e, n);
                r.input(t);
                var a = r.getNumber();
                return a && a.nationalNumber
            }

            function mr(t, e, n) {
                for (var r = ur(e, n), a = 0; a < t.length && a < r.length;) {
                    if (t[a] !== r[a]) return !1;
                    a++
                }
                return !0
            }

            function gr(t) {
                var e = t.value,
                    n = t.phoneNumber,
                    r = t.defaultCountry,
                    a = t.international,
                    d = t.useNationalFormat,
                    i = t.metadata;
                return (!1 === a || d) && n && n.country ? function (t) {
                    return t.formatNational().replace(/\D/g, "")
                }(n) : !e && a && r ? ur(r, i) : e
            }

            function vr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function br(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? vr(Object(n), !0).forEach((function (e) {
                        Cr(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vr(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Cr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Or(t) {
                return Or = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Or(t)
            }
            var Nr = ["name", "disabled", "readOnly", "autoComplete", "style", "className", "inputRef", "inputComponent", "numberInputProps", "smartCaret", "countrySelectComponent", "countrySelectProps", "containerComponent", "defaultCountry", "countries", "countryOptionsOrder", "labels", "flags", "flagComponent", "flagUrl", "addInternationalOption", "internationalIcon", "displayInitialValueAsLocalNumber", "initialValueFormat", "onCountryChange", "limitMaxLength", "countryCallingCodeEditable", "focusInputOnCountrySelection", "reset", "metadata", "international", "locales"];

            function Pr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Sr() {
                return Sr = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, Sr.apply(this, arguments)
            }

            function wr(t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }

            function xr(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function Ir(t, e) {
                return Ir = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                }, Ir(t, e)
            }

            function Er(t) {
                var e = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = Tr(t);
                    if (e) {
                        var a = Tr(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Ar(this, n)
                }
            }

            function Ar(t, e) {
                if (e && ("object" === Or(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return jr(t)
            }

            function jr(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Tr(t) {
                return Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Tr(t)
            }

            function Mr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Rr = function (t) {
                    ! function (t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && Ir(t, e)
                    }(i, t);
                    var e, n, a, d = Er(i);

                    function i(t) {
                        var e;
                        ! function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), Mr(jr(e = d.call(this, t)), "setInputRef", (function (t) {
                            e.inputRef.current = t;
                            var n = e.props.inputRef;
                            n && ("function" === typeof n ? n(t) : n.current = t)
                        })), Mr(jr(e), "isCountrySupportedWithError", (function (t) {
                            return wn(t, e.props.metadata)
                        })), Mr(jr(e), "onCountryChange", (function (t) {
                            var n = e.props,
                                r = n.international,
                                a = n.metadata,
                                d = n.onChange,
                                i = n.focusInputOnCountrySelection,
                                o = e.state,
                                u = $r(o.phoneDigits, {
                                    prevCountry: o.country,
                                    newCountry: t,
                                    metadata: a,
                                    useNationalFormat: !r
                                }),
                                l = cr(u, t, a);
                            i && e.inputRef.current.focus(), e.setState({
                                country: t,
                                hasUserSelectedACountry: !0,
                                phoneDigits: u,
                                value: l
                            }, (function () {
                                d(l)
                            }))
                        })), Mr(jr(e), "onChange", (function (t) {
                            var n = e.props,
                                r = n.defaultCountry,
                                a = n.onChange,
                                d = n.addInternationalOption,
                                i = n.international,
                                o = n.limitMaxLength,
                                u = n.countryCallingCodeEditable,
                                l = n.metadata,
                                $ = e.state,
                                c = $.countries,
                                s = function (t, e) {
                                    var n, r = e.prevPhoneDigits,
                                        a = e.country,
                                        d = e.defaultCountry,
                                        i = e.countryRequired,
                                        o = e.getAnyCountry,
                                        u = e.countries,
                                        l = e.international,
                                        $ = e.limitMaxLength,
                                        c = e.countryCallingCodeEditable,
                                        s = e.metadata;
                                    if (l && !1 === c) {
                                        var f, h = ur(a, s);
                                        if (0 !== t.indexOf(h)) return t && "+" !== t[0] ? f = cr(t = h + t, a, s) : t = h, {
                                            phoneDigits: t,
                                            value: f,
                                            country: a
                                        }
                                    }
                                    return !1 === l && a && t && "+" === t[0] && (t = hr(t, a, s)), t && a && $ && (t = sr(t, a, s)), !t || "+" === t[0] || a && !l || (t = "+" + t), !t && r && "+" === r[0] && (a = l ? void 0 : d), "+" === t && r && "+" === r[0] && r.length > "+".length && (a = void 0), t && (n = "+" === t[0] && ("+" === t || a && 0 === ur(a, s).indexOf(t)) ? void 0 : cr(t, a, s)), n && (a = fr(n, {
                                        country: a,
                                        countries: u,
                                        metadata: s
                                    }), !1 === l && a && t && "+" === t[0] && (n = cr(t = hr(t, a, s), a, s))), !a && i && (a = d || o()), {
                                        phoneDigits: t,
                                        country: a,
                                        value: n
                                    }
                                }(t, {
                                    prevPhoneDigits: $.phoneDigits,
                                    country: $.country,
                                    countryRequired: !d,
                                    defaultCountry: r,
                                    getAnyCountry: function () {
                                        return e.getFirstSupportedCountry({
                                            countries: c
                                        })
                                    },
                                    countries: c,
                                    international: i,
                                    limitMaxLength: o,
                                    countryCallingCodeEditable: u,
                                    metadata: l
                                }),
                                f = s.phoneDigits,
                                h = s.country,
                                p = s.value,
                                y = {
                                    phoneDigits: f,
                                    value: p,
                                    country: h
                                };
                            !1 === u && (p || f !== e.state.phoneDigits || (y.forceRerender = {})), e.setState(y, (function () {
                                return a(p)
                            }))
                        })), Mr(jr(e), "_onFocus", (function () {
                            return e.setState({
                                isFocused: !0
                            })
                        })), Mr(jr(e), "_onBlur", (function () {
                            return e.setState({
                                isFocused: !1
                            })
                        })), Mr(jr(e), "onFocus", (function (t) {
                            e._onFocus();
                            var n = e.props.onFocus;
                            n && n(t)
                        })), Mr(jr(e), "onBlur", (function (t) {
                            var n = e.props.onBlur;
                            e._onBlur(), n && n(t)
                        })), Mr(jr(e), "onCountryFocus", (function (t) {
                            e._onFocus();
                            var n = e.props.countrySelectProps;
                            if (n) {
                                var r = n.onFocus;
                                r && r(t)
                            }
                        })), Mr(jr(e), "onCountryBlur", (function (t) {
                            e._onBlur();
                            var n = e.props.countrySelectProps;
                            if (n) {
                                var r = n.onBlur;
                                r && r(t)
                            }
                        })), e.inputRef = r.createRef();
                        var n = e.props,
                            a = n.value,
                            o = (n.labels, n.international),
                            u = n.addInternationalOption,
                            l = n.displayInitialValueAsLocalNumber,
                            $ = n.initialValueFormat,
                            c = n.metadata,
                            s = e.props,
                            f = s.defaultCountry,
                            h = s.countries;
                        f && (e.isCountrySupportedWithError(f) || (f = void 0)), h = xn(h, c);
                        var p = lr(a, c);
                        e.CountryIcon = Tn(e.props);
                        var y = function (t) {
                            var e, n = t.value,
                                r = t.phoneNumber,
                                a = t.defaultCountry,
                                d = t.getAnyCountry,
                                i = t.countries,
                                o = t.required,
                                u = t.metadata;
                            return r && r.country ? e = r.country : a && (n && !mr(n, a, u) || (e = a)), i && i.indexOf(e) < 0 && (e = void 0), !e && o && i && i.length > 0 && (e = d()), e
                        }({
                            value: a,
                            phoneNumber: p,
                            defaultCountry: f,
                            required: !u,
                            countries: h || In(c),
                            getAnyCountry: function () {
                                return e.getFirstSupportedCountry({
                                    countries: h
                                })
                            },
                            metadata: c
                        });
                        return e.state = {
                            props: e.props,
                            country: y,
                            countries: h,
                            phoneDigits: gr({
                                value: a,
                                phoneNumber: p,
                                defaultCountry: f,
                                international: o,
                                useNationalFormat: l || "national" === $,
                                metadata: c
                            }),
                            value: a
                        }, e
                    }
                    return e = i, n = [{
                        key: "componentDidMount",
                        value: function () {
                            var t = this.props.onCountryChange,
                                e = this.props.defaultCountry,
                                n = this.state.country;
                            t && (e && (this.isCountrySupportedWithError(e) || (e = void 0)), n !== e && t(n))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (t, e) {
                            var n = this.props.onCountryChange,
                                r = this.state.country;
                            n && r !== e.country && n(r)
                        }
                    }, {
                        key: "getCountrySelectOptions",
                        value: function (t) {
                            var e = t.countries,
                                n = this.props,
                                r = n.international,
                                a = n.countryCallingCodeEditable,
                                d = n.countryOptionsOrder,
                                i = n.addInternationalOption,
                                o = n.labels,
                                u = n.locales,
                                l = n.metadata;
                            return this.useMemoCountrySelectOptions((function () {
                                return function (t, e) {
                                    if (!e) return t;
                                    for (var n, r = [], a = [], d = r, i = Pn(e); !(n = i()).done;) {
                                        var o = n.value;
                                        "|" === o ? d.push({
                                            divider: !0
                                        }) : "..." === o || "\u2026" === o ? d = a : function () {
                                            var e = void 0;
                                            e = "\ud83c\udf10" === o ? void 0 : o;
                                            var n = t.indexOf(t.filter((function (t) {
                                                    return t.value === e
                                                }))[0]),
                                                r = t[n];
                                            t.splice(n, 1), d.push(r)
                                        }()
                                    }
                                    return r.concat(t).concat(a)
                                }(function (t) {
                                    var e = t.countries,
                                        n = t.countryNames,
                                        r = t.addInternationalOption,
                                        a = t.compareStringsLocales,
                                        d = t.compareStrings;
                                    d || (d = pr);
                                    var i = e.map((function (t) {
                                        return {
                                            value: t,
                                            label: n[t] || t
                                        }
                                    }));
                                    return i.sort((function (t, e) {
                                        return d(t.label, e.label, a)
                                    })), r && i.unshift({
                                        label: n.ZZ
                                    }), i
                                }({
                                    countries: e || In(l),
                                    countryNames: o,
                                    addInternationalOption: (!r || !1 !== a) && i,
                                    compareStringsLocales: u
                                }), function (t, e) {
                                    if (t && (t = t.filter((function (t) {
                                            switch (t) {
                                                case "\ud83c\udf10":
                                                case "|":
                                                case "...":
                                                case "\u2026":
                                                    return !0;
                                                default:
                                                    return wn(t, e)
                                            }
                                        }))).length > 0) return t
                                }(d, l))
                            }), [e, d, i, o, l])
                        }
                    }, {
                        key: "useMemoCountrySelectOptions",
                        value: function (t, e) {
                            return this.countrySelectOptionsMemoDependencies && function (t, e) {
                                if (t.length !== e.length) return !1;
                                for (var n = 0; n < t.length;) {
                                    if (t[n] !== e[n]) return !1;
                                    n++
                                }
                                return !0
                            }(e, this.countrySelectOptionsMemoDependencies) || (this.countrySelectOptionsMemo = t(), this.countrySelectOptionsMemoDependencies = e), this.countrySelectOptionsMemo
                        }
                    }, {
                        key: "getFirstSupportedCountry",
                        value: function (t) {
                            var e = t.countries;
                            return this.getCountrySelectOptions({
                                countries: e
                            })[0].value
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var t = this.props,
                                e = t.name,
                                n = t.disabled,
                                a = t.readOnly,
                                d = t.autoComplete,
                                i = t.style,
                                o = t.className,
                                l = (t.inputRef, t.inputComponent),
                                $ = t.numberInputProps,
                                c = t.smartCaret,
                                s = t.countrySelectComponent,
                                f = t.countrySelectProps,
                                h = t.containerComponent,
                                p = (t.defaultCountry, t.countries, t.countryOptionsOrder, t.labels),
                                y = (t.flags, t.flagComponent, t.flagUrl, t.addInternationalOption, t.internationalIcon, t.displayInitialValueAsLocalNumber, t.initialValueFormat, t.onCountryChange, t.limitMaxLength, t.countryCallingCodeEditable, t.focusInputOnCountrySelection, t.reset, t.metadata),
                                m = (t.international, t.locales, wr(t, Nr)),
                                g = this.state,
                                v = g.country,
                                b = g.countries,
                                C = g.phoneDigits,
                                O = g.isFocused,
                                N = c ? qe : ze,
                                P = this.getCountrySelectOptions({
                                    countries: b
                                });
                            return r.createElement(h, {
                                style: i,
                                className: u(o, "PhoneInput", {
                                    "PhoneInput--focus": O,
                                    "PhoneInput--disabled": n,
                                    "PhoneInput--readOnly": a
                                })
                            }, r.createElement(s, Sr({
                                name: e ? "".concat(e, "Country") : void 0,
                                "aria-label": p.country
                            }, f, {
                                value: v,
                                options: P,
                                onChange: this.onCountryChange,
                                onFocus: this.onCountryFocus,
                                onBlur: this.onCountryBlur,
                                disabled: n || f && f.disabled,
                                readOnly: a || f && f.readOnly,
                                iconComponent: this.CountryIcon
                            })), r.createElement(N, Sr({
                                ref: this.setInputRef,
                                type: "tel",
                                autoComplete: d
                            }, $, m, {
                                name: e,
                                metadata: y,
                                country: v,
                                value: C || "",
                                onChange: this.onChange,
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                disabled: n,
                                readOnly: a,
                                inputComponent: l,
                                className: u("PhoneInputInput", $ && $.className, m.className)
                            })))
                        }
                    }], a = [{
                        key: "getDerivedStateFromProps",
                        value: function (t, e) {
                            return function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? Pr(Object(n), !0).forEach((function (e) {
                                        Mr(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach((function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({
                                props: t
                            }, function (t, e, n) {
                                var r = t.metadata,
                                    a = t.countries,
                                    d = t.defaultCountry,
                                    i = t.value,
                                    o = t.reset,
                                    u = t.international,
                                    l = t.displayInitialValueAsLocalNumber,
                                    $ = t.initialValueFormat,
                                    c = e.defaultCountry,
                                    s = e.value,
                                    f = e.reset,
                                    h = (n.country, n.value),
                                    p = n.hasUserSelectedACountry,
                                    y = function (t) {
                                        return gr(br(br({}, t), {}, {
                                            international: u,
                                            useNationalFormat: l || "national" === $,
                                            metadata: r
                                        }))
                                    };
                                if (o !== f) return {
                                    phoneDigits: y({
                                        value: void 0,
                                        defaultCountry: d
                                    }),
                                    value: void 0,
                                    country: d,
                                    hasUserSelectedACountry: void 0
                                };
                                if (d !== c) {
                                    var m = !d || wn(d, r),
                                        g = !h || u && h === y({
                                            value: void 0,
                                            defaultCountry: c
                                        });
                                    if (!p && m && !i && g) return {
                                        country: d,
                                        phoneDigits: y({
                                            value: void 0,
                                            defaultCountry: d
                                        }),
                                        value: void 0
                                    }
                                }
                                if (i !== s && i !== h) {
                                    var v, b, C;
                                    if (i) {
                                        v = lr(i, r);
                                        var O = xn(a, r);
                                        v && v.country ? (!O || O.indexOf(v.country) >= 0) && (b = v.country) : b = fr(i, {
                                            country: void 0,
                                            countries: O,
                                            metadata: r
                                        })
                                    }
                                    return i || (C = {
                                        hasUserSelectedACountry: void 0
                                    }), br(br({}, C), {}, {
                                        phoneDigits: y({
                                            phoneNumber: v,
                                            value: i,
                                            defaultCountry: d
                                        }),
                                        value: i,
                                        country: i ? b : d
                                    })
                                }
                            }(t, e.props, e))
                        }
                    }], n && xr(e.prototype, n), a && xr(e, a), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), i
                }(r.PureComponent),
                kr = r.forwardRef((function (t, e) {
                    return r.createElement(Rr, Sr({}, t, {
                        inputRef: e
                    }))
                }));
            kr.propTypes = {
                value: d.string,
                onChange: d.func.isRequired,
                onFocus: d.func,
                onBlur: d.func,
                disabled: d.bool,
                readOnly: d.bool,
                autoComplete: d.string.isRequired,
                initialValueFormat: d.oneOf(["national"]),
                displayInitialValueAsLocalNumber: d.bool,
                defaultCountry: d.string,
                countries: d.arrayOf(d.string),
                labels: o.isRequired,
                locales: d.oneOfType([d.string, d.arrayOf(d.string)]),
                flagUrl: d.string.isRequired,
                flags: d.objectOf(d.elementType),
                flagComponent: d.elementType.isRequired,
                addInternationalOption: d.bool.isRequired,
                internationalIcon: d.elementType.isRequired,
                countryOptionsOrder: d.arrayOf(d.string),
                style: d.object,
                className: d.string,
                countrySelectComponent: d.elementType.isRequired,
                countrySelectProps: d.object,
                inputComponent: d.elementType.isRequired,
                containerComponent: d.elementType.isRequired,
                numberInputProps: d.object,
                smartCaret: d.bool.isRequired,
                international: d.bool,
                limitMaxLength: d.bool.isRequired,
                countryCallingCodeEditable: d.bool.isRequired,
                metadata: i.isRequired,
                onCountryChange: d.func,
                focusInputOnCountrySelection: d.bool.isRequired
            }, kr.defaultProps = {
                autoComplete: "tel",
                countrySelectComponent: $n,
                flagComponent: pn,
                flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
                internationalIcon: Cn,
                inputComponent: "input",
                containerComponent: "div",
                reset: d.any,
                smartCaret: !0,
                addInternationalOption: !0,
                limitMaxLength: !1,
                countryCallingCodeEditable: !0,
                focusInputOnCountrySelection: !0
            };
            var Fr = kr;

            function Dr() {
                return Dr = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, Dr.apply(this, arguments)
            }

            function Lr(t) {
                var e = r.forwardRef((function (t, e) {
                    return r.createElement(Fr, Dr({
                        ref: e
                    }, t))
                }));
                return e.propTypes = {
                    metadata: i.isRequired,
                    labels: o.isRequired
                }, e.defaultProps = {
                    metadata: t,
                    labels: a
                }, e
            }
            Lr();
            var Br = Lr({
                version: 4,
                country_calling_codes: {
                    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                    7: ["RU", "KZ"],
                    20: ["EG"],
                    27: ["ZA"],
                    30: ["GR"],
                    31: ["NL"],
                    32: ["BE"],
                    33: ["FR"],
                    34: ["ES"],
                    36: ["HU"],
                    39: ["IT", "VA"],
                    40: ["RO"],
                    41: ["CH"],
                    43: ["AT"],
                    44: ["GB", "GG", "IM", "JE"],
                    45: ["DK"],
                    46: ["SE"],
                    47: ["NO", "SJ"],
                    48: ["PL"],
                    49: ["DE"],
                    51: ["PE"],
                    52: ["MX"],
                    53: ["CU"],
                    54: ["AR"],
                    55: ["BR"],
                    56: ["CL"],
                    57: ["CO"],
                    58: ["VE"],
                    60: ["MY"],
                    61: ["AU", "CC", "CX"],
                    62: ["ID"],
                    63: ["PH"],
                    64: ["NZ"],
                    65: ["SG"],
                    66: ["TH"],
                    81: ["JP"],
                    82: ["KR"],
                    84: ["VN"],
                    86: ["CN"],
                    90: ["TR"],
                    91: ["IN"],
                    92: ["PK"],
                    93: ["AF"],
                    94: ["LK"],
                    95: ["MM"],
                    98: ["IR"],
                    211: ["SS"],
                    212: ["MA", "EH"],
                    213: ["DZ"],
                    216: ["TN"],
                    218: ["LY"],
                    220: ["GM"],
                    221: ["SN"],
                    222: ["MR"],
                    223: ["ML"],
                    224: ["GN"],
                    225: ["CI"],
                    226: ["BF"],
                    227: ["NE"],
                    228: ["TG"],
                    229: ["BJ"],
                    230: ["MU"],
                    231: ["LR"],
                    232: ["SL"],
                    233: ["GH"],
                    234: ["NG"],
                    235: ["TD"],
                    236: ["CF"],
                    237: ["CM"],
                    238: ["CV"],
                    239: ["ST"],
                    240: ["GQ"],
                    241: ["GA"],
                    242: ["CG"],
                    243: ["CD"],
                    244: ["AO"],
                    245: ["GW"],
                    246: ["IO"],
                    247: ["AC"],
                    248: ["SC"],
                    249: ["SD"],
                    250: ["RW"],
                    251: ["ET"],
                    252: ["SO"],
                    253: ["DJ"],
                    254: ["KE"],
                    255: ["TZ"],
                    256: ["UG"],
                    257: ["BI"],
                    258: ["MZ"],
                    260: ["ZM"],
                    261: ["MG"],
                    262: ["RE", "YT"],
                    263: ["ZW"],
                    264: ["NA"],
                    265: ["MW"],
                    266: ["LS"],
                    267: ["BW"],
                    268: ["SZ"],
                    269: ["KM"],
                    290: ["SH", "TA"],
                    291: ["ER"],
                    297: ["AW"],
                    298: ["FO"],
                    299: ["GL"],
                    350: ["GI"],
                    351: ["PT"],
                    352: ["LU"],
                    353: ["IE"],
                    354: ["IS"],
                    355: ["AL"],
                    356: ["MT"],
                    357: ["CY"],
                    358: ["FI", "AX"],
                    359: ["BG"],
                    370: ["LT"],
                    371: ["LV"],
                    372: ["EE"],
                    373: ["MD"],
                    374: ["AM"],
                    375: ["BY"],
                    376: ["AD"],
                    377: ["MC"],
                    378: ["SM"],
                    380: ["UA"],
                    381: ["RS"],
                    382: ["ME"],
                    383: ["XK"],
                    385: ["HR"],
                    386: ["SI"],
                    387: ["BA"],
                    389: ["MK"],
                    420: ["CZ"],
                    421: ["SK"],
                    423: ["LI"],
                    500: ["FK"],
                    501: ["BZ"],
                    502: ["GT"],
                    503: ["SV"],
                    504: ["HN"],
                    505: ["NI"],
                    506: ["CR"],
                    507: ["PA"],
                    508: ["PM"],
                    509: ["HT"],
                    590: ["GP", "BL", "MF"],
                    591: ["BO"],
                    592: ["GY"],
                    593: ["EC"],
                    594: ["GF"],
                    595: ["PY"],
                    596: ["MQ"],
                    597: ["SR"],
                    598: ["UY"],
                    599: ["CW", "BQ"],
                    670: ["TL"],
                    672: ["NF"],
                    673: ["BN"],
                    674: ["NR"],
                    675: ["PG"],
                    676: ["TO"],
                    677: ["SB"],
                    678: ["VU"],
                    679: ["FJ"],
                    680: ["PW"],
                    681: ["WF"],
                    682: ["CK"],
                    683: ["NU"],
                    685: ["WS"],
                    686: ["KI"],
                    687: ["NC"],
                    688: ["TV"],
                    689: ["PF"],
                    690: ["TK"],
                    691: ["FM"],
                    692: ["MH"],
                    850: ["KP"],
                    852: ["HK"],
                    853: ["MO"],
                    855: ["KH"],
                    856: ["LA"],
                    880: ["BD"],
                    886: ["TW"],
                    960: ["MV"],
                    961: ["LB"],
                    962: ["JO"],
                    963: ["SY"],
                    964: ["IQ"],
                    965: ["KW"],
                    966: ["SA"],
                    967: ["YE"],
                    968: ["OM"],
                    970: ["PS"],
                    971: ["AE"],
                    972: ["IL"],
                    973: ["BH"],
                    974: ["QA"],
                    975: ["BT"],
                    976: ["MN"],
                    977: ["NP"],
                    992: ["TJ"],
                    993: ["TM"],
                    994: ["AZ"],
                    995: ["GE"],
                    996: ["KG"],
                    998: ["UZ"]
                },
                countries: {
                    AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
                    AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ]
                    ],
                    AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0"
                    ],
                    AF: ["93", "00", "[2-7]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                        ], "0"
                    ],
                    AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268"],
                    AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264"],
                    AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                        [
                            ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                        ], "0"
                    ],
                    AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                        ], "0"
                    ],
                    AO: ["244", "00", "[29]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                        ]
                    ],
                    AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
                        [
                            ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                            ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                        ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
                    ],
                    AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684"],
                    AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                            ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                            ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                            ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0"
                    ],
                    AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                        ], "0", 0, "0|(183[12])", 0, 0, 0, [
                            ["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]],
                            ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]],
                            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                            ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                            ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                            ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                        ], "0011"
                    ],
                    AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                        ]
                    ],
                    AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
                    AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
                        ], "0"
                    ],
                    BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                        ], "0"
                    ],
                    BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246"],
                    BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                            ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"],
                            ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                        ], "0"
                    ],
                    BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                        ], "0"
                    ],
                    BF: ["226", "00", "[025-7]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                        ]
                    ],
                    BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9],
                        [
                            ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    BH: ["973", "00", "[136-9]\\d{7}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
                        ]
                    ],
                    BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                        ]
                    ],
                    BJ: ["229", "00", "(?:[25689]\\d|40)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]
                        ]
                    ],
                    BL: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                        ["590(?:2[7-9]|5[12]|87)\\d{4}"],
                        ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                        ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]
                    ]],
                    BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441"],
                    BN: ["673", "00", "[2-578]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                        ]
                    ],
                    BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9],
                        [
                            ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                            ["(\\d{8})", "$1", ["[67]"]],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0", 0, "0(1\\d)?"
                    ],
                    BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
                    BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                            ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                        ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
                    ],
                    BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242"],
                    BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                        ]
                    ],
                    BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                            ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                            ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                            ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                        ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
                    ],
                    BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                            ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                        ]
                    ],
                    CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [
                        ["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]],
                        ["", [10]],
                        ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
                        ["900[2-9]\\d{6}", [10]],
                        ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-7]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]
                    ]],
                    CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                        ["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                        ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]],
                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                    ], "0011"],
                    CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                        ]
                    ],
                    CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                        [
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                        ]
                    ],
                    CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                        ], "0"
                    ],
                    CI: ["225", "00", "[02]\\d{9}", [10],
                        [
                            ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                        ]
                    ],
                    CK: ["682", "00", "[2-578]\\d{4}", [5],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
                        ]
                    ],
                    CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                        [
                            ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                        ]
                    ],
                    CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
                        ]
                    ],
                    CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                        ], "0", 0, "0|(1(?:[12]\\d|79)\\d\\d)", 0, 0, 0, 0, "00"
                    ],
                    CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11],
                        [
                            ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["[39]"]],
                            ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
                        ], "0", 0, "0(4(?:[14]4|56)|[579])?"
                    ],
                    CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                        ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
                    ],
                    CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                            ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
                        ], "0"
                    ],
                    CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
                        ]
                    ],
                    CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                        ], 0, 0, 0, 0, 0, "[69]"
                    ],
                    CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                        ["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                        ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]],
                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                    ], "0011"],
                    CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                        ]
                    ],
                    CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ]
                    ],
                    DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:1\\d|2[02-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[05]\\d|[23]1|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        [
                            ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                            ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                            ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                            ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                            ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                            ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                            ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                        ], "0"
                    ],
                    DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                        ]
                    ],
                    DK: ["45", "00", "[2-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                        ]
                    ],
                    DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767"],
                    DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
                    DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                        ], "0"
                    ],
                    EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                            ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                        ], "0"
                    ],
                    EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
                    ER: ["291", "00", "[178]\\d{6}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                        ], "0"
                    ],
                    ES: ["34", "00", "[5-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                        ]
                    ],
                    ET: ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
                        ], "0"
                    ],
                    FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"],
                            ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"],
                            ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
                    ],
                    FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    FK: ["500", "00", "[2-7]\\d{4}", [5]],
                    FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
                        ]
                    ],
                    FO: ["298", "00", "[2-9]\\d{5}", [6],
                        [
                            ["(\\d{6})", "$1", ["[2-9]"]]
                        ], 0, 0, "(10(?:01|[12]0|88))"
                    ],
                    FR: ["33", "00", "[1-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                        ], "0"
                    ],
                    GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
                        ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"
                    ],
                    GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[01359])|(?:5[0-26-9]|[78][0-49])\\d\\d|6(?:[0-4]\\d\\d|50[0-79]))|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-26-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
                            ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                            ["80[08]\\d{7}|800\\d{6}|8001111"],
                            ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                            ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                            ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                            ["56\\d{8}", [10]]
                        ], 0, " x"
                    ],
                    GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473"],
                    GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                        ], "0"
                    ],
                    GF: ["594", "00", "(?:[56]94|80\\d|976)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [
                        ["1481[25-9]\\d{5}", [10]],
                        ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                        ["80[08]\\d{7}|800\\d{6}|8001111"],
                        ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                        ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                        ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                        ["56\\d{8}", [10]]
                    ]],
                    GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                        ], "0"
                    ],
                    GI: ["350", "00", "(?:[25]\\d\\d|606)\\d{5}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                        ]
                    ],
                    GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
                        ]
                    ],
                    GM: ["220", "00", "[2-9]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ]
                    ],
                    GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                        ]
                    ],
                    GP: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|6[0-289]|7[08]|8[0-689]|9\\d)\\d{4}"],
                            ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                            ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]
                        ]
                    ],
                    GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                        ]
                    ],
                    GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                            ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ]
                    ],
                    GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671"],
                    GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                        ]
                    ],
                    GY: ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                        ]
                    ],
                    HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
                        [
                            ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                        ]
                    ],
                    HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    HT: ["509", "00", "[2-489]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
                        ]
                    ],
                    HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
                        ], "06"
                    ],
                    ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                            ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                            ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                            ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                            ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                        ], "0"
                    ],
                    IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                            ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                            ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                            ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                            ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                        ], "0"
                    ],
                    IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([25-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24"],
                    IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                            ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                            ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                            ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                        ], "0"
                    ],
                    IO: ["246", "00", "3\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                        ]
                    ],
                    IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                        [
                            ["(\\d{4,5})", "$1", ["96"], "0$1"],
                            ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                        ], "0"
                    ],
                    IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                            ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                            ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, [
                            ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
                            ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
                            ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                            ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                            ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]],
                            ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                        ]
                    ],
                    JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [
                        ["1534[0-24-8]\\d{5}"],
                        ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                        ["80(?:07(?:35|81)|8901)\\d{4}"],
                        ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                        ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                        ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
                        ["56\\d{8}"]
                    ]],
                    JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
                    JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                            ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]
                        ], "0"
                    ],
                    KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
                    KM: ["269", "00", "[3478]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                        ]
                    ],
                    KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869"],
                    KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                        ], "0"
                    ],
                    KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                        ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
                    ],
                    KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
                        [
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
                        ]
                    ],
                    KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345"],
                    KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
                    LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                        ], "0"
                    ],
                    LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
                        ], "0"
                    ],
                    LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "758$1", 0, "758"],
                    LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ], "0", 0, "0|(1001)"
                    ],
                    LK: ["94", "00", "[1-9]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                        ], "0"
                    ],
                    LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]
                        ], "0"
                    ],
                    LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                        ]
                    ],
                    LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]
                        ], "8", 0, "[08]"
                    ],
                    LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                        ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
                    ],
                    LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                        ]
                    ],
                    LY: ["218", "00", "[2-9]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
                        ], "0"
                    ],
                    MA: ["212", "00", "[5-8]\\d{8}", [9],
                        [
                            ["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[89]|389)", "5(?:29[89]|389)0"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["5(?:29(?:[189][05]|2[29]|3[01])|389[05])\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[08]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                            ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]))\\d{6}"],
                            ["80\\d{7}"],
                            ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]
                        ]
                    ],
                    MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                        ], "0"
                    ],
                    MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                        ], "0"
                    ],
                    ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                        ], "0"
                    ],
                    MF: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                        ["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],
                        ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                        ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]
                    ]],
                    MG: ["261", "00", "[23]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                        ], "0", 0, "0|([24-9]\\d{6})$", "20$1"
                    ],
                    MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                        ], "1"
                    ],
                    MK: ["389", "00", "[2-578]\\d{7}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                        ], "0"
                    ],
                    ML: ["223", "00", "[24-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                        ]
                    ],
                    MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                            ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    MN: ["976", "001", "[12]\\d{7,9}|[57-9]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                        ], "0"
                    ],
                    MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
                        [
                            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                        ]
                    ],
                    MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670"],
                    MQ: ["596", "00", "(?:69|80)\\d{7}|(?:59|97)6\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                        ]
                    ],
                    MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "1|([34]\\d{6})$", "664$1", 0, "664"],
                    MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                        ]
                    ],
                    MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:5|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["5"]],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "020"
                    ],
                    MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    MW: ["265", "00", "(?:[129]\\d|31|77|88)\\d{7}|1\\d{6}", [7, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
                        ], "0"
                    ],
                    MX: ["52", "0[09]", "1(?:(?:44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[017]\\d|[235][1-9]|4[0-35-9]|6[0-46-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]
                        ], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"
                    ],
                    MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                        ], "0"
                    ],
                    MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
                        ]
                    ],
                    NE: ["227", "00", "[027-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]
                        ]
                    ],
                    NF: ["672", "00", "[13]\\d{5}", [6],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                            ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
                        ], 0, 0, "([0-258]\\d{4})$", "3$1"
                    ],
                    NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                        ], "0"
                    ],
                    NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                        ]
                    ],
                    NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                            ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                        ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
                    ],
                    NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-579]|6[2-6])"], "0$1"],
                            ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                        ], "0"
                    ],
                    NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
                        ]
                    ],
                    NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                        ]
                    ],
                    NZ: ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, "00"
                    ],
                    OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
                        [
                            ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
                        ]
                    ],
                    PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    PE: ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, " Anexo "
                    ],
                    PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                        ]
                    ],
                    PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                        ], "0"
                    ],
                    PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                            ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                            ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                        ], "0"
                    ],
                    PL: ["48", "00", "6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{5})", "$1", ["19"]],
                            ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    PM: ["508", "00", "(?:[45]|80\\d\\d)\\d{5}", [6, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
                    PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
                        ]
                    ],
                    PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ]
                    ],
                    PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                            ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                        ], "0"
                    ],
                    QA: ["974", "00", "[2-7]\\d{7}|800\\d{4}(?:\\d{2})?|2\\d{6}", [7, 8, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]
                        ]
                    ],
                    RE: ["262", "00", "976\\d{6}|(?:26|[68]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]
                        ], "0", 0, 0, 0, 0, "26[23]|69|[89]"
                    ],
                    RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                            ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
                    ],
                    RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                        ], "0"
                    ],
                    RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
                        [
                            ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                            ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
                            ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
                        ], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"
                    ],
                    RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]
                        ], "0"
                    ],
                    SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0"
                    ],
                    SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                        ]
                    ],
                    SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    SD: ["249", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0"
                    ],
                    SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                            ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                        ], "0"
                    ],
                    SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-5]|[1-9])"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ]
                    ],
                    SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
                    SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                        [
                            ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                        ], "0", 0, 0, 0, 0, 0, 0, "00"
                    ],
                    SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
                    SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                        [
                            ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                        ], "0"
                    ],
                    SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
                        ], "0"
                    ],
                    SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                        ], 0, 0, "([89]\\d{5})$", "0549$1"
                    ],
                    SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                        ]
                    ],
                    SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                            ["(\\d{6})", "$1", ["[134]"]],
                            ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                            ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]],
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]
                        ], "0"
                    ],
                    SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                            ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                        ]
                    ],
                    SS: ["211", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0"
                    ],
                    ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                        ]
                    ],
                    SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ]
                    ],
                    SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721"],
                    SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]
                        ], "0"
                    ],
                    SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                        ]
                    ],
                    TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
                    TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649"],
                    TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    TG: ["228", "00", "[279]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                        ]
                    ],
                    TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    TJ: ["992", "810", "(?:00|[1-57-9]\\d)\\d{7}", [9],
                        [
                            ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]],
                            ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
                    TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                        ]
                    ],
                    TM: ["993", "810", "[1-6]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                        ]
                    ],
                    TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
                        ]
                    ],
                    TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
                        [
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
                        ], "0"
                    ],
                    TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868"],
                    TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                            ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                        ]
                    ],
                    TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
                    ],
                    TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                        ], "0"
                    ],
                    UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, "0~0"
                    ],
                    UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                        ], "0"
                    ],
                    US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                        ], "1", 0, 0, 0, 0, 0, [
                            ["5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|44))|82(?:2(?:0[0-3]|[268]2)|3(?:0[02]|22|33)|4(?:00|4[24]|65|82)|5(?:00|29|58|83)|6(?:00|66|82)|7(?:58|77)|8(?:00|42|88)|9(?:00|9[89])))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0157-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                            [""],
                            ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                            ["900[2-9]\\d{6}"],
                            ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}"]
                        ]
                    ],
                    UY: ["598", "0(?:0|1[3-9]\\d)", "4\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
                    ],
                    UZ: ["998", "810", "(?:33|55|[679]\\d|88)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
                    VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784"],
                    VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
                        [
                            ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
                        ], "0"
                    ],
                    VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284"],
                    VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340"],
                    VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                        ], "0"
                    ],
                    VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
                        ]
                    ],
                    WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                        ]
                    ],
                    WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
                        [
                            ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                        ]
                    ],
                    XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                        ], "0"
                    ],
                    YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    YT: ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63"],
                    ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                        ], "0"
                    ],
                    ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                            ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                        ], "0"
                    ]
                },
                nonGeographic: {
                    800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]
                    ],
                    808: ["808", 0, "[1-9]\\d{7}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
                    ],
                    870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]
                    ],
                    878: ["878", 0, "10\\d{10}", [12],
                        [
                            ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
                    ],
                    881: ["881", 0, "[0-36-9]\\d{8}", [9],
                        [
                            ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]
                    ],
                    882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["4"]],
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]],
                            ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                            ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]
                    ],
                    883: ["883", 0, "(?:210|370\\d\\d)\\d{7}|51\\d{7}(?:\\d{3})?", [9, 10, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
                            ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[35]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:210|(?:370[1-9]|51[013]0)\\d)\\d{7}|5100\\d{5}"]]
                    ],
                    888: ["888", 0, "\\d{11}", [11],
                        [
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
                    ],
                    979: ["979", 0, "[1359]\\d{8}", [9],
                        [
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
                    ]
                }
            })
        }
    }
]);