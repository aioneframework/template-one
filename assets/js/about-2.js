$(document).ready(function(){
       $( ".aione-tabs-nav li" ).click(function(e) {
           e.preventDefault();
           $(this).addClass("active").siblings().removeClass('active');
           var target = $(this).attr("data-target");
           if(target  != undefined){
               $( "#"+ target).addClass("active").siblings().removeClass('active');
           }
       });

       $(".aione-target").click(function(e) {
           e.preventDefault();
           var target = $(this).attr("data-target");
           if(target  != undefined){
               $( "#"+ target).addClass("active").siblings().removeClass('active');
           }
       });
   })