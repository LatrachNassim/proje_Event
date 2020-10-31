const getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

$(document).ready(function () {
    /*$("#button").click(function () {
        

        let valeur = $('input').val();
        alert('La valeur de recherche est : ' + valeur);
    });*/
    let valeur = getUrlParameter("id");

    $(document).ready(function () {
        let url = 'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/' + valeur;
        $.getJSON(url).success(function (data) {

            $('#imagecover').attr('src', data.record.fields.cover_url)
            $('#montitre').html(data.record.fields.title);
            $('#date').html(data.record.fields.date_start);
            $('#description').html(data.record.fields.description);
            $('#prix').html(data.record.fields.price_detail);
            $('#lieu').html(data.record.fields.address_street + data.record.fields.id);
            $('#acces').html(data.record.fields.transport);
            $('#info').html(data.record.fields.contact_twitter + data.record.fields.contact_url);
            $('#button').html(window.location.replace('favories.html'));
        }).fail(function (data) {
            window.location.replace('index.html');
        });

    });
})



