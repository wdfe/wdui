<template lang="html">
  <div class="wd-checklist">
   <wd-radiogroup :listData="lists"></wd-radiogroup>
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
          {ifChoose:false, text: '被禁用', disChoose: true},
          {ifChoose:true, text: '选中禁用', disChoose: true}]
    }
  },
  methods: {
  }
}
</script>

