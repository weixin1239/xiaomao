
window.onscroll = function () {
	var t=document.documentElement.scrollTop + document.body.scrollTop;
	if (t > 200) { 
		$("#right").show("slow");
	} else { 
		$("#right").hide("slow");
	} 
}

	
$("#toTop").click(function(){

	$("body").animate({"scrollTop":"0px"})
})
//商品件数
function y(){
	var jianshu = jQuery(".num");
	var jianCount=0;
	for(let i=0;i<jianshu.length;i++){
		jianCount+=parseInt(jianshu[i].innerHTML);
	}
	return jianCount;
}

//已选择的商品件数
function checkedNum(){
	var jianshus = $(".num");
	var cNum = 0;
	for(let i=0;i<jianshus.length;i++){
		if(jianshus.eq(i).parent().prev().prev().prev().prev().children(".check").attr("checked")=="checked"){
			cNum+=parseFloat(jianshus[i].innerHTML);
		}
		
	}
	return cNum;
}

//总价
function totalMoney(){
	var results = $(".xiaoJi");
	var money = 0;
	for(let i=0;i<results.length;i++){
		//money+=parseFloat(results[i].innerHTML);
		if(results.eq(i).parent().prev().prev().prev().prev().prev().children(".check").attr("checked")=="checked"){
			money+=parseFloat(results[i].innerHTML);
		}
		
	}
	return money;
}

