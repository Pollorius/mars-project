import React from 'react'
import { Route } from 'react-router-dom'
import Nav from '../components/Nav'
import SelectionMenu from '../components/SelectionMenu'

export default function App () {
  return (
    <div className='App'>
      <Route
        path='/'
        render={() => <Nav />}
      />
      <div>
        <Route
          exact path='/'
          render={() => <SelectionMenu />}
        />
      </div>
    </div>
  )
}
