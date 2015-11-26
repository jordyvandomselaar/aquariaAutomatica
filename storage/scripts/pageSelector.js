(function() {
  $('#menu').click(function() {
    return $('#pages')[0].select(this.selected);
  });

}).call(this);
