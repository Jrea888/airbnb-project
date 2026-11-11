# `airbnb-project`

使用React全家桶仿写爱彼迎网站

> 本节基于仓库内实际源码逐文件整理（非课程讲义），说明该项目**用了什么框架/技术/工具**、**实现了什么功能**、**还存在哪些问题**。
>
> 说明：结论来自源码阅读，并用 `npx craco build` 做过验证（本机 Node 26 下可编译，`Compiled with warnings`）。未启动 devServer 做浏览器交互验证。

## 一、项目概览

`airbnb-project` 是一个用 **React 全家桶复刻爱彼迎（Airbnb）首页 / 房源列表 / 房源详情**的练手项目：CRA 5 + **CRACO** 覆盖构建配置（不 eject），状态用 **Redux Toolkit**（并刻意保留了一份手写 Redux 做对照），样式用 **styled-components**，UI 组件混用了 **MUI 7** 与 **antd 5**。

## 二、技术栈总览

| 分类 | 技术 / 工具 | 版本 | 说明 |
| --- | --- | --- | --- |
| 视图框架 | React | `^19.1.0` | 全函数组件 + Hooks（`memo` / `useState` / `useEffect` / `useRef` / `useCallback`） |
| 渲染入口 | react-dom | `^19.1.0` | `ReactDOM.createRoot()`，并发渲染入口 |
| 构建 | Create React App（`react-scripts`） | `5.0.1` | 未执行 eject |
| 构建覆盖 | CRACO（`@craco/craco`） | `^7.1.0` | 用 `craco.config.js` 外挂 webpack 配置，脚本全部走 `craco *` |
| 预处理器 | Less（`craco-less`） | `^3.0.1` | `.less` 文件 + 全局变量/重置样式 |
| 路由 | react-router-dom | `^7.6.0` | `BrowserRouter` + `useRoutes` + `React.lazy` + `Suspense` + `Navigate` |
| 状态管理 | Redux Toolkit | `^2.8.2` | `configureStore` + `createSlice` + `createAsyncThunk` |
| 状态绑定 | react-redux | `^9.2.0` | `useSelector`（配 `shallowEqual`）+ `useDispatch` |
| 样式方案 | styled-components | `^6.1.18` | `ThemeProvider` 注入主题，每个组件配一个 `style.js` |
| UI 组件（MUI） | @mui/material | `^7.1.1` | 实际只用了 `Rating`、`Pagination` |
| UI 组件（antd） | antd | `^5.26.0` | 实际只用了 `Carousel` |
| MUI 样式引擎 | @emotion/react、@emotion/styled | `^11.14.0` | MUI 7 默认引擎（`@mui/styled-engine-sc` 装了但未生效，见第七节） |
| 请求 | axios | `^1.9.0` | 二次封装 `ServiceRequest` 类，单例导出 |
| 类名工具 | classnames | `^2.5.1` | 条件类名（`active` / `fixed` 等） |
| 函数工具 | underscore | `^1.13.7` | 只用了 `throttle` |
| 过渡动画 | react-transition-group | 4.4.5（**未在 package.json 声明**） | `CSSTransition`、`SwitchTransition` |
| props 校验 | prop-types | 15.8.1（**未在 package.json 声明**） | 各业务组件都用 `PropTypes` |
| 样式重置 | normalize.css | `^8.0.1` | `index.js` 中引入 |

## 三、工程结构与分层

| 目录 | 职责 | 约定 |
| --- | --- | --- |
| `src/views/` | 页面：`home` / `entire` / `detail` / `demo` | 页面内再分 `component/`（页面私有组件）与 `sections/`（首页板块） |
| `src/components/` | 业务公共组件：`app-header`、`app-footer`、`section-header`、`section-tabs`、`section-rooms`、`section-footer`、`room-item` | 每个组件目录 = `index.jsx` + `style.js` |
| `src/base-ui/` | 通用无业务组件：`indicator`、`scroll-view`、`pirture-browser` | 只靠 props 驱动，可跨项目复用 |
| `src/store/` | Redux：`modules/home`、`modules/header`、`modules/detail`（RTK slice）+ `modules/entire`（手写 redux） | `index.js` 用 `configureStore` 合并 |
| `src/services/` | 请求层：`service-request/`（类 + 配置）、`service-home`、`service-entire`、`service-detail`（未接线） | `services/index.js` 统一导出 |
| `src/assets/svg/` | 把 SVG 图标写成 React 组件（`icon_*.jsx`），`utils/index.js` 负责把 style 字符串转对象 | 颜色用 `currentcolor` 继承 |
| `src/assets/styles/` | `reset.less`、`common.less`、`variables.less`，由 `index.less` 汇总 | 只做全局重置与基础排版 |
| `src/assets/theme/` | styled-components 主题：颜色、字号、宽度断点、mixin | 通过 `ThemeProvider` 注入 |
| `src/hooks/` | `useScrollTop`（路由切换回顶部）、`useScrollPosition`（节流滚动） | `hooks/index.js` 汇总导出 |
| `src/utils/` | `is-empty-object.js`（名字与实现相反，见第七节） | — |

