<template lang="html">
 <div class="wd-spin-wrap" :class="type">
   <div v-for="i in 12"></div>
 </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'big'
    }
  }
}
</script>

<style lang="css">
.wd-spin-wrap {
  position: relative;
}
.wd-spin-wrap.big{
  width: 60px;
  height: 60px;
  left: 50%;
}
.wd-spin-wrap.small{
  width: 48px;
  height: 48px;
  display: inline-block;
  vertical-align: middle;
  margin-right: -9px;
}
.wd-spin-wrap > div:nth-child(1) {
  -webkit-animation: wd-spin-wrap 1.2s -0.84s infinite ease-in-out;
          animation: wd-spin-wrap 1.2s -0.84s infinite ease-in-out;
    }
.wd-spin-wrap > div:nth-child(2) {
  -webkit-transform: rotate(30deg);
          transform: rotate(30deg);
          -webkit-animation: wd-spin-wrap 1.2s -0.72s infinite ease-in-out;
                  animation: wd-spin-wrap 1.2s -0.72s infinite ease-in-out;
}
.wd-spin-wrap > div:nth-child(3) {
  -webkit-transform: rotate(60deg);
          transform: rotate(60deg);
          -webkit-animation: wd-spin-wrap 1.2s -0.6s infinite ease-in-out;
                  animation: wd-spin-wrap 1.2s -0.6s infinite ease-in-out;
  }
.wd-spin-wrap > div:nth-child(4) {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
          -webkit-animation: wd-spin-wrap 1.2s -0.48s infinite ease-in-out;
                  animation: wd-spin-wrap 1.2s -0.48s infinite ease-in-out;

}
.wd-spin-wrap > div:nth-child(5) {
  -webkit-animation: wd-spin-wrap 1.2s -0.36s infinite ease-in-out;
          animation: wd-spin-wrap 1.2s -0.36s infinite ease-in-out;
  -webkit-transform: rotate(120deg);
          transform: rotate(120deg);
}
.wd-spin-wrap > div:nth-child(6) {
  -webkit-animation: wd-spin-wrap 1.2s -0.25s infinite ease-in-out;
          animation: wd-spin-wrap 1.2s -0.25s infinite ease-in-out;
  -webkit-transform: rotate(150deg);
          transform: rotate(150deg);
}
.wd-spin-wrap > div:nth-child(7) {
  -webkit-animation: wd-spin-wrap 1.2s -0.12s infinite ease-in-out;
          animation: wd-spin-wrap 1.2s -0.12s infinite ease-in-out;
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.wd-spin-wrap > div:nth-child(8) {
  -webkit-animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
          animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
  -webkit-transform: rotate(-150deg);
          transform: rotate(-150deg);

}
.wd-spin-wrap > div:nth-child(9) {
  -webkit-animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
          animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
  -webkit-transform: rotate(-120deg);
          transform: rotate(-120deg);
}
.wd-spin-wrap > div:nth-child(10) {
  -webkit-animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
          animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
}
.wd-spin-wrap > div:nth-child(11) {
  -webkit-animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
          animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
  -webkit-transform: rotate(-60deg);
          transform: rotate(-60deg);
}
.wd-spin-wrap > div:nth-child(12) {
  -webkit-animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
          animation: wd-spin-wrap 1.2s -0s infinite ease-in-out;
  -webkit-transform: rotate(-30deg);
          transform: rotate(-30deg);
}
.wd-spin-wrap.small > div {
  background-color: #000;
  width: 4px;
  height: 11px;
  border-radius: 4px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  position: absolute;
  transform-origin: center 10px; /*no*/
}
.wd-spin-wrap.big > div {
  background-color: #fff;
  width: 6px;
  height: 14px;
  border-radius: 4px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  position: absolute;
  transform-origin: center 14px; /*no*/
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
