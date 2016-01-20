import 'babel-polyfill'
import React from 'react'

import { render } from 'react-dom'
require('../stylesheets/app.css')

import $ from 'jquery'
import Videoteca from './components/Videoteca'

$(() => {
  render((
    <Videoteca />
    ), document.getElementById('root'))
})
