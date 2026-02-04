import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import { Toaster } from '../../components/ui/sonner'


export const LandingPage = () => {
  return (
    <>
      <Header />
      <Toaster />

      <Hero />
    </>
  )
}
export default LandingPage;
