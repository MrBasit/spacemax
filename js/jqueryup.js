// Home Page 1st Card Slider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        speed: 800, //ms'
        auto: true,
        pause: 3000,
        enableDrag:false,
        pager:false,
        controls: false,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});

$(document).ready(function() {
    $('#autoWidth3').lightSlider({
        autoWidth:true,
        loop:true,
        speed: 2000, //ms'
        auto: true,
        pause: 3000,
        pauseOnHover:true,
        pager:false,
        controls: false,
        onSliderLoad: function() {
            $('#autoWidth3').removeClass('cS-hidden');
        } 
        
    });  
   
});