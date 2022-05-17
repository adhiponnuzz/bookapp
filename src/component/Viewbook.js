import React from 'react'
import Navbar from './Navbar'

const Viewbook = () => {
    var booklist={
        "title":"Wings of fire",
        "price":"200",
        "autor":"APJ"
    }
  return (
    <div>

       <Navbar/>

       <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           {booklist.title}
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            {booklist.price}
         </div>
         
    </div>
</div>


    </div>
  )
}

export default Viewbook