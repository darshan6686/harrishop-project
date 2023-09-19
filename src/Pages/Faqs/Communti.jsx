import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Communti = () => {
  return (
    <>
    <div className='w-full sm:w-11/12 md:w-9/12 mx-auto flex-none md:flex justify-center mt-10'>
    <div className='w-full md:w-1/4'>
        <h1 className='text-3xl font-semibold'>Return & Exchanges</h1>
    </div>
    <div className='w-full md:w-3/4 mt-5 md:mt-0'>
    <Accordion className='py-5'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography><li className='font-medium text-xl hover:text-custom-pink hover:duration-300'>Can i cancle my account at any time?</li></Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography className='px-5'>
      A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders
      </Typography>
    </AccordionDetails>
  </Accordion>

  <Accordion className='py-5'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography><li className='font-medium text-xl hover:text-custom-pink hover:duration-300'>What happens after the license expires?</li></Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography className='px-5'>
      A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders
      </Typography>
    </AccordionDetails>
  </Accordion>

  <Accordion className='py-5'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography><li className='font-medium text-xl hover:text-custom-pink hover:duration-300'>Does harry have any documentations?</li></Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography className='px-5'>
      A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders
      </Typography>
    </AccordionDetails>
  </Accordion>

  <Accordion className='py-5'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography><li className='font-medium text-xl hover:text-custom-pink hover:duration-300'>How long do i get support & updates?</li></Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography className='px-5'>
      A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders
      </Typography>
    </AccordionDetails>
  </Accordion>
  </div>
</div>
    </>
  )
}

export default Communti
