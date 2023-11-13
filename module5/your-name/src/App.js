import { BrowserRouter, Route, Routes, json } from 'react-router-dom';
import List from './CrudBook/List';
import Create from './CrudBook/Create';
import Edit from './CrudBook/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
