<template>
  <div class="wd-badge" :class="{noValue: value === undefined, border: border}">{{ content }}</div>
</template>

<script>
export default {
  name: 'wd-badge',
  props: {
    value: {
      type: [Number, String]
    },
    limit: {
      type: Number
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    content() {
      if(typeof this.value === 'number' && this.limit !== undefined && this.value > this.limit) {
        return `${this.limit}+`
      }else {
        return this.value
      }
    }
  }
}
</script>

<style lang="sass">

.wd-badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  height: 36px;
  line-height: 36px;
  min-width: 12px;
  font-size: 24px;
  background-color: #E9071F;
  color: #fff;
  border-radius: 18px;

  &.noValue {
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
    min-width: 20px;
  }

  &.border {
    border: 1px solid #fff; /* no */
  }
}
</style>
