<template>
  <div>
  	<header class="header">
  		<div class="iconfont">&#xe779;</div>
  		<div class="center"><input type="text" placeholder="输入城市/经典/游玩/主题"/><i class="iconfont">&#xe752;</i></div>
  		<div class="right">城市<span></span></div>
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
<link rel="stylesheet" href="../iconfont/iconfont.css" />
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
		border:none;
		width:4.9rem;
		height:0.6rem;
		border-radius: 0.05rem;
		padding-left:0.6rem;
	}
	.header .center{
			position:relative;
			
	}
	.header .center .iconfont{
		position:absolute;
		color:#999999;
		left:0.2rem;
		top:0.15rem;
	}
	.header .right{
		position:relative;
		width: 0.8rem;
	}
	.header>.right>span:after{
		content:"";
		display:block;
		width:0;
		height:0;
		border:5px solid red;
		border-color:#fff transparent transparent transparent;
		position:absolute;
		left:0.55rem;
		top:0.08rem; 	
	}
	.swiper img{
		height:4rem;
		width:100%;
	}
</style>
