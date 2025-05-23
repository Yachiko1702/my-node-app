import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { NavLink } from 'react-router-dom';
import bgImage from './assets/haynako.png';  



function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Router>
        <div className="app-container">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>My Profile</h1>
    </header>
  );
}

function Home() {
  return (
    <div className="home">
      <h2 class='pangalan'>MARCUS</h2>
      
      

    </div>
  );
}

function AboutMe() {
  return (
    <div className="page">
      
      <h2 class='aboutme'>About Me</h2>
      <div class='aboutme1'><p>I am Marcus Mallari, a 20-year-old BSIT student in my second year at Phinma Araullo University. Technology and innovation fascinate me, and I'm always eager to learn more about programming and web development.  

In my free time, I love immersing myself in games, this is my way relieving stress. Reading manhwa is another passion of mine. I enjoy exploring different genres, from action to romcom. Watching movies and series is also a favorite pastime, as I appreciate twisted plots, well-developed characters, and the story. I also love to work out.  

Beyond entertainment, I have a curious mind and love discovering new things.</p>
      </div>
      
    </div>
  );
}

function Achievements() {
  return (
    <div className="page">
      <h2 class='ach'>Achievements</h2>
      <div className="achievements-container">
        <div className="achievement-box">
          <img src="/images/profile.jpg" alt="Achievement 1" />
          <p>I was a consistent honor student during my elementary to high-school days.</p>
        </div>
        <div className="achievement-box">
          <img src="/images/baseb.jpg" alt="Achievement 2" />
          <p>I was able to compete at CLARAA meet at Bulacan in Baseball</p>
        </div>
        <div className="achievement-box">
          <img src="/images/webss.png" alt="Achievement 3" />
          <p>I’ve created some websites that I’m proud of. This is one of them:</p>
          <a href="http://khysncollection.onlinewebshop.net/" target="_blank" rel="noopener noreferrer">
            Click this link
          </a>
        </div>

        <div className="achievement-box">
          <img src="/images/download.jfif" alt="Achievement 4" />
          <p>I read like 500+ manhwas, for me this is an achievement that everyone can't easily achieve.</p>
        </div>
        <div className="achievement-box">
          <img src="/images/donwload11.jfif" alt="Achievement 5" />
          <p>I became a ranker in this RPG.</p>
        </div>
      </div>
    </div>
  );
}


function Hobbies() {
  return (
    <div className="page">
      <h2 class='ach'>Hobbies</h2>
      <div className="hobbies-container">
        <div className="hobby-box">
          <img src="/images/images.jfif" alt="Gaming" />
          <p>Gaming</p>
        </div>
        <div className="hobby-box">
          <img src="/images/imahe.jfif" alt="Reading Manhwa" />
          <p>Reading Manhwa</p>
        </div>
        <div className="hobby-box">
          <img src="images/kdrama.jfif" alt="Watching Movies" />
          <p>Watching Movies & Series</p>
        </div>
        <div className="hobby-box">
          <img src="images/wk.jfif" alt="Watching Movies" />
          <p>Working Out</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <nav>
        
        <img src="/images/profile.jpg" alt="My profile" className="profile-image" />
        <p class='name'>Marcus Mallari</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/achievements">Achievements</NavLink>
        <NavLink to="/hobbies">Hobbies</NavLink>
      </nav>
    </footer>
  );
}

export default App;