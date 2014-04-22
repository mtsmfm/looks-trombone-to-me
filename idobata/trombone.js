$(function() {
  $('body').livequery(
    // ul for when messages initialized, li for when message added.
    'ul,li',
    function(elem) {
      $(elem).find('.body:contains(":trombone:")').trombonize();
    }
  );
});
