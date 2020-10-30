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
    let valeur = getUrlParameter('search');
    let paramaters = "";

    if (valeur) {
        paramaters = "?search=" + valeur;
    }
    let url = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records" + paramaters;
    console.log(url);

    $.getJSON(url).done(function (data) {

        $.each(data.records, function (key, val) {
            let result = $('<article />', {}).appendTo('#results');
            let description = val.record.fields.description.substring(0, 140);
            let space = description.lastIndexOf(' ');
            result.html('<img src="' + val.record.fields.cover_url + '"/>' + "<h2>" + val.record.fields.title + '</h2>' + '<p>' + val.record.fields.date_start + '</p>' + description.substring(0, space) + '...');


        });
        if (data.records.length == 0) {
            alert('Aucun résultat trouvé');
        }
    });

});

/*function recherche() {
    let recherche = document.getElementById("recherche").value;
    alert(recherche);
}*/
