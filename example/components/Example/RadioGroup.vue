<template lang="html">
  <div>
    <div>
     <wd-radiogroup :listData="lists" :name="'group1'" v-model="value1"></wd-radiogroup>
     <p class="current-value">当前选中：{{value1}}</p>
    </div>
    
    <div>
     <wd-radiogroup :listData="lists2" :name="'group2'" v-model="value2"></wd-radiogroup>
      <p class="current-value">当前选中：{{value2}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data() {
    return {
      lists: [{value: '选项1', disChoose: false},
          {value: '选项2', disChoose: false},
          {value: '选项3', disChoose: false},
          {value: '选项4', disChoose: false}],
      lists2: [{value: '单选项', disChoose: false},
          {value: '选中', disChoose: false},
          {value: '被禁用', disChoose: true},
          {value: '选中禁用', disChoose: true}],
      value1: '选项2',
      value2: ''
    }
  },
  methods: {

  }
}
</script>
<style>
  .current-value{
    margin: 20px;
    padding-left: 40px;
    box-sizing: border-box;
  }
</style>

