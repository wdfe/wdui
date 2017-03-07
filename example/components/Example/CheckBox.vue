<template lang="html">
  <div class="wd-checklist">
   <wd-checkgroup :listData="lists" v-model="value1"></wd-checkgroup>
     <p class="current-value">当前选中：{{value1}}</p>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data() {
    return {
      lists: [{value: '多选项', disChoose: false},
          {value: '选中', disChoose: false},
          {value: '被禁用', disChoose: true},
          {value: '选中禁用', disChoose: true}],
      value1: ['选中','选中禁用']
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
