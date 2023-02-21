import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { ActionWrapper } from '../movie/movie.styles'
import { FeedbackButton } from './feedback.styles'
import { FeedbackProps } from './feedback.types'

export const Feedback: React.FC<FeedbackProps> = ({
  likeAction,
  dislikeAction,
}) => (
  <ActionWrapper>
    <FeedbackButton color="green" onClick={likeAction}>
      <HandThumbUpIcon width={24} />
    </FeedbackButton>
    <FeedbackButton color="red" onClick={dislikeAction}>
      <HandThumbDownIcon width={24} />
    </FeedbackButton>
  </ActionWrapper>
)
