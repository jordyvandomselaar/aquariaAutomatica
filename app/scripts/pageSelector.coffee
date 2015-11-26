selected = 0

$('#menu').click ->
    if selected < this.selected
        setAnimation $('#pages'), 'slide-from-right-animation', 'slide-left-animation'
    else
        setAnimation $('#pages'), 'slide-from-left-animation', 'slide-right-animation'
    if this.selected != selected
        $('#pages')[0].select this.selected
    selected = this.selected



setAnimation = (elem, enter, exit) ->
    $(elem).attr('entry-animation', enter)
    $(elem).attr('exit-animation', exit)
