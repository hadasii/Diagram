
		var z5 ;
		var z4 ;
		var z3 ;
		var z2 ;
		var z1 ;
		var title;
		var speed;
		var record=false;
		
var o = {
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},

	diagram: function(){
		var r = Raphael('diagram', 600, 600),
			rad = 20,
			defaultText = 'PLAY',
			speed = 500;
		
		var circle = r.circle('50%', '50%', '8%').attr({ stroke: 'none', fill: '#19aa5f' });
		circle.node.setAttribute('id', 'circletext');
		
		 
		 title = r.text(300, 300, defaultText).attr({
			font: '1.7em Arial ',
			fill: '#fff',			
		}).attr({ "font-weight": "800" }).toFront();
		
		title.node.setAttribute('id', 'maintext');
		
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 300 + rad * Math.cos(b),
				sy = 300 - rad * Math.sin(b),
				x = 300 + rad * Math.cos(a),
				y = 300 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
		
		var i=0;
		$('.get').find('.arc').each(function(i){
		   
			
				var t = $(this), 
					color = t.find('.color').val(),
					value = t.find('.percent').val(),
					text = t.find('.text').text();
				
				rad += 30;	
				if(i==3)
				{
				var z = r.path().attr({ arc: [value, color, rad*0.94], 'stroke-width': 12 });
				z4=z;
				}
				else if(i==4)
				{
				var z = r.path().attr({ arc: [value, color, rad*0.87], 'stroke-width': 12 });
				z5=z;
				}
				else if(i==0)
				{
				var z = r.path().attr({ arc: [value, color, rad*1.15], 'stroke-width': 12 });
				z1=z;
				}
				else
				{
				var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 26 });
				if(i==2)
				{
				z3=z;
				}
				if(i==1)
				{
				z2=z;
				}
				}
				
				
				
				/* z.mouseover(function(){
					

				
				if(i==2 || i==3)
				{
				this.animate({ 'stroke-width': 51, opacity: .75 }, 4000, 'elastic');
				}
				else 
				{
				this.animate({ 'stroke-width': 51, opacity: .75 }, 4000, 'elastic');
				}
				
					if(Raphael.type != 'VML') //solves IE problem
					this.toFront();
					title.stop().animate({ opacity: 0 }, speed, '>', function(){
						this.attr({ text: 'PLAY' }).animate({ opacity: 1 }, speed, '<');
					});
				}) z.mouseout(function(){*/
					
					
					
				 if(i==1 || i==2)
				{
				z.stop().animate({ 'stroke-width': 26, opacity: 1 }, speed*4, 'elastic');
				}
				else 
				{
				z.stop().animate({ 'stroke-width': 12, opacity: 1 }, speed*4, 'elastic');
				}
					
					//title.stop().animate({ opacity: 0 }, speed, '>', function(){
						//title.attr({ text: 'PLAY' }).animate({ opacity: 1 }, speed, '<');
					//});	 
				//});
					
				
				
			    i++;
			
		});
		

		
		
		
		
	}
	
	
	
}

	function getZ(x,i,rad,r){
	
		var t = x, 
		color = t.find('.color').val(),
		value = t.find('.percent').val(),
		text = t.find('.text').text();
		
		
		rad += 30;	
		if(i==3)
		{
		var z = r.path().attr({ arc: [value, color, rad*0.94], 'stroke-width': 12 });
		}
		else if(i==4)
		{
		var z = r.path().attr({ arc: [value, color, rad*0.87], 'stroke-width': 12 });
		}
		else if(i==0)
		{
		var z = r.path().attr({ arc: [value, color, rad*1.15], 'stroke-width': 12 });
		}
		else
		{
		var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 26 });
		}
		
		return z;
	}


$(function(){ 
	o.init(); 
	//setTimeout(o.rotate, 5000);
	focusAll();
	
$('#maintext span').css( 'cursor', 'pointer' );
$('#maintext').css( 'cursor', 'pointer' );
		
 $('#maintext tspan').click(function() {
	 if (!record)
	 {
		 $("#diagram").css({ "position": "absolute"});
		 $('#diagram').animate({ top: '230px' },4000);
		 rotateAll();
		 record=true;
	}
	else
	{
		z1.stop();
	  
		$('#diagram').animate({ top: '0' },4000);		
		
		 window.setInterval(function(){
				$("#diagram").css({ "position": "initial"});
				}, 4000);
				
		stopAnimation();
		focusAll();
		record=false;
	}
	});
	
	

$('#circletext').click(function() {
 $("#diagram").css({ "position": "absolute"});
	$('#diagram').animate({ top: '230px' },4000);
	rotateAll();
  
});

	

});

