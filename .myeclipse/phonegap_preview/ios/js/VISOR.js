function loadPosts(){
	$.ajax({
		  type: "GET",
		  url: "http://aljam3.com/sami_test.php",
		  dataType: "json",
		  cache: false,
		  beforeSend : function() {$.mobile.loading('show')},
		  complete   : function() {$.mobile.loading('hide')},
		  success: function(result) {
					var output = '<ul data-role="listview" data-filter="true">';
					$(result.articles).each(function(index, value){
						 output += '<li><h3>' + value.post + '</h3></li>';
					});
					 output += '</ul>';
					$('#postList').html(output);
				},      
			async: true
		  });
}
