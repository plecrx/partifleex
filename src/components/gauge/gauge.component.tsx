import React from 'react'
import { getRatio } from 'utils/helpers/gauge/getRatio'
import { GaugeItem, GaugeLabelWrapper, GaugeWrapper } from './gauge.styles'
import { GaugeItemColors, GaugeProps } from './gauge.types'

export const Gauge = ({ likes, dislikes }: GaugeProps) => {
  const totalFeedbacks = likes + dislikes
  const likesRatio = getRatio(likes, totalFeedbacks)
  const dislikesRatio = getRatio(dislikes, totalFeedbacks)
  if (totalFeedbacks !== 0) {
    return (
      <div>
        <GaugeWrapper>
          <GaugeItem color={GaugeItemColors.like} ratio={likesRatio} isFirst />
          <GaugeItem color={GaugeItemColors.dislike} ratio={dislikesRatio} isLast />
        </GaugeWrapper>
        <GaugeLabelWrapper>
          <div style={{ color: GaugeItemColors.like }}>{likes}</div>
          <div style={{ color: GaugeItemColors.dislike }}>{dislikes}</div>
        </GaugeLabelWrapper>
      </div>
    )
  }

  return <GaugeItem color={GaugeItemColors.default} ratio={100} isFirst isLast />
}
