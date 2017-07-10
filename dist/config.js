'use strict';

// ENV
var env = 'production'; // 'development' or 'production'

// WXAPP VERSION
var version = 2.0;

// development and production host
var hosts = {
  development: 'http://localhost:3020',
  production: 'https://sd.iszu.cn'
};

var pages = {
  index: 'pages/index',
  tableview: 'pages/tableview'
  // apis
};var api = {
  user: {
    /**
     * login api
     * need header:
     * {
     *   'x-wechat-code': code,
     *   'x-wechat-encrypted': encryptedData,
     *   'x-wechat-iv': iv
     * }
     */
    login: {
      method: 'POST',
      url: '/user/wxlogin'
    },
    info: {
      method: 'GET',
      url: '/user/info'
    },
    blog: {
      method: 'GET',
      url: '/v2/user'
    }
  },
  blog: {
    list: {
      method: 'GET',
      url: '/v2/blogs'
    },
    detail: {
      method: 'GET',
      url: '/v2/blogs'
    },
    like: {
      method: 'POST',
      url: '/blog/like'
    },
    delete: {
      method: 'POST',
      url: '/blog/delete'
    },
    imageUpload: {
      method: 'POST',
      url: '/blog/image'
    },
    new: {
      method: 'POST',
      url: '/v2/blogs'
    },
    comment: {
      method: 'POST',
      url: '/v2/comments'
    },
    deleteComment: {
      method: 'DELETE',
      url: '/v2/comments'
    }
  },
  notifications: {
    count: {
      method: 'GET',
      url: '/v2/notifications'
    },
    messages: {
      method: 'GET',
      url: '/v2/notifications/messages'
    },
    read: {
      method: 'PUT',
      url: '/v2/notifications'
    }
  },
  ads: {
    method: 'GET',
    url: '/v2/ads'
  },
  configs: {
    method: 'GET',
    url: '/v2/configs'
  }
};

module.exports = {
  env: env,
  version: version,
  api: disposeUrl(api, hosts[env])
};

