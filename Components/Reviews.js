import * as React from 'react';
import '../style/review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import person1 from '../images/avatar_1.png';
import person2 from '../images/avatar_2.png';
import person3 from '../images/avatar_3.png';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(to right, rgb(175, 189, 190) , rgb(76, 138, 231))'
      : 'linear-gradient(to right,  rgb(93, 137, 209) , rgb(207, 215, 226))',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='Review'>
    <h2 className='head-style'>Some Reviews</h2>
    <span className='sub-head-style'>OF OUR CLIENTS</span>
    <div className='reviews'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
          <div className='topo'>
          <img src={person1} alt='person1' className='person-img'/>
          <h3>PAULO HUBERT</h3>
          <span>New York, USA</span>
          </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I recently had to bring my child to ProHealth for a minor injury, 
          and I was so impressed with the care he received. The pediatrician 
          was great with him and made him feel at ease, and the entire staff 
          was kind and attentive.
          </Typography>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
         <div className='topo'>
         <img src={person2} alt='person2' className='person-img'/>
         <h3>LAURENCE VENDETTA</h3>
         <span>California, USA</span>
         </div>
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I recently had to bring my child to ProHealth for a minor injury, 
          and I was so impressed with the care he received. The pediatrician 
          was great with him and made him feel at ease, and the entire staff 
          was kind and attentive.
          </Typography>
          <FontAwesomeIcon icon={faStar} className='star-style' />
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
          <div className='topo'>
          <img src={person3} alt='person3' className='person-img'/>
          <h3>CASSANDRA RAUL</h3>
          <span>Florida</span>
          </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         I recently had to bring my child to ProHealth for a minor injury,
         and I was so impressed with the care he received. The pediatrician
         was great with him and made him feel at ease, and the entire staff
         was kind and attentive.
          </Typography>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStar} className='star-style'/>
          <FontAwesomeIcon icon={faStarHalfAlt} className='star-style'/>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
