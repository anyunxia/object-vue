<template>
  <div>
  	<header class="header">
  		<div>返回</div>
  		<div><input type="text" /></div>
  		<div>城市</div>
  	</header>
  	 <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="swiper">
    <!-- slides -->
		    <swiper-slide><img src="../../assets/img/a.jpg" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../assets/img/b.jpg" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../assets/img/c.jpg" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../assets/img/d.jpg" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../assets/img/e.jpg" alt="" /></swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoplay: true,//可选选项，自动滑动
          direction:'horizontal'//水平滚动
        }
    }
  }
}
</script>

<style scoped>
	.header{
		display: flex;
		height:0.86rem;
		background: deepskyblue;
		font-size:0.24rem;
		color:#fff;
		justify-content: space-between;
		align-items: center;
		padding:0 0.2rem;
	}
	.header input{
		border:0;
		width:5.5rem;
		height:0.6rem;
		border-radius: 0.05rem;
	}
	.swiper img{
		height:4rem;
		width:100%;
	}
</style>
