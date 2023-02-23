export type FeedbackProps = {
  isDisliked?: boolean
  isLiked?: boolean
  onDislikeClick: () => void
  onLikeClick: () => void
}

export enum FeedbackColor {
  LIKED = 'green',
  DISLIKED = 'red',
}
