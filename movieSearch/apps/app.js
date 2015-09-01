$(document).ready(function(){
	$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    myData = data.Search;
    console.log(myData);
  })
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});
// function getRequest(searchTerm){
// 	$.getJSON('http://omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
// 		showResults(data.Search);
// 	})
// }
function getRequest(searchTerm){
	var params = {
		s: searchTerm,
		r: 'json'
	};
	url = 'http://www.omdbapi.com';

	$.getJSON(url, params, function(data){
		showResults(data.Search);
	});
}

function showResults(results){
	var html = "";
	$.each(results, function(index,value){
		console.log(value.Title);
		html += '<h1>' + value.Title + '</h1>';
		html += '<p>' + value.Year + '</p>';
	});
	$('#search-results').html(html);
}