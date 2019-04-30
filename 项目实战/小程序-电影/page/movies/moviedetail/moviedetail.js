// page/movies/moviedetail/moviedetail.js
import {
  http,
  convertStars,
  convertCast,
  convertCastInfo
} from '../../../utils/utils.js';
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let mid = options.mid;
    let url = app.globalData.doubanUrl + "v2/movie/subject/" + mid;
    http(url, this.getDoubanData);
  },

  getDoubanData: function(douban) {
    if(!douban){
      return;
    }
    let director = {
      avatar: '',
      name: '',
      id: ''
    }

    if (douban.directors[0] != null) {
      if (douban.directors[0].avatars != null) {
        director.avatar = douban.directors[0].avatars.large
      }
      director.name = douban.directors[0].name;
      director.id = douban.directors[0].id;
    }

    let movie = {
      movieImg: douban.images ? douban.images.large : '',
      country: douban.countries[0],
      title: douban.title,
      originalTitle: douban.original_title,
      wishCount: douban.wish_count,
      commentCount: douban.comments_count,
      year: douban.year,
      generes: douban.genres.join('、'),
      stars: convertStars(douban.rating.stars),
      score: douban.rating.average,
      director: director,
      casts: convertCast(douban.casts),
      castsInfo: convertCastInfo(douban.casts),
      summary: douban.summary
    };
    this.setData({
      movie: movie
    });
  },

  viewImg: function(e){
    let src = e.currentTarget.dataset.src;
    wx.previewImage({
      urls: [src],
      current: src
    })
  }
})