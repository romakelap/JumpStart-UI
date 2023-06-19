import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

const WebRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}></Route>
    </Routes>
  )
}

export default WebRouter