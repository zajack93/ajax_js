"use strict";

function ajax(options) { // Pass object "options"
	
	options = {
		type: options.type || "POST"
		, url: options.url || ""
		, onComplete: options.onComplete || function() {}
		, onError: options.onError || function() {}
		, onSuccess: options.onSuccess || function() {}
		, dataType: options.dataType || "tekst"
	};
	
	console.log("it works");
	
//default browser action throws an error to the console, if you want to handle some error otherwise, not in the browser to throw to try catch
	
	
	function httpSuccess ( httpRequest ) {   //check status, if anything is wrong, returns false
		try {
			return (httpRequest.status >= 200 && httpRequest.status<300 ||
			httpRequest.status == 304 || 
			navigator.userAgent.indexOf("Safari") >= 0 && typeof 
			httpRequest.status == "undefined");
			
		}catch (e) {
			return false;
		}
	}
	
	
	var httpReq = new XMLHttpRequest();    //In httpReq object create connection object
	httpReq.open(options.type, options.url, true);     //open connection

	
	httpReq.onreadystatechange = function() {
		
			
	//change state of document http.Req.readyState
	//0: Connection not established
	//1: connection established,
	//2: Request received,
	//3: processing,
	//4: Data returned. Data ready for use
		
		if (httpReq.readyState == 4) {
			
			if (httpSuccess (httpReq.status)) {
				
					options.onSuccess(httpReq.responseText);  
												//	to develop function on Success, which gets one argument - in ajax function msg value !! Retrieves a response from the server from our object using responeText
			
					httpReq = null;	
			}
			
//			(httpReq.status >= 200 && httpReq.status<300 ||
//			httpReq.status == 304 || 
//			navigator.userAgent.indexOf("Safari") >= 0 && typeof 
//			httpReq.status == "undefined")		
//			alert(httpReq.responseText);  //show server answer responseText
			
			
		} else {
			options.onError(httpReq.statusText);   //return 404
		}
		
	}
		
	httpReq.send();

}


function downloadData(event) {
	event.preventDefault();  //To not overload the page
	
	ajax({
		type: "GET",
//		url: "https://pokeapi.co/api/v2/",
		url: "https://jsonplaceholder.typicode.com/users",
		onError: function (msg) {
			console.log("cos nie dziala");
		},
		onSuccess: function (response) {
			var jsonObj = JSON.parse(response);  //parse to JSON format
			
			
			
			for (var i in jsonObj) {
				var name = document.createElement("p");
				document.body.appendChild(name);
				name.innerHTML = "Name: " + jsonObj[i].name;
				
			}
		}
	});
}