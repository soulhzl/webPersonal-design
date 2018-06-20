// page/movies/movies.js
import {
  convertStars
} from "../../utils/utils.js";
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intheaters: {},
    comingsoon: {},
    top250: {},
    searchResult: {},
    containerShow: true,
    searchShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let inTheater = app.globalData.doubanUrl + "v2/movie/in_theaters" + "?start=0&count=3";
    let comingSoon = app.globalData.doubanUrl + "v2/movie/coming_soon" + "?start=0&count=3";
    let top250 = app.globalData.doubanUrl + "v2/movie/top250" + "?start=0&count=3";
    this.getUrlData(inTheater, "intheaters", "正在热映");
    this.getUrlData(comingSoon, "comingsoon", "即将上映");
    this.getUrlData(top250, "top250", "TOP250");
  },

  getUrlData: function(url, setkey, category) {
    let that = this;
    wx.request({
      url: url,
      data: {},
      method: 'GET',
      header: {
        "Content-Type": "application/xml"
      },
      success: function(res) {
        that.getDoubanData(res.data, setkey, category);
      }
    });
  },

  getDoubanData: function(douban, setkey, category) {
    
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
    let readyData = {};
    readyData[setkey] = {
      category: category,
      movies: movies
    };
    this.setData(readyData);
  },

  onMoreTap: function(e) {
    let category = e.currentTarget.dataset.category;
    wx.navigateTo({
      url: 'more/more?category=' + category,
    });
  },

  onMovieTap: function(e){
    let mid = e.currentTarget.dataset.mid;
    wx.navigateTo({
      url: 'moviedetail/moviedetail?mid=' + mid,
    });
  },

  onBindFocus: function() {
    this.setData({
      containerShow: false,
      searchShow: true
    });
  },

  onCancelTap: function() {
    this.setData({
      containerShow: true,
      searchShow: false,
      searchResult: {}
    });
  },

  onBindBlur: function(event) {
    let text = event.detail.value;
    let searchUrl = app.globalData.doubanUrl + "v2/movie/search?q=" + text;
    this.getUrlData(searchUrl, "searchResult", "");
  }

})