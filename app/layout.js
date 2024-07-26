'use client'
import './globals.css';
import { Manrope } from 'next/font/google';
import StoreProvider from './components/StoreProvider';
import store from '../libs/store';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider store={store}>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
