// pages/P2/page2.js
var common=require('../../utils/common.js')
let app =  getApp();
  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    today:'2018-01-01',
    array:['first', 'second', 'three'],
    count:[1, 2, 3, 4, 5, 6, 7, 8, 9]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function (res) {
    if(res.from === 'button')
    {
      console.log(res.target)
    }
    return
    {
      title:'Share'
      path:'/pages/P2'
    }
  },
  onTabItemTap(item){
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  btnTap:function(){
    this.setData({today:'2018-01-01'})
    console.log(this.data.today)
    console.log('button was clicked.')
    console.log(this.route)
  },
  hello: function(){
    common.sayHello('2019')
  },
  bye: function(){
    common.sayGoodbye('2018')
  },
  changeData:function() {
    this.setData({today:'2019-08-21'})
    this.bye()
  },
  getTestData:function(){
    let that = this
    wx.request({
      url:app.globalData.url + '/testView/',
      success:function(res){
        console.log(res.data)
      }
    })
  }
})