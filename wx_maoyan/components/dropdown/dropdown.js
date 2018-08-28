// components/dropdown/dropdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    json:Array,
    screen: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    self:'自营',
    scroll_bol: false,
    time: ['全部时间', '今天', '明天', '本周末', '一周内', '一个月内'],
    filterName:'',
    color:'black',
    index:0,
    re_index: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    optionTap(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      let num = e.target.dataset.name;
      this.setData({
        index: Index,
        "scroll_bol": !this.data.scroll_bol,
        're_index': e.target.dataset.index
      });
      if (num == '全部时间') {
        this.setData({
          'filterName': '1235',
          'color': 'red',
        })
      }else if (num == '今天') {
        this.setData({
          'filterName': '2018-08-25至2018-08-26',
          'color': 'red',
        })
      }  
      
    },
    click_one:function(e){
      this.setData({
        'scroll_bol': !this.data.scroll_bol,
      })
    },
  }
})
