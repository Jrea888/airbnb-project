// 房源列表每页条数
// 分页器文案、请求 offset、总页数计算共用这一个常量。
// 原来 20 被写死在 service-entire / actionsCreators / entire-pagination 三个文件里，
// 改每页条数时很容易漏改导致「总数 / 区间」错位。
export const PAGE_SIZE = 20;
