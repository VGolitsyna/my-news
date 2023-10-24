import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/UI/Layout';
import General from './pages/General';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import { menuItems } from './components/menu/menuList';


function App() {

  const categoryPages = menuItems.map(el => {
    return <Route 
    key={el.path} 
    path={'/:category'} 
    element={<CategoryPage 
    category={el.path} />}/>
  })

  return <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<General />} />
        <Route path='/general' element={<Navigate to='/' replace/>} />
        {categoryPages}
        <Route path='/search' element={<SearchPage />} />
      </Route>
    </Routes>
  </>
}

export default App;
