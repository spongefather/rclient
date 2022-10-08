import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler,reportAllChanges?:boolean) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry,reportAllChanges); // 累计布局偏移，得分范围0-1
      getFID(onPerfEntry,reportAllChanges); // 首次输入延迟
      getFCP(onPerfEntry,reportAllChanges); // 首次内容绘制
      getLCP(onPerfEntry,reportAllChanges); // 最大内容渲染时间
      getTTFB(onPerfEntry); // 首字节到达的时间点
    });
  }
};

export default reportWebVitals;
