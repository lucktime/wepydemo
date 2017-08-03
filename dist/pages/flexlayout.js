'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var flexlayout = function (_wepy$page) {
  _inherits(flexlayout, _wepy$page);

  function flexlayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, flexlayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = flexlayout.__proto__ || Object.getPrototypeOf(flexlayout)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'tableview'
    }, _this.components = {
      panel: _panel2.default,
      counter1: _counter2.default,
      counter2: _counter2.default,
      list: _list2.default,
      toast: _wepyComToast2.default
    }, _this.mixins = [_test2.default], _this.data = {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    }, _this.computed = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(flexlayout, [{
    key: 'onLoad',
    value: function onLoad() {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }]);

  return flexlayout;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(flexlayout , 'pages/flexlayout'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXhsYXlvdXQuanMiXSwibmFtZXMiOlsiZmxleGxheW91dCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwicGFuZWwiLCJjb3VudGVyMSIsImNvdW50ZXIyIiwibGlzdCIsInRvYXN0IiwibWl4aW5zIiwiZGF0YSIsInBvc3RlciIsIm5hbWUiLCJhdXRob3IiLCJzcmMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhdWRpb0N0eCIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsNEJBRFc7QUFFWEMsaUNBRlc7QUFHWEMsaUNBSFc7QUFJWEMsMEJBSlc7QUFLWEM7QUFMVyxLLFFBT2JDLE0sR0FBUyxnQixRQUNUQyxJLEdBQU87QUFDTEMsY0FBUSxzRkFESDtBQUVMQyxZQUFNLE1BRkQ7QUFHTEMsY0FBUSxJQUhIO0FBSUxDLFdBQUs7QUFKQSxLLFFBT1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFOzs7Ozs2QkFHRDtBQUNQO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixlQUFLQyxrQkFBTCxDQUF3QixTQUF4QixDQUFoQjtBQUNEOzs7O0VBNUJxQyxlQUFLQyxJOztrQkFBeEJuQixVIiwiZmlsZSI6ImZsZXhsYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcclxuICBpbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9wYW5lbCdcclxuICBpbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvdW50ZXInXHJcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xyXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGZsZXhsYXlvdXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGFibGV2aWV3J1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgcGFuZWw6IFBhbmVsLFxyXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcclxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXHJcbiAgICAgIGxpc3Q6IExpc3QsXHJcbiAgICAgIHRvYXN0OiBUb2FzdFxyXG4gICAgfVxyXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHBvc3RlcjogJ2h0dHA6Ly95Lmd0aW1nLmNuL211c2ljL3Bob3RvX25ldy9UMDAyUjMwMHgzMDBNMDAwMDAzcnNLRjQ0R3lhU2suanBnP21heF9hZ2U9MjU5MjAwMCcsXHJcbiAgICAgIG5hbWU6ICfmraTml7bmraTliLsnLFxyXG4gICAgICBhdXRob3I6ICforrjlt40nLFxyXG4gICAgICBzcmM6ICdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNkRDQkRDOUFCN0M0OUZENzEzRDYzMkQzMTNBQzQ4NThCQUNCOERERDI5MDY3RDNDNjAxNDgxRDM2RTYyMDUzQkY4REZFQUY3NEMwQTVDQ0ZBREQ2NDcxMTYwQ0FGM0U2QSZmcm9tdGFnPTQ2J1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIC8vIOS9v+eUqCB3eC5jcmVhdGVBdWRpb0NvbnRleHQg6I635Y+WIGF1ZGlvIOS4iuS4i+aWhyBjb250ZXh0XHJcbiAgICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=