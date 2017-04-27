<template>
    <ul v-if="type === 'single'" class="wd-actionsheet-list">
      <li v-for="item in items" class="wd-actionsheet-listitem" @click="itemClick(item.title)">
        <span class="wd-item-title">{{ item.title }}</span>
        <span v-if="item.subtitle" class="wd-item-sub">{{ item.subtitle }}</span>
      </li>
    </ul>
    <ul v-else-if="type === 'radio'" class="wd-actionsheet-list">
      <li v-for="(item, index) in items" class="wd-actionsheet-listitem" @click="radioClick(item.title, index)" :class="{'checked': item.title === selected}">
        <span class="wd-item-title">{{ item.title }}</span>
      </li>
    </ul>
    <ul v-else-if="type === 'checklist'" class="wd-actionsheet-list">
      <li v-for="(item, index) in items" class="wd-actionsheet-listitem">
        <label>
          <wd-actionsheet-checkbox class="custome-checkbox-item" @input="getItems" :nowValue="currentCheck" :text="item.title" :index="index">
          </wd-actionsheet-checkbox>
          <span class="wd-item-title">{{ item.title }}</span>
          <span v-if="item.subtitle" class="wd-item-sub">{{ item.subtitle }}</span>
        </label>
      </li>
    </ul>
</template>

<script>
import CheckBoxSlot from './CheckBoxSlot.vue'
export default {
  name: 'wd-actionsheet-slot',
  components: {
    [CheckBoxSlot.name]: CheckBoxSlot
  },
  props: {
    type: {
      type: String,
      default: 'single'
    },
    items: {
      type: Array,
      default: () => []
    },
    isShowConfirmButton: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: Array
    }
  },
  data() {
    return {
      selected: '',
      currentCheck: [],
      indexList: []
    }
  },
  mounted() {
    this.indexList = (this.defaultValue && this.defaultValue.length > 0) ? (this.defaultValueValidator()) : []
    let self = this
    let list = this.indexList
    if(list && list.length > 0){
      if(this.type === 'radio') {
        this.selected = this.items[list[0]]['title']
        this.$emit('getData', {'_index': list[0], 'value': this.selected})
      } else if (this.type === 'checklist') {
        list.forEach(function(e){
          self.currentCheck.push(self.items[e]['title'])
        })
        this.$emit('getData', {'_index': list, 'value': this.currentCheck})
      }
    }
  },
  methods: {
    defaultValueValidator() {
      let self = this,
        maxLen = this.items.length,
        list = this.defaultValue.filter(function(item, pos) {
          if(item < maxLen) {
            return self.defaultValue.indexOf(Number(item)) === pos
          }
        }),
        len = list.length;
      (len > maxLen) && (list.splice(maxLen, len - maxLen))
      return list
    },
    itemClick(item) {
      this.$emit('getData', item)
      if(!this.$parent.isShowConfirmButton){
        this.$nextTick(function(){
          this.$parent.onItemClick()
        })
      }
    },
    radioClick(item, index) {
      this.selected = item
      this.$emit('getData', {'_index': index, 'value': item})
      if(!this.$parent.isShowConfirmButton){
        this.$nextTick(function(){
          this.$parent.onItemClick()
        })
      }
    },
    getItems(item, index) {
      let valueIndex = this.currentCheck.indexOf(item)
      if(valueIndex === -1) {
        this.currentCheck.push(item)
        this.indexList.push(index)
      } else {
        this.currentCheck.splice(valueIndex, 1)
        this.indexList.splice(this.indexList.indexOf(index), 1)
      }
      this.$emit('getData', {'_index': this.indexList, 'value': this.currentCheck})
    },
  }
}
</script>

<style lang="sass">
  $header-text-color: #9a9a9a;
  $header-text-size: 24px;
  $content-text-color: #222;
  $content-text-size: 32px;
  $content-line-height: 104px;
  $border-color: #ddd;
  $button-background-color: #f7f7f7;
  .wd-actionsheet-list {
    .wd-actionsheet-listitem {
      position: relative;
      padding-right: 40px;
      height: $content-line-height;
      line-height: $content-line-height;
      font-size: $content-text-size;
      color: $content-text-color;
      border-top: 1px solid $border-color;            /* no */
      span {
        display: inline-block;
        &.wd-item-sub {
          position: absolute;
          right: 40px;
          font-size: $header-text-size;
          color: $header-text-color;
        }
      }
      &.checked:after {
        content: "";
        width: 10px;
        height: 18px;
        position: absolute;
        right: 43px;
        top: 43px;
        border-bottom: 2px solid #e9071f;             /* no */
        border-right: 2px solid #e9071f;              /* no */
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      label {
        overflow: hidden;
        display: block;
        height: $content-line-height;
        .wd-actionsheet-checkbox {
          height: $content-line-height !important;
          &.custome-checkbox-item {
            float: none !important;
            margin: 0 !important;
            + span.wd-item-title {
              margin-left: 16px;
              vertical-align: top;
            }
          }
        }
      }
    }
  }
</style>
