import { TrashIcon } from '@heroicons/react/20/solid'
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
      <button
        type="button"
        style={{
          display: 'flex',
          gap: '8px',
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        <TrashIcon width={16} />
        Supprimer de la liste
      </button>
    </Card>
  )
}
