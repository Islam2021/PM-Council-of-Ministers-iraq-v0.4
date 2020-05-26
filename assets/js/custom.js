$(document).ready(function() {
    // start glabel
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker();
    $('select').formSelect();

    history.pushState(null, null, location);
    window.onpopstate = function() {
        history.go(1);
    };

    // start progress bar
    $('.progress .progress-bar').each(function() {
        $(this).animate({ width: $(this).attr('aria-valuenow') }, 50);
    });

    // start progress bar
    $('.progress_plan .progress_bar_plan').each(function() {
        $(this).animate({ width: $(this).attr('data-percent') }, 50);
    });

    var height = $("#chart_custom").height();
    var width = $("#chart_custom").width();
    $('head').append('<style>.number_day ul li:after{top: ' + -height + 'px; height: ' + height + 'px;} {.chart_custom li .bg: ' + width + 'px; .number_day: ' + width + 'px;}</style>')


    // start collapse with arrow icons
    $(".panel-heading").click(function() {
        $('.panel-collapse').on('show.bs.collapse', function() {
            $(this).siblings('.panel-heading').addClass('active');
        });
        $('.panel-collapse').on('hide.bs.collapse', function() {
            $(this).siblings('.panel-heading').removeClass('active');
        });
    });




    // start datepicker arabic
    $('.datepicker').datepicker({
        firstDay: true,
        autoClose: true,
        format: 'yyyy-mm-dd',
        i18n: {
            months: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthsShort: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            weekdays: ["الجمعه", "الخميس", "الاربعاء", "الثلاثاء", "الاثنين", "حد", "سبت"],
            weekdaysShort: ["الجمعه", "الخميس", "الاربعاء", "الثلاثاء", "الاثنين", "حد", "سبت"],
            weekdaysAbbrev: ["ج", "خ", "ر", "ث", "ت", "ح", "س"]
        }
    });

});

// start skills code 
(function() {
    $(document).ready(function() {
        $('.skill-box').find('b').each(function(i) {
            return $(this).prop('Counter', 0).animate({
                Counter: $(this).parent().data('percent')
            }, {
                duration: 1000,
                easing: 'swing',
                step: function(now) {
                    return $(this).text(Math.ceil(now) + '%');
                }
            });

        });
        return $('.skill-box .skills-circle li').each(function(i) {
            var _left, _percent, _right, deg, full_deg, run_duration;
            _right = $(this).find('.bar-circle-right');
            _left = $(this).find('.bar-circle-left');
            _percent = $(this).attr('data-percent');
            deg = 3.6 * _percent;
            if (_percent <= 50) {
                return _right.animate({
                    circle_rotate: deg
                }, {
                    step: function(deg) {
                        $(this).css('transform', 'rotate(' + deg + 'deg)');
                    },
                    duration: 1000
                });

            } else {
                full_deg = 180;
                deg -= full_deg;
                run_duration = 1000 * (50 / _percent);
                return _right.animate({
                    circle_rotate: full_deg
                }, {
                    step: function(full_deg) {
                        $(this).css('transform', 'rotate(' + full_deg + 'deg)');
                    },
                    duration: run_duration,
                    easing: 'linear',
                    complete: function() {
                        run_duration -= 1000;
                        _left.css({
                            'clip': 'rect(0, 150px, 150px, 75px)',
                            'background': 'rgba(58, 114, 0, 1)'
                        });

                        return _left.animate({
                            circle_rotate: deg
                        }, {
                            step: function(deg) {
                                $(this).css('transform', 'rotate(' + deg + 'deg)');
                            },
                            duration: Math.abs(run_duration),
                            easing: 'linear'
                        });

                    }
                });

            }
        });
    });

}).call(this);

// start show password and hide
function showPassword() {
    var prev = document.getElementById("password");
    if (prev.type === "password") {
        prev.type = "text";
        $(".view").removeClass().addClass("eye-slash");
    } else {
        prev.type = "password";
        $(".eye-slash").removeClass().addClass("view");
    }
}
// start remove or reset data input
function removeData() {
    document.getElementById("myForm").reset();
}

// start project palan PM

