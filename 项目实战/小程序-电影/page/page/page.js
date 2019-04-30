// page.js
Page({
  ontap: function() {
    // 跳转到有TAB的页面
    wx.switchTab({
      url: '../main/main'
    });
  }
})