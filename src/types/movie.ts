export type Movie = {
  category: string
  dislikes: number
  id: string
  likes: number
  title: string
}

export type MovieMap = Record<string, Movie[]>
