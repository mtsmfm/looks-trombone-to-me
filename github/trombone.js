$(function () {
  $('body').livequery(
    'div',
    function(elem) {
      $(elem).find('.comment-body:contains(":trombone:")').trombonize();
    }
  );
});
