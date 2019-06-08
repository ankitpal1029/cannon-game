var cvs=document.getElementById('canvas');
var ctx=cvs.getContext('2d');



var bg = new Image();
var bigrock=new Image();
var smallrock=new Image();
var can=new Image();
var b=new Image();
bg.src ='images/bg.png';
b.src ='images/bullet.png';
bigrock.src='images/bigrock.png';
smallrock.src='images/smallrock.png';
can.src='images/cannon1.png';
var score=0;
var by=1;
var v=1;
var gravity=2;
var brx=376;
var bry=0;
var cx=(cvs.width-can.width)/2;
var rightPressed=false;
var leftPressed=false;
var flag=0,i=0,j=0,l=0,r=0;
var timeB=0,timeR=0;
var highscore,lhighscore;
//ghkjnlm;,;vbj
if (cvs.getContext) {
    var ctx = cvs.getContext('2d');
    highscore=localStorage.getItem('lhighscore');
    if(highscore){
        
   alert("high score is:"+highscore);
}
//xcvhbjknlm;
   else{
       alert("high score is 0");
   }
  } 
document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);
function keyDownHandler(e){
if(e.key==="Right"||e.key==="ArrowRight"||e.key==="d")
{
    rightPressed=true;
}
else if(e.key==="Left"||e.key==="ArrowLeft"||e.key==="a")
{
    leftPressed=true;
}
}
function keyUpHandler(e){
    if(e.key==="Right"||e.key==="ArrowRight"||e.key==="d")
    {
        rightPressed=false;
    }
    else if(e.key==="Left"||e.key==="ArrowLeft"||e.key==="a")
    {
        leftPressed=false;
    }
    }
    var bullet=[];
    bullet[0]={
        x:cx+(can.width)/2-(b.width)/2,
        y:cvs.height
    };
  var rock=[];
  rock[0]={
      x:cvs.width,
      y:0,
      strength:Math.floor((Math.random()+1)*6),
     k:0,
     s:this.strength
     
  };
  //fblknfudg
var srockl=[];
srockl[0]={
    x:cvs.width,
    y:0,
    strength:(rock[0].s)/2,
   k:0
   
};

var srockr=[];
srockr[0]={
    x:cvs.width,
    y:0,
    strength:(rock[0].s+1)/2,
   k:0,
   
   
};

//ugiubbv

 

