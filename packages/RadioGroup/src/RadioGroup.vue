<template lang="html">
  <div class="wd-radiogroup">
   <ul class="wd-radiogroup-list">
    <li v-for="list in listData">
      <label>
        <wd-radio
        :disChoose="list.disChoose"
        :ifClick="ifClick"
        :name="name"
        :nowValue="currentValue"
        :text="list.value || list"
        v-model="currentValue"
        ></wd-radio>
        <p class="wd-radiogroup-text">{{list.text || list.value || list}}</p>
      </label>
    </li>
   </ul>
  </div>
</template>

<script>
import Radio from '../../Radio/index.js'

export default {
  name: 'wd-radiogroup',
  components: {
    'wd-radio': Radio
  },
  props: {
    listData: {
      type: Array,
      default: function() {
        return []
      },
      required: true
    },
    name: {
      default: 'radio',
      type: String
    },
    value: String //父组件传递的当前已选中
  },
  created() {
    let listTemp = this.listData
    for (let i = 0, listSize = this.listData.length ; i < listSize; i++) {
      if(listTemp[i].disChoose && this.value === listTemp[i].value){
        this.ifClick = false
      }
    }
  },
  data() {
    return {
      ifClick: true,
      currentValue: this.value, //本组件内的存储的当前选中值
    }
  },
  watch: {
    currentValue(val){
      this.$emit('input', val)
    }
  },
  methods: {
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
