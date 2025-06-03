import React, { memo } from "react";
import footerData from "@/assets/data/footer.json";

import { AppFooterWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMicroBlog from "@/assets/svg/icon_micro_blog";
import IconWeChat from "@/assets/svg/icon_wechat";

const AppFooter = memo((props) => {
    return (
        <AppFooterWrapper>
            <div className="footer-list">
                {footerData.bottomLinkList.map((item, index) => {
                    return (
                        <div className="footer-column" key={index}>
                            <div className="title">{item.name}</div>
                            <div className="list">
                                {item.list.map((subItem, childIndex) => {
                                    return (
                                        <div className="item" key={childIndex}>
                                            <span className="text">
                                                {subItem}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="footer-info">
                <div className="top">
                    <div className="left">
                        <span>© 2025 Airbnb, Inc.</span>
                        <span className="dot">·</span>
                        <span>隐私</span>
                        <span className="dot">·</span>
                        <span>条款</span>
                        <span className="dot">·</span>
                        <span>网站地图</span>
                    </div>
                    <div className="right">
                        <div className="btn">
                            <span className="scale">
                                <span className="icon-text">
                                    <IconGlobal />
                                    简体中文 (CN)
                                </span>
                            </span>
                        </div>
                        <div className="btn">
                            <span className="scale">
                                <div className="icon-text">
                                    <span>¥</span>
                                    <span>CNY</span>
                                </div>
                            </span>
                        </div>
                        <div className="icon-btns">
                            <div className="icon-btn">
                                <IconMicroBlog />
                            </div>
                            <div className="icon-btn">
                                <IconWeChat />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle-line"></div>
                <div className="bottom">
                    <div className="span-link">京ICP备16017121号</div>
                    <span className="dot">·</span>
                    <div className="span-link">京ICP证 160773号</div>
                    <span className="dot">·</span>
                    <div className="span-link">京公网安备 11010502032345号</div>
                    <span className="dot">·</span>
                    <div className="text">安彼迎网络（北京）有限公司</div>
                    <span className="dot">·</span>
                    <div className="span-link">营业执照</div>
                    <span className="dot">·</span>
                    <div className="text">全国旅游投诉渠道 12345</div>
                    <span className="dot">·</span>
                    <div className="text">
                        违法和不良信息举报邮箱 jubao@airbnb.com
                    </div>
                </div>
            </div>
        </AppFooterWrapper>
    );
});

export default AppFooter;
