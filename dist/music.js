const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [{
    name: "成都",
    artist: '赵雷',
    url: 'http://www.ytmp3.cn/down/38582.mp3',
    cover: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FoDzYIaxaihg%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoDzYIaxaihg&docid=3V7APJFuMaO8rM&tbnid=DCNHjDH0-dyChM%3A&vet=10ahUKEwjL4a6yr-DfAhWLEbwKHWNqBKcQMwg-KAIwAg..i&w=1280&h=720&bih=978&biw=1920&q=%E8%B5%B5%E9%9B%B7%20%E6%88%90%E9%83%BD%20%E5%9B%BE%E7%89%87&ved=0ahUKEwjL4a6yr-DfAhWLEbwKHWNqBKcQMwg-KAIwAg&iact=mrc&uact=8',
  }]
});
