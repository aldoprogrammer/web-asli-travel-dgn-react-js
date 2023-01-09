import Mountain1 from "../assets/3.jpg";
import Mountain2 from "../assets/4.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/6.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Touring lah biar ga pusing kamu nya!</p>

        <DestinationData
        className="first-des"
            heading="Sungai Suci, Pondok Kelapa"
            text="Pantai Sungai Suci terletak di Desa 
                Pasar Pedati, Kecamatan Pondok Kelapa, 
                Kabupaten Bengkulu Tengah dan berjarak 
                sekitar 15 Km dari pusat Kota Bengkulu. 
                Walaupun didalam namanya terdapat kata 
                sungai, namun obyek wisata ini bukanlah 
                berupa sungai, tetapi pesisir pantai yang 
                dilengkapi hamparan pasir pantai. Kondisi 
                tersebut akan terasa lebih indah ketika 
                sore menjelang petang datang disaat akan 
                terbenamnya matahari yang menghasilkan 
                kombinasi warna sangat indah untuk diopandang
                 mata. Selain keindahan akan air lautnya di 
                 lokasi ini juga terdapat Pulau kecil juga 
                 yang bisa di seberangin dengan Jembatan gantung, yang terbuat dari tali 
                tambang dan potongan papan kayu tebal. 
                Hal tersebut selain bisa menuju ke 
                lokasi yang indah, juga dapat menguji
                 adrenalin bagi orang yang melewatinya."
                 img1={Mountain1}
                 img2={Mountain2}
         />
         <DestinationData
         className="first-des-reverse"
            heading="Kampung Durian, Taba Penanjung"
            text="Kondisi tersebut akan terasa lebih indah ketika 
                sore menjelang petang datang disaat akan 
                terbenamnya matahari yang menghasilkan 
                kombinasi warna sangat indah untuk diopandang
                 mata. Selain keindahan akan air lautnya di 
                 lokasi ini juga terdapat Pulau kecil juga 
                 yang bisa di seberangin dengan Jembatan gantung, yang terbuat dari tali 
                tambang dan potongan papan kayu tebal."
                 img1={Mountain3}
                 img2={Mountain4}
         />
    </div>
  )
}

export default Destination
