$(function(){

    (function($) { // funcion para aleatorizar divs //
  
    $.fn.shuffle = function() {
  
      var allElems = this.get(),
        getRandom = function(max) {
          return Math.floor(Math.random() * max);
        },
        shuffled = $.map(allElems, function() {
          var random = getRandom(allElems.length),
            randEl = $(allElems[random]).clone(true)[0];
          allElems.splice(random, 1);
          return randEl;
        });
  
      this.each(function(e) {
        $(this).replaceWith($(shuffled[e]));
      });
  
      return $(shuffled);
  
    };
  
  })($);
  
  $('.slider section').hide(); // oculto productos //
  $('.slider section').shuffle(); // aplicamos la funcion para aleatorizar //
  $('.slider section').slice(20).remove(); // Mostramos 20 productos //
  $('.slider section').css('display','flex'); // Productos flexbox //
  
    var i = 0;
    var slider_automatic = true;
    var right_arrow = $('#right-circle');
    var left_arrow = $('#left-circle');
  
        right_arrow.on('click', function(){
            i++;
            changeResize();
        });
  
        left_arrow.on('click', function(){
            i--;
            changeResize();
        });
  
    var slider = $('.slider');
    var sections = $('.slider section');
    var number_sections = sections.length;
  
    const tablet = window.matchMedia('(max-width: 1024px)');
    const small_tablet = window.matchMedia('(max-width: 768px)');
    const mobile = window.matchMedia('(max-width: 600px)');
    const small_mobile = window.matchMedia('(max-width: 280px)');
  
    function changeResize() {
  
        var sections_to_show = 5;
  
      if(small_mobile.matches){
          sections_to_show = 1;  	
      }
  
      else if (mobile.matches) {
          sections_to_show = 2;    	
      }
  
      else if (small_tablet.matches) {
          sections_to_show = 3; 	
      }
  
      else if (tablet.matches) {
          sections_to_show = 4;	
      }
  
    slider.css('width', 100 * number_sections / sections_to_show + '%');
    sections.css('width', 100 / number_sections * sections_to_show + '%');
  
    i = Math.floor(Math.min(Math.max(i, 0), number_sections - sections_to_show));
  
    if (i > 0) {
      slider.css({
        'left': '-' + 100 / sections_to_show * i + '%'
    });    
  }
  
    if(i == 0){
        slider.css('left', 0);
        slider_automatic = true; 
    } 
  
    if(i == number_sections - sections_to_show){
      slider_automatic = false;
    }
        }
  
    changeResize();
  
    window.addEventListener('resize', changeResize); 
  
    setInterval(function(){
      if(slider_automatic == true){ // Activa slider automatico de izquierda a derecha //
      right_arrow.trigger('click'); 
      }
      else if(slider_automatic == false) { // Activa slider automatico de derecha a izquierda //
      left_arrow.trigger('click');
      }
  },3000);
  
    $(document).on('keydown', function(e){ // funcion si una tecla es presionada //
      if(e.keyCode == 39){ // si la flecha derecha es presionada //
          right_arrow.trigger('click'); // desencadenar evento click en next //
      }
      if(e.keyCode == 37){
          left_arrow.trigger('click'); // desencadenar evento click en prev //
      }
  });
  
  });