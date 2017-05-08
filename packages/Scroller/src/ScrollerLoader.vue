<template lang="html">
<div class="wd-scroll-loader">
  <div class="wd-spin-wrap small" >
    <div v-for="i in 12"></div>
  </div>
  <span>{{text}}</span>
</div>

</template>

<script>
export default {
  name: 'wd-scroller-loader',
  props: {
    type: {
      type: String,
      default: 'big'
    },
    text: {
      type: String,
      default: '正在加载'
    }
  }
}
</script>

<style lang="sass" scoped>
.wd-scroll-loader {
  width: 100%;
  height: 104px;
  text-align: center;
  padding: 28px 0;
  box-sizing: border-box;
  font-size: 20px;
  color: #222222;
  letter-spacing: 0;
  line-height: 46px;
}
.wd-spin-wrap {
  position: relative;
}
.wd-spin-wrap.big{
  margin-left: 60px;
  width: 60px;
  height: 60px;
  left: 50%;
}
.wd-spin-wrap.small{
  margin-left: 48px;
  width: 48px;
  height: 48px;
  display: inline-block;
  vertical-align: middle;
  margin-right: -9px;
}
@for $i from 1 through 12 {
  .wd-spin-wrap > div:nth-child(#{$i}) {
    transform: rotate((30deg *($i - 1)));
    animation: wd-spin-wrap 1.2s (-0.1*$i) * 1s infinite ease-in-out;
  }
}
.wd-spin-wrap.small > div {
  background-color: #000;
  width: 4px;
  height: 11px;
  border-radius: 4px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  position: absolute;
  transform-origin: center 20px;
}
.wd-spin-wrap.big > div {
  background-color: #fff;
  width: 6px;
  height: 14px;
  border-radius: 4px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  position: absolute;
  transform-origin: center 28px;
}
@-webkit-keyframes wd-spin-wrap {
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
@keyframes wd-spin-wrap {
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

</style>