function draw(){

ctx.drawImage(bg,0,0);


ctx.drawImage(can,cx,cvs.height-can.height);


for(j=0;j<rock.length;j++){
if((rock[j].x>=cx && rock[j].x<=(cx+can.width) && (rock[j].y+bigrock.height)>=(cvs.height-can.height)) || ((rock[j].x+bigrock.width)>=cx && (rock[j].x+bigrock.width)<=(cx+can.width) && (rock[j].y+bigrock.height)>=(cvs.height-can.height))|| ((rock[j].y+bigrock.height)>=(cvs.height-can.height) && (rock[j].x<=cx && rock[j].x+bigrock.width)>=(cx+can.width)))
{

alert(" You Lost \n score:"+score);
if(score>highscore){
localStorage.setItem('lhighscore',score);

}
location.reload();
}



}
for(l=0;l<srockl.length;l++){
    if((srockl[l].x>=cx && srockl[l].x<=(cx+can.width) && (srockl[l].y+smallrock.height)>=(cvs.height-can.height)) || ((srockl[l].x+smallrock.width)>=cx && (srockl[l].x+smallrock.width)<=(cx+can.width) && (srockl[l].y+smallrock.height)>=(cvs.height-can.height))|| ((srockl[l].y+smallrock.height)>=(cvs.height-can.height) && (srockl[l].x<=cx && srockl[l].x+smallrock.width)>=(cx+can.width)))
    {
    
    alert(" You Lost \n score:"+score);
    if(score>highscore){
        localStorage.setItem('lhighscore',score);
        
        }
    location.reload();
    
    }
    
    
    
    }
    for(r=0;r<srockr.length;r++){
        if((srockr[r].x>=cx && srockr[r].x<=(cx+can.width) && (srockr[r].y+smallrock.height)>=(cvs.height-can.height)) || ((srockr[r].x+smallrock.width)>=cx && (srockr[r].x+smallrock.width)<=(cx+can.width) && (srockr[r].y+smallrock.height)>=(cvs.height-can.height))|| ((srockr[r].y+smallrock.height)>=(cvs.height-can.height) && (srockr[r].x<=cx && srockr[r].x+smallrock.width)>=(cx+can.width)))
        {
        
        alert(" You Lost \n score:"+score);
        if(score>highscore){
            localStorage.setItem('lhighscore',score);
            
            }
        location.reload();
        
        }
        
        
        
        }

for(j=rock.length-1;j>=0;j--){
    
if(rock[j].strength==0 && j!==0)
{
   score++;
  srockl.push({
       x:rock[j].x,
       y:rock[j].y,
       strength:4,
       k:0
      });
      console.log(srockl[0].strength);
      srockr.push({
        x:rock[j].x,
        y:rock[j].y,
        strength:4,
        k:0
       });
     
    
rock.splice(j,1);
j--;

}
 else{ 

    if( j!==0)
    {

if((rock[j].y+bigrock.height)>=cvs.height){
    rock[j].k=1;
}

if(rock[j].k===1)
 {ctx.drawImage(bigrock,rock[j].x,rock[j].y);
 rock[j].x-=v;
 rock[j].y-=gravity;
 }

else if(rock[j].k===0){
ctx.drawImage(bigrock,rock[j].x,rock[j].y);
rock[j].x-=v;
rock[j].y+=gravity;
}
 
    }



}




if(timeR===(200) ){
    rock.push({
       x:cvs.width-bigrock.width,
       y:0,
       strength:Math.floor((Math.random()+1)*6),
       k:0,
       s:this.strength
       
      
    });
    timeR=0;
}
if(rock.length>0 ){
    
   
    if(rock[j].strength>0 && j>0){
        console.log(rock[j].strength);
ctx.fillStyle="#000";
ctx.font="20px Verdana";
ctx.fillText(rock[j].strength,rock[j].x+(bigrock.width)/2,rock[j].y+(bigrock.height)/2);
}

    

for(i=bullet.length-1;i>=0;i--){
  
       
      if(bullet[i].x>=rock[j].x && bullet[i].y<=(rock[j].y+bigrock.height) && bullet[i].x<=(rock[j].x+bigrock.width) && bullet[i].y>=rock[j].y ){
         
       
        if(rock[j].strength>0 && j>0){
            rock[j].strength--;
            bullet.splice(i,1);
            i--;
        
        }
      }
    
      else {
      ctx.drawImage(b,bullet[i].x,bullet[i].y);
      
    
     
            }

        }
}

}
//under construction  strt  rfihogfdsgfdfghkjhgfdlkjhgfkjhgf

for(l=srockl.length-1;l>=0;l--)
{
    if(srockl[l].strength<=0)
{
    score++;
srockl.splice(l,1);
l--;

}
 else { 

    if(l!==0){
    

if((srockl[l].y+smallrock.height)>=cvs.height){
    srockl[l].k=1;
}

if(srockl[l].k===1)
 {ctx.drawImage(smallrock,srockl[l].x,srockl[l].y);
 srockl[l].x-=v;
 srockl[l].y-=gravity;
 }

else if(srockl[l].k===0){
ctx.drawImage(smallrock,srockl[l].x,srockl[l].y);
srockl[l].x-=v;
srockl[l].y+=gravity;
}
 



    }


  
 }

if(srockl.length>0){
ctx.fillStyle="#000";
ctx.font="20px Verdana";
ctx.fillText(srockl[l].strength,srockl[l].x+(smallrock.width)/2,srockl[l].y+(smallrock.height)/2);



    

for(i=bullet.length-1;i>=0;i--){
  
       
      if(bullet[i].x>=srockl[l].x && bullet[i].y<=(srockl[l].y+smallrock.height) && bullet[i].x<=(srockl[l].x+smallrock.width) && bullet[i].y>=srockl[l].y){
        if(srockl[l].strength>0 && l>0){  
        bullet.splice(i,1);
        srockl[l].strength--;
       
        }
      }
    
      else {
      ctx.drawImage(b,bullet[i].x,bullet[i].y);
      
    
     
            }

        }
}
    



}
for(r=srockr.length-1;r>=0;r--)
{
    
    if(srockr[r].strength<=0)
    {
        score++;
    srockr.splice(r,1);
    r--;
    
    }
     else{ 
    
        if(r!==0){
    
    if((srockr[r].y+smallrock.height)>=cvs.height){
        srockr[r].k=1;
    }
    
    if(srockr[r].k===1)
     {ctx.drawImage(smallrock,srockr[r].x,srockr[r].y);
     srockr[r].x+=v;
     srockr[r].y-=gravity;
     }
    
    else if(srockr[r].k===0){
    ctx.drawImage(smallrock,srockr[r].x,srockr[r].y);
    srockr[r].x+=v;
    srockr[r].y+=gravity;
    }
     
    
    
}
    
    }
    
      
    
    
    
    if(srockr.length>0){
    ctx.fillStyle="#000";
    ctx.font="20px Verdana";
    console.log(r);
    ctx.fillText(srockr[r].strength,srockr[r].x+(smallrock.width)/2,srockr[r].y+(smallrock.height)/2);
    
    
    
        
    
    for(i=bullet.length-1;i>=0;i--){
      
           
          if(bullet[i].x>=srockr[r].x && bullet[i].y<=(srockr[r].y+smallrock.height) && bullet[i].x<=(srockr[r].x+smallrock.width) && bullet[i].y>=srockr[r].y){
            if(srockr[r].strength>0 && r>0){  
            bullet.splice(i,1);
            srockr[r].strength--;
            
            }
          }
        
          else {
          ctx.drawImage(b,bullet[i].x,bullet[i].y);
          
        
         
                }
    
    
    }
        
    
}


}


//under contruction end  dlwdnweenkwbb






    if(timeB===(15-(Math.floor(score/10)))){

        bullet.push({
            x:cx+(can.width)/2-(b.width)/2,
            y:cvs.height-b.height
        });
        timeB=0;
        }





if(rightPressed && (cx+can.width)<=cvs.width){
    cx+=5;
}
else if(leftPressed && cx>=0){
    cx-=5;
}
for(i=bullet.length-1;i>=0;i--){
    bullet[i].y-=10;
}


ctx.fillStyle="#000";
ctx.font="20px Verdana";
ctx.fillText(score,10,30);

timeB++;
timeR++;
requestAnimationFrame(draw);


}

draw();
