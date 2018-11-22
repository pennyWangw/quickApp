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
            "value": function () {return this.startDay},
            "selected": function () {return this.startDay},
            "end": function () {return this.endDay}
          },
          "classList": [
            "picker"
          ],
          "events": {
            "change": "chooseTime"
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Common/icon_expand.png"
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
            "value": function () {return this.endDay},
            "start": function () {return this.startDay},
            "end": function () {return this.$app.$def.dateFormat(new Date())},
            "selected": function () {return this.endDay}
          },
          "classList": [
            "margin-left-xx"
          ],
          "events": {
            "change": "chooseEndTime"
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Common/icon_expand.png"
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
        "introduce"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/many.png"
              },
              "classList": [
                "tag-icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "量多"
              },
              "classList": [
                "texts"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/normal.png"
              },
              "classList": [
                "tag-icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "量正常"
              },
              "classList": [
                "texts"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/less.png"
              },
              "classList": [
                "tag-icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "量少"
              },
              "classList": [
                "texts"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/temperature.png"
              },
              "classList": [
                "tag-icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "温度"
              },
              "classList": [
                "texts"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/sex.png"
              },
              "classList": [
                "tag-icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "有性生活"
              },
              "classList": [
                "texts"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "list",
      "attr": {},
      "classList": [
        "content-page"
      ],
      "events": {
        "scrollbottom": "loadMoreData"
      },
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": {
            "exp": function () {return this.showData},
            "key": "index",
            "value": "content"
          },
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "product"
              },
              "children": [
                {
                  "type": "canvas",
                  "attr": {
                    "id": function () {return 'newCanvas'+this.index}
                  },
                  "classList": [
                    "new_canvas"
                  ],
                  "id": function () {return 'newCanvas'+this.index}
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "loadMore"
          },
          "classList": [
            "load-status"
          ],
          "children": [
            {
              "type": "progress",
              "attr": {
                "type": "circular",
                "show": function () {return this.hasMoreData}
              }
            },
            {
              "type": "text",
              "attr": {
                "show": function () {return this.hasMoreData},
                "value": "加载更多"
              }
            },
            {
              "type": "text",
              "attr": {
                "show": function () {return !this.hasMoreData},
                "value": "没有更多了~"
              }
            }
          ]
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
    "lineHeight": "94px",
    "height": "94px",
    "background": "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"to\",\"right\"],\"values\":[\"#fc5e97\",\"#fe98b7\"]}]}",
    "color": "#ffffff",
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  ".margin-left-xx": {
    "marginLeft": "80px",
    "color": "#ffffff",
    "fontSize": "30px"
  },
  ".content-page": {
    "width": "100%",
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "flexDirection": "column"
  },
  ".introduce": {
    "width": "100%",
    "backgroundColor": "#ffffff",
    "alignSelf": "flex-end",
    "marginTop": "94px",
    "height": "90px",
    "borderTopWidth": "0px",
    "borderRightWidth": "0px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "0px",
    "borderStyle": "solid",
    "borderTopColor": "rgb(235,235,235)",
    "borderRightColor": "rgb(235,235,235)",
    "borderBottomColor": "rgb(235,235,235)",
    "borderLeftColor": "rgb(235,235,235)",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".introduce div": {
    "marginLeft": "30px",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "introduce"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".introduce div text": {
    "color": "rgb(39,40,47)",
    "fontSize": "24px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "introduce"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "div"
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
  ".tag-icon": {
    "marginRight": "10px",
    "width": "24px"
  },
  ".texts": {
    "fontSize": "36px"
  },
  ".new_canvas": {
    "width": "100%",
    "height": "980px",
    "backgroundColor": "#ffffff",
    "marginBottom": "15px"
  },
  ".arrow": {
    "marginLeft": "16px",
    "width": "16px",
    "alignSelf": "center"
  },
  ".picker": {
    "color": "#ffffff",
    "fontSize": "30px"
  },
  ".load-status": {
    "justifyContent": "center"
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
    allData: [],
    drawComplete: true,
    sectionLen: 16,
    storageData: [],
    startIndex: 0,
    endIndex: 0,
    afterHide: false,
    showData: [],
    hasMoreData: true
  },
  getChooseDayStor: function getChooseDayStor() {
    var _this = this;

    _system2.default.get({
      key: 'penny.chooseDay',
      success: function success(data) {
        if (data) _this.storageData = JSON.parse(data);
        var len = _this.storageData.length;
        _this.endIndex = len;
        if (len > _this.sectionLen * 2) {
          _this.startIndex = len - _this.sectionLen * 2;
        } else {
          _this.startIndex = 0;
          _this.endIndex = len;
        }
        _this.allData = _this.storageData;
        var initDays = _this.storageData.slice(_this.startIndex, _this.endIndex);
        if (initDays[0]) {
          _this.startDay = initDays[0].day;
          _this.endDay = initDays[initDays.length - 1].day;
        } else {
          _this.endDay = _this.$app.$def.dateFormat(new Date());
          _this.startDay = _this.endDay;
        }

        _this.initDataContent(initDays);
      },
      fail: function fail(data, code) {
        _this.allData = [];
      }
    });
  },
  initDataContent: function initDataContent(allData) {
    this.dataContent = [];
    for (var i = 0, len = allData.length; i < len; i += this.sectionLen) {
      this.dataContent.push(allData.slice(i, i + this.sectionLen));
    }
    if (this.dataContent.length > 2) {
      this.showData = this.dataContent.slice(0, 2);
      this.hasMoreData = true;
    } else {
      this.showData = this.dataContent;
      this.hasMoreData = false;
    }
  },
  chooseTime: function chooseTime(val) {
    var _this2 = this;

    this.startDay = val.year + '-' + (val.month + 1 < 10 ? '0' + (val.month + 1) : val.month + 1) + '-' + (val.day < 10 ? '0' + val.day : val.day);
    if (this.allData.length > 0) {
      var startTime = new Date(this.startDay).getTime();
      this.allData.some(function (item, index) {
        var curTime = new Date(item.day).getTime();
        var back = startTime < curTime || startTime === curTime;
        if (back) {
          _this2.startIndex = index;
          _this2.anotherDraw();
          _this2.anotherDraw();
        }
        return back;
      });
    }
  },
  chooseEndTime: function chooseEndTime(val) {
    var _this3 = this;

    this.endDay = val.year + '-' + (val.month + 1 < 10 ? '0' + (val.month + 1) : val.month + 1) + '-' + (val.day < 10 ? '0' + val.day : val.day);
    if (this.allData.length > 0) {
      var endTime = new Date(this.endDay).getTime();
      var lastTime = new Date(this.allData[this.allData.length - 1].day).getTime();
      if (endTime > lastTime) {
        this.endIndex = this.allData.length;
        this.anotherDraw();
        this.anotherDraw();
      } else {
        this.allData.some(function (item, index) {
          var curTime = new Date(item.day).getTime();
          var back = endTime < curTime || endTime === curTime;
          if (back) {
            _this3.endIndex = index;
            _this3.anotherDraw();
            _this3.anotherDraw();
          }
          return back;
        });
      }
    }
  },
  onShow: function onShow() {
    if (!this.afterHide) {
      this.dataDrawCanvas();
    }
  },
  onHide: function onHide() {
    this.afterHide = true;
  },
  dataDrawCanvas: function dataDrawCanvas() {
    var _this4 = this;

    if (this.drawComplete) {
      this.drawComplete = false;
      this.showData.forEach(function (content, index) {
        _this4.drawCanvas(content, index);
      });
    }
  },
  anotherDraw: function anotherDraw() {
    var _this5 = this;

    this.initDataContent(this.allData.slice(this.startIndex, this.endIndex));
    setTimeout(function () {
      _this5.dataDrawCanvas();
    });
  },
  drawCanvas: function drawCanvas(content, condex) {
    var _this6 = this;

    var canvas = this.$element('newCanvas' + condex);
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.save();
    ctx.beginPath();
    var marginleft = 12;
    var margintop = 54;
    var initX = 50 + marginleft + 12;
    var initY = 133;
    var endX = 720;
    var endY = 800;

    ctx.font = '24px';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = '#3D3D3D';
    ctx.fillText("年:", marginleft, 35);
    ctx.fillText("月:", marginleft, 83);
    ctx.fillText("日:", marginleft, 123);
    var initDay = content[0].day.split('-');
    ctx.fillText(initDay[0] + '年', 54 + marginleft, 40);
    ctx.fillText(initDay[1] + '月', 54 + marginleft, 80);

    ctx.strokeStyle = '#eaeaea';
    ctx.lineJoin = 'miter';
    ctx.lineWidth = 2;
    ctx.moveTo(initX, initY);
    ctx.lineTo(initX, endY);
    ctx.moveTo(initX, endY);
    ctx.lineTo(endX, endY);
    ctx.closePath();
    ctx.stroke();

    var rowNum = 15;
    var n = (endY - initY) / rowNum;
    ctx.beginPath();
    ctx.font = '22px';
    for (var i = 0; i < rowNum + 1; i++) {
      var y = endY - n * i;
      ctx.fillStyle = 'rgba(39,40,47,0.6)';
      var text = void 0;
      if (i === 0) {
        text = '<36.0';
        ctx.fillText(text, 0, y + 10);
        ctx.fillStyle = 'rgba(205,231,253,0.9)';
        ctx.fillRect(initX + 1, y - n, endX - initX, n);
        ctx.fillStyle = 'rgba(39,40,47,0.6)';
      } else if (i === rowNum - 1) {
        text = '>37.2';
        ctx.fillText(text, 0, y + 10);
        ctx.fillStyle = 'rgba(255,220,233,0.9)';
        ctx.fillRect(initX + 1, y, endX - initX, n);
        ctx.fillStyle = 'rgba(39,40,47,0.6)';
      } else if (i < rowNum - 1) {
        text = parseFloat(36.0 + 0.1 * (i - 1)).toFixed(1);
        ctx.fillText(text, marginleft, y + 10);
      }
      if (i !== 0) {
        ctx.moveTo(initX + 1, y);
        ctx.lineTo(endX, y);
      }
    }

    ctx.stroke();
    ctx.closePath();

    var xN = (endX - initX) / this.sectionLen;
    ctx.beginPath();
    for (var j = 0; j < this.sectionLen; j++) {
      var x = initX + xN * j + xN;
      ctx.moveTo(x, initY);
      ctx.lineTo(x, endY - 1);
    }
    ctx.strokeStyle = '#eaeaea';
    ctx.stroke();
    ctx.closePath();

    var lastX = void 0;
    var lastY = void 0;
    content.forEach(function (item, index) {
      var charInitY = endY + 20;
      ctx.fillStyle = '#3D3D3D';
      var y = void 0;
      var x = initX + xN * index + 1 / 2 * xN;

      if (item.tempValue) {
        if (item.tempValue > 35.99 && item.tempValue < 37.21) {
          y = endY - (item.tempValue - 36) / 0.1 * n - n;
        } else if (item.tempValue < 36) {
          y = endY;
        } else {
          y = endY - (37.3 - 36) / 0.1 * n - n;
        }

        ctx.beginPath();
        if (lastY) {
          if (_this6.getDays(item.day, content[index - 1].day) > 1) {
            ctx.moveTo(x, y);
          } else {
            ctx.moveTo(lastX, lastY);
          }
        } else {
          ctx.moveTo(x, y);
        }
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgb(252,97,153)';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        if (item.sexLife) {
          _this6.drowImg(ctx, x, y, '/Common/icon_sex.png');
          if (item.sexTime !== '请选择时间') {
            ctx.font = '14px';
            ctx.fillText(item.sexTime, x - 16, charInitY);
            charInitY += 16;
          }
        } else {
          _this6.drowImg(ctx, x, y, '/Common/icon_temperature.png');
        }
        ctx.stroke();
      } else {
        ctx.font = '14px';
        if (item.tempValue && (item.tempValue < 36 || item.tempValue > 37.2)) {
          ctx.fillText(item.tempValue, x - 16, charInitY);
          charInitY += 16;
        }
        if (item.sexLife) {
          _this6.drowImg(ctx, x, charInitY, '/Common/icon_sex.png');
          charInitY += 25;
          if (item.sexTime !== '请选择时间') {
            ctx.fillText(item.sexTime, x - 14, charInitY);
            charInitY += 14;
          }
        }
      }

      var day = item.day.split('-');
      ctx.font = '22px';
      if (index !== 0) {
        ctx.fillText(day[2], x - 12, 120);
      } else {
        ctx.fillText(day[2], x - 12, 120);
      }
      if (lastX) {
        var lastDay = content[index - 1].day.split('-');
        if (lastDay[1] !== day[1]) {
          ctx.font = '24px';
          ctx.fillText(day[1] + '月', x - 12, 80);
        }
        if (day[0] !== lastDay[0]) {
          ctx.font = '24px';
          ctx.fillText(day[0] + '年', x - 12, 40);
        }
      }

      ctx.font = '18px';

      for (var _j = 0; _j < item.otherText.length; _j++) {
        var char = item.otherText[_j];
        if (_j === 0) {
          charInitY += 12;
        }
        ctx.fillText(char, x - 8, charInitY + _j * 22);
      }

      if (item.isPeriod) {
        var pY = initY + n / 2;
        if (item.periodNum === '量少') {
          _this6.drowImg(ctx, x, pY, '/Common/icon_less.png');
        } else if (item.periodNum === '量多') {
          _this6.drowImg(ctx, x, pY, '/Common/icon_many.png');
        } else {
          _this6.drowImg(ctx, x, pY, '/Common/icon_normal.png');
        }
      }
      lastX = x;
      lastY = y;
    });
    ctx.closePath();
    if (condex === this.showData.length - 1) {
      this.drawComplete = true;
    }
  },
  drowImg: function drowImg(ctx, x, y, src) {
    var img = new Image();
    img.src = src;

    img.onload = function () {
      ctx.drawImage(img, x - 10, y - 10, 20, 20);
    };
    img.onerror = function () {
      console.log("图片加载失败");
    };
  },
  getDays: function getDays(strDateStart, strDateEnd) {
    var iDays = void 0;
    var strDateS = new Date(strDateStart);
    var strDateE = new Date(strDateEnd);
    iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24);
    return iDays;
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  },
  onInit: function onInit() {
    this.getChooseDayStor();
  },
  loadMoreData: function loadMoreData() {
    var _this7 = this;

    if (this.showData.length < this.dataContent.length) {
      var _data = this.dataContent[this.showData.length];
      this.showData.push(_data);
      setTimeout(function () {
        _this7.drawCanvas(_data, _this7.showData.length - 1);
      });
    } else {
      this.hasMoreData = false;
    }
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