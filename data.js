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
      "linkHotspots": [
	    
	  ],  
      "infoHotspots": [

      ],
	  "customHotspots": [
        {
          "type": "worship",
          "yaw": -0.027983973780564497,
          "pitch": 0.1554934256337841,
          "text": "Worship Songs",
		  "title": "Worship Songs",
          "showTimes": false,
          "videos": [
            {
              "title": "Break Every Chain",
              "url": "https://www.youtube.com/watch?v=kfhCbhhjDIM",
              "startTime": 2390,
              "endTime": 2795
            },
            {
              "title": "Holy Forever",
              "url": "https://www.youtube.com/watch?v=FwokiOJ-QIA",
              "startTime": 968,
              "endTime": 1259
            },
            {
              "title": "Peace Be Still",
              "url": "https://www.youtube.com/watch?v=FwokiOJ-QIA",
              "startTime": 694,
              "endTime": 955
            }
          ]
        },
        {
          "type": "sermon",
          "yaw": 0.32614813024450484,
          "pitch": 0.16105605682769308,
		  "text": "Sermons",
          "title": "Sermons",
          "showTimes": false,
          "videos": [
            {
              "title": "DNA - Chip",
              "url": "https://www.youtube.com/watch?v=O9o4Rbw6syc",
              "startTime": 1,
              "endTime": 2772
            },
            {
              "title": "Keeping It Real - Justin",
              "url": "https://www.youtube.com/watch?v=hkXpgGQqOSY",
              "startTime": 1,
              "endTime": 2237
            },
            {
              "title": "Keeping It Real - Chip",
              "url": "https://www.youtube.com/watch?v=1eRJXX4-C-A",
              "startTime": 1,
              "endTime": 2695
            },
			{
              "title": "Joy FULL - Brad",
              "url": "https://www.youtube.com/watch?v=UwNX0uAF7uE",
              "startTime": 1,
              "endTime": 1804
            },
			{
              "title": "The Twelve - Elizabeth",
              "url": "https://www.youtube.com/watch?v=TFP73tbP-fU",
              "startTime": 1,
              "endTime": 1861
            }
          ]
        },
		{
          "type": "link",
          "yaw": 0.1838138789089534,
          "pitch": 0.4051673205002544,
          "title": "Tour our church!",
          "text": "⛪ Virtual Tour",
          "url": "https://limacommunitychurch.com/tour",
          "newTab": true
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