## 四、核心技术实现

### 4.1 请求层：axios 类封装

`services/service-request/index.js` 用一个 `ServiceRequest` 类包住 axios：

* 构造时 `axios.create({ baseURL, timeout })`，`baseURL = http://codercba.com:1888/airbnb/api`，超时 10s；
* 响应拦截器直接 `return res.data`，所以业务层拿到的已经是后端数据体，不再关心 axios 的 `data` 外壳；
* 对外暴露 `request / get / post / delete / patch` 五个方法，内部统一 `{...config, method}`；
* 文件底部 `export default new ServiceRequest(BASE_URL, TIME_OUT)`，全项目共用一个实例。

业务侧再按领域拆成 `service-home.js`（6 个首页接口）、`service-entire.js`（分页房源）、`service-detail.js`（未接线）。

### 4.2 状态管理：两套写法并存

这个项目有意思的点是**同时示范了两种 Redux 写法**：

| 模块 | 写法 | 特点 |
| --- | --- | --- |
| `home` / `header` / `detail` | **RTK `createSlice` + `createAsyncThunk`** | 一个 slice 里同时定义 state、同步 reducer、异步 thunk，thunk 内部再 `dispatch` 对应的 reducer 写数据 |
| `entire` | **手写 Redux**：`constants.js`（action type 常量）+ `actionsCreators.js`（action creator + 返回函数的 thunk）+ `reduce.js`（`switch` 分支） | 更接近 Redux 经典三段式，用来对照理解 RTK 到底省了什么 |

`home` 模块的 6 个 `createAsyncThunk` 都是在 thunk 里先 await 接口、再 dispatch slice 里自己的 reducer，而不是用 `extraReducers` 的 `fulfilled` 分支——这是课程里常见的简化写法，好处是直观，代价是 loading / error 状态需要自己加。

`entire` 模块额外维护了 `totalCount`、`currentPage`、`isLoading`，配合分页组件工作。

### 4.3 路由与懒加载

```jsx
// router/index.js
const Home = React.lazy(() => import("@/views/home"));
...
{ path: "/", element: <Navigate to="/home" /> },
```

* 三个页面级组件全部 `React.lazy` 懒加载，`App.jsx` 用 `<Suspense fallback="loading...">` 兜底；
* 路由表用 `useRoutes(routes)` 以配置方式渲染（注意它是在 `App.jsx` 的 JSX 里调用的，见第七节）；
* `/detail` 没有 `:id` 参数——详情数据由列表页点击卡片时 `dispatch(changeDetailInfoAction(itemData))` 塞进 store，详情页直接 `useSelector` 取。

### 4.4 样式：styled-components + 主题

* `index.js` 用 `<ThemeProvider theme={theme}>` 包住整个应用；
* 每个组件的 `style.js` 里用 `styled.div` 模板字符串直接读 `props.theme`（颜色、字号、宽度断点、`mixin.boxShadow`）；
* 主题里还写了 `mixin.mediaWidth`——一串 `@media` 断点，按屏幕宽度切换容器宽度，模拟 Airbnb 的响应式布局；
* 组件通过 props 向样式传值，例如 `<SectionRoomsWrapper column={column}>`、`<RoomItemWrapper color={...}>`，让栅格列数与强调色由 JS 控制。

### 4.5 base-ui 三个通用组件

| 组件 | 作用 | 实现要点 |
| --- | --- | --- |
| `indicator` | 横向列表的「选中项居中」滚动容器 | `useEffect` 观察 `selectIndex`，算出选中项中心与容器中心的差值，夹取到 `[0, scrollWidth - clientWidth]` 后 `translateX(-distance)` |
| `scroll-view` | 带左右箭头的横向滚动区 | `useEffect` 里延时 300ms 测量 `scrollWidth - clientWidth` 判断是否显示右箭头；点击箭头时按 `children[index].offsetLeft` 平移 |
| `pirture-browser` | 详情页图片浏览器（全屏遮罩） | 挂载时把 `document.body.style.overflow` 设为 `hidden` 并在卸载还原；图片切换用 `SwitchTransition` + `CSSTransition` 做前后方向动画；底部缩略图用 `Indicator` 居中滚动，支持「显示/隐藏照片列表」 |

### 4.6 SVG 图标组件化

`src/assets/svg/` 里每个图标是一个 `memo` 组件，内部把原始 SVG 的 `style` 字符串交给 `styleStrToObject()` 转成 React 的 style 对象（把 `stroke-width` 这类短横线属性转驼峰），宽高通过 props 传入。好处是不用额外装 `svgr`，坏处是每个图标都要手写一遍。

