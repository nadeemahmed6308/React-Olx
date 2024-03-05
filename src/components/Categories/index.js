function categories(){
    return(
    
        <div style={{justifyContent: 'space-between'}}>

<div>
<div className="d-inline-flex w-100 evenly" style={{justifyContent: 'space-evenly'}}>
<span data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><b>categories <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" width={'20px'} alt="" /></b></span>
<span>Mobile Phones</span>
<span>Car</span>
<span>Motorcycles</span>
<span>Houses</span>
<span>TV - Video - Audio</span>
<span>Tablets</span>
<span>Land & Plots</span>
</div>
</div>
<br/>

<div className="collapse" id="collapseExample">
<div className="card card-body">
<div className="row">
<div className="col-lg-4">
<b>Mobiles</b><br />
          Mobile Phones<br />
          Accessories<br />
          Smart Watches<br />
          Tablets<br />
          Cars<br />
          Cars Accessories<br />
          Spare Parts<br />
          Buses, Vans & Trucks<br />
          Rickshaw & Chingchi<br />
</div>
<div className="col-lg-4">
<b>Bikes</b><br />
      Motorcycles<br />
      Bicycles<br />
      Spare Parts<br />
      <b>Services</b><br />
      Travel & Visa<br />
      Domestic Help<br />
      Web Development<br />
      Car Services<br />
      Catering & Restaurant<br />
      Renting Services<br />
      Camera Installation<br />
      Tailor Services<br />
      Insurance Services<br />
</div>
<div className="col-lg-4">
<b>Jobs</b><br />
      Manufacturing<br />
      Real Estate<br />
      Human Resources<br />
      Security<br />
      Engineering<br />
      Advertising & PR<br />
      Internships<br />
      <b>Animals</b><br />
      Hens<br />
      Parrots<br />
      Cats<br />
      Ducks<br />
      Peacocks<br />
      Fertile Eggs<br />
      Horses<br />
</div>
</div>
</div>
</div>
        </div>
    )
}

export default categories;