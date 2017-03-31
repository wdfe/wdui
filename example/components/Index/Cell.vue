<template>
  <div class="cell-container">
    <p>{{ content }}</p>
    <i class="arrow_l"></i>
  </div>
</template>

<script>

export default {
  name: 'cell',
  props: {
    content: {
      default: ''
    }
  }
}
</script>
<style lang="sass">
.cell-container {
  position: relative;
  height: 104px;
  color: #222;
  background-color: #fff;

  p {
    margin-left: 40px;
    height: 103px;
    line-height: 103px;
    font-size: 32px;
    border-top: 1px solid #eee; /* no */
  }

  .arrow_l {
    width: 15px;
    height: 15px;
    display: inline-block;
    background: #CECECE;
    position: absolute;
    transform: rotate(-45deg);
    top: 40px;
    right: 40px;
  }

  .arrow_l::after {
    content: '';
    position: absolute;
    top: -2px;/*no*/
    left: -2px;/*no*/
    width: 15px;
    height: 15px;
    background: #FFFFFF;
      }
}
</style>
