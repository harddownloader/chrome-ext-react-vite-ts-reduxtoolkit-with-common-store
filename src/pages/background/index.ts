import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';
import { wrapStore } from 'webext-redux';
import store from './../../shared/store/store';

reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss');

wrapStore(store);

console.log('background loaded');
console.log('state', store.getState());

setInterval(() => {
  console.log('setInterval state', store.getState());
}, 3000);
