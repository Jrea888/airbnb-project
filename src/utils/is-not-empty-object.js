// 判断「对象是否有内容」。
// 原文件叫 isEmptyObject，但实现返回的是 !!Object.keys(obj).length（非空才是 true），
// 名字与语义相反，极易误用；这里改为 isNotEmptyObject + 对应文件名。
export function isNotEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        return false;
    }
    return !!Object.keys(obj).length;
}
