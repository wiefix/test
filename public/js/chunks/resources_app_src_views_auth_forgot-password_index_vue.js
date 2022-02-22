(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_app_src_views_auth_forgot-password_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VbForgotPassword',
  setup: function setup() {
    var rules = {
      email: [{
        required: true,
        message: 'Please input your email!',
        trigger: 'change'
      }]
    };
    var forgotForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      email: ''
    });
    return {
      rules: rules,
      forgotForm: forgotForm
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/forgot-password/index.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/forgot-password/index.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vb_components_Auth_ForgotPassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@vb/components/Auth/ForgotPassword */ "./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VbForgotPassword: _vb_components_Auth_ForgotPassword__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=template&id=74cf9dba":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=template&id=74cf9dba ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-5 pt-2"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-dark font-size-32 mb-3"
}, "Reset Password", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", null, "Reset my password", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fe fe-arrow-left mr-1 align-middle"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Go to Sign in ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_a_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-input");

  var _component_a_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-form-item");

  var _component_a_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-button");

  var _component_a_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-form");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["card", _ctx.$style.container]
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_form, {
    ref: "registerForm",
    model: $setup.forgotForm,
    rules: $setup.rules,
    layout: "vertical",
    "class": "mb-4"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_form_item, {
        name: "email"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_input, {
            value: $setup.forgotForm.email,
            "onUpdate:value": _cache[1] || (_cache[1] = function ($event) {
              return $setup.forgotForm.email = $event;
            }),
            placeholder: "Email Address"
          }, null, 8
          /* PROPS */
          , ["value"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_button, {
        type: "primary",
        "class": "text-center w-100",
        "html-type": "submit"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_3];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["model", "rules"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/auth/login",
    "class": "vb__utils__link"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4, _hoisted_5];
    }),
    _: 1
    /* STABLE */

  })], 2
  /* CLASS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/forgot-password/index.vue?vue&type=template&id=1ab37193":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/forgot-password/index.vue?vue&type=template&id=1ab37193 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vb_forgot_password = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vb-forgot-password");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vb_forgot_password)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "/* AUTH */\n._13bUmMLjWfeAo7nXKdYz32 {\n  max-width: 30rem;\n  min-width: 30rem;\n  padding: 2.66rem;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 12px;\n}\n@media (max-width: 767px) {\n._13bUmMLjWfeAo7nXKdYz32 {\n    min-width: 25.33rem;\n    padding: 2.66rem;\n}\n}\n._2KN-Wzzk6kv0p406BX3oX_ {\n  margin-bottom: 0.33rem;\n}\n._2KN-Wzzk6kv0p406BX3oX_ svg {\n  margin-right: 0.4rem;\n  height: 3.2rem;\n  width: 3.2rem;\n}\n._2KN-Wzzk6kv0p406BX3oX_ svg path:nth-child(1) {\n  stroke: var(--vb-color-primary);\n  fill: var(--vb-color-primary);\n  stroke-width: 1px;\n  animation: _1xae91j6rtpZzHm51SBdB9 6s ease-in-out infinite;\n}\n._2KN-Wzzk6kv0p406BX3oX_ svg path:nth-child(2) {\n  stroke: var(--vb-color-primary);\n  fill: var(--vb-color-primary);\n  stroke-width: 1px;\n  animation: _1xae91j6rtpZzHm51SBdB9 6s ease-in-out infinite;\n  animation-delay: 2s;\n}\n._2KN-Wzzk6kv0p406BX3oX_ svg path:nth-child(3) {\n  stroke: var(--vb-color-primary);\n  fill: var(--vb-color-primary);\n  stroke-width: 1px;\n  animation: _1xae91j6rtpZzHm51SBdB9 6s ease-in-out infinite;\n  animation-delay: 4s;\n}\n@keyframes _1xae91j6rtpZzHm51SBdB9 {\n0% {\n    stroke: var(--vb-color-primary);\n    fill: var(--vb-color-primary);\n}\n50% {\n    stroke: #1ad697;\n    fill: #1ad697;\n}\n100% {\n    stroke: var(--vb-color-primary);\n    fill: var(--vb-color-primary);\n}\n}\n._2ugiYWsyJDv12XqcDbSliw {\n  color: #141322;\n  margin-right: 0.66rem;\n}\n._33sJ9j5-REc_muyb03paE4 {\n  position: relative;\n  top: -3px;\n  display: inline-block;\n  line-height: 2.33rem;\n  height: 2.33rem;\n  font-size: 70%;\n  background: #141322;\n  border-radius: 8px;\n  color: #fff;\n  padding: 0 0.66rem;\n  text-transform: capitalize;\n}\n[data-vb-theme='dark'] ._2ugiYWsyJDv12XqcDbSliw {\n  color: #fff;\n}\n[data-vb-theme='dark'] ._33sJ9j5-REc_muyb03paE4 {\n  background: #232135;\n  color: #aeaee0;\n}\n", ""]);
// Exports
exports.locals = {
	"container": "_13bUmMLjWfeAo7nXKdYz32",
	"logo": "_2KN-Wzzk6kv0p406BX3oX_",
	"logoAnimate": "_1xae91j6rtpZzHm51SBdB9",
	"mainLogo": "_2ugiYWsyJDv12XqcDbSliw",
	"version": "_33sJ9j5-REc_muyb03paE4"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_74cf9dba_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_74cf9dba_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_74cf9dba_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_74cf9dba_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_74cf9dba_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue":
/*!************************************************************************!*\
  !*** ./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_74cf9dba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=74cf9dba */ "./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=template&id=74cf9dba");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_74cf9dba_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true */ "./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true");




const cssModules = _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__cssModules = {}
;
cssModules["$style"] = _index_vue_vue_type_style_index_0_id_74cf9dba_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_2__.default
if (false) {}
_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_vue_vue_type_template_id_74cf9dba__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/app/src/@vb/components/Auth/ForgotPassword/index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/app/src/views/auth/forgot-password/index.vue":
/*!****************************************************************!*\
  !*** ./resources/app/src/views/auth/forgot-password/index.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1ab37193__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1ab37193 */ "./resources/app/src/views/auth/forgot-password/index.vue?vue&type=template&id=1ab37193");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/app/src/views/auth/forgot-password/index.vue?vue&type=script&lang=js");



_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_vue_vue_type_template_id_1ab37193__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/app/src/views/auth/forgot-password/index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/app/src/views/auth/forgot-password/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/app/src/views/auth/forgot-password/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/forgot-password/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=template&id=74cf9dba":
/*!******************************************************************************************************!*\
  !*** ./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=template&id=74cf9dba ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_74cf9dba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_74cf9dba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=74cf9dba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=template&id=74cf9dba");


/***/ }),

/***/ "./resources/app/src/views/auth/forgot-password/index.vue?vue&type=template&id=1ab37193":
/*!**********************************************************************************************!*\
  !*** ./resources/app/src/views/auth/forgot-password/index.vue?vue&type=template&id=1ab37193 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_1ab37193__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_1ab37193__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=1ab37193 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/forgot-password/index.vue?vue&type=template&id=1ab37193");


/***/ }),

/***/ "./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_74cf9dba_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_74cf9dba_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/ForgotPassword/index.vue?vue&type=style&index=0&id=74cf9dba&lang=scss&module=true");
 

/***/ })

}]);