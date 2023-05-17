const cars= new Map([
    ["Maruti",200],
    ["Farari",300],
    ["Landcross",600],
    ["bmw",700],


]);

cars.delete("bmw");
document.getElementById("demo").innerHTML = cars.get("Farari");
document.getElementById("demo").innerHTML = cars.size;
document.getElementById("demo").innerHTML = cars.has("bmw");


const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

document.getElementById("demoo").innerHTML = fruits.get("apples");


const players= new Map([
    ["sakib",200],
    ["musfik",300],
    ["sangakara",600],


]);
players.set("sakib",100);
document.getElementById("demotext").innerHTML = players.get("sakib");


const practice = new Map([
    ["rayhan", 500],
    ["haidar", 300],
    ["khan", 200]
  ]);
  
  let text = "";
  for (const x of practice.entries()) {
    text += x + "<br>";
  }

  document.getElementById("textdemo").innerHTML = text;


  // myFunction();
 
  // function myFunction(){
  //   let fruitName="Apple";
  //   document.getElementById("demo1").innerHTML=typeof fruitName+"  "+fruitName;
  // }
  // document.getElementById("demo2").innerHTML=typeof fruitName;


 let carName="Volvo";
myFunction();

function myFunction(){
  document.getElementById("demo3").innerHTML=" I like"+ carName;
}

document.getElementById("demo4").innerHTML=" I like"+ carName;

x=10;
document.getElementById("demo5").innerHTML=x;
var x;

try{
  y=10;
  let  y=10;

}
catch(err){
  document.getElementById("demo6").innerHTML = err;
}

var x = 5; 
var y;   

elem = document.getElementById("demo7");  
elem.innerHTML = x + " " + y;       

y = 7; 




