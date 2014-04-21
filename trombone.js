window.trombonize = function(parentSelector, bodySelector) {
  $('html').livequery(
    parentSelector,
    function(elem) {
      $(elem).find(bodySelector).each(function(){
        $(this).trombonize();
      })
    }
  );
};
