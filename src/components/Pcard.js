import React from 'react';
import '../App.css';
import './Pcard.css';

function Pcard() {
  
  return (
      <>
      <div className="container-fluid">
      <div class="row">
			<h1><b> Samples </b></h1>
         <br/>
			<h2 align="center"><b>[ Pamphlet, Leaflet and Flyer ]</b></h2>
	  </div>
    <br/>
    <br/>
    <br/>
      <div id="slider">
   <input type="radio" name="slider" id="slide13" />
   <input type="radio" name="slider" id="slide14"/>
   <input type="radio" name="slider" id="slide15"/>
   <input type="radio" name="slider" id="slide16"/>
   <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div class="slide slide_13">
               <div class="slide-content">
                  <p><b>1</b></p>
               </div>
            </div>
            <div class="slide slide_14">
               <div class="slide-content">
                  <p><b>2</b></p>
               </div>
            </div>
            <div class="slide slide_15">
               <div class="slide-content">
                  <p><b>3</b></p>
               </div>
            </div>
            <div class="slide slide_16">
               <div class="slide-content">
                  <p><b>4</b></p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide13"></label>
      <label for="slide14"></label>
      <label for="slide15"></label>
      <label for="slide16"></label>
   </div>
   <div id="bullets">
      <label for="slide13">  </label>
      <label for="slide14"></label>
      <label for="slide15"></label>
      <label for="slide16"></label>
   </div>
</div>
        </div>
    
      </>  

  );
}

export default Pcard;