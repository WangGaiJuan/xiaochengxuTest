// pages/vip/vip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vipImage: '../assets/img/pic_title.png',
    picNone: '../assets/img/pic_none.png',
    vip: [
      {
        name: 'green',
        phone: '10086',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'Durant',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'curry',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'green',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'Durant',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'curry',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'green',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'Durant',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'curry',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'green',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'Durant',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'curry',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'green',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'Durant',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      },
      {
        name: 'curry',
        phone: '15236584221',
        companyName: '昆山纬创',
        date: '2018/12/16'
      }
    ]
  },

  callPhone: function(e) {
    // console.log(e.currentTarget.dataset.phone);
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showToast({
    //   title: '加载中',
    //   icon: 'loading',
    //   image: '../assets/img/loading.png',
    //   duration: 500
    // });
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})