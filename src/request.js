var baseURL = "http://mp2.dailongnet.com"  //your base url
// var baseURL = "http://192.168.0.106:8888"  //your base url
function request(api, method, header, params, success){
    wx.showToast({
        icon: "loading",
        title: "加载中...",
        duration: 10000
    })
    wx.request({
        url: baseURL + api,
        method: method,
        header: header,
        data: params,
        success: function(res) {
            wx.hideToast()
            success(res)
        },
        fail: function(){
            wx.showToast({
                icon: "loading",
                title: "请检查网络..."
            })
        }
    })
}

var GET_METHOD = "GET"
var GET_HEADER = {
            "Authorization": "Basic ####################"  //your get header
        }
function get(api, params, success){
    request(api, GET_METHOD, GET_HEADER, params, success)
}
var POST_METHOD = "POST"
var POST_HEADER = {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "version": "1.0.0",
            "Authorization": "Basic ######################"   //your post header
        }
function post(api, params, success){
    request(api, POST_METHOD, POST_HEADER, params, success)
}

module.exports = {
    GET: get,
    POST: post
}