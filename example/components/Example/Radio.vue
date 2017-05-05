<template lang="html">
  <div class="radio-container">
    <wd-header title="Radio" fixed>
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <br>
    <br>
    <div>
      <p class="radio-header">RadioGroup组件</p>
     <wd-radiogroup :listData="lists" :name="'group1'" v-model="value1"></wd-radiogroup>
     <p class="current-value">当前选中：{{value1}}</p>
    </div>

    <div>
     <wd-radiogroup :listData="lists2" :name="'group2'" v-model="value2"></wd-radiogroup>
      <p class="current-value">当前选中：{{value2}}</p>
    </div>
    <div>
     <wd-radiogroup :listData="lists3" :name="'group3'" v-model="value3"></wd-radiogroup>
      <p class="current-value">当前选中：{{value3}}</p>
    </div>

    <p class="radio-header">单独的Radio组件</p>
    <div class="custome-radiolist">
      <ul class="custome-radiolist-list">
        <li v-for="list in lists4">
          <label>
             <wd-radio
              class="custome-radio"
              :disChoose="list.disChoose"
              :name="'radio1'"
              :nowValue="value4"
              :text="list.value"
              v-model="value4"
              ></wd-radio>
              <p class="custome-text">{{list.value || list}}</p>
          </label>
        </li>
      </ul>
    </div>
    <p class="current-value">当前选中：{{value4}}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: ['选项1', '选项2', '选项3', '选项4'],
      lists2: [{value: '选项1'}, {value: '选中'}, {value: '选项3'}, {value: '被禁用', disChoose: true}],
      lists3: [{value: '选项1'}, {value: '选项2'}, {value: '被禁用', disChoose: true}, {value: '选中禁用', disChoose: true}],
      lists4: [{value: '选项1'}, {value: '选项2'}, {value: '选项3'}, {value: '选项4'}],
      value1: '选项2',
      value2: '选中',
      value3: '选中禁用',
      value4: '选项2'
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
  .custome-radiolist {
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
  .radio-header {
    color: #666666;
    margin-top: 30px;
    margin-left: 10px;
  }
  .custome-radio {
    float: right;
    margin-right: 40px;
  }
  .custome-text {
    display: inline-block;
  }
</style>

