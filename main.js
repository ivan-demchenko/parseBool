(function(){
  window.parseBool || (window.parseBool = function (string) {
    return typeof string === 'string' ? !string.match('false|нет|no|nein|nicht|увы|хер') : undefined;
  })
})(window);