
function parseRSS(url, container) { 
	$.ajax({
	    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
	    dataType: 'json',
	    success: function(data) {
	      //console.log(data.responseData.feed);
	      $(container).html('<h2>'+capitaliseFirstLetter(data.responseData.feed.title)+'</h2>');
	 
	      $.each(data.responseData.feed.entries, function(key, value){
	        var thehtml = '<h3><a href="'+value.link+'" target="_blank">'+value.title+'</a></h3>';
	        $(container).append(thehtml);
	      });
	    }
	  });
}