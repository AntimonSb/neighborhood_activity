/* Javascript for NeighborhoodDynamicsXBlock. */
function NeighborhoodDynamicsXBlock(runtime, element) {

    function updateCount(result) {
        $('.count', element).text(result.count);
    }

    function requestMap() {              
      parent.postMessage(JSON.stringify({action: 'openMap' }),'*'); 
    }
  
    $(function ($) {
      
      function handleTask1(data){
        if(data.san_felipe){
          $("#task1_circle1").css("background", passed_color);
        }
        if(data.santa_ana){
          $("#task1_circle2").css("background", passed_color);
        }
        if(data.el_chorillo){
          $("#task1_circle3").css("background", passed_color);
        }
        if(data.san_felipe && data.santa_ana && data.el_chorillo){
          $("#task1_continue").removeAttr("disabled");
        }
      }
      
      function handleTask2(data){
        if(data.san_felipe1){
          $("#task2_circle1").css("background", passed_color);
        }
        if(data.san_felipe2){
          $("#task2_circle2").css("background", passed_color);
        }
        if(data.san_felipe3){
          $("#task2_circle3").css("background", passed_color);
        }
        if(data.santa_ana1){
          $("#task2_circle4").css("background", passed_color);
        }
        if(data.santa_ana2){
          $("#task2_circle5").css("background", passed_color);
        }
        if(data.santa_ana3){
          $("#task2_circle6").css("background", passed_color);
        }
        if(data.el_chorillo1){
          $("#task2_circle7").css("background", passed_color);
        }
        if(data.el_chorillo2){
          $("#task2_circle8").css("background", passed_color);
        }
        if(data.el_chorillo3){
          $("#task2_circle9").css("background", passed_color);
        }
        if(data.san_felipe1 && data.san_felipe2 && data.san_felipe3 && data.santa_ana1 && data.santa_ana2 && data.santa_ana3 && data.el_chorillo1 && data.el_chorillo2 && data.el_chorillo3){
          $("#task2_continue").removeAttr("disabled");
        }
      }
      
      var passed_color = "#809342"
      $("#begin").click(function() {
        $(".begin").hide();
        $(".task1").show();
      });
      $("#task1_back").click(function() {
        $(".task1").hide();
        $(".begin").show();
      });
      $("#task1_continue").click(function() {
        $(".task1").hide();
        $(".charts").show();
      });
      $("#task1_submit").click(function() {
        var handlerUrl = runtime.handlerUrl(element, 'submit_task1');
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
            handleTask1(response.data);
          } else {
            runtime.notify('error', {msg: response.message});
          }
        });
      });
      
      $("#charts_back").click(function() {
        $(".charts").hide();
        $(".task1").show();
      });
      $("#charts_continue").click(function() {
        $(".charts").hide();
        $(".task2").show();
      });
      $("#task2_back").click(function() {
        $(".task2").hide();
        $(".charts").show();
      });
      $("#task2_continue").click(function() {
        $(".task2").hide();
        $(".conclusion").show();
      });
      $("#task2_submit").click(function() {
        var handlerUrl = runtime.handlerUrl(element, 'submit_task2');
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
            handleTask2(response.data);
          } else {
            runtime.notify('error', {msg: response.message});
          }
        });
      });
    });
}
