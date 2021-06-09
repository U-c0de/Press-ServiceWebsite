import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    
    <div className='cards' >
      <div className='cards__container'>
        <div className='cards__wrapper'> 
        <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='&ensp;&ensp;&emsp;Ensuring Timely Delivery '
            />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <CardItem
              src='images/img-2.jpg'
              text= '&emsp;&emsp;Ensuring Best Quality'
            />
          </ul>
          <br></br>
          <br></br>
          <h1><b>Services Offered by US !</b> </h1> 
      <br></br>
      <br></br>    
      <br></br>
      <br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='&ensp;Visting/Business/ID Cards'
              label='IDs'
              path='/ID'
            />
            &emsp;&emsp;
            <CardItem
              src='images/img-4.jpg'
              text='&emsp;&emsp;Letterhead & Envelope'
              label='Business'
              path='/Business'
            />
            &emsp;&emsp;
            <CardItem
              src='images/img-8.jpg'
              text='&ensp;Exam papers & Report Cards '
              label='Education'
              path='/Education'
            />

          </ul>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='&emsp;&ensp;Pamphlet, Leaflet and Flyer '
              label='Promotional'
              path='/Promotional'
            />
            &emsp;&emsp;
            <CardItem
              src='images/img-12.jpg'
              text='&emsp;Magazines and Books '
              label='Publications'
              path='/Publications'
            />
            &emsp;&emsp;
            <CardItem
              src='images/img-13.jpg'
              text='&nbsp;Catalogue and Brochure ' 
              label='Campaign'
              path='/Campaign'
            />
          </ul>
          
        </div>
      </div>
    </div>
  
  );
}

export default Cards;
