import { Card } from 'components/card/card.component'
import { Feedback } from 'components/feedback/feedback.component'
import { Gauge } from 'components/gauge/gauge.component'
import React from 'react'
import { MovieCardProps } from './movie.type'

export const MovieCard = ({
  movie,
  isChecked,
  isLiked,
  isDisliked,
  onLikeMovieClick,
  onDislikeMovieClick,
}: MovieCardProps) => {
  const { title, category, likes, dislikes } = movie
  return (
    <Card title={title} subtitle={category} isChecked={isChecked}>
      <Feedback
        onLikeClick={onLikeMovieClick}
        onDislikeClick={onDislikeMovieClick}
        isLiked={isLiked}
        isDisliked={isDisliked}
      />
      <Gauge likes={likes} dislikes={dislikes} />
    </Card>
  )
}
