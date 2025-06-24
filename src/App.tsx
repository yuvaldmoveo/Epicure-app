import { HomePage } from "./pages/HomePage"
import { DesktopHeader } from "./cmps/DesktopHeader";
import { useMedia } from "./hooks/useMedia"
function App() {

  const media = useMedia();

  return (
    <main>
      {media === 'desktop' && <DesktopHeader/> }
     <HomePage />
    </main>
  )
}

export default App
