import React from 'react';
import '../App.css';
import './Lcard.css';

function Lcard() {
  
  return (
      <>
      <div className="container-fluid">
      <div class="row">
			<h1><b> Samples </b></h1>
         <br/>
			<h2 align="center"><b>[ LetterHead and Envelopes ]</b></h2>
	  </div>
    <br/>
    <br/>
    <br/>
      <div id="slider">
   <input type="radio" name="slider" id="slide5" />
   <input type="radio" name="slider" id="slide6"/>
   <input type="radio" name="slider" id="slide7"/>
   <input type="radio" name="slider" id="slide8"/>
   <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div class="slide slide_5">
               <div class="slide-content">
                  <p><b>1</b></p>
               </div>
            </div>
            <div class="slide slide_6">
               <div class="slide-content">
                  <p><b>2</b></p>
               </div>
            </div>
            <div class="slide slide_7">
               <div class="slide-content">
                  <p><b>3</b></p>
               </div>
            </div>
            <div class="slide slide_8">
               <div class="slide-content">
                  <p><b>4</b></p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls1">
      <label for="slide5"></label>
      <label for="slide6"></label>
      <label for="slide7"></label>
      <label for="slide8"></label>
   </div>
   <div id="bullets1">
      <label for="slide5">  </label>
      <label for="slide6"></label>
      <label for="slide7"></label>
      <label for="slide8"></label>
   </div>
</div>
        </div>
    
      </>  

  );
}

export default Lcard;