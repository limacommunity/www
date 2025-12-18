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
	{
	    type: 'group',
        id: 'group-about',
        name: '📖 About Us',
        expanded: false,
        items: [
        {
          type: 'link',
          id: 'link-web-site',
          name: '🌐 Visit Our Website',
          url: 'https://limacommunitychurch.com',
          newTab: true,
          stopMusic: false
        },
        {
          type: 'popup',
          id: 'popup-welcome',
          name: '👋 Welcome Message',
          content: '<h2>Welcome to Lima Community Church</h2><p>We are glad you are here! Feel free to explore our virtual tour and learn more about our community.</p>',
          stopMusic: false
        }
      ]
    },
    {
      type: 'group',
      id: 'group-media',
      name: '🎥 Media',
      expanded: false,
      items: [
        {
          type: 'iframe',
          id: 'iframe-youtube-welcome',
          name: '▶️ Welcome Video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          stopMusic: true
        },
        {
          type: 'iframe',
          id: 'iframe-vimeo-tour',
          name: '▶️ Church Tour',
          url: 'https://player.vimeo.com/video/148751763',
          stopMusic: true
        },
        {
          type: 'popup',
          id: 'popup-service-times',
          name: '⏰ Service Times',
          content: '<h2>Service Times</h2><p><strong>Sunday Morning:</strong> 10:00 AM<br><strong>Sunday Evening:</strong> 6:00 PM<br><strong>Wednesday:</strong> 7:00 PM</p>',
          stopMusic: false
        }
      ]
    },
    {
      type: 'group',
      id: 'group-connect',
      name: '🤝 Connect',
      expanded: false,
      items: [
        {
          type: 'link',
          id: 'link-facebook',
          name: '📱 Facebook',
          url: 'https://facebook.com',
          newTab: true,
          stopMusic: false
        },
        {
          type: 'link',
          id: 'link-contact',
          name: '✉️ Contact Us',
          url: 'https://limacommunitychurch.com/contact',
          newTab: true,
          stopMusic: false
        },
        {
          type: 'popup',
          id: 'popup-location',
          name: '📍 Location & Directions',
          content: '<h2>Find Us</h2><p><strong>Address:</strong><br>123 Church Street<br>Lima, OH 45801</p><p><a href="https://maps.google.com" target="_blank">Get Directions</a></p>',
          stopMusic: false
        }
      ]
    },
    {
      type: 'scene',
      id: 'scene-sanctuary',
      name: '⛪ View Sanctuary',
      sceneId: 'www',
      stopMusic: false
    },
    {
      type: 'link',
      id: 'link-donate',
      name: '💝 Give Online',
      url: 'https://limacommunitychurch.com/give',
      newTab: true,
      stopMusic: false
    }
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
