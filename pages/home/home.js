
// 注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'liang',
    movies: [
      { id: 1, name: 'liang' },
      { id: 2, name: 'cai' },
      { id: 3, name: 'ping' }
    ],
    counter: 0,
    list: []
  },
  handleBtnClick() {
    //错误做法 
    //this.data.counter++
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: (res) => {
    //     const data = res.data.data.list;
    //     this.setData({
    //       list: data
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})