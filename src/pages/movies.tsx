import { CardList } from 'components/cardList/cardList.component'
import { FilterBar } from 'components/filterbar/filterbar.component'
import { Header } from 'components/header/header.component'
import { MovieCard } from 'components/movie/movie.component'
import { CategoryTitle, CategoryWrapper, MoviesWrapper } from 'components/movie/movie.styles'
import { CenterDiv, Container } from 'pages/movies.styles'
import React, { useEffect, useState } from 'react'
import { Movie } from 'types/movie'
import { useMovies } from '../features/movies/useMovies'

export const Movies = () => {
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false)
  const {
    // addMovie,
    categories,
    categoriesMap,
    filteredCategoriesMap,
    handleDislikeMovieClick,
    handleLikeMovieClick,
    handleSelectAllChange,
    handleSelectMovie,
    isDisliked,
    isError,
    isLiked,
    isLoading,
    isSelected,
    moviesCount,
    removeMovies,
    selectedMovies,
    setFilteredCategoriesMap,
  } = useMovies()

  const handleCategorySelectionChange = (selection: string[]) => {
    const filteredCategories: Record<string, Movie[]> = {}
    selection.forEach((category) => {
      if (category in filteredCategoriesMap) {
        filteredCategories[category] = filteredCategoriesMap[category]
        return
      }
      filteredCategories[category] = categoriesMap[category]
    })
    setFilteredCategoriesMap(filteredCategories)
  }

  useEffect(() => {
    setSelectAllChecked(selectedMovies.length === moviesCount)
  }, [handleSelectMovie, moviesCount, selectedMovies])

  const renderFilterBar = () => (
    <FilterBar
      selectAllChecked={selectAllChecked}
      handleSelectAllChange={handleSelectAllChange}
      categories={categories}
      handleCategorySelectionChange={handleCategorySelectionChange}
      selectedMovies={selectedMovies}
      removeAction={() => removeMovies(selectedMovies)}
      showRemoveButton={!!selectedMovies.length}
    />
  )

  const renderContent = () => {
    if (isLoading) {
      return (
        <CenterDiv>
          <span>Loading...</span>
        </CenterDiv>
      )
    }

    if (isError) {
      return (
        <CenterDiv>
          <span>An error occurred...</span>
        </CenterDiv>
      )
    }

    if (!filteredCategoriesMap) {
      return (
        <CenterDiv>
          <span>No movies !</span>
        </CenterDiv>
      )
    }

    return (
      <CardList filterBar={renderFilterBar()}>
        {Object.entries(filteredCategoriesMap).map(([category, categoryMovies]) => (
          <CategoryWrapper key={`category-${category}`}>
            <CategoryTitle>{category}</CategoryTitle>
            <MoviesWrapper>
              {categoryMovies.map((movie: Movie) => (
                <MovieCard
                  key={`movie-${movie.title}-${Math.random()}`}
                  movie={movie}
                  isChecked={isSelected(movie)}
                  isLiked={isLiked(movie)}
                  isDisliked={isDisliked(movie)}
                  onLikeMovieClick={() => handleLikeMovieClick(movie)}
                  onDislikeMovieClick={() => handleDislikeMovieClick(movie)}
                  onMovieSelect={() => handleSelectMovie(movie)}
                />
              ))}
            </MoviesWrapper>
          </CategoryWrapper>
        ))}
      </CardList>
    )
  }

  return (
    <Container>
      <Header title="Ma liste de films" />
      {renderContent()}
    </Container>
  )
}
