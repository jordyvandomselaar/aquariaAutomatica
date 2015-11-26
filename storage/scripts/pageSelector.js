(function() {
  var selected, setAnimation;

  selected = 0;

  $('#menu').click(function() {
    if (selected < this.selected) {
      setAnimation($('#pages'), 'slide-from-right-animation', 'slide-left-animation');
    } else {
      setAnimation($('#pages'), 'slide-from-left-animation', 'slide-right-animation');
    }
    if (this.selected !== selected) {
      $('#pages')[0].select(this.selected);
    }
    return selected = this.selected;
  });

  setAnimation = function(elem, enter, exit) {
    $(elem).attr('entry-animation', enter);
    return $(elem).attr('exit-animation', exit);
  };

}).call(this);
