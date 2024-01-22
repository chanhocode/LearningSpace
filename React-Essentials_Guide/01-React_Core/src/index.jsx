import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// HTML 파일에 가장 먼저 로딩되는 파일로 리액트 앱의 주요 입구로 작용
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
