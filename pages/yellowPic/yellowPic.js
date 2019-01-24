// pages/yellowPic/yellowPic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yellowList: [
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png',
      '../assets/img/yellowPic.png'
    ]
  },
  yulan: function(e) {
    var src = e.currentTarget.dataset.src;
    var imgList = e.currentTarget.dataset.list;
    console.log(e);
    wx.previewImage({
      current: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2543541082.jpg',
      urls: ['https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2543541082.jpg'],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '生成小黄图',
    })
    console.log(options);
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

  }
})