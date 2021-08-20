import React from 'react';
import './Cards.css';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';
import img10 from '../img/img10.jpg';
import img12 from '../img/img12.jpg';
import img13 from '../img/img13.jpg';
import CardItem from './CardItem';


function Cards() {
  return (
    
    <div className='cards' >
      <div className='cards__container'>
        <div className='cards__wrapper'> 
        <ul className='cards__items'>
            <CardItem
              src= {img9}
              text='&ensp;&ensp;&emsp;&emsp;&ensp;Ensuring Timely Delivery '
            />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <CardItem
              src={img2}
              text= '&emsp;&emsp;&emsp;&emsp;&ensp;Ensuring Best Quality'
            />
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <h1><b>Services Offered by US !</b> </h1> 
      <br></br>
      <br></br>    
      <br></br>
      <br></br>
          <ul className='cards__items'>
            <CardItem
              src={img10}
              text='Visting/Business/ID Cards'
              label='IDs'
              path='/ID'
            />
            &emsp;&emsp;&emsp;&emsp;
            <CardItem
              src={img4}
              text='Letterhead & Envelope'
              label='Business'
              path='/Business'
            />
            &emsp;&emsp;&emsp;&emsp;
            <CardItem
              src={img8}
              text='&emsp;Exam & Report Cards '
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
              src={img3}
              text='Pamphlet, Leaflet & Flyer '
              label='Promotional'
              path='/Promotional'
            />
            &emsp;&emsp;&emsp;&emsp;
            <CardItem
              src={img12}
              text='&emsp;Magazines and Books '
              label='Publications'
              path='/Publications'
            />
            &emsp;&emsp;&emsp;&emsp;
            <CardItem
              src={img13}
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
