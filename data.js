var APP_DATA = {
  "menu": [
    {
      type: 'popup',
      id: 'popup-welcome',
      name: 'Welcome to Lima Community Church',
      content: '<h2>Welcome to Lima Community Church</h2><p>We are glad you are here! Feel free to explore our virtual tour and learn more about our community.</p>',
      stopMusic: false
    },
	{
      type: 'link',
      id: 'link-imnew',
      name: 'I\'m New Here',
      url: 'https://limacc.com/im-new',
      newTab: true,
      stopMusic: true
    },
	{
      type: 'link',
      id: 'link-tour',
      name: 'Virtual Tour',
      url: 'https://limacc.com/tour',
      newTab: false,
      stopMusic: true
    },
	{
      type: 'link',
      id: 'link-service-times',
      name: 'Service Times',
      url: 'https://www.limacommunitychurch.com/service-times-directions',
      newTab: false,
      stopMusic: true
    },
	{
      type: 'link',
      id: 'link-service-times',
      name: 'What We Believe',
      url: 'https://www.limacommunitychurch.com/what-we-believe',
      newTab: false,
      stopMusic: true
    },
	{
      type: 'link',
      id: 'link-our-church-app',
      name: 'Our Church App',
      url: 'https://www.limacommunitychurch.com/app',
      newTab: false,
      stopMusic: true
    },
	{
      type: 'link',
      id: 'link-preregister-kiddos',
      name: 'Pre-Register Kiddos',
      url: 'https://www.limacommunitychurch.com/im-new-plan-for-kiddos',
      newTab: false,
      stopMusic: true
    },
	{
      type: 'link',
      id: 'link-web-site',
      id: 'link-web-site',
	  name: '🌐  Visit Our Website',
	  url: 'https://limacommunitychurch.com',
	  newTab: true,
      stopMusic: true
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
      "hotspots": [
	    {
		  "id": "worship-songs-santuary-center-aisle-worship",
		  "type": "youtube",
		  "yaw": -.28,
		  "pitch": 0.15,
		  "text": "Worship Songs",
		  "title": "Worship Songs - Press [ ] in lower corner for full screen",
		  "playlist": [
		    {
				"videoId": "kfhCbhhjDIM",      // YouTube video ID
				"title": "Break Every Chain",      // Display name
				"start": 2390,                     // Optional: start time (seconds)
				"end": 2795                       // Optional: end time (seconds)
			},
			{
				"videoId": "FwokiOJ-QIA",      // YouTube video ID
				"title": "Holy Forever",      // Display name
				"start": 968,                     // Optional: start time (seconds)
				"end": 1259                       // Optional: end time (seconds)
			},
			{
				"videoId": "FwokiOJ-QIA",
				"title": "Peace Be Still",
				"start": 694,
				"end": 955
			}
		  ]
		}
	  ],  
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
