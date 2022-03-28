import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditMyInfo from './components/myInfo/EditMyInfo';
import MyInfo from './components/myInfo/MyInfo'
import Layout from './components/Layout/Layout';
import {Grid} from '@mui/material'

function App() {
  return (
    <Grid container>
    <Router>
      <Layout>
        <Routes>
          <Route exact='/' />
          <Route path='/my-info' element={<MyInfo />} />
          <Route path='/my-info/edit' element={<EditMyInfo />} />
        </Routes>
      </Layout>
    </Router>
    </Grid>
  )
}

export default App;
