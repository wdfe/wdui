<template lang="html">
  <div class="actionsheet-container">
    <wd-button type="gray" @click.native="showActionSheet">有确定按钮版左右两列ActionSheet</wd-button>
    <wd-button type="gray" @click.native="showActionSheet1">无确定单列版ActionSheet</wd-button>
  </div>
</template>

<script>
export default {
  methods: {
    showActionSheet: function() {
      this.$ActionSheet({
        title: '分类至(按分类展示商品,方便买家筛选)',
        actions: [
          {
            title: '男士背包',
            subtitle: '共1件商品'
          },
          {
            title: '男士公文包',
            subtitle: '共0件商品'
          },
          {
            title: '女士背包',
            subtitle: '共1件商品'
          }
        ],
        isShowConfirmButton: true,
        confirmText: '确定',
        cancelText: '取消'
      })
    },
    showActionSheet1: function() {
      this.$ActionSheet({
        title: '复制链接',
        theme: {
          type: 'center'
        },
        actions: ['复制店铺名称+链接','仅复制店铺链接','仅复制店铺名称'],
        cancelText: '取消'
      })
    }
  }
}
</script>

<style lang="sass">
.actionsheet-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &>button {
      margin-top: 30px;
  }
}

</style>
