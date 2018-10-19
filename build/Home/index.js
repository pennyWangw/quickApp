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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(4)
var $app_style$ = __webpack_require__(5)
var $app_script$ = __webpack_require__(6)

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
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return new Date(this.year).getFullYear()}
      },
      "classList": [
        "top-title"
      ]
    },
    {
      "type": "list",
      "attr": {
        "id": "alist"
      },
      "id": "alist",
      "classList": [
        "content-page"
      ],
      "events": {
        "scrolltop": "getDatas"
      },
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "product"
          },
          "classList": [
            "month-div"
          ],
          "repeat": {
            "exp": function () {return this.allDays},
            "value": "month"
          },
          "events": {
            "appear": function (evt) {this.getCurYear(this.month.month,evt)}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "month-num",
                "item-text"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return (new Date(this.month.month).getMonth()+1) + '月'}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "week-div"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "repeat": {
                    "exp": function () {return this.week},
                    "value": "weekDay"
                  },
                  "classList": [
                    "item-text"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.weekDay}
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "week-div",
                "flex-wrap"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "repeat": {
                    "exp": function () {return this.month.day},
                    "value": "day"
                  },
                  "classList": function () {return ['item-text', this.choosedDays.indexOf(this.day)>-1?'choosename':'']},
                  "events": {
                    "click": function (evt) {this.getCurDay(this.day,evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return new Date(this.day).getDate()}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "textAlign": "center"
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
    "width": "100%"
  },
  ".content-page": {
    "marginTop": "100px",
    "width": "100%",
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "height": "100%"
  },
  ".month-div": {
    "width": "100%",
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".week-div": {
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "center",
    "width": "100%"
  },
  ".item-text": {
    "marginTop": "14px",
    "marginRight": "14px",
    "marginBottom": "14px",
    "marginLeft": "14px",
    "width": "70px",
    "textAlign": "center",
    "height": "70px"
  },
  ".item-text text": {
    "width": "100%",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-text"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".flex-wrap": {
    "flexWrap": "wrap"
  },
  ".choosename": {
    "backgroundColor": "#FFAEB9",
    "borderRadius": "35px"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  private: {
    title: '示例页面',
    week: ['一', '二', '三', '四', '五', '六', '日'],
    year: new Date(),
    allDays: [],
    choosedDays: []
  },
  onInit: function onInit() {
    var date = new Date();
    var curDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-01';
    this.getMounth(curDate);
    date.setMonth(date.getMonth() - 1);
    this.getMounth(date.getFullYear() + '-' + (date.getMonth() + 1) + '-01');
  },
  onShow: function onShow() {
    var _this = this;

    setTimeout(function () {
      _this.$element('alist').scrollTo({ index: 1 });
    }, 100);
  },
  getMounth: function getMounth(day) {
    var monthObject = {
      month: day,
      day: []
    };
    var date = new Date(day);
    var firstDay = date.getDay();
    firstDay = firstDay === 0 ? 7 : firstDay;
    console.log(firstDay + 'day' + this.dateFormat(date));
    for (var i = 1; i < firstDay; i++) {
      var day1 = new Date(date);
      day1.setDate(day1.getDate() - i);
      monthObject.day.unshift(this.dateFormat(day1));
    }
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    var haveDays = date.getDate();
    for (var j = 0; j < haveDays; j++) {
      var day2 = new Date(day);
      day2.setDate(day2.getDate() + j);
      monthObject.day.push(this.dateFormat(day2));
    }
    var lastDay = date.getDay();
    for (var k = 1; k < 7 - lastDay + 1; k++) {
      var day3 = new Date(date);
      day3.setDate(day3.getDate() + k);
      monthObject.day.push(this.dateFormat(day3));
    }
    this.allDays.unshift(monthObject);
  },
  dateFormat: function dateFormat(date) {
    var day = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return day;
  },
  getDatas: function getDatas() {
    var month = new Date(this.allDays[0].month);
    month.setMonth(month.getMonth() - 1);
    this.year = month;
    this.getMounth(this.dateFormat(month));
  },
  getCurYear: function getCurYear(event) {
    this.year = event;
  },
  getCurDay: function getCurDay(day) {
    this.choosedDays.push(day);
  },
  routeDetail: function routeDetail() {
    _system2.default.push({
      uri: '/Detail'
    });
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