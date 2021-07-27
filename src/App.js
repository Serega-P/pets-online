import './App.sass'
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Content from './Components/Content/Content'
const history = createBrowserHistory()

const App = (props) => {
  return (
		<BrowserRouter history={history}>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<Content />
    </div>
		</BrowserRouter> 
  )
}

export default App
