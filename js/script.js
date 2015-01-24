  (function (yourcode) {

      yourcode(window.jQuery, window, document);

      }(function($, window, document) {

 //** make function none global**//
 
 
$(function(){
	$(".navmenu").addClass("conceal");
	$(".toggle").click(function(){
		//*when menu button is press activate accordion*//
		$(".navmenu").slideToggle();
	})
})

	//****  		page scroll function to contact form on contact page  ***//
  $('a[href*=#form]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
	
/****************			end document			**************/ 
}));