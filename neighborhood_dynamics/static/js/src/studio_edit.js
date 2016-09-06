function StudioEdit(runtime, element) {
  $(element).find('.save-button').bind('click', function() {
    var data = new FormData();
    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
    data.append('display_name', $(element).find('input[name=display_name]').val());
    data.append('display_description', $(element).find('input[name=display_description]').val());
    data.append('thumbnail', $(element).find('input[name=thumbnail]')[0].files[0]);
    data.append('excel', $(element).find('input[name=excel]')[0].files[0]);
    data.append('san_felipe_lower', $(element).find('input[name=san_felipe_lower]').val());
    data.append('san_felipe_upper', $(element).find('input[name=san_felipe_upper]').val());
    data.append('santa_ana_lower', $(element).find('input[name=santa_ana_lower]').val());
    data.append('santa_ana_upper', $(element).find('input[name=santa_ana_upper]').val());
    data.append('el_chorillo_lower', $(element).find('input[name=el_chorillo_lower]').val());
    data.append('el_chorillo_upper', $(element).find('input[name=el_chorillo_upper]').val());
    data.append('san_felipe_1', $(element).find('input[name=san_felipe_1]').val());
    data.append('san_felipe_2', $(element).find('input[name=san_felipe_2]').val());
    data.append('san_felipe_3', $(element).find('input[name=san_felipe_3]').val());
    data.append('santa_ana_1', $(element).find('input[name=santa_ana_1]').val());
    data.append('santa_ana_2', $(element).find('input[name=santa_ana_2]').val());
    data.append('santa_ana_3', $(element).find('input[name=santa_ana_3]').val());
    data.append('el_chorillo_1', $(element).find('input[name=el_chorillo_1]').val());
    data.append('el_chorillo_2', $(element).find('input[name=el_chorillo_2]').val());
    data.append('el_chorillo_3', $(element).find('input[name=el_chorillo_3]').val());
    runtime.notify('save', {state: 'start'});
    $.ajax({
      url: handlerUrl,
      type: 'POST',
      data: data,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false,
    }).done(function(response) {
      runtime.notify('save', {state: 'end'});
      console.log("response", response);
      console.log("workbook", response['json_data']);
      console.log("workbook", response['list']);
    });
  });

  $(element).find('.cancel-button').bind('click', function() {
    runtime.notify('cancel', {});
  });
}
