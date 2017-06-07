<template lang="html">
  <div class="wd-search">
    <div class="wd-search-arrow">
      <i class="wd-search-arrow-left"></i>
    </div>
    <div class="wd-search-input">
      <div class="wd-search-icon">
        <i class="wd-search-icon-search"></i>
      </div>
      <input type="search" name="" value="" v-model="inputText" @focus="closeIcon = true" :placeholder="placeholder">
      <i class="wd-search-input-close" @click="cleanInput" v-show="closeIcon">✕</i>
    </div>
    <div class="wd-search-button" @click="search">搜索</div>
  </div>
</template>

<script>
export default {
  name: 'wd-search',
  props: {
    placeholder: {
      type: String,
      default: '请输入搜索内容'
    },
    defaultValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      closeIcon: false,
      inputText: this.defaultValue
    }
  },
  methods: {
    cleanInput() {
      this.inputText = ''
      this.closeIcon = false
    },
    search() {
      this.$emit('callback', this.inputText)
    }
  }
}
</script>

<style lang="sass">

.wd-search {
  position: absolute;
  top: 0;
  width: 100%;
  height: 104px;
  display: flex;
  border-bottom: 1px #CACACA solid;
  padding: 16px 0;
  box-sizing: border-box;
  background: #ffffff;

  .wd-search-arrow {
    position: relative;
    width: 96px;
    height: 72px;
    padding: 12px 24px;
    box-sizing: border-box;
    $arrowBtn : 26px;

    .wd-search-arrow-left{
      width: $arrowBtn;
      height: $arrowBtn;
      display: inline-block;
      background: #CECECE;
      position: absolute;
      transform: rotate(135deg);
      top: 22px;
      left: 38px;
    }

    .wd-search-arrow-left::after {
      content: '';
      position: absolute;
      top: -2px;/*no*/
      left: -2px;/*no*/
      width: $arrowBtn;
      height: $arrowBtn;
      background: #FFFFFF;
    }
  }

  .wd-search-input {
    display: flex;
    flex: 1;
    height: 72px;
    box-sizing: border-box;
    background: #EEEEEE;
    border-radius: 4px; /*no*/
    position: relative;
    padding: 18px 24px 18px 0;

    .wd-search-icon {
      display: inline-block;
      width: 84px;
      height: 36px;
      padding: 0 24px;
      border-right: 1px solid #CACACA;
      box-sizing: border-box;

      .wd-search-icon-search {
        display: inline-block;
        width: 20px;
        height: 20px;
        top: 2px;
        background: #EEEEEE;
        border: 1px solid  #737373; /*no*/
        border-radius: 50%;
        position: relative;
      }

      .wd-search-icon-search:after {
        content: "";
        display: block;
        position: absolute;
        width: 2px;
        height: 12px;
        background-color: #737373;
        transform: rotate(-45deg);
        top: 16px;
        left: 22px;
      }
    }

    input {
      flex: 1;
      background: #EEEEEE;
      height: 40px;
      appearance: none;
      border: 0;
      box-sizing: border-box;
      outline: 0;
      outline-offset: -4px;/*no*/
      font-size: 32px;
      color: #222222;
      line-height: 36px;
      padding-left:8px;/*no*/
      margin-top: -4px;
    }

    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    ::-webkit-search-results-button {
      -webkit-appearance: none;
    }

    .wd-search-input-close {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-sizing: border-box;
      background: rgba(0,0,0,0.3);
      color: #ffffff;
      position: absolute;
      font-size: 21px;
      top: 21px;
      right: 24px;
      line-height: 30px;
    }
  }

  .wd-search-button {
     width: 112px;
     height: 70px;
     margin: 0 16px;
     line-height: 72px;
     text-align: center;
     background: #C60A1E;
     border-radius: 4px; /*no*/
     font-size: 28px;
     color: #FFFFFF;
  }
}
</style>
