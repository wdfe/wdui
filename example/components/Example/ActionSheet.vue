<template lang="html">
  <div class="actionsheet-container">
    <wd-button type="gray" @click.native="showActionSheet1">ActionSheet-单列居中版</wd-button>
    <wd-button type="gray" @click.native="showActionSheet2">ActionSheet-radio版</wd-button>
    <wd-button type="gray" @click.native="showActionSheet3">ActionSheet-checklist两列版</wd-button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  methods: {
    showActionSheet1: function() {
      this.$ActionSheet({
        title: '复制链接',
        content: {
          type: 'single',
          items: ['复制店铺名称+链接','仅复制店铺链接','仅复制店铺名称']
        },
        textAlign: 'center',
        isShowConfirmButton: false,
        onItemClick: (instance, data) => {
          alert(data.selected)
          instance.value = false
        }
      })
    },
    showActionSheet2: function() {
      this.$ActionSheet({
        title: '请选择排序方式',
        content: {
          type: 'radio',
          items: ['名称字母排序', '总交易额', '总订单数', '上次购买时间', '平均交易额', '单次最高交易额'],
        },
        onConfirm: (instance, data) => {
          alert(data.selected)
          instance.value = false
        }
      })

    },
    showActionSheet3: function() {
      this.$ActionSheet({
        title: '分类至(按分类展示商品,方便买家筛选)',
        content: {
          type: 'checklist',
          items: [
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
        },
        onConfirm: (instance, data) => {
          alert(JSON.stringify(data.checkList))
          instance.value = false
        }
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
