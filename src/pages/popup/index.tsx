import React from 'react';
import { createRoot } from 'react-dom/client';
import '@pages/popup/index.css';
import Popup from '@pages/popup/Popup';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { Store } from 'webext-redux';
import { Provider } from 'react-redux';

refreshOnUpdate('pages/popup');

const store = new Store();

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);

  store.ready().then(() => {
    root.render(
      <Provider store={store}>
        <Popup />
      </Provider>,
    );
  });
}

init();
