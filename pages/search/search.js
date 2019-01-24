// pages/search/search.js
var subjectUtil = require('../../utils/subjectUtil.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 自定义
  bindKeyInput: function(e) {
    this.setData({
      inputVal: e.detail.value
    })
  },

  search: function() {
    var page = this;
    if (page.data.inputVal == "") {
      wx.showModal({
        title: '提示',
        content: '请输入关键词！',
        showCancel:false,
        confirmText:"知道啦",
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      // 显示loading界面
      wx.showLoading({
        title: '加载中',
      })
    }
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/search?q=' + page.data.inputVal,
      header: {
        'content-type': 'json'
      },
      method: "GET",
      success(res) {
        var subjects = res.data.subjects;
        subjectUtil.processSubjects(subjects);
        page.setData({
          movies: subjects
        });
        if (subjects == null) {
          wx.showModal({
            title: '提示',
            content: '你的关键词太关键了！',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      }
    })
  },

  detail:function(e){
    subjectUtil.detail(e);
  },
})