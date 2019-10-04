const map = L.map('map').setView([40, 33], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map)


const myURL = jQuery('script[src$="map.js"]').attr('src').replace('map.js', '').replace('js/', '')
console.log(myURL)
for (var i = 0; i < markers.length; ++i) {
  var text = '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a><br/>'
  if (markers[i].desc)
    text += '<p>' + markers[i].desc + '</p>'

  const icon = L.icon({
    iconUrl: myURL + 'img/icons/' + (markers[i].icon || 'E2R5.png'),
    iconRetinaUrl: myURL + 'img/icons/' + (markers[i].icon || 'E2R5.png'),
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
  })

  L.marker([markers[i].lat, markers[i].lng], { icon: icon })
    .bindPopup(text)
    .addTo(map);
}
