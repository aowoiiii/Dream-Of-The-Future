
			




//轮播切换时间
			$('.carousel').carousel({  
				interval: 2000  
			}); 


//switch1
			function choiceness_switch(e){
				"use strict";
				
				var buttons=document.getElementById("choiceness-switch-btn").getElementsByTagName("button");
				var choiceness_pics=document.getElementById("choiceness-switch-img").getElementsByTagName("img");
				var butSize=buttons.length;		
					   for(var i=0;i<butSize;i++){   
						   if(buttons[i]==e){
							   choiceness_pics[i].className="img-responsive show";
						   }else{
							  choiceness_pics[i].className="img-responsive hidden";
						   }
					   }
				}

   //switch2

			function nav_search_switch(){
				"use strict";
				var nav_btn=document.getElementById("navbar-left").getElementsByTagName("li");
				var nav_num=nav_btn.length;
				alert(nav_num);
				for(var i=0;i<nav_num-1;i++){  
						  nav_btn[i].className="hidden";
				}
				nav_btn[nav_num-1].className="dlock";
	   
			}