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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(8)
var $app_style$ = __webpack_require__(9)
var $app_script$ = __webpack_require__(10)

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
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "top-title"
      ],
      "children": [
        {
          "type": "picker",
          "attr": {
            "type": "date",
            "value": function () {return this.startDay}
          },
          "classList": [
            "picker"
          ],
          "events": {
            "change": "chooseTime"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "—"
          },
          "classList": [
            "margin-left-xx"
          ]
        },
        {
          "type": "picker",
          "attr": {
            "type": "date",
            "value": function () {return this.endDay}
          },
          "classList": [
            "margin-left-xx"
          ],
          "events": {
            "change": "chooseEndTime"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content-page"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.dataContent}
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".top-title": {
    "position": "fixed",
    "left": "0px",
    "top": "0px",
    "fontSize": "40px",
    "textAlign": "center",
    "lineHeight": "100px",
    "height": "100px",
    "background": "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"to\",\"bottom\"],\"values\":[\"#FFAEB9\",\"#ffffff\"]}]}",
    "color": "#2E2E2E",
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  ".margin-left-xx": {
    "marginLeft": "80px"
  },
  ".content-page": {
    "marginTop": "100px",
    "width": "100%",
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "height": "100%"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _data = __webpack_require__(15);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  private: {
    startDay: '2018-09-28',
    endDay: '2018-10-28',
    dataContent: []
  },
  chooseTime: function chooseTime(val) {
    this.startDay = val.year + '-' + (val.month < 10 ? '0' + val.month : val.month) + '-' + (val.day < 10 ? '0' + val.day : val.day);
  },
  chooseEndTime: function chooseEndTime(val) {
    this.endDay = val.year + '-' + (val.month < 10 ? '0' + val.month : val.month) + '-' + (val.day < 10 ? '0' + val.day : val.day);
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  },
  onInit: function onInit() {
    this.dataContent = _data2.default;
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

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  day: '2018-09-01',
  tempValue: 36.5,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: false,
  periodNum: '',
  otherText: ''
}, {
  day: '2018-09-02',
  tempValue: 36.8,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: false,
  periodNum: '',
  otherText: ''
}, {
  day: '2018-09-03',
  tempValue: 36.7,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: false,
  periodNum: '',
  otherText: ''
}, {
  day: '2018-09-04',
  tempValue: 36.2,
  sexLife: true,
  sexTime: '21:00',
  isPeriod: false,
  periodNum: '',
  otherText: ''
}, {
  day: '2018-09-05',
  tempValue: 36.9,
  sexLife: true,
  sexTime: '23:00',
  isPeriod: false,
  periodNum: '',
  otherText: ''
}, {
  day: '2018-09-06',
  tempValue: 36.5,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量少',
  otherText: '腹痛'
}, {
  day: '2018-09-07',
  tempValue: 36.7,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量少',
  otherText: ''
}, {
  day: '2018-09-08',
  tempValue: 36.5,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量正常',
  otherText: ''
}, {
  day: '2018-09-09',
  tempValue: 36.5,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量正常',
  otherText: 'hahahhahahahahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhs'
}, {
  day: '2018-09-10',
  tempValue: 36.5,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量正常',
  otherText: 'hahahhahahahahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
}, {
  day: '2018-09-11',
  tempValue: 36.5,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量正常',
  otherText: 'hahahhahahahahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
}];

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