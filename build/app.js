(function(){
  
  var createAppHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(5)

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
})

$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  showMenu: _util2.default.showMenu,
  createShortcut: _util2.default.createShortcut,
  dateFormat: _util2.default.dateFormat
};
(exports.default || module.exports).manifest = {"package":"com.penny.basetemprature","name":"基础体温记录小助手","versionName":"1.0.2","versionCode":"3","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug","designWidth":750},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Detail":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBar":false,"menu":true,"fullScreen":true,"pages":{"Home":{"titleBar":false,"fullScreen":true,"menu":false},"Detail":{"titleBarText":"基础体温记录小助手"},"About":{"menu":false}}}};
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 显示菜单
 */
function showMenu() {
  var prompt = $app_require$('@app-module/system.prompt');
  var router = $app_require$('@app-module/system.router');
  var appInfo = $app_require$('@app-module/system.app').getInfo();
  prompt.showContextMenu({
    itemList: ['保存桌面', '体温记录方法', '取消'],
    success: function success(ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut();
          break;
        case 1:
          // 关于
          router.push({
            uri: '/About',
            params: {
              name: appInfo.name,
              icon: appInfo.icon
            }
          });
          break;
        case 2:
          // 取消
          break;
        default:
          prompt.showToast({
            message: 'error'
          });
      }
    }
  });
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut() {
  var prompt = $app_require$('@app-module/system.prompt');
  var shortcut = $app_require$('@app-module/system.shortcut');
  shortcut.hasInstalled({
    success: function success(ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        });
      } else {
        shortcut.install({
          success: function success() {
            prompt.showToast({
              message: '成功创建桌面图标'
            });
          },
          fail: function fail(errmsg, errcode) {
            prompt.showToast({
              message: errcode + ': ' + errmsg
            });
          }
        });
      }
    }
  });
}

function dateFormat(date) {
  console.log('dateFormat', date);
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

exports.default = {
  showMenu: showMenu,
  createShortcut: createShortcut,
  dateFormat: dateFormat
};

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.penny.basetemprature","name":"基础体温记录小助手","versionName":"1.0.2","versionCode":"3","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug","designWidth":750},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Detail":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBar":false,"menu":true,"fullScreen":true,"pages":{"Home":{"titleBar":false,"fullScreen":true,"menu":false},"Detail":{"titleBarText":"基础体温记录小助手"},"About":{"menu":false}}}};
  }
})();
//# sourceMappingURL=app.js.map