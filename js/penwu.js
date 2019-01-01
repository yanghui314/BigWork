//顶部悬浮
        window.onload = function(){
            var cover = document.getElementsByClassName('header0')[0];
            window.onscroll = function(){
                var st = document.documentElement.scrollTop || document.body.srcollTop;
                if(st>180){
                    cover.style.position = 'fixed';
                }else{
                    cover.style.position = 'static';
                }
            }
        }

        //放大镜效果
        //1、获取元素
        //图片切换效果
        var p0=document.getElementById('p0');
        var p2=document.getElementById('p2');
        var pp1=document.getElementById('pp1');
        var p1=document.getElementById('p1');
        var p3=document.getElementById('p3');
        var pp2=document.getElementById('pp2');
        var pp0=document.getElementById('pp0');
        var pp3=document.getElementById('pp3');
        pp1.onclick=function(){
            pp1.style.border=" 1px solid #ff9003";
            p0.style.zIndex="0";
            p1.style.zIndex="-1";
            p2.style.zIndex="1";
            p3.style.zIndex="0";
            pp1.onmouseout=function(){
                pp1.style.border=" 0px solid #ff9003";
            }
        }
        pp2.onclick=function(){
            pp2.style.border=" 1px solid #ff9003";
            p0.style.zIndex="-1";
            p1.style.zIndex="0";
            p2.style.zIndex="0";
            p3.style.zIndex="1";
            pp2.onmouseout=function(){
                pp2.style.border=" 0px solid #ff9003";
            }
        }
        pp0.onclick=function(){
            if (p0.style.zIndex=="-1") {
                p0.style.zIndex="0";
                p1.style.zIndex="-1";
                p2.style.zIndex="1";
                p3.style.zIndex="0";
            } else {
                p0.style.zIndex="-1";
                p1.style.zIndex="0";
                p2.style.zIndex="0";
                p3.style.zIndex="1";
            }   
        }
        pp3.onclick=function(){
            if (p0.style.zIndex=="-1") {
                p0.style.zIndex="0";
                p1.style.zIndex="-1";
                p2.style.zIndex="1";
                p3.style.zIndex="0";
            } else {
                p0.style.zIndex="-1";
                p1.style.zIndex="0";
                p2.style.zIndex="0";
                p3.style.zIndex="1";
            }   
        }
        var img1=document.getElementById('img1');
        var box=document.getElementById('box');
        var p0=document.getElementById('p0');
        var p1=document.getElementById('p1');
        var slider=document.getElementById('slider');
        var img2=document.getElementById('img2');
        var p2=document.getElementById('p2');
        var p3=document.getElementById('p3');
        img1.onmouseover=function(){
            slider.style.display="block";
            img2.style.display="block";
        }
        img1.onmouseout=function(){
            slider.style.display="none";
            img2.style.display="none";
        }
        img1.onmousemove=function(ev){
            var ev=ev||window.event;
            if (p0.style.zIndex=="0") {

                var left = ev.clientX-box.offsetLeft-slider.offsetWidth/2;
                var top = ev.clientY-box.offsetTop+100-slider.offsetHeight/2;
                var maxLeft=p0.offsetWidth-slider.offsetWidth;
                var maxTop=p0.offsetHeight-slider.offsetHeight;
                left=left>maxLeft?maxLeft:left<0?0:left;
                top=top>maxTop?maxTop:top<0?0:top;
                //设置放大镜的位置
                slider.style.left=left+"px";
                slider.style.top=top+"px";
                //根据左侧放大镜的位置，计算右侧大图移动比例
                var w=left/maxLeft;
                var h=top/maxTop;
                //计算大图的最大移动范围
                var p2Left=img2.offsetWidth-p2.offsetWidth;
                var p2Top=img2.offsetHeight-p2.offsetHeight;

                //计算大图的移动的距离，设置位置
                p2.style.left=w*p2Left+"px";
                p2.style.top=h*p2Top+"px";
            } else {
                var left = ev.clientX-box.offsetLeft-slider.offsetWidth/2;
                var top = ev.clientY-box.offsetTop+100-slider.offsetHeight/2;
                var maxLeft=p1.offsetWidth-slider.offsetWidth;
                var maxTop=p1.offsetHeight-slider.offsetHeight;
                left=left>maxLeft?maxLeft:left<0?0:left;
                top=top>maxTop?maxTop:top<0?0:top;
                //设置放大镜的位置
                slider.style.left=left+"px";
                slider.style.top=top+"px";
                //根据左侧放大镜的位置，计算右侧大图移动比例
                var w=left/maxLeft;
                var h=top/maxTop;
                //计算大图的最大移动范围
                var p3Left=img2.offsetWidth-p3.offsetWidth;
                var p3Top=img2.offsetHeight-p3.offsetHeight;

                //计算大图的移动的距离，设置位置
                p3.style.left=w*p3Left+"px";
                p3.style.top=h*p3Top+"px";
            }
            
        }

        //求净含量
            var haosheng1=document.getElementById('haosheng1');
            var haosheng2=document.getElementById('haosheng2');
            var haosheng3=document.getElementById('haosheng3');
            function click1(){
                haosheng1.style.background="url('img/duigou.png') no-repeat 50px 17px";
                haosheng1.style.border="1px solid #fe0952";
                haosheng2.style.background="url()";
                haosheng2.style.border="0px solid #fe0952";
                haosheng3.innerHTML='"'+"150ml"+'"';
            }
            function click2(){
                haosheng2.style.background="url('img/duigou.png') no-repeat 50px 17px";
                haosheng2.style.border="1px solid #fe0952";
                haosheng1.style.background="url()";
                haosheng1.style.border="0px solid #fe0952";
                haosheng3.innerHTML='"'+"200ml"+'"';
            }


        //点击数量变化效果
            var jian=document.getElementById('jian');
            var jia=document.getElementById('jia');
            jian.onmouseover=function(){
                var between=document.getElementById('between');
                if (between.value<=1) {
                    jian.style.cursor="not-allowed";
                } else {
                    jian.style.cursor="pointer";
                    jian.onclick=function(){
                        if (between.value<=1) {
                            jian.style.cursor="not-allowed";
                        } else {
                            jian.style.cursor="pointer";
                            between.value-=1;
                        }
                    }
                }
            }

            jia.onmouseover=function(){
                var between=document.getElementById('between');
                if (between.value>=5) {
                    jia.style.cursor="not-allowed";
                } else {
                    jia.style.cursor="pointer";
                    jia.onclick=function(){
                        if (between.value>=5) {
                            jia.style.cursor="not-allowed";
                        } else {
                            jia.style.cursor="pointer";
                            between.value++;
                        }
                    }
                }
            }

            //加入购物车操作
            var boxx=document.getElementById('boxx');
            var boxxx=document.getElementById('boxxx');
            var bigp0=document.getElementById('bigp0');
            var name0=document.getElementById('name0');
            var name1=document.getElementById('name1');
            var buy1=document.getElementById("buy1");
            buy1.onclick=function(){
                boxx.style.zIndex="3";
                boxxx.style.zIndex="3";
               
            }
            name0.onclick=function(){
                boxx.style.zIndex="-1";
                boxxx.style.zIndex="-1";
                
            }
            name1.onclick=function(){
                boxx.style.zIndex="-1";
                boxxx.style.zIndex="-1";
                
            }