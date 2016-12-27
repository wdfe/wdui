<template>
  <transition name="wd-toast">
    <div class="wd-toast-mask" v-if="visible" :class="{'wd-toast-theme-light': theme === 'Light'}" >
      <div class="wd-toast-box" :class="{'wd-toast-box-haveicon': iconClass !== ''}">
        <i class="wd-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
        <span v-html="content"></span>
      </div>
    </div>
  </transition>
</template>
<script>
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
  data(){
    return {
      visible: false
    }
  }
}
</script>
<style lang="sass" src="./Toast.scss" scoped></style>
