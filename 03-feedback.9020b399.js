var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},l=e.parcelRequire4c75;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var l=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,l.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire4c75=l);var a=l("kEUo3"),r=a.throttle;a.debounce;const n=document.querySelector(".feedback-form"),s=JSON.parse(localStorage.getItem("feedback-form-state"));n.elements.email.value=(null==s?void 0:s.email)||"",n.elements.message.value=(null==s?void 0:s.message)||"",n.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),n.addEventListener("input",(e=>{i(e)}));const i=r((function(e){const t={};t.email=n.elements.email.value,t.message=n.elements.message.value,console.log(),localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500);
//# sourceMappingURL=03-feedback.9020b399.js.map
