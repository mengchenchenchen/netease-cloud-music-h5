export default {
  // 设备屏幕高度
  screen_height() {
    return screen.height
  },
  // 设备屏幕可用高度
  screen_avail_height() {
    return screen.availHeight
  },
  // 任务栏高度
  taskbar_height() {
    return this.screen_height() - this.screen_avail_height()
  },
  // 浏览器高度
  browser_height() {
    return window.outerHeight
  },
  // 页面可用高度
  page_height() {
    return window.innerHeight
  },
  // 工具栏高度
  toolbar_height() {
    return this.browser_height() - this.page_height()
  },
  // body展示高度
  body_height() {
    return document.getElementsByTagName('body')[0].clientHeight
  },
  // 滚动条高度
  scrollbar_height() {
    return this.page_height() - this.body_height()
  }
}