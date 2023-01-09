import "./TripStyles.css";
import Trip1 from "../assets/9.jpg";
import Trip2 from "../assets/7.jpg";
import Trip3 from "../assets/8.jpg";
import React from 'react'
import TripData from "./TripData";

function Trip () {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>Lets go everywhere so that you
        can heal your mind.</p>
        <div className="tripcard">
        <TripData 
            image={Trip1}
            heading="Indonesian Traveller"
            text="ore menjelang petang datang disaat akan 
                terbenamnya matahari yang menghasilkan 
                kombinasi warna sangat indah untuk diopandang
                 mata. Selain keindahan akan air lautnya di 
                 lokasi ini juga terdapat Pulau kecil juga 
                 yang bisa di seberangin dengan Jembatan"
        />
        <TripData 
            image={Trip2}
            heading="Malaysian Traveller"
            text="ore menjelang petang datang disaat akan 
                terbenamnya matahari yang menghasilkan 
                kombinasi warna sangat indah untuk diopandang
                 mata. Selain keindahan akan air lautnya di 
                 lokasi ini juga terdapat Pulau kecil juga 
                 yang bisa di seberangin dengan Jembatan"
        />
        <TripData 
            image={Trip3}
            heading="Brunei Darussalam Traveller"
            text="ore menjelang petang datang disaat akan 
                terbenamnya matahari yang menghasilkan 
                kombinasi warna sangat indah untuk diopandang
                 mata. Selain keindahan akan air lautnya di 
                 lokasi ini juga terdapat Pulau kecil juga 
                 yang bisa di seberangin dengan Jembatan"
        />
        </div>
    </div>
  )
}

export default Trip
