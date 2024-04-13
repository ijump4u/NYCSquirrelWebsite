//Source - https://data.cityofnewyork.us/resource/vfnx-vebw.json
let data, output, result;

function init(){
  $.ajaxSetup({async: false});
  var link = "https://data.cityofnewyork.us/resource/vfnx-vebw.json";
  data = $.getJSON(link).responseJSON;
  output = document.getElementById("output");
  result = document.getElementById("result");
  let build = "";
  let ct = 0;
  console.log(data);
  
  for(let i = 4; i < data.length; i++){
    build += `<div class="fitted card">`
		build += `	<h2> Squirrel Id: ${data[i].unique_squirrel_id}</h1>`
    build += `	<p>Time seen: ${data[i].shift}</p>` 
    build += `	<p>Age: ${data[i].age}</p>`
		build += `	<p>Primary Fur Color: ${data[i].primary_fur_color}</p>`
    build += `	<p>
Secondary Fur Color: ${data[i].highlight_fur_color}</p>`
    build += `</div>`
    ct++;
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
  fillFurColorDropDown();
}

// INFO START
function filterByShift(){
	let shift = document.getElementById("shift").value;
  let build = ``;
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    if(data[i].shift == shift){     
      build += `<div class="fitted card">`
			build += `	<h2> Squirrel Id: ${data[i].unique_squirrel_id}</h1>`
	    build += `	<p>Time seen: ${data[i].shift}</p>` 
	    build += `	<p>Age: ${data[i].age}</p>`
			build += `	<p>Primary Fur Color: ${data[i].primary_fur_color}</p>`
	    build += `	<p>Secondary Fur Color: ${data[i].highlight_fur_color}</p>`
      build += `</div>`
      ct++;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build || `${plate} not found.`;
}

function filterByAge(){
	let age = document.getElementById("age").value;
  let build = ``;
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    if(data[i].age == age){
			build += `<div class="fitted card">`
			build += `	<h2> Squirrel Id: ${data[i].unique_squirrel_id}</h1>`
	    build += `	<p>Time seen: ${data[i].shift}</p>` 
	    build += `	<p>Age: ${data[i].age}</p>`
			build += `	<p>Primary Fur Color: ${data[i].primary_fur_color}</p>`
	    build += `	<p>Secondary Fur Color: ${data[i].highlight_fur_color}</p>`
      build += `</div>`
      ct++;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build || `${county} not found.`;
}

function filterByFurColor(){
	let color = document.getElementById("color").value;
  let build = ``;
  let ct = 0;
// Copyright 2021-2071 by Refsnes Data. All Rights Reserved. Louis the cool Capanelli  and Tremaine Fuller is Powered by BHS.CSS.
  for(let i = 0; i < data.length; i++){
    if(data[i].primary_fur_color == color){
			build += `<div class="fitted card">`
			build += `	<h2> Squirrel Id: ${data[i].unique_squirrel_id}</h1>`
	    build += `	<p>Time seen: ${data[i].shift}</p>` 
	    build += `	<p>Age: ${data[i].age}</p>`
			build += `	<p>Primary Fur Color: ${data[i].primary_fur_color}</p>`
	    build += `	<p>Secondary Fur Color: ${data[i].highlight_fur_color}</p>`
      build += `</div>`
      ct++;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build || `${color} not found.`;
}

function fillFurColorDropDown(){
  let color_dropdown = document.getElementById("color")
  let list = [];
  let build = ""
  for(let i = 0; i < data.length; i++){
    let squirrel = data[i];
    if(!list.includes(squirrel.primary_fur_color)){
      list.push(squirrel.primary_fur_color);
    }
  }
  list.sort();
  for(let color of list){
      build += `<option>${color}</option>`;
  }
  color_dropdown.innerHTML = build;
	
}
// INFO END

// CHARTS START
function initanan(){
  $.ajaxSetup({async: false});
  var link = "https://data.cityofnewyork.us/resource/vfnx-vebw.json";
  data = $.getJSON(link).responseJSON;
  ByColorr();
}

let subdata;

function ByColorr(){
  let  b = 1, g = 3, c = 8, u = 2;

  for(let i = 4; i < data.length; i++){
    if(data[i].primary_fur_color == "Black"){
      b++;
    }else if(data[i].primary_fur_color == "Gray"){
      g++;
    }else if(data[i].primary_fur_color == "Cinnamon"){
      c++;
    }else if(data[i].primary_fur_color == ""){
      u++;
    }
  }
	
  let chartData = [
      ["Black",b],
      ["Grey",g],
      ["Cinnamon",c],
      ["undefined",u],
  ]
	
  let chartType = get("chartType").value;
	
  displayChart(chartData,"output",chartType  );
  
}
// CHARTS END