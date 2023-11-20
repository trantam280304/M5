import { BrowserRouter, Route, Routes, json } from 'react-router-dom';
import List from './src/pages/List';
import Create from './src/pages/Create';
import Edit from './src/pages/Edit';
import Show from './src/pages/Show';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Create/>} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/show/:id" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
