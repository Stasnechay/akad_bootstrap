//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
//=require slick.min.js 
//=require isotope.pkgd.min.js 





var $isotopeGrid;
	$(document).ready(function(){
		$('.portfolio__cat-item > a').on('click', function(evt){
			evt.preventDefault();
				
				var filterValue = $(this).data('filter');
				$isotopeGrid.isotope({ filter: filterValue});
				// $('.portfolio__cat-item > a').removeClass('active');
				// $(this).addClass('active')
				$(this).addClass('active').parent('li').siblings().find('a').removeClass('active');

		});
		

		
	});

	$(window).on('load', function(){

		 
  	
  	$isotopeGrid = $('.portfolio__grid').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.portfolio__item',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.portfolio__sizer'
    }
  });


  	
  	var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8

   
        });
      }
}
 });

})(jQuery);