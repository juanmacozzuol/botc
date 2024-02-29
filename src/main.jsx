import React from 'react'
import ReactDOM from 'react-dom/client'
import Scripts from './components/Scripts.jsx'
import Roles from './components/roles/Roles.jsx'
import './main.css'
const scripts = ["Trouble Brewing", "Sects & Violets", "Bad Moon Rising"]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Scripts scripts={scripts}/>
    <Roles/>
  </React.StrictMode>,
)
