<template>
  <label class="switch">
    <input class="switch-input" @change="$emit('change', checked)" v-model="checked" type="checkbox">
    <span class="switch-button"></span>
    <div class="switch-label"><slot></slot></div>
  </label>
</template>

<script>
  export default {
    name: 'switch',
    props: {
      value: Boolean
    },
    computed: {
      checked: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('changeValue', val);
        }
      }
    },
    components: {
    }
  }
</script>

<style>
  .switch {
    display: flex;
    align-items: center;
    position: relative;
  }

  .switch-input {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .switch-button {
    display: inline-block;
    position: relative;
    width: 102px;
    height: 62px;
    border: 1px solid #D9D9D9;
    border-radius: 31px;
    box-sizing: border-box;
    background: #D9D9D9;
  }
  .switch-button:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: 56px;
    border-radius: 56px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    transform: translateX(0);
    transition:transform .3s;
  }

  .switch-input:checked + .switch-button {
    background: #09BB07;
    display: inline-block;
    position: relative;
    border: 1px solid grey;
    border-radius: 31px;
  }
  .switch-input:checked + .switch-button:after {
    transform: translateX(41px);
  }
  .switch-button:active:after {
    /*width: 60px;*/
  }
</style>
