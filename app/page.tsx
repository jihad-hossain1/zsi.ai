import React from 'react'
import QuickPrice from './_comp/quickPrice/quickPrice'
import SatisfiedClient from './_comp/satisfyClient/satisfiedClient'
import Question from './_comp/questions/question'


const HomePage = () => {
  return (
    <main>
      <QuickPrice />
      <SatisfiedClient />
      <Question />
    </main>
  )
}

export default HomePage