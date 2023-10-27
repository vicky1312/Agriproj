import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './components/main.js'
import Animal from './components/animal.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
            <Route index element = {<Main/>}/>
            <Route path='/animal' element={<Animal />} />
        </Route>
        <Route path='*' element = {<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;
