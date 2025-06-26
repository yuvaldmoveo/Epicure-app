import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Header } from './cmps/Header'
import { useMedia } from './hooks/useMedia'

function App() {
  const media = useMedia()

  return (
    <BrowserRouter>
      <Header media={media} />
      <main>
        <Router />
      </main>
    </BrowserRouter>
  )
}

export default App
