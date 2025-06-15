import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { DemoWrapper } from "./styles";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import Indictor from "@/base-ui/indicator";

const DemoPage = memo((props) => {
    const list = [
        "仙逆",
        "斗破苍穹",
        "斗罗大陆",
        "遮天",
        "少年歌行",
        "武动乾坤",
        "大主宰",
        "圣墟",
        "完美世界",
        "莽荒纪",
    ];

    const [selectIndex, setSelectIndex] = useState(0);
    function controlClickHandle(isNext = true) {
        let nexIndex = isNext ? selectIndex + 1 : selectIndex - 1
        if (nexIndex < 0) {
            nexIndex = list.length -1
        }
        if (nexIndex > list.length - 1) {
            nexIndex = 0
        }
        setSelectIndex(nexIndex)
    }

    return (
        <DemoWrapper>
            <div className="content">
                <div>
                    <button onClick={e => controlClickHandle(false)}>上一个</button>
                    <button onClick={e => controlClickHandle(true)}>下一个</button>
                </div>
                <div className="carousel-list">
                    <Indictor selectIndex={selectIndex}>
                        {
                            list.map(item => {
                                return (
                                    <div className="item" key={item}>
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </Indictor>
                </div>
            </div>
        </DemoWrapper>
    );
});

DemoPage.propTypes = {};

export default DemoPage;
