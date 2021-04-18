(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
       
        /*====================================
			Sidebar Popup JS
		======================================*/ 	
		$('.header-sidebar-icon i').on( "click", function(){
			$('.header-sidebar').addClass('active');
		});
		
		$('.header-sidebar-close').on( "click", function(){
			$('.header-sidebar').removeClass('active');
		});
		
       /*========== Responsive Menu  ==========*/
       $("#mobilemenu").slicknav({
        prependTo: '#responsive-menu'
    });

    
    });
})(jQuery);