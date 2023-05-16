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