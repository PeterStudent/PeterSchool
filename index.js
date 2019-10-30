var time = 2000;

$(document).ready(function(){
	
	 jishiqi = setInterval("luoji()", time)	
	
	$(".lefts").click(function(){
		$(".tu1").toggle();
		$(".tu2").toggle();
		$(".zikuang1").toggle();
		$(".zikuang2").toggle();
		
	});
	
	$(".rights").click(function(){
		$(".tu1").toggle();
		$(".tu2").toggle();
		$(".zikuang1").toggle();
		$(".zikuang2").toggle();
		
	});
})

var shu=0;
function luoji(){
	if(shu==0){
		$(".switimg div").eq(0).css("display","none");
		$(".switimg div").eq(2).css("display","none");
		
		$(".switimg div").eq(1).css("display","block");
		$(".switimg div").eq(4).css("display","block");
		shu = 1;
	}else{
			
		$(".switimg div").eq(1).css("display","none");
		$(".switimg div").eq(4).css("display","none");
		
		$(".switimg div").eq(0).css("display","block");
		$(".switimg div").eq(2).css("display","block");
		shu = 0;
	}
}