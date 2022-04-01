import useFormCategories from './useFormCategories'
import { Collapse, List, ListItem, ListItemText, Divider, ListSubheader, Grid, Card, Typography, FormGroup, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Categories = () => {
  const { error, isLoading, categories, handleClick, expanded, setOpen } = useFormCategories();
  const navigate = useNavigate();

  if (isLoading) {
    return (<Grid>Loading...</Grid>)
  }
  if (error) {
    return <Grid>There was an error: {error}</Grid>
  }

  return (
    <Grid container sx={{ m: 10, mt: 4 }} className='content'>
            <Card sx={{ width: 500, m: 8 }}>
      <Typography variant='h4' align='center' sx={{mb:4}}>Categories</Typography>
      <FormGroup row>
      {categories.map(category => {
        const { id, category_name,  } = category
        const string=category['categoryExercises.exercise_name'].join(',\n')
        return (
          <Grid container  direction="column" justifyContent="space-evenly" alignItems="center" >

          <Accordion style ={{width:300}}
            key={id}
            expanded={expanded === id}
            onChange={handleClick(id)}
          >

            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '30%', flexShrink: 0, mr:4 }}>
                {category_name}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}> Exercises:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                 {string}
              </Typography>
            </AccordionDetails>
          </Accordion>
          </Grid>
        )
      })}
    </FormGroup>
    </Card>
    </Grid>
  )
}

export default Categories