// side bar more and less
$(window).load(function(){
	$('.nav')
	  .find('li:gt(3)') 
	  .hide()
	  .end()
	  .each(function(){
	      if($(this).children('li').length > 3){
	          $(this).append(
	              $('<li><a herf="#">More...</a></li>')
	              .addClass('showMore')
	              .click(function(){
	                  if($(this).siblings(':hidden').length > 0){
	                      $(this).html('<a herf="#">Less...</a>').siblings(':hidden').show();
	                  }else{
	                      $(this).html('<a herf="#">More...</a>').show().siblings('li:gt(3)').hide();
	                  }\
	              })
	          );
	     }
	  })
});  