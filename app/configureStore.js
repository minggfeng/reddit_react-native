import { AsyncStorage } from 'react-native'
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = compose(autoRehydrate(), applyMiddleware(thunk))(createStore)(reducer);

persistStore(store, {storage: AsyncStorage});

export default store;