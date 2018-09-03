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
            wrapper_id: ""
        }, options);
        return this.each(function() {
            var start = $(this).attr('data-start') + settings.timeZone,
                end   = $(this).attr('data-end') + settings.timeZone;
            var dtStart = new Date(start),
                dtEnd   = new Date(end),
                dtNow   = new Date();
            if (dtStart > dtNow || dtEnd < dtNow) {
                $(this).hide();
				$('#'+settings.wrapper_id).hide();
            } else {
                var id = $(this).attr('id');
                calculateTimeDifferent(dtEnd, settings.returnType, id, settings.wrapper_id);
            }
        });
    };
    function calculateTimeDifferent(endTime, type, id, wrapper_id) {
        var now = new Date(),
            difference = endTime.getTime() - now.getTime();
        if (difference <= 0) {
            $('#' + id + ', #' + wrapper_id).hide();
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
                calculateTimeDifferent(endTime, type, id, wrapper_id);
            }, 1000);
        }
    }
}(jQuery));
