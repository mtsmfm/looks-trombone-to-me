(function ($) {
  var trombone_url = 'https://camo.githubusercontent.com/24704947d08221825eb967a0009f5dc361a4adb6/687474703a2f2f7777772e6c67746d2e696e2f702f50527732';
  var trombone_img_tag = '<img src="' + trombone_url + '" width=200/>';
  $.fn.trombonize = function () {
    $(this).html($(this).html().replace(/(:trombone:)(?=[^>]*(?:<|$))/, trombone_img_tag));
    return this;
  };
})(jQuery);
