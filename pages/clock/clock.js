// pages/clock/clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0
  },

  canvasClock: function() {
    var context = wx.createCanvasContext('myCanvas' , this);
    var width = this.width;
    var height = this.height;
    var R = width / 2 - 55;
    context.translate(width / 2, height / 2);

    function circle() {
      // 外面大圆
      context.setLineWidth(2);
      context.beginPath();
      context.setStrokeStyle('black');
      context.arc(0, 0, width/2 - 30, 0, 2 * Math.PI, true);
      context.setFillStyle('#fff');
      context.fill();
      context.closePath();
      context.stroke();
      // 中心圆
      context.beginPath();
      context.arc(0, 0, 15, 0, 2 * Math.PI, true);
      context.setFillStyle('black');
      context.fill();
      context.closePath();
      context.stroke(); 
    }

    function num() {
      // 字体
      context.setFontSize(20);
      context.textBaseline = "middle"; // ddd
      for (var i = 1; i < 13; i++) {
        var x = R * Math.cos(i * Math.PI / 6 - Math.PI / 2);
        var y = R * Math.sin(i * Math.PI / 6 - Math.PI / 2);
        if (i == 11 || i == 12) {
          context.fillText(i, x - 12, y + 2);
        } else {
          context.fillText(i, x - 6, y);
        }
      }
    }

    function smallGrid() {
      context.setLineWidth(1);
      context.rotate(-Math.PI / 2);
      for (var i = 0; i < 60; i++) {
        context.beginPath();
        context.rotate(Math.PI / 30);
        // context.moveTo(width / 2 - 30, 0);
        // context.lineTo(width / 2 - 40, 0);
        context.stroke();
      }
    }

    function bigGrid() {
      context.setLineWidth(5);
      for (var i = 0; i < 12; i++) {
        context.beginPath();
        context.rotate(Math.PI / 6);
        // context.moveTo(width / 2 - 30, 0);
        // context.lineTo(width / 2 - 45, 0);
        context.stroke();
      }
    }
    function move() {
      var t = new Date();
      var h = t.getHours();
      h = h > 12 ? (h-12) : h;
      var m = t.getMinutes();
      var s = t.getSeconds();
      context.save();
      // 时针
      context.setLineWidth(12);
      context.beginPath();
      context.rotate((Math.PI/6)*(h+m/60+s/3600));
      context.moveTo(0, 0);
      context.lineTo(width/4.5-10, 0);
      context.setLineCap('round');
      context.stroke();
      context.restore();
      context.save();
      // 分针
      context.setLineWidth(12);
      context.beginPath();
      context.rotate((Math.PI / 30) * (m+s/60));
      context.moveTo(0, 0);
      context.lineTo(width / 3.5, 0);
      context.setLineCap('round');
      context.stroke();
      context.restore();
      context.save();
      // 秒针
      context.setLineWidth(2);
      context.beginPath();
      context.rotate((Math.PI / 30) * s );
      context.moveTo(0, 0);
      context.lineTo(width / 3 + 10, 0);
      context.setLineCap('round');
      context.setStrokeStyle('red');
      context.stroke();
    }
    function drawClock() {
      circle();
      num();
      smallGrid();
      bigGrid();
      move();
      context.draw();
    }
    drawClock();
    wx.drawCanvas({
      canvasId: 'mycanvas',
      actions: context.getActions()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '时钟',
    })

    var that = this;
    
    wx.getSystemInfo({
      success: function(res) {
        that.width = res.windowWidth;
        that.height = res.windowHeight;
        console.log(that.width);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.canvasClock();
    this.interval = setInterval(this.canvasClock, 1000);
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
    clearInterval(this.interval);
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