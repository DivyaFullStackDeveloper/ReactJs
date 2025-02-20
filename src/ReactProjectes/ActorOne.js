import React from "react";
import "./ActorOne.css";

class ActorOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedMovies: [],// State to hold selected actor's movies
        };
    }
   
    // Function to handle click on actor's image
    handleButtonClick = (movies) => {
        this.setState({selectedMovies:movies});
    }

    // Button function to display Actor image and name
    button = (actorImage, actorName) => {
        return (
            <div className="actor-card">
                <div>
                    <img src={actorImage} alt={actorName} style={{ width:200, height: 200, borderRadius: '50%', objectFit: 'cover' }} />
                    <p>{actorName}</p>
                </div>
                <button
                    className="info-button"
                    style={this.props.style}
                    // onClick={() => console.log(`${actorName} button clicked`)}
                    onClick={() => this.handleButtonClick(movies)}
                >
                    Show Movies
                </button>
            </div>
        );
    };

    render() {
        return (
            <div className="folder">
                {/* {/ India Team /} */}
                <h2>Actor</h2>
                <div className="Actor">
                    {this.button(
                        "https://media.themoviedb.org/t/p/w500/ymYNHV9luwgyrw17NXHqbOWTQkg.jpg",
                        "Ranbir Kapoor"
                    )}
                    {this.button(
                        " https://image.tmdb.org/t/p/w500/nHdQlBvORSKmH1F1kbyTFs0HLjU.jpg",
                        "Kartik Aryan"
                    )}
                    {this.button(
                     "https://upload.wikimedia.org/wikipedia/commons/7/79/Varun_Dhawan_2015.jpg",
                     "Varun Dhawan"
                    )}
                    {this.button(
                        "https://www.hindustantimes.com/ht-img/img/2023/07/18/1600x900/Rohit-Saraf-was-present-at-a-Skechers-event-in-Del_1689662073919.jpg",
                        "Rohit Saraf"
                    )}
                    {this.button(
                        "https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg",
                        "Salman Khan"
                    )}
                    {this.button(
                        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/sidharth-malhotra-41930-12-09-2017-03-54-10.jpg",
                        "Sidhart Malhotra"
                    )}
                    {this.button(
                        "https://www.cinejosh.com/newsimg/newsmainimg/sai-pallavi_b_1307241000.jpg",
                        "Sai Pallavi"
                    )}
                    {this.button(
                        "https://www.hindustantimes.com/ht-img/img/2024/12/29/550x309/Kriti_Sanon_1734575682187_1735471733730.jpg",
                        "Kriti Sanon"
                    )}
                    {this.button(
                        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Alia_Bhatt_2024.jpg",
                        "Alia bhatt"
                    )}
                    {this.button(
                        "https://yt3.googleusercontent.com/UDvhAYtC-CFDXj953H_AcWhShuWWqtEwPEKxikq3T3FPCRCqBUOmXvcRmMe7K0wxjGOGoFo_Ug=s900-c-k-c0x00ffffff-no-rj",
                        "Ananya Pandey"
                    )}
                </div>
            </div>
        )
    }
}
export default ActorOne;




