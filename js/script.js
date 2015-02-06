  (function (yourcode) {

      yourcode(window.jQuery, window, document);

      }(function($, window, document) {
// responsive nav doc load call
	navSize();


	$(".toggle").click(function(){
	//*when menu button is press activate accordion*//
	$(".navmenu").slideToggle();
});
	
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
	
/****************			end document ready			**************/ 
}));

/************* responsive navigation function *****************/

$(window).resize(navSize);
 
function navSize(){
	
	if( $('.banner').css('display') === 'block') {
		$(".navmenu").addClass("conceal");
	} else {
		$(".navmenu").css('display', 'inline-block');
	}
};

jQuery(document).ready(function ($) {
 
		var sticky = new Waypoint.Sticky({
		  element: $('.portintro')[0]
		})
        var sticky = new Waypoint.Sticky({
		  element: $('.sisterhood')[0]
		})
		var sticky1 = new Waypoint.Sticky({
		  element: $('.deadlydymes')[0],
		})
        var sticky2 = new Waypoint.Sticky({
		  element: $('.lucier')[0],
		})
		var sticky2 = new Waypoint.Sticky({
		  element: $('.carbodays')[0],
		})
 });
    
    (window).scroll(sticky, sticky1, sticky2, sticky3); //stick portfolio elements to top.