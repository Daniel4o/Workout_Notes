import useFormCategories from './useFormCategories'
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Grid, Card, Typography, Box, } from '@mui/material';
import { Delete, Edit, Add, ExpandMore } from '@mui/icons-material';

const Categories = () => {
  const { error, isLoading, categories, expanded, handleClick, deleteCategory } = useFormCategories();

  if (isLoading) {
    return (<div>Loading...</div>)
  }
  if (error) {
    return <Grid>There was an error: {error}</Grid>
  }

  return (
    <Grid container className='content' >
      <Card className='exerciseCard'>
        <h1>Categories</h1>
        <Button variant='contained' sx={{ ml: 55, mb: 2 }} href={('/categories/add')} startIcon={<Add />}>
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
                  <Typography sx={{ width: '30%', flexShrink: 0, mr: 4 }}>
                    {category.category_name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}> Exercises:</Typography>
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