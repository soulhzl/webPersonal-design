// page/movies/more/more.js
import {
  http,
  convertStars
} from "../../../utils/utils.js";
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: {},
    navigationTitle: "",
    reUrl: '',
    totalCount: 0,
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let category = options.category;
    this.data.navigationTitle = category;
    let dataUrl = '';
    switch (category) {
      case '正在热映':
        dataUrl = app.globalData.doubanUrl + "v2/movie/in_theaters";
        break;
      case '即将上映':
        dataUrl = app.globalData.doubanUrl + "v2/movie/coming_soon";
        break;
      case 'TOP250':
        dataUrl = app.globalData.doubanUrl + "v2/movie/top250";
        break;
    }
    this.data.reUrl = dataUrl;
    http(dataUrl, this.getDoubanData);
  },

  getDoubanData: function(douban) {
    let movies = [];
    for (let idx in douban.subjects) {
      let sbj = douban.subjects[idx];
      let title = sbj.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + '...';
      }

      var temp = {
        stars: convertStars(sbj.rating.stars),
        title: title,
        average: sbj.rating.average,
        cover: sbj.images.large,
        movieid: sbj.id
      };
      movies.push(temp);
    }
    let totalMovies = {};
    if (!this.data.isEmpty) {
      totalMovies = this.data.movies.concat(movies);
    } else {
      totalMovies = movies;
      this.data.isEmpty = false;
    }

    this.setData({
      movies: totalMovies
    });
    this.data.totalCount += 20;
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },

  onScrollEvent: function() {
    let nextUrl = this.data.reUrl + '?start=' + this.data.totalCount + '&count=20';
    http(nextUrl, this.getDoubanData);
    wx.showNavigationBarLoading();
  },

  onPullDownRefresh: function() {
    let nextUrl = this.data.reUrl + '?start=' + this.data.totalCount + '&count=20';
    this.data.movies = {};
    this.data.isEmpty = true;
    this.data.totalCount = 0;
    http(nextUrl, this.getDoubanData);
    wx.showNavigationBarLoading();
  },

  onMovieTap: function (e) {
    let mid = e.currentTarget.dataset.mid;
    wx.navigateTo({
      url: '../moviedetail/moviedetail?mid=' + mid,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.data.navigationTitle
    })
  }
})