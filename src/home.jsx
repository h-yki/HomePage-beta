import React, { useEffect } from 'react';
import "./styles/Home.css";

const Home = () => {
  useEffect(() => {
    // Twitterウィジェットスクリプトを動的に追加
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    //script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // クリーンアップ：スクリプトを削除
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='container'>
      <ul className='follow'>
        <li><a href='https://x.com/yuh2253' target="_blank" rel="noreferrer"></a></li>
        <li><a href='https://github.com/h-yki' target="_blank" rel="noreferrer"></a></li>
      </ul>
      <a className="twitter-timeline" 
         data-width="300" 
         data-height="250" 
         data-theme="light"
         href="https://twitter.com/yuh2253?ref_src=twsrc%5Etfw">
        Tweets by yuh2253
      </a>
    </div>
  );
};

export default Home;