// AmCharts.useUTC = true;
// var chart = AmCharts.makeChart("chartdiv", {
//     "type": "gantt",
//     "theme": "light",
//     "period": "hh",
//     "dataDateFormat": "YYYY-MM-DD",
//     "balloonDateFormat": "JJ:NN",
//     "columnWidth": 0.5,
//     "categoryAxis": {
//         "guides": [{
//             "category": "John",
//             "toCategory": "Mike",
//             "LineAlpha": 0.5,
//             "expand": true,
//             "label": "Group #1",
//             "position": "left",
//             "tickLength": 50
//         }, {
//             "category": "Lenny",
//             "toCategory": "Bob",
//             "LineAlpha": 0.5,
//             "expand": true,
//             "label": "Group #2",
//             "tickLength": 50
//         }, {
//             "category": "Kendra",
//             "toCategory": "Anita",
//             "LineAlpha": 0.5,
//             "expand": true,
//             "label": "Group #3",
//             "tickLength": 50
//         }, {
//             "category": "Jack",
//             "toCategory": "Alan",
//             "LineAlpha": 0.5,
//             "expand": true,
//             "label": "Group #4",
//             "tickLength": 50
//         }]
//     },
//     "valueAxis": {
//         "type": "date",
//         "minimum": 7,
//         "maximum": 31
//     },
//     "brightnessStep": 10,
//     "graph": {
//         "fillAlphas": 1,
//         "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
//     },
//     "rotate": true,
//     "categoryField": "category",
//     "segmentsField": "segments",
//     "colorField": "color",
//     "startDate": "2015-01-01",
//     "startField": "start",
//     "endField": "end",
//     "durationField": "duration",
//     "dataProvider": [{
//         "category": "John",
//         "segments": [{
//             "start": 7,
//             "duration": 2,
//             "color": "#46615e",
//             "task": "Task #1"
//         }, {
//             "duration": 2,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "duration": 2,
//             "color": "#8dc49f",
//             "task": "Task #3"
//         }]
//     }, {
//         "category": "Smith",
//         "segments": [{
//             "start": 10,
//             "duration": 2,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "duration": 1,
//             "color": "#8dc49f",
//             "task": "Task #3"
//         }, {
//             "duration": 4,
//             "color": "#46615e",
//             "task": "Task #1"
//         }]
//     }, {
//         "category": "Ben",
//         "segments": [{
//             "start": 12,
//             "duration": 2,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "start": 16,
//             "duration": 2,
//             "color": "#FFE4C4",
//             "task": "Task #4"
//         }]
//     }, {
//         "category": "Mike",
//         "segments": [{
//             "start": 9,
//             "duration": 6,
//             "color": "#46615e",
//             "task": "Task #1"
//         }, {
//             "duration": 4,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }]
//     }, {
//         "category": "Lenny",
//         "segments": [{
//             "start": 8,
//             "duration": 1,
//             "color": "#8dc49f",
//             "task": "Task #3"
//         }, {
//             "duration": 4,
//             "color": "#46615e",
//             "task": "Task #1"
//         }]
//     }, {
//         "category": "Scott",
//         "segments": [{
//             "start": 15,
//             "duration": 3,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }]
//     }, {
//         "category": "Julia",
//         "segments": [{
//             "start": 9,
//             "duration": 2,
//             "color": "#46615e",
//             "task": "Task #1"
//         }, {
//             "duration": 1,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "duration": 8,
//             "color": "#8dc49f",
//             "task": "Task #3"
//         }]
//     }, {
//         "category": "Bob",
//         "segments": [{
//             "start": 9,
//             "duration": 8,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "duration": 7,
//             "color": "#8dc49f",
//             "task": "Task #3"
//         }]
//     }, {
//         "category": "Kendra",
//         "segments": [{
//             "start": 11,
//             "duration": 8,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "start": 16,
//             "duration": 2,
//             "color": "#FFE4C4",
//             "task": "Task #4"
//         }]
//     }, {
//         "category": "Tom",
//         "segments": [{
//             "start": 9,
//             "duration": 4,
//             "color": "#46615e",
//             "task": "Task #1"
//         }, {
//             "duration": 3,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "duration": 5,
//             "color": "#8dc49f",
//             "task": "Task #3"
//         }]
//     }, {
//         "category": "Kyle",
//         "segments": [{
//             "start": 6,
//             "duration": 3,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }]
//     }, {
//         "category": "Anita",
//         "segments": [{
//             "start": 12,
//             "duration": 2,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "start": 16,
//             "duration": 2,
//             "color": "#FFE4C4",
//             "task": "Task #4"
//         }]
//     }, {
//         "category": "Jack",
//         "segments": [{
//             "start": 8,
//             "duration": 10,
//             "color": "#46615e",
//             "task": "Task #1"
//         }, {
//             "duration": 2,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }]
//     }, {
//         "category": "Kim",
//         "segments": [{
//             "start": 12,
//             "duration": 2,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "duration": 3,
//             "color": "#8dc49f",
//             "task": "Task #3"
//         }]
//     }, {
//         "category": "Aaron",
//         "segments": [{
//             "start": 18,
//             "duration": 2,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "duration": 2,
//             "color": "#FFE4C4",
//             "task": "Task #4"
//         }]
//     }, {
//         "category": "Alan",
//         "segments": [{
//             "start": 17,
//             "duration": 2,
//             "color": "#46615e",
//             "task": "Task #1"
//         }, {
//             "duration": 2,
//             "color": "#727d6f",
//             "task": "Task #2"
//         }, {
//             "duration": 2,
//             "color": "#8dc49f",
//             "task": "Task #3"
//         }]
//     }],
//     "valueScrollbar": {
//         "autoGridCount": true
//     },
//     "chartCursor": {
//         "cursorColor": "#55bb76",
//         "valueBalloonsEnabled": false,
//         "cursorAlpha": 0,
//         "valueLineAlpha": 0.5,
//         "valueLineBalloonEnabled": true,
//         "valueLineEnabled": true,
//         "zoomable": false,
//         "valueZoomable": true
//     }
// });