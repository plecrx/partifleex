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

export const Feedback: React.FC<FeedbackProps> = ({ isLiked, isDisliked, onLikeClick, onDislikeClick }) => {
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
