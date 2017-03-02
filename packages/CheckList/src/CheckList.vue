<template lang="html">
  <div class="wd-checklist">
   <ul class="wd-checklist-list">
    <li v-for="list in lists">
      <label>
        <wd-checkbox 
        :disChoose="list.disChoose"
        :ifChoose="list.ifChoose"
        ></wd-checkbox>
        <p class="wd-checklist-text">{{list.text}}</p>
      </label>
    </li>
   </ul>
  </div>
</template>

<script>
import wdCheckbox from './CheckBox.vue'
export default {
  name: 'wd-checklist',
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
  },
  components: {
    wdCheckbox
  }
}
</script>

<style lang="sass" src="./CheckList.scss" scoped>
</style>
