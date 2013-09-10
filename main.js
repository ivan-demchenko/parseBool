(function(w, n){
  var vocab;
  vocab = {
    "en-US": ['false', 'no', 'fuck'],
    "ru-RU": ['нет', 'увы', 'хуй', 'ф(а|о)лс']
  }
  w.parseBool || (w.parseBool = function (check, locale) {
    var local;
    if (typeof locale !== 'undefined' && locale !== '') {
      local = vocab[locale] || vocab["en-US"];
    } else {
      local = vocab[n.language] || vocab["en-US"];
    }
    return typeof check === 'string' ? !check.match(local.join('|')) : undefined;
  })
})(window, navigator || null);