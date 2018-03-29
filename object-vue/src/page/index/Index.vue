<template>
  <div>
  	<header class="header">
  		<div class="iconfont">&#xe779;</div>
  		<div class="center"><input type="text" placeholder="输入城市/经典/游玩/主题"/><i class="iconfont">&#xe752;</i></div>
  		<div class="right">
	  		<div>城市</div>
	  		<span></span>
  		</div>
  	</header>
  	
  	 <swiper :options="swiperOption" class="swiper">
	    	<swiper-slide v-for="item in list" :key="item.id">
			    	<swiper-slide><img :src="item.imgSrc" alt="" /></swiper-slide>
			  </swiper-slide>	
		   	<div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
  	
  	 <swiper>
	    	<swiper-slide v-for="(pageInfo,index) in pages" :key="index">
	    		<div class="icon-wrapper">
	    			<div v-for="item in pageInfo" :key="item.id" class="icon-img">
			    		<img :src="item.imgSrc" alt="" />
			    		<span>{{item.name}}</span>
			    	</div>
			    </div>
				</swiper-slide>	
		</swiper>
  	
  	<div class="aside">
  		 <p>
	  		 	<i class="iconfont">&#xe769;</i>
	  		 	<span>定位失败</span>
  		 </p>
  		 <p>
	  		 	<i class="iconfont">&#xe73b;</i>
	  		 	<span>5折泡温泉</span>
  		 </p>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    	list:[],
    	iconInfo:[],
      swiperOption: {
          autoplay:1000,//可选选项，自动滑动
          pagination:'.swiper-pagination',
          loop:true
      }
    }
  },
  computed:{
  	pages(){
  		const pages=[];
  		this.iconInfo.forEach((value,index)=>{
  			let page = Math.floor(index/10)
  			if(!pages[page]){
  				pages[page]=[]
  			}
  			pages[page].push(value)
  		})
  		return pages
  	}
  },
  created(){
  	 this.getIndexData()
  },
  methods:{
  	getIndexData(){
  		this.$http.get('/static/index.json')
  		.then(this.handleGetDataSucc.bind(this))
  	},
  	handleGetDataSucc(res){
  		const body = res.body
  		if(body&&body.data&&body.data.swiper){
  			this.list=body.data.swiper
  			this.iconInfo=body.data.icons
  			console.log(this.iconInfo)
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
		width: 1.3rem;
	 	text-overflow: ellipsis;
	 	word-wrap: normal;
	 	text-align: center;
	}
	.header>.right>span:after{
		content:"";
		display:block;
		width:0;
		height:0;
		border:5px solid red;
		border-color:#fff transparent transparent transparent;
		position:absolute;
		left:1.2rem;
		top:0.08rem; 	
	}
	.swiper img{
		height:2.7rem;
		width:100%;
	}
	.icon-wrapper{
		display: flex;
		flex-wrap: wrap;
		height:3.5rem;
		border-bottom:1px solid #ccc;
	}
	.icon-img{
		width:20%;
		height:;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top:0.17rem;
		margin-bottom:0.1rem;
	}
	.icon-img img{
		width:0.72rem;
		height:0.72rem;
		margin-bottom:0.15rem;
	}
	.icon-img span{
		font-size:0.2rem;
	}
	.aside{
		height:1rem;
		display:flex ;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		border-bottom:0.2rem solid #E9E9E9;
	}
	.aside p{
		font-size:0.20rem;
		width:50%;
			}
</style>
