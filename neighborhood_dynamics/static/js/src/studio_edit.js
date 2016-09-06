function StudioEdit(runtime, element) {
  $(element).find('.save-button').bind('click', function() {
    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
    var data = {
      display_name: $(element).find('input[name=display_name]').val(),
      san_felipe_lower: $(element).find('input[name=san_felipe_lower]').val(),
      san_felipe_upper: $(element).find('input[name=san_felipe_upper]').val(),
      santa_ana_lower: $(element).find('input[name=santa_ana_lower]').val(),
      santa_ana_upper: $(element).find('input[name=santa_ana_upper]').val(),
      el_chorillo_lower: $(element).find('input[name=el_chorillo_lower]').val(),
      el_chorillo_upper: $(element).find('input[name=el_chorillo_upper]').val(),
      san_felipe_1: $(element).find('input[name=san_felipe_1]').val(),
      san_felipe_2: $(element).find('input[name=san_felipe_2]').val(),
      san_felipe_3: $(element).find('input[name=san_felipe_3]').val(),
      santa_ana_1: $(element).find('input[name=santa_ana_1]').val(),
      santa_ana_2: $(element).find('input[name=santa_ana_2]').val(),
      santa_ana_3: $(element).find('input[name=santa_ana_3]').val(),
      el_chorillo_1: $(element).find('input[name=el_chorillo_1]').val(),
      el_chorillo_2: $(element).find('input[name=el_chorillo_2]').val(),
      el_chorillo_3: $(element).find('input[name=el_chorillo_3]').val()
    };
    runtime.notify('save', {state: 'start'});
    $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
      runtime.notify('save', {state: 'end'});
    });
  });

  $(element).find('.cancel-button').bind('click', function() {
    runtime.notify('cancel', {});
  });
}
