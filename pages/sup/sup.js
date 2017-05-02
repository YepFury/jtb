// pages/sup/sup.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
    data: {
        area: '',
        person: '',
        latitude: '',
        longitude: ''
    },
    toSup: function (e) {
        wx.navigateTo({
            url: '../sgcl/sgcl',
            success: function () {
            },
            fail: function () {
            }
        })
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        // 实例化API核心类        
        qqmapsdk = new QQMapWX({
            key: 'PVVBZ-GIVKU-QPCVK-44VDG-GB35T-7DFSJ'
        });
        var that = this;
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude
                })
                qqmapsdk.reverseGeocoder({
                    location: {
                        latitude: that.data.latitude,
                        longitude: that.data.longitude
                    },
                    success: function (res) {
                        that.setData({
                            area: res.result.address_component.city + "地区支持情况",
                            person: 20
                        })
                    },
                });
            }
        });

    },
    onReady: function () {
        // 页面渲染完成

    },
    onShow: function () {
        // 页面显示

    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
})