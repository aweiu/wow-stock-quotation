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

export interface RealTimeQuotation {
  [code: string]: Quotation
}
