import './App.css'
import { ProductList } from './components/ProductList/ProductList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" Component={ProductList} />
                    </Routes>
                </main>
            </Router>
        </div>
    )
}

export default App
