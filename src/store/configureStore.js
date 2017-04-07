import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; // optional, enhances our store during development, dont use in prod Basically this will spit out an error whenever you try to mutate state either inside a dispatch or between dispatchers
import thunk from 'redux-thunk';

export default function configureStore (initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk, reduxImmutableStateInvariant())
	);
}
