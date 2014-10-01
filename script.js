function addFiddleButton() {
  if (/^\/[a-z\-0-9]+\/[0-9a-f]+$/i.test(window.location.pathname)) {
    var id = window.location.pathname.split('/')[2];
    var $li = $(document.createElement('li'));

    if ($('.pagehead-actions .jsfiddle').length) {
      return;
    }

    var $button = $(document.createElement('a'));
    $button.addClass('minibutton jsfiddle');
    $button.attr('href', 'http://jsfiddle.net/gh/gist/library/pure/' + id + '/');
    $button.attr('target', '_blank');
    $button.html('JSFiddle');

    $li.append($button);
    $('.pagehead-actions').append($li);
  }
}

addFiddleButton();
setInterval(addFiddleButton, 100);