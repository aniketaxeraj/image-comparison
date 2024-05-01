(() => {
  "use strict";
  var t = {
      792: (t, e, i) => {
        i.d(e, { Z: () => n });
        var s = i(609),
          o = i.n(s)()(function (t) {
            return t[1];
          });
        o.push([
          t.id,
          ':host{--divider-width: 1px;--divider-color: #fff;--divider-shadow: none;--default-handle-width: 50px;--default-handle-color: #fff;--default-handle-opacity: 1;--default-handle-shadow: none;--handle-position-start: 50%;position:relative;display:inline-block;overflow:hidden;line-height:0;direction:ltr}@media screen and (-webkit-min-device-pixel-ratio: 0)and (min-resolution: 0.001dpcm){:host{outline-offset:1px}}:host(:focus){outline:2px solid -webkit-focus-ring-color}::slotted(*){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.first{position:absolute;left:0;top:0;right:0;line-height:normal;font-size:100%;max-height:100%;height:100%;width:100%;--exposure: 50%;--keyboard-transition-time: 0ms;--default-transition-time: 0ms;--transition-time: var(--default-transition-time)}.first .first-overlay-container{position:relative;clip-path:inset(0 var(--exposure) 0 0);transition:clip-path var(--transition-time);height:100%}.first .first-overlay{overflow:hidden;height:100%}.first.focused{will-change:clip-path}.first.focused .first-overlay-container{will-change:clip-path}.second{position:relative}.handle-container{transform:translateX(50%);position:absolute;top:0;right:var(--exposure);height:100%;transition:right var(--transition-time),bottom var(--transition-time)}.focused .handle-container{will-change:right}.divider{position:absolute;height:100%;width:100%;left:0;top:0;display:flex;align-items:center;justify-content:center;flex-direction:column}.divider:after{content:" ";display:block;height:100%;border-left-width:var(--divider-width);border-left-style:solid;border-left-color:var(--divider-color);box-shadow:var(--divider-shadow)}.handle{position:absolute;top:var(--handle-position-start);pointer-events:none;box-sizing:border-box;margin-left:1px;transform:translate(calc(-50% - 0.5px), -50%);line-height:0}.default-handle{width:var(--default-handle-width);opacity:var(--default-handle-opacity);transition:all 1s;filter:drop-shadow(var(--default-handle-shadow))}.default-handle path{stroke:var(--default-handle-color)}.vertical .first-overlay-container{clip-path:inset(0 0 var(--exposure) 0)}.vertical .handle-container{transform:translateY(50%);height:auto;top:unset;bottom:var(--exposure);width:100%;left:0;flex-direction:row}.vertical .divider:after{height:1px;width:100%;border-top-width:var(--divider-width);border-top-style:solid;border-top-color:var(--divider-color);border-left:0}.vertical .handle{top:auto;left:var(--handle-position-start);transform:translate(calc(-50% - 0.5px), -50%) rotate(90deg)}',
          "",
        ]);
        const n = o;
      },
      609: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var i = t(e);
                return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i;
              }).join("");
            }),
            (e.i = function (t, i, s) {
              "string" == typeof t && (t = [[null, t, ""]]);
              var o = {};
              if (s)
                for (var n = 0; n < this.length; n++) {
                  var r = this[n][0];
                  null != r && (o[r] = !0);
                }
              for (var a = 0; a < t.length; a++) {
                var d = [].concat(t[a]);
                (s && o[d[0]]) ||
                  (i &&
                    (d[2]
                      ? (d[2] = "".concat(i, " and ").concat(d[2]))
                      : (d[2] = i)),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
    },
    e = {};
  function i(s) {
    var o = e[s];
    if (void 0 !== o) return o.exports;
    var n = (e[s] = { id: s, exports: {} });
    return t[s](n, n.exports, i), n.exports;
  }
  (i.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return i.d(e, { a: e }), e;
  }),
    (i.d = (t, e) => {
      for (var s in e)
        i.o(e, s) &&
          !i.o(t, s) &&
          Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
    }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t = i(792);
      const e = "rendered",
        s = (t, e) => {
          const i = t.getBoundingClientRect();
          let s, o;
          return (
            "mousedown" === e.type
              ? ((s = e.clientX), (o = e.clientY))
              : ((s = e.touches[0].clientX), (o = e.touches[0].clientY)),
            s >= i.x && s <= i.x + i.width && o >= i.y && o <= i.y + i.height
          );
        };
      let o;
      const n = { ArrowLeft: -1, ArrowRight: 1 },
        r = ["horizontal", "vertical"],
        a = (t) => ({ x: t.touches[0].pageX, y: t.touches[0].pageY }),
        d = (t) => ({ x: t.pageX, y: t.pageY }),
        h =
          "undefined" != typeof window &&
          (null === window || void 0 === window ? void 0 : window.HTMLElement);
      "undefined" != typeof window &&
        (window.document &&
          ((o = document.createElement("template")),
          (o.innerHTML =
            '<div class="second" id="second"> <slot name="second"><slot name="before"></slot></slot> </div> <div class="first" id="first"> <div class="first-overlay"> <div class="first-overlay-container" id="firstImageContainer"> <slot name="first"><slot name="after"></slot></slot> </div> </div> <div class="handle-container"> <div class="divider"></div> <div class="handle" id="handle"> <slot name="handle"> <svg xmlns="http://www.w3.org/2000/svg" class="default-handle" viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke"/> </svg> </slot> </div> </div> </div> ')),
        window.customElements.define(
          "img-comparison-slider",
          class extends h {
            constructor() {
              super(),
                (this.exposure = this.hasAttribute("value")
                  ? parseFloat(this.getAttribute("value"))
                  : 50),
                (this.slideOnHover = !1),
                (this.slideDirection = "horizontal"),
                (this.keyboard = "enabled"),
                (this.isMouseDown = !1),
                (this.animationDirection = 0),
                (this.isFocused = !1),
                (this.dragByHandle = !1),
                (this.onMouseMove = (t) => {
                  if (this.isMouseDown || this.slideOnHover) {
                    const e = d(t);
                    this.slideToPage(e);
                  }
                }),
                (this.bodyUserSelectStyle = ""),
                (this.bodyWebkitUserSelectStyle = ""),
                (this.onMouseDown = (t) => {
                  if (this.slideOnHover) return;
                  if (this.handle && !s(this.handleElement, t)) return;
                  t.preventDefault(),
                    window.addEventListener("mousemove", this.onMouseMove),
                    window.addEventListener("mouseup", this.onWindowMouseUp),
                    (this.isMouseDown = !0),
                    this.enableTransition();
                  const e = d(t);
                  this.slideToPage(e),
                    this.focus(),
                    (this.bodyUserSelectStyle =
                      window.document.body.style.userSelect),
                    (this.bodyWebkitUserSelectStyle =
                      window.document.body.style.webkitUserSelect),
                    (window.document.body.style.userSelect = "none"),
                    (window.document.body.style.webkitUserSelect = "none");
                }),
                (this.onWindowMouseUp = () => {
                  (this.isMouseDown = !1),
                    (window.document.body.style.userSelect =
                      this.bodyUserSelectStyle),
                    (window.document.body.style.webkitUserSelect =
                      this.bodyWebkitUserSelectStyle),
                    window.removeEventListener("mousemove", this.onMouseMove),
                    window.removeEventListener("mouseup", this.onWindowMouseUp);
                }),
                (this.touchStartPoint = null),
                (this.isTouchComparing = !1),
                (this.hasTouchMoved = !1),
                (this.onTouchStart = (t) => {
                  (this.dragByHandle && !s(this.handleElement, t)) ||
                    ((this.touchStartPoint = a(t)),
                    this.isFocused &&
                      (this.enableTransition(),
                      this.slideToPage(this.touchStartPoint)));
                }),
                (this.onTouchMove = (t) => {
                  if (null === this.touchStartPoint) return;
                  const e = a(t);
                  if (this.isTouchComparing)
                    return this.slideToPage(e), t.preventDefault(), !1;
                  if (!this.hasTouchMoved) {
                    const i = Math.abs(e.y - this.touchStartPoint.y),
                      s = Math.abs(e.x - this.touchStartPoint.x);
                    if (
                      ("horizontal" === this.slideDirection && i < s) ||
                      ("vertical" === this.slideDirection && i > s)
                    )
                      return (
                        (this.isTouchComparing = !0),
                        this.focus(),
                        this.slideToPage(e),
                        t.preventDefault(),
                        !1
                      );
                    this.hasTouchMoved = !0;
                  }
                }),
                (this.onTouchEnd = () => {
                  (this.isTouchComparing = !1),
                    (this.hasTouchMoved = !1),
                    (this.touchStartPoint = null);
                }),
                (this.onBlur = () => {
                  this.stopSlideAnimation(),
                    (this.isFocused = !1),
                    this.firstElement.classList.remove("focused");
                }),
                (this.onFocus = () => {
                  (this.isFocused = !0),
                    this.firstElement.classList.add("focused");
                }),
                (this.onKeyDown = (t) => {
                  if ("disabled" === this.keyboard) return;
                  const e = n[t.key];
                  this.animationDirection !== e &&
                    void 0 !== e &&
                    ((this.animationDirection = e), this.startSlideAnimation());
                }),
                (this.onKeyUp = (t) => {
                  if ("disabled" === this.keyboard) return;
                  const e = n[t.key];
                  void 0 !== e &&
                    this.animationDirection === e &&
                    this.stopSlideAnimation();
                }),
                (this.resetDimensions = () => {
                  (this.imageWidth = this.offsetWidth),
                    (this.imageHeight = this.offsetHeight);
                });
              const e = this.attachShadow({ mode: "open" }),
                i = document.createElement("style");
              (i.innerHTML = t.Z),
                this.getAttribute("nonce") &&
                  i.setAttribute("nonce", this.getAttribute("nonce")),
                e.appendChild(i),
                e.appendChild(o.content.cloneNode(!0)),
                (this.firstElement = e.getElementById("first")),
                (this.handleElement = e.getElementById("handle"));
            }
            set handle(t) {
              this.dragByHandle = "false" !== t.toString().toLowerCase();
            }
            get handle() {
              return this.dragByHandle;
            }
            get value() {
              return this.exposure;
            }
            set value(t) {
              const e = parseFloat(t);
              e !== this.exposure &&
                ((this.exposure = e),
                this.enableTransition(),
                this.setExposure());
            }
            get hover() {
              return this.slideOnHover;
            }
            set hover(t) {
              (this.slideOnHover = "false" !== t.toString().toLowerCase()),
                this.removeEventListener("mousemove", this.onMouseMove),
                this.slideOnHover &&
                  this.addEventListener("mousemove", this.onMouseMove);
            }
            get direction() {
              return this.slideDirection;
            }
            set direction(t) {
              (this.slideDirection = t.toString().toLowerCase()),
                this.slide(0),
                this.firstElement.classList.remove(...r),
                r.includes(this.slideDirection) &&
                  this.firstElement.classList.add(this.slideDirection);
            }
            static get observedAttributes() {
              return ["hover", "direction"];
            }
            connectedCallback() {
              this.hasAttribute("tabindex") || (this.tabIndex = 0),
                this.addEventListener(
                  "dragstart",
                  (t) => (t.preventDefault(), !1)
                ),
                new ResizeObserver(this.resetDimensions).observe(this),
                this.setExposure(0),
                (this.keyboard =
                  this.hasAttribute("keyboard") &&
                  "disabled" === this.getAttribute("keyboard")
                    ? "disabled"
                    : "enabled"),
                this.addEventListener("keydown", this.onKeyDown),
                this.addEventListener("keyup", this.onKeyUp),
                this.addEventListener("focus", this.onFocus),
                this.addEventListener("blur", this.onBlur),
                this.addEventListener("touchstart", this.onTouchStart, {
                  passive: !0,
                }),
                this.addEventListener("touchmove", this.onTouchMove, {
                  passive: !1,
                }),
                this.addEventListener("touchend", this.onTouchEnd),
                this.addEventListener("mousedown", this.onMouseDown),
                (this.handle = this.hasAttribute("handle")
                  ? this.getAttribute("handle")
                  : this.dragByHandle),
                (this.hover = this.hasAttribute("hover")
                  ? this.getAttribute("hover")
                  : this.slideOnHover),
                (this.direction = this.hasAttribute("direction")
                  ? this.getAttribute("direction")
                  : this.slideDirection),
                this.resetDimensions(),
                this.classList.contains(e) || this.classList.add(e);
            }
            disconnectedCallback() {
              this.transitionTimer && window.clearTimeout(this.transitionTimer);
            }
            attributeChangedCallback(t, e, i) {
              "hover" === t && (this.hover = i),
                "direction" === t && (this.direction = i),
                "keyboard" === t &&
                  (this.keyboard = "disabled" === i ? "disabled" : "enabled");
            }
            setExposure(t = 0) {
              var e;
              (this.exposure =
                (100, (e = this.exposure + t) < 0 ? 0 : e > 100 ? 100 : e)),
                this.firstElement.style.setProperty(
                  "--exposure",
                  100 - this.exposure + "%"
                );
            }
            slide(t = 0) {
              this.setExposure(t);
              const e = new Event("slide");
              this.dispatchEvent(e);
            }
            slideToPage(t) {
              "horizontal" === this.slideDirection && this.slideToPageX(t.x),
                "vertical" === this.slideDirection && this.slideToPageY(t.y);
            }
            slideToPageX(t) {
              const e = t - this.getBoundingClientRect().left - window.scrollX;
              (this.exposure = (e / this.imageWidth) * 100), this.slide(0);
            }
            slideToPageY(t) {
              const e = t - this.getBoundingClientRect().top - window.scrollY;
              (this.exposure = (e / this.imageHeight) * 100), this.slide(0);
            }
            enableTransition() {
              this.firstElement.style.setProperty("--transition-time", "100ms"),
                (this.transitionTimer = window.setTimeout(() => {
                  this.firstElement.style.setProperty(
                    "--transition-time",
                    "var(--default-transition-time)"
                  ),
                    (this.transitionTimer = null);
                }, 100));
            }
            startSlideAnimation() {
              let t = null,
                e = this.animationDirection;
              this.firstElement.style.setProperty(
                "--transition-time",
                "var(--keyboard-transition-time)"
              );
              const i = (s) => {
                if (
                  0 === this.animationDirection ||
                  e !== this.animationDirection
                )
                  return;
                null === t && (t = s);
                const o =
                  ((s - t) / 16.666666666666668) * this.animationDirection;
                this.slide(o),
                  setTimeout(() => window.requestAnimationFrame(i), 0),
                  (t = s);
              };
              window.requestAnimationFrame(i);
            }
            stopSlideAnimation() {
              (this.animationDirection = 0),
                this.firstElement.style.setProperty(
                  "--transition-time",
                  "var(--default-transition-time)"
                );
            }
          }
        ));
    })();
})();
//# sourceMappingURL=index.js.map
