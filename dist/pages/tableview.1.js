'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
exports.default = tableview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxldmlldy4xLmpzIl0sIm5hbWVzIjpbInRhYmxldmlldyIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwic2V0VGltZW91dCIsIiRhcHBseSIsInBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJ0b2FzdCIsIm1peGlucyIsInZlcnNpb24iLCJkYXRhIiwibXludW0iLCJteXBhZ2VzIiwiY29udGVudGxpc3QiLCJwYWdlUGF0aCIsImltYWdlaWNvbiIsInRleHQiLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJpbnB1dENoYW5nZSIsImUiLCJjb250ZW50IiwiZGV0YWlsIiwidmFsdWUiLCJkaXNhYmxlZCIsInBsdXMiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsImQiLCJjb25zb2xlIiwibG9nIiwidGFwIiwiJG5hbWUiLCJ0YXBzb21ldGhpbmciLCJoaWRlVG9hc3QiLCJzaG93TW9kYWwiLCJzaG93Q2FuY2VsIiwicmVxdWVzdCIsInVybCIsInN1Y2Nlc3MiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJpIiwibWFwIiwiY291bnRlckVtaXQiLCIkZXZlbnQiLCJsZW5ndGgiLCJzb3VyY2UiLCJldmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBK01WO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FB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QUE7O0FBQ3pCLFVBQUlILGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBakIsY0FBUUMsR0FBUixDQUFlLE9BQUtFLEtBQXBCLGlCQUFxQ2EsT0FBT3BDLElBQTVDLGNBQXlEb0MsT0FBT0UsTUFBUCxDQUFjZixLQUF2RTtBQUNEO0FBSk0sRzs7a0JBeE1VdkQsUyIsImZpbGUiOiJ0YWJsZXZpZXcuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnXG4gIGltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL3BhbmVsJ1xuICBpbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvdW50ZXInXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcbiAgaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL2NvbmZpZydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyB0YWJsZXZpZXcgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0YWJsZXZpZXcnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWwsXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgbGlzdDogTGlzdCxcbiAgICAgIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG4gICAgdmVyc2lvbiA9IHZlcnNpb25cbiAgICBkYXRhID0ge1xuICAgICAgbXludW06IDIwLFxuICAgICAgbXlwYWdlczogWydwYWdlcy9pbmRleCcsICdwYWdlcy9pbmRleCddLFxuICAgICAgY29udGVudGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAnaW5kZXgnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9wMS5xcXlvdS5jb20vdG91eGlhbmcvVXBsb2FkUGljLzIwMTUtNi8xOS8yMDE1MDYxOTE0NTY0OTYwODQyLmpwZWcnLFxuICAgICAgICAgIHRleHQ6ICdidXR0b24nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3RhYmxldmlldycsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL2ltZy5kdW96aXdhbmcuY29tLzIwMTYvMTIvMDgvMTg1OTQ5Mjc5MzIuanBnJyxcbiAgICAgICAgICB0ZXh0OiAnY2hlY2tib3gnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ2luZGV4JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vcDEucXF5b3UuY29tL3RvdXhpYW5nL1VwbG9hZFBpYy8yMDE1LTYvMTkvMjAxNTA2MTkxNDU2NDk2MDg0Mi5qcGVnJyxcbiAgICAgICAgICB0ZXh0OiAnYnV0dG9uJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFnZVBhdGg6ICd0YWJsZXZpZXcnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9pbWcuZHVveml3YW5nLmNvbS8yMDE2LzEyLzA4LzE4NTk0OTI3OTMyLmpwZycsXG4gICAgICAgICAgdGV4dDogJ2NoZWNrYm94J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdpbmRleCcsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL3AxLnFxeW91LmNvbS90b3V4aWFuZy9VcGxvYWRQaWMvMjAxNS02LzE5LzIwMTUwNjE5MTQ1NjQ5NjA4NDIuanBlZycsXG4gICAgICAgICAgdGV4dDogJ2J1dHRvbidcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAndGFibGV2aWV3JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vaW1nLmR1b3ppd2FuZy5jb20vMjAxNi8xMi8wOC8xODU5NDkyNzkzMi5qcGcnLFxuICAgICAgICAgIHRleHQ6ICdjaGVja2JveCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAnaW5kZXgnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9wMS5xcXlvdS5jb20vdG91eGlhbmcvVXBsb2FkUGljLzIwMTUtNi8xOS8yMDE1MDYxOTE0NTY0OTYwODQyLmpwZWcnLFxuICAgICAgICAgIHRleHQ6ICdidXR0b24nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3RhYmxldmlldycsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL2ltZy5kdW96aXdhbmcuY29tLzIwMTYvMTIvMDgvMTg1OTQ5Mjc5MzIuanBnJyxcbiAgICAgICAgICB0ZXh0OiAnY2hlY2tib3gnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ2luZGV4JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vcDEucXF5b3UuY29tL3RvdXhpYW5nL1VwbG9hZFBpYy8yMDE1LTYvMTkvMjAxNTA2MTkxNDU2NDk2MDg0Mi5qcGVnJyxcbiAgICAgICAgICB0ZXh0OiAnYnV0dG9uJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFnZVBhdGg6ICd0YWJsZXZpZXcnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9pbWcuZHVveml3YW5nLmNvbS8yMDE2LzEyLzA4LzE4NTk0OTI3OTMyLmpwZycsXG4gICAgICAgICAgdGV4dDogJ2NoZWNrYm94J1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9LFxuICAgICAgbm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxuICAgICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgbmV0cnN0OiAnJyxcbiAgICAgIGdyb3VwTGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4yJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4zJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMicsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIC8qKlxuICAgICAgKiDovpPlhaXnm5HlkKzlmahcbiAgICAgICog6Ieq5Yqo5pig5bCE5YiwIGNvbnRlbnRcbiAgICAgICogQHBhcmFtIHtFdmVudH0gZSDovpPlhaXkuovku7ZcbiAgICAgICovXG4gICAgICBpbnB1dENoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZS5kZXRhaWwudmFsdWUgPT09ICcnXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udGVudClcbiAgICAgIH0sXG4gICAgICBwbHVzICgpIHtcbiAgICAgICAgdGhpcy5teW51bSsrXG4gICAgICB9LFxuICAgICAgdG9hc3QgKCkge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJylcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0YXAgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXG4gICAgICB9LFxuICBcbiAgICAgIHRhcHNvbWV0aGluZyAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgIOiOt+WPlui+k+WFpeahhueahOWAvFxuICAgICAgICAqL1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpXG4gICAgICAgIGlmICghdGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfkuJPlrrblm57lpI0nLFxuICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9sb2NhbGhvc3QnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2Fuc3dpbmcgYSBwcm9ncmFtJylcbiAgICAgIH0sXG5cbiAgICAgIGNvbW11bmljYXRlICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcblxuICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjEnLCAncGx1cycsIDQ1LCA2KVxuXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnaW5kZXgtYnJvYWRjYXN0JywgMSwgMywgNClcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0ICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBpID0gMTBcbiAgICAgICAgbGV0IG1hcCA9IFsnTUE9PScsICdNUW89JywgJ01nPT0nLCAnTXc9PScsICdOQT09JywgJ05RPT0nLCAnTmc9PScsICdOdz09JywgJ09BPT0nLCAnT1E9PSddXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubWFkY29kZXIuY24vdGVzdHMvc2xlZXAucGhwP3RpbWU9MSZ0PWNzcyZjPScgKyBtYXBbaV0gKyAnJmk9JyArIGksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICBzZWxmLm5ldHJzdCArPSBkLmRhdGEgKyAnLidcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNvdW50ZXJFbWl0ICguLi5hcmdzKSB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZXZlbnRzID0ge1xuICAgICAgJ2luZGV4LWVtaXQnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgfVxuICAgICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcblxuICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hidcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH0sIDMwMDApXG5cbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==