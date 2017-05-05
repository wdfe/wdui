<template>
  <div class="tint">
    <div class="palette" :style="`background-color: ${color};`"></div>
    <p class="color-code">{{ color }}</p>
    <p class="color-desc">{{ desc }}</p>
  </div>
</template>

<script>

export default {
  name: 'Tint',
  props: {
    color: {
      type: String
    },
    desc: {
      type: String
    }
  }
}
</script>
<style lang="sass">

.tint {
  flex: 1;
  height: 144px;
  margin-right: 20px;
  margin-top: 20px;
  background: #FFFFFF;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 100px;

  .palette {
    width: 100%;
    height: 78px;
    border-radius: 4px;
    box-sizing: border-box;
  }

  p {
    padding-left: 10px;

    &.color-code {
      margin-top: 10px;
      font-size: 16px;
      color: #444;
      line-height: 22px;
      font-weight: bold;
    }

    &.color-desc {
      font-size: 12px;
      color: #999;
      line-height: 16px;
    }
  }
}

</style>
