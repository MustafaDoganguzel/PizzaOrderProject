
import './App.css'
import { Switch, Route } from 'react-router-dom'
import OrderPizza from './Components/OrderPizza'
import Home from './Components/Home'
import Success from './Components/Success'


function App() {


  return (

    <div className='route'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/OrderPizza'>
          <OrderPizza />
        </Route>
        <Route path='/Success'>
          <Success />
        </Route>
      </Switch>



    </div>)
}

export default App
