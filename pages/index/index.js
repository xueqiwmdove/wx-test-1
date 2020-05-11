//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test:'one', 
    undefined:undefined,
    a:12,
    name:'+拼接',
     motto: 'Hello World',
     length:0,
     array:[
       { name: 'xueqi', msg: "该减肥了呀" },
       {name:'xueyao ',msg:"你太胖了，该减肥了呀"},
       ],
       numArray:[1,2,3,4,5,6],
    time: (new Date()).toString(),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  addNumberToFront:function(e){
     const len = this.data.array.length;
     this.data.array = [{name:"xuewen",msg:"姐姐真好"+len}].concat(this.data.array);
     this.setData({
       array:this.data.array
     })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
