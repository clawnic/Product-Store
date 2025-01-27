import { Box, Button } from '@chakra-ui/react'
import { Routes,Route } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import Home from './pages/Home'
import Navbar from './components/Navbar'



function App() {
  
  return (
    <>
      <Box minH={"100vh"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
          
        </Routes>

      </Box>
    </>
  )
}

export default App
