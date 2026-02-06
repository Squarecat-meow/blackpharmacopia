import { Route, Routes } from 'react-router';
import Enter from './pages/Enter/Enter';
import MainLayout from './pages/Main/MainLayout';
import MainScreen from './pages/Main/MainScreen';
import About from './pages/About/About';
import Board from './pages/Board/Board';
import Gallery from './pages/Gallery/Gallery';
import Guestbook from './pages/Guestbook/Guestbook';
import Post from './pages/Board/Post';

function App() {
  return (
    <Routes>
      <Route index element={<Enter />} />
      <Route path="main">
        <Route element={<MainLayout />}>
          <Route index element={<MainScreen />} />
          <Route path="about" element={<About />} />
          <Route path="board">
            <Route index element={<Board />} />
            <Route path=":id" element={<Post />} />
          </Route>
          <Route path="gallery" element={<Gallery />} />
          <Route path="guestbook" element={<Guestbook />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
