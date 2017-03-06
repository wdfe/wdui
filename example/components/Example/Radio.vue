<template lang="html">
  <div>
    <div class="wd-checklist">
     <wd-radiogroup :listData="lists"></wd-radiogroup>
    </div>
    <div class="wd-checklist">
     <wd-radiogroup :listData="lists2"></wd-radiogroup>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data() {
    return {
      lists: [{ifChoose: false, text: '单选项', disChoose: false},
          {ifChoose: true, text: '选中', disChoose: false},
          {ifChoose:false, text: '被禁用', disChoose: false},
          {ifChoose: false, text: '选中禁用', disChoose: false}],
      lists2: [{ifChoose: false, text: '单选项', disChoose: false},
          {ifChoose: true, text: '选中', disChoose: false},
          {ifChoose:false, text: '被禁用', disChoose: true},
          {ifChoose:true, text: '选中禁用', disChoose: true}]
    }
  },
  methods: {
  }
}
</script>

