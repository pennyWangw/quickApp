(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(1)
var $app_style$ = __webpack_require__(2)
var $app_script$ = __webpack_require__(3)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "id": "icon",
        "src": function () {return this.icon}
      },
      "id": "icon"
    },
    {
      "type": "text",
      "attr": {
        "id": "name",
        "value": "基础体温测定法说明"
      },
      "id": "name"
    },
    {
      "type": "text",
      "attr": {
        "id": "desc",
        "value": "基础体温可以间接反映妇女卵巢功能，所谓基础体温即于休息6~8小时后，尚未起床，进食或谈话前所测定的体温。生育期正常妇女基础体温于惊奇后稍低，排卵日可能更低，排卵后由于卵泡产生黄体，基础体温升高，直至下次经期又复下降。\n        测定基础体温可以了解有无黄体及黄体功能，从而了解有无排卵及估计排卵日期，对卵巢功能失调及不育等患者的诊断治疗及观察疗效甚为重要。请按说明及医嘱正确执行下列各项："
      },
      "id": "desc"
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "detail"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "1. 置备一体温表华氏摄氏均可，掌握读表方法，务求精确。"
          },
          "classList": [
            "detail-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "2. 将温度表放于床测小几上，每晚临睡前将水银柱挥低。"
          },
          "classList": [
            "detail-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "3. 每晨醒后，即刻测量口中体温5分钟。如能每晨固定时间（5时~7时）测温更佳。"
          },
          "classList": [
            "detail-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "4. 如有性生活，应于表内注明。"
          },
          "classList": [
            "detail-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "5. 感冒、饮酒、迟睡、失眠等等情形，往往影响体温，应于备注项内写明，以作参考。"
          },
          "classList": [
            "detail-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "6. 周期中如有短暂下腹隐痛，引导点滴渗血，白带突增，性感增强或其他异常情况。均应于备注项内说明。"
          },
          "classList": [
            "detail-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "7. 检查、治疗、服药开始及停止日期，应于备注项内注明。"
          },
          "classList": [
            "detail-title"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "detail"
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "footer",
        "value": function () {return this.copyright}
      },
      "id": "footer"
    }
  ]
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "#icon": {
    "marginTop": "90px",
    "width": "100px",
    "height": "100px",
    "borderRadius": "10px"
  },
  "#name": {
    "marginTop": "20px",
    "fontSize": "36px",
    "color": "#000000"
  },
  "#tags": {
    "marginTop": "22px",
    "alignItems": "center"
  },
  ".tag": {
    "paddingLeft": "20px",
    "paddingRight": "20px",
    "fontSize": "28px",
    "color": "#2a9700"
  },
  ".gap": {
    "fontSize": "22px",
    "color": "#b2b2b2"
  },
  "#desc": {
    "width": "650px",
    "marginTop": "40px",
    "lineHeight": "35px",
    "fontSize": "25px",
    "color": "#8d8d8d"
  },
  ".detail": {
    "width": "650px",
    "marginTop": "30px",
    "flexDirection": "column"
  },
  ".detail-title": {
    "paddingLeft": "10px",
    "fontSize": "25px",
    "color": "#000000",
    "width": "100%",
    "marginTop": "10px"
  },
  ".detail-content": {
    "fontSize": "25px",
    "color": "#8d8d8d"
  },
  ".btn": {
    "width": "550px",
    "height": "86px",
    "marginTop": "75px",
    "borderRadius": "43px",
    "backgroundColor": "#FFAEB9",
    "fontSize": "30px",
    "color": "#2c2c2c"
  },
  "#footer": {
    "width": "750px",
    "position": "fixed",
    "bottom": "55px",
    "fontSize": "25px",
    "color": "#8d8d8d",
    "textAlign": "center"
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  protected: {
    name: null,
    icon: null
  },
  private: {
    desc: '即点即用，让你省去下载安装的步骤，立即使用各类服务',
    serviceType: '工具类',
    subjectInfo: 'xxx有限公司',
    copyright: ''
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: this.name });
  },
  createShortcut: function createShortcut() {
    this.$app.$def.createShortcut();
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map