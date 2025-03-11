import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import "./styles/global.css";
import "./pages/Home/Home.css";
import "./pages/Loading/Loading.css";

console.log("React 正在挂载...");
console.log("root 元素：", document.getElementById("root"));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);