import "../css/about.css";
function About() {
  return (
    <div className="main">
      <div className="person">
        <img src="img/face.jpg" alt="头像" />
      </div>
      <table>
        <tr className="name">
          <th>NAME</th>
          <td>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus vel corporis architecto eaque minima tenetur illum
              beatae velit soluta mollitia.
            </p>
          </td>
        </tr>
        <tr className="small-img">
          <th>
            <img src="img/view1.jpg" alt="" />
          </th>
          <td></td>
        </tr>
        <tr className="tel">
          <th>联系方式</th>
          <td>
            <p>联系方式1：xxxxxx</p>
            <p>联系方式2：xxxxxx</p>
            <p>联系方式3：xxxxxx</p>
          </td>
        </tr>
        <tr className="small-img">
          <th>
            <img src="img/view1.jpg" alt="" />
          </th>
          <td></td>
        </tr>
        <tr className="edu">
          <th>教育经历</th>
          <td>
            <div>
              <p className="year">2008</p>
              <div className="content">
                <p>某某某某高中</p>
              </div>
            </div>
            <div>
              <p className="year">2011</p>
              <div className="content">
                <p>某某某某大学</p>
                <p>某某学院 某某专业</p>
              </div>
            </div>
            <div>
              <p className="year">2015</p>
              <div className="content">
                <p>某某某某大学</p>
                <p>某某学院 某某专业 某某方向</p>
              </div>
            </div>
          </td>
        </tr>
        <tr className="small-img">
          <th>
            <img src="img/view1.jpg" alt="" />
          </th>
          <td></td>
        </tr>
        <tr className="intern">
          <th>实习经历</th>
          <td>
            <div>
              <p className="year">2014</p>
              <div className="content">
                <p>某某公司</p>
                <p>主要工作内容概述</p>
              </div>
            </div>
            <div>
              <p className="year">2015</p>
              <div className="content">
                <p>某某公司</p>
                <p>主要工作内容概述</p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default About;
