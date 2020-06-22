const POINT_MARKER_ICON_CONFIG = {
    path: "M10.292,4.229c-1.487,0-2.691,1.205-2.691,2.691s1.205,2.691,2.691,2.691s2.69-1.205,2.69-2.691,S11.779,4.229,10.292,4.229z M10.292,8.535c-0.892,0-1.615-0.723-1.615-1.615S9.4,5.306,10.292,5.306,c0.891,0,1.614,0.722,1.614,1.614S11.184,8.535,10.292,8.535z M10.292,1C6.725,1,3.834,3.892,3.834,7.458,c0,3.567,6.458,10.764,6.458,10.764s6.458-7.196,6.458-10.764C16.75,3.892,13.859,1,10.292,1z M4.91,7.525,c0-3.009,2.41-5.449,5.382-5.449c2.971,0,5.381,2.44,5.381,5.449s-5.381,9.082-5.381,9.082S4.91,10.535,4.91,7.525z",
    strokeOpacity: 1,
    strokeWeight: 2,
    strokeColor: "#e44b4b",
    fillColor: "rgb(255,255,255)",
    fillOpacity: 1,
    scale: 1.5
};

const mapSettings = {
    clickableIcons: false,
    streetViewControl: false,
    panControlOptions: false,
    gestureHandling: "cooperative",
    backgroundColor: "#FFAD00",
    mapTypeControl: false,
    zoomControlOptions: {
        style: "SMALL"
    },
    zoom: 5,
    minZoom: 2,
    maxZoom: 8,
    /* styles: [{
            featureType: "landscape",
            stylers: [
                { hue: COLORS.LANDSCAPE },
                { saturation: 50.2 },
                { lightness: -34.8 },
                { gamma: 1 }
            ]
        },
        {
            featureType: "poi",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "road.highway",
            stylers: [
                { hue: COLORS.LANDSCAPE },
                { saturation: -19.8 },
                { lightness: -1.8 },
                { gamma: 1 }
            ]
        },
        {
            featureType: "road.arterial",
            stylers: [
                { hue: COLORS.LANDSCAPE },
                { saturation: 72.4 },
                { lightness: -32.6 },
                { gamma: 1 }
            ]
        },
        {
            featureType: "road.local",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "transit",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "administrative.province",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "administrative.locality",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "administrative.province",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "administrative.land_parcel",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "administrative.neighborhood",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{ visibility: "on" }, { color: COLORS.BORDERS }]
        },
        {
            featureType: "administrative",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "water",
            stylers: [
                { hue: COLORS.WATER },
                { saturation: -63.2 },
                { lightness: 38 },
                { gamma: 1 }
            ]
        }
    ] */
};

export { mapSettings, POINT_MARKER_ICON_CONFIG };