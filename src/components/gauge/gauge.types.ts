export type GaugeProps = {
  likes: number
  dislikes: number
}

export type GaugeItemProps = {
  isFirst?: boolean
  isLast?: boolean
  color: string
  ratio: number
}

export enum GaugeItemColors {
  default = '#E5E7EB',
  dislike = '#fc5c63',
  like = '#0c806b',
}
