import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// let watchProgres = Number.parseFloat(
//   localStorage.getItem('videoplayer-current-time')
// );

// if (!watchProgres) {
//   watchProgres = 0;
// }
const watchProgres = Number(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(watchProgres);

player.on('timeupdate', throttle(timeSet, 1000));

function timeSet(currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
}
