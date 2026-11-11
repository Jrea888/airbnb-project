import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import { useScrollTop } from "./hooks";

const App = memo(() => {
    useScrollTop();

    // useRoutes 是 hook，放在组件体顶部调用；原来直接写在 JSX 里虽然能跑，
    // 但后面想加条件分支时很容易踩 hooks 的调用规则
    const routesElement = useRoutes(routes);

    return (
        <div className="app">
            <AppHeader />
            <Suspense fallback="loading...">
                <div className="app-content">{routesElement}</div>
            </Suspense>
            <AppFooter />
        </div>
    );
});

export default App;
