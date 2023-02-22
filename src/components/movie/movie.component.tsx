import { TrashIcon } from '@heroicons/react/20/solid'
import { Button } from 'components/button/button.component'
import { ButtonColor } from 'components/button/button.types'
import { Card } from 'components/card/card.component'
import { Feedback } from 'components/feedback/feedback.component'
import { Gauge } from 'components/gauge/gauge.component'
import React from 'react'
import { MovieCardProps } from './movie.type'

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, category, likes, dislikes } = movie
  return (
    <Card
      title={title}
      subtitle={category}
      onRemoveClick={() => {}}
      isChecked={false}
    >
      <Feedback onLikeClick={() => {}} onDislikeClick={() => {}} />
      <Gauge likes={likes} dislikes={dislikes} />
      <Button color={ButtonColor.RED}>
        <TrashIcon width={16} />
        Supprimer de la liste
      </Button>
    </Card>
  )
}
