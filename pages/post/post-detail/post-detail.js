var post_data = require('../../../assets/data/post_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  onFavorite:function(event){
    var storage = wx.getStorageSync('key')
    console.log(storage)
    //缓存上限10M
    //wx.removeStorageSync('key') 清除单个缓存
    //wx.clearStorageSync() 清除所有缓存
  },
  onShare:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.setData({
      postData: post_data.postList[postId]
    })
    wx.setStorageSync('key', {
      name:"火影忍者",
      author:"岸本"
    })
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