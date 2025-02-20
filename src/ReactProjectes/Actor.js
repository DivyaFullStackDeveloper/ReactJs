import React, { useState } from "react";
import "./Actor.css";

class Actor extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the actor list
    this.actors = [
      {
        name: "Ranbir KApoor",
        image:
          "https://media.themoviedb.org/t/p/w500/ymYNHV9luwgyrw17NXHqbOWTQkg.jpg ",
        movies: [
          "Yeh Jawaani Hai Deewani (2013) - IMDb Rating: 7.3/10",
          "Barfi! (2012) - IMDb Rating: 8.1/10",
          "  Rockstar (2011) - IMDb Rating: 7.8/10",
          "Wake Up Sid (2009) - IMDb Rating: 7.6/10",
          "Tamasha (2015) - IMDb Rating: 7.3/10",
          "Ajab Prem Ki Ghazab Kahani (2009) - IMDb Rating: 6.4/10",
          "Animal (2023) - IMDb Rating: 6.1/10",
          " Brahmāstra: Part One - Shiva (2022)-IMDb Rating: 5.6/10",
          " Ajab Prem Ki Ghazab Kahani (2009)-IMDb Rating: 6.3/10",
        ],
      },
      {
        name: "Kartik Aryan",
        image:
          " https://image.tmdb.org/t/p/w500/nHdQlBvORSKmH1F1kbyTFs0HLjU.jpg",
        movies: [
          " Chandu Champion (2024) - IMDb Rating: 8.7",
          " Pyaar Ka Punchnama (2011) - IMDb Rating: 7.6",
          "Freddy (2022) - IMDb Rating: 7.7",
          "Pyaar Ka Punchnama 2 (2015) - IMDb Rating: 7.3",
          "Sonu Ke Titu Ki Sweety (2018) - IMDb Rating: 7.1",
          "Dhamaka (2021) - IMDb Rating: 7.1",
          "Satyaprem Ki Katha (2023) - IMDb Rating: 6.7",
          "Akaash Vani (2013) - IMDb Rating: 6.4",
          "Luka Chuppi (2019) - IMDb Rating: 6.3",
          "Bhool Bhulaiyaa 2 (2022) - IMDb Rating: 6.1"
        ],
      },
      {
        name: "Varun Dhawan",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Varun_Dhawan_2015.jpg",
        movies: [
       "   October (2018) - IMDb Rating: 7.5",
        "  Badlapur (2015) - IMDb Rating: 7.4",
        "  Sui Dhaaga: Made in India (2018) - IMDb Rating: 6.8",
          "Bhediya (2022) - IMDb Rating: 6.7",
          "Badrinath Ki Dulhania (2017) - IMDb Rating: 6.1",
         " JugJugg Jeeyo (2022) - IMDb Rating: 6.1",
          'Humpty Sharma Ki Dulhania (2014) - IMDb Rating: 6.0',
         ' ABCD 2 (2015) - IMDb Rating: 5.4',
        "  Student of the Year (2012) - IMDb Rating: 5.3",
          "Dishoom (2016) - IMDb Rating: 5.2"
        ],
      },
      {
        name: "Rohit Saraf",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR7Syf36KBL1EPGWa5d9UfMRO1Q16CddbITlvlSfsTczhSLn5zccWoM-ENsQcqFwikYsirNsA3HbP_g8D3gK9quHA ",
        movies: [
          "Ludo (2020) - IMDb Rating: 7.6",
          "Dear Zindagi (2016) - IMDb Rating: 7.4",
          "What Will People Say (2017) - IMDb Rating: 7.4",
         " Hichki (2018) - IMDb Rating: 7.3",
        "The Sky Is Pink (2019) - IMDb Rating: 7.2",
        "Vikram Vedha (2022) - IMDb Rating: 7.1",
        "Kamali From Nadukkaveri (2021) - IMDb Rating: 6.8",
        "Mismatched (TV Series, 2020-present) - IMDb Rating: 5.9",
        "Ishq Vishk Rebound (2024) - IMDb Rating: 5.9",
        "Dear Maya (2017) - IMDb Rating: 5.8"
        ],
      },
      {
        name: "Sidhart Malhotra",
        image: " https://in.bmscdn.com/iedb/artist/images/website/poster/large/sidharth-malhotra-41930-12-09-2017-03-54-10.jpg",
        movies: [
            "Shershaah (2021) , - IMDb Rating: 8.3/10",
            "Kapoor & Sons (2016) , - IMDb Rating: 7.7/10",
            "Ittefaq (2017) , - IMDb Rating: 7.2/10",
            "Mission Majnu (2023) ,- IMDb Rating: 7.0/10",
            "Hasee Toh Phasee (2014) ,- IMDb Rating: 6.8/10",
            "Ek Villain (2014) ,- IMDb Rating: 6.6/10",
            "Brothers (2015) ,- IMDb Rating: 6.4/10",
            "A Gentleman (2017) ,- IMDb Rating: 6.3/10",
            "Student of the Year (2012) ,- IMDb Rating: 5.3/10",
            "Marjaavaan (2019) ,- IMDb Rating: 3.7/10"
        ],
      },
      {
        name: "Salman khan",
        image: "https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg",
        movies: [
        " Bajrangi Bhaijaan (2015) - IMDb Rating: 8.0",
       " Sultan (2016) - IMDb Rating: 7.5",
          "Kick (2014) - IMDb Rating: 6.8",
         " Dabangg (2010) - IMDb Rating: 6.8",
          "Tere Naam (2003) - IMDb Rating: 6.8",
          "Hum Aapke Hain Koun..! (1994) - IMDb Rating: 7.6",
         " Maine Pyar Kiya (1989) - IMDb Rating: 7.6",
         " Tiger Zinda Hai (2017) - IMDb Rating: 6.9",
          "Jai Ho (2014) - IMDb Rating: 6.5",
      "   Kick 2 (2021) - IMDb Rating: 5.7"
        ],
      },
      {
        name: "Sai Pallavi",
        image: "https://www.cinejosh.com/newsimg/newsmainimg/sai-pallavi_b_1307241000.jpg ",
        movies: [
            "Premam (2015) - IMDb Rating: 8.3/10",
            "Gargi (2022) - IMDb Rating: 8.1/10",
            "Paava Kadhaigal (2020) - IMDb Rating: 8.0/10",
            "Shyam Singha Roy (2021) - IMDb Rating: 7.6/10",
            "Fidaa (2017) - IMDb Rating: 7.4/10",
            "Kali (2016) - IMDb Rating: 6.9/10",
            "Love Story (2021) - IMDb Rating: 6.8/10",
            "Anukoni Athidhi (2019) - IMDb Rating: 6.7/10",
            "Virata Parvam (2022) - IMDb Rating: 6.7/10",
            "Maari 2 (2018) - IMDb Rating: 5.6/10"
        ],
      },
      {
        name: "Alia Bhatt",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Alia_Bhatt_2024.jpg",
        movies:[
         " RRR (2022) - IMDb Rating: 7.9",
         " Gully Boy (2019) - IMDb Rating: 7.9",
        "  Raazi (2018) - IMDb Rating: 7.7",
         " Udta Punjab (2016) - IMDb Rating: 7.7",
        "  Dear Zindagi (2016) - IMDb Rating: 7.4",
         " Highway (2014) - IMDb Rating: 7.6",
          "Kapoor & Sons (2016) - IMDb Rating: 7.7",
        "  Badrinath Ki Dulhania (2017) - IMDb Rating: 6.2",
        "  Student of the Year (2012) - IMDb Rating: 6.7"  
        ] ,
      },
      {
        name: "Ananya Pandey",
        image: "https://yt3.googleusercontent.com/UDvhAYtC-CFDXj953H_AcWhShuWWqtEwPEKxikq3T3FPCRCqBUOmXvcRmMe7K0wxjGOGoFo_Ug=s900-c-k-c0x00ffffff-no-rj",
        movies:[
            "Kho Gaye Hum Kahan (2023) - IMDb Rating: 7.3/10",
            "Gehraiyaan (2022) - IMDb Rating: 5.8/10",
            "Pati Patni Aur Woh (2019) - IMDb Rating: 5.8/10",
           " Dream Girl 2 (2023) - IMDb Rating: 5.2/10",
            "Student of the Year 2 (2019) - IMDb Rating: 2.2/10"
        ] ,
      },
      {
        name: "Kriti Sanon",
        image: "https://cdn1-production-images-kly.akamaized.net/AfBjGiqZ9F5cKiOfrktznCE4a9A=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/964972/original/020998100_1440405684-Kriti_Sanon-3.jpg",
        movies: [
            "Mimi (2021) - IMDb Rating: 7.9/10",
            "Bareilly Ki Barfi (2017) - IMDb Rating: 7.5/10",
            "Bhediya (2022) - IMDb Rating: 7.3/10",
           " 1: Nenokkadine (2014) - IMDb Rating: 8.0/10",
            "Luka Chuppi (2019) - IMDb Rating: 6.3/10",
           " Dilwale (2015) - IMDb Rating: 5.1/10",
           " Panipat (2019)- IMDb Rating: 5.3/10",
            "Heropanti (2014) - IMDb Rating: 5.2/10",
           " Housefull 4 (2019) - IMDb Rating: 3.5/10",
            "Raabta (2017) - IMDb Rating: 4.7/10"
        ],
      },
       
    ];
  }
  render() {
    return <ActorApp actors={this.actors} />;
  }
}

const ActorApp = ({ actors }) => {
  const [selectedActor, setSelectedActor] = useState(null);

  return (
    <div className="app-container">
      <h1>  10 Famous Indian Actors</h1>
      <div
        className="actor-grid"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {actors.map((actor, index) => (
          <div
            key={index}
            className="actor-card"
            onClick={() => setSelectedActor(actor)}
          >
            <img
              src={actor.image}
              alt={actor.name}
              className="actor-image"
              style={{ height: "150px", width: "140px" }}
            />
            <p className="actor-name">{actor.name}</p>
          </div>
        ))}
      </div>

      {selectedActor && (
        <div className="movie-modal">
          <div className="modal-content">
            <h2>Top 10 Movies of {selectedActor.name}</h2>
            <ol>
              {selectedActor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ol>
            <button
              className="close-button"
              onClick={() => setSelectedActor(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Actor;


 