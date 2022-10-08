import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Metric } from 'web-vitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const chNames = {
  CLS: '累计布局偏移',
  FCP: '首次内容绘制',
  FID: '首次输入延迟',
  LCP: '最大内容渲染时间',
  TTFB: '首字节到达的时间点',
}

function printMessge( {name, value}: Metric) : void {
  console.info('%s\'s value is %d .',chNames[name] , Math.round(name === 'CLS' ? value * 1000 : value))
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(printMessge,true);
