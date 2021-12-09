import "../css/gallery.css";
function Gallery() {
  return (
    <div className="mainarea">
      <div className="main">
        <div className="tabbar">
          <a className="all">ALL</a>
          <a className="js">JavaScript Util Functions</a>
          <a className="ui">UI Components</a>
          <a className="fr">Framework</a>
          <a className="app">Applications</a>
        </div>
        <section className="galleryContent">
          <div className="left">
            <div className="top">
              <div className="item js" id="js1">
                <img className="bigimg" src="img/view1.jpg" alt="js1" />
                <h3>这里是标题</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, exercitationem?
                </p>
              </div>
            </div>
            <div className="bottom">
              <div className="item app" id="app2">
                <img src="img/view1.jpg" className="mdimg" alt="js1" />
                <h3>这里是标题</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, exercitationem?
                </p>
              </div>
              <div className="item js" id="js3">
                <img src="img/view1.jpg" className="smimg" alt="js1" />
                <h3>这里是标题</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, exercitationem?
                </p>
              </div>
              <div className="item fr" id="fr1">
                <img src="img/view1.jpg" className="smimg" alt="js1" />
                <h3>这里是标题</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, exercitationem?
                </p>
              </div>

              <div className="item ui" id="ui2">
                <img src="img/view1.jpg" className="mdimg" alt="js1" />
                <h3>这里是标题</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, exercitationem?
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="item ui" id="ui1">
              <img src="img/view1.jpg" alt="js1" className="smimg" />
              <h3>这里是标题</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, exercitationem?
              </p>
            </div>
            <div className="item js" id="js2">
              <img src="img/view1.jpg" alt="js1" className="mdimg" />
              <h3>这里是标题</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, exercitationem?
              </p>
            </div>
            <div className="item app" id="app3">
              <img src="img/view1.jpg" alt="js1" className="smimg" />
              <h3>这里是标题</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, exercitationem?
              </p>
            </div>
            <div className="item app" id="app1">
              <img src="img/view1.jpg" alt="js1" className="mdimg" />
              <h3>这里是标题</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, exercitationem?
              </p>
            </div>

            <div className="item fr" id="fr2">
              <img src="img/view1.jpg" alt="js1" className="bigimg" />
              <h3>这里是标题</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, exercitationem?
              </p>
            </div>
          </div>
        </section>
        <div className="seemore">
          <p>
            <img src="/img/向下占行.png" alt="" />
            点击查看更多
          </p>
        </div>
      </div>
      <aside className="aside">
        <div className="searchBox">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Keywords"
          />
          <button className="go">GO</button>
        </div>
        <div className="leaderBoard">
          <h3>人气排行榜</h3>
          <ol type="1">
            <li className="one">
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              ui.tree
            </li>
            <li className="two">
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              util.trirn
            </li>
            <li className="three">
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              app.todo
            </li>
            <li className="four">
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              ui.tab
            </li>
            <li className="five">
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              util.addClass
            </li>
          </ol>
        </div>
      </aside>
    </div>
  );
}

export default Gallery;
