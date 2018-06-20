// page/main/main.js
import {
  newsdata
} from '../../data/data.js';
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      ndata: newsdata
    });
  },

  tapItem: function(e) {
    let pid = e.currentTarget.dataset.dataid;
    // 跳转到对应详情页面
    wx.navigateTo({
      url: '../detail/detail?id=' + pid,
    })
  }

})