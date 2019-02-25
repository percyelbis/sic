var wms_layers = [];

        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var lyr_orthofoto_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "orthofoto",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/orthofoto_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7929519.067568, -1605251.881719, -7929434.292690, -1605203.881864]
                            })
                        });var format_tg_parques_train_2 = new ol.format.GeoJSON();
var features_tg_parques_train_2 = format_tg_parques_train_2.readFeatures(json_tg_parques_train_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tg_parques_train_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_tg_parques_train_2.addFeatures(features_tg_parques_train_2);var lyr_tg_parques_train_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tg_parques_train_2, 
                style: style_tg_parques_train_2,
                title: '<img src="styles/legend/tg_parques_train_2.png" /> tg_parques_train'
            });var format_tg_mznas_train_3 = new ol.format.GeoJSON();
var features_tg_mznas_train_3 = format_tg_mznas_train_3.readFeatures(json_tg_mznas_train_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tg_mznas_train_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_tg_mznas_train_3.addFeatures(features_tg_mznas_train_3);var lyr_tg_mznas_train_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tg_mznas_train_3, 
                style: style_tg_mznas_train_3,
                title: '<img src="styles/legend/tg_mznas_train_3.png" /> tg_mznas_train'
            });var format_ET_train_4 = new ol.format.GeoJSON();
var features_ET_train_4 = format_ET_train_4.readFeatures(json_ET_train_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ET_train_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ET_train_4.addFeatures(features_ET_train_4);var lyr_ET_train_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ET_train_4, 
                style: style_ET_train_4,
                title: '<img src="styles/legend/ET_train_4.png" /> ET_train'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_orthofoto_1.setVisible(true);lyr_tg_parques_train_2.setVisible(true);lyr_tg_mznas_train_3.setVisible(true);lyr_ET_train_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_orthofoto_1,lyr_tg_parques_train_2,lyr_tg_mznas_train_3,lyr_ET_train_4];
lyr_tg_parques_train_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', });
lyr_tg_mznas_train_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', });
lyr_ET_train_4.set('fieldAliases', {'fid': 'fid', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', });
lyr_tg_parques_train_2.set('fieldImages', {'fid': 'Hidden', 'Layer': 'Hidden', });
lyr_tg_mznas_train_3.set('fieldImages', {'fid': 'Hidden', 'Id': 'Hidden', });
lyr_ET_train_4.set('fieldImages', {'fid': 'Hidden', 'field_2': 'Hidden', 'field_3': 'Hidden', 'field_4': 'Hidden', 'field_5': 'Hidden', });
lyr_tg_parques_train_2.set('fieldLabels', {});
lyr_tg_mznas_train_3.set('fieldLabels', {});
lyr_ET_train_4.set('fieldLabels', {});
lyr_ET_train_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});