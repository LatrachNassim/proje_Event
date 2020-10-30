$(document).ready(function () {
    let url = 'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/1ea9c9dbfdcc44df66c941a81a989c88688d2c4e';
    $.getJSON(url).done(function (data) {
        $('#imagecover').attr('src', data.record.fields.cover_url)
        $('#montitre').html(data.record.fields.title);
        $('#date').html(data.record.fields.date_start);
        $('#description').html(data.record.fields.description);
        $('#prix').html(data.record.fields.price_detail);
        $('#lieu').html(data.record.fields.address_street + data.record.fields.id);
        $('#acces').html(data.record.fields.transport);
        $('#info').html(data.record.fields.contact_twitter + data.record.fields.contact_url);
        if(data == 0) {
            alert('rate')

        }
    }); 
});