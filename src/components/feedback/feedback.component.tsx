import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/20/solid'
import {
  HandThumbDownIcon as OutlineHandThumbDownIcon,
  HandThumbUpIcon as OutlineHandThumbUpIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { HeroIconType } from 'types/icon'
import { ActionWrapper } from '../movie/movie.styles'
import { FeedbackButton } from './feedback.styles'
import { FeedbackColor, FeedbackProps } from './feedback.types'

export const Feedback: React.FC<FeedbackProps> = ({ movie, onUpdateFeedback }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isDisliked, setIsDisliked] = useState<boolean>(false)

  const addLike = () => {
    setIsLiked(true)
    onUpdateFeedback({ ...movie, likes: movie.likes + 1 })
  }

  const addDislike = () => {
    setIsDisliked(true)
    onUpdateFeedback({ ...movie, dislikes: movie.dislikes + 1 })
  }

  const removeLike = () => {
    setIsLiked(false)
    onUpdateFeedback({ ...movie, likes: movie.likes - 1 })
  }

  const removeDislike = () => {
    setIsDisliked(false)
    onUpdateFeedback({ ...movie, dislikes: movie.dislikes - 1 })
  }

  const onLikeClick = () => {
    if (isDisliked) {
      removeDislike()
    }
    if (isLiked) {
      removeLike()
      return
    }
    addLike()
  }

  const onDislikeClick = () => {
    if (isLiked) {
      removeLike()
    }
    if (isDisliked) {
      removeDislike()
      return
    }
    addDislike()
  }

  const renderIcon = (Icon: HeroIconType, OutlineIcon: HeroIconType, selected: boolean) => {
    const iconSize = 24
    return selected ? <Icon width={iconSize} /> : <OutlineIcon width={iconSize} />
  }

  return (
    <ActionWrapper>
      <FeedbackButton color={FeedbackColor.DISLIKED} onClick={onDislikeClick}>
        {renderIcon(HandThumbDownIcon, OutlineHandThumbDownIcon, isDisliked)}
      </FeedbackButton>
      <FeedbackButton color={FeedbackColor.LIKED} onClick={onLikeClick}>
        {renderIcon(HandThumbUpIcon, OutlineHandThumbUpIcon, isLiked)}
      </FeedbackButton>
    </ActionWrapper>
  )
}
