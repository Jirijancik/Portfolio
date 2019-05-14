/* Show and hide menu */

$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
      
        
        if ($(window).width() >740 ) {
   
         
        'use strict';
        
        if($(window).scrollTop() < 350 ) {
            
            $('.navbar').css ({
                'background-color': 'rgba(219,56,68,0.0)'
            });
            
            $('.navbar-default').css({
                'margin-top': '3.75rem'             
            });
            
            $('.navbar-item-text').css({
               'font-size': '1.56vw',
                'padding-top': '0px'
            });
            
            $('.navbar-brand').css({
               'font-size': '2.08vw'
                
            });
            
            
            $('.navbar-brand-p').css({
                'font-size': '1.56vw',
                'margin-top': '-0.52vw'
                
            });              
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(9, 9, 9, 0.55)',

                'border-color': '#444'
                
            });
            
            $('.navbar-brand').css({
               'font-size': '1.56vw'
                
            });
            
            $('.navbar-brand-p').css({
               'font-size': '1.2vw',
                'margin-top': '0px'
                
            }); 
            
            $('ul.nav.navbar-nav.navbar-right').css({
               'margin-top': '0.25vw',
                'margin-right': '0.35vw'
                
            }); 
            
            
            $('.navbar-item-text').css({
               'font-size': '1.2vw',
                'padding-top': '0px'
                
            });
        }   
            
            
            
}
        
        
    });    
});





$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 0
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });


/*Dropdown*/
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu-hover').stop(true, true).delay(0).fadeIn(0);
}, function() {
  $(this).find('.dropdown-menu-hover').stop(true, true).delay(0).fadeOut(0);
});



// Initialize Animation
$(document).ready(function(){
    
    'use strict'
    new WOW().init();
    
});


//hide show
$(document).ready(function(){
    $("#hide").click(function(){
        $(".dog_menu").hide();
    });
    $("#show").click(function(){
        $(".dog_menu").show();
    });
});


function Show_Hide_Diana() {
    var Diana = document.getElementById("diana_x");
    var Ella = document.getElementById("ella_x");
    
    if (Diana.style.display === "none") {
        Diana.style.display = "block",
        Ella.style.display = "none";
    } 
    else {
        Diana.style.display = "block",
        Ella.style.display = "none";
    }
}


function Show_Hide_Ella() {
    var Diana = document.getElementById("diana_x");
    var Ella = document.getElementById("ella_x");

    
    if (Ella.style.display === "none") {
        Ella.style.display = "block",
        Diana.style.display = "none";
        
    } 
    else {
        Ella.style.display = "block",
        Diana.style.display = "none";
    }
}


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 49.476750, lng: 17.516167};
  
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


 
//Galerie
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

//Modal window
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}