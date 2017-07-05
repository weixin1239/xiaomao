function $(id){
   	return document.getElementById(id);
};
       
function getStyle(DOM,name){
		if(DOM.currentStyle){
			return DOM.currentStyle[name];
		}else{
			return getComputedStyle(DOM,false)[name];
		}
	}
function moremove(DOM,JSON){
        
        clearInterval(DOM.timer);

        DOM.timer = setInterval(function(){
             
            for(var attr in JSON){
              //speed设置
              if(attr == 'opacity'){

                var speed = (JSON[attr] - Math.round(parseFloat(getStyle(DOM,attr))*100))/10   
              
              }else{
                

                var speed = (JSON[attr] - parseInt(getStyle(DOM,attr)))/10  
              
              }
             
              speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


                if(JSON[attr] == Math.round(parseFloat(getStyle(DOM,attr))*100)){

                   clearInterval(DOM.timer)  

                }else{
                    if(attr == 'opacity'){
                       //非ie
                       DOM.style.opacity = (Math.round(parseFloat(getStyle(DOM,attr))*100) + speed)/100 

                       //ie

                       DOM.style.filter = 'alpha(opacity='+(getStyle(DOM,attr)*100+speed)+')'

                    }else{

                      DOM.style[attr] = parseInt(getStyle(DOM,attr)) + speed +"px"

                    }
                 
                }

            }

        },30)

}
function move(DOM,attr,target){
  clearInterval(DOM.timer)
  DOM.timer=setInterval(function(){
    if(attr=='opacity'){
      var cur=Math.round(parseFloat(getStyle(DOM,attr))*100)
    }else{
      var cur=parseInt(getStyle(DOM,attr));
    }
    var speed=(target-cur)/8;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
    if(cur==target){
      clearInterval(DOM.timer)
    }else{
      if(attr=='opacity'){
        DOM.style.filter='alpha(opacity:'+(cur+speed)+')'
        DOM.style.opacity=(cur+speed)/100
      }else{
        DOM.style[attr]=cur+speed+'px';
      }
    }
  },30)
}

       var btn = document.getElementById("btn").children;//获取底部圆圈
      
       /* 右按钮*/
      var num = 0;
   
       $("right1").onclick = function(){
       	     num++   
       	     if(num>= $("wrap").children.length){
       	     	num=0;
       	     }
       	     //console.log(num)
       	   for (var j =0;j<  $("wrap").children.length;j++) {
       	   	 
       	   	 	 $("wrap").children[j].style.opacity =0;
     		}
       	     $("wrap").children[num].style.opacity =1;
       	     /*圆按钮*/
           for (var j =0;j<  $("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			
     		}
     		btn[num].className="black";
       }
       
         /* 左按钮*/
       $("left1").onclick = function(){
       	   num--;
       	  
       	  if(num<0){
       	     	num=$("wrap").children.length-1;
       	     }
       	  console.log(num)
       	   for (var j =0;j<  $("wrap").children.length;j++) {
       	   	 	
       	   	 	 $("wrap").children[j].style.opacity =0;
     		}
       	     $("wrap").children[num].style.opacity =1;
       	        /*元按钮*/
           for (var j =0;j<  $("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			
     		}
     		btn[num].className="black";
       }
       
      /* 底部小圆圈鼠标移入*/
     
     for (var i in btn) {
     	btn[i].className="ccc";
     	btn[0].className="black";
     	btn[i].index = i;
     	btn[i].onmouseover = function(){
     		for (var j =0;j<  $("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			 $("wrap").children[j].style.opacity =0;
     		}
     		btn[this.index].className="black";
     		console.log(this.index)
     		  $("wrap").children[this.index].style.opacity =1; 
     	}
     }
    /*让轮播图自己走，设置定时器*/
    var time = null;  
   time = setInterval($("right1").onclick,3000)
    
    /* 左右按钮的显示与隐藏*/
       $("box").onmouseover= function(){
       	  $("left1").style.display = "block";
       	  $("right1").style.display = "block";
       	  clearInterval(time)
       	};
       $("box").onmouseout = function(){
       	  $("left1").style.display = "none";
       	  $("right1").style.display = "none";
       	  clearInterval(time)
        time = setInterval($("right1").onclick,3000);
         //console.log("鼠标移出，打开定时器,自动播放")
       };