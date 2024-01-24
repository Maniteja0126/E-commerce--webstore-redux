import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Slider } from '../Slider/Slider'
import { NavigateButtons } from '../NavigateButtons/NavigateButtons'

export const Main = () => {
  return (
    <div>
      <Navbar/>
      <Slider />
      <NavigateButtons/>
    </div>
  )
}

 
