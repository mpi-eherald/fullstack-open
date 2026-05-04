import { useState } from 'react'

const Header = ({ text, level }) => {
  const Tag = level
  
  return (
    <Tag>
    { text }
    </Tag>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={ onClick }>{ text }</button>
  )
}

const StatisticLine = ({ text, value }) => {
  if (text === 'positive') {
    return (
      <tr>
        <td>{ text }</td>
        <td>{ value } %</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{ text }</td>
        <td>{ value }</td>
      </tr>
    )
  }
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const all = good + neutral + bad

  let average = 0
  let positive = 0

  if (all === 0) {
    return (
      <>
        <p>no feedback given</p>
      </>
    )
  } else {
    average = (good - bad) / all
    positive = (good / all) * 100
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={ good } />
        <StatisticLine text='neutral' value={ neutral } />
        <StatisticLine text='bad' value={ bad } />
        <StatisticLine text='all' value={ all } />
        <StatisticLine text='average' value={ average } />
        <StatisticLine text='positive' value={ positive } />
      </tbody>
    </table>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleIncreaseGood = () => {
    setGood(good + 1)
  }

  const handleIncreaseNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleIncreaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
    <Header level='h1' text='give feedback' />
    <Button onClick={ handleIncreaseGood } text='good' />
    <Button onClick={ handleIncreaseNeutral } text='neutral' />
    <Button onClick={ handleIncreaseBad } text='bad' />
    <Header level='h2' text='statistics' />
    <Statistics good={ good } neutral={ neutral } bad={ bad } />
    </>
  )
}

export default App
