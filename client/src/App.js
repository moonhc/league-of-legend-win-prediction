import React, { Component } from 'react';
import './static/assets/App.css';
import Champion from './components/Champion'
import Score from './components/Score'

class App extends Component {
  constructor(){
    super();
    this.state = {
     keyword:'',
     calculated : true,
     blueTeam : [0,1,2,3,142],
     redTeam : [13,23,33,43,53],

    searchedChampions:[], 
    champions:[
    {
       id : 1,
      name : "Garen"
      ,name2 : "가렌"
    },
    {
     id : 2,
     name : "Galio"
     ,name2 : "갈리오"
    },
    {
      id : 3,
      name : "Gangplank"
      ,name2 : "갱플랭크"
     },
     {
      id : 4,
      name : "Gragas"
      ,name2 : "그라가스"
     },
     {
     id : 5,
     name : "Graves"
     ,name2 : "그레이브즈"
    },
    {
      id : 6,
     name : "Gnar"
     ,name2 : "나르"
    },
   {
    id : 7,
    name : "Nami"
    ,name2 : "나미"
  },
   {
    id : 8,
    name : "Nasus"
    ,name2 : "나서스"
  },
   {
    id : 9,
    name : "Nautilus"
    ,name2 : "노틸러스"
  },
   {
    id : 10,
    name : "Nocturne"
    ,name2 : "녹턴"
  },
   {
    id : 11,
   name : "Nunu"
   ,name2 : "누누와 윌럼프"
  },
 {
  id : 12,
  name : "Nidalee"
  ,name2 : "니달리"
},
 {
  id : 13,
  name : "Neeko"
  ,name2 : "니코"
},
 {
  id : 14,
  name : "Darius"
  ,name2 : "다리우스"
},
 {
   id : 15,
  name : "Diana"
  ,name2 : "다이애나"
},
{
 id : 16,
 name : "Draven"
 ,name2 : "드레이븐"
},
{
 id : 17,
 name : "Ryze"
 ,name2 : "라이즈"
},
{
 id : 18,
 name : "Rakan"
 ,name2 : "라칸"
},
{
 id : 19,
 name : "Rammus"
 ,name2 : "람머스"
} ,{
  id : 20,
 name : "Lux"
 ,name2 : "럭스"
},
{
id : 21,
name : "Rumble"
,name2 : "럼블"
},
{
id : 22,
name : "Renekton"
,name2 : "레넥톤"
},
{
id : 23,
name : "Leona"
,name2 : "레오나"
},
{
 id : 24,
name : "RekSai"
,name2 : "렉사이"
},
{
id : 25,
name : "Rengar"
,name2 : "렝가"
},
{
id : 26,
name : "Lucian"
,name2 : "루시안"
},
{
id : 27,
name : "Lulu"
,name2 : "룰루"
},
{
id : 28,
name : "Leblanc"
,name2 : "르블랑"
} ,
{
  id : 29,
 name : "LeeSin"
 ,name2 : "리신"
},
{
id : 30,
name : "Riven"
,name2 : "리븐"
},
{
id : 31,
name : "Lissandra"
,name2 : "리산드라"
},
{
id : 32,
name : "MasterYi"
,name2 : "마스터이"
},
{
 id : 33,
name : "Maokai"
,name2 : "마오카이"
},
{
id : 34,
name : "Malzahar"
,name2 : "말자하"
},
{
id : 35,
name : "Malphite"
,name2 : "말파이트"
},
{
id : 36,
name : "Mordekaiser"
,name2 : "모데카이저"
},
{
id : 37,
name : "Morgana"
,name2 : "모르가나"
},
{
  id : 38,
 name : "DrMundo"
 ,name2 : "문도박사"
},
{
id : 39,
name : "MissFortune"
,name2 : "미스포츈"
},
{
id : 40,
name : "Bard"
,name2 : "바드"
},
{
id : 41,
name : "Varus"
,name2 : "바루스"
},
{
 id : 42,
name : "Vi"
,name2 : "바이"
},
{
id : 43,
name : "Veigar"
,name2 : "베이가"
},
{
id : 44,
name : "Vayne"
,name2 : "베인"
},
{
id : 45,
name : "Velkoz"
,name2 : "벨코즈"
},
{
id : 46,
name : "Volibear"
,name2 : "볼리베어"
},
{
id : 47,
name : "Braum"
,name2 : "브라움"
},
{
id : 48,
name : "Brand"
,name2 : "브랜드"
},
{
id : 49,
name : "Vladimir"
,name2 : "블라디미르"
},
{
id : 50,
name : "Blitzcrank"
,name2 : "블리츠크랭크"
},
{
id : 51,
name : "Viktor"
,name2 : "빅토르"
},
{
id : 52,
name : "Poppy"
,name2 : "뽀빠"
},
{
  id : 53,
  name : "Sion"
  ,name2 : "사이온"
},
  {
id : 54,
name : "Sylas"
,name2 : "사일러스"
},
{
id : 55,
name : "Shaco"
,name2 : "샤코"
},
{
id : 56,
name : "Sejuani"
,name2 : "세주아니"
},
{
id : 57,
name : "Sona"
,name2 : "소나"
},
{
id : 58,
name : "Soraka"
,name2 : "소라카"
},
{
id : 59,
name : "Shen"
,name2 : "쉔"
},
{
id : 60,
name : "Shyvana"
,name2 : "쉬바나"
},
{
id : 61,
name : "Swain"
,name2 : "스웨인"
},
{
id : 62,
name : "Skarner"
,name2 : "스카너"
},
{
id : 63,
name : "Sivir"
,name2 : "시비르"
},
{
id : 64,
name : "XinZhao"
,name2 : "신짜오"
} ,
{
id : 65,
name : "Syndra"
,name2 : "신드라"
},
{
id : 66,
name : "Singed"
,name2 : "신지드"
},
{
id : 67,
name : "Thresh"
,name2 : "쓰레쉬"
},
{
id : 68,
name : "Ahri"
,name2 : "아리"
},
{
id : 69,
name : "Amumu"
,name2 : "아무무"
},
{
id : 70,
name : "AurelionSol"
,name2 : "아우렐리온솔"
},
{
id : 71,
name : "Ivern"
,name2 : "아이번"
},
{
id : 72,
name : "Azir"
,name2 : "아지르"
},
{
id : 73,
name : "Akali"
,name2 : "아칼리"
},
{
  id : 74,
  name : "Aatrox"
  ,name2 : "아트록스"
},
 {
  id : 75,
  name : "Alistar"
  ,name2 : "알리스타"
},
 {
  id : 76,
  name : "Annie"
  ,name2 : "애니"
},
 {
   id : 77,
  name : "Anivia"
  ,name2 : "애니비아"
},
{
 id : 78,
 name : "Ashe"
 ,name2 : "애쉬"
},
{
 id : 79,
 name : "Yasuo"
 ,name2 : "야스오"
},
{
 id : 80,
 name : "Ekko"
 ,name2 : "에코"
},
{
 id : 81,
 name : "Elise"
 ,name2 : "엘리스"
} ,{
  id : 82,
 name : "MonkeyKing"
 ,name2 : "오공"
},
{
id : 83,
name : "Ornn"
,name2 : "오른"
},
{
id : 84,
name : "Orianna"
,name2 : "오리아나"
},
{
id : 85,
name : "Olaf"
,name2 : "올라프"
},
{
 id : 86,
name : "Yorick"
,name2 : "요릭"
},
{
id : 87,
name : "Udyr"
,name2 : "우디르"
},
{
id : 88,
name : "Urgot"
,name2 : "우르곳"
},
{
id : 89,
name : "Warwick"
,name2 : "워윅"
},
{
id : 90,
name : "Irelia"
,name2 : "이렐리아"
} ,
{
  id : 91,
 name : "Evelynn"
 ,name2 : "이블린"
},
{
id : 92,
name : "Ezreal"
,name2 : "이즈리얼"
},
{
id : 93,
name : "Illaoi"
,name2 : "일라오이"
},
{
id : 94,
name : "JarvanIV"
,name2 : "자르반"
},
{
 id : 95,
name : "Xayah"
,name2 : "자야"
},
{
id : 96,
name : "Zyra"
,name2 : "자이라"
},
{
id : 97,
name : "Zac"
,name2 : "자크"
},
{
id : 98,
name : "Janna"
,name2 : "잔나"
},
{
id : 99,
name : "Jax"
,name2 : "잭스"
},
{
  id : 100,
 name : "Zed"
 ,name2 : "제드"
},
{
  id : 101,
  name : "Xerath"
  ,name2 : "제라스"
},
{
id : 102,
name : "Jayce"
,name2 : "제이스"
},
{
id : 103,
name : "Zoe"
,name2 : "조이"
},
{
id : 104,
name : "Ziggs"
,name2 : "직스"
},
{
 id : 105,
name : "Jhin"
,name2 : "진"
},
{
id : 106,
name : "Zilean"
,name2 : "질리언"
},
{
id : 107,
name : "Jinx"
,name2 : "징크스"
},
{
id : 108,
name : "Chogath"
,name2 : "초가스"
},
{
id : 109,
name : "Karma"
,name2 : "카르마"
},
{
id : 110,
name : "Camille"
,name2 : "카밀"
},
{
id : 111,
name : "Kassadin"
,name2 : "카사딘"
},
{
id : 112,
name : "Karthus"
,name2 : "카서스"
},
{
id : 113,
name : "Cassiopeia"
,name2 : "카시오페아"
},
{
id : 114,
name : "Kaisa"
,name2 : "카이사"
},
{
  id : 115,
  name : "Khazix"
  ,name2 : "카직스"
},
  {
id : 116,
name : "Katarina"
,name2 : "카타리나"
},
{
id : 117,
name : "Kalista"
,name2 : "칼리스타"
},
{
id : 118,
name : "Kennen"
,name2 : "케넨"
},
{
id : 119,
name : "Caitlyn"
,name2 : "케이틀린"
},
{
id : 120,
name : "Kayn"
,name2 : "케인"
},
{
id : 121,
name : "Kayle"
,name2 : "케일"
},
{
id : 122,
name : "KogMaw"
,name2 : "코그모"
},
{
id : 123,
name : "Corki"
,name2 : "코르키"
},
{
id : 124,
name : "Quinn"
,name2 : "퀸"
},
{
id : 125,
name : "Kled"
,name2 : "클레드"
},
{
id : 126,
name : "Kindred"
,name2 : "킨드레드"
} ,
{
id : 127,
name : "Taric"
,name2 : "타릭"
},
{
id : 128,
name : "Talon"
,name2 : "탈론"
},
{
id : 129,
name : "Taliyah"
,name2 : "탈리야"
},
{
id : 130,
name : "TahmKench"
,name2 : "탐켄치"
},
{
id : 131,
name : "Trundle"
,name2 : "트런들"
},
{
id : 132,
name : "Tristana"
,name2 : "트리스타나"
},
{
id : 133,
name : "Tryndamere"
,name2 : "트린다미어"
},
{
id : 134,
name : "TwistedFate"
,name2 : "트위스티드페이트"
},
{
id : 135,
name : "Twitch"
,name2 : "트위치"
},           
{
id : 136,
name : "Teemo"
,name2 : "티모"
},
{
id : 137,
name : "Pyke"
,name2 : "파이크"
},
{
  id : 138,
  name : "Pantheon"
  ,name2 : "판테온"
},
  {
  id : 139,
  name : "Fiddlesticks"
  ,name2 : "피들스틱"
},
  {
    id : 140,
    name : "Fiora"
    ,name2 : "피오라"
  },
    {
    id : 141,
    name : "Fizz"
    ,name2 : "피즈"
  },
    {
      id : 142,
      name : "Heimerdinger"
      ,name2 : "하이머딩거"
      },
      {
      id : 143,
      name : "Hecarim"
      ,name2 : "헤카림"
      },
       {
         id:144,
          name:''
          ,name2 : ""
        }
      ]
   };
   this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      keyword:e.target.value
    })
  }
   
  _renderChamps = (ASD) => {
    this.state.keyword = this.state.keyword.toLowerCase()
    ASD = ASD.filter(
      (contact) => {
        return contact.name2.indexOf(this.state.keyword)+contact.name.toLowerCase().indexOf(this.state.keyword) > -2;
      }
    )
    const champions = ASD.map((champ,index) => {
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
  refresh = () => {
  }
  _renderScore = (blue,red) => {
    const blueScore = 100
    const redScore = 99
    return <Score 
    whoWin = {blueScore>redScore ? 1 : 0}
    blueScore={blueScore}
    redScore = {redScore}
    />
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
           <div className="scoreBoard">
           {this.state.calculated ? this._renderScore(this.state.blueTeam,this.state.redTeam) : 'Champions should be selected'}
          </div>
          <div className='searchBox'>
            <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange}></input>
            <button onclick={this.refresh}> Again </button>
         </div>
          <div className="selectBox">
            {this._renderChamps(this.state.champions)}
          </div>  
        </div>
    
      </div> 
    );
  }
}

export default App;
