// components/c-tab-control/c-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event) {
      //获得点击的index
      const index = event.currentTarget.dataset.index
      //修改currentIndex
      this.setData({
        currentIndex: index
      })

      // 通知页面内部的点击事件
      this.triggerEvent('itemClick', { index, title: this.properties.titles[index] }, {})
    }
  }
})
