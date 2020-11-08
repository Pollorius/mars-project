import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Nav from '../components/Nav'
import SelectionMenu from '../components/SelectionMenu'

const API_KEY = 'PcMTJJOyMsSeyRrJONDCUwNuZ5OC9Wck1bBaxctV'

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
