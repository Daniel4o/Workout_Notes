import useFormCategories from './useFormCategories'
import { Collapse, List, ListItem, ListItemText, Divider, ListSubheader, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
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
    <Grid container sx={{m:8}}>
      {categories.map(category => {
        const { id, category_name,  } = category
        const string=category['categoryExercises.exercise_name'].join(',\n')
        return (
          <Accordion
            key={id}
            expanded={expanded === id}
            onChange={handleClick(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
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
        )
      })}
    </Grid>
  )
}

export default Categories