
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var util = require('../../utils/util.js');
var qqmapsdk;
Page({
    data: {
        latitude: '',
        longitude: '',
        address: '',
        time: '',
        imgNum: 0,
        imgUrls: [],
        items: [
            { value: '明确' },
            { value: '不明确', checked: 'true' },
        ],
        array: ['京', '粤', '沪', '津', '湘', '鄂', '豫', '冀'],
        index: 0,
        showView: true
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        // 实例化API核心类        
        qqmapsdk = new QQMapWX({
            key: 'PVVBZ-GIVKU-QPCVK-44VDG-GB35T-7DFSJ'
        });
        var that = this;
        wx.getLocation({
            type: 'gcj02',
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
                            address: res.result.address,
                            time: util.formatTime(new Date())
                        })
                    },
                });
            }
        });
        showView: (options.showView == "true" ? true : false)
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
    openMap: function () {
        var that = this;
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                wx.chooseLocation({
                    success: function (res) {
                        that.setData({
                            address: res.address,
                            time: util.formatTime(new Date())
                        })
                    }
                })
            }
        })

    },
    up: function (e) {
        var that = this;
        console.log(e)
        wx.chooseImage({
            success: function (res) {
                var tempFilePaths = res.tempFilePaths
                console.log(tempFilePaths)
                that.setData({
                    imgUrls: imgUrls.push(tempFilePaths)
                })
                // wx.uploadFile({
                //     url: '	http://jtb-1253661417.cossh.myqcloud.com/images', //仅为示例，非真实的接口地址
                //     filePath: tempFilePaths[0],
                //     name: 'file',
                //     formData: {
                //         'user': 'test'
                //     },
                //     success: function (res) {
                //         var data = res.data
                //         //do something
                //     }
                // })
            }
        })
    },
    datePickerBindchange: function (e) {
        this.setData({
            dateValue: e.detail.value,
        })
    },
    onChangeShowState: function () {
        var that = this;
        that.setData({
            showView: (!that.data.showView)
        })
        console.log(this.data.showView)
    }
})