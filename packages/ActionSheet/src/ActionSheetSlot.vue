<template>
    <ul v-if="type === 'single'" class="wd-actionsheet-list">
      <li v-for="item in items" class="wd-actionsheet-listitem" @click="itemClick(item)">
        <span v-if="!item.title && !item.subtitle">{{ item }}</span>
        <span v-if="item.title" class="wd-item-title">{{ item.title }}</span>
        <span v-if="item.subtitle" class="wd-item-sub">{{ item.subtitle }}</span>
      </li>
    </ul>
    <ul v-else-if="type === 'radio'" class="wd-actionsheet-list">
      <li v-for="item in items" class="wd-actionsheet-listitem" @click="radioClick(item)" :class="{'checked': item === selected}">
        <span>{{ item }}</span>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'wd-actionsheet-slot',
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
      default: false
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    itemClick(item) {
      this.$emit('getData', item)
      if(!this.$parent.isShowConfirmButton){
        this.$nextTick(function(){
          this.$parent.onItemClick()
        })
      } else {
        this.$nextTick(function(){
          //this.$parent.onConfirm()
        })
      }
    },
    radioClick(item) {
      this.selected = item
      this.$nextTick(function(){
         this.itemClick(item)
      })

    }
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
      height: $content-line-height;                   /* px */
      line-height: $content-line-height;              /* px */
      font-size: $content-text-size;                  /* px */
      color: $content-text-color;
      border-top: 1px solid $border-color;            /* no */
      span {
        display: inline-block;
        &.wd-item-sub {
          position: absolute;
          right: 40px;
          font-size: $header-text-size;               /* px */
          color: $header-text-color;                  /* px */
        }
      }
      &.checked:after {
        content: "";
        width: 10px;                                  /* px */
        height: 18px;                                 /* px */
        position: absolute;
        right: 43px;
        top: 43px;                                    /* px */
        border-bottom: 2px solid #e9071f;             /* no */
        border-right: 2px solid #e9071f;              /* no */
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
</style>
