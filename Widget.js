(function () {
    document.writeln('<div id="cadastreWidget"></div>');
    var container = document.getElementById('cadastreWidget');
    L.DomUtil.addClass(container, 'leaflet-mapWidget');

    var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        maxNativeZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });
    var map = new L.Map(container, {
        layers: [osm],
        center: [55.382232, 36.727273],
        zoom: 17
    });
    L.google().addTo(map);
    new L.Cadastre(null, {infoMode: true}).addTo(map);
    map.addControl(new L.Control.gmxIcon({
        id: 'locateMe',
        text: 'Позиция',
        title: 'Определить мое положение'
     }).on('click', function () {
        map.locate({setView: true});
     })
    );
    map.addControl(new L.Control.gmxIcon({
        id: 'getWidget',
        text: 'Виджет',
        title: 'Получить код для вставки на свой сайт'
     }).on('click', function () {
        var str = '<div id="cadastreWidget" style="width: 800px; height: 680px;">' +
            '<script src="http://russian-face.ru/cadastre/addWidget.js"></script>' +
            '</div>';
        window.prompt('Скопируйте текст:', str);
     })
    );
    // if (!map.restoreView()) {
        //map.setView([50.5, 30.51], 15);
    // }
})();
