<template lang="html">
  <div class="checkbox-container">
    <wd-header title="Checkbox" fixed>
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <br>
    <br>
    <div class="wd-checklist">
      <p class="radio-header">CheckGroup组件</p>
      <wd-checkboxgroup :listData="lists1" v-model="value1"></wd-checkboxgroup>
      <p class="current-value">当前选中：{{value1}}</p>
    </div>
    <div class="wd-checklist">
      <wd-checkboxgroup :listData="lists2" v-model="value2"></wd-checkboxgroup>
      <p class="current-value">当前选中：{{value2}}</p>
    </div>
    <p class="checkbox-header">单独的Checkbox组件</p>
    <div class="custome-checkbox">
      <ul class="custome-checkbox-list">
        <li v-for="list in lists3">
          <label>
             <wd-checkbox
              class="custome-checkbox-item"
              :disChoose="list.disChoose"
              :nowValue="value3"
              :text="list.value || list"
              v-model="value3"
              ></wd-checkbox>
              <p class="custome-text">{{list.value || list}}</p>
          </label>
        </li>
      </ul>
    </div>
    <p class="current-value">当前选中：{{value3}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists1: ['选项1', '选项2', '选项3', '选项4'],
      lists2: [{value: '多选项'},
          {value: '选中'},
          {value: '被禁用', disChoose: true},
          {value: '选中禁用', disChoose: true}],
      lists3: ['选项1', '选项2', '选项3', '选项4'],
      value1: [],
      value2: ['选中', '选中禁用'],
      value3: []
    }
  },
  methods: {
  }
}
</script>
<style lang="sass">
  $title-color: #222222;
  $background-color: #FFFFFF;
  $text-size: 32px;
  $border-color: #DDDDDD;
  .custome-checkbox {
    background: #FFFFFF;
    width: 100%;
    margin-top: 30px;
    &-list {
      padding-left: 40px;
      box-sizing: border-box;
    }
    & li {
      height: 104px;
      line-height: 104px;
      font-size: $text-size; /*px*/
      color: $title-color;
      border-bottom: 1px solid $border-color;
      label {
        width: 100%;
        height: 100%;
      }
    }
    &-text {
        display: inline-block;
        flex: 1;
        margin-left: 20px;
      }
    & li:last-child {
      border-bottom: none;
    }
    .current-value {
      padding-left:0px;
    }
  }
  .checkbox-header {
    color: #666666;
    margin-top: 30px;
    margin-left: 10px;
  }
  .custome-checkbox-item {
    float: right;
    margin-right: 40px;
  }
  .current-value{
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #ffffff;
    box-sizing: border-box;
    margin-top: 10px;
    padding-left: 40px;
  }
</style>