### 4.7 头部搜索交互

`app-header` 是这个项目交互最复杂的部分：

* 左侧 logo、中间搜索框、右侧语言/菜单三栏布局；
* 点击搜索框 → `isSearch = true`，用两条 `CSSTransition`（`fade-areas` / `fade-detail`）在「小搜索框」和「展开的搜索面板」之间切换，同时渲染一层 `mask-cover` 点击关闭；
* 搜索面板展开后，滚动超过 30px 自动收起（这段逻辑目前写在渲染函数里，见第七节）；
* 首页把 header 配置成 `{ isFixed: true, topAlpha: true }`（固定 + 顶部透明），列表页 `topAlpha: false`，详情页 `isFixed: false`，通过 `header` 这个 slice 全局切换。

## 五、功能清单

| 页面 / 模块 | 路由 | 已实现功能 |
| --- | --- | --- |
| 首页 | `/home` | 空 Banner 容器、折扣热门房源、推荐房源（带城市 Tabs，切换后换一组房间）、去旅游灵感（横向滚动卡片）、高评分房源、Plus 房源、底部城市分类网格 |
| 全部房源 | `/entire` | 顶部筛选标签多选高亮、房源网格（每页 20 条）、MUI 分页器 + 「第 x-y 个房源，共 n 条」提示、加载遮罩、点卡片进详情 |
| 房源详情 | `/detail` | 1 张大图 + 4 张缩略图的图片墙、标题与房源规格、点击「显示所有照片」打开全屏图片浏览器（左右切换、缩略图、显示/隐藏列表） |
| 组件演示 | `/demo` | 独立演示 `base-ui/indicator` 的选中项居中滚动（上一个/下一个按钮） |
| 全局头部 | `components/app-header` | logo、搜索框展开/收起动画、遮罩、滚动自动收起、语言与菜单图标、`fixed` / `topAlpha` 两种形态 |
| 全局底部 | `components/app-footer` | 多列链接（数据来自 `footer.json`）、语言/货币切换按钮、社交图标、ICP 备案信息 |
| 房源卡片 | `components/room-item` | 单图时显示静态封面；多图时用 antd `Carousel` + 左右箭头 + 圆点指示器；MUI `Rating` 显示星级；带价格与「/ 晚」文案；支持点击回调 |
| 通用能力 | `hooks` / `base-ui` | 路由切换回顶部、节流滚动监听、横向滚动容器、图片浏览器、指示器 |

## 六、工具链与工程规范

| 工具 / 配置 | 作用 |
| --- | --- |
| `craco start / build / test / eject` | 所有脚本都换成 CRACO，避免 eject 后手写 webpack |
| `craco.config.js` | 配置 `craco-less` 插件；设置别名 `@` → `src`、`components` → `src/components`、`utils` → `src/utils` |
| `jsconfig.json` | 给编辑器/IDE 提供路径提示，只声明了 `@/*` |
| ESLint | 复用 CRA 内置规则：`eslintConfig.extends: ["react-app", "react-app/jest"]`，没有单独配置文件 |
| commitlint 19 + `commitlint-config-cz` | `commitlint.config.js` 基于 cz 配置，额外约束 header 100 字符、subject 非空且不以句号结尾、type 小写、scope 必填 |
| commitizen 4 + cz-customizable 7 | `.cz-config.js` 定义中文 type/scope 与提示语，`config.commitizen.path` 指向 `node_modules/cz-customizable` |
| browserslist | 生产 `>0.2%`、`not dead`、`not op_mini all`；开发只保留各浏览器最新版 |
| git 历史 | 遵循 conventional commits（如 `feat(views): 顶部点击切换动画实现`） |

**注意**：项目里**没有 husky / lint-staged**，所以 commitlint 只在手动执行时生效，实际提交不会被拦截（见第七节）。
## 七、问题修复记录

> 已按优先级处理：先修 3 个高危（渲染期副作用、标签点击失效、主题字体失效），再补依赖声明与死代码，最后清理低优先级项。**按你的要求保留了全部 4 处 `console.log`。**

验证结果（修复前的 8 条 ESLint 警告，正好来自下面第 1~3 项以及 `demo` / `detail-pictures` 的未使用导入）：

```bash
CI=true npx craco build    # Compiled successfully.  退出码 0
```

