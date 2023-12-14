(()=>{
  var e = {
      598: ()=>{
          function e(e) {
              var t = !0
                , i = !1
                , r = null
                , n = {
                  text: !0,
                  search: !0,
                  url: !0,
                  tel: !0,
                  email: !0,
                  password: !0,
                  number: !0,
                  date: !0,
                  month: !0,
                  week: !0,
                  time: !0,
                  datetime: !0,
                  "datetime-local": !0
              };
              
              function s(e) {
                  return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList"in e && "contains"in e.classList)
              }
              function a(e) {
                  e.classList.contains("focus-visible") || (e.classList.add("focus-visible"),
                  e.setAttribute("data-focus-visible-added", ""))
              }
              function o(e) {
                  t = !1
              }
              function l() {
                  document.addEventListener("mousemove", c),
                  document.addEventListener("mousedown", c),
                  document.addEventListener("mouseup", c),
                  document.addEventListener("pointermove", c),
                  document.addEventListener("pointerdown", c),
                  document.addEventListener("pointerup", c),
                  document.addEventListener("touchmove", c),
                  document.addEventListener("touchstart", c),
                  document.addEventListener("touchend", c)
              }
              function c(e) {
                  e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1,
                  document.removeEventListener("mousemove", c),
                  document.removeEventListener("mousedown", c),
                  document.removeEventListener("mouseup", c),
                  document.removeEventListener("pointermove", c),
                  document.removeEventListener("pointerdown", c),
                  document.removeEventListener("pointerup", c),
                  document.removeEventListener("touchmove", c),
                  document.removeEventListener("touchstart", c),
                  document.removeEventListener("touchend", c))
              }
              document.addEventListener("keydown", (function(i) {
                  i.metaKey || i.altKey || i.ctrlKey || (s(e.activeElement) && a(e.activeElement),
                  t = !0)
              }
              ), !0),
              document.addEventListener("mousedown", o, !0),
              document.addEventListener("pointerdown", o, !0),
              document.addEventListener("touchstart", o, !0),
              document.addEventListener("visibilitychange", (function(e) {
                  "hidden" === document.visibilityState && (i && (t = !0),
                  l())
              }
              ), !0),
              l(),
              e.addEventListener("focus", (function(e) {
                  var i, r, o;
                  s(e.target) && (t || (r = (i = e.target).type,
                  "INPUT" === (o = i.tagName) && n[r] && !i.readOnly || "TEXTAREA" === o && !i.readOnly || i.isContentEditable)) && a(e.target)
              }
              ), !0),
              e.addEventListener("blur", (function(e) {
                  var t;
                  s(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (i = !0,
                  window.clearTimeout(r),
                  r = window.setTimeout((function() {
                      i = !1
                  }
                  ), 100),
                  (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"),
                  t.removeAttribute("data-focus-visible-added")))
              }
              ), !0),
              e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"),
              document.documentElement.setAttribute("data-js-focus-visible", ""))
          }
          if ("undefined" != typeof window && "undefined" != typeof document) {
              var t;
              window.applyFocusVisiblePolyfill = e;
              try {
                  t = new CustomEvent("focus-visible-polyfill-ready")
              } catch (e) {
                  (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
              }
              window.dispatchEvent(t)
          }
          "undefined" != typeof document && e(document)
      }
      ,  
  }
    , t = {};
  function i(r) {
      var n = t[r];
      if (void 0 !== n)
          return n.exports;
      var s = t[r] = {
          exports: {}
      };
      return e[r].call(s.exports, s, s.exports, i),
      s.exports
  } 
  (()=>{
      "use strict";
      i(598);
     
      var t, r, n, s, a, o, l, c, u, d = function() {
          var t, i = null === (t = document) || void 0 === t ? void 0 : t.querySelectorAll(".fixed-block"), r = (document.body,
          parseInt(e.bodyEl.dataset.position, 10));
          i.forEach((function(e) {
              e.style.paddingRight = "0px"
          }
          )),
          e.bodyEl.style.paddingRight = "0px",
          e.bodyEl.style.top = "auto",
          e.bodyEl.classList.remove("dis-scroll"),
          window.scroll({
              top: r,
              left: 0
          }),
          e.bodyEl.removeAttribute("data-position"),
          e.htmlEl.style.scrollBehavior = "smooth"
      };
      
      o = null === (t = document) || void 0 === t ? void 0 : t.querySelector("[data-burger]"),
      l = null === (r = document) || void 0 === r ? void 0 : r.querySelector("[data-menu]"),
      c = null === (n = document) || void 0 === n ? void 0 : n.querySelectorAll("[data-menu-item]"),
      null === (s = document) || void 0 === s || s.querySelector("[data-menu-overlay]"),
      u = null === (a = document) || void 0 === a ? void 0 : a.querySelector("[data-menu-close]"),
      null == o || o.addEventListener("click", (function(t) {
          null == o || o.classList.toggle("burger--active"),
          null == l || l.classList.toggle("menu--active"),
          null != l && l.classList.contains("menu--active") ? (null == o || o.setAttribute("aria-expanded", "true"),
          null == o || o.setAttribute("aria-label", "Закрыть меню"),
          function() {
              var t, i = null === (t = document) || void 0 === t ? void 0 : t.querySelectorAll(".fixed-block"), r = window.scrollY, n = "".concat(window.innerWidth - e.bodyEl.offsetWidth, "px");
              e.htmlEl.style.scrollBehavior = "none",
              i.forEach((function(e) {
                  e.style.paddingRight = n
              }
              )),
              e.bodyEl.style.paddingRight = n,
              e.bodyEl.classList.add("dis-scroll"),
              e.bodyEl.dataset.position = r,
              e.bodyEl.style.top = "-".concat(r, "px")
          }()) : (null == o || o.setAttribute("aria-expanded", "false"),
          null == o || o.setAttribute("aria-label", "Открыть меню"),
          d())
      }
      )),
      null == u || u.addEventListener("click", (function() {
          null == o || o.setAttribute("aria-expanded", "false"),
          null == o || o.setAttribute("aria-label", "Открыть меню"),
          o.classList.remove("burger--active"),
          l.classList.remove("menu--active"),
          d()
      }
      )),
      null == c || c.forEach((function(e) {
          e.addEventListener("click", (function() {
              null == o || o.setAttribute("aria-expanded", "false"),
              null == o || o.setAttribute("aria-label", "Открыть меню"),
              o.classList.remove("burger--active"),
              l.classList.remove("menu--active"),
              d()
          }
          ))
      }
      ));
      var f, p = i(3002), h = i.n(p) 
      console.log((f = navigator.userAgent || navigator.vendor || window.opera,
      /android/i.test(f) ? (e.htmlEl.classList.add("page--android"),
      "Android") : /iPad|iPhone|iPod/.test(f) && !window.MSStream ? (e.htmlEl.classList.add("page--ios"),
      "iOS") : "unknown")),
      new (h())('a[href*="#"]');
      var y = Math.max
        , x = Math.min
        , w = Math.round;
      var R = "top"
        , B = "bottom"
        , N = "right"
        , $ = "left"
        , z = "auto"
        , V = [R, B, N, $]
        , G = "start"
        , H = "end"
        , W = "viewport"
        , q = "popper"
        , Y = V.reduce((function(e, t) {
          return e.concat([t + "-" + G, t + "-" + H])
      }
      ), [])
        , U = [].concat(V, [z]).reduce((function(e, t) {
          return e.concat([t, t + "-" + G, t + "-" + H])
      }
      ), [])
        , X = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]; 
      var ee = {
          passive: !0
      };
      J({   
      })(document.querySelector(".tooltip__btn"), document.querySelector(".tooltip__txt"), {
          placement: "top-start"
      }),
     {}
      Le.fn = Ce.prototype;
      const Me = "resize scroll".split(" ");
      Ae("click"),
      Ae("blur"),
      Ae("focus"),
      Ae("focusin"),
      Ae("focusout"),
      Ae("keyup"),
      Ae("keydown"),
      Ae("keypress"),
      Ae("submit"),
      Ae("change"),
      Ae("mousedown"),
      Ae("mousemove"),
      Ae("mouseup"),
      Ae("mouseenter"),
      Ae("mouseleave"),
      Ae("mouseout"),
      Ae("mouseover"),
      Ae("touchstart"),
      Ae("touchend"),
      Ae("touchmove"),
      Ae("resize"),
      Ae("scroll");
         st = (e,t)=>e.grid && t.grid && t.grid.rows > 1
        , xt = (e,t,i)=>(bt(e, "symbol" != typeof t ? t + "" : t, i),
      i);
      var Tt, Ct, Ot, Pt, Lt;
      (Ct = Tt || (Tt = {})).Required = "required",
      Ct.Email = "email",
      Ct.MinLength = "minLength",
      Ct.MaxLength = "maxLength",
      Ct.Password = "password",
      Ct.Number = "number",
      Ct.MaxNumber = "maxNumber",
      Ct.MinNumber = "minNumber",
      Ct.StrongPassword = "strongPassword",
      Ct.CustomRegexp = "customRegexp",
      Ct.MinFilesCount = "minFilesCount",
      Ct.MaxFilesCount = "maxFilesCount",
      Ct.Files = "files",
      (Ot || (Ot = {})).Required = "required",
      (Lt = Pt || (Pt = {})).Label = "label",
      Lt.LabelArrow = "labelArrow";
      const Mt = e=>!!e && "function" == typeof e.then
      Ii.getOptions = Li,
      Nt() && Ii.initHtmlApi()
      Ii.handleMutations = function(e) {
        e.forEach((function(e) {
            Array.prototype.forEach.call(e.addedNodes, (function(e) {
                1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !Ii.instances.has(e) && document.documentElement.contains(e) && new Ii(e,Li(e.attributes)) : Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"), (function(e) {
                    "init" !== e.getAttribute("data-simplebar") && !Ii.instances.has(e) && document.documentElement.contains(e) && new Ii(e,Li(e.attributes))
                }
                )))
            }
            )),
            Array.prototype.forEach.call(e.removedNodes, (function(e) {
                1 === e.nodeType && ("init" === e.getAttribute("data-simplebar") ? Ii.instances.has(e) && !document.documentElement.contains(e) && Ii.instances.get(e).unMount() : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), (function(e) {
                    Ii.instances.has(e) && !document.documentElement.contains(e) && Ii.instances.get(e).unMount()
                }
                )))
            }
            ))
        }
        ))
    }
    ,
    Ii.getOptions = Li,
    Nt() && Ii.initHtmlApi()
    r.device = function(e={}) {
        return ze || (ze = function({userAgent: e}={}) {
            const t = Ge()
              , i = Te()
              , r = i.navigator.platform
              , n = e || i.navigator.userAgent
              , s = {
                ios: !1,
                android: !1
            }
              , a = i.screen.width
              , o = i.screen.height
              , l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , d = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , f = "Win32" === r;
            let p = "MacIntel" === r;
            return !c && p && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x ${o}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/),
            c || (c = [0, 1, "13_0_0"]),
            p = !1),
            l && !f && (s.os = "android",
            s.android = !0),
            (c || d || u) && (s.os = "ios",
            s.ios = !0),
            s
        }(e)),
        ze
    }
    
  }
  )()
}
)();
