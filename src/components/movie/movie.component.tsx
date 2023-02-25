import React from 'react'
import { Card } from 'components/card'
import { Feedback } from 'components/feedback'
import { Gauge } from 'components/gauge'

import { MovieCardProps } from './movie.type'

export const MovieCard = ({
  movie,
  isChecked,
  isLiked,
  isDisliked,
  onLikeMovieClick,
  onDislikeMovieClick,
  onMovieSelect,
}: MovieCardProps) => {
  const { title, likes, dislikes } = movie
  return (
    <Card title={title} isChecked={isChecked} onCardSelect={onMovieSelect}>
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
