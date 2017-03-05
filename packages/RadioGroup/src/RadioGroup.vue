<template lang="html">
  <div class="wd-radiogroup">
   <ul class="wd-radiogroup-list">
    <li v-for="list in listData">
      <label>
        <wd-radio 
        :disChoose="list.disChoose"
        :ifChoose="list.ifChoose"
        :ifClick="ifClick"
        v-model="list.ifChoose"
        ></wd-radio>
        <p class="wd-radiogroup-text">{{list.text}}</p>
      </label>
    </li>
   </ul>
  </div>
</template>

<script>
import wdRadio from './Radio.vue'
export default {
  name: 'wd-radiogroup',
  props: {
    listData: {
      default: [],
      type: Array
    }
  },
  computed: {
    ifClick() {
      //是否可点击
      let listTemp = this.listData
      for (let i = 0, listSize = this.listData.length ; i < listSize; i++) {
        if(listTemp[i].disChoose){
          return false
        }
      }
    }
  },
  data() {
    return {
      ifClick: true
    }
  },
  methods: {
  },
  components: {
    wdRadio
  }
}
</script>

<style lang="sass" scoped>
 $title-color: #222222;
 $background-color: #FFFFFF;
 $text-size: 32px;
 $border-color: #DDDDDD;
.wd-radiogroup {
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
      display: flex;
    }
  }
  &-text {
      display: inline-block;
      flex: 1;
      margin-left: 20px;
    }
  & li:last-child{
    border-bottom: none;
  }
}
</style>
