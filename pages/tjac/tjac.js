Page({
  data: {
    dateValue: '请选择车辆上路时间',
    array: ['京', '粤', '沪', '津','湘', '鄂', '豫', '冀'],
    index: 0
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value,
    })
  }
})
