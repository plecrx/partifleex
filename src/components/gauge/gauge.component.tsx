import React from 'react'
import { getRatio } from 'utils/helpers/gauge/getRatio'
import { GaugeItem, GaugeLabelWrapper, GaugeWrapper } from './gauge.styles'
import { GaugeItemColor, GaugeProps } from './gauge.types'

export const Gauge = ({ likes, dislikes }: GaugeProps) => {
  const totalFeedbacks = likes + dislikes
  const likesRatio = getRatio(likes, totalFeedbacks)
  const dislikesRatio = getRatio(dislikes, totalFeedbacks)
  if (totalFeedbacks !== 0) {
    return (
      <div>
        <GaugeWrapper>
          <GaugeItem color={GaugeItemColor.LIKE} ratio={likesRatio} isFirst />
          <GaugeItem color={GaugeItemColor.DISLIKE} ratio={dislikesRatio} isLast />
        </GaugeWrapper>
        <GaugeLabelWrapper>
          <div style={{ color: GaugeItemColor.LIKE }}>{likes}</div>
          <div style={{ color: GaugeItemColor.DISLIKE }}>{dislikes}</div>
        </GaugeLabelWrapper>
      </div>
    )
  }

  return <GaugeItem color={GaugeItemColor.DEFAULT} ratio={100} isFirst isLast />
}
