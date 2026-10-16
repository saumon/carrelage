/* Pose des carreaux du hero : chaque carreau reçoit son émail, son léger faux-aplomb
   et un ordre d'arrivée en balayage diagonal. Sans JavaScript, la page reste complète. */
(function () {
  var floor = document.querySelector('.floor');
  if (!floor) return;

  var plain = floor.querySelectorAll('.tile:not(.tile--call)');
  var call = floor.querySelector('.tile--call');
  var step = plain[0].offsetWidth || 1;
  var last = 0;

  Array.prototype.forEach.call(plain, function (tile) {
    var order = (tile.offsetLeft + tile.offsetTop) / step + Math.random() * 1.5;
    last = Math.max(last, order);
    tile.style.setProperty('--i', order.toFixed(2));
    tile.style.setProperty('--r', (Math.random() * 1.6 - 0.8).toFixed(2) + 'deg');
    tile.style.setProperty('--l', (20 + Math.random() * 10).toFixed(1) + '%');
    tile.style.setProperty('--h', (158 + Math.random() * 16).toFixed(0));
    if (Math.random() < 0.12) {
      tile.style.setProperty('--l', '38%');
      tile.style.setProperty('--s', '28%');
    }
  });

  call.style.setProperty('--i', (last + 3).toFixed(2));

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    floor.classList.add('is-laying');
  }
})();
