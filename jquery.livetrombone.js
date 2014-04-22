(function ($) {
  $.fn.livetrombone = function (options) {
    var settings = $.extend({
      parentSelector: 'div',
      bodySelector: '*'
    }, options);

    $(this).livequery(
      settings.parentSelector,
      function(elem) {
        $(elem).find(settings.bodySelector).filter(':contains(":trombone:")').trombonize();
      }
    );
  };
})(jQuery);
