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

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJncm91cCIsInRvYXN0IiwibWl4aW5zIiwiZGF0YSIsIm15bnVtIiwiY29udGVudGxpc3QiLCJwYWdlUGF0aCIsImltYWdlaWNvbiIsInRleHQiLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJpbnB1dENoYW5nZSIsImUiLCJjb250ZW50IiwiZGV0YWlsIiwidmFsdWUiLCJkaXNhYmxlZCIsInBsdXMiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsImQiLCJjb25zb2xlIiwibG9nIiwidGFwIiwiJG5hbWUiLCJ0YXBzb21ldGhpbmciLCJoaWRlVG9hc3QiLCJzaG93TW9kYWwiLCJzaG93Q2FuY2VsIiwicmVxdWVzdCIsInVybCIsInN1Y2Nlc3MiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJpIiwibWFwIiwiY291bnRlckVtaXQiLCIkZXZlbnQiLCJsZW5ndGgiLCJzb3VyY2UiLCJldmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFpTlY7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFD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QUFLNkIsTUFBTCxJQUFlc0IsRUFBRTlCLElBQUYsR0FBUyxHQUF4QjtBQUNBckIsaUJBQUtPLE1BQUw7QUFDRDtBQUxVLFNBQWI7QUFPRDtBQUNGLEtBekVPO0FBMkVSNEQsZUEzRVEseUJBMkVjO0FBQUE7O0FBQ3BCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBakIsY0FBUUMsR0FBUixDQUFlLEtBQUtFLEtBQXBCLGlCQUFxQ2EsT0FBT3BDLElBQTVDLGNBQXlEb0MsT0FBT0UsTUFBUCxDQUFjZixLQUF2RTtBQUNEO0FBOUVPLEc7T0FpRlZnQixNLEdBQVM7QUFDUCxrQkFBYyxxQkFBYTtBQUFBOztBQUN6QixVQUFJSCxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQWpCLGNBQVFDLEdBQVIsQ0FBZSxPQUFLRSxLQUFwQixpQkFBcUNhLE9BQU9wQyxJQUE1QyxjQUF5RG9DLE9BQU9FLE1BQVAsQ0FBY2YsS0FBdkU7QUFDRDtBQUpNLEc7O2tCQTFNVXhELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuICBpbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9wYW5lbCdcbiAgaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb3VudGVyJ1xuICBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiT5a625Zue5aSNJ1xuICAgIH1cbiAgICRwcm9wcyA9IHtcImdyb3VwXCI6e1widi1iaW5kOmdyb3VwbGlzdC5vbmNlXCI6e1wiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpbmRleFwifSxcInYtYmluZDppbmRleGEub25jZVwiOntcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn19LFwiY291bnRlcjFcIjp7XCJiaW5kaW5kZXgtZW1pdFwiOlwiY291bnRlckVtaXRcIn0sXCJjb3VudGVyMlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnVtLnN5bmNcIjpcIm15bnVtXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBteW51bTogMjAsXG4gICAgICBjb250ZW50bGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICd0YWJsZXZpZXcnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9wMS5xcXlvdS5jb20vdG91eGlhbmcvVXBsb2FkUGljLzIwMTUtNi8xOS8yMDE1MDYxOTE0NTY0OTYwODQyLmpwZWcnLFxuICAgICAgICAgIHRleHQ6ICd0YWJsZXZpZXcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BsYXltdXNpYycsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL2ltZy5kdW96aXdhbmcuY29tLzIwMTYvMTIvMDgvMTg1OTQ5Mjc5MzIuanBnJyxcbiAgICAgICAgICB0ZXh0OiAncGxheU11c2ljJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdmbGV4bGF5b3V0JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vcDEucXF5b3UuY29tL3RvdXhpYW5nL1VwbG9hZFBpYy8yMDE1LTYvMTkvMjAxNTA2MTkxNDU2NDk2MDg0Mi5qcGVnJyxcbiAgICAgICAgICB0ZXh0OiAnZmxleGxheW91dCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAndGFibGV2aWV3JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vaW1nLmR1b3ppd2FuZy5jb20vMjAxNi8xMi8wOC8xODU5NDkyNzkzMi5qcGcnLFxuICAgICAgICAgIHRleHQ6ICdjaGVja2JveCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAnaW5kZXgnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9wMS5xcXlvdS5jb20vdG91eGlhbmcvVXBsb2FkUGljLzIwMTUtNi8xOS8yMDE1MDYxOTE0NTY0OTYwODQyLmpwZWcnLFxuICAgICAgICAgIHRleHQ6ICdidXR0b24nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3RhYmxldmlldycsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL2ltZy5kdW96aXdhbmcuY29tLzIwMTYvMTIvMDgvMTg1OTQ5Mjc5MzIuanBnJyxcbiAgICAgICAgICB0ZXh0OiAnY2hlY2tib3gnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ2luZGV4JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vcDEucXF5b3UuY29tL3RvdXhpYW5nL1VwbG9hZFBpYy8yMDE1LTYvMTkvMjAxNTA2MTkxNDU2NDk2MDg0Mi5qcGVnJyxcbiAgICAgICAgICB0ZXh0OiAnYnV0dG9uJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFnZVBhdGg6ICd0YWJsZXZpZXcnLFxuICAgICAgICAgIGltYWdlaWNvbjogJ2h0dHA6Ly9pbWcuZHVveml3YW5nLmNvbS8yMDE2LzEyLzA4LzE4NTk0OTI3OTMyLmpwZycsXG4gICAgICAgICAgdGV4dDogJ2NoZWNrYm94J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdpbmRleCcsXG4gICAgICAgICAgaW1hZ2VpY29uOiAnaHR0cDovL3AxLnFxeW91LmNvbS90b3V4aWFuZy9VcGxvYWRQaWMvMjAxNS02LzE5LzIwMTUwNjE5MTQ1NjQ5NjA4NDIuanBlZycsXG4gICAgICAgICAgdGV4dDogJ2J1dHRvbidcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAndGFibGV2aWV3JyxcbiAgICAgICAgICBpbWFnZWljb246ICdodHRwOi8vaW1nLmR1b3ppd2FuZy5jb20vMjAxNi8xMi8wOC8xODU5NDkyNzkzMi5qcGcnLFxuICAgICAgICAgIHRleHQ6ICdjaGVja2JveCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgICAgfSxcbiAgICAgIG5vcm1hbFRpdGxlOiAn5Y6f5aeL5qCH6aKYJyxcbiAgICAgIHNldFRpbWVvdXRUaXRsZTogJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuScsXG4gICAgICBjb3VudDogMCxcbiAgICAgIG5ldHJzdDogJycsXG4gICAgICBncm91cExpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMicsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMycsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjInLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjMnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMy4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAvKipcbiAgICAgICog6L6T5YWl55uR5ZCs5ZmoXG4gICAgICAqIOiHquWKqOaYoOWwhOWIsCBjb250ZW50XG4gICAgICAqIEBwYXJhbSB7RXZlbnR9IGUg6L6T5YWl5LqL5Lu2XG4gICAgICAqL1xuICAgICAgaW5wdXRDaGFuZ2UgKGUpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGUuZGV0YWlsLnZhbHVlID09PSAnJ1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpXG4gICAgICB9LFxuICAgICAgcGx1cyAoKSB7XG4gICAgICAgIHRoaXMubXludW0rK1xuICAgICAgfSxcbiAgICAgIHRvYXN0ICgpIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxuICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9taXNlLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndG9hc3QgZG9uZScpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdGFwICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKVxuICAgICAgfSxcbiAgXG4gICAgICB0YXBzb21ldGhpbmcgKCkge1xuICAgICAgICAvKlxuICAgICAgICDojrflj5bovpPlhaXmoYbnmoTlgLxcbiAgICAgICAgKi9cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50KVxuICAgICAgICBpZiAoIXRoaXMuY29udGVudCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5LiT5a625Zue5aSNJyxcbiAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbG9jYWxob3N0JyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbnN3aW5nIGEgcHJvZ3JhbScpXG4gICAgICB9LFxuXG4gICAgICBjb21tdW5pY2F0ZSAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHRhcCcpXG5cbiAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMicsICdtaW51cycsIDQ1LCA2KVxuICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIxJywgJ3BsdXMnLCA0NSwgNilcblxuICAgICAgICB0aGlzLiRicm9hZGNhc3QoJ2luZGV4LWJyb2FkY2FzdCcsIDEsIDMsIDQpXG4gICAgICB9LFxuICAgICAgcmVxdWVzdCAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgaSA9IDEwXG4gICAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXVxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz0nICsgbWFwW2ldICsgJyZpPScgKyBpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgc2VsZi5uZXRyc3QgKz0gZC5kYXRhICsgJy4nXG4gICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBjb3VudGVyRW1pdCAoLi4uYXJncykge1xuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAodXNlckluZm8pIHtcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5ub3JtYWxUaXRsZSA9ICfmoIfpopjlt7Looqvkv67mlLknXG5cbiAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9LCAzMDAwKVxuXG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=