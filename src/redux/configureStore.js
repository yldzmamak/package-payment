/* import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export { store };
 */

// persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import rootReducer from './modules/rootReducer';

// redux
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'todolist-v2.0',
  storage,
  whitelist: ['users', 'packages'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const middlewares = [thunk];

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
const persistor = persistStore(store);

export { store, persistor };
