;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function(){
  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
  $('input, textarea').placeholder();
  
  
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  
  
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  
  
  $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
  
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  
    
    $.fn.foundationTabs             ? $doc.foundationTabs() : null;
    
  
   //do not use orbit slider on custom gallery page
    $("#featured").orbit();

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }
  });
  jQuery(document).ready(function(){
          //banner size fix
          /**
           * Give all objects and embed taht should remin ther html size  a surrounding div with the banner class
           * 
           */
    jQuery('.banner embed').each(
        function(){
            jQuery(this).css('height', jQuery(this).attr('height')+'px');
        }
      );
        jQuery('.banner embed').each(
        function(){
            jQuery(this).css('width', jQuery(this).attr('width')+'px');
            jQuery(this).css('max-width', jQuery(this).attr('width')+'px');
        }
      );
        jQuery('.banner object').each(
        function(){
            jQuery(this).css('height', jQuery(this).attr('height')+'px');
        }
      );
        jQuery('.banner object').each(
        function(){
            jQuery(this).css('width', jQuery(this).attr('width')+'px');
            jQuery(this).css('max-width', jQuery(this).attr('width')+'px');
        }
      );
        jQuery(document).ready(function() {
	        $('#leave_a_comment').click(function() {
	            $('#comment_form_wrapper').show();
	            $('#leave_a_comment').hide();
	            return false;
	        });
	    });
  });

})(jQuery, this);

