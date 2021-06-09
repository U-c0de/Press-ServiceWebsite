import React from 'react';
import '../App.css';
import './Ccard.css';

function Ccard() {
  
  return (
      <>
      <div className="container-fluid">
      <div class="row">
			<h1><b>-- Samples --</b></h1>
         <br/>
			<h2 align="center"><b>[ Catalogue and Brochure Samples ]</b></h2>
	  </div>
    <br/>
    <br/>
    <br/>
      <div id="slider">
   <input type="radio" name="slider" id="slide21" />
   <input type="radio" name="slider" id="slide22"/>
   <input type="radio" name="slider" id="slide23"/>
   <input type="radio" name="slider" id="slide24"/>
   <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div class="slide slide_21">
               <div class="slide-content">
                  <p><b>1</b></p>
               </div>
            </div>
            <div class="slide slide_22">
               <div class="slide-content">
                  <p><b>2</b></p>
               </div>
            </div>
            <div class="slide slide_23">
               <div class="slide-content">
                  <p><b>3</b></p>
               </div>
            </div>
            <div class="slide slide_24">
               <div class="slide-content">
                  <p><b>4</b></p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide21"></label>
      <label for="slide22"></label>
      <label for="slide23"></label>
      <label for="slide24"></label>
   </div>
   <div id="bullets">
      <label for="slide21">  </label>
      <label for="slide22"></label>
      <label for="slide23"></label>
      <label for="slide24"></label>
   </div>
</div>
        </div>
    
      </>  

  );
}

export default Ccard;