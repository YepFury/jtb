//index.js
//获取应用实例
var app = getApp();
var bmap = require('../../libs/bmap-wx.min.js');
Page({
  data: {
    weatherData: '',
    washingCar: '',
    wh: '',
    scrollTop: 0,
    imgUrls: [
      'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/jtb_banner1%402x.png',
      'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/jtb_banner2%402x.png',
      'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/jtb_banner3%402x.png'
    ],
    icons: [
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_handle%402x.png',
        text: '事故处理',
        tap: 'toSgcl'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_report@2x.png',
        text: '违法举报',
        tap: 'toWfjb'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_move@2x.png',
        text: '移车服务'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_inquiry@2x.png',
        text: '违法查询'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_road@2x.png',
        text: '路况服务'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_rescue@2x.png',
        text: '救援服务'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_news@2x.png',
        text: '交通新闻'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_stop@2x.png',
        text: '停停找找'
      },
    ],
    nearby: [
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_parking@2x.png',
        text: '停车场'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_gas@2x.png',
        text: '加油站'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_repair@2x.png',
        text: '维修点'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_charge@2x.png',
        text: '充电桩'
      },
      {
        url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_station@2x.png',
        text: '交管服务'
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,

  },

  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'VSASKARS25UKddfxGyjsSwWcEhEubl8Q'
    });
    // 发起weather请求 
    BMap.weather({
      fail: function (data) {
        wx.showToast({
          title: 'data',
          duration: 2000
        })
      },
      success: function (data) {
        var weatherData = data.originalData.results[0].weather_data[0];
        var washingCar = data.originalData.results["0"].index[1];
        var date = new Date();
        if (date.getHours() >= 18) {
          weatherData.img = weatherData.nightPictureUrl;
        }
        else {
          weatherData.img = weatherData.dayPictureUrl;
        }
        that.setData({
          weatherData: weatherData,
          washingCar: washingCar
        });
      }
    });
    // wx.request({
    //   url: 'http://v.juhe.cn/xianxing1',
    //   data: {
    //     city: 'hangzhou',
    //     key: '2b098c12b896adec1e5fb6a6563355b9'
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     var wh = res.data.result.xxweihao[0] + '和' + res.data.result.xxweihao[1];
    //     that.setData({
    //       wh: wh
    //     });
    //   }
    // })
  },
  toTjac: function () {
    wx.navigateTo({
      url: '../tjac/tjac',
      success: function(){
      },
      fail: function() {
      }
    })
  },
  toSgcl: function () {
    wx.navigateTo({
      url: '../sup/sup',
      success: function(){
      },
      fail: function() {
      }
    })
  },
  toWfjb: function () {
    wx.navigateTo({
      url: '../sgcl/sgcl',
      success: function(){
      },
      fail: function() {
      }
    })
  },
  buyNew: function() {
    console.log(1)
    wx.navigateTo({
      url: 'http://mai.m.yiche.com/',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})

