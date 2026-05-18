<<<<<<< HEAD
import { useState } from 'react';

const Display = props => <div>{ props.value }</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ value, setValue ] = useState(0)

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
=======
import { useState } from 'react'

const Display = ( props ) => {
  return (
    <div>{ props.counter }</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={ props.onClick }>
      { props.text }
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
>>>>>>> 138fad8 (working on part2)
  }

  return (
    <div>
<<<<<<< HEAD
      <Display value={value} />
      <Button onClick={setToValue(1000)} text='thousand' />
      <Button onClick={setToValue(0)} text='zero' />
      <Button onClick={setToValue(value + 1)} text='increment' />
      <Button onClick={setToValue(value - 1)} text='decrement' />
=======
      <Display counter={ counter } />
      <Button
        onClick={ increaseByOne }
        text="plus"
      />
      <Button
        onClick={ decreaseByOne }
        text="minus"
      />
      <Button
        onClick={ setToZero }
        text="zero"
      />
>>>>>>> 138fad8 (working on part2)
    </div>
  )
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 138fad8 (working on part2)
