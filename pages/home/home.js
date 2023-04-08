import request from '../../service/network'

Page({
  data: {

  },
  onLoad(options) {
    //原生的网络请求
    this.get_data_origin()

    //使用分装的request发送网络请求
    request({
      url: 'http://123.207.32.32:8000/recommend'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  get_data_origin() {
    // 1.发送简单的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: (res => {
    //     console.log(res);
    //   })
    // })
    // 2.get请求，但是携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: (res => {
    //     console.log(res);
    //   })
    // })
    // 3.post请求，且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'liang',
    //     age: 19
    //   },
    //   success: (res => {
    //     console.log(res);
    //   }),
    //   fail: (err => {
    //     console.log(err);
    //   })
    // })
  }
})