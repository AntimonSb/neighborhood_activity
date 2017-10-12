/* Javascript for NeighborhoodDynamicsXBlock. */
function NeighborhoodDynamicsXBlock(runtime, element, data_from_py) {
    var $element = $(element);
    $(function ($) {

        $(".view-on-map").click(function () {
            parent.postMessage(JSON.stringify({action: 'openMap'}), '*');
        });

        function handleTask1(data, el) {
            if (data.san_felipe) {
                $("#task1_circle1").css("background", passed_color);
            }
            if (data.santa_ana) {
                $("#task1_circle2").css("background", passed_color);
            }
            if (data.el_chorillo) {
                $("#task1_circle3").css("background", passed_color);
            }
            if (data.san_felipe && data.santa_ana && data.el_chorillo) {
                $("#task1_continue").removeAttr("disabled");
                $(el).attr("disabled", true);
            } else {
                $(el).text("Try Again");
            }
        }

        var task2_wrong_answers = 0;

        function handleTask2(data) {
            var $task2Section = $element.find('.task2.section');

            if (data.san_felipe1) {
                $("#task2_circle1").css("background", passed_color);
            }
            if (data.san_felipe2) {
                $("#task2_circle2").css("background", passed_color);
            }
            if (data.san_felipe3) {
                $("#task2_circle3").css("background", passed_color);
            }
            if (data.santa_ana1) {
                $("#task2_circle4").css("background", passed_color);
            }
            if (data.santa_ana2) {
                $("#task2_circle5").css("background", passed_color);
            }
            if (data.santa_ana3) {
                $("#task2_circle6").css("background", passed_color);
            }
            if (data.el_chorillo1) {
                $("#task2_circle7").css("background", passed_color);
            }
            if (data.el_chorillo2) {
                $("#task2_circle8").css("background", passed_color);
            }
            if (data.el_chorillo3) {
                $("#task2_circle9").css("background", passed_color);
            }
            if (data.san_felipe1 && data.san_felipe2 && data.san_felipe3 && data.santa_ana1 && data.santa_ana2 && data.santa_ana3 && data.el_chorillo1 && data.el_chorillo2 && data.el_chorillo3) {
                $("#task2_continue").removeAttr("disabled");
            } else {
                task2_wrong_answers++;
                if (task2_wrong_answers > 0 && task2_wrong_answers <= 3) {
                    $task2Section.find('.hint-message').css({'visibility': 'visible'});
                    $task2Section.find('.hint').css({'visibility': 'visible'});
                    if (task2_wrong_answers === 3) {
                        $task2Section.find('.hint-message').css({'display': 'none'});
                        $task2Section.find('.hint-link').css({'display': 'block'});
                    }
                }
            }
        }

        var passed_color = "#809342"
        $("#begin").click(function () {
            $(".begin").hide();
            $(".task1").show();
            $(".content").scrollTop(0);
            parent.postMessage(JSON.stringify({action: 'loadMap'}), '*');
        });
        $("#task1_back").click(function () {
            $(".task1").hide();
            $(".begin").show();
            $(".content").scrollTop(0);
        });
        $("#task1_continue").click(function () {
            $(".task1").hide();
            $(".task2").show();
            $(".content").scrollTop(0);
        });
        $("#task1_submit").click(function () {
            var handlerUrl = runtime.handlerUrl(element, 'submit_task1');
            var el = this;
            var data = {
                'san_felipe_lower': $('#san_felipe_lower').val() ? $('#san_felipe_lower').val() : null,
                'san_felipe_upper': $('#san_felipe_upper').val() ? $('#san_felipe_upper').val() : null,
                'santa_ana_lower': $('#santa_ana_lower').val() ? $('#santa_ana_lower').val() : null,
                'santa_ana_upper': $('#santa_ana_upper').val() ? $('#santa_ana_upper').val() : null,
                'el_chorillo_lower': $('#el_chorillo_lower').val() ? $('#el_chorillo_lower').val() : null,
                'el_chorillo_upper': $('#el_chorillo_upper').val() ? $('#el_chorillo_upper').val() : null
            };

            $.post(handlerUrl, JSON.stringify(data)).done(function (response) {
                if (response.result === 'success') {
                    handleTask1(response.data, el);
                } else {
                    runtime.notify('error', {msg: response.message});
                }
            });
        });
        $("#task2_back").click(function () {
            $(".task2").hide();
            $(".task1").show();
            $(".content").scrollTop(0);
        });
        $("#task2_continue").click(function () {
            $(".task2").hide();
            $(".conclusion").show();
            $(".content").scrollTop(0);
        });
        $("#task2_submit").click(function () {
            var handlerUrl = runtime.handlerUrl(element, 'submit_task2');
            var el = this;
            var data = {
                'san_felipe_1': $('#san_felipe_1').val() ? $('#san_felipe_1').val() : null,
                'san_felipe_2': $('#san_felipe_2').val() ? $('#san_felipe_2').val() : null,
                'san_felipe_3': $('#san_felipe_3').val() ? $('#san_felipe_3').val() : null,
                'santa_ana_1': $('#santa_ana_1').val() ? $('#santa_ana_1').val() : null,
                'santa_ana_2': $('#santa_ana_2').val() ? $('#santa_ana_2').val() : null,
                'santa_ana_3': $('#santa_ana_3').val() ? $('#santa_ana_3').val() : null,
                'el_chorillo_1': $('#el_chorillo_1').val() ? $('#el_chorillo_1').val() : null,
                'el_chorillo_2': $('#el_chorillo_2').val() ? $('#el_chorillo_2').val() : null,
                'el_chorillo_3': $('#el_chorillo_3').val() ? $('#el_chorillo_3').val() : null,
            };

            $.post(handlerUrl, JSON.stringify(data)).done(function (response) {
                if (response.result === 'success') {
                    handleTask2(response.data, el);
                } else {
                    runtime.notify('error', {msg: response.message});
                }
            });
        });
        $("#continue_case").click(function () {
            parent.postMessage(JSON.stringify({action: 'continue', sourceBlock: 'neighborhood_dynamics'}), '*');
        });
    });

    (function addUpdateProgressEventListeners(element) {
        var $element = $(element);
        var $continue_buttons = $element.find('.forward-progress');

        for (var i = 0; i < $continue_buttons.length; i++) {
            $($continue_buttons[i]).on('click', function () {
                var $progress_indicator_to_highlight = $element.find('.progress-indicator').not('.highlighted').first();
                $progress_indicator_to_highlight.addClass('highlighted');
            });
        }

        var $back_buttons = $element.find('.backward-progress');

        for (var i = 0; i < $back_buttons.length; i++) {
            $($back_buttons[i]).on('click', function () {
                var $progress_indicator_to_unhighlight = $element.find('.progress-indicator.highlighted').last();
                $progress_indicator_to_unhighlight.removeClass('highlighted');
            });
        }
    })(element);

    /* this code will not be used temporarily. */
    //(function addDownloadCaseKitEventListener(element) {
    //    var $element = $(element);
    //    var $download_button = $element.find('.download-case-kit-link');
    //
    //    $download_button.on('click', function () {
    //        parent.postMessage(JSON.stringify({action: 'downloadCaseKitLink'}), '*');
    //    });
    //})(element);
}
