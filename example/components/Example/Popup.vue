<template lang="html">
  <div class="popup-container">
    <wd-header title="Popup" fixed>
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <br>
    <br>
    <br>
    <br>
    <wd-button type="primary" @click.native="bottom = true">Popup bottom</wd-button>
    <br>
    <wd-button type="primary" @click.native="top = true">Popup top</wd-button>
    <br>
    <wd-button type="primary" @click.native="left = true">Popup left</wd-button>
    <br>
    <wd-button type="primary" @click.native="right = true">Popup right</wd-button>
    <br>
    <br>
    <wd-button type="primary" @click.native="right70 = true">Popup left 70%</wd-button>
    <br>
    <wd-button type="primary" @click.native="left300 = true">Popup left 300px</wd-button>
    <br>
    <wd-button type="primary" @click.native="close = true">Popup 点击 model 关闭</wd-button>
    <br>
    <wd-button type="primary" @click.native="closeMask = true">Popup 点击 mask 关闭</wd-button>
    <wd-popup class="popup" v-model="bottom">
      <wd-button type="gray" @click.native="bottom = false">close bottom</wd-button>
    </wd-popup>
    <wd-popup class="popup" v-model="top" position="top">
      <wd-button type="gray" @click.native="top = false">close top</wd-button>
    </wd-popup>
    <wd-popup class="popup" v-model="left" position="left">
      <wd-button type="gray" @click.native="left = false">close left</wd-button>
    </wd-popup>
    <wd-popup class="popup" v-model="right" position="right">
      <wd-button type="gray" @click.native="right = false">close right</wd-button>
    </wd-popup>
    <wd-popup class="popup" v-model="right70" position="left" cover="70%">
      <wd-button type="gray" @click.native="right70 = false">close left 70%</wd-button>
    </wd-popup>
    <wd-popup class="popup" v-model="left300" position="left" cover="300px">
      <wd-button type="gray" @click.native="left300 = false">close left 300px</wd-button>
    </wd-popup>
    <wd-popup class="popup" v-model="close" position="bottom" cover="50%" closeWhenClicked>
      <p>点击 model 关闭</p>
    </wd-popup>
    <wd-popup class="popup" v-model="closeMask" position="bottom" cover="50%" @maskClick="closeMask = false">
      <p>点击 mask 关闭</p>
    </wd-popup>
    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottom: false,
      top: false,
      left: false,
      right: false,
      right70: false,
      left300: false,
      close: false,
      closeMask: false
    }
  }
}
</script>

<style lang="sass">
.popup-container{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .popup {
    display: flex;
    flex-direction: column;
    align-items: center;

    .wd-button,
    p {
      margin-top: 50px;
      text-align: center;
      width: 90%;
    }
  }
  .app-header-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
