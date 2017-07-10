'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var playmusic = function (_wepy$page) {
  _inherits(playmusic, _wepy$page);

  function playmusic() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, playmusic);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = playmusic.__proto__ || Object.getPrototypeOf(playmusic)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
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
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      /**
        * 输入监听器
        * 自动映射到 content
        * @param {Event} e 输入事件
        */
      inputChange: function inputChange(e) {
        this.content = e.detail.value;
        this.disabled = e.detail.value === '';
        // console.log(this.content)
      },

      audioPlay: function audioPlay() {
        this.audioCtx.play();
      },
      audioPause: function audioPause() {
        this.audioCtx.pause();
      },
      audio14: function audio14() {
        this.audioCtx.seek(14);
      },
      audioStart: function audioStart() {
        this.audioCtx.seek(0);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(playmusic, [{
    key: 'onLoad',
    value: function onLoad() {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }]);

  return playmusic;
}(_wepy2.default.page);

exports.default = playmusic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXltdXNpYy4xLmpzIl0sIm5hbWVzIjpbInBsYXltdXNpYyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwicGFuZWwiLCJjb3VudGVyMSIsImNvdW50ZXIyIiwibGlzdCIsInRvYXN0IiwibWl4aW5zIiwiZGF0YSIsInBvc3RlciIsIm5hbWUiLCJhdXRob3IiLCJzcmMiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwiaW5wdXRDaGFuZ2UiLCJlIiwiY29udGVudCIsImRldGFpbCIsInZhbHVlIiwiZGlzYWJsZWQiLCJhdWRpb1BsYXkiLCJhdWRpb0N0eCIsInBsYXkiLCJhdWRpb1BhdXNlIiwicGF1c2UiLCJhdWRpbzE0Iiwic2VlayIsImF1ZGlvU3RhcnQiLCJjcmVhdGVBdWRpb0NvbnRleHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDLDRCQURXO0FBRVhDLGlDQUZXO0FBR1hDLGlDQUhXO0FBSVhDLDBCQUpXO0FBS1hDO0FBTFcsSyxRQU9iQyxNLEdBQVMsZ0IsUUFDVEMsSSxHQUFPO0FBQ0xDLGNBQVEsc0ZBREg7QUFFTEMsWUFBTSxNQUZEO0FBR0xDLGNBQVEsSUFISDtBQUlMQyxXQUFLO0FBSkEsSyxRQU9QQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVO0FBQ1Y7Ozs7O0FBS0VDLGlCQU5RLHVCQU1LQyxDQU5MLEVBTVE7QUFDZCxhQUFLQyxPQUFMLEdBQWVELEVBQUVFLE1BQUYsQ0FBU0MsS0FBeEI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCSixFQUFFRSxNQUFGLENBQVNDLEtBQVQsS0FBbUIsRUFBbkM7QUFDQTtBQUNELE9BVk87O0FBV1JFLGlCQUFXLHFCQUFZO0FBQ3JCLGFBQUtDLFFBQUwsQ0FBY0MsSUFBZDtBQUNELE9BYk87QUFjUkMsa0JBQVksc0JBQVk7QUFDdEIsYUFBS0YsUUFBTCxDQUFjRyxLQUFkO0FBQ0QsT0FoQk87QUFpQlJDLGVBQVMsbUJBQVk7QUFDbkIsYUFBS0osUUFBTCxDQUFjSyxJQUFkLENBQW1CLEVBQW5CO0FBQ0QsT0FuQk87QUFvQlJDLGtCQUFZLHNCQUFZO0FBQ3RCLGFBQUtOLFFBQUwsQ0FBY0ssSUFBZCxDQUFtQixDQUFuQjtBQUNEO0FBdEJPLEs7Ozs7OzZCQXlCRDtBQUNQO0FBQ0EsV0FBS0wsUUFBTCxHQUFnQixlQUFLTyxrQkFBTCxDQUF3QixTQUF4QixDQUFoQjtBQUNEOzs7O0VBckRvQyxlQUFLQyxJOztrQkFBdkJsQyxTIiwiZmlsZSI6InBsYXltdXNpYy4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvcGFuZWwnXG4gIGltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY291bnRlcidcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXltdXNpYyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3RhYmxldmlldydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG4gICAgZGF0YSA9IHtcbiAgICAgIHBvc3RlcjogJ2h0dHA6Ly95Lmd0aW1nLmNuL211c2ljL3Bob3RvX25ldy9UMDAyUjMwMHgzMDBNMDAwMDAzcnNLRjQ0R3lhU2suanBnP21heF9hZ2U9MjU5MjAwMCcsXG4gICAgICBuYW1lOiAn5q2k5pe25q2k5Yi7JyxcbiAgICAgIGF1dGhvcjogJ+iuuOW3jScsXG4gICAgICBzcmM6ICdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNkRDQkRDOUFCN0M0OUZENzEzRDYzMkQzMTNBQzQ4NThCQUNCOERERDI5MDY3RDNDNjAxNDgxRDM2RTYyMDUzQkY4REZFQUY3NEMwQTVDQ0ZBREQ2NDcxMTYwQ0FGM0U2QSZmcm9tdGFnPTQ2J1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAvKipcbiAgICAgICog6L6T5YWl55uR5ZCs5ZmoXG4gICAgICAqIOiHquWKqOaYoOWwhOWIsCBjb250ZW50XG4gICAgICAqIEBwYXJhbSB7RXZlbnR9IGUg6L6T5YWl5LqL5Lu2XG4gICAgICAqL1xuICAgICAgaW5wdXRDaGFuZ2UgKGUpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGUuZGV0YWlsLnZhbHVlID09PSAnJ1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpXG4gICAgICB9LFxuICAgICAgYXVkaW9QbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9DdHgucGxheSgpXG4gICAgICB9LFxuICAgICAgYXVkaW9QYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKClcbiAgICAgIH0sXG4gICAgICBhdWRpbzE0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygxNClcbiAgICAgIH0sXG4gICAgICBhdWRpb1N0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygwKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgb25Mb2FkKCkge1xuICAgICAgLy8g5L2/55SoIHd4LmNyZWF0ZUF1ZGlvQ29udGV4dCDojrflj5YgYXVkaW8g5LiK5LiL5paHIGNvbnRleHRcbiAgICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gICAgfVxuICB9XG4iXX0=