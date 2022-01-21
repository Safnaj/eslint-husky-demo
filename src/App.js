import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Employees from './pages/Employees/Employees';

function App () {
  // console.log('App.js is running');
  return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/employees' element={<Employees />} />
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