function stopAnimation()
{
	z1.stop();
	z2.stop();
	z3.stop();
	z4.stop();
	z5.stop();
}

function focusAll()
{
	focus(z1,0,title,1000);
	unfocus(z1,0,title,2000);
	focus(z4,3,title,1500);
	unfocus(z4,3,title,3500);
	focus(z3,2,title,2000);
	unfocus(z3,2,title,4000);
	focus(z2,1,title,2500);
	unfocus(z2,1,title,4500);
	focus(z5,4,title,3000);
	unfocus(z5,4,title,5000);
}

function rotateAll()
{
rotate(z1,0,title,0);
rotate(z2,1,title,0);
rotate(z3,2,title,0);
rotate(z4,3,title,0);
rotate(z5,4,title,0);
}
 
function rotate(z,i,title,speed)
{

				if (i % 2 === 0)
				{			
					var xxx = Raphael.animation({'transform':'r360'}, 4000);
				}
				else
				{
					var xxx = Raphael.animation({'transform':'r-360'}, 4000);
				}
				
				
				
				xxx = xxx.repeat('Infinity');
				z.stop();
				unfocus( z,i,title,speed);
				
				z.animate(xxx);
}



 /* window.setInterval(function(){
  focus(z1,0,title,speed);
  window.setInterval(function(){
     unfocus(z1,0,title,speed);
		 window.setInterval(function(){
		  focus(z2,1,title,speed);
		  window.setInterval(function(){
		 unfocus(z2,1,title,speed);
			 window.setInterval(function(){
			  focus(z3,2,title,speed);
			  window.setInterval(function(){
			 unfocus(z3,2,title,speed);
			 
			window.setInterval(function(){
			 focus(z4,3,title,speed);
			  window.setInterval(function(){
			 unfocus(z4,3,title,speed);
			 
				window.setInterval(function(){
				 focus(z5,4,title,speed);
				  window.setInterval(function(){
				 unfocus(z5,4,title,speed);
				}, 1100);
				}, 1000);
			}, 1200);
			}, 2000);
			 
			 
			}, 1300);
			}, 3000);
		 
		 
		 
		}, 1400);
		}, 4000);
  
 
 
 
}, 1500);
}, 5000); 

 */









function focus( z,i,title,speed) {
 
    var anim = Raphael.animation({ 'stroke-width': 36, opacity: 0.75 }, 4000,'elastic');
	z.animate(anim.delay(speed).repeat(Infinity));
	//z.animate({ 'stroke-width': 51, opacity: .75 }, 4000,'elastic').delay(1000).repeat(Infinity);
	
		if(Raphael.type != 'VML') //solves IE problem
		z.toFront();
		//title.stop().animate({ opacity: 0 }, speed, '>', function(){
			//z.attr({ text: 'PLAY' }).animate({ opacity: 1 }, speed, '<');
		//});
		
}

function unfocus( z,i,title,speed) {

		
	if(i==1 || i==2)
	{
	 var anim = Raphael.animation({ 'stroke-width': 26, opacity: 0.75, opacity: 0.75}, 2000, 'elastic');
	
	if(speed==0)
	{
	 z.animate(anim);
	}
	else
	{
	 z.animate(anim.delay(speed).repeat(Infinity));
	}
	//z.stop().animate({ 'stroke-width': 26, opacity: 1 }, 4000, 'elastic').delay(2000).repeat(Infinity);
	}
	else 
	{
	 var anim = Raphael.animation({ 'stroke-width': 12,  opacity: 0.75, opacity: 0.75}, 2000,  'elastic');

	if(speed==0)
	{
	 z.animate(anim);
	}
	else
	{
	 z.animate(anim.delay(speed).repeat(Infinity));
	}
	//z.stop().animate({ 'stroke-width': 12, opacity: 1 }, 4000,  'elastic').delay(2000).repeat(Infinity);
	}
						
		
}

