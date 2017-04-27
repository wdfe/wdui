<template>
  <div class="wd-cell" @click="cellClickHandler">
    <div class="wd-cell-inner-wrapper">
      <div class="wd-cell-left-wrapper">
        <slot name="left">
          {{ title }}
        </slot>
      </div>
      <div class="wd-cell-right-wrapper">
        <slot name="right">
          {{ value }}
          <img v-if="to" class="wd-cell-goto-icon" src="../../../src/assets/images/right-arrow.png">
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wd-cell',
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    to: {
      type: String
    }
  },
  methods: {
    cellClickHandler() {
      if(this.to) {
        location.href = this.to
      }
    }
  }
}
</script>

<style lang="sass">

$cell-height: 104px;
$cell-left-margin: 40px;
$cell-right-margin: 30px;
$cell-left-font-size: 32px;
$cell-left-color: #222;
$cell-right-font-size: 28px;
$cell-right-color: #9a9a9a;

.wd-cell {
  position: relative;
  height: $cell-height;
  line-height: $cell-height;
  background-color: #FFF;

  .wd-cell-inner-wrapper {
    margin-left: $cell-left-margin;
    height: 100%;
    box-sizing: border-box;
  }

  & + .wd-cell {
    .wd-cell-inner-wrapper {
      border-top: 1px solid rgba(0, 0, 0, 0.15); /* no */
    }
  }

  .wd-cell-left-wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: $cell-left-margin;
    height: 100%;
    font-size: $cell-left-font-size;
    color: $cell-left-color;
  }
  .wd-cell-right-wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    right: $cell-right-margin;
    height: 100%;
    font-size: $cell-right-font-size;
    color: $cell-right-color;

    .wd-cell-goto-icon {
      margin-left: 8px;
      width: 32px;
      height: 32px;
    }
  }
}
</style>
