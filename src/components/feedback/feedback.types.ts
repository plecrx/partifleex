export type FeedbackProps = {
  isLiked?: boolean
  isDisliked?: boolean
  onLikeClick: () => void
  onDislikeClick: () => void
}

export enum FeedbackColor {
  liked = 'green',
  disliked = 'red',
}
