/*
    GistFiddle adds a button to GitHub's gist so you can quickly open your gists
    to JSFiddle
    Copyright (C) 2014  Salehen Shovon Rahman

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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