import React from 'react';
import { Card } from '../card/card.component';
import { Feedback } from '../feedback/feedback';
import { Gauge } from '../gauge/gauge.component';
import { MovieCardProps } from './movie.type';

export const MovieCard = ({ movie }: MovieCardProps) => {
    const {title, category, likes, dislikes} = movie
    return (
        <Card title={title} subtitle={category} cancelAction={() => {}}>
            <Feedback likeAction={() => {}} dislikeAction={() => {}}/>
            <Gauge likes={likes} dislikes={dislikes} />
        </Card>
    )
}