
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://www.w3schools.com/jsref/img_pulpit.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
//	document.body.appendChild(x);

 	var y = document.createElement("IMG");
    y.setAttribute("src", "https://www.w3schools.com/jsref/img_pulpit.jpg");
    y.setAttribute("alt", "The Pulpit Rock");
   

var dataPokemon = [
    [ "Bulbasaur", "70", x],
    [ "Pikaczu", "20", y ],
    [ "Psajdak", "135", "src"],
    [ "Dżiglipaf", "27", "src" ],
    [ "Krabi", "99", "src"],
    [ "Czarizard", "134", "src"],
    [ "Dragonit", "27", "Src" ],
    [ "Magikarp", "87", "Tokyo" ],
    [ "Miau", "13", "src" ],
];
 

$(document).ready(function() {
    $('#table').DataTable( {
        data: dataPokemon,
		"pagingType": "full_numbers",
        columns: [
            { title: "Name" },
            { title: "Hidden Power" },
            { title: "Image" }
        ]
    } );
} );