<template lang="html">
	<div class="scroll-contain">
		<ul>
			<li v-for="item in scrollerList">
					<router-link :to="`/scroller/${item.toLowerCase()}`">
           	{{item}} <i class="arrow_l"></i>
          </router-link>
      </li>
		</ul>
	</div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      scrollerList: ['Refresh', 'Loadmore', 'RefreshAndLoadmore', 'NoData', 'MultiScroll']
    }
  },
  created() {},
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="sass">
$title-color: #222222;
$background-color: #FFFFFF;
$text-size: 32px;
$border-color: #DDDDDD;
.scroll-contain {
	display: flex;
	justify-content: center;
	align-items: center;
	ul {
		background: #FFFFFF;
    width: 100%;
    margin-top: 30px;
    li {
      height: 104px;
      line-height: 104px;
      font-size: $text-size; /*px*/
      color: $title-color;
      padding-left: 40px;
      border-bottom: 1px solid $border-color;
      position: relative;
      $arrowBtn: 15px;
      a {
      	display: inline-block;
      	width: 100%;
      }
      .arrow_l {
	      width: $arrowBtn;
	      height: $arrowBtn;
	      display: inline-block;
	      background: #CECECE;
	      position: absolute;
	      transform: rotate(-45deg);
	      top: 40px;
	      right: 40px;
	    }
	    .arrow_l::after {
	      content: '';
	      position: absolute;
	      top: -2px;/*no*/
	      left: -2px;/*no*/
	      width: $arrowBtn;
	      height: $arrowBtn;
	      background: #FFFFFF;
	    }
    }

    & li:last-child {
      border-bottom: none;
    }
  }
}

.scroller-container {
  .page-infinite {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background: #ffffff;
  }
  .page-title {
      font-size: 40px; /*px*/
      margin: 40px auto;
      text-align: center;
      display: block;
      line-height: 1;
  }
  .page-infinite-desc, .page-infinite-listitem {
      text-align: center;
      border-bottom: 1px solid #eee;
  }
  .page-infinite-desc {
      color: #666;
      padding-bottom: 10px;
  }
  .page-infinite-wrapper {
      margin-top: -1px;
      overflow: scroll;
      height: 100%;
      box-sizing: border-box;
      border-left: 1px solid #dddddd;
  }
  .page-infinite-listitem:first-child {
      border-top: 1px solid #eee;
  }
  .page-infinite-listitem {
      height: 100px;
      line-height: 100px;
  }
  .input_area{
    position: absolute;
    bottom: 0;
    height: 60px;
        z-index: 10;
      width: 100%;
      background: palegoldenrod;
  }
  .bottom-text{
    width: 100%;
    text-align: center;
    margin: 20px 0;
    font-size: 20px;/*px*/
    color: #999999;
  }
  .top-text {
    width: 100%;
    text-align: center;
    margin: 20px 0;
    font-size: 20px;/*px*/
    color: #999999;
  }
  .top-text:before {
    width: 48px;
    height: 48px;
    content: '';
    background: url(../../../../src/assets/images/downLoad.png) no-repeat center;
    background-size: 100% 100%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
  }
}
</style>