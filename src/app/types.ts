export type State = {
  iref?: number
  pp?: number
  sensortype?: 'sincos' | 'hall' | 'sensorless'
  mtemplo?: number
  mtemphi?: number
  ubmin?: number
  ubmax?: number
  ibpos?: number
  ibneg?: number
  handle?: string
}
