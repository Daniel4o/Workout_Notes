import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Grid} from '@mui/material'
import EditMyInfo from './components/myInfo/EditMyInfo';
import MyInfo from './components/myInfo/MyInfo';
import Layout from './components/Layout/Layout';
import Categories from './components/categories/Categories';
import AddCategory from './components/categories/AddCategory';
import EditCategory from './components/categories/EditCategory';
import AddExercise from './components/exercises/AddExercise';
import EditExercise from './components/exercises/EditExercise';
import Exercises from './components/exercises/Exercises';

function App() {
  return (
    <Grid container>
    <Router>
      <Layout>
        <Routes>
          <Route exact='/' />
          <Route path='/my-info' element={<MyInfo />} />
          <Route path='/my-info/edit' element={<EditMyInfo />} />
          <Route path= '/categories' element={<Categories />}/>
          <Route path= '/categories/add' element={<AddCategory />}/>
          <Route path= '/categories/edit/:id' element={<EditCategory />}/>
          <Route path= '/exercises/add' element={<AddExercise />}/>
          <Route path= '/exercises/edit/:id' element={<EditExercise />}/>
          <Route path= '/exercises/' element={<Exercises />}/>

        </Routes>
      </Layout>
    </Router>
    </Grid>
  )
}

export default App;
