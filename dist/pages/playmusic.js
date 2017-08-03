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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(playmusic , 'pages/playmusic'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXltdXNpYy5qcyJdLCJuYW1lcyI6WyJwbGF5bXVzaWMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJ0b2FzdCIsIm1peGlucyIsImRhdGEiLCJwb3N0ZXIiLCJuYW1lIiwiYXV0aG9yIiwic3JjIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImlucHV0Q2hhbmdlIiwiZSIsImNvbnRlbnQiLCJkZXRhaWwiLCJ2YWx1ZSIsImRpc2FibGVkIiwiYXVkaW9QbGF5IiwiYXVkaW9DdHgiLCJwbGF5IiwiYXVkaW9QYXVzZSIsInBhdXNlIiwiYXVkaW8xNCIsInNlZWsiLCJhdWRpb1N0YXJ0IiwiY3JlYXRlQXVkaW9Db250ZXh0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyw0QkFEVztBQUVYQyxpQ0FGVztBQUdYQyxpQ0FIVztBQUlYQywwQkFKVztBQUtYQztBQUxXLEssUUFPYkMsTSxHQUFTLGdCLFFBQ1RDLEksR0FBTztBQUNMQyxjQUFRLHNGQURIO0FBRUxDLFlBQU0sTUFGRDtBQUdMQyxjQUFRLElBSEg7QUFJTEMsV0FBSztBQUpBLEssUUFPUEMsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBTVhDLE8sR0FBVTtBQUNWOzs7OztBQUtFQyxpQkFOUSx1QkFNS0MsQ0FOTCxFQU1RO0FBQ2QsYUFBS0MsT0FBTCxHQUFlRCxFQUFFRSxNQUFGLENBQVNDLEtBQXhCO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQkosRUFBRUUsTUFBRixDQUFTQyxLQUFULEtBQW1CLEVBQW5DO0FBQ0E7QUFDRCxPQVZPOztBQVdSRSxpQkFBVyxxQkFBWTtBQUNyQixhQUFLQyxRQUFMLENBQWNDLElBQWQ7QUFDRCxPQWJPO0FBY1JDLGtCQUFZLHNCQUFZO0FBQ3RCLGFBQUtGLFFBQUwsQ0FBY0csS0FBZDtBQUNELE9BaEJPO0FBaUJSQyxlQUFTLG1CQUFZO0FBQ25CLGFBQUtKLFFBQUwsQ0FBY0ssSUFBZCxDQUFtQixFQUFuQjtBQUNELE9BbkJPO0FBb0JSQyxrQkFBWSxzQkFBWTtBQUN0QixhQUFLTixRQUFMLENBQWNLLElBQWQsQ0FBbUIsQ0FBbkI7QUFDRDtBQXRCTyxLOzs7Ozs2QkF5QkQ7QUFDUDtBQUNBLFdBQUtMLFFBQUwsR0FBZ0IsZUFBS08sa0JBQUwsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDRDs7OztFQXJEb0MsZUFBS0MsSTs7a0JBQXZCbEMsUyIsImZpbGUiOiJwbGF5bXVzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcclxuICBpbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9wYW5lbCdcclxuICBpbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvdW50ZXInXHJcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xyXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXltdXNpYyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0YWJsZXZpZXcnXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICBwYW5lbDogUGFuZWwsXHJcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxyXG4gICAgICBjb3VudGVyMjogQ291bnRlcixcclxuICAgICAgbGlzdDogTGlzdCxcclxuICAgICAgdG9hc3Q6IFRvYXN0XHJcbiAgICB9XHJcbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcG9zdGVyOiAnaHR0cDovL3kuZ3RpbWcuY24vbXVzaWMvcGhvdG9fbmV3L1QwMDJSMzAweDMwME0wMDAwMDNyc0tGNDRHeWFTay5qcGc/bWF4X2FnZT0yNTkyMDAwJyxcclxuICAgICAgbmFtZTogJ+atpOaXtuatpOWIuycsXHJcbiAgICAgIGF1dGhvcjogJ+iuuOW3jScsXHJcbiAgICAgIHNyYzogJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2RENCREM5QUI3QzQ5RkQ3MTNENjMyRDMxM0FDNDg1OEJBQ0I4REREMjkwNjdEM0M2MDE0ODFEMzZFNjIwNTNCRjhERkVBRjc0QzBBNUNDRkFERDY0NzExNjBDQUYzRTZBJmZyb210YWc9NDYnXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIG5vdyAoKSB7XHJcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgICog6L6T5YWl55uR5ZCs5ZmoXHJcbiAgICAgICog6Ieq5Yqo5pig5bCE5YiwIGNvbnRlbnRcclxuICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIOi+k+WFpeS6i+S7tlxyXG4gICAgICAqL1xyXG4gICAgICBpbnB1dENoYW5nZSAoZSkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGUuZGV0YWlsLnZhbHVlID09PSAnJ1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udGVudClcclxuICAgICAgfSxcclxuICAgICAgYXVkaW9QbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0N0eC5wbGF5KClcclxuICAgICAgfSxcclxuICAgICAgYXVkaW9QYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9DdHgucGF1c2UoKVxyXG4gICAgICB9LFxyXG4gICAgICBhdWRpbzE0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDE0KVxyXG4gICAgICB9LFxyXG4gICAgICBhdWRpb1N0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgLy8g5L2/55SoIHd4LmNyZWF0ZUF1ZGlvQ29udGV4dCDojrflj5YgYXVkaW8g5LiK5LiL5paHIGNvbnRleHRcclxuICAgICAgdGhpcy5hdWRpb0N0eCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KCdteUF1ZGlvJylcclxuICAgIH1cclxuICB9XHJcbiJdfQ==