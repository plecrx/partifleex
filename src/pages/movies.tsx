import { TrashIcon } from '@heroicons/react/20/solid'
import { Button } from 'components/button/button.component'
import { CardList } from 'components/cardList/cardList.component'
import { Checkbox } from 'components/checkbox/checkbox.component'
import { Dropdown } from 'components/dropdown/dropdown.component'
import { Header } from 'components/header/header.component'
import { MovieCard } from 'components/movie/movie.component'
import {
  CategoryTitle,
  CategoryWrapper,
  FilterbarWrapper,
  MoviesWrapper,
  Selector,
} from 'components/movie/movie.styles'
import { CenterDiv, Container } from 'pages/movies.styles'
import React, { useEffect, useState } from 'react'
import { Movie } from 'types/movie'
import { useMovies } from '../features/movies/useMovies'

export const Movies = () => {
  const {
    handleLikeMovieClick,
    handleDislikeMovieClick,
    isLiked,
    isDisliked,
    isSelected,
    selectedMovies,
    handleSelectAllChange,
    handleSelectMovie,
    categoriesMap,
    filteredCategoriesMap,
    setFilteredCategoriesMap,
    // addMovie,
    removeMovies,
    moviesCount,
    categories,
    isLoading,
    isError,
  } = useMovies()
  const [selectAllChecked, setSelectAllChecked] = useState(false)

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
    <FilterbarWrapper>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Selector>
          <Checkbox isChecked={selectAllChecked} onChange={handleSelectAllChange} />
          Tout sélectionner
        </Selector>
        <Dropdown
          options={categories.map((str) => ({ value: str, label: str }))}
          onSelectionChange={handleCategorySelectionChange}
        />
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {!!selectedMovies.length && (
          <Button css={{ backgroundColor: 'red', color: 'white' }} onClick={() => removeMovies(selectedMovies)}>
            <TrashIcon width={16} />
            Supprimer
          </Button>
        )}
        {/*
        <Button css={{ backgroundColor: 'green', color: 'white' }} onClick={() => {}}>
          <PlusIcon width={16} />
          Ajouter un film
        </Button>
        */}
      </div>
    </FilterbarWrapper>
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
                  key={`category-${category}-${movie.title}-${Math.random()}`}
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
