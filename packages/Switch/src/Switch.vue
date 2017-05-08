<template>
  <label class="wd-switch">
    <input class="wd-switch-input" :checked="value" @change="changeHandler" type="checkbox">
    <span class="wd-switch-button"></span>
    <div class="wd-switch-label"><slot></slot></div>
  </label>
</template>

<script>
  export default {
    name: 'wd-switch',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeHandler() {
        this.$emit('input', !this.value)
      }
    }
  }
</script>

<style>
.wd-switch {
  display: flex;
  align-items: center;
  position: relative;
}

.wd-switch-input {
  height: 0;
  width: 0;
  visibility: hidden;
}

.wd-switch-button {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 60px;
  border: 1px solid #D9D9D9;
  border-radius: 31px;
  background: #D9D9D9;
}
.wd-switch-button:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,.4);
  transform: translateX(0);
  transition:transform .3s;
}

.wd-switch-input:checked + .wd-switch-button {
  background: #09BB07;
  display: inline-block;
  position: relative;
  border: 1px solid grey;
  border-radius: 31px;
}
.wd-switch-input:checked + .wd-switch-button:after {
  transform: translateX(43px);
}
</style>
