function change(){
	document.getElementById("pic").setAttribute("src", "pics/change.jpg");
}

$.document.ready(function(){
	fetchJSON();
});

function fetchJSON(){
	let newData;
	$.get("http://jsonplaceholder.typicode.com/photos", function(data){
		newData = data;
		var jObj = JSON.parse(data.)
		console.log(JSON.parse(data));
	});
}