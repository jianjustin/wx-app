// pages/home/home.js
Page({
  data: {
    index_swiper:0,
    icon:[
      "../../images/run.png",
      "../../images/ride.png",
      "../../images/walk.png",
     "../../images/fitness.png",
    ],
  icontext:[
           "跑步",
           "骑车",
           "走路",
           "健身",
  ],
  iconcc:[
      {
        "style":"累计跑步",
        "num":"0",
        "aim":"500",
        "end":"131"
      },
      {
        "style": "累计骑车",
        "num": "1",
        "aim": "500",
        "end": "131"
      },
      {
        "style": "今日步数",
        "num": "2",
        "aim": "500",
        "end": "131"
      },
      {
        "style": "今日健身",
        "num": "3",
        "aim": "500",
        "end": "131"
      }
  ]
  },
  changenum:function(e){
    console.log(e.detail.current)
    this.setData({
      index_swiper:e.detail.current
    })
  },
  classtop:function(e){
    console.log(e.currentTarget.dataset.num)
    this.setData({
      index_swiper:e.currentTarget.dataset.num
    })
  },

})

 