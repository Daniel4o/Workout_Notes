import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material'
import Users from './components/users/Users';
import EditUser from './components/users/EditUser';
import AddUser from './components/users/AddUser';
import UserById from './components/users/UserById';
import Layout from './components/Layout/Layout';
import Categories from './components/categories/Categories';
import AddCategory from './components/categories/AddCategory';
import EditCategory from './components/categories/EditCategory';
import AddExercise from './components/exercises/AddExercise';
import EditExercise from './components/exercises/EditExercise';
import Exercises from './components/exercises/Exercises';
import AddWorkout from './components/workouts/AddWorkout';
import Workouts from './components/workouts/Workouts';
import WorkoutById from './components/workouts/WorkoutById';

function App() {
  return (
    <Grid container>
      <Router>
        <Layout>
          <Routes>
            <Route exact='/users' element={<Users />} />
            <Route path='/users/:id' element={<UserById />} />
            <Route path='/users/add' element={<AddUser />} />
            <Route path='/users/edit/:id' element={<EditUser />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/categories/add' element={<AddCategory />} />
            <Route path='/categories/edit/:id' element={<EditCategory />} />
            <Route path='/exercises/add' element={<AddExercise />} />
            <Route path='/exercises/edit/:id' element={<EditExercise />} />
            <Route path='/exercises/' element={<Exercises />} />
            <Route path='/workouts' element={<Workouts />} />
            <Route path='/workouts/add' element={<AddWorkout />} />
            <Route path='/workouts/:id' element={<WorkoutById />} />
          </Routes>
        </Layout>
      </Router>
    </Grid>
  )
}

export default App;
