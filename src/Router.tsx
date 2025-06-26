import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { RestaurantsPage } from './pages/RestaurantsPage'
import { ChefsPage } from './pages/ChefsPage'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/chefs" element={<ChefsPage />} />
    </Routes>
  )
}