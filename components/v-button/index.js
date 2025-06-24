Component({
  properties: {
    // 按钮类型
    type: {
      type: String,
      value: 'default' // default, primary, success, warning, danger
    },
    // 按钮大小
    size: {
      type: String,
      value: 'medium' // small, medium, large
    },
    // 按钮文本
    text: {
      type: String,
      value: '按钮'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 是否加载中
    loading: {
      type: Boolean,
      value: false
    },
    // 是否为朴素按钮
    plain: {
      type: Boolean,
      value: false
    },
    // 是否为圆形按钮
    round: {
      type: Boolean,
      value: false
    },
    // 自定义样式类
    customClass: {
      type: String,
      value: ''
    }
  },

  data: {

  },

  methods: {
    // 点击事件
    handleClick(e) {
      if (this.data.disabled || this.data.loading) {
        return
      }

      // 触发父组件事件
      this.triggerEvent('click', {
        detail: e.detail
      })
    }
  }
})
