export enum TradeStatus {
  Suspended = '0',
  Normal = '1',
}

export interface Quotation {
  date: string
  code: string
  open: number
  close: number
  high: number
  low: number
  volume: number
  amount: number
  turnover: number
  suspended: boolean
}

interface BuyingAndSelling {
  price: number
  volume: number
}

export interface RealTimeQuotation {
  [code: string]: Quotation & {
    preClose: number
    buying: [
      BuyingAndSelling,
      BuyingAndSelling,
      BuyingAndSelling,
      BuyingAndSelling,
      BuyingAndSelling,
    ]
    selling: [
      BuyingAndSelling,
      BuyingAndSelling,
      BuyingAndSelling,
      BuyingAndSelling,
      BuyingAndSelling,
    ]
  }
}
