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
            "value": ">"
          },
          "classList": [
            "arrow"
          ]
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
        },
        {
          "type": "text",
          "attr": {
            "value": ">"
          },
          "classList": [
            "arrow"
          ]
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
          "type": "canvas",
          "attr": {
            "id": "newCanvas"
          },
          "classList": [
            "new_canvas"
          ],
          "id": "newCanvas"
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
    "height": "100%",
    "flexDirection": "column"
  },
  ".new_canvas": {
    "width": "100%",
    "height": "90%"
  },
  ".arrow": {
    "transform": "{\"rotate\":\"90deg\"}",
    "color": "#8B1A1A",
    "marginLeft": "5px",
    "marginTop": "5px",
    "fontSize": "35px"
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

var _data2 = __webpack_require__(11);

var _data3 = _interopRequireDefault(_data2);

var _system = $app_require$('@app-module/system.storage');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  private: {
    startDay: '2018-09-28',
    endDay: '2018-10-28',
    dataContent: [],
    drawComplete: false
  },
  getChooseDayStor: function getChooseDayStor() {
    var _this = this;

    _system2.default.get({
      key: 'penny.chooseDay',
      success: function success(data) {
        if (data) _this.dataContent = JSON.parse(data);
      },
      fail: function fail(data, code) {
        _this.dataContent = [];
      }
    });
  },
  chooseTime: function chooseTime(val) {
    this.startDay = val.year + '-' + (val.month + 1 < 10 ? '0' + val.month + 1 : val.month + 1) + '-' + (val.day < 10 ? '0' + val.day : val.day);
  },
  chooseEndTime: function chooseEndTime(val) {
    this.endDay = val.year + '-' + (val.month + 1 < 10 ? '0' + val.month + 1 : val.month + 1) + '-' + (val.day < 10 ? '0' + val.day : val.day);
  },
  onShow: function onShow() {
    if (!this.drawComplete) {
      this.drawCanvas();
    }
  },
  drawCanvas: function drawCanvas() {
    var canvas = this.$element('newCanvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    var initX = 50;
    var initY = 100;
    var endX = 720;
    var endY = 620;

    ctx.lineJoin = 'miter';
    ctx.moveTo(initX, initY);
    ctx.lineTo(initX, endY);
    ctx.moveTo(initX, endY);
    ctx.lineTo(endX, endY);
    ctx.closePath();
    ctx.stroke();

    ctx.font = '21px';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = '#3D3D3D';
    ctx.fillText("年:", 0, 30);
    ctx.fillText("月:", 0, 68);
    ctx.fillText("日:", 0, 97);
    var initDay = this.dataContent[0].day.split('-');
    ctx.fillText(initDay[0], 54, 35);
    ctx.fillText(initDay[1], 54, 65);

    var n = (endY - initY) / 13;
    ctx.beginPath();
    for (var i = 0; i < 13; i++) {
      var text = parseFloat(36.0 + 0.1 * i).toFixed(1);
      var y = endY - n * i;
      ctx.fillText(text, 0, y);
      if (i !== 0) {
        ctx.moveTo(initX + 1, y);
        ctx.lineTo(endX, y);
      }
    }
    ctx.strokeStyle = '#eaeaea';
    ctx.stroke();
    ctx.closePath();

    var xN = (endX - initX) / 32;
    ctx.beginPath();
    for (var _i = 0; _i < 31; _i++) {
      var x = initX + xN * _i + xN;
      ctx.moveTo(x, initY);
      ctx.lineTo(x, endY - 1);
    }
    ctx.strokeStyle = '#eaeaea';
    ctx.stroke();
    ctx.closePath();

    var lastX = void 0;
    var lastY = void 0;
    for (var _i2 = 0; _i2 < this.dataContent.length; _i2++) {
      ctx.fillStyle = '#3D3D3D';
      var _data = this.dataContent[_i2];
      var _y = void 0;
      var _x = initX + xN * _i2 + 1 / 2 * xN;
      if (_data.tempValue) {
        _y = endY - (_data.tempValue - 36) / 0.1 * n;

        ctx.beginPath();
        if (lastY) {
          ctx.moveTo(lastX, lastY);
        } else {
          ctx.moveTo(_x, _y);
        }
        ctx.lineTo(_x, _y);
        ctx.strokeStyle = '#8B5742';
        ctx.stroke();
        ctx.closePath();

        ctx.arc(_x, _y, 4, 0, 360, true);
        ctx.fill();
        if (_data.sexLife) {
          ctx.arc(_x, _y, 8, 0, 370, true);
        }
        ctx.stroke();
      } else {
        if (_data.sexLife) {
          ctx.arc(_x, endY + 50, 4, 0, 360, true);
          ctx.fill();
          ctx.arc(_x, endY + 50, 8, 0, 370, true);
          ctx.stroke();
        }
      }

      var day = _data.day.split('-');
      ctx.font = '12px';
      if (_i2 !== 0) {
        ctx.fillText(day[2], _x - 6, 95);
      } else {
        ctx.fillText(day[2], _x - 6, 91);
      }
      if (day[2] === '01') {
        ctx.font = '21px';
        ctx.fillText(day[1], _x - 12, 65);
        if (day[1] === '01') {
          ctx.fillText(day[0], _x - 12, 35);
        }
      }

      ctx.font = '12px';
      for (var j = 0; j < _data.otherText.length; j++) {
        var char = _data.otherText[j];
        ctx.fillText(char, _x - 6, endY + 20 + j * 12);
      }

      ctx.font = '20px';
      ctx.fillStyle = '#8B2500';
      if (_data.isPeriod) {
        var pY = initY + n / 2 + 10;
        if (_data.periodNum === '量少') {
          ctx.font = '30px';
          ctx.fillText('、', _x - 6, pY);
        } else if (_data.periodNum === '量多') {
          ctx.fillText('x', _x - 6, pY - 7);
          ctx.fillText('x', _x - 6, pY + 7);
        } else {
          ctx.fillText('x', _x - 6, pY);
        }
      }
      lastX = _x;
      lastY = _y;
    }

    this.drawComplete = true;
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  },
  onInit: function onInit() {
    this.getChooseDayStor();
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  day: '2018-09-28',
  tempValue: 36.1,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: false,
  periodNum: '',
  otherText: ''
}, {
  day: '2018-09-29',
  tempValue: 36.5,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: false,
  periodNum: '',
  otherText: ''
}, {
  day: '2018-09-30',
  tempValue: 36.6,
  sexLife: true,
  sexTime: '06:00',
  isPeriod: false,
  periodNum: '',
  otherText: ''
}, {
  day: '2018-10-01',
  tempValue: 36.6,
  sexLife: true,
  sexTime: '21:00',
  isPeriod: false,
  periodNum: '',
  otherText: '52453754'
}, {
  day: '2018-10-02',
  tempValue: 36.8,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量少',
  otherText: '腹痛'
}, {
  day: '2018-10-03',
  tempValue: 36.9,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量正常',
  otherText: '腹痛'
}, {
  day: '2018-10-04',
  tempValue: 36.2,
  sexLife: true,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量正常',
  otherText: '腹痛'
}, {
  day: '2018-10-05',
  tempValue: 36.3,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量多',
  otherText: '腹痛'
}, {
  day: '2018-10-06',
  tempValue: 36.5,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量正常',
  otherText: '腹痛'
}, {
  day: '2018-10-07',
  tempValue: 36.2,
  sexLife: false,
  sexTime: '请选择时间',
  isPeriod: true,
  periodNum: '量少',
  otherText: '腹痛'
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