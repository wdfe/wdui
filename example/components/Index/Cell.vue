<template>
  <div class="cell-container">
    <p>{{ content }}</p>
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
  height: 104px;
  color: #222;
  background-color: #fff;

  p {
    margin-left: 40px;
    height: 103px;
    line-height: 103px;
    font-size: 32px;
    border-bottom: 1px solid #eee; /* no */
  }
}
</style>
