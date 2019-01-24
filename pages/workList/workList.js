// pages/workList/workList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workList: [{
      image: '../assets/img/timg.png',
      number: 7000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多',
        '吃苦耐劳'
      ],
      id: 1
    }, {
      image: '../assets/img/timg.png',
      number: 6000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多'
      ],
      id: 2
    }, {
      image: '../assets/img/timg.png',
      number: 7000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多',
        '18-30周岁',
        '吃苦耐劳'
      ],
      id: 3
    }, {
      image: '../assets/img/timg.png',
      number: 6000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多'
      ],
      id: 4
    }, {
      image: '../assets/img/timg.png',
      number: 7000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多',
        '18-30周岁',
        '吃苦耐劳'
      ],
      id: 5
    }, {
      image: '../assets/img/timg.png',
      number: 6000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多'
      ],
      id: 6
    }, {
      image: '../assets/img/timg.png',
      number: 7000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多',
        '18-30周岁',
        '吃苦耐劳'
      ],
      id: 7
    }, {
      image: '../assets/img/timg.png',
      number: 6000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多'
      ],
      id: 8
    }, {
      image: '../assets/img/timg.png',
      number: 7000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多',
        '18-30周岁',
        '吃苦耐劳'
      ],
      id: 9
    }, {
      image: '../assets/img/timg.png',
      number: 6000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多'
      ],
      id: 10
    }, {
      image: '../assets/img/timg.png',
      number: 7000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多',
        '18-30周岁',
        '吃苦耐劳'
      ],
      id: 11
    }, {
      image: '../assets/img/timg.png',
      number: 6000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多'
      ],
      id: 12
    }, {
      image: '../assets/img/timg.png',
      number: 7000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多',
        '18-30周岁',
        '吃苦耐劳'
      ],
      id: 13
    }, {
      image: '../assets/img/timg.png',
      number: 6000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多'
      ],
      id: 14
    }, {
      image: '../assets/img/timg.png',
      number: 7000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多',
        '18-30周岁',
        '吃苦耐劳'
      ],
      id: 15
    }, {
      image: '../assets/img/timg.png',
      number: 6000,
      priceArea: '2800-4500',
      companyName: '昆山纬创',
      subsidy: 2500,
      text: [
        '工资高',
        '妹子多'
      ],
      id: 16
    }],
    num: 0,
    visible: false,
    recordId: [],
    checked: false
  },
  // share: function (options) {
  //   console.log(options);
  //   return {
  //     title: "工种列表",
  //     path: 'pages/workList/workList',
  //     imageUrl: '../assets/img/timg.png',
  //     success: (options) => {
  //       wx.showToast({
  //         title: '分享成功',
  //       })
  //       console.log("分享成功", options);
  //     },
  //     fail: (options) => {
  //       wx.showModal({
  //         title: '分享失败',
  //         content: options,
  //       })
  //       console.log("分享失败", options);
  //     }
  //   }
  // },
  checkboxChange: function(e) {
    console.log(e);
    // 选中复选框
    this.setData({
      num: e.detail.value.length,
      recordId: e.detail.value
    }, function() {
      if (this.data.num > 0) {
        this.setData({
          visible: true
        })
      } else {
        this.setData({
          visible: false
        })
      }
    })

  },
  makeYellowPic: function() {
    wx.navigateTo({
      url: '../yellowPic/yellowPic?recordId=' + this.data.recordId,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      num: 0,
      visible: false,
      recordId: [],
      checked: false
    });
    wx.setNavigationBarTitle({
      title: '工种列表'
    })
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
    console.log('下拉了');
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: 'www.baidu.com',
      success: (res) => {
        wx.hideLoading();
        wx.stopPullDownRefresh()
      }
    })
    console.log(555);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(options) {
    console.log(options);
    wx.showShareMenu({
      withShareTicket:true
    })
    return {
      title: "工种列表",
      path: 'pages/workList/workList',
      imageUrl: '../assets/img/timg.png',
      success: (options) => {
        if(options.errMsg == 'shareAppMessage:ok'){
          if(shareTickets == undefined) {
            wx.showToast({
              title: '分享到好友成功',
            })
          }else {
            // 分享到群
            var shareTicket = options.shareTickets[0];
            wx.getShareInfo({
              shareTicket: shareTicket,
              success: function(e) {
                // 当前群相关信息
                var encryptedData = e.encryptedData;
                var iv = e.iv;
                wx.showToast({
                  title: '分享到群成功',
                })
              }
            })
            wx.showToast({
              title: '分享到群成功',
            })
          }
        }

        wx.showToast({
          title: '分享成功',
        })
        console.log("分享成功", options);
      },
      fail: (options) => {
        wx.showModal({
          title: '分享失败',
          content: options,
        })
        console.log("分享失败", options);
      }
    }
  }
})