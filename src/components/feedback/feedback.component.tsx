import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/20/solid'
import {
  HandThumbDownIcon as OutlineHandThumbDownIcon,
  HandThumbUpIcon as OutlineHandThumbUpIcon,
} from '@heroicons/react/24/outline'
import React from 'react'
import { HeroIconType } from 'types/icon'
import { ActionWrapper } from '../movie/movie.styles'
import { FeedbackButton } from './feedback.styles'
import { FeedbackColor, FeedbackProps } from './feedback.types'

export const Feedback: React.FC<FeedbackProps> = ({
  isLiked,
  isDisliked,
  onLikeClick,
  onDislikeClick,
}) => {
  const renderIcon = (
    Icon: HeroIconType,
    OutlineIcon: HeroIconType,
    selected: boolean
  ) => {
    if (selected) {
      return <Icon width={24} />
    }
    return <OutlineIcon width={24} />
  }
  return (
    <ActionWrapper>
      <FeedbackButton color={FeedbackColor.disliked} onClick={onDislikeClick}>
        {renderIcon(HandThumbDownIcon, OutlineHandThumbDownIcon, isDisliked)}
      </FeedbackButton>
      <FeedbackButton color={FeedbackColor.liked} onClick={onLikeClick}>
        {renderIcon(HandThumbUpIcon, OutlineHandThumbUpIcon, isLiked)}
      </FeedbackButton>
    </ActionWrapper>
  )
}
