import React, { Component } from 'react';
import './static/assets/App.css';
import Champion from './components/Champion'

class App extends Component {
  state = {
    calculated : false,
    blueTeam : [0,1,2,3,142],
    redTeam : [13,23,33,43,53],
    champions:[
    {
       id : 1,
      name : "Garen"
    },
    {
     id : 2,
     name : "Gangplank"
    },
    {
     id : 3,
     name : "Galio"
    },
    {
      id : 4,
      name : "Gragas"
     },
     {
     id : 5,
     name : "Graves"
    },
    {
      id : 6,
     name : "Gnar"
   },
   {
    id : 7,
    name : "Nami"
   },
   {
    id : 8,
    name : "Nasus"
   },
   {
    id : 9,
    name : "Nautilus"
   },
   {
    id : 10,
    name : "Nocturne"
   },
   {
    id : 11,
   name : "Nunu"
 },
 {
  id : 12,
  name : "Nidalee"
 },
 {
  id : 13,
  name : "Neeko"
 },
 {
  id : 14,
  name : "Darius"
 },
 {
   id : 15,
  name : "Diana"
},
{
 id : 16,
 name : "Draven"
},
{
 id : 17,
 name : "Ryze"
},
{
 id : 18,
 name : "Rakan"
},
{
 id : 19,
 name : "Rammus"
} ,{
  id : 20,
 name : "Lux"
},
{
id : 21,
name : "Rumble"
},
{
id : 22,
name : "Renekton"
},
{
id : 23,
name : "Leona"
},
{
 id : 24,
name : "RekSai"
},
{
id : 25,
name : "Rengar"
},
{
id : 26,
name : "Lucian"
},
{
id : 27,
name : "Lulu"
},
{
id : 28,
name : "Leblanc"
} ,
{
  id : 29,
 name : "LeeSin"
},
{
id : 30,
name : "Riven"
},
{
id : 31,
name : "Lissandra"
},
{
id : 32,
name : "MasterYi"
},
{
 id : 33,
name : "Maokai"
},
{
id : 34,
name : "Malzahar"
},
{
id : 35,
name : "Malphite"
},
{
id : 36,
name : "Mordekaiser"
},
{
id : 37,
name : "Morgana"
},
{
  id : 38,
 name : "DrMundo"
},
{
id : 39,
name : "MissFortune"
},
{
id : 40,
name : "Bard"
},
{
id : 41,
name : "Varus"
},
{
 id : 42,
name : "Vi"
},
{
id : 43,
name : "Veigar"
},
{
id : 44,
name : "Vayne"
},
{
id : 45,
name : "Velkoz"
},
{
id : 46,
name : "Volibear"
},
{
id : 47,
name : "Braum"
},
{
id : 48,
name : "Brand"
},
{
id : 49,
name : "Vladimir"
},
{
id : 50,
name : "Blitzcrank"
},
{
id : 51,
name : "Viktor"
},
{
id : 52,
name : "Poppy"
},
{
  id : 53,
  name : "Sion"
},
  {
id : 54,
name : "Sylas"
},
{
id : 55,
name : "Shaco"
},
{
id : 56,
name : "Sejuani"
},
{
id : 57,
name : "Sona"
},
{
id : 58,
name : "Soraka"
},
{
id : 59,
name : "Shen"
},
{
id : 60,
name : "Shyvana"
},
{
id : 61,
name : "Swain"
},
{
id : 62,
name : "Skarner"
},
{
id : 63,
name : "Sivir"
},
{
id : 64,
name : "XinZhao"
} ,
{
id : 65,
name : "Syndra"
},
{
id : 66,
name : "Singed"
},
{
id : 67,
name : "Thresh"
},
{
id : 68,
name : "Ahri"
},
{
id : 69,
name : "Amumu"
},
{
id : 70,
name : "AurelionSol"
},
{
id : 71,
name : "Ivern"
},
{
id : 72,
name : "Azir"
},
{
id : 73,
name : "Akali"
},
{
  id : 74,
  name : "Aatrox"
 },
 {
  id : 75,
  name : "Alistar"
 },
 {
  id : 76,
  name : "Annie"
 },
 {
   id : 77,
  name : "Anivia"
},
{
 id : 78,
 name : "Ashe"
},
{
 id : 79,
 name : "Yasuo"
},
{
 id : 80,
 name : "Ekko"
},
{
 id : 81,
 name : "Elise"
} ,{
  id : 82,
 name : "MonkeyKing"
},
{
id : 83,
name : "Ornn"
},
{
id : 84,
name : "Orianna"
},
{
id : 85,
name : "Olaf"
},
{
 id : 86,
name : "Yorick"
},
{
id : 87,
name : "Udyr"
},
{
id : 88,
name : "Urgot"
},
{
id : 89,
name : "Warwick"
},
{
id : 90,
name : "Irelia"
} ,
{
  id : 91,
 name : "Evelynn"
},
{
id : 92,
name : "Ezreal"
},
{
id : 93,
name : "Illaoi"
},
{
id : 94,
name : "JarvanIV"
},
{
 id : 95,
name : "Xayah"
},
{
id : 96,
name : "Zyra"
},
{
id : 97,
name : "Zac"
},
{
id : 98,
name : "Janna"
},
{
id : 99,
name : "Jax"
},
{
  id : 100,
 name : "Zed"
},
{
  id : 101,
  name : "Xerath"
  },
{
id : 102,
name : "Jayce"
},
{
id : 103,
name : "Zoe"
},
{
id : 104,
name : "Ziggs"
},
{
 id : 105,
name : "Jhin"
},
{
id : 106,
name : "Zilean"
},
{
id : 107,
name : "Jinx"
},
{
id : 108,
name : "Chogath"
},
{
id : 109,
name : "Karma"
},
{
id : 110,
name : "Camille"
},
{
id : 111,
name : "Kassadin"
},
{
id : 112,
name : "Karthus"
},
{
id : 113,
name : "Cassiopeia"
},
{
id : 114,
name : "Kaisa"
},
{
  id : 115,
  name : "Khazix"
},
  {
id : 116,
name : "Katarina"
},
{
id : 117,
name : "Kalista"
},
{
id : 118,
name : "Kennen"
},
{
id : 119,
name : "Caitlyn"
},
{
id : 120,
name : "Kayn"
},
{
id : 121,
name : "Kayle"
},
{
id : 122,
name : "KogMaw"
},
{
id : 123,
name : "Corki"
},
{
id : 124,
name : "Quinn"
},
{
id : 125,
name : "Kled"
},
{
id : 126,
name : "Kindred"
} ,
{
id : 127,
name : "Taric"
},
{
id : 128,
name : "Talon"
},
{
id : 129,
name : "Taliyah"
},
{
id : 130,
name : "TahmKench"
},
{
id : 131,
name : "Trundle"
},
{
id : 132,
name : "Tristana"
},
{
id : 133,
name : "Tryndamere"
},
{
id : 134,
name : "TwistedFate"
},
{
id : 135,
name : "Twitch"
},           
{
id : 136,
name : "Teemo"
},
{
id : 137,
name : "Pyke"
},
{
  id : 138,
  name : "Pantheon"
  },
  {
  id : 139,
  name : "Fiddlesticks"
  },
  {
    id : 140,
    name : "Fiora"
    },
    {
    id : 141,
    name : "Fizz"
    },
    {
      id : 142,
      name : "Heimerdinger"
      },
      {
      id : 143,
      name : "Hecarim"
      }
    ]
  } 
  _renderChamps = () => {
    const champions = this.state.champions.map((champ,index) => {
      return <Champion 
          title={champ.name} 
          image={'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/'+String(champ.name)+'.png'}
          key={index}/>
    })
    return champions
  }
  _renderTeam = (team) => {
    const champions = team.map((champ,index) => {
      return <Champion 
          title={this.state.champions[champ].name} 
          image={'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/'+String(this.state.champions[champ].name)+'.png'}
          key={index}/>
    })
    return champions
  }
  _renderScore = () => {
    return "score will be calculated soon."
  }
  render() {
    return (
      <div className="main">
         <div className="blueTeam">
            {this._renderTeam(this.state.blueTeam)}
         </div>
          
         <div className="redTeam">
            {this._renderTeam(this.state.redTeam)}
        </div>

        <div className="centerBoard">
          <div className="scoreBoard" >
           {this.state.calculated ? this._renderScore() : 'Champions should be selected'}
          </div>
          <div className="selectBox" >
            {this._renderChamps()}
          </div>  
        </div>
    
      </div>
       
    );
  }
}

export default App;
