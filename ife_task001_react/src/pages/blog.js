import { useEffect } from "react";
import "../css/blogstyle.css";
import { useGlobalContext } from "../context";
function Blog() {
  const { year, month, dateStr } = useGlobalContext();
  console.log(dateStr);
  useEffect(() => {
    document.getElementById("days").innerHTML = dateStr;
  }, [dateStr]);

  return (
    <section className="contentArea">
      <div className="content">
        <main>
          <article>
            <div className="tagsArea">
              <p>4.12</p>
              <p>CSS</p>
            </div>
            <div className="text">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                distinctio quibusdam illo neque maxime vitae et sit vero
                suscipit assumenda?LoLorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores distinctio quibusdam illo neque maxime
                vitae et sit vero suscipit assumenda?rem ipsum dolor sit amet
                consectetur adipisicing elit. Maiores distinctio quibusdam illo
                neque maxime vitae et sit vero suscipit assumenda?Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maiores distinctio
                quibusdam illo neque maxime vitae et sit vero suscipit
                assumenda?LoLorem ipsum dolor sit amet consectetur adipisicing
                elit. Maiores distinctio quibusdam illo neque maxime vitae et
                sit vero suscipit assumenda?rem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores distinctio quibusdam illo neque maxime
                vitae et sit vero suscipit assumenda?
              </p>
              <p className="signature">Your Name Published on April 12, 2015</p>
            </div>
          </article>
          <article>
            <div className="tagsArea">
              <p>4.12</p>
              <p>CSS</p>
            </div>
            <div className="text">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                distinctio quibusdam illo neque maxime vitae et sit vero
                suscipit assumenda?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores distinctio quibusdam illo neque maxime
                vitae et sit vero suscipit assumenda?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Maiores distinctio quibusdam illo
                neque maxime vitae et sit vero suscipit assumenda?Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maiores distinctio
                quibusdam illo neque maxime vitae et sit vero suscipit
                assumenda?LoLorem ipsum dolor sit amet consectetur adipisicing
                elit. Maiores distinctio quibusdam illo neque maxime vitae et
                sit vero suscipit assumenda?rem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores distinctio quibusdam illo neque maxime
                vitae et sit vero suscipit assumenda?
              </p>
              <p className="signature">Your Name Published on April 12, 2015</p>
            </div>
          </article>
          <article>
            <div className="tagsArea">
              <p>4.12</p>
              <p>CSS</p>
            </div>
            <div className="text">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                distinctio quibusdam illo neque maxime vitae et sit vero
                suscipit assumenda?Lorem iLorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores distinctio quibusdam illo neque maxime
                vitae et sit vero suscipit assumenda?psum dolor sit amet
                consectetur adipisicing elit. Maiores distinctio quibusdam illo
                neque maxime vitae et sit vero suscipit assumenda?Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maiores distinctio
                quibusdam illo neque maxime vitae et sit vero suscipit
                assumenda?LoLorem ipsum dolor sit amet consectetur adipisicing
                elit. Maiores distinctio quibusdam illo neque maxime vitae et
                sit vero suscipit assumenda?rem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores distinctio quibusdam illo neque maxime
                vitae et sit vero suscipit assumenda?
              </p>
              <p className="signature">Your Name Published on April 12, 2015</p>
            </div>
          </article>
          <div className="pages">
            <ul>
              <li className="bigButton">
                <a href="*">first page</a>
              </li>
              <li className="bigButton">
                <a href="*">previous page</a>
              </li>
              <li>
                <a href="*">1</a>
              </li>
              <li>
                <a href="*">2</a>
              </li>
              <li className="selected">
                <a href="*">3</a>
              </li>
              <li>
                <a href="*">4</a>
              </li>
              <li className="middleButton">
                <a href="*">...</a>
              </li>
              <li className="bigButton">
                <a href="*">next page</a>
              </li>
              <li className="bigButton">
                <a href="*">last page</a>
              </li>
            </ul>
          </div>
        </main>
        <aside>
          <div className="searchBox">
            {/* <img src="img/search.svg" alt="search-icon" />  */}
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Keywords"
            />
            <button className="go">GO</button>
          </div>
          <div className="tagSelect">
            <ul>
              <li>HTML</li>
              <li className="selected">CSS</li>
              <li>JavaScript</li>
              <li>Others</li>
            </ul>
          </div>
          <div className="canlendar">
            <div className="title">
              {/* <!-- <img src="img/left.svg" alt="left" />
              <p>2015.04</p>
              <img src="img/left.svg" alt="left" /> --> */}
              <h2>
                <span id="calendarTitle">{month}</span>.
                <span id="calendarYear">{year}</span>
              </h2>
              <a href="*" id="prev"></a>
              <a href="*" id="next"></a>
            </div>
            <div className="body">
              <div className="bodyList">
                {/* <!-- 使用无序列表标签显示星期 --> */}
                <ul>
                  <li>Sun</li>
                  <li>Mon</li>
                  <li>Tus</li>
                  <li>Wen</li>
                  <li>Thu</li>
                  <li>Fri</li>
                  <li>Sta</li>
                </ul>
              </div>
              {/* <!-- 使用无序列表标签显示日期，日期使用JavaScript动态获取，然后使用innerHTML设置<ul>标签之间的html --> */}
              <div className="bodyList">
                <ul id="days"></ul>
              </div>
            </div>
          </div>
          <div className="tags">
            <div className="title darkgrey">
              <p>Tags</p>
            </div>
            <p className="large">JavaScript</p>
            <p className="middle">CSS</p>
            <p>flex</p>
            <p>WebGL</p>
            <p className="large">HTML</p>
            <p>Canvas</p>
            <p>prototype</p>
            <p className="middle">HTML5</p>
            <p>gird</p>
            <p>nodeJS</p>
            <p>CSS3</p>
            <p className="middle">jQuery</p>
            <p className="middle">ECharts</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Blog;
