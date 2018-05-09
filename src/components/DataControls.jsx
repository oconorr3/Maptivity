import React from 'react';
import { Button } from 'react-bootstrap';


const DataControls = ({retrieveData}) => (
  <div>
    <h3 className='drawer-title'> Data </h3>
    <Button className='drawer-button' onClick={retrieveData} data-year={2016}>Retrieve 2015 Phone Data</Button>
    <Button className='drawer-button' onClick={retrieveData} data-year={2017}>Retrieve 2016 Phone Data</Button>
  </div>
);


export default DataControls;
