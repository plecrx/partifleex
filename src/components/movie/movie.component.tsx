import React from 'react'
import { Card } from 'components/card/card.component'
import { Feedback } from 'components/feedback/feedback.component'
import { Gauge } from 'components/gauge/gauge.component'
import { MovieCardProps } from './movie.type'

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, category, likes, dislikes } = movie
  return (
    <Card title={title} subtitle={category} onRemoveClick={() => {}}>
      <Feedback onLikeClick={() => {}} onDislikeClick={() => {}} />
      <Gauge likes={likes} dislikes={dislikes} />
    </Card>
  )
}
