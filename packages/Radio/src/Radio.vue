<template lang="html">
  <div class="wd-radio">
    <input type="radio" v-model="currentValue" :name="name" :value="text"  :disabled="disChoose || !ifClick" @change="changeCheck()">
    <span class="wd-radio-custominput" :class="{'dis': disChoose}"></span>
  </div>
</template>

<script>
export default {
  name: 'wd-radio',
  props: {
    disChoose: {
      default: false,
      type: Boolean
    },
    ifClick: {
      default: true,
      type: Boolean
    },
    name: {
      default: 'radio',
      type: String
    },
    nowValue: {
      type: String
    },
    text: {
      type: String
    }
  },
  data() {
    return {
      currentValue: this.nowValue
    }
  },
  watch: {
    nowValue(val) {
      this.currentValue = val
    }
  },
  created() {},
  mounted() {
  },
  methods: {
    changeCheck(){
      if(this.ifClick){
        this.$emit('input', this.currentValue)
      }else{
        return
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.wd-radio {
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
    border: 1px solid #DDDDDD;
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
    border: 1px solid #F0412F;
  }
  input:checked+&-custominput:after{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #F0412F;
    border-radius:100%;
    margin: -10px 0 0 -10px;
    top: 50%;
    left: 50%;
  }
  input:checked+&-custominput.dis {
    border: 1px solid #CACACA;
    background: #EEEEEE;
    background-size: 65%;
  }
  input:checked+&-custominput.dis:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #CACACA;
    border-radius:50%;
    margin: -10px 0 0 -10px;
    top: 50%;
    left: 50%;
  }
}
</style>
