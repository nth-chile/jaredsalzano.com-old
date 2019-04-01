$(document).ready(function(){
  
  var $grid = $('.grid');
  var masonryOptions = {
    itemSelector: '.grid__item__wrap',
    columnWidth: 1,
    originTop: false
  };
  $grid.masonry(masonryOptions);
  
  var json = GRID_DATA.map(function(item) {
    return $(item);
  });
  
  var $item;
  $('.prepend-button').on( 'click', prependButtonHandler );
  function prependButtonHandler() {
    $('.prepend-button').off('click', prependButtonHandler);
    //get data
    var ghost = ($('#select__item-type').val() == 'ghost') ? ' ghost' : '';
    var $width = $('#select__item-width').val();
    var $height = $('#select__item-height').val();
    var padding = ($width == '.5px' || $height == '.5px') ? 'padding: 0;' : '';
    //create item
    $item = $("<div class='grid__item__wrap" + ghost + "' style='height:" + $height + "; width:" + $width + ";" + padding + "'><a class='grid__item'></a></div>");
    //push to array
    console.log($item);
    json.push($item);

    json.forEach(function(item) {
      $grid.masonry('remove', item);
    });
    
    setTimeout(function(){
      json.forEach(function(item) {
        $grid.append(item)
          .masonry('appended', item)
          .masonry();
      });
    setTimeout(function(){$('.prepend-button').on('click', prependButtonHandler);}, 500);
    }, 501);
  }
  
  // remove clicked grid item
  $grid.on( 'click', '.grid__item__wrap', function() {
    var array = json.filter(function(item) {
        return item[0].outerHTML != $(this)[0].outerHTML;
    }.bind(this));
    json = array;
    $grid.masonry( 'remove', this )
        .masonry('layout'); 
  });

  //save form
  $('.save-form').on('submit', function() {
    var GRID_DATA = json.map(function(item) {
      return item[0].outerHTML;
    });
    if ($('.password').val() == 'pass') {
      $.post($(this).attr('action'), { data: GRID_DATA }, function(response){
          console.log('response: ', response)
          alert('saved');
        });
    } else {
      alert('incorrect password');
    }
    return false;
  });

});