var vipName=getCookie("userName");
//var goodsId=getCookie("number");
jQuery(function(){
	var strN =  getCookie("userName");  
	console.log(strN)
	if(strN==""){
		jQuery("#denglu").text("登录");
		jQuery("#zhuce").text("注册");
	}else{
		jQuery("#denglu").text(strN+"，TCL欢迎您！");
		jQuery("#zhuce").text("我的订单");
		jQuery(".sittings").hover(
			function () {
		    	jQuery(".hideSittings").show();
			},
			function () {
		    	jQuery(".hideSittings").hide();
			}
		);
	}
	
	jQuery(".tuiChu").click(function(){
		location.href = "login.html";
		delCookie("userName");
		if(strN!=""){
			jQuery("#denglu").text("登录");
			jQuery("#zhuce").text("注册");
		}
	})
});
//console.log(vipName)
jQuery.ajax({	
	type:"get",
	data:{'vipName':vipName},
	url:"php/getShoppingCart.php",
	async:true,
	success:function(data){
//console.log(data);
		var obj = eval('('+data+')');
		for(var i=0;i<obj.length;i++){
			//console.log("s="+obj[i].goodsName);		
			var str = "<ul class='clear' ord='"+obj[i].goodsId+"'><li><input type='checkbox' class='check' /></li><li><a href='#'><img id='img' src='"+obj[i].goodsImg+"' /> </a></li><li><a href='#'><p>"+obj[i].goodsName+"</p><i>颜色：枪色</i><i>屏幕尺寸："+obj[i].beiyong8+"</i></a></li><li><span class='price1'>"+obj[i].goodsPrice+".00元</span></li><li><span class='jian'>-</span><b class='num'>1</b><span class='jia'>+</span></li><li><span class='xiaoJi'>"+obj[i].goodsPrice+"元</span><s>5499.00元</s></li><li><a href='#'><img src='img/star.png' /></a><a class='removes' href='javascript:;'><img class='removeGoods' src='img/dustbin.png'/></a></li></ul>";		
//			saveCookie("goodsId",goodsId,7)
			jQuery("#buyGoods").append(str);
		}
		//ajax请求完成之后执行的函数
		$("#buyGoods").ajaxComplete(function(event,request, settings){
			w = y();
			$(".jianShu").html(w);
			
		if($("#buyGoods").find(".check").length>0){
				$("#main_b").show();
				$("#emptyCar").hide();
		}else{
			$("#main_b").hide();
				$("#emptyCar").show();
			}	
		});
		
		//商品数量加减
		//数量加减
			var jians=document.getElementsByClassName("jian");
			var jias=document.getElementsByClassName("jia");
			//减
			for(var j in jians){
				jians[j].onclick=function(){				
					let count=jQuery(this).next();
					//alert(count)
					let num=count.html();
					//alert(num)
					num-=1;				
					if(num<=1){
						num=1;
					}
					count.html(num);
					//小计加减
					var priceD = jQuery(this).parent().prev().find(".price1").html();
					xiaoJi = num*parseFloat(priceD );
					//$(".xiaoJi").html(xiaoJi+"元");
					jQuery(this).parent().next().find(".xiaoJi").html(xiaoJi+"元");
				
				//件数
					var w = y();
					$(".jianShu").html(w);
					
				//已选择商品件数
					var n = checkedNum();
					$(".checkedJi").html(n);
					
				//总价
					var m = totalMoney;
					$(".total").html(m);	
				}
			}
			//加
			for(var j in jias){
				jias[j].onclick=function(){
					let count=jQuery(this).prev();
					let num=parseInt(count.html());
					num+=1;
					count.html(num);
//					$(".xiaoji").html(num*$(".price").html());
					//小计加减
					var xiaoJi;
					var priceD = jQuery(this).parent().prev().find(".price1").html();
					xiaoJi = num*parseFloat(priceD );
					//$(".xiaoJi").html(xiaoJi+"元");
					jQuery(this).parent().next().find(".xiaoJi").html(xiaoJi+"元");
					//产品件数
					var w = y();
					$(".jianShu").html(w);
					
					//已选择商品件数
					var n = checkedNum();
					$(".checkedJi").html(n);
					
					//总价
					var m = totalMoney;
					$(".total").html(m);	
					
				}	
			}
			//数量加减结束
		
		//checkbox单选/全选
		$("#all").click(function(){
			/*
			if(this.checked){
				$("#box :checkbox").checked();
			}else{
				$("#box :checkbox").unchecked();
			}
			*/
			$("#buyGoods :checkbox").check(this.checked);
			
			//已选择商品件数
			var n = checkedNum();
			$(".checkedJi").html(n);
		});
		
//		var checks = $(".check");
//		for(let i in checks){
//			if(checks.eq(i).attr("checked")=="checked"){
//				$("#all").attr({"checked":"checked"});
//			}else{
//				
//			}
//		}
		
		jQuery("#buyGoods").delegate(".check", "click", function(){ 
			//console.log(this)
			let that = this;
			var m = totalMoney;
			var n = checkedNum();
			
			//已选择商品件数
			$(".checkedJi").html(n);
			//总钱数
	    	$(".total").html(m);		
		});
		jQuery("#all").click(function(){
			var m = totalMoney;
			$(".total").html(m);	
		})
		
		//删除商品
		jQuery(".removes").delegate(".removeGoods", "click", function(){ 
			console.log(this)
			var that = this;
			var ids=jQuery(this).parent().parent().parent().attr("ord");
			
			jQuery.get("php/deleteGoods.php", { "vipName": vipName, "goodsId": ids },function(data){
					//console.log(data);
				if(data=="1"){
					//location.reload();
		    		jQuery(that).parents(".clear").remove();
		    		console.log("删除成功")
				}else{
					console.log("删除失败")
				}	
		    	
			});
		
		});
		
		//删除商品结束
	
	}
});
//


//jQuery(".removes").delegate(".removeGoods", "click", function(){  
//	alert(1)
//	jQuery.get("php/deleteGoods.php", { "vipName": vipName, "goodsId": goodsId },
//		function(data){
//			console.log(data);
//  		location.reload();
//		});
//
//});
//var result = document.getElementById("num");
//var jia = document.getElementById("jia");
//var x = result.value;
//
//jia.onclick = function(){
//	x++;
//	result.value = x;
//}
//var jian = document.getElementById("jian");
//jian.onclick = function(){
//	if(x>1){
//		x--;
//		result.value = x;
//	}
//}