function disposeUrl(obj, prefix) {
  Object.keys(obj).forEach(function (v) {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url;
    } else {
      obj[v] = disposeUrl(obj[v], prefix);
    }
  });

  return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJ2ZXJzaW9uIiwiaG9zdHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJwYWdlcyIsImluZGV4IiwidGFibGV2aWV3IiwiYXBpIiwidXNlciIsImxvZ2luIiwibWV0aG9kIiwidXJsIiwiaW5mbyIsImJsb2ciLCJsaXN0IiwiZGV0YWlsIiwibGlrZSIsImRlbGV0ZSIsImltYWdlVXBsb2FkIiwibmV3IiwiY29tbWVudCIsImRlbGV0ZUNvbW1lbnQiLCJub3RpZmljYXRpb25zIiwiY291bnQiLCJtZXNzYWdlcyIsInJlYWQiLCJhZHMiLCJjb25maWdzIiwibW9kdWxlIiwiZXhwb3J0cyIsImRpc3Bvc2VVcmwiLCJvYmoiLCJwcmVmaXgiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInYiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNQSxNQUFNLFlBQVosQyxDQUF5Qjs7QUFFekI7QUFDQSxJQUFNQyxVQUFVLEdBQWhCOztBQUVBO0FBQ0EsSUFBTUMsUUFBUTtBQUNaQyxlQUFhLHVCQUREO0FBRVpDLGNBQVk7QUFGQSxDQUFkOztBQUtBLElBQU1DLFFBQVE7QUFDVkMsU0FBTyxhQURHO0FBRVZDLGFBQVc7QUFFZjtBQUpjLENBQWQsQ0FLQSxJQUFNQyxNQUFNO0FBQ1ZDLFFBQU07QUFDSjs7Ozs7Ozs7O0FBU0FDLFdBQU87QUFDTEMsY0FBUSxNQURIO0FBRUxDLFdBQUs7QUFGQSxLQVZIO0FBY0pDLFVBQU07QUFDSkYsY0FBUSxLQURKO0FBRUpDLFdBQUs7QUFGRCxLQWRGO0FBa0JKRSxVQUFNO0FBQ0pILGNBQVEsS0FESjtBQUVKQyxXQUFLO0FBRkQ7QUFsQkYsR0FESTtBQXdCVkUsUUFBTTtBQUNKQyxVQUFNO0FBQ0pKLGNBQVEsS0FESjtBQUVKQyxXQUFLO0FBRkQsS0FERjtBQUtKSSxZQUFRO0FBQ05MLGNBQVEsS0FERjtBQUVOQyxXQUFLO0FBRkMsS0FMSjtBQVNKSyxVQUFNO0FBQ0pOLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FURjtBQWFKTSxZQUFRO0FBQ05QLGNBQVEsTUFERjtBQUVOQyxXQUFLO0FBRkMsS0FiSjtBQWlCSk8saUJBQWE7QUFDWFIsY0FBUSxNQURHO0FBRVhDLFdBQUs7QUFGTSxLQWpCVDtBQXFCSlEsU0FBSztBQUNIVCxjQUFRLE1BREw7QUFFSEMsV0FBSztBQUZGLEtBckJEO0FBeUJKUyxhQUFTO0FBQ1BWLGNBQVEsTUFERDtBQUVQQyxXQUFLO0FBRkUsS0F6Qkw7QUE2QkpVLG1CQUFlO0FBQ2JYLGNBQVEsUUFESztBQUViQyxXQUFLO0FBRlE7QUE3QlgsR0F4Qkk7QUEwRFZXLGlCQUFlO0FBQ2JDLFdBQU87QUFDTGIsY0FBUSxLQURIO0FBRUxDLFdBQUs7QUFGQSxLQURNO0FBS2JhLGNBQVU7QUFDUmQsY0FBUSxLQURBO0FBRVJDLFdBQUs7QUFGRyxLQUxHO0FBU2JjLFVBQU07QUFDSmYsY0FBUSxLQURKO0FBRUpDLFdBQUs7QUFGRDtBQVRPLEdBMURMO0FBd0VWZSxPQUFLO0FBQ0hoQixZQUFRLEtBREw7QUFFSEMsU0FBSztBQUZGLEdBeEVLO0FBNEVWZ0IsV0FBUztBQUNQakIsWUFBUSxLQUREO0FBRVBDLFNBQUs7QUFGRTtBQTVFQyxDQUFaOztBQWtGQWlCLE9BQU9DLE9BQVAsR0FBaUI7QUFDZjlCLFVBRGU7QUFFZkMsa0JBRmU7QUFHZk8sT0FBS3VCLFdBQVd2QixHQUFYLEVBQWdCTixNQUFNRixHQUFOLENBQWhCO0FBSFUsQ0FBakI7O0FBTUEsU0FBUytCLFVBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCQyxNQUExQixFQUFrQztBQUNoQ0MsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixhQUFLO0FBQzVCLFFBQUlKLElBQUlLLENBQUosRUFBT3pCLEdBQVgsRUFBZ0I7QUFDZG9CLFVBQUlLLENBQUosRUFBT3pCLEdBQVAsR0FBYXFCLFNBQVNELElBQUlLLENBQUosRUFBT3pCLEdBQTdCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xvQixVQUFJSyxDQUFKLElBQVNOLFdBQVdDLElBQUlLLENBQUosQ0FBWCxFQUFtQkosTUFBbkIsQ0FBVDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxTQUFPRCxHQUFQO0FBQ0QiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRU5WXHJcbmNvbnN0IGVudiA9ICdwcm9kdWN0aW9uJyAvLyAnZGV2ZWxvcG1lbnQnIG9yICdwcm9kdWN0aW9uJ1xyXG5cclxuLy8gV1hBUFAgVkVSU0lPTlxyXG5jb25zdCB2ZXJzaW9uID0gMi4wXHJcblxyXG4vLyBkZXZlbG9wbWVudCBhbmQgcHJvZHVjdGlvbiBob3N0XHJcbmNvbnN0IGhvc3RzID0ge1xyXG4gIGRldmVsb3BtZW50OiAnaHR0cDovL2xvY2FsaG9zdDozMDIwJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly9zZC5pc3p1LmNuJ1xyXG59XHJcblxyXG5jb25zdCBwYWdlcyA9IHtcclxuICAgIGluZGV4OiAncGFnZXMvaW5kZXgnLFxyXG4gICAgdGFibGV2aWV3OiAncGFnZXMvdGFibGV2aWV3J1xyXG59XHJcbi8vIGFwaXNcclxuY29uc3QgYXBpID0ge1xyXG4gIHVzZXI6IHtcclxuICAgIC8qKlxyXG4gICAgICogbG9naW4gYXBpXHJcbiAgICAgKiBuZWVkIGhlYWRlcjpcclxuICAgICAqIHtcclxuICAgICAqICAgJ3gtd2VjaGF0LWNvZGUnOiBjb2RlLFxyXG4gICAgICogICAneC13ZWNoYXQtZW5jcnlwdGVkJzogZW5jcnlwdGVkRGF0YSxcclxuICAgICAqICAgJ3gtd2VjaGF0LWl2JzogaXZcclxuICAgICAqIH1cclxuICAgICAqL1xyXG4gICAgbG9naW46IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy91c2VyL3d4bG9naW4nXHJcbiAgICB9LFxyXG4gICAgaW5mbzoge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvdXNlci9pbmZvJ1xyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL3YyL3VzZXInXHJcbiAgICB9XHJcbiAgfSxcclxuICBibG9nOiB7XHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy92Mi9ibG9ncydcclxuICAgIH0sXHJcbiAgICBkZXRhaWw6IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL3YyL2Jsb2dzJ1xyXG4gICAgfSxcclxuICAgIGxpa2U6IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9ibG9nL2xpa2UnXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlOiB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYmxvZy9kZWxldGUnXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VVcGxvYWQ6IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9ibG9nL2ltYWdlJ1xyXG4gICAgfSxcclxuICAgIG5ldzoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL3YyL2Jsb2dzJ1xyXG4gICAgfSxcclxuICAgIGNvbW1lbnQ6IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy92Mi9jb21tZW50cydcclxuICAgIH0sXHJcbiAgICBkZWxldGVDb21tZW50OiB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIHVybDogJy92Mi9jb21tZW50cydcclxuICAgIH1cclxuICB9LFxyXG4gIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgIGNvdW50OiB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy92Mi9ub3RpZmljYXRpb25zJ1xyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy92Mi9ub3RpZmljYXRpb25zL21lc3NhZ2VzJ1xyXG4gICAgfSxcclxuICAgIHJlYWQ6IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsOiAnL3YyL25vdGlmaWNhdGlvbnMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhZHM6IHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6ICcvdjIvYWRzJ1xyXG4gIH0sXHJcbiAgY29uZmlnczoge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogJy92Mi9jb25maWdzJ1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZW52LFxyXG4gIHZlcnNpb24sXHJcbiAgYXBpOiBkaXNwb3NlVXJsKGFwaSwgaG9zdHNbZW52XSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcG9zZVVybCAob2JqLCBwcmVmaXgpIHtcclxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2godiA9PiB7XHJcbiAgICBpZiAob2JqW3ZdLnVybCkge1xyXG4gICAgICBvYmpbdl0udXJsID0gcHJlZml4ICsgb2JqW3ZdLnVybFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqW3ZdID0gZGlzcG9zZVVybChvYmpbdl0sIHByZWZpeClcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gb2JqXHJcbn1cclxuIl19