'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

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

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tableview = (_temp2 = _class = function (_wepy$page) {
  _inherits(tableview, _wepy$page);

  function tableview() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, tableview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = tableview.__proto__ || Object.getPrototypeOf(tableview)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(tableview, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return tableview;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'tableview'
  };
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.version = _config.version;
  this.data = {
    mynum: 20,
    mypages: ['pages/index', 'pages/index'],
    contentlist: [{
      pagePath: 'index',
      imageicon: 'http://p1.qqyou.com/touxiang/UploadPic/2015-6/19/2015061914564960842.jpeg',
      text: 'button'
    }, {
      pagePath: 'tableview',
      imageicon: 'http://img.duoziwang.com/2016/12/08/18594927932.jpg',
      text: 'checkbox'
    }, {
      pagePath: 'index',
      imageicon: 'http://p1.qqyou.com/touxiang/UploadPic/2015-6/19/2015061914564960842.jpeg',
      text: 'button'
    }, {
      pagePath: 'tableview',
      imageicon: 'http://img.duoziwang.com/2016/12/08/18594927932.jpg',
      text: 'checkbox'
    }, {
      pagePath: 'index',
      imageicon: 'http://p1.qqyou.com/touxiang/UploadPic/2015-6/19/2015061914564960842.jpeg',
      text: 'button'
    }, {
      pagePath: 'tableview',
      imageicon: 'http://img.duoziwang.com/2016/12/08/18594927932.jpg',
      text: 'checkbox'
    }, {
      pagePath: 'index',
      imageicon: 'http://p1.qqyou.com/touxiang/UploadPic/2015-6/19/2015061914564960842.jpeg',
      text: 'button'
    }, {
      pagePath: 'tableview',
      imageicon: 'http://img.duoziwang.com/2016/12/08/18594927932.jpg',
      text: 'checkbox'
    }, {
      pagePath: 'index',
      imageicon: 'http://p1.qqyou.com/touxiang/UploadPic/2015-6/19/2015061914564960842.jpeg',
      text: 'button'
    }, {
      pagePath: 'tableview',
      imageicon: 'http://img.duoziwang.com/2016/12/08/18594927932.jpg',
      text: 'checkbox'
    }],
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
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
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    tapsomething: function tapsomething() {
      /*
      获取输入框的值
      */
      console.log(this.content);
      if (!this.content) {
        return;
      }
      _wepy2.default.hideToast();
      _wepy2.default.showModal({
        title: '专家回复',
        content: this.content,
        showCancel: false
      });

      _wepy2.default.request({
        url: 'https://localhost',
        success: function success(d) {
          console.log(d);
        }
      });
      console.log('answing a program');
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
}, _temp2);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tableview , 'pages/tableview'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxldmlldy5qcyJdLCJuYW1lcyI6WyJ0YWJsZXZpZXciLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJwYW5lbCIsImNvdW50ZXIxIiwiY291bnRlcjIiLCJsaXN0IiwidG9hc3QiLCJtaXhpbnMiLCJ2ZXJzaW9uIiwiZGF0YSIsIm15bnVtIiwibXlwYWdlcyIsImNvbnRlbnRsaXN0IiwicGFnZVBhdGgiLCJpbWFnZWljb24iLCJ0ZXh0Iiwibmlja05hbWUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImNoaWxkaWQiLCJjaGlsZG5hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwiaW5wdXRDaGFuZ2UiLCJlIiwiY29udGVudCIsImRldGFpbCIsInZhbHVlIiwiZGlzYWJsZWQiLCJwbHVzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwiY29uc29sZSIsImxvZyIsInRhcCIsIiRuYW1lIiwidGFwc29tZXRoaW5nIiwiaGlkZVRvYXN0Iiwic2hvd01vZGFsIiwic2hvd0NhbmNlbCIsInJlcXVlc3QiLCJ1cmwiLCJzdWNjZXNzIiwiY29tbXVuaWNhdGUiLCIkYnJvYWRjYXN0IiwiaSIsIm1hcCIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQStNVjtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNB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OztBQUN6QixVQUFJSCxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQWpCLGNBQVFDLEdBQVIsQ0FBZSxPQUFLRSxLQUFwQixpQkFBcUNhLE9BQU9wQyxJQUE1QyxjQUF5RG9DLE9BQU9FLE1BQVAsQ0FBY2YsS0FBdkU7QUFDRDtBQUpNLEc7O2tCQXhNVXZELFMiLCJmaWxlIjoidGFibGV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvcGFuZWwnXG4gIGltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY291bnRlcidcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICBpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhYmxldmlldyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3RhYmxldmlldydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cbiAgICB2ZXJzaW9uID0gdmVyc2lvblxuICAgIGRhdGEgPSB7XG4gICAgICBteW51bTogMjAsXG4gICAgICBteXBhZ2VzOiBbJ3BhZ2VzL2luZGV4JywgJ3BhZ2VzL2luZGV4J10sXG4gICAgICBjb250ZW50bGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdpbmRleCcsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL3AxLnFxeW91LmNvbS90b3V4aWFuZy9VcGxvYWRQaWMvMjAxNS02LzE5LzIwMTUwNjE5MTQ1NjQ5NjA4NDIuanBlZycsXG4gICAgICAgICAgdGV4dDogJ2J1dHRvbidcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAndGFibGV2aWV3JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vaW1nLmR1b3ppd2FuZy5jb20vMjAxNi8xMi8wOC8xODU5NDkyNzkzMi5qcGcnLFxuICAgICAgICAgIHRleHQ6ICdjaGVja2JveCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAnaW5kZXgnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9wMS5xcXlvdS5jb20vdG91eGlhbmcvVXBsb2FkUGljLzIwMTUtNi8xOS8yMDE1MDYxOTE0NTY0OTYwODQyLmpwZWcnLFxuICAgICAgICAgIHRleHQ6ICdidXR0b24nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3RhYmxldmlldycsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL2ltZy5kdW96aXdhbmcuY29tLzIwMTYvMTIvMDgvMTg1OTQ5Mjc5MzIuanBnJyxcbiAgICAgICAgICB0ZXh0OiAnY2hlY2tib3gnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ2luZGV4JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vcDEucXF5b3UuY29tL3RvdXhpYW5nL1VwbG9hZFBpYy8yMDE1LTYvMTkvMjAxNTA2MTkxNDU2NDk2MDg0Mi5qcGVnJyxcbiAgICAgICAgICB0ZXh0OiAnYnV0dG9uJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFnZVBhdGg6ICd0YWJsZXZpZXcnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9pbWcuZHVveml3YW5nLmNvbS8yMDE2LzEyLzA4LzE4NTk0OTI3OTMyLmpwZycsXG4gICAgICAgICAgdGV4dDogJ2NoZWNrYm94J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdpbmRleCcsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL3AxLnFxeW91LmNvbS90b3V4aWFuZy9VcGxvYWRQaWMvMjAxNS02LzE5LzIwMTUwNjE5MTQ1NjQ5NjA4NDIuanBlZycsXG4gICAgICAgICAgdGV4dDogJ2J1dHRvbidcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAndGFibGV2aWV3JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vaW1nLmR1b3ppd2FuZy5jb20vMjAxNi8xMi8wOC8xODU5NDkyNzkzMi5qcGcnLFxuICAgICAgICAgIHRleHQ6ICdjaGVja2JveCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAnaW5kZXgnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9wMS5xcXlvdS5jb20vdG91eGlhbmcvVXBsb2FkUGljLzIwMTUtNi8xOS8yMDE1MDYxOTE0NTY0OTYwODQyLmpwZWcnLFxuICAgICAgICAgIHRleHQ6ICdidXR0b24nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3RhYmxldmlldycsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL2ltZy5kdW96aXdhbmcuY29tLzIwMTYvMTIvMDgvMTg1OTQ5Mjc5MzIuanBnJyxcbiAgICAgICAgICB0ZXh0OiAnY2hlY2tib3gnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBuZXRyc3Q6ICcnLFxuICAgICAgZ3JvdXBMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzMuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgLyoqXG4gICAgICAqIOi+k+WFpeebkeWQrOWZqFxuICAgICAgKiDoh6rliqjmmKDlsITliLAgY29udGVudFxuICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIOi+k+WFpeS6i+S7tlxuICAgICAgKi9cbiAgICAgIGlucHV0Q2hhbmdlIChlKSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBlLmRldGFpbC52YWx1ZSA9PT0gJydcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb250ZW50KVxuICAgICAgfSxcbiAgICAgIHBsdXMgKCkge1xuICAgICAgICB0aGlzLm15bnVtKytcbiAgICAgIH0sXG4gICAgICB0b2FzdCAoKSB7XG4gICAgICAgIGxldCBwcm9taXNlID0gdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuICAgICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ5qCH6aKYJyxcbiAgICAgICAgICBpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnXG4gICAgICAgIH0pXG5cbiAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkbyBub3RpbmcgZnJvbSAnICsgdGhpcy4kbmFtZSlcbiAgICAgIH0sXG4gIFxuICAgICAgdGFwc29tZXRoaW5nICgpIHtcbiAgICAgICAgLypcbiAgICAgICAg6I635Y+W6L6T5YWl5qGG55qE5YC8XG4gICAgICAgICovXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudClcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+S4k+WutuWbnuWkjScsXG4gICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2xvY2FsaG9zdCcsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygnYW5zd2luZyBhIHByb2dyYW0nKVxuICAgICAgfSxcblxuICAgICAgY29tbXVuaWNhdGUgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNilcbiAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXG5cbiAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgICAgfSxcbiAgICAgIHJlcXVlc3QgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGkgPSAxMFxuICAgICAgICBsZXQgbWFwID0gWydNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09J11cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY291bnRlckVtaXQgKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICB9XG4gICAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xuXG4gICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSdcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfSwgMzAwMClcblxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19