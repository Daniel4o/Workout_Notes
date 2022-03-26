import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMyInfo from './components/myInfo/addMyInfo';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact='/' />
          <Route path='/my-info/add' element={<AddMyInfo />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
