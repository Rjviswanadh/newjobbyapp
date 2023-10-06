import {Redirect, Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './components/Home'
import Jobs from './components/Jobs'
import LoginForm from './components/LoginForm'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Jobs} />
      <ProtectedRoute path="/jobs/:id" component={JobItemDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)
export default App
