import React from 'react'
import QuickPrice from './_comp/quickPrice/quickPrice'
import SatisfiedClient from './_comp/satisfyClient/satisfiedClient'
import Question from './_comp/questions/question'
import Slide from './_comp/slide/slide'


const HomePage = () => {
  return (
    <main>
      <Slide />
      <QuickPrice />
      <SatisfiedClient />
      <Question />
    </main>
  )
}

export default HomePage