| 级别 | 原问题 | 处理方式 | 涉及文件 |
| --- | --- | --- | --- |
| 高 | 渲染期 setState + 改 ref | 把「滚动超过 30px 收起搜索框」的判断挪进 `useEffect`，依赖 `[scrollY, isSearch]`；`prevY` 用 `useRef(scrollY)` 初始化 | `components/app-header/index.jsx` |
| 高 | 搜索标签点击无效 | 给标签项补 `onClick` → `setCurrentIndex` + `tabClick(index)`；顺带把 `HeaderCenter` 里误导性的 `[setTabIndex, setSetTabIndex]` 改成 `[currentTabIndex, setCurrentTabIndex]`，并修掉 `<IconSearch with="12">` 的拼写（应为 `width`） | `.../search-tab/index.jsx`、`.../header-center/index.jsx` |
| 高 | 主题字体名被逗号表达式吃掉 | 改成数组 `.join(', ')`，配置的前几个字体恢复生效 | `assets/theme/index.js` |
| 中 | 两个包未在 package.json 声明 | 补 `prop-types ^15.8.1`、`react-transition-group ^4.4.5` 到 `dependencies`，并同步 lockfile | `package.json`、`package-lock.json` |
| 中 | `@mui/styled-engine-sc` 装了没接 | **选择移除**（MUI 继续走 emotion）。理由：接 alias 会让 MUI 换样式引擎，在无法做浏览器视觉验证的情况下有回归风险；移除对运行时零影响。若确实想用 styled-components 当 MUI 引擎，需在 `craco.config.js` 里把 `@mui/styled-engine` alias 到 `@mui/styled-engine-sc` | `package.json` |
| 中 | 死代码 + 错误调用 | `serviceRequest.get` 改为传 `{ url }` 配置对象；并从 `services/index.js` 导出，等详情接口就绪可直接替换 store 里的示例数据 | `services/service-detail.js`、`services/index.js` |
| 中 | 循环里 Fragment 缺 key | `<>...</>` 换成带 `key` 的 `<React.Fragment>`；删掉末尾无条件渲染的 `{ ( <div/> ) }` 冗余包裹 | `.../search-sections/index.jsx` |
| 中 | `isEmptyObject` 名不副实 | 改名 `isNotEmptyObject`，文件同步改为 `is-not-empty-object.js`，首页 6 处调用一并更新 | `utils/*`、`views/home/index.jsx` |
| 中 | 每页 20 写死 4 处 | 新增 `src/constants/index.js` 的 `PAGE_SIZE`，请求 offset、总页数、区间文案统一引用；顺带把 `endCount` 夹到 `totalCount`，最后一页不再显示超出范围的序号 | `constants/index.js`、`service-entire.js`、`entire/actionsCreators.js`、`entire-pagination/index.jsx` |
| 低 | 演示路由暴露在生产 | `/demo` 改为 `React.lazy` + 仅 `NODE_ENV !== 'production'` 时注册 | `router/index.js` |
| 低 | `demo` 页 4 个未使用导入 | 移除 `PropTypes`、`useRef`、`AppHeader`、`AppFooter`（同时清掉 4 条 ESLint 警告） | `views/demo/index.jsx` |
| 低 | `detail-pictures` 未使用 `PropTypes` | 移除导入；同时把 `verify_info.messages`、`picture_urls` 改成安全取值，缺数据时不再在渲染期抛 `Cannot read properties of undefined` | `views/detail/component/detail-pictures/index.jsx` |
| 低 | `useRoutes` 写在 JSX 里 | 提到组件体顶部 `const routesElement = useRoutes(routes)` | `App.jsx` |
| 低 | 滚动监听未声明 passive | `addEventListener('scroll', handleScroll, { passive: true })`（`console.log` 保留） | `hooks/useScrollPosition.js` |

## 八、未处理项与原因

| 项 | 现状 | 原因 |
| --- | --- | --- |
| 4 处 `console.log` | **保留** | 按你的要求原样保留，位置：`pirture-browser`、`search-sections`、`entire-top-filter`、`useScrollPosition` |
| 详情页硬编码数据 / 无 `:id` | 未改 | 需要先确认详情接口的返回结构；`store/modules/detail.js` 里的示例数据目前是详情页唯一数据源，直接清空会让页面空白，属于「接后端」范畴，不适合盲改 |
| husky / lint-staged | 未加 | 会新增依赖并改变提交行为（hook 配错会导致每次 `git commit` 失败），你的 Git 环境未验证，建议单独确认后再加 |
| `web-vitals`、`@testing-library/*` | 未删 | CRA 的标准测试栈，删掉后将来补测试还要装回来；当前只是没用到，不影响构建 |
| 无测试 | 未加 | 项目 0 个测试文件，建议先给 `indicator` 居中计算、`service-request` 拦截器补用例 |
| 图片全外链、无 `loading` / `alt` | 未动 | 属于 UI 与资源策略优化，且依赖接口返回的图片域名 |
| header 随滚动整体重渲染 | 未重构 | `useScrollPosition` 每 100ms `setState` 会带动 `AppHeader` 重渲染；根治需把滚动订阅下沉到具体子组件或改用 `useSyncExternalStore`，属于架构级改动 |

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
