(function(w, n) {
  'use strict';
  var vocab;
  vocab = {
    "en-US": ['false', 'n(o+)', 'fuck'],
    "ru-RU": ['н(е+)т', 'увы', 'ф(а|о)лс']
  };
  w.parseBool || (w.parseBool = function(check, locale) {
    var local;
    local = vocab[locale] || vocab[n.language] || vocab["en-US"];
    return !check.toString().match(local.join('|') + '|0');
  });
}(window, navigator || null));
