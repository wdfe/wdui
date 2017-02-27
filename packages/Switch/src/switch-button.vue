<template>
  <div class="switch-button">
    <input id="btn" v-model="checked" type="checkbox">
    <label for="btn"></label>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked: true
      }
    },
    watch: {
      checked () {
        if (this.checked) {
          this.$emit('checked')
        } else {
          this.$emit('unchecked')
        }
      }
    }
  }
</script>

<style>
  .switch-button {
    width: 200px;
  }
  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    width: 100px;
    height: 60px;
    background: white;
    display: block;
    border: 1px solid lightgray;
    border-radius: 30px;
    position: relative;
  }
  label:after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 56px;
    height: 56px;
    background: #fff;
    border: 1px solid lightgray;
    border-radius: 50%;
    /*box-shadow: 0 0 4px #000, 0 4px 23px #000, -2px 4px 4px #000;*/
    transition: 0.3s;
  }

  input:checked + label {
    background: #09BB07;
  }
  input:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  label:active:after {
    width: 50px;
  }
</style>
