// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAo8RsprUTg49lxRf2l-LYyJvq9femkq14&q=dog&maxResults=20
$(document).ready(function(){

	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});

});

function getRequest(searchTerm){
	youTubeKey = 'AIzaSyAo8RsprUTg49lxRf2l-LYyJvq9femkq14';
	var params = {
		part:'snippet',
		key: youTubeKey,
		q: searchTerm,
		maxResults: 20
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		myData = data.items;
		console.log(data.items);
		showResults(myData);
	});
}

function showResults(results){
	var html ="";
	$.each(results, function(index,value){
		console.log(value.id.videoId);
		console.log(value.snippet.title);
		console.log(value.snippet.thumbnails.medium.url);
		html += '<a href="https://www.youtube.com/watch?v='+ value.id.videoId +'">';
		html += '<img src="' + value.snippet.thumbnails.medium.url + '">';
		html += '<p>' + value.snippet.title + '</p>';
		html += '</a>'
	});
	$('#search-results').html(html);
}