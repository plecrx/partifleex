import { Card } from '../card/card.component';
import { Gauge } from '../gauge/gauge.component';
import { MovieCardProps } from './movie.type';
import { MovieCardCategory } from './movie.styles';

export const MovieCard = ({ movie }: MovieCardProps) => {
    const {title, category, likes, dislikes} = movie
    return (
        <Card
            title={title}
            primaryAction={<button></button>}
            secondaryAction={<button></button>}
        >
            <MovieCardCategory>{category}</MovieCardCategory>
            <Gauge likes={likes} dislikes={dislikes} />
        </Card>
    )
}