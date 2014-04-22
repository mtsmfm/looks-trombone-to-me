(function ($) {
  $.fn.trombonize = function () {
    var tromboneImgUrl = 'https://camo.githubusercontent.com/24704947d08221825eb967a0009f5dc361a4adb6/687474703a2f2f7777772e6c67746d2e696e2f702f50527732';
    var tromboneImgTag = '<img src="' + tromboneImgUrl + '" width=200/>';
    $(this).each(function () {
      $(this).html($(this).html().replace(/(:trombone:)(?=[^>]*(?:<|$))/, tromboneImgTag));
    });
    return this;
  };
})(jQuery);
