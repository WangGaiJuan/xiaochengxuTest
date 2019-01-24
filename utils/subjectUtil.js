module.exports = {
  processSubject: processSubject,
  processSubjects: processSubjects,
  detail: detail
}

function processSubjects(subjects) {
  var page = this;
  for (var i = 0; i< subjects.length; i++){
    var subject = subjects[i];
    page.processSubject(subject);
  }
}

function processSubject(subject) {
  var title = subject.title;
  var directors = subject.directors;
  var directorStr = "";
  for (var index in directors) {
    directorStr = directorStr + directors[index].name + '/ ';
  }

  if (directorStr !== '') {
    directorStr = directorStr.substring(0, directorStr.length - 2);
  }

  var casts = subject.casts;
  var castStr = "";
  for (var index in casts) {
    castStr = castStr + casts[index].name + '/ ';
  }

  if (castStr !== '') {
    castStr = castStr.substring(0, castStr.length - 2);
  }

  var genres = subject.genres;
  var genreStr = "";

  for (var index in genres) {
    genreStr = genreStr + genres[index] + '/ ';
  }

  if (genreStr !== '') {
    genreStr = genreStr.substring(0, genreStr.length - 2);
  }

  var year = subject.year;
  var text = "名称：" + title + "\n导演：" + directorStr + "\n演员：" + castStr + "\n类型：" + genreStr + "\n上映年份：" + year + "（中国大陆）" 
  subject.text = text;
  // 去除loading
  wx.hideLoading();
}

function detail(e) {
  wx.setStorageSync("movieId", e.currentTarget.id);
  wx.navigateTo({
    url: '../detail/detail',
  })
}

function detailx(e) {
  wx:wx.navigateTo({
    url: '../detail/detail?id=' + e.currentTarget.id
  })
}
