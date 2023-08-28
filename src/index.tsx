import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './components/Layout';
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
      <ConfigProvider
    theme={{
      token: {
        borderRadius: 0,
      },
    }}
  >
        <StyleProvider>
      <Layout>
        <App />
      </Layout>
    </StyleProvider>
  </ConfigProvider>

  </React.StrictMode>
);

