<template>
  <transition name="wd-toast">
    <div class="wd-toast-mask" v-if="visible" :class="{'wd-toast-theme-light': theme === 'Light'}" >
      <div class="wd-toast-box" :class="{'wd-toast-box-haveicon': iconClass !== ''}">
        <i class="wd-toast-icon" :class="iconClass" v-if="iconClass !== '' && iconClass != 'loader'"></i>
        <loaderIcon v-if="iconClass === 'loader'" :type="theme == 'Light' ? 'small' : 'big'"></loaderIcon>
        <span v-html="content"></span>
      </div>
    </div>
  </transition>
</template>
<script>
import loaderIcon from './Loader.vue'
export default {
  props: {
    theme: {
      default: 'Dark',
      type: String
    },
    content: {
      default: '提示',
      type: String
    },
    iconClass: {
      default: '',
      type: String
    }
  },
  components: {
    loaderIcon
  },
  data(){
    return {
      visible: false
    }
  }
}
</script>

<style lang="sass" scoped>
.wd-toast-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index:29999;
  transition: opacity .3s linear;

  .wd-toast-box {
    position: absolute;
    overflow: hidden;
    z-index: 30000;
    top: 50%;
    left: 50%;
    max-width: 480px;
    box-sizing: border-box;
    font-size: 32px;
    line-height: 45px;
    transform: translate(-50%, -50%);
    outline: none;
    padding: 32px 40px;
    text-align: center;
    background: rgba(33,33,33,0.90);
    border-radius: 8px;
    color: #ffffff;
  }

  .wd-toast-box-haveicon {
    width: 240px!important;
    padding: 56px 40px;
    text-align: center;
  }

  .wd-toast-icon {
    display: block;
    margin: 0 auto;
    margin-bottom: 24px;
    vertical-align: sub;
  }

  .success {
    width: 88px;
    height: 64px;
    background: url(../../../src/assets/images/fill.png) no-repeat;
    background-size: 88px auto;
  }
}

.wd-toast-theme-light {
  background: rgba(0,0,0,0.40)!important;

  .wd-toast-box {
    background: #FFFFFF;
    color: #222222;
  }

  .wd-toast-box-haveicon {
    width: 560px!important;
    text-align: center;
    padding: 32px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wd-toast-icon {
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 0;
  }

  .success {
    height: 48px;
    background-size: 48px auto;
  }
}

.wd-toast-enter-active, .wd-toast-leave-active {
  transition: opacity .5s
}

.wd-toast-enter, .wd-toast-leave-active {
  opacity: 0
}
</style>
