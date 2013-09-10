(function(w, n){
  var vocab;
  vocab = {
    "en-US": ['false', 'no', 'fuck'],
    "ru-RU": ['нет', 'увы', 'хуй', 'ф(а|о)лс']
  }
  w.parseBool || (w.parseBool = function (check, locale) {
    var local;
    local = vocab[locale] || vocab[n.language] || vocab["en-US"];
    return typeof check === 'string' ? !check.match(local.join('|')) : undefined;
  })
})(window, navigator || null);