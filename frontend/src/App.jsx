import { Box, Button } from '@chakra-ui/react'
import { Routes,Route } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/Login';



function App() {
  
  return (
    <>
      <Box minH={"100vh"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/create" 
            element={
                <ProtectedRoute>
                    <CreatePage />
                </ProtectedRoute>
            } 
          />
          
        </Routes>

      </Box>
    </>
  )
}

export default App
