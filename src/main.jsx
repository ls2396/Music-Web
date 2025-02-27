// 入口文件 用于渲染根组件到 DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入 ReactDOM，这是用于将 React 组件渲染到 DOM（网页）上的工具。
// react-dom/client 是 React 18 引入的新 API，用于创建根节点并渲染组件（替代旧的 ReactDOM.render）。
import App from './App';
// 导入 App.jsx 文件（根组件），它定义了整个应用的结构和逻辑
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
// 这里导出的名字是 Router（大写），因为它是 createBrowserRouter 的返回值，通常建议用大写开头（React 组件或对象的命名习惯）。
// 当你用 import router from './routes/index'; 时，router 是一个变量名（小写），你可以随意命名，但需要保持一致性。

// 路由绑定
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)