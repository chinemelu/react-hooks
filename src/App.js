import React from 'react';
import Accordion from './components/Accordion'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'What use React?',
    content: 'React is a favourite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

const onHandleAccordionClick = (val) => {
  console.log('content', val);
}
const App = () => {
  return (
    <div>
      <Accordion 
        items={items}
        onHandleAccordionClick={onHandleAccordionClick}
      />
    </div>
  )
}

export default App