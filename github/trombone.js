$(function () {
  $('body').livequery(
    'div',
    function(elem) {
      $(elem).find('.comment-body:contains(":trombone:")').each(function () {
        $(this).trombonize();
      });
    }
  );
});
