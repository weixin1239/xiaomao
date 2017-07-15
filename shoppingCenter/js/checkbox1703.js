//这是个jQuery插件
//把指定的复选框选中，或者取消选中。
jQuery.fn.extend(
	{
		checked:function(){
		//	console.log(this);//this是jQuery对象，是调用check方法的jQuery对象。
		    this.each(function(i){
		    	//console.log(this);//在each函数里this是jQuery包装集中的某一个特定的元素
		    	this.checked = true;
		    });
		},
		unchecked:function(){
			 this.each(function(i){
		    	//console.log(this);//在each函数里this是jQuery包装集中的某一个特定的元素
		    	this.checked = false;
		    });
		},
		//全选
		check:function(isChecked){
			this.each(function(i){
		    	this.checked = isChecked;
		    });
		},
		//反选
		uncheck:function(){
			this.each(function(i){
		    	this.checked = !this.checked;
		    });
		}
	}
);