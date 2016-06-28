// For Navbar
$(function(){
	$(".button-collapse").sideNav({
		menuWidth: 300,
		closeOnClick: true
	});
});

// For Slider
$(document).ready(function(){
    $('.slider').slider({
        full_width: false,
        indicators: false,
        height: 430
    });
});

$(document).ready(function(){
    $('.modal-trigger').leanModal();
});

 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal3').openModal({
        in_duration: 3500,
        out_duration: 1000
    });
  });


// For pagepiling.js
$(document).ready(function() {
    $('#pagepiling').pagepiling({
        direction: 'vertical',
        verticalCentered: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        menu: '#myMenu',
        scrollingSpeed: 1000,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: false,
        navigation: {
            'textColor': '#D40024',
            'bulletsColor': 'black',
            'position': 'right',
            'tooltips': ['Home', 'Listen', 'About', 'Contact']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 10,
        touchSensitivity: 5,
        keyboardScrolling: false,
        sectionSelector: '.section',
    });
    $.fn.pagepiling.setAllowScrolling(false);
});


//Convert address tags to google map links
$(document).ready(function () {
   $('address').each(function () {
      var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
      $(this).html(link);
   });
});

 
