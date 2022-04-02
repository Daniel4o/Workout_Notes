import useFormCategories from './useFormCategories'
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Grid, Card, Typography, Box, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Delete, Edit, Add, ExpandMore, Warning } from '@mui/icons-material';

const Categories = () => {
  const { error, isLoading, categories, expanded, handleClick, deleteCategory, handleClickOpen, handleClose, open } = useFormCategories();
  const navigate = useNavigate();

  if (isLoading) {
    return (<div>Loading...</div>)
  }
  if (error) {
    return <Grid>There was an error: {error}</Grid>
  }

  return (
    <Grid container sx={{ m: 10, mt: 2 }} className='content'>
      <Card sx={{ width: 500, m: 8, pb: 5, pt: 5 }}>
        <Typography variant='h4' align='center' sx={{ mb: 4 }}>Categories</Typography>
        <Button sx={{ ml: 45, mb: 2 }} href={('/categories/add')}>
          <Add />
        </Button>

        {categories.map(category => {
          const { id, category_name, } = category
          let exercises = 'No exercises for this category!'
          if (category['categoryExercises.exercise_name']) {
            exercises = category['categoryExercises.exercise_name'].join(',\n')
          }

          return (
            <Grid container direction="column" justifyContent="space-evenly" alignItems="center" sx={{ mt: 2 }} >
              <Accordion style={{ width: 300 }}
                key={id}
                expanded={expanded === id}
                onChange={handleClick(id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '30%', flexShrink: 0, mr: 4 }}>
                    {category_name}
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
                  <Button onClick={handleClickOpen}><Delete /></Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    style={{ borderColor: 'red' }}
                  >
                    <DialogTitle color='error' sx={{ ml: 8 }}>
                      Delete Category
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText >
                        <Warning fontSize='large' color='error' sx={{ mr: 4 }} />
                        Are you sure you want to delete the category: {category_name} ?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button variant='contained' onClick={() => deleteCategory(category.id)} autoFocus>
                        Yes
                      </Button>
                      <Button variant='outlined' onClick={handleClose}>No</Button>
                    </DialogActions>
                  </Dialog>
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