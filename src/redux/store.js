import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    num: '',
    content: '',
  },
});
