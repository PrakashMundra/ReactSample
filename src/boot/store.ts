import FilesystemStorage from "redux-persist-filesystem-storage";
import {getStoredState, PersistConfig, PersistedState, persistReducer, persistStore} from "redux-persist";
import {createLogger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import config from "../config";
import reducers, {StoreState} from "../reducers";
import {AsyncStorage} from "react-native";

const persistConfig: PersistConfig<StoreState> = {
    key: "ReactSample",
    version: 1,
    storage: FilesystemStorage,
    getStoredState: (cfg: PersistConfig<any>) => {
        return getStoredState(cfg).then(rs => {
            return Promise.resolve(rs as PersistedState);
        }).catch(r => {
            return getStoredState({...cfg, storage: AsyncStorage}) as Promise<PersistedState>;
        });
    },
};

const loggerConfig = config.loggerConfig();

const persistedReducer = persistReducer(persistConfig, reducers);

const logger = createLogger({
    diff: true,
});

const store = createStore(persistedReducer,
    (loggerConfig.logRedux) ? applyMiddleware(thunk, logger) : applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;
