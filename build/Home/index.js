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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(13)
var $app_style$ = __webpack_require__(14)
var $app_script$ = __webpack_require__(15)

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

/***/ 13:
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
      "type": "div",
      "attr": {},
      "classList": [
        "date-check"
      ],
      "events": {
        "click": "routeDetail"
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "查看基础体温"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "desk"
      ],
      "events": {
        "click": function (evt) {this.$app.$def.showMenu(evt)}
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "!"
          },
          "classList": [
            "blue"
          ]
        }
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
                    "key": "index",
                    "value": "day"
                  },
                  "classList": function () {return ['item-text', (this.haveChooseDay(this.day.day)&&this.day.curMonth)?(this.getChooseDay(this.day.day).isPeriod?'period-day':'choosename'):'']},
                  "events": {
                    "click": function (evt) {this.getCurDay(this.day,this.index,evt)},
                    "longpress": function (evt) {this.showRecord(this.day,evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return new Date(this.day.day).getDate()}
                      },
                      "classList": function () {return [this.day.curMonth?(this.isOutDate(this.day.day)?'lightgray':''):'lightgray']}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "out-pop"
      ],
      "shown": function () {return this.showPop},
      "events": {
        "click": "closePop"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "center-pop"
          ],
          "events": {
            "click": "defaultPrevent"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "close-cont"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "close"
                  ],
                  "events": {
                    "click": "closePop"
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "x"
                      },
                      "classList": [
                        "close-text"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.clickDay.day}
              },
              "classList": [
                "center-text"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "content-pop"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "row-inline"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "体温:"
                      }
                    },
                    {
                      "type": "input",
                      "attr": {
                        "value": function () {return this.clickDay.tempValue},
                        "type": "text",
                        "maxlength": "5"
                      },
                      "events": {
                        "change": "enterkeyclick"
                      },
                      "classList": [
                        "input-class"
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "请输入35.00 - 42.00的数字！"
                  },
                  "shown": function () {return this.showTemPo},
                  "classList": [
                    "worn-text"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "row-inline",
                    "left-25"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "性生活:"
                      }
                    },
                    {
                      "type": "input",
                      "attr": {
                        "checked": function () {return this.clickDay.sexLife},
                        "type": "checkbox",
                        "maxlength": "5"
                      },
                      "events": {
                        "change": "changeSex"
                      }
                    },
                    {
                      "type": "picker",
                      "attr": {
                        "type": "time",
                        "value": function () {return this.clickDay.sexTime}
                      },
                      "classList": [
                        "picker"
                      ],
                      "events": {
                        "change": "chooseTime"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "row-inline"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "经期:"
                      }
                    },
                    {
                      "type": "input",
                      "attr": {
                        "checked": function () {return this.clickDay.isPeriod},
                        "type": "checkbox",
                        "maxlength": "5"
                      },
                      "events": {
                        "change": "changePeriod"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "margin-left-pop"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "出血量:"
                      }
                    },
                    {
                      "type": "input",
                      "attr": {
                        "id": "radio1",
                        "type": "radio",
                        "value": "量多",
                        "name": "period",
                        "checked": function () {return this.clickDay.periodNum==='量多'}
                      },
                      "id": "radio1",
                      "events": {
                        "change": "changeRadio"
                      }
                    },
                    {
                      "type": "label",
                      "attr": {
                        "target": "radio1",
                        "value": "量少"
                      }
                    },
                    {
                      "type": "input",
                      "attr": {
                        "id": "radio2",
                        "type": "radio",
                        "value": "量正常",
                        "name": "period",
                        "checked": function () {return this.clickDay.periodNum==='量正常'}
                      },
                      "id": "radio2",
                      "events": {
                        "change": "changeRadio"
                      }
                    },
                    {
                      "type": "label",
                      "attr": {
                        "target": "radio2",
                        "value": "普通"
                      }
                    },
                    {
                      "type": "input",
                      "attr": {
                        "id": "radio3",
                        "type": "radio",
                        "value": "量少",
                        "name": "period",
                        "checked": function () {return this.clickDay.periodNum==='量少'}
                      },
                      "id": "radio3",
                      "events": {
                        "change": "changeRadio"
                      }
                    },
                    {
                      "type": "label",
                      "attr": {
                        "target": "radio3",
                        "value": "量多"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "row-inline"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "备注:"
                      },
                      "classList": [
                        "title-area"
                      ]
                    },
                    {
                      "type": "textarea",
                      "attr": {
                        "maxlength": "20",
                        "value": function () {return this.clickDay.otherText}
                      },
                      "classList": [
                        "text-are"
                      ],
                      "events": {
                        "change": "getText"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "row-inline",
                    "right-algn"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "取消"
                      },
                      "classList": [
                        "btn"
                      ],
                      "events": {
                        "click": "closePop"
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "确定"
                      },
                      "classList": [
                        "btn",
                        "certain"
                      ],
                      "events": {
                        "click": "sureAdd"
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

/***/ 14:
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
    "backgroundColor": "#FFE4E1",
    "borderRadius": "35px"
  },
  ".period-day": {
    "backgroundColor": "#FFAEB9",
    "borderRadius": "35px"
  },
  ".lightgray": {
    "color": "#cccccc"
  },
  ".out-pop": {
    "position": "fixed",
    "width": "100%",
    "height": "100%",
    "backgroundColor": "rgba(0,0,0,0.6)",
    "top": "0px",
    "left": "0px",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".center-pop": {
    "width": "70%",
    "backgroundColor": "#ffffff",
    "borderRadius": "10px",
    "paddingTop": "15px",
    "paddingRight": "15px",
    "paddingBottom": "15px",
    "paddingLeft": "15px",
    "flexDirection": "column"
  },
  ".worn-text": {
    "color": "#EE6AA7",
    "marginLeft": "90px",
    "fontSize": "24px"
  },
  ".close-cont": {
    "width": "100%",
    "justifyContent": "flex-end"
  },
  ".close": {
    "width": "40px",
    "height": "40px",
    "borderRadius": "20px",
    "justifyContent": "center",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "solid",
    "borderTopColor": "#EE6AA7",
    "borderRightColor": "#EE6AA7",
    "borderBottomColor": "#EE6AA7",
    "borderLeftColor": "#EE6AA7"
  },
  ".close-text": {
    "color": "#EE6AA7",
    "fontSize": "26px",
    "marginTop": "-5px"
  },
  ".center-text": {
    "alignSelf": "center"
  },
  ".content-pop": {
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px",
    "flexDirection": "column"
  },
  ".input-class": {
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "solid",
    "borderTopColor": "#FFC0CB",
    "borderRightColor": "#FFC0CB",
    "borderBottomColor": "#FFC0CB",
    "borderLeftColor": "#FFC0CB",
    "borderRadius": "8px",
    "fontSize": "36px",
    "marginLeft": "15px",
    "paddingTop": "6px",
    "paddingRight": "20px",
    "paddingBottom": "6px",
    "paddingLeft": "20px",
    "color": "#EE6AA7",
    "width": "80%"
  },
  ".margin-left-pop": {
    "marginLeft": "-30px",
    "flexDirection": "row",
    "alignSelf": "flex-start",
    "marginBottom": "20px"
  },
  ".left-25": {
    "marginLeft": "-30px",
    "marginTop": "10px"
  },
  ".mask-class": {
    "maskColor": "rgba(0,0,0,1)"
  },
  ".right-input": {
    "flexDirection": "column"
  },
  ".row-inline": {
    "flexDirection": "row"
  },
  ".picker": {
    "width": "200px",
    "borderRadius": "10px",
    "color": "#FFAEB9",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px"
  },
  ".text-are": {
    "width": "80%",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "solid",
    "borderTopColor": "#FFC0CB",
    "borderRightColor": "#FFC0CB",
    "borderBottomColor": "#FFC0CB",
    "borderLeftColor": "#FFC0CB",
    "borderRadius": "8px",
    "marginLeft": "15px",
    "paddingTop": "6px",
    "paddingRight": "20px",
    "paddingBottom": "6px",
    "paddingLeft": "20px",
    "fontSize": "28px",
    "height": "100px",
    "backgroundColor": "#FFFdFd",
    "marginBottom": "15px"
  },
  ".title-area": {
    "alignSelf": "flex-start",
    "marginBottom": "50px"
  },
  ".right-algn": {
    "justifyContent": "flex-end",
    "alignSelf": "flex-end"
  },
  ".btn": {
    "width": "120px",
    "textAlign": "center",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "solid",
    "borderTopColor": "#FFC0CB",
    "borderRightColor": "#FFC0CB",
    "borderBottomColor": "#FFC0CB",
    "borderLeftColor": "#FFC0CB",
    "lineHeight": "45px",
    "borderRadius": "20px",
    "marginTop": "20px",
    "marginRight": "20px",
    "marginBottom": "20px",
    "marginLeft": "20px"
  },
  ".certain": {
    "backgroundColor": "#FFAEB9"
  },
  ".date-check": {
    "position": "fixed",
    "width": "200px",
    "height": "70px",
    "right": "30px",
    "top": "15px",
    "display": "flex",
    "justifyContent": "center",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#EE6AA7",
    "borderRightColor": "#EE6AA7",
    "borderBottomColor": "#EE6AA7",
    "borderLeftColor": "#EE6AA7",
    "borderRadius": "8px"
  },
  ".desk": {
    "position": "fixed",
    "top": "20px",
    "left": "15px",
    "height": "50px",
    "width": "50px",
    "borderRadius": "35px",
    "borderTopWidth": "3px",
    "borderRightWidth": "3px",
    "borderBottomWidth": "3px",
    "borderLeftWidth": "3px",
    "borderStyle": "solid",
    "borderTopColor": "#87CEFA",
    "borderRightColor": "#87CEFA",
    "borderBottomColor": "#87CEFA",
    "borderLeftColor": "#87CEFA",
    "justifyContent": "center",
    "color": "#87CEFA"
  },
  ".blue": {
    "color": "#87CEFA"
  }
}

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.storage');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  private: {
    title: '示例页面',
    week: ['一', '二', '三', '四', '五', '六', '日'],
    year: new Date(),
    allDays: [],
    choosedDays: [],
    showPop: false,
    clickDay: {
      day: '',
      tempValue: null,
      sexLife: false,
      sexTime: '请选择时间',
      isPeriod: false,
      periodNum: '',
      otherText: ''
    },
    showTemPo: false,
    dayIndex: -1
  },
  onInit: function onInit() {
    this.getChooseDayStor();
    var date = new Date();
    var curDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-01';
    this.getMounth(curDate);

    var nextDate = new Date(curDate);
    nextDate.setMonth(nextDate.getMonth() - 1);
    this.getMounth(nextDate.getFullYear() + '-' + (nextDate.getMonth() + 1) + '-01');
  },
  onShow: function onShow() {
    var _this = this;

    setTimeout(function () {
      _this.$element('alist').scrollTo({ index: 1 });
    }, 100);
  },
  showRecord: function showRecord(day) {},
  getChooseDayStor: function getChooseDayStor() {
    var _this2 = this;

    _system4.default.get({
      key: 'penny.chooseDay',
      success: function success(data) {
        if (data) {
          _this2.choosedDays = JSON.parse(data);
        }
      },
      fail: function fail(data, code) {}
    });
  },
  setChooseDayStor: function setChooseDayStor(data) {
    _system4.default.set({
      key: 'penny.chooseDay',
      value: data,
      success: function success(data) {
        console.log('handling success');
      },
      fail: function fail(data, code) {
        console.log('handling fail, code = ' + code);
      }
    });
  },
  getMounth: function getMounth(day) {
    var monthObject = {
      month: day,
      day: []
    };
    var date = new Date(day);
    var firstDay = date.getDay();
    firstDay = firstDay === 0 ? 7 : firstDay;
    for (var i = 1; i < firstDay; i++) {
      var day1 = new Date(date);
      day1.setDate(day1.getDate() - i);
      monthObject.day.unshift({
        curMonth: false,
        day: this.dateFormat(day1)
      });
    }
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    var haveDays = date.getDate();
    for (var j = 0; j < haveDays; j++) {
      var day2 = new Date(day);
      day2.setDate(day2.getDate() + j);
      monthObject.day.push({
        curMonth: true,
        day: this.dateFormat(day2)
      });
    }
    var lastDay = date.getDay();

    if (lastDay !== 0) {
      for (var k = 1; k < 7 - lastDay + 1; k++) {
        var day3 = new Date(date);
        day3.setDate(day3.getDate() + k);
        monthObject.day.push({
          curMonth: false,
          day: this.dateFormat(day3)
        });
      }
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
  sureAdd: function sureAdd() {
    var haveDay = false;
    for (var i = 0; i < this.choosedDays.length; i++) {
      var curChooseDay = this.choosedDays[i];
      if (curChooseDay.day === this.clickDay.day) {
        this.choosedDays[i] = this.clickDay;
        haveDay = true;
        break;
      }
    }
    if (!haveDay) {
      this.choosedDays.push(this.clickDay);
    }

    this.choosedDays = this.choosedDays.sort(function (a, b) {
      return new Date(a.day) - new Date(b.day);
    });

    this.setChooseDayStor(this.choosedDays);
    this.closePop();
  },
  getCurDay: function getCurDay(day, index) {
    this.dayIndex = index;
    if (day.curMonth) {
      for (var i = 0; i < this.choosedDays.length; i++) {
        var curChooseDay = this.choosedDays[i];
        if (curChooseDay.day === day.day) {
          this.clickDay = curChooseDay;
          break;
        }
      }
      if (!this.clickDay.day) {
        this.clickDay.day = day.day;
        this.clickDay.curMonth = day.curMonth;
      }

      this.showPop = true;
    }
  },
  defaultPrevent: function defaultPrevent(e) {
    e.stopPropagation();
  },
  closePop: function closePop(e) {
    this.showPop = false;
    this.clickDay = {
      day: '',
      tempValue: null,
      sexLife: false,
      sexTime: '请选择时间',
      isPeriod: false,
      periodNum: '',
      otherText: ''
    };
    this.dayIndex = -1;
  },
  enterkeyclick: function enterkeyclick(e) {
    if (!(34.09 < e.value && e.value < 42.01)) {
      this.showTemPo = true;
    } else {
      this.showTemPo = false;
      this.clickDay.tempValue = e.value;
    }
  },
  changeRadio: function changeRadio(e) {
    this.clickDay.periodNum = e.value;
  },
  changeSex: function changeSex(e) {
    this.clickDay.sexLife = e.checked;
  },
  changePeriod: function changePeriod(e) {
    this.clickDay.isPeriod = e.checked;
  },
  chooseTime: function chooseTime(val) {
    this.clickDay.sexTime = (val.hour < 10 ? '0' + val.hour : val.hour) + ':' + (val.minute < 10 ? '0' + val.minute : val.minute);
  },
  getText: function getText(e) {
    this.clickDay.otherText = e.text;
  },
  haveChooseDay: function haveChooseDay(day) {
    return this.choosedDays.some(function (item) {
      return item.day === day;
    });
  },
  getChooseDay: function getChooseDay(day) {
    var chooseDay = void 0;
    this.choosedDays.some(function (item) {
      if (item.day === day) {
        chooseDay = item;
      }
      return item.day === day;
    });
    return chooseDay;
  },
  isOutDate: function isOutDate(day) {
    return new Date().getTime() < new Date(day).getTime();
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

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map