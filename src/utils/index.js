import {baseUrl} from '../config.js';

export function sendKeyPressWithCommand(key) {
  fetch(baseUrl + '/api/commandpress/' + key).catch(error => {
    console.error(error);
  });
}
export function sendKeyPress(key) {
  fetch(baseUrl + '/api/keypress/' + key).catch(err => console.log(err));
}
export function sendKeyPressWithFN(key) {
  fetch(baseUrl + '/api/fnkeypress/' + key).catch(err => console.log(err));
}
