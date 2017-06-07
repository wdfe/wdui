<template lang="html">
  <div class="imagepreview-container">
    <wd-header title="ImagePreview" fixed>
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <wd-button type="primary" @click.native="openImagePreview1">默认 ImagePreview</wd-button>
    <br>
    <wd-button type="primary" @click.native="openImagePreview2">ImagePreview 自动关闭</wd-button>
    <br>
    <wd-button type="primary" @click.native="openImagePreview3">ImagePreview 隐藏 incaditor</wd-button>
    <br>
    <wd-button type="primary" @click.native="openImagePreview4">ImagePreview 设置默认 index</wd-button>
  </div>
</template>

<script>
export default {
  methods: {
    openImagePreview1() {
      this.$ImagePreview({
        imgList: [
          {
            url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
          },
          {
            url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
          },
          {
            url: 'https://si.geilicdn.com/bj-vshop-251425459-1493795843545-1563709368_456_750.jpg?w=1080&h=1080'
          },
          {
            url: 'https://si.geilicdn.com/vshop251425459-1482230983108-52066-s1.jpg?w=200&h=200&cp=1'
          }
        ]
      })
    },
    openImagePreview2() {
      this.$ImagePreview({
        imgList: [
          {
            url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
          },
          {
            url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
          },
          {
            url: 'https://si.geilicdn.com/bj-vshop-251425459-1493795843545-1563709368_456_750.jpg?w=1080&h=1080'
          },
          {
            url: 'https://si.geilicdn.com/vshop251425459-1482230983108-52066-s1.jpg?w=200&h=200&cp=1'
          }
        ],
        autoClose: true
      })
    },
    openImagePreview3() {
      this.$ImagePreview({
        imgList: [
          {
            url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
          },
          {
            url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
          },
          {
            url: 'https://si.geilicdn.com/bj-vshop-251425459-1493795843545-1563709368_456_750.jpg?w=1080&h=1080'
          },
          {
            url: 'https://si.geilicdn.com/vshop251425459-1482230983108-52066-s1.jpg?w=200&h=200&cp=1'
          }
        ],
        showIndicator: false
      })
    },
    openImagePreview4() {
      this.$ImagePreview({
        imgList: [
          {
            url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
          },
          {
            url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
          },
          {
            url: 'https://si.geilicdn.com/bj-vshop-251425459-1493795843545-1563709368_456_750.jpg?w=1080&h=1080'
          },
          {
            url: 'https://si.geilicdn.com/vshop251425459-1482230983108-52066-s1.jpg?w=200&h=200&cp=1'
          }
        ],
        defaultIndex: 1
      })
    }
  }
}
</script>

<style lang="sass">
.imagepreview-container{
  position: relative;
  justify-content:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .popup {
    display: flex;
    flex-direction: column;
    align-items: center;

    .wd-button,
    p {
      margin-top: 50px;
      text-align: center;
      width: 90%;
    }
  }
  .app-header-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
