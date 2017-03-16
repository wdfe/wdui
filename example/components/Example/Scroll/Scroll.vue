<template lang="html">
	<div class="scroll-contain">
		<ul>
			<li>
					<router-link :to="'/scroll/refresh'">
           	Refresh <i class="arrow_l"></i>
          </router-link>
      </li>
			<li>
				<router-link :to="'/scroll/loadmore'">
	        Loadmore <i class="arrow_l"></i>
	      </router-link>
	    </li>
			<li>
				<router-link :to="'/scroll/refreshandloadmore'">
	        RefreshAndLoadmore <i class="arrow_l"></i>
	      </router-link>
	     </li>
	    <li>
				<router-link :to="'/scroll/nodata'">
	        NoData <i class="arrow_l"></i>
	      </router-link>
	    </li>
	    <li>
				<router-link :to="'/scroll/multiscroll'">
	        MultiScroll <i class="arrow_l"></i>
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
</style>