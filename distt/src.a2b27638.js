// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules/simple-keyboard/build/index.js":[function(require,module,exports) {
var define;
/*!
 * 
 *   simple-keyboard v2.11.7
 *   https://github.com/hodgef/simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function (t, e) {
  "object" === typeof exports && "object" === typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define("SimpleKeyboard", [], e) : "object" === typeof exports ? exports.SimpleKeyboard = e() : t.SimpleKeyboard = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(i) {
      if (e[i]) return e[i].exports;
      var o = e[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) n.d(i, o, function (e) {
        return t[e];
      }.bind(null, o));
      return i;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 0);
  }([function (t, e, n) {
    t.exports = n(2);
  }, function (t, e, n) {}, function (t, e, n) {
    "use strict";

    n.r(e);
    n(1);

    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    var o = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.simpleKeyboardInstance = e, this.initKeyboardListener = this.initKeyboardListener.bind(this), this.getSimpleKeyboardLayoutKey = this.getSimpleKeyboardLayoutKey.bind(this), this.initKeyboardListener();
      }

      var e, n, o;
      return e = t, (n = [{
        key: "initKeyboardListener",
        value: function () {
          var t = this;
          document.addEventListener("keydown", function (e) {
            if (t.simpleKeyboardInstance.options.physicalKeyboardHighlight) {
              var n = t.getSimpleKeyboardLayoutKey(e);
              t.simpleKeyboardInstance.dispatch(function (e) {
                var i = e.getButtonElement(n) || e.getButtonElement("{".concat(n, "}"));
                i && (i.style.backgroundColor = t.simpleKeyboardInstance.options.physicalKeyboardHighlightBgColor || "#9ab4d0", i.style.color = t.simpleKeyboardInstance.options.physicalKeyboardHighlightTextColor || "white");
              });
            }
          }), document.addEventListener("keyup", function (e) {
            if (t.simpleKeyboardInstance.options.physicalKeyboardHighlight) {
              var n = t.getSimpleKeyboardLayoutKey(e);
              t.simpleKeyboardInstance.dispatch(function (t) {
                var e = t.getButtonElement(n) || t.getButtonElement("{".concat(n, "}"));
                e && e.removeAttribute && e.removeAttribute("style");
              });
            }
          });
        }
      }, {
        key: "getSimpleKeyboardLayoutKey",
        value: function (t) {
          var e;
          return ((e = t.code.includes("Numpad") || t.code.includes("Shift") || t.code.includes("Space") || t.code.includes("Backspace") || t.code.includes("Control") || t.code.includes("Alt") || t.code.includes("Meta") ? t.code : t.key) !== e.toUpperCase() || "F" === t.code[0] && Number.isInteger(Number(t.code[1])) && t.code.length <= 3) && (e = e.toLowerCase()), e;
        }
      }]) && i(e.prototype, n), o && i(e, o), t;
    }();

    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    var a = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
      }

      var e, n, i;
      return e = t, i = [{
        key: "getDefaultLayout",
        value: function () {
          return {
            default: ["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}", "{tab} q w e r t y u i o p [ ] \\", "{lock} a s d f g h j k l ; ' {enter}", "{shift} z x c v b n m , . / {shift}", ".com @ {space}"],
            shift: ["~ ! @ # $ % ^ & * ( ) _ + {bksp}", "{tab} Q W E R T Y U I O P { } |", '{lock} A S D F G H J K L : " {enter}', "{shift} Z X C V B N M < > ? {shift}", ".com @ {space}"]
          };
        }
      }], (n = null) && s(e.prototype, n), i && s(e, i), t;
    }();

    function u(t) {
      return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    var c = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.simpleKeyboardInstance = e, this.getButtonClass = this.getButtonClass.bind(this), this.getButtonDisplayName = this.getButtonDisplayName.bind(this), this.getUpdatedInput = this.getUpdatedInput.bind(this), this.updateCaretPos = this.updateCaretPos.bind(this), this.updateCaretPosAction = this.updateCaretPosAction.bind(this), this.isMaxLengthReached = this.isMaxLengthReached.bind(this), this.camelCase = this.camelCase.bind(this), this.countInArray = this.countInArray.bind(this);
      }

      var e, n, i;
      return e = t, (n = [{
        key: "getButtonClass",
        value: function (t) {
          var e = t.includes("{") && t.includes("}") && "{//}" !== t ? "functionBtn" : "standardBtn",
              n = t.replace("{", "").replace("}", ""),
              i = "";
          return "standardBtn" !== e && (i = " hg-button-".concat(n)), "hg-".concat(e).concat(i);
        }
      }, {
        key: "getDefaultDiplay",
        value: function () {
          return {
            "{bksp}": "backspace",
            "{backspace}": "backspace",
            "{enter}": "< enter",
            "{shift}": "shift",
            "{shiftleft}": "shift",
            "{shiftright}": "shift",
            "{alt}": "alt",
            "{s}": "shift",
            "{tab}": "tab",
            "{lock}": "caps",
            "{capslock}": "caps",
            "{accept}": "Submit",
            "{space}": " ",
            "{//}": " ",
            "{esc}": "esc",
            "{escape}": "esc",
            "{f1}": "f1",
            "{f2}": "f2",
            "{f3}": "f3",
            "{f4}": "f4",
            "{f5}": "f5",
            "{f6}": "f6",
            "{f7}": "f7",
            "{f8}": "f8",
            "{f9}": "f9",
            "{f10}": "f10",
            "{f11}": "f11",
            "{f12}": "f12",
            "{numpaddivide}": "/",
            "{numlock}": "lock",
            "{arrowup}": "\u2191",
            "{arrowleft}": "\u2190",
            "{arrowdown}": "\u2193",
            "{arrowright}": "\u2192",
            "{prtscr}": "print",
            "{scrolllock}": "scroll",
            "{pause}": "pause",
            "{insert}": "ins",
            "{home}": "home",
            "{pageup}": "up",
            "{delete}": "del",
            "{end}": "end",
            "{pagedown}": "down",
            "{numpadmultiply}": "*",
            "{numpadsubtract}": "-",
            "{numpadadd}": "+",
            "{numpadenter}": "enter",
            "{period}": ".",
            "{numpaddecimal}": ".",
            "{numpad0}": "0",
            "{numpad1}": "1",
            "{numpad2}": "2",
            "{numpad3}": "3",
            "{numpad4}": "4",
            "{numpad5}": "5",
            "{numpad6}": "6",
            "{numpad7}": "7",
            "{numpad8}": "8",
            "{numpad9}": "9"
          };
        }
      }, {
        key: "getButtonDisplayName",
        value: function (t, e, n) {
          return (e = n ? Object.assign({}, this.getDefaultDiplay(), e) : e || this.getDefaultDiplay())[t] || t;
        }
      }, {
        key: "getUpdatedInput",
        value: function (t, e, n, i, o) {
          var s = e;
          return ("{bksp}" === t || "{backspace}" === t) && s.length > 0 ? s = this.removeAt(s, i, o) : "{space}" === t ? s = this.addStringAt(s, " ", i, o) : "{tab}" !== t || "boolean" === typeof n.tabCharOnTab && !1 === n.tabCharOnTab ? "{enter}" !== t && "{numpadenter}" !== t || !n.newLineOnEnter ? t.includes("numpad") && Number.isInteger(Number(t[t.length - 2])) ? s = this.addStringAt(s, t[t.length - 2], i, o) : "{numpaddivide}" === t ? s = this.addStringAt(s, "/", i, o) : "{numpadmultiply}" === t ? s = this.addStringAt(s, "*", i, o) : "{numpadsubtract}" === t ? s = this.addStringAt(s, "-", i, o) : "{numpadadd}" === t ? s = this.addStringAt(s, "+", i, o) : "{numpaddecimal}" === t ? s = this.addStringAt(s, ".", i, o) : "{" === t || "}" === t ? s = this.addStringAt(s, t, i, o) : t.includes("{") || t.includes("}") || (s = this.addStringAt(s, t, i, o)) : s = this.addStringAt(s, "\n", i, o) : s = this.addStringAt(s, "\t", i, o), s;
        }
      }, {
        key: "updateCaretPos",
        value: function (t, e) {
          var n = this.updateCaretPosAction(this.simpleKeyboardInstance, t, e);
          this.simpleKeyboardInstance.options.syncInstanceInputs && this.simpleKeyboardInstance.dispatch(function (t) {
            t.caretPosition = n;
          });
        }
      }, {
        key: "updateCaretPosAction",
        value: function (t, e, n) {
          return n ? t.caretPosition > 0 && (t.caretPosition = t.caretPosition - e) : t.caretPosition = t.caretPosition + e, this.simpleKeyboardInstance.options.debug && console.log("Caret at:", t.caretPosition, "(".concat(t.keyboardDOMClass, ")")), t.caretPosition;
        }
      }, {
        key: "addStringAt",
        value: function (t, e, n, i) {
          var o;
          return n || 0 === n ? (o = [t.slice(0, n), e, t.slice(n)].join(""), this.isMaxLengthReached() || i && this.updateCaretPos(e.length)) : o = t + e, o;
        }
      }, {
        key: "removeAt",
        value: function (t, e, n) {
          if (0 === this.simpleKeyboardInstance.caretPosition) return t;
          var i,
              o = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
          return e && e >= 0 ? t.substring(e - 2, e).match(o) ? (i = t.substr(0, e - 2) + t.substr(e), n && this.updateCaretPos(2, !0)) : (i = t.substr(0, e - 1) + t.substr(e), n && this.updateCaretPos(1, !0)) : t.slice(-2).match(o) ? (i = t.slice(0, -2), n && this.updateCaretPos(2, !0)) : (i = t.slice(0, -1), n && this.updateCaretPos(1, !0)), i;
        }
      }, {
        key: "handleMaxLength",
        value: function (t, e, n) {
          var i = e.maxLength,
              o = t[e.inputName],
              s = o.length === i;
          if (n.length <= o.length) return !1;
          if (Number.isInteger(i)) return e.debug && console.log("maxLength (num) reached:", s), s ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);

          if ("object" === u(i)) {
            var a = o.length === i[e.inputName];
            return e.debug && console.log("maxLength (obj) reached:", a), a ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
          }
        }
      }, {
        key: "isMaxLengthReached",
        value: function () {
          return Boolean(this.maxLengthReached);
        }
      }, {
        key: "camelCase",
        value: function (t) {
          return t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function (t, e) {
            return t + e[0].toUpperCase() + e.slice(1);
          });
        }
      }, {
        key: "countInArray",
        value: function (t, e) {
          return t.reduce(function (t, n) {
            return t + (n === e);
          }, 0);
        }
      }]) && r(e.prototype, n), i && r(e, i), t;
    }();

    function l(t) {
      return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    function d(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var p = function () {
      function t() {
        var e = this;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), d(this, "setOptions", function (t) {
          t = t || {}, e.options = Object.assign(e.options, t), e.render();
        }), d(this, "registerModule", function (t, n) {
          e.modules[t] || (e.modules[t] = {}), n(e.modules[t]);
        }), d(this, "getModuleProp", function (t, n) {
          return !!e.modules[t] && e.modules[t][n];
        }), d(this, "getModulesList", function () {
          return Object.keys(e.modules);
        });
        var n = "string" === typeof (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : ".simple-keyboard",
            i = "object" === l(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1];
        if (i || (i = {}), this.utilities = new c(this), this.keyboardDOM = document.querySelector(n), this.options = i, this.options.layoutName = this.options.layoutName || "default", this.options.theme = this.options.theme || "hg-theme-default", this.options.inputName = this.options.inputName || "default", this.options.preventMouseDownDefault = this.options.preventMouseDownDefault || !1, this.keyboardPluginClasses = "", this.handleButtonClicked = this.handleButtonClicked.bind(this), this.syncInstanceInputs = this.syncInstanceInputs.bind(this), this.clearInput = this.clearInput.bind(this), this.getInput = this.getInput.bind(this), this.setInput = this.setInput.bind(this), this.replaceInput = this.replaceInput.bind(this), this.clear = this.clear.bind(this), this.dispatch = this.dispatch.bind(this), this.addButtonTheme = this.addButtonTheme.bind(this), this.removeButtonTheme = this.removeButtonTheme.bind(this), this.getButtonElement = this.getButtonElement.bind(this), this.handleCaret = this.handleCaret.bind(this), this.caretEventHandler = this.caretEventHandler.bind(this), this.onInit = this.onInit.bind(this), this.onRender = this.onRender.bind(this), this.render = this.render.bind(this), this.loadModules = this.loadModules.bind(this), this.handleButtonMouseUp = this.handleButtonMouseUp.bind(this), this.handleButtonMouseDown = this.handleButtonMouseDown.bind(this), this.handleButtonHold = this.handleButtonHold.bind(this), this.onModulesLoaded = this.onModulesLoaded.bind(this), this.input = {}, this.input[this.options.inputName] = "", this.keyboardDOMClass = n.split(".").join(""), this.buttonElements = {}, !this.keyboardDOM) throw console.warn('"'.concat(n, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR");
        this.render(), window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}), window.SimpleKeyboardInstances[this.utilities.camelCase(this.keyboardDOMClass)] = this, this.physicalKeyboardInterface = new o(this), this.modules = {}, this.loadModules();
      }

      var e, n, i;
      return e = t, (n = [{
        key: "handleButtonClicked",
        value: function (t) {
          var e = this.options.debug;
          if ("{//}" === t) return !1;
          "function" === typeof this.options.onKeyPress && this.options.onKeyPress(t), this.input[this.options.inputName] || (this.input[this.options.inputName] = "");
          var n = this.utilities.getUpdatedInput(t, this.input[this.options.inputName], this.options, this.caretPosition);

          if (this.input[this.options.inputName] !== n) {
            if (this.options.maxLength && this.utilities.handleMaxLength(this.input, this.options, n)) return !1;
            this.input[this.options.inputName] = this.utilities.getUpdatedInput(t, this.input[this.options.inputName], this.options, this.caretPosition, !0), e && console.log("Input changed:", this.input), this.options.syncInstanceInputs && this.syncInstanceInputs(this.input), "function" === typeof this.options.onChange && this.options.onChange(this.input[this.options.inputName]);
          }

          e && console.log("Key pressed:", t);
        }
      }, {
        key: "handleButtonMouseDown",
        value: function (t, e) {
          var n = this;
          this.isMouseHold = !0, this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdTimeout && clearTimeout(this.holdTimeout), this.holdTimeout = setTimeout(function () {
            !n.isMouseHold || (t.includes("{") || t.includes("}")) && "{bksp}" !== t && "{space}" !== t && "{tab}" !== t || (n.options.debug && console.log("Button held:", t), n.handleButtonHold(t, e)), clearTimeout(n.holdTimeout);
          }, 500);
        }
      }, {
        key: "handleButtonMouseUp",
        value: function () {
          this.isMouseHold = !1, this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout);
        }
      }, {
        key: "handleButtonHold",
        value: function (t) {
          var e = this;
          this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdInteractionTimeout = setTimeout(function () {
            e.isMouseHold ? (e.handleButtonClicked(t), e.handleButtonHold(t)) : clearTimeout(e.holdInteractionTimeout);
          }, 100);
        }
      }, {
        key: "syncInstanceInputs",
        value: function () {
          var t = this;
          this.dispatch(function (e) {
            e.replaceInput(t.input);
          });
        }
      }, {
        key: "clearInput",
        value: function (t) {
          t = t || this.options.inputName, this.input[t] = "", this.options.syncInstanceInputs && this.syncInstanceInputs(this.input);
        }
      }, {
        key: "getInput",
        value: function (t) {
          return t = t || this.options.inputName, this.options.syncInstanceInputs && this.syncInstanceInputs(this.input), this.input[this.options.inputName];
        }
      }, {
        key: "setInput",
        value: function (t, e) {
          e = e || this.options.inputName, this.input[e] = t, this.options.syncInstanceInputs && this.syncInstanceInputs(this.input);
        }
      }, {
        key: "replaceInput",
        value: function (t) {
          this.input = t;
        }
      }, {
        key: "clear",
        value: function () {
          this.keyboardDOM.innerHTML = "", this.keyboardDOM.className = this.keyboardDOMClass, this.buttonElements = {};
        }
      }, {
        key: "dispatch",
        value: function (t) {
          if (!window.SimpleKeyboardInstances) throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."), new Error("INSTANCES_VAR_ERROR");
          return Object.keys(window.SimpleKeyboardInstances).forEach(function (e) {
            t(window.SimpleKeyboardInstances[e], e);
          });
        }
      }, {
        key: "addButtonTheme",
        value: function (t, e) {
          var n = this;
          if (!e || !t) return !1;
          t.split(" ").forEach(function (i) {
            e.split(" ").forEach(function (e) {
              n.options.buttonTheme || (n.options.buttonTheme = []);
              var o = !1;
              n.options.buttonTheme.map(function (t) {
                if (t.class.split(" ").includes(e)) {
                  o = !0;
                  var n = t.buttons.split(" ");
                  n.includes(i) || (o = !0, n.push(i), t.buttons = n.join(" "));
                }

                return t;
              }), o || n.options.buttonTheme.push({
                class: e,
                buttons: t
              });
            });
          }), this.render();
        }
      }, {
        key: "removeButtonTheme",
        value: function (t, e) {
          var n = this;
          if (!t && !e) return this.options.buttonTheme = [], this.render(), !1;
          t && Array.isArray(this.options.buttonTheme) && this.options.buttonTheme.length && (t.split(" ").forEach(function (t, i) {
            n.options.buttonTheme.map(function (i, o) {
              if (e && e.includes(i.class) || !e) {
                var s = i.buttons.split(" ").filter(function (e) {
                  return e !== t;
                });
                s.length ? i.buttons = s.join(" ") : (n.options.buttonTheme.splice(o, 1), i = null);
              }

              return i;
            });
          }), this.render());
        }
      }, {
        key: "getButtonElement",
        value: function (t) {
          var e,
              n = this.buttonElements[t];
          return n && (e = n.length > 1 ? n : n[0]), e;
        }
      }, {
        key: "handleCaret",
        value: function () {
          this.caretPosition = null;
          var t = window.SimpleKeyboardInstances;
          (t && Object.keys(t)[0] === this.utilities.camelCase(this.keyboardDOMClass) || !t) && (this.options.debug && console.log("Caret handling started (".concat(this.keyboardDOMClass, ")")), document.addEventListener("keyup", this.caretEventHandler), document.addEventListener("mouseup", this.caretEventHandler), document.addEventListener("touchend", this.caretEventHandler));
        }
      }, {
        key: "caretEventHandler",
        value: function (t) {
          var e;
          t.target.tagName && (e = t.target.tagName.toLowerCase()), this.dispatch(function (n) {
            n.isMouseHold && (n.isMouseHold = !1), "textarea" !== e && "input" !== e || n.options.disableCaretPositioning || (n.caretPosition = t.target.selectionStart, n.options.debug && console.log("Caret at: ", t.target.selectionStart, t.target.tagName.toLowerCase(), "(".concat(n.keyboardDOMClass, ")")));
          });
        }
      }, {
        key: "onInit",
        value: function () {
          this.options.debug && console.log("".concat(this.keyboardDOMClass, " Initialized")), this.handleCaret(), "function" === typeof this.options.onInit && this.options.onInit();
        }
      }, {
        key: "onRender",
        value: function () {
          "function" === typeof this.options.onRender && this.options.onRender();
        }
      }, {
        key: "onModulesLoaded",
        value: function () {
          "function" === typeof this.options.onModulesLoaded && this.options.onModulesLoaded();
        }
      }, {
        key: "loadModules",
        value: function () {
          var t = this;
          Array.isArray(this.options.modules) && (this.options.modules.forEach(function (e) {
            var n = new e();

            if (n.constructor.name && "Function" !== n.constructor.name) {
              var i = "module-".concat(t.utilities.camelCase(n.constructor.name));
              t.keyboardPluginClasses = t.keyboardPluginClasses + " ".concat(i);
            }

            n.init(t);
          }), this.keyboardPluginClasses = this.keyboardPluginClasses + " modules-loaded", this.render(), this.onModulesLoaded());
        }
      }, {
        key: "render",
        value: function () {
          var t = this;
          this.clear();
          var e = this.options.layout ? "hg-layout-custom" : "hg-layout-".concat(this.options.layoutName),
              n = this.options.layout || a.getDefaultLayout(),
              i = this.options.useTouchEvents || !1,
              o = {};
          Array.isArray(this.options.buttonTheme) && this.options.buttonTheme.forEach(function (e) {
            var n;
            e.buttons && e.class ? ("string" === typeof e.buttons && (n = e.buttons.split(" ")), n && n.forEach(function (n) {
              var i = o[n];
              i ? t.utilities.countInArray(i.split(" "), e.class) || (o[n] = "".concat(i, " ").concat(e.class)) : o[n] = e.class;
            })) : console.warn('buttonTheme row is missing the "buttons" or the "class". Please check the documentation.');
          }), this.keyboardDOM.className += " ".concat(this.options.theme, " ").concat(e, " ").concat(this.keyboardPluginClasses), n[this.options.layoutName].forEach(function (e, n) {
            var s = e.split(" "),
                a = document.createElement("div");
            a.className += "hg-row", s.forEach(function (e, s) {
              var u = t.utilities.getButtonClass(e),
                  r = o[e],
                  c = t.utilities.getButtonDisplayName(e, t.options.display, t.options.mergeDisplay),
                  l = document.createElement("div");
              l.className += "hg-button ".concat(u).concat(r ? " " + r : ""), i ? (l.ontouchstart = function (n) {
                t.handleButtonClicked(e), t.handleButtonMouseDown(e, n);
              }, l.ontouchend = function (e) {
                return t.handleButtonMouseUp();
              }, l.ontouchcancel = function (e) {
                return t.handleButtonMouseUp();
              }) : (l.onclick = function () {
                t.isMouseHold = !1, t.handleButtonClicked(e);
              }, l.onmousedown = function (n) {
                t.options.preventMouseDownDefault && n.preventDefault(), t.handleButtonMouseDown(e, n);
              }), l.setAttribute("data-skBtn", e);
              var h = "".concat(t.options.layoutName, "-r").concat(n, "b").concat(s);
              l.setAttribute("data-skBtnUID", h), l.setAttribute("data-displayLabel", c);
              var d = document.createElement("span");
              d.innerHTML = c, l.appendChild(d), t.buttonElements[e] || (t.buttonElements[e] = []), t.buttonElements[e].push(l), a.appendChild(l);
            }), t.keyboardDOM.appendChild(a);
          }), this.onRender(), this.initialized || (this.initialized = !0, i || (document.onmouseup = function () {
            return t.handleButtonMouseUp();
          }), this.onInit());
        }
      }]) && h(e.prototype, n), i && h(e, i), t;
    }();

    e.default = p;
  }]);
});
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/simple-keyboard/build/css/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _simpleKeyboard = _interopRequireDefault(require("simple-keyboard"));

require("simple-keyboard/build/css/index.css");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyboard = new _simpleKeyboard.default({
  onChange: function onChange(input) {
    return _onChange(input);
  },
  onKeyPress: function onKeyPress(button) {
    return _onKeyPress(button);
  },
  mergeDisplay: true,
  layoutName: 'default',
  layout: {
    default: ['1 2 3', '4 5 6', '7 8 9', '0 {backspace}']
  },
  display: {
    '{numbers}': '123',
    '{backspace}': '⌫'
  }
});
/**
 * Update simple-keyboard when input is changed directly
 */

document.querySelector('.input').addEventListener('input', function (event) {
  keyboard.setInput(event.target.value);
});
console.log(keyboard);

function _onChange(input) {
  document.querySelector('.input').value = input;
  console.log('Input changed', input);
}

function _onKeyPress(button) {
  console.log('Button pressed', button);
  /**
   * If you want to handle the shift and caps lock buttons
   */

  if (button === '{numbers}') handleNumbers();
}

function handleNumbers() {
  var currentLayout = keyboard.options.layoutName;
  var numbersToggle = currentLayout !== 'default';
  keyboard.setOptions({
    layoutName: numbersToggle
  });
}
},{"simple-keyboard":"node_modules/simple-keyboard/build/index.js","simple-keyboard/build/css/index.css":"node_modules/simple-keyboard/build/css/index.css","./index.css":"src/index.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + 51911 + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.map