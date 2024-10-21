import "../styles/Home.css";

const Home = () => {
  return (
    <div className='container'>
      <p>情報科学を専攻し、女性声優音楽を好んでいます</p>
      <ul className='follow'>
        <li><a href='https://x.com/yuh2253' target="_blank" rel="noreferrer"></a></li>
        <li><a href='https://github.com/h-yki' target="_blank" rel="noreferrer"></a></li>
      </ul>
      {/* <iframe 
        style={{borderradius:"12px", border:"none"}} 
        title="SpotifyPlayList"
        src="https://open.spotify.com/embed/playlist/0i26ZQwuObgIREvRHHUKTk?utm_source=generator" 
        width="350px" 
        height="380" 
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy" />    */}
    </div>
  );
};

export default Home;
