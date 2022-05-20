import useFormCategories from './useFormCategories'
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Grid, Card, Typography, Box, LinearProgress } from '@mui/material';
import { Delete, Edit, Add, ExpandMore } from '@mui/icons-material';
import './Categories.css'

const Categories = () => {
  const { error, isLoading, categories, expanded, handleClick, deleteCategory } = useFormCategories();

  if (isLoading) {
    return (<LinearProgress color="secondary" />)
  }
  if (error) {
    return <h2>There was an error: {error}</h2>
  }

  return (
    <Grid container className='content' >
      <Card className='exerciseCard'>
        <h1>Categories</h1>
        <Button variant='contained' id='addCategory' href={('/categories/add')} startIcon={<Add />}>
          Add
        </Button>
        <Divider />
        {categories.map(category => {
          let exercises = 'No exercises for this category!'
          if (category['categoryExercises.exercise_name']) {
            exercises = category['categoryExercises.exercise_name'].join(',\n')
          }
          return (
            <Grid className='categoriesContent' >
              <Accordion
                key={category.id}
                expanded={expanded === category.id}
                onChange={handleClick(category.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                >
                  <Typography className='categoryH'>
                    {category.category_name}
                  </Typography>
                  <Typography  className='listExercise'> Exercises:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {exercises}
                  </Typography>
                </AccordionDetails>
                <Box sx={{ '& button': { m: 1, ml: 20 } }}>
                  <Button href={(`/categories/edit/${category.id}`)}>
                    <Edit />
                  </Button>
                  <Button onClick={() => deleteCategory(category.id)}><Delete /></Button>
                </Box>
              </Accordion>
            </Grid>
          )
        })}
      </Card>
    </Grid>
  )
}

export default Categories