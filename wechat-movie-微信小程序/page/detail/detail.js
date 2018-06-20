// page/detail/detail.js
import {
  newsdata
} from '../../data/data.js';
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id;
    this.data.currentid = id;
    this.setData({
      detail: newsdata[id]
    });

    this.getCollectid(id);

    this.getBgmusic();
  },

  // 获取/设置收藏的缓存
  getCollectid: function(id) {
    let collectid = wx.getStorageSync('collectid');
    if (collectid) {
      if (collectid) {
        let collect = collectid[id];
        if (collect) {
          this.setData({
            collected: collect
          });
        }
      }
    } else {
      let collectid = {};
      collectid[id] = false;
      wx.setStorageSync('collectid', collectid);
    }
  },

  // 设置背景音乐状态
  getBgmusic: function() {
    if (app.globalData.gisplay && app.globalData.isplayid === this.data.currentid) {
      this.setData({
        isPlay: false
      });
    }

    let that = this;
    wx.onBackgroundAudioPlay(function() {
      app.globalData.isplayid = that.data.currentid;
      that.setData({
        isPlay: false
      });
    });

    wx.onBackgroundAudioPause(function() {
      app.globalData.isplayid = null;
      that.setData({
        isPlay: true
      });
    });

    wx.onBackgroundAudioStop(function () {
      app.globalData.isplayid = null;
      that.setData({
        isPlay: true
      });
    });
  },

  // 收藏按钮点击事件
  onCollectTap: function(e) {
    let collectid = wx.getStorageSync('collectid');
    let currentcollect = collectid[this.data.currentid];
    currentcollect = !currentcollect;
    collectid[this.data.currentid] = currentcollect;
    wx.setStorageSync('collectid', collectid);
    this.setData({
      collected: currentcollect
    });

    wx.showToast({
      title: currentcollect ? '收藏成功' : '取消收藏'
    });
  },

  // 分享按钮点击事件
  onShareTap: function() {
    let list = [
      '分享给朋友',
      '分享到朋友圈',
      '分享到QQ'
    ]
    wx.showActionSheet({
      itemList: list,
      success: function(res) {
        console.log(list[res.tapIndex]);
      }
    })
  },

  // 音乐播放点击事件
  onMusicTap: function() {
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    this.data.bgmusic = backgroundAudioManager;
    if (this.data.isPlay) {
      app.globalData.gisplay = true;
      backgroundAudioManager.title = '此时此刻';
      backgroundAudioManager.epname = '此时此刻';
      backgroundAudioManager.singer = '许巍';
      backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
      backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/C100001Bbv083BhcyW.m4a?fromtag=46';
      backgroundAudioManager.play();
      this.setData({
        isPlay: false
      });
    } else {
      app.globalData.gisplay = false;
      backgroundAudioManager.pause();
      this.setData({
        isPlay: true
      });
    }
  }
})