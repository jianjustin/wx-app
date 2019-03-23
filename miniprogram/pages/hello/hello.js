// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index_swiper: 0,
    data_imgs: [
      "../../images/qiepian04.png",
      "../../images/qiepian05.png",
      "../../images/qiepian06.png",
      "../../images/qiepian07.png",
      "../../images/qiepian08.png",
      "../../images/qiepian09.png",
      "../../images/qiepian10.png",
      "../../images/qiepian11.png",
      "../../images/qiepian12.png",
      "../../images/qiepian13.png",
      "../../images/qiepian14.png",
      "../../images/qiepian15.png",
    ],
        article:[
      {
         "pic": "../../images/user.png",
        "name": "武大大",
        "text": "。我非常非常的不开心。这下好了。浪费了一堆一堆钱。。啊啊啊啊平穷限制了我的想象力！！！！！！！。",
      "images": [
               "../../images/IMG_9510.JPG",
              "../../images/IMG_9511.JPG",
              "../../images/IMG_9512.JPG",
        ],
        "like": 51,
        "comment": 10
      },
      {
        "pic": "../../images/",
        "name": "武大大",
        "text": "。我非常非常的不开心。这下好了。浪费了一堆一堆钱。。啊啊啊啊平穷限制了我的想象力！！！！！！！。",
        "images": [
          "../../images/IMG_9510.JPG",
          "../../images/IMG_9511.JPG",
          "../../images/IMG_9512.JPG",
        ],
        "like": 51,
        "comment": 10
      },
      {
        "pic": "../../images/user.png",
        "name": "武大大",
        "text": "我非常非常的不开心。这下好了。浪费了一堆一堆钱。。啊啊啊啊平穷限制了我的想象力！！！！！！！。",
        "images": [
          "../../images/IMG_9510.JPG",
          "../../images/IMG_9511.JPG",
          "../../images/IMG_9512.JPG",
        ],
        "like": 51,
        "comment": 10
      }
    ],
    biaoti:[
      "热门",
      "关注",
    ]

  },
changenum: function(e) {
  console.log(e.detail.current)
  this.setData({
    index_swiper: e.detail.current
  })
},
classtop: function(e) {
  console.log(e.currentTarget.dataset.num)
  this.setData({
    index_swiper: e.currentTarget.dataset.num
  })
}
})