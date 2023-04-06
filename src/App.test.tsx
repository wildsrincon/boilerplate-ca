import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import { userReducer } from './redux/store'

describe('App', () => {
  it('renders without crashing', () => {
    const store = configureStore({ reducer: userReducer })
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(screen.getByRole('heading', {
      level: 1
    })).toHaveTextContent('Home Page');
  })
})

