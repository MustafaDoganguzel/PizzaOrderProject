
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'


function App() {


  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='order-pizza'>
          <OrderPizza />
        </Route>
        <Route path='/success'>
          <Success />
        </Route>
      </Switch>


    </>
  )
}

export default App
