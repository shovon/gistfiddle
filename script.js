if (/^\/[a-z\-0-9]+\/[0-9a-f]+$/i.test(window.location.pathname)) {
  var id = window.location.pathname.split('/')[2];
  var $li = $(document.createElement('li'));

  var $button = $(document.createElement('a'));
  $button.addClass('minibutton');
  $button.attr('href', 'http://jsfiddle.net/gh/gist/library/pure/' + id + '/');
  $button.attr('target', '_blank');
  $button.html('JSFiddle');

  $li.append($button);
  $('.pagehead-actions').append($li);
}