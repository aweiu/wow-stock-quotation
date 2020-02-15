export enum TradeStatus {
  Suspended = '0',
  Normal = '1',
}

export interface Quotation {
  date: string
  code: string
  open: number
  high: number
  low: number
  close: number
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
