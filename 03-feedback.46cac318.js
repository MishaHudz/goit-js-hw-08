var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequire4c75;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequire4c75=l);var o=l("kEUo3"),n=(o.throttle,o.debounce);const r=document.querySelector(".feedback-form"),s=JSON.parse(localStorage.getItem("feedback-form-state"));s&&(s.email&&(r.elements.email.value=s.email),s.message&&(r.elements.message.value=s.message)),r.addEventListener("click",(e=>{"BUTTON"===e.target.nodeName&&(e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),r.elements.email.value="",r.elements.message.value="",localStorage.removeItem("feedback-form-state"))})),r.addEventListener("input",(e=>{i(e)}));const i=n((function(e){const t={};t.email=r.elements.email.value,t.message=r.elements.message.value,console.log(),localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500);
//# sourceMappingURL=03-feedback.46cac318.js.map
