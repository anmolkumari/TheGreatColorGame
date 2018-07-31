


var numSquares=6;  

var colors=generateRandomColors(numSquares);

var reset=document.getElementById("reset");
var colorDisplay=document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var colorPicked=pickColor();
var messgaeDisplay=document.querySelector("#messageDisplay");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");


easybtn.addEventListener("click",function()
	{
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
   numSquares=3;
 colors=generateRandomColors(numSquares);

colorPicked=pickColor();
colorDisplay.textContent=colorPicked;
for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
	}


	else
	{
		squares[i].style.display="none";
	}
}


 
	});


hardbtn.addEventListener("click",function()
	{
		
easybtn.classList.remove("selected");
hardbtn.classList.add("selected");


 numSquares=6;
 colors=generateRandomColors(numSquares);
 colorPicked=pickColor(); 
colorDisplay.textContent=colorPicked;

for(var i=0;i<squares.length;i++){
	
		squares[i].style.backgroundColor=colors[i];


	
	
		squares[i].style.display="block";
	
}
	});




for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];


squares[i].addEventListener("click",function(){
	var colorClicked=this.style.backgroundColor;

if(colorPicked===colorClicked)
{
messgaeDisplay.textContent="correct";
reset.textContent="play Again?";
colorChange(colorClicked);


}
	else
	{
		this.style.backgroundColor="#232323";
		messgaeDisplay.textContent="ooops!";
	}
}



);



}


function colorChange(color){
	for(var i=0;i<squares.length;i++){
    
squares[i].style.backgroundColor=color;


	}
}


function pickColor(){
var random = (Math.floor(Math.random() * colors.length));
return colors[random];
}



function generateRandomColors(num){
	var arr=[]


for(var i=0;i< num;i++){



arr.push(randomNumbers())

}
	return arr;

}

function randomNumbers()
{
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb("+r +", "+g+", "+b+")"; 
}

reset.addEventListener("click",function(){
	messgaeDisplay.textContent="";
colors=generateRandomColors(numSquares);
	colorPicked=pickColor();
	this.textContent="New colors";
	colorDisplay.textContent=colorPicked;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
});



//colors=generateRandomColors(numSquares);
//