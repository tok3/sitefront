// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$(document).ready(function() 
{ 

	var viewportWidth = $(window).width();

	function realignFooter()
	{
		if(sticky_footer != 'off')
		{
			if ((sticky_footer == 'allways') || (sticky_footer == 'on_less_content' && $("body").height() < $(window).height())) {

				var footerWidth = document.getElementById('footer').offsetWidth;

				document.getElementById('footer').style.position = "fixed"; 
				document.getElementById('footer').style.bottom = "0"; 
//				$( "<p></p>" ).insertAfter( "#content");
				
				if(footer_width == 'content')
				{
					document.getElementById('footer').style.width = footerWidth + "px"; 
				}
			}
			
			if(sticky_footer == 'on_less_content' && $("body").height() > $(window).height()) 
			{			

				document.getElementById('footer').style.position = "relative"; 

			}

		}
	}


realignFooter();
	if(viewportWidth > 640)
	{
		realignFooter();
//		$('#topnav').center();

		window.onresize = function() {
			realignFooter();
			$('#topnav').center();
		};
	}

// set pagination classes to achieve foundation styled pagination without tweaking codeigniters pagination function outside this theme. 
$('div.pagination').next().addClass('pagination');
$("div.pagination ul").first().addClass('pagination');


//	$('.property_footer .columns').height($('.property_footer').height() - 20);


$('.inner').removeClass('hide'); // prevent fouc

// ende

// kontaktform 
$('input[name="contact-submit"]').addClass('buton small	right').val('Versenden');
$('#custUpl').click(function(){

	$('#contact_attachment').trigger('click');
});

// ende kontaktform


(function(){
	var ua = navigator.userAgent,
		isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

	if (isMobileWebkit) {
		$('html').addClass('mobile');
	}

	$(function(){
		var iScrollInstance;

		if (isMobileWebkit) {
			iScrollInstance = new iScroll('wrapper');

			$('#scroller').stellar({
				scrollProperty: 'transform',
				horizontalScrolling: false,
				verticalOffset: 150
			});
		} else {
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 150
			});
		}
	});

})();

}); // end doc ready 


jQuery.fn.center = function () {
	// this.css("position","fixed");
 //    // this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
 //    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
 //    this.css("z-index", "99");
 //    return this;
}


