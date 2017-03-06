<template lang="html">
  <div class="wd-checklist">
   <wd-checkgroup :listData="lists"></wd-checkgroup>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data() {
    return {
     lists: [{ifChoose: false, text: '多选项', disChoose: false},
          {ifChoose: true, text: '选中', disChoose: false},
          {ifChoose:false, text: '被禁用', disChoose: true},
          {ifChoose:true, text: '选中禁用', disChoose: true}]
    }
  },
  methods: {
  }
}
</script>

