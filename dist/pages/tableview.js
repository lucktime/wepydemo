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
    navigationBarTitleText: '专家回复'
  };
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    contentlist: ['button', 'checkbox', 'form', 'input', 'lable', 'packer'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxldmlldy5qcyJdLCJuYW1lcyI6WyJ0YWJsZXZpZXciLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJwYW5lbCIsImNvdW50ZXIxIiwiY291bnRlcjIiLCJsaXN0IiwidG9hc3QiLCJtaXhpbnMiLCJkYXRhIiwibXludW0iLCJjb250ZW50bGlzdCIsIm5pY2tOYW1lIiwiY291bnQiLCJuZXRyc3QiLCJncm91cExpc3QiLCJpZCIsIm5hbWUiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImlucHV0Q2hhbmdlIiwiZSIsImNvbnRlbnQiLCJkZXRhaWwiLCJ2YWx1ZSIsImRpc2FibGVkIiwicGx1cyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXAiLCIkbmFtZSIsInRhcHNvbWV0aGluZyIsImhpZGVUb2FzdCIsInNob3dNb2RhbCIsInNob3dDYW5jZWwiLCJyZXF1ZXN0IiwidXJsIiwic3VjY2VzcyIsImNvbW11bmljYXRlIiwiJGJyb2FkY2FzdCIsImkiLCJtYXAiLCJjb3VudGVyRW1pdCIsIiRldmVudCIsImxlbmd0aCIsInNvdXJjZSIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFvS1Y7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBVUMsUUFBVixFQUFvQjtBQUMzQyxZQUFJ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O0FBT0Q7QUFDRixLQXpFTztBQTJFUnNELGVBM0VRLHlCQTJFYztBQUFBOztBQUNwQixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQWpCLGNBQVFDLEdBQVIsQ0FBZSxLQUFLRSxLQUFwQixpQkFBcUNhLE9BQU9wQyxJQUE1QyxjQUF5RG9DLE9BQU9FLE1BQVAsQ0FBY2YsS0FBdkU7QUFDRDtBQTlFTyxHO09BaUZWZ0IsTSxHQUFTO0FBQ1Asa0JBQWMscUJBQWE7QUFBQTs7QUFDekIsVUFBSUgsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FqQixjQUFRQyxHQUFSLENBQWUsT0FBS0UsS0FBcEIsaUJBQXFDYSxPQUFPcEMsSUFBNUMsY0FBeURvQyxPQUFPRSxNQUFQLENBQWNmLEtBQXZFO0FBQ0Q7QUFKTSxHOztrQkE3SlVsRCxTIiwiZmlsZSI6InRhYmxldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnXG4gIGltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL3BhbmVsJ1xuICBpbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvdW50ZXInXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyB0YWJsZXZpZXcgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuJPlrrblm57lpI0nXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWwsXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgbGlzdDogTGlzdCxcbiAgICAgIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgbXludW06IDIwLFxuICAgICAgY29udGVudGxpc3Q6IFsnYnV0dG9uJywgJ2NoZWNrYm94JywgJ2Zvcm0nLCAnaW5wdXQnLCAnbGFibGUnLCAncGFja2VyJ10sXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBuZXRyc3Q6ICcnLFxuICAgICAgZ3JvdXBMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzMuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgLyoqXG4gICAgICAqIOi+k+WFpeebkeWQrOWZqFxuICAgICAgKiDoh6rliqjmmKDlsITliLAgY29udGVudFxuICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIOi+k+WFpeS6i+S7tlxuICAgICAgKi9cbiAgICAgIGlucHV0Q2hhbmdlIChlKSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBlLmRldGFpbC52YWx1ZSA9PT0gJydcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb250ZW50KVxuICAgICAgfSxcbiAgICAgIHBsdXMgKCkge1xuICAgICAgICB0aGlzLm15bnVtKytcbiAgICAgIH0sXG4gICAgICB0b2FzdCAoKSB7XG4gICAgICAgIGxldCBwcm9taXNlID0gdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuICAgICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ5qCH6aKYJyxcbiAgICAgICAgICBpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnXG4gICAgICAgIH0pXG5cbiAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkbyBub3RpbmcgZnJvbSAnICsgdGhpcy4kbmFtZSlcbiAgICAgIH0sXG4gIFxuICAgICAgdGFwc29tZXRoaW5nICgpIHtcbiAgICAgICAgLypcbiAgICAgICAg6I635Y+W6L6T5YWl5qGG55qE5YC8XG4gICAgICAgICovXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudClcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+S4k+WutuWbnuWkjScsXG4gICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2xvY2FsaG9zdCcsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygnYW5zd2luZyBhIHByb2dyYW0nKVxuICAgICAgfSxcblxuICAgICAgY29tbXVuaWNhdGUgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNilcbiAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXG5cbiAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgICAgfSxcbiAgICAgIHJlcXVlc3QgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGkgPSAxMFxuICAgICAgICBsZXQgbWFwID0gWydNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09J11cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY291bnRlckVtaXQgKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICB9XG4gICAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xuXG4gICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSdcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfSwgMzAwMClcblxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19