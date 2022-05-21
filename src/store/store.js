import {applyMiddleware, createStore} from "redux";
import rootReducers from './reducers'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {setLocalStorage} from "@utils/localStorage";

const store = createStore(
    rootReducers,
    // composeWithDevTools чтобы заработала вкладка Redux в DevTools
    // thunk чтобы выполнять асинхронные запросы
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
    // console.log(store.getState().favoriteReducer)
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store
