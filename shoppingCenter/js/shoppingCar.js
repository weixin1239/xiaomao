
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