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

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
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

  return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: '专家回复'
  };
  this.$props = { "group": { "v-bind:grouplist.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" }, "v-bind:indexa.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" } }, "counter1": { "bindindex-emit": "counterEmit" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
  this.$events = {};
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    contentlist: [{
      pagePath: 'tableview',
      imageicon: 'http://p1.qqyou.com/touxiang/UploadPic/2015-6/19/2015061914564960842.jpeg',
      text: 'tableview'
    }, {
      pagePath: 'playmusic',
      imageicon: 'http://img.duoziwang.com/2016/12/08/18594927932.jpg',
      text: 'playMusic'
    }, {
      pagePath: 'flexlayout',
      imageicon: 'http://p1.qqyou.com/touxiang/UploadPic/2015-6/19/2015061914564960842.jpeg',
      text: 'flexlayout'
    }, {
      pagePath: 'question',
      imageicon: 'http://img.duoziwang.com/2016/12/08/18594927932.jpg',
      text: 'question'
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

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJncm91cCIsInRvYXN0IiwibWl4aW5zIiwiZGF0YSIsIm15bnVtIiwiY29udGVudGxpc3QiLCJwYWdlUGF0aCIsImltYWdlaWNvbiIsInRleHQiLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJpbnB1dENoYW5nZSIsImUiLCJjb250ZW50IiwiZGV0YWlsIiwidmFsdWUiLCJkaXNhYmxlZCIsInBsdXMiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsImQiLCJjb25zb2xlIiwibG9nIiwidGFwIiwiJG5hbWUiLCJ0YXBzb21ldGhpbmciLCJoaWRlVG9hc3QiLCJzaG93TW9kYWwiLCJzaG93Q2FuY2VsIiwicmVxdWVzdCIsInVybCIsInN1Y2Nlc3MiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJpIiwibWFwIiwiY291bnRlckVtaXQiLCIkZXZlbnQiLCJsZW5ndGgiLCJzb3VyY2UiLCJldmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFpTlY7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFD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QUFLNkIsTUFBTCxJQUFlc0IsRUFBRTlCLElBQUYsR0FBUyxHQUF4QjtBQUNBckIsaUJBQUtPLE1BQUw7QUFDRDtBQUxVLFNBQWI7QUFPRDtBQUNGLEtBekVPO0FBMkVSNEQsZUEzRVEseUJBMkVjO0FBQUE7O0FBQ3BCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBakIsY0FBUUMsR0FBUixDQUFlLEtBQUtFLEtBQXBCLGlCQUFxQ2EsT0FBT3BDLElBQTVDLGNBQXlEb0MsT0FBT0UsTUFBUCxDQUFjZixLQUF2RTtBQUNEO0FBOUVPLEc7T0FpRlZnQixNLEdBQVM7QUFDUCxrQkFBYyxxQkFBYTtBQUFBOztBQUN6QixVQUFJSCxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQWpCLGNBQVFDLEdBQVIsQ0FBZSxPQUFLRSxLQUFwQixpQkFBcUNhLE9BQU9wQyxJQUE1QyxjQUF5RG9DLE9BQU9FLE1BQVAsQ0FBY2YsS0FBdkU7QUFDRDtBQUpNLEc7O2tCQTFNVXhELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcclxuICBpbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9wYW5lbCdcclxuICBpbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvdW50ZXInXHJcbiAgaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXHJcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xyXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4k+WutuWbnuWkjSdcclxuICAgIH1cclxuICAgJHByb3BzID0ge1wiZ3JvdXBcIjp7XCJ2LWJpbmQ6Z3JvdXBsaXN0Lm9uY2VcIjp7XCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9LFwidi1iaW5kOmluZGV4YS5vbmNlXCI6e1wiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpbmRleFwifX0sXCJjb3VudGVyMVwiOntcImJpbmRpbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifSxcImNvdW50ZXIyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwibXludW1cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBwYW5lbDogUGFuZWwsXHJcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxyXG4gICAgICBjb3VudGVyMjogQ291bnRlcixcclxuICAgICAgbGlzdDogTGlzdCxcclxuICAgICAgZ3JvdXA6IEdyb3VwLFxyXG4gICAgICB0b2FzdDogVG9hc3RcclxuICAgIH1cclxuXHJcbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG15bnVtOiAyMCxcclxuICAgICAgY29udGVudGxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogJ3RhYmxldmlldycsXHJcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vcDEucXF5b3UuY29tL3RvdXhpYW5nL1VwbG9hZFBpYy8yMDE1LTYvMTkvMjAxNTA2MTkxNDU2NDk2MDg0Mi5qcGVnJyxcclxuICAgICAgICAgIHRleHQ6ICd0YWJsZXZpZXcnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdwbGF5bXVzaWMnLFxyXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL2ltZy5kdW96aXdhbmcuY29tLzIwMTYvMTIvMDgvMTg1OTQ5Mjc5MzIuanBnJyxcclxuICAgICAgICAgIHRleHQ6ICdwbGF5TXVzaWMnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdmbGV4bGF5b3V0JyxcclxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9wMS5xcXlvdS5jb20vdG91eGlhbmcvVXBsb2FkUGljLzIwMTUtNi8xOS8yMDE1MDYxOTE0NTY0OTYwODQyLmpwZWcnLFxyXG4gICAgICAgICAgdGV4dDogJ2ZsZXhsYXlvdXQnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdxdWVzdGlvbicsXHJcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vaW1nLmR1b3ppd2FuZy5jb20vMjAxNi8xMi8wOC8xODU5NDkyNzkzMi5qcGcnLFxyXG4gICAgICAgICAgdGV4dDogJ3F1ZXN0aW9uJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiAnaW5kZXgnLFxyXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL3AxLnFxeW91LmNvbS90b3V4aWFuZy9VcGxvYWRQaWMvMjAxNS02LzE5LzIwMTUwNjE5MTQ1NjQ5NjA4NDIuanBlZycsXHJcbiAgICAgICAgICB0ZXh0OiAnYnV0dG9uJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiAndGFibGV2aWV3JyxcclxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9pbWcuZHVveml3YW5nLmNvbS8yMDE2LzEyLzA4LzE4NTk0OTI3OTMyLmpwZycsXHJcbiAgICAgICAgICB0ZXh0OiAnY2hlY2tib3gnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdpbmRleCcsXHJcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vcDEucXF5b3UuY29tL3RvdXhpYW5nL1VwbG9hZFBpYy8yMDE1LTYvMTkvMjAxNTA2MTkxNDU2NDk2MDg0Mi5qcGVnJyxcclxuICAgICAgICAgIHRleHQ6ICdidXR0b24nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICd0YWJsZXZpZXcnLFxyXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL2ltZy5kdW96aXdhbmcuY29tLzIwMTYvMTIvMDgvMTg1OTQ5Mjc5MzIuanBnJyxcclxuICAgICAgICAgIHRleHQ6ICdjaGVja2JveCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogJ2luZGV4JyxcclxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9wMS5xcXlvdS5jb20vdG91eGlhbmcvVXBsb2FkUGljLzIwMTUtNi8xOS8yMDE1MDYxOTE0NTY0OTYwODQyLmpwZWcnLFxyXG4gICAgICAgICAgdGV4dDogJ2J1dHRvbidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogJ3RhYmxldmlldycsXHJcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vaW1nLmR1b3ppd2FuZy5jb20vMjAxNi8xMi8wOC8xODU5NDkyNzkzMi5qcGcnLFxyXG4gICAgICAgICAgdGV4dDogJ2NoZWNrYm94J1xyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgdXNlckluZm86IHtcclxuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcclxuICAgICAgfSxcclxuICAgICAgbm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxyXG4gICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgbmV0cnN0OiAnJyxcclxuICAgICAgZ3JvdXBMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjEnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjInLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjMnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBub3cgKCkge1xyXG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICAqIOi+k+WFpeebkeWQrOWZqFxyXG4gICAgICAqIOiHquWKqOaYoOWwhOWIsCBjb250ZW50XHJcbiAgICAgICogQHBhcmFtIHtFdmVudH0gZSDovpPlhaXkuovku7ZcclxuICAgICAgKi9cclxuICAgICAgaW5wdXRDaGFuZ2UgKGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBlLmRldGFpbC52YWx1ZSA9PT0gJydcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdXMgKCkge1xyXG4gICAgICAgIHRoaXMubXludW0rK1xyXG4gICAgICB9LFxyXG4gICAgICB0b2FzdCAoKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XHJcbiAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXHJcbiAgICAgICAgICBpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndG9hc3QgZG9uZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdGFwICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXHJcbiAgICAgIH0sXHJcbiAgXHJcbiAgICAgIHRhcHNvbWV0aGluZyAoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICDojrflj5bovpPlhaXmoYbnmoTlgLxcclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudClcclxuICAgICAgICBpZiAoIXRoaXMuY29udGVudCkge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdlcHkuaGlkZVRvYXN0KClcclxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+S4k+WutuWbnuWkjScsXHJcbiAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL2xvY2FsaG9zdCcsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Fuc3dpbmcgYSBwcm9ncmFtJylcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGNvbW11bmljYXRlICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxyXG5cclxuICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXHJcblxyXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnaW5kZXgtYnJvYWRjYXN0JywgMSwgMywgNClcclxuICAgICAgfSxcclxuICAgICAgcmVxdWVzdCAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgbGV0IGkgPSAxMFxyXG4gICAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXVxyXG4gICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz0nICsgbWFwW2ldICsgJyZpPScgKyBpLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xyXG4gICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBjb3VudGVyRW1pdCAoLi4uYXJncykge1xyXG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgJ2luZGV4LWVtaXQnOiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAodXNlckluZm8pIHtcclxuICAgICAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcclxuXHJcbiAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgIH0sIDMwMDApXHJcblxyXG4gICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==