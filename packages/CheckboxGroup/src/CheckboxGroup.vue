<template lang="html">
  <div class="wd-checkboxgroup">
   <ul class="wd-checkboxgroup-list">
    <li v-for="list in listData">
      <label>
        <wd-checkbox
        :disChoose="list.disChoose"
        :text="list.value || list"
        :nowValue="value"
        v-model="currentCheck"
        ></wd-checkbox>
        <p class="wd-checkboxgroup-text">{{list.text || list.value || list}}</p>
      </label>
    </li>
   </ul>
  </div>
</template>

<script>
import Checkbox from '../../Checkbox/index.js'

export default {
  name: 'wd-checkboxgroup',
  components: {
    'wd-checkbox': Checkbox
  },
  props: {
    listData: {
      type: Array,
      default: function() {
        return []
      },
      require: true
    },
    value: {
      type: Array
    }
  },
  data() {
    return {
      currentCheck: this.value
    }
  },
  watch: {
    value(val){
      this.currentCheck = val
    },
    currentCheck(val){
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
.wd-checkboxgroup {
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
