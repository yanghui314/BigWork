function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}


function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr]-now)/6;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var current = now + speed;
			if(attr == 'opacity'){
				obj.style.opacity = current/100;
			}else{
				obj.style[attr]=current+"px";
			}
			if(json[attr] !== current){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			if(callback){callback()};
		}

	},30);
}

 //顶部悬浮
       //window.onload = function(){
            var cover = document.getElementsByClassName("header0")[0];
            window.onscroll = function(){
                var st = document.documentElement.scrollTop || document.body.srcollTop;
                if(st>180){
                    cover.style.position = 'fixed';
                }else{
                    cover.style.position = 'static';
                }
            }
        //}

        //轮播图
        var lunbo=document.getElementById('lunbo');
        var num=document.getElementById('num').children;
        var slider=document.getElementById('slider');
        var left=document.getElementById('left');
        var right=document.getElementById('right');
        var index = 1;
        var timer;
        var isMoving = false;

        //轮播下一张的函数
        function next(){
            if(isMoving){
                return;
            }
                isMoving = true;
                index++;
                navChange();
                animate(slider,{left:-800*index},function(){
                    if(index === 7){
                        slider.style.left = "-800px";
                        index = 1;
                    } 
                    isMoving = false;
                });
        }
        //轮播上一张的函数
        function prev(){
            if(isMoving){
                return;
            }
            isMoving = true;
            index--;
            navChange();
            animate(slider,{left:-800*index},function(){
                if(index === 0){
                    slider.style.left = "-4800px";
                    index = 6;
                } 
                 isMoving = false;
            });
        }
        var timer=setInterval(next,2000);

        //鼠标划上去清掉定时器
        lunbo.onmouseover = function(){
            animate(left,{opacity:50})
            animate(right,{opacity:50})
            clearInterval(timer)
        }

        //鼠标划出开定时器
        lunbo.onmouseout = function(){
            animate(left,{opacity:0})
            animate(right,{opacity:0})
            timer = setInterval(next,2000);
        }

        //箭头点击事件
        right.onclick = next;
        left.onclick = prev;

        //小按钮点击事件
        for(var i = 0;i<num.length;i++){
            num[i].idx = i;//对象可以直接属性
            num[i].onclick = function(){
                index = this.idx + 1;
                navChange()
                animate(slider,{left:-800*index})
            }
        }
        //小按钮背景色切换
        function navChange(){
            for(var i = 0;i<num.length;i++){
                num[i].className = '';
            }
            if(index===7){
                num[0].className = 'active';
            }else if(index===0){
                num[5].className = 'active';
            }else{
                num[index-1].className = 'active';
            }
            
        }

        //滚动字幕
        var LEN = 319;      // 一个完整滚动条的长度
        var x = 0;
        var t;
        window.onload = roll;
        function roll() {
             var col1 = document.getElementById("col1");
             var col2 = document.getElementById("col2");

             var fun = function(){
                 col1.style.top = x + 'px';
                 col2.style.top = (x + LEN+57) + 'px';
                 x--;
                 if( x == -375 ){
                     x = 0;
                 }
             };
             t = setInterval(fun,30);
        }

        //右侧部分
        var you11=document.getElementById("you11");
        var you22=document.getElementById("you22");
        var you33=document.getElementById("you33");
        var you44=document.getElementById("you44");
        var xing=document.getElementById("xing");
        function move(obj,json){
            // var mov=document.getElementsById("move1");

            for(var attr in json){
                var mov=parseInt(getStyle(obj,attr));
            }
            mov=json[attr];
            obj.style[attr]=mov+"px";
        }
        you11.onmouseover=function(){
            move(you11,{right:0})
        }
        you22.onmouseover=function(){
            move(you22,{right:0})
        }
        you33.onmouseover=function(){
            move(you33,{right:0});
            ma.src="img/erwei.png";
            ma.style.paddingTop="0px";
        }
        you44.onmouseover=function(){
            move(you44,{right:0})
        }

        you11.onmouseout=function(){
            move(you11,{right:-80})
        }
        you22.onmouseout=function(){
            move(you22,{right:-80})
        }
        you33.onmouseout=function(){
            move(you33,{right:-80});
            ma.src="img/serwei.png";
            ma.style.paddingTop="50px"; 
        }
        you44.onmouseout=function(){
            move(you44,{right:-80})
        }


        //价格滑动效果
        var select=document.getElementById("select");
        var select1=document.getElementById('select').children;
        var money=document.getElementById("money");
        function change(){
            var index=select.selectedIndex;
            money.innerHTML="¥"+select1[index].value;
        }

