<template lang="html">
  <div class="tooltip-container">
    <app-header title="Tooltip" returnUrl="#/"></app-header>
    <wd-button id="locator1" type="primary" @click.native="flag1 = true">默认 tooltip</wd-button>
    <br>
    <wd-button id="locator2" type="primary" @click.native="flag2 = true">默认 tooltip</wd-button>
    <br>
    <br>
    <br>
    <wd-button id="locator3" type="primary" @click.native="flag3 = true">默认 tooltip</wd-button>
    <br>
    <wd-button id="locator4" type="primary" @click.native="flag4 = true">tooltip 点击 mask 关闭</wd-button>
    <br>
    <wd-button id="locator5" type="primary" @click.native="flag5 = true">tooltip position:bottom</wd-button>
    <wd-tooltip v-model="flag1" :locator="locator1">
      <p @click="flag1 = false">click to close tooltip</p>
    </wd-tooltip>
    <wd-tooltip v-model="flag2" :locator="locator2">
      <p @click="flag2 = false">click to close tooltip</p>
    </wd-tooltip>
    <wd-tooltip v-model="flag3" :locator="locator3">
      <p @click="flag3 = false">click to close tooltip</p>
    </wd-tooltip>
    <wd-tooltip v-model="flag4" :locator="locator4" @maskClick="flag4 = false">
      <p @click="flag4 = false">click to close tooltip</p>
    </wd-tooltip>
    <wd-tooltip v-model="flag5" :locator="locator5" position="bottom">
      <p @click="flag5 = false">click to close tooltip</p>
    </wd-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      locator1: null,
      locator2: null,
      locator3: null,
      locator4: null,
      locator5: null
    }
  },
  mounted() {
    this.locator1 = document.querySelector('#locator1')
    this.locator2 = document.querySelector('#locator2')
    this.locator3 = document.querySelector('#locator3')
    this.locator4 = document.querySelector('#locator4')
    this.locator5 = document.querySelector('#locator5')
  }
}
</script>

<style lang="sass">
.tooltip-container{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  #locator2 {
    display: inline-block;
    width: 250px;
    margin-right: 400px;
  }

  #locator3 {
    display: inline-block;
    width: 250px;
    margin-left: 400px;
  }

  p {
    width: 450px;
    padding: 20px;
  }

  .app-header-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
