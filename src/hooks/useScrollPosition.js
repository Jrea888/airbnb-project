import { useState, useEffect } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    // 每次滚动时，执行副作用，更新 X 和 Y 坐标
    useEffect(() => {
        // 使用节流函数，避免频繁触发 handleScroll
        const handleScroll = throttle(() => {
            console.log(window.scrollY, "----window.scrollY");
            setScrollX(window.scrollX);
            setScrollY(window.scrollY);
        }, 100);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // 返回滚动的 X 和 Y 坐标
    return { scrollX, scrollY };
}
