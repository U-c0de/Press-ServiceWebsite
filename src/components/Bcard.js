import React from 'react';
import '../App.css';
import './Bcard.css';

function Bcard() {
  
  return (
      <>
      <div className="container-fluid">
      <div class="row">
			<h1><b> Samples </b></h1>
         <br/>
			<h2 align="center"><b>[ Visting/Business/Identity Cards ]</b></h2>
	  </div>
    <br/>
    <br/>
    <br/>
      <div id="slider">
   <input type="radio" name="slider" id="slide1" />
   <input type="radio" name="slider" id="slide2"/>
   <input type="radio" name="slider" id="slide3"/>
   <input type="radio" name="slider" id="slide4"/>
   <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div class="slide slide_1">
               <div class="slide-content">
                  <p><b>1</b></p>
               </div>
            </div>
            <div class="slide slide_2">
               <div class="slide-content">
                  <p><b>2</b></p>
               </div>
            </div>
            <div class="slide slide_3">
               <div class="slide-content">
                  <p><b>3</b></p>
               </div>
            </div>
            <div class="slide slide_4">
               <div class="slide-content">
                  <p><b>4</b></p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
   <div id="bullets">
      <label for="slide1">  </label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
</div>
        </div>
    
      </>  

  );
}

export default Bcard;