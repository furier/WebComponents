#polymer-keydown

Component for listen to event on keydown for specific key code.

##Example:

    <polymer-keydown code="37" on-keydown="{{nextSlide}}" />

    ...
    nextSlide: function(e) {
        // e.detail.originalEvent contains the original event fired
    }
