<template>
  <div class="lazyload-container">
    <app-header title="Lazyload" returnUrl="#/"></app-header>
    <ul>
      <li v-for="item in list">
        <img v-lazy="item">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg',
          'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
          'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
          {
            src: 'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
            error: 'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
            loading: 'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg'
          },
          'http://s.qdcdn.com/cl/11527030,800,450.jpg',
          'http://images.ali213.net/picfile/pic/2013-01-23/927_110420130616-16.jpg',
          'http://tupian.enterdesk.com/2012/0605/gha/21/111010114Z4-16.jpg',
          'http://pic.58pic.com/58pic/15/37/91/46U58PICpdR_1024.jpg',
          'http://pic.qiantucdn.com/58pic/17/72/03/90N58PICvMr_1024.jpg',
          'http://img15.3lian.com/2015/f3/16/d/49.jpg',
          'http://img1.3lian.com/2015/w1/73/d/107.jpg',
          'http://pic.58pic.com/58pic/14/67/27/01s58PICMPY_1024.jpg',
          {
            src: 'http://1.img.home77.com/G1/M00/1D/95/wKgB51QncP2Af261AA5fK2hjfH8585.jpg',
            error: 'http://1.img.home77.com/G1/M00/1D/95/wKgB51QncP2Af261AA5fK2hjfH8585.jpg',
            loading: 'http://1.img.home77.com/G1/M00/1D/95/wKgB51QncP2Af261AA5fK2hjfH8585.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
ul {
	width: 100%;
	position: absolute;
	top: 120px;
}
ul li {
  position: relative;
  width: 97%;
  background: #fff;
  padding: .5rem;
  box-shadow: 0 0 1rem #ccc;
  margin: 1.5%;
  box-sizing: border-box;
  text-align: center;
}
ul li img {
  width: 100%;
}
</style>
