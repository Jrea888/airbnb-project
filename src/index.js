import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/assets/theme";
import store from "@/store";
import App from "./App";

import "normalize.css";
// import "antd/dist/antd.less";
import "@/assets/styles/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Suspense fallback="loading">
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </Suspense>
);
