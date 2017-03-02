<template lang="html">
	<div class="wd-checkbox">
    <input type="checkbox" :checked="ifChoose" :disabled="disChoose">
    <span class="wd-checkbox-custominput" :class="{'dis': disChoose}"></span>
	</div>
</template>

<script>
export default {
  props: {
  	disChoose: {
  		default: false,
  		type: Boolean
  	},
  	ifChoose: {
  		default: false,
  		type: Boolean
  	}
  },
  data() {
    return {
    }
  },
  created() {},
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
.wd-checkbox {
	position: relative;
	display: inline-block;
	width: 46px;
	height: 100%;
	input {
		z-index: 10;
    width: 44px;
    height: 44px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    outline: 0;
    top: 50%;
    margin-top: -22px;
	}
	input+&-custominput {
		position:absolute;
		width: 40px;
		height: 40px;
		border: 1px solid #DDDDDD;
		background: #FFFFFF;
		border-radius: 50%;
		display: inline-block;
		top: 50%;
    margin-top: -22px;
	}
	input+&-custominput.dis{
		background: #EEEEEE;
		border: 2px solid #CACACA; 
	}
	input:checked+&-custominput {
		border: 1px solid #F0412F;
		background: #F0412F url('../../../src/assets/images/check_w.png') no-repeat center;
		background-size: 65%;
	}
	input:checked+&-custominput.dis {
		border: 1px solid #CACACA;
		background: #EEEEEE url('../../../src/assets/images/check_b.png') no-repeat center;
		background-size: 65%;
	}
}
</style>