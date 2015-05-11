TNEWS = window.TNEWS || {};

TNEWS.Filter = {
  init: function(){
    $('#searchinput').on('keyup', function(){
      var value = $(this).val();
      if(value.length >= 3) {
        $('.searchable').css('opacity', .2);
        if(!$('.searchable:contains('+ value +')').css('opacity', 1));
      } else {
        $('.searchable').css('opacity', 1);
      }
    });
  }
};