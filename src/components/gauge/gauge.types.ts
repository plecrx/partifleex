export type GaugeProps = {
  dislikes: number
  likes: number
}

export type GaugeItemProps = {
  color: string
  isFirst?: boolean
  isLast?: boolean
  ratio: number
}

export enum GaugeItemColor {
  DEFAULT = '#E5E7EB',
  DISLIKE = '#fc5c63',
  LIKE = '#0c806b',
}
