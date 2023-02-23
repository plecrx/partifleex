import Select from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
`

export const StyledSelect = styled(Select)`
  .react-select__control {
    min-height: 72px;
    width: 100%;
    border: 1px solid #d3d3d3;
    border-radius: 8px;
    cursor: pointer;
  }

  .react-select__control:hover {
    border-color: #d3d3d3;
  }

  .react-select__control--is-focused {
    box-shadow: 0 0 0 1px transparent;
    outline: none;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__menu {
    color: #3c3d3e;
  }

  .react-select__option {
    background-color: white;

    &--is-focused {
      color: #9c0e33;
      background-color: #fde5e3;
      cursor: pointer;
    }
  }

  .react-select__multi-value {
    color: #9c0e33;
    background-color: #fde5e3;
    &__label {
      color: #9c0e33;
    }
  }
`
