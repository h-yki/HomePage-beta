// home.js
import React from 'react';
import "./styles/Home.css";

const home = () => {
  return (
    <div className='container'>
      <ul className='follow'>
        <li><a href='https://x.com/yuh2253' target="_blank" rel="noreferrer"></a></li>
        <li><a href='https://github.com/h-yki' target="_blank" rel="noreferrer"></a></li>
      </ul>
      <a class="twitter-timeline" data-width="300" data-height="300" data-theme="light" href="https://twitter.com/yuh2253?ref_src=twsrc%5Etfw">Tweets by yuh2253</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  );
};

export default home;