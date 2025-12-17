var APP_DATA = {
  "menu": [
    {
		type: 'link',
		id: 'link-web-site',
		name: '🌐  Visit Our Website',
		url: 'https://limacommunitychurch.com',
		newTab: true // true = open in new tab, false = same tab
    },
  ],
  
  "scenes": [
    {
      "id": "www",
      "name": "Lima Community Church of the Nazarene",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.4248345261881141,
        "pitch": 0,
        "fov": 1.4996545601207187
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.027983973780564497,
          "pitch": 0.1554934256337841,
          "title": "Worship",
          "text": "Worship text"
        },
        {
          "yaw": 0.32614813024450484,
          "pitch": 0.16105605682769308,
          "title": "Sermons",
          "text": "Sermons text"
        },
        {
          "yaw": 0.1838138789089534,
          "pitch": 0.4051673205002544,
          "title": "Website",
          "text": "website text"
        }
      ]
    }
  ],
  "name": "Lima Community Church of the Nazarene",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true,
	"customMusic": true
  }
};
