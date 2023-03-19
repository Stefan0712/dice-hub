import { useState } from 'react';
import './App.css';

function App() {
  const [modalClass, setModalClass] = useState('modal-1')
  const [tags, setTags] = useState(['Japanese','Dancer','Gamer','Wizard','Cat Girl','Anime Girl','American','Moe Moe','Lag on Hogwarts Legacy', "Please don't ban me", "Is it too late to say that I'm sorry?"])
  const [videos, setVideos] = useState([
    {
      name: "I took them from behind",
      videoUrl: '',
      previewUrl: './images/img-1.png',
      views: 1.1,
      likes: 69
    },
    {
      name: "Taking multiple guys at once",
      videoUrl: '',
      previewUrl: './images/img-2.png',
      views: 1.1,
      likes: 69
    },
    {
      name: "The tehnique is important, not Deek's size",
      videoUrl: '',
      previewUrl: './images/img-3.png',
      views: 1.1,
      likes: 69
    },
    {
      name: "He was so good that I died",
      videoUrl: '',
      previewUrl: './images/img-4.png',
      views: 1.1,
      likes: 69
    },
    {
      name: "Can't believe how big both of them were",
      videoUrl: '',
      previewUrl: './images/img-5.png',
      views: 1.1,
      likes: 69
    },
    {
      name: "It's so fucking huge",
      videoUrl: '',
      previewUrl: './images/img-6.png',
      views: 1.1,
      likes: 69
    }
  ])

  const showModal = () =>{
    setModalClass('modal-1 show-modal')
  }
  const closeModal = () =>{
    setModalClass('modal-1')
  }
  return (
    <div className="App">
      <div className={modalClass}>
        Yeah, That page is not done yet. Maybe next time!
        <div className='close-modal-btn' onClick={closeModal}>x</div>
      </div>
      <div className='top-btns'>
        <a href='/'>DICEHUB</a>
        <a href='/'>GAMING WELLNESS</a>
        <a href='/'>INSIGHTS</a>
        <a href='/'>SITES</a>
        <a href='/'>SHOP</a>
        <a href='/'>TRUST & SAFETY</a>
        <a href='/'>EN</a>
      </div>
      <nav>
          <div className='top-nav'>
            <div className='logo'><img src='./images/logo.png' alt="logo"></img></div>
            <div className='search-bar'><img className='nav-icon' src='./images/search.png' alt="search icon"></img>Search Dicehub</div>
            <div className='nav-btns'>
              <button onClick={showModal} id='upload-btn'><img alt="" className='nav-icon' src='./images/upload.png'></img>Upload</button>
              <button onClick={showModal} id='upgrade-btn'><img alt="" className='nav-icon' src='./images/star.png'></img>Upgrade</button>
            </div>
            <div className='auth-btns'>
              <a href='/' onClick={showModal}>Log In</a>
              <a href='/' onClick={showModal}>Sign Up</a>
            </div>
          </div>
          <div className='bottom-nav'>
            <a href='/' onClick={showModal}>HOME</a>
            <a href='/' onClick={showModal}>DICE VIDEOS</a>
            <a href='/' onClick={showModal}>CATEGORIES</a>
            <a href='https://www.twitch.tv/diceman2'>TWITCH</a>
            <a href='https://www.instagram.com/dicekeygames_official_/'>INSTAGRAM</a>
            <a href='https://twitter.com/Diceman27'>TWITTER</a>
            <a href='https://discord.gg/yweRQ9XT'>DISCORD</a>
            <a href='/' onClick={showModal}>PHOTOS & GIFS</a>
          </div>
      </nav>
      <div className='body'>
        <h2>Hot Dice Videos in America</h2>
        <div className='tags'>
          {tags.map((tag)=><p key={tag}>{tag}</p>)}
        </div>
        <div className='videos-container' onClick={showModal}>
          {videos.map((video)=>
            <div className='video-container' key={video.name}>
              <img src={video.previewUrl} alt="video preview"></img>
              <div className='video-details'>
              <div className='channel-name'>Dice games</div>
              <div className='video-stats'>
                <div className='video-views'><img alt="" src='./images/views.png'></img>{video.views}M</div>
                <div className='video-likes'><img alt="" src='./images/likes.png'></img>{video.likes}%</div>
              </div>
              </div>
              
              <div className='video-name'>{video.name}</div>
            </div>
          )}
         
          
        </div>
      </div>
    </div>
  );
}

export default App;
