// pages/movie/movie.js
var subjectUtil = require('../../utils/subjectUtil.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['../assets/img/one.jpg',
      '../assets/img/two.jpg',
      '../assets/img/three.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    movies: []
  },

  // jiekou
  loadMovie: function() {
    wx.showLoading({
      title: '正在加载',
    })
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      header: {
        'content-type': 'json'
      },
      method: 'GET',
      success(res) {
        var subjects = res.data.subjects;
        subjectUtil.processSubjects(subjects);
        page.setData({
          movies: subjects
        })
      }
    })
  },
  detail: function(e) {
    console.log(e);
    subjectUtil.detail(e);
  },

  randomFun: function() {
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      header: {
        'content-type': 'json'
      },
      method: 'GET',
      success(res) {
        var images = [];
        for (var i = 0; i < res.data.subjects.length; i++) {
          var img = res.data.subjects[i].images.medium;
          images.push(img);
        }
        console.log(page.getRandom(images, 3));
        if (images.length >= 3) {
          page.setData({
            imgUrls: page.getRandom(images, 3)
          })
        } else {
          page.setData({
            imgUrls: ['../assets/img/one.jpg',
              '../assets/img/two.jpg',
              '../assets/img/three.jpg'
            ]
          })
        }
      }
    })
  },
  getRandom: function(arr, count) {
    var shuffled = arr.slice(0);
    var i = arr.length;
    var min = i - count;
    var temp;
    var index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '电影简介'
    })
    this.loadMovie();
    this.randomFun();
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
  onShareAppMessage: function(res) {
    console.log(res);
    return {
      title: "电影简介",
      path: 'pages/movie/movie',
      success: (res) => {
        wx.showToast({
          title: '分享成功',
        })
        console.log("分享成功", res);
      },
      fail: (res) => {
        wx.showModal({
          title: '分享失败',
          content: res,
        })
        console.log("分享失败", res);
      }
    }
  }

})