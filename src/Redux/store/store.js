import {configureStore} from '@reduxjs/toolkit';
import AuthRedusers from '../redusers/AuthRedusers';
import MainReduser from '../redusers/mainReduser';

const win =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default configureStore({
    reducer: {
        mainReduser: MainReduser,
        authRedusers: AuthRedusers,
        win
    }
})


