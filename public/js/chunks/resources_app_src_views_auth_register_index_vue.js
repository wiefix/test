(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_app_src_views_auth_register_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VbRegister',
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var settings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.settings;
    });
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters['user/user'].loading;
    });
    var rules = {
      name: [{
        required: true,
        message: 'Please input your name!',
        trigger: 'change'
      }],
      email: [{
        required: true,
        message: 'Please input your email!',
        trigger: 'change'
      }],
      password: [{
        required: true,
        message: 'Please input password!',
        trigger: 'change'
      }]
    };
    var registerForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      name: '',
      email: '',
      password: ''
    });

    var handleFinish = function handleFinish(values) {
      store.dispatch('user/REGISTER', {
        payload: values
      });
    };

    var handleFinishFailed = function handleFinishFailed(errors) {
      console.log(errors);
    };

    return {
      settings: settings,
      loading: loading,
      rules: rules,
      registerForm: registerForm,
      handleFinish: handleFinish,
      handleFinishFailed: handleFinishFailed
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/register/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/register/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vb_components_Auth_Register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@vb/components/Auth/Register */ "./resources/app/src/@vb/components/Auth/Register/index.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VbRegister: _vb_components_Auth_Register__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=template&id=ba5573b0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=template&id=ba5573b0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = {
  "class": "mt-5 pt-2"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", {
  "class": "text-dark font-size-32 mb-3"
}, "Create your account", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", {
  "class": "mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("p", null, " And start spending more time on your projects and less time managing your infrastructure. ")], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("strong", null, "Sign Up", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "mr-1"
}, "By signing up, you agree to the"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("a", {
  href: "javascript: void(0);",
  "class": "vb__utils__link"
}, "Terms of Service"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("a", {
  href: "javascript: void(0);",
  "class": "vb__utils__link"
}, "Privacy Policy")], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "text-center pt-2 mb-auto"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "mr-2"
}, "Already have an account?", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" Sign in ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_a_input = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("a-input");

  var _component_a_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("a-form-item");

  var _component_a_button = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("a-button");

  var _component_a_form = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("a-form");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", {
    "class": ["card", _ctx.$style.container]
  }, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_a_form, {
    model: $setup.registerForm,
    rules: $setup.rules,
    layout: "vertical",
    "class": "mb-4",
    onFinish: $setup.handleFinish,
    onFinishFailed: $setup.handleFinishFailed
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_a_form_item, {
        name: "name"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_a_input, {
            value: $setup.registerForm.name,
            "onUpdate:value": _cache[1] || (_cache[1] = function ($event) {
              return $setup.registerForm.name = $event;
            }),
            placeholder: "Full Name"
          }, null, 8
          /* PROPS */
          , ["value"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_a_form_item, {
        name: "email"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_a_input, {
            value: $setup.registerForm.email,
            "onUpdate:value": _cache[2] || (_cache[2] = function ($event) {
              return $setup.registerForm.email = $event;
            }),
            placeholder: "Email Address"
          }, null, 8
          /* PROPS */
          , ["value"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_a_form_item, {
        name: "password"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_a_input, {
            value: $setup.registerForm.password,
            "onUpdate:value": _cache[3] || (_cache[3] = function ($event) {
              return $setup.registerForm.password = $event;
            }),
            type: "password",
            placeholder: "Password"
          }, null, 8
          /* PROPS */
          , ["value"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_a_button, {
        type: "primary",
        "class": "text-center w-100",
        loading: $setup.loading,
        "html-type": "submit"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(function () {
          return [_hoisted_4];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["loading"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["model", "rules", "onFinish", "onFinishFailed"]), _hoisted_5], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_router_link, {
    to: "/auth/login",
    "class": "vb__utils__link"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/register/index.vue?vue&type=template&id=62875eab":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/register/index.vue?vue&type=template&id=62875eab ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vb_register = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vb-register");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vb_register)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "/* AUTH */\n._1Z2rqmkCphRzXWG8jeeE_k {\n  max-width: 30rem;\n  min-width: 30rem;\n  padding: 2.66rem;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 12px;\n}\n@media (max-width: 767px) {\n._1Z2rqmkCphRzXWG8jeeE_k {\n    min-width: 25.33rem;\n    padding: 2.66rem;\n}\n}\n._3Et2dc_l7pwzhgP_x_Y3Vr {\n  margin-bottom: 0.33rem;\n}\n._3Et2dc_l7pwzhgP_x_Y3Vr svg {\n  margin-right: 0.4rem;\n  height: 3.2rem;\n  width: 3.2rem;\n}\n._3Et2dc_l7pwzhgP_x_Y3Vr svg path:nth-child(1) {\n  stroke: var(--vb-color-primary);\n  fill: var(--vb-color-primary);\n  stroke-width: 1px;\n  animation: _1jm220JBrY6zZrCQL3L2HE 6s ease-in-out infinite;\n}\n._3Et2dc_l7pwzhgP_x_Y3Vr svg path:nth-child(2) {\n  stroke: var(--vb-color-primary);\n  fill: var(--vb-color-primary);\n  stroke-width: 1px;\n  animation: _1jm220JBrY6zZrCQL3L2HE 6s ease-in-out infinite;\n  animation-delay: 2s;\n}\n._3Et2dc_l7pwzhgP_x_Y3Vr svg path:nth-child(3) {\n  stroke: var(--vb-color-primary);\n  fill: var(--vb-color-primary);\n  stroke-width: 1px;\n  animation: _1jm220JBrY6zZrCQL3L2HE 6s ease-in-out infinite;\n  animation-delay: 4s;\n}\n@keyframes _1jm220JBrY6zZrCQL3L2HE {\n0% {\n    stroke: var(--vb-color-primary);\n    fill: var(--vb-color-primary);\n}\n50% {\n    stroke: #1ad697;\n    fill: #1ad697;\n}\n100% {\n    stroke: var(--vb-color-primary);\n    fill: var(--vb-color-primary);\n}\n}\n._2n5QXHD_O0M4Lmh8grephx {\n  color: #141322;\n  margin-right: 0.66rem;\n}\n.yExPqqMdgT6crfGPxgoe3 {\n  position: relative;\n  top: -3px;\n  display: inline-block;\n  line-height: 2.33rem;\n  height: 2.33rem;\n  font-size: 70%;\n  background: #141322;\n  border-radius: 8px;\n  color: #fff;\n  padding: 0 0.66rem;\n  text-transform: capitalize;\n}\n[data-vb-theme='dark'] ._2n5QXHD_O0M4Lmh8grephx {\n  color: #fff;\n}\n[data-vb-theme='dark'] .yExPqqMdgT6crfGPxgoe3 {\n  background: #232135;\n  color: #aeaee0;\n}\n", ""]);
// Exports
exports.locals = {
	"container": "_1Z2rqmkCphRzXWG8jeeE_k",
	"logo": "_3Et2dc_l7pwzhgP_x_Y3Vr",
	"logoAnimate": "_1jm220JBrY6zZrCQL3L2HE",
	"mainLogo": "_2n5QXHD_O0M4Lmh8grephx",
	"version": "yExPqqMdgT6crfGPxgoe3"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_ba5573b0_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_ba5573b0_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_ba5573b0_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_ba5573b0_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_ba5573b0_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./resources/app/src/@vb/components/Auth/Register/index.vue":
/*!******************************************************************!*\
  !*** ./resources/app/src/@vb/components/Auth/Register/index.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_ba5573b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ba5573b0 */ "./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=template&id=ba5573b0");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_ba5573b0_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true */ "./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true");




const cssModules = _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__cssModules = {}
;
cssModules["$style"] = _index_vue_vue_type_style_index_0_id_ba5573b0_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_2__.default
if (false) {}
_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_vue_vue_type_template_id_ba5573b0__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/app/src/@vb/components/Auth/Register/index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/app/src/views/auth/register/index.vue":
/*!*********************************************************!*\
  !*** ./resources/app/src/views/auth/register/index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_62875eab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=62875eab */ "./resources/app/src/views/auth/register/index.vue?vue&type=template&id=62875eab");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/app/src/views/auth/register/index.vue?vue&type=script&lang=js");



_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_vue_vue_type_template_id_62875eab__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/app/src/views/auth/register/index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/app/src/views/auth/register/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/app/src/views/auth/register/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/register/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=template&id=ba5573b0":
/*!************************************************************************************************!*\
  !*** ./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=template&id=ba5573b0 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_ba5573b0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_ba5573b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=ba5573b0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=template&id=ba5573b0");


/***/ }),

/***/ "./resources/app/src/views/auth/register/index.vue?vue&type=template&id=62875eab":
/*!***************************************************************************************!*\
  !*** ./resources/app/src/views/auth/register/index.vue?vue&type=template&id=62875eab ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_62875eab__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_62875eab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=62875eab */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/views/auth/register/index.vue?vue&type=template&id=62875eab");


/***/ }),

/***/ "./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_ba5573b0_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_10_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_10_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_ba5573b0_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-10.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-10.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/app/src/@vb/components/Auth/Register/index.vue?vue&type=style&index=0&id=ba5573b0&lang=scss&module=true");
 

/***/ })

}]);