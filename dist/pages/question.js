'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var question = function (_wepy$page) {
  _inherits(question, _wepy$page);

  function question() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, question);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = question.__proto__ || Object.getPrototypeOf(question)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '向专家提问'
    }, _this.data = {
      openid: '123',
      user_id: '1'
    }, _this.computed = {}, _this.methods = {
      /**
       * 输入监听器
       * 自动映射到 content
       * @param {Event} e 输入事件
       */
      inputChange: function inputChange(e) {
        this.content = e.detail.value;
        this.disabled = e.detail.value === '';
      },
      send: function send() {
        var _this2 = this;

        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var api, params, payapi, payparams;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log(_this2.data.openid);
                  console.log(_this2.content);
                  console.log(_this2.data.user_id);
                  api = '/wxsmall/pushqusetiontomaster';
                  params = { 'openid': _this2.data.openid, 'question': _this2.content, 'user_id': _this2.data.user_id };
                  payapi = '/paymentqr/wxsmallpay';
                  payparams = { 'openid': _this2.openid };

                  _request2.default.POST(payapi, payparams, function (res) {
                    if (res.statusCode === 200) {
                      var data = JSON.parse(res.data);
                      console.log(data);
                      _wepy2.default.requestPayment({
                        'timeStamp': data.timeStamp,
                        'nonceStr': data.nonceStr,
                        'package': data.package,
                        'signType': data.signType,
                        'paySign': data.paySign,
                        'success': function success(res) {
                          _request2.default.POST(api, params, function (res) {
                            console.log(res);
                            if (res.data.code !== 200) {} else {
                              _wepy2.default.navigateTo({
                                url: 'success?user_id=1'
                              });
                            }
                          });
                        },
                        'fail': function fail(res) {
                          console.log('取消支付');
                        }
                      });
                    } else {}
                  });

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(question, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;
      _wepy2.default.login({
        success: function success(res) {
          console.log('Onload');
          var api = '/wxsmall/dailonglogin';
          var params = { 'code': res.code };
          _request2.default.POST(api, params, function (res2) {
            console.log(res2.data.data);
            if (res2.data.code !== 200) {} else {
              console.log('set openid value');
              _wepy2.default.setStorage({
                key: 'openid',
                data: res2.data.data
              });
              console.log('get openid value');
              _wepy2.default.getStorage({
                key: 'openid',
                success: function success(res) {
                  console.log(res.data);
                  self.openid = res.data;
                }
              });
            }
          });
        }
      });
      console.log(options.user_id);
      if (options.user_id) {
        console.log(options.user_id);
        self.user_id = options.user_id;
      } else {
        self.user_id = 2;
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      console.log('OnShow');
    }
  }]);

  return question;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(question , 'pages/question'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLmpzIl0sIm5hbWVzIjpbInF1ZXN0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJvcGVuaWQiLCJ1c2VyX2lkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaW5wdXRDaGFuZ2UiLCJlIiwiY29udGVudCIsImRldGFpbCIsInZhbHVlIiwiZGlzYWJsZWQiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsImFwaSIsInBhcmFtcyIsInBheWFwaSIsInBheXBhcmFtcyIsIlBPU1QiLCJyZXMiLCJzdGF0dXNDb2RlIiwiSlNPTiIsInBhcnNlIiwicmVxdWVzdFBheW1lbnQiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJzaWduVHlwZSIsInBheVNpZ24iLCJjb2RlIiwibmF2aWdhdGVUbyIsInVybCIsIm9wdGlvbnMiLCJzZWxmIiwibG9naW4iLCJzdWNjZXNzIiwicmVzMiIsInNldFN0b3JhZ2UiLCJrZXkiLCJnZXRTdG9yYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLEtBREg7QUFFTEMsZUFBUztBQUZKLEssUUFJUEMsUSxHQUFXLEUsUUFDWEMsTyxHQUFVO0FBQ1Y7Ozs7O0FBS0VDLGlCQU5RLHVCQU1LQyxDQU5MLEVBTVE7QUFDZCxhQUFLQyxPQUFMLEdBQWVELEVBQUVFLE1BQUYsQ0FBU0MsS0FBeEI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCSixFQUFFRSxNQUFGLENBQVNDLEtBQVQsS0FBbUIsRUFBbkM7QUFDRCxPQVRPO0FBVUZFLFVBVkUsa0JBVU07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWkMsMEJBQVFDLEdBQVIsQ0FBWSxPQUFLYixJQUFMLENBQVVDLE1B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QUFSLENBQVltQixRQUFROUIsT0FBcEI7QUFDQSxVQUFJOEIsUUFBUTlCLE9BQVosRUFBcUI7QUFDbkJVLGdCQUFRQyxHQUFSLENBQVltQixRQUFROUIsT0FBcEI7QUFDQStCLGFBQUsvQixPQUFMLEdBQWU4QixRQUFROUIsT0FBdkI7QUFDRCxPQUhELE1BR087QUFDTCtCLGFBQUsvQixPQUFMLEdBQWUsQ0FBZjtBQUNEO0FBQ0Y7Ozs2QkFDUTtBQUNQVSxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBL0ZtQyxlQUFLMkIsSTs7a0JBQXRCM0MsUSIsImZpbGUiOiJxdWVzdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHJlcXVlc3RTZXJ2ZXIgZnJvbSAnLi4vcmVxdWVzdC5qcydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBxdWVzdGlvbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflkJHkuJPlrrbmj5Dpl64nXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBvcGVuaWQ6ICcxMjMnLFxyXG4gICAgICB1c2VyX2lkOiAnMSdcclxuICAgIH1cclxuICAgIGNvbXB1dGVkID0ge31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIOi+k+WFpeebkeWQrOWZqFxyXG4gICAgICog6Ieq5Yqo5pig5bCE5YiwIGNvbnRlbnRcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUg6L6T5YWl5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgICAgaW5wdXRDaGFuZ2UgKGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBlLmRldGFpbC52YWx1ZSA9PT0gJydcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc2VuZCAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLm9wZW5pZClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLnVzZXJfaWQpXHJcbiAgICAgICAgdmFyIGFwaSA9ICcvd3hzbWFsbC9wdXNocXVzZXRpb250b21hc3RlcidcclxuICAgICAgICB2YXIgcGFyYW1zID0geydvcGVuaWQnOiB0aGlzLmRhdGEub3BlbmlkLCAncXVlc3Rpb24nOiB0aGlzLmNvbnRlbnQsICd1c2VyX2lkJzogdGhpcy5kYXRhLnVzZXJfaWR9XHJcbiAgICAgICAgdmFyIHBheWFwaSA9ICcvcGF5bWVudHFyL3d4c21hbGxwYXknXHJcbiAgICAgICAgdmFyIHBheXBhcmFtcyA9IHsnb3BlbmlkJzogdGhpcy5vcGVuaWR9XHJcbiAgICAgICAgcmVxdWVzdFNlcnZlci5QT1NUKHBheWFwaSwgcGF5cGFyYW1zLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgd2VweS5yZXF1ZXN0UGF5bWVudCh7XHJcbiAgICAgICAgICAgICAgJ3RpbWVTdGFtcCc6IGRhdGEudGltZVN0YW1wLFxyXG4gICAgICAgICAgICAgICdub25jZVN0cic6IGRhdGEubm9uY2VTdHIsXHJcbiAgICAgICAgICAgICAgJ3BhY2thZ2UnOiBkYXRhLnBhY2thZ2UsXHJcbiAgICAgICAgICAgICAgJ3NpZ25UeXBlJzogZGF0YS5zaWduVHlwZSxcclxuICAgICAgICAgICAgICAncGF5U2lnbic6IGRhdGEucGF5U2lnbixcclxuICAgICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFNlcnZlci5QT1NUKGFwaSwgcGFyYW1zLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogJ3N1Y2Nlc3M/dXNlcl9pZD0xJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAnZmFpbCc6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iOaUr+S7mCcpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgd2VweS5sb2dpbih7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnT25sb2FkJylcclxuICAgICAgICAgIHZhciBhcGkgPSAnL3d4c21hbGwvZGFpbG9uZ2xvZ2luJ1xyXG4gICAgICAgICAgdmFyIHBhcmFtcyA9IHsnY29kZSc6IHJlcy5jb2RlfVxyXG4gICAgICAgICAgcmVxdWVzdFNlcnZlci5QT1NUKGFwaSwgcGFyYW1zLCBmdW5jdGlvbihyZXMyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlczIuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICBpZiAocmVzMi5kYXRhLmNvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgb3BlbmlkIHZhbHVlJylcclxuICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnb3BlbmlkJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlczIuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IG9wZW5pZCB2YWx1ZScpXHJcbiAgICAgICAgICAgICAgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ29wZW5pZCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgIHNlbGYub3BlbmlkID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2cob3B0aW9ucy51c2VyX2lkKVxyXG4gICAgICBpZiAob3B0aW9ucy51c2VyX2lkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucy51c2VyX2lkKVxyXG4gICAgICAgIHNlbGYudXNlcl9pZCA9IG9wdGlvbnMudXNlcl9pZFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYudXNlcl9pZCA9IDJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnT25TaG93JylcclxuICAgIH1cclxuICB9XHJcbiJdfQ==