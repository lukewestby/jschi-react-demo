import React from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import thunk from 'redux-thunk';

import appReducer from './reducers';
import App from './components/App';

const __DEBUG__ = false;

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const store = finalCreateStore(appReducer);

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>
    {renderDebugPanel()}
  </div>,
  document.getElementById('app')
);

function renderDebugPanel() {
  if(!__DEBUG__) return;
  return (
    <DebugPanel top right bottom>
      <DevTools store={store}
                monitor={LogMonitor} />
    </DebugPanel>
  );
}
