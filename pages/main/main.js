// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: "",
    today: {
      temp: "",
      weather: "",
      wind: "",
      windLevel: "",
      notice: ""
    },
    future: [{
      date: "",
      type: "",
      fengxiang: "",
      fengli: "",
      low: "",
      high: ""
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '当前天气'
    })
    this.loadInfo();
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
  loadInfo: function() {
    var page = this;
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        var latitude = res.latitude
        var longtitude = res.longitude
        page.loadCity(latitude, longtitude)

        // wx.openLocation({ // 跳转，打开微信地图
        //   latitude: latitude,
        //   longitude: longtitude,
        //   scale: 28
        // })
      },
    })
  },

  loadCity: function(latitude, longtitude) {
    var page = this
    wx.request({
      url: 'http://api.map.baidu.com/geocoder/v2/?location=' + latitude + ',' + longtitude + '&output=json&pois=0&ak=pTR6j4usfUCLidGDfl0MA621uDKQdG9A', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var city = res.data.result.addressComponent.district;
        page.setData({
          city: city
        })
        page.loadWeather(city)
      }
    })
  },

  loadWeather: function(city) {
    var page = this
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/forecast?key=09fab98b803646dc95199f66d9e51b3f&location=' + city,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        page.setData({
          today: {
            temp: res.data.HeWeather6[0].daily_forecast[0].tmp_max,
            weather: res.data.HeWeather6[0].daily_forecast[0].cond_txt_d,
            wind: res.data.HeWeather6[0].daily_forecast[0].wind_dir,
            windLevel: res.data.HeWeather6[0].daily_forecast[0].wind_sc,
            notice: '下周要下雨，笨笨记得带伞！'
          },
          future: [{
              date: res.data.HeWeather6[0].daily_forecast[1].date,
              type: res.data.HeWeather6[0].daily_forecast[1].cond_txt_d,
              fengxiang: res.data.HeWeather6[0].daily_forecast[1].wind_dir,
              fengli: res.data.HeWeather6[0].daily_forecast[1].wind_sc,
              low: res.data.HeWeather6[0].daily_forecast[1].tmp_min,
              high: res.data.HeWeather6[0].daily_forecast[1].tmp_max
            },
            {
              date: res.data.HeWeather6[0].daily_forecast[2].date,
              type: res.data.HeWeather6[0].daily_forecast[2].cond_txt_d,
              fengxiang: res.data.HeWeather6[0].daily_forecast[2].wind_dir,
              fengli: res.data.HeWeather6[0].daily_forecast[2].wind_sc,
              low: res.data.HeWeather6[0].daily_forecast[2].tmp_min,
              high: res.data.HeWeather6[0].daily_forecast[2].tmp_max
            }
          ]
        })
      }
    })
  }
})