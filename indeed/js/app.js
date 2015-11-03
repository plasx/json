$(document).ready(function(){
	$.getJSON("http://api.indeed.com/ads/apisearch?publisher=3815722920288640&q=java&l=New%20York%2C+NY&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&as_cmp=APX+LABS&co=us&v=2&format=json&callback=?", function(data){
		myData = data.results;
		console.log(myData);
		var html = "";
		for(var i = 0, len = myData.length;i < len; i++ ){
			console.log(myData[i].company);
			html += '<p>' + myData[i].company + '</p>';
		}
		$('#titleJob1').html(html);
	});
});