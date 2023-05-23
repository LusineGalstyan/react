import { configureStore } from '@reduxjs/toolkit';
import loaderReducer  from './reducers/loaderSlice';
import taskCountReducer from './reducers/taskCount'





const store = configureStore({
  reducer: {
    
     loader:loaderReducer,
     count:taskCountReducer,
  }
});

export {store};