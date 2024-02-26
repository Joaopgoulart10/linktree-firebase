import {createBrowserRouter} from 'react-router-dom' //cria as rotas

import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { Login } from './pages/login'
import { Social } from './pages/social'


//renderizando os caminhos de rotas
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/Admin',
    element: <Admin/>
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/Social',
    element:<Social/>
  }
])

export { router };
