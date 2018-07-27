/**
 * Author Nat Lee (c) 2018
 * Free to use
 * https://github.com/lee-ratinan/showTimer
 */
(function ($) {
  $.fn.showTimer = function(options) {
    var settings = $.extend({
        returnType: "text",
        timeZone: "+00:00",
    }, options);
    return this.each(function() {
      var start = $(this).attr('data-start') + settings.timeZone,
          end   = $(this).attr('data-end') + settings.timeZone;
      var dtEnd   = new Date(end),
          dtNow   = new Date(),
          dtStart;
      // data-start is optional. If absent, then data-start is now.
      if ('' === $(this).attr('data-start') || undefined === $(this).attr('data-start')) {
        dtStart = new Date();
      } else {
        dtStart = new Date(start);
      }
      if (dtStart > dtNow || dtEnd < dtNow) {
        $(this).hide();
      } else {
        var id = $(this).attr('id');
        calculateTimeDifferent(dtEnd, settings.returnType, id);
      }
    });
  };
  function calculateTimeDifferent(endTime, type, id) {
    var now = new Date(),
        difference = endTime.getTime() - now.getTime();
    if (difference <= 0) {
      $('#' + id).hide();
    } else {
      var seconds = Math.floor(difference / 1000),
          sec = Math.floor(seconds % 60),
          minutes = Math.floor(seconds / 60),
          min = Math.floor(minutes % 60),
          hours = Math.floor(minutes / 60),
          hrs = Math.floor(hours % 24),
          days = Math.floor(hours / 24);
      if ("text" === type) {
        var str = days + 'd ' + hrs + 'h ' + min + 'm ' + sec + 's';
        if (0 === days) {
          if (0 == hrs) {
            if (0 == min) {
              str = sec + 's';
            } else {
              str = min + 'm ' + sec + 's';
            }
          } else {
            str = hrs + 'h ' + min + 'm ' + sec + 's';
          }
        }
        $('#'+id).html(str);
      } else if ("num" === type) {
        var str = days + 'd ' + hrs + ':' + min + '' + sec;
        if (10 > sec) { sec = '0' + sec; }
        if (10 > min) { min = '0' + min; }
        if (0 === days) {
          if (0 == hrs) {
            if (0 == min) {
              str = '0:' + sec;
            } else {
              str = min + ':' + sec;
            }
          } else {
            str = hrs + ':' + min + ':' + sec;
          }
        }
        $('#'+id).html(str);
      } else {
        if (10 > days) { days = "0" + days; }
        if (10 > hrs) { hrs = "0" + hrs; }
        if (10 > min) { min = "0" + min; }
        if (10 > sec) { sec = "0" + sec; }
        var str = '<div class="countdown_day">' + days + '<br />DAYS</div>';
            str += '<div class="countdown_hours">' + hrs + '<br />HRS</div>';
            str += '<div class="countdown_mins">' + min + '<br />MINS</div>';
            str += '<div class="countdown_sec">' + sec + '<br />SEC</div>';
        $('#'+id).html(str);
      }
      setTimeout(function () {
        calculateTimeDifferent(endTime, type, id);
      }, 1000);
    }
  }
}(jQuery));
