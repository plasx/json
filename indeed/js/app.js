$(document).ready(function(){
	$.getJSON('http://api.indeed.com/ads/apisearch?publisher=3815722920288640&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json', function(data){
		console.log(data);
	});
});