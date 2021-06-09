import React from 'react';
import '../App.css';
import './Ucard.css';

function Ucard() {
  
  return (
      <>
      <div className="container-fluid">
      <div class="row">
			<h1><b> Samples </b></h1>
         <br/>
			<h2 align="center"><b>[ Magazine, Albums and Book Samples ]</b></h2>
	  </div>
    <br/>
    <br/>
    <br/>
      <div id="slider">
   <input type="radio" name="slider" id="slide17" />
   <input type="radio" name="slider" id="slide18"/>
   <input type="radio" name="slider" id="slide19"/>
   <input type="radio" name="slider" id="slide20"/>
   <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div class="slide slide_17">
               <div class="slide-content">
                  <p><b>1</b></p>
               </div>
            </div>
            <div class="slide slide_18">
               <div class="slide-content">
                  <p><b>2</b></p>
               </div>
            </div>
            <div class="slide slide_19">
               <div class="slide-content">
                  <p><b>3</b></p>
               </div>
            </div>
            <div class="slide slide_20">
               <div class="slide-content">
                  <p><b>4</b></p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide17"></label>
      <label for="slide18"></label>
      <label for="slide19"></label>
      <label for="slide20"></label>
   </div>
   <div id="bullets">
      <label for="slide17">  </label>
      <label for="slide18"></label>
      <label for="slide19"></label>
      <label for="slide20"></label>
   </div>
</div>
        </div>
    
      </>  

  );
}

export default Ucard;