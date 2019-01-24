// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    visible: true,
    editCode: true,
    phone: '',
    code: '',
    inputCode: '',
    btntext: '获取验证码',
    buttonClicked: false,
    opacity: 0.7,
    image: '../assets/img/pic_wenzi.png'
  },
  hideImage: function() {
    this.setData({
      visible: false
    })
  },
  setphone: function(e) {
    this.setData({
      phone: e.detail.value
    }, function() {
      if (this.data.phone && (this.data.phone.length === 11)) {
        this.setData({
          buttonClicked: true
        })
      }
    })

  },
  setCode: function(e) {
    this.setData({
      inputCode: e.detail.value,
      opacity: 1
    });
  },
  getCode: function(e) {
    var coden = 60    // 定义60秒的倒计时
    var codeV = setInterval(function () {
      page.setData({    // page这里的作用域不同了
        btntext: (--coden) + 's'
      })
      if (coden == -1) {  // 清除setInterval倒计时，这里可以做很多操作，按钮变回原样等
        clearInterval(codeV)
        page.setData({
          btntext: '获取验证码',
          buttonClicked: true
        })
      }
    }, 1000)  //  1000是1秒

    
    var page = this;
    if (page.data.btntext !== '获取验证码') {
      return;
    }
    if (page.data.phone && (page.data.phone.length === 11)) {
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/in_theaters',
        header: {
          'content-type': 'json'
        },
        method: 'GET',
        success(res) {

          

          page.setData({
            code: '1234',
            editCode: false,
            buttonClicked: true
          }, function() {
            wx.showModal({
              title: '验证码',
              content: page.data.code,
            })
          })
        }
      })
    } else {
      wx.showToast({
        title: '输入11位手机号码',
      })
      this.setData({
        editCode: true
      });
    }  
    
  },
  submit: function() {
    if (this.data.code === this.data.inputCode) {
      console.log(568);
      wx.switchTab({
        url: '../workList/workList',
      })
    } else {
      wx.showToast({
        title: '验证码错误',
        icon: 'none'
      })
    }
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
    return{
      title: '分享我打经纪人',
      url: 'pages/login/login'
    }
  }
})