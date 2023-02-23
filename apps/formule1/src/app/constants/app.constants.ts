export const AppConstant = {
  apiURL: '//ergast.com/api/f1/',
  mapProvider: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

  // dont forget &origin=* to get around CORS
  wikiImageUrl: '//en.wikipedia.org/w/api.php?action=query&prop=pageimages&origin=*&format=json&pithumbsize=400&titles=',
  wikiSummaryUrl: '//en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&redirects=1&titles=',
  songs: [
    {
      id: 'f1-theme',
      name: 'Formula 1 theme',
      icon: 'f1-icon-red',
      url: 'assets/audio/f1-theme.mp3',
      playing: false
    },
    {
      id: 'f1-buildup',
      name: 'Formula 1 Build-up Theme',
      icon: 'f1-icon-white',
      url: 'assets/audio/f1-buildup.mp3',
      playing: false
    }
  ]
};
