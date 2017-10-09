<template>
  <div class="wd-actionsheet-checkbox">
    <input type="checkbox" v-model="currentCheck" :disabled="disChoose" :value="text" :index="index" @change="changeCheck(text, index)">
    <span class="wd-actionsheet-checkbox-custominput" :class="{'dis': disChoose}"></span>
  </div>
</template>

<script>
export default {
  name: 'wd-actionsheet-checkbox',
  props: {
    disChoose: {
      default: false,
      type: Boolean
    },
    nowValue: {
      type: Array,
      default: function() {
        return []
      }
    },
    text: {
      type: String
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      currentCheck: this.nowValue
    }
  },
  watch: {
    nowValue(val) {
      this.currentCheck = val
    }
  },
  methods: {
    changeCheck(text, index){
      this.$emit('input', text, index)
    }
  }
}
</script>

<style lang="sass" scoped>
.wd-actionsheet-checkbox {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 100%;
  input {
    z-index: 10;
    width: 44px;
    height: 44px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    outline: 0;
    top: 50%;
    margin-top: -22px;
  }
  input+&-custominput {
    position:absolute;
    width: 40px;
    height: 40px;
    border: 1px solid #DDDDDD; /* no */
    background: #FFFFFF;
    border-radius: 50%;
    display: inline-block;
    top: 50%;
    margin-top: -22px;
  }
  input+&-custominput.dis{
    background: #EEEEEE;
    border: 2px solid #CACACA;
  }
  input:checked+&-custominput {
    border: 1px solid #F0412F; /* no */
    background: #F0412F url('../../../src/assets/images/check_w.png') no-repeat center;
    background-size: 65%;
  }
  input:checked+&-custominput.dis {
    border: 1px solid #CACACA; /* no */
    background: #EEEEEE url('../../../src/assets/images/check_b.png') no-repeat center;
    background-size: 65%;
  }
}
</style>
