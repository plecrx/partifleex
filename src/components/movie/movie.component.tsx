import { Card } from 'components/card/card.component'
import { Feedback } from 'components/feedback/feedback.component'
import { Gauge } from 'components/gauge/gauge.component'
import React from 'react'
import { MovieCardProps } from './movie.type'

export const MovieCard = ({ movie, isChecked, onMovieSelect, onMovieUpdate }: MovieCardProps) => {
  const { title, likes, dislikes } = movie
  const handleSelectMovie = () => {
    onMovieSelect(movie)
  }
  return (
    <Card title={title} isChecked={isChecked} onCardSelect={handleSelectMovie}>
      <Feedback movie={movie} onUpdateFeedback={onMovieUpdate} />
      <Gauge likes={likes} dislikes={dislikes} />
    </Card>
  )
}
