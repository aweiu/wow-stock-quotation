# wow-stock-quotation

获取所有 A 股实时 + 历史行情

```
{
  date: string // 日期
  code: string // 股票代码
  open: number // 开盘价
  high: number // 最高价
  low: number // 最低价
  close: number // 收盘价/当前价
  volume: number // 成交量（单位：股）
  amount: number // 成交额（单位：人民币元）
  turnover: number // 换手率
  suspended: boolean // 是否停牌
  buying?: [{ price: number, volume: number }...] // 买5 只在实时行情中有该字段。volume 单位：股
  selling?: [{ price: number, volume: number }...] // 卖5 只在实时行情中有该字段。volume 单位：股
}
```

[文档地址](https://aweiu.com/documents/wow-stock-quotation/)
