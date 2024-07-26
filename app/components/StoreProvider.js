// app/components/StoreProvider.js
"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../libs/store'; // Adjust path as necessary

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
