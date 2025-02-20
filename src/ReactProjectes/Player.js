import React from "react";
import "./Player.css";

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  // Button function to display player image and name
  button = (playerImage, playerName) => {
    return (
      <div className="player-card">
        <div>
          <img src={playerImage} alt={playerName} style={{ width: 100, height: 100 }} />
          <p>{playerName}</p>
        </div>
        <button
          className="player-button"
          style={this.props.style}
          onClick={() => console.log(`${playerName} button clicked`)}
        >
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>India vs Australia</h1>

        {/* {/ India Team /} */}
        <div className="team">
          <h2>India</h2>
          <div className="playersOne">
            {this.button(
              "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
              "Virat Kohli"
            )}
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s",
              "Rohit Sharma"
            )}
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTOrxNuvbfIegOS-NrnhAEyFrP_oLB2UrOg&s",
              "Jasprit Bumrah"
            )}
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSASkaayX0nyCoRRyYvvHtb3yCZNffmXQcf1Q&s",
              "K L Rahul"
            )}
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGl9Jw5PJiIdgKtGk0g-UaEvDCkoAxWf9kA&s",
              "Shubman Gill"
            )}
            {this.button(
              "https://upload.wikimedia.org/wikipedia/commons/6/67/Rishabh_Pant_in_PMO_New_Delhi.jpg",
              "Rishbh Pant"
            )}
            {this.button(
              "https://static.india.com/wp-content/uploads/2024/01/siraj1.jpg?impolicy=Medium_Widthonly&w=400&h=800",
              "Mohammad Siraj"
            )}
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gaoN7--sGX6RgGkDela3AI5gKw50zC18mg&s",
              "Nitish Reddy"
            )}
            {this.button(
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBk6SMiDeM_vwhApUJwNUuVCqAEw060dwMw&s",
               "Ruturaj Gaikwad"
            )}
            {this.button(
                "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/shreyas-iyer.png",
                "Shreyas Iyer"
            )
          },
          {this.button(
                 ""
            )
          }
          </div>


          {/* {/ Australia Team /} */}
          <h2>Australia</h2>
          <div className="playersTwo">
            {this.button(
              "https://opt.toiimg.com/recuperator/img/toi/m-69415515/69415515.jpg",
              "Steve Smith"
            )}
            {this.button(
              "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/travis-head.png",
              "Travis Head"
            )}
            {this.button(
              "https://sportsmatik.com/uploads/world-events/players/pat-cummins_1580467882.jpg",
              "Pat Cummins"
            )}
            {this.button(
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNNX7uyd2oVNhmHNk32GDqufXAgO5eKwmBoRCA58E3v_pXfZZ3JEGBHzqQrhjlTjM5_8&usqp=CAU"
            )}
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMRLwwq4wM5Rrd1nyszAT5SRyKQAYbfMlCn4-PBqVmy67VVhooaFg0xc2zYKiP9gwc9c&usqp=CAU",
              "Glenn Maxwell"
            )}
            {this.button(
              "https://m.media-amazon.com/images/M/MV5BNzQzOTk1MTktYTExNC00NGU0LTllYzAtYzVkZjJjM2EzNmY4XkEyXkFqcGc@._V1_.jpg",
              "Mitchell Marsh"
            )}
            {this.button(
              "https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg/prd/assets/players/5823/29200.png"
            )}
            {this.button(
              "https://media.crictracker.com/media/attachments/1705833994525_Sam-Konstas.jpeg"
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Player;



