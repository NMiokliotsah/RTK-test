import Todo from 'src/pages/Todo';
import Header from 'src/shared/ui/Header';
import { Routes, Route } from 'react-router-dom';
import { withProviders } from './providers';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Todo/>} />
      </Routes>
    </div>
  )
}

export default withProviders(App);
