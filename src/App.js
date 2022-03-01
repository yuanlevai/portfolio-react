import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* nav */}
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Works</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* <!-- start hero --> */}
      <div className="hero">
        <div className="hero-text">
          <h1>
            Hi, I am Yuan,<br />
            Fullstack Developer
          </h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo deleniti blanditiis
            repudiandae dicta quos nemo numquam, similique mollitia nisi qui
          </h4>
          <button>Download Resume</button>
        </div>
        <div className="hero-image">
          <img src="img.jpg" width="200" />
        </div>
      </div>

      {/* <!-- start post --> */}
      <div className="post">
        <div className="post-head">
          <h3>Recent Post</h3>
          <a href="">view all</a>
        </div>
        <div className="post-body">
          <div className="post-body-detail">
            <h2>Make a design system using Figma </h2>
            <div className="post-body-info">
              <span>15 February 2022</span> <span>Design, UI/UX</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum, quo consequuntur
              dolorem,
              placeat atque accusantium dolore soluta commodi repudiandae deleniti voluptatibus labore, sint
              consequatur officiis voluptas repellendus cumque quos?</p>
          </div>
          <div className="post-body-detail">
            <h2>create a frontend using react</h2>
            <div className="post-body-info">
              <span>15 March 2022</span> <span>React, Frontend</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum, quo consequuntur
              dolorem,
              placeat atque accusantium dolore soluta commodi repudiandae deleniti voluptatibus labore, sint
              consequatur officiis voluptas repellendus cumque quos?</p>
          </div>
        </div>
      </div>

      {/* <!-- start fitur --> */}
      <div className="fitur">
        <h3>Features</h3>
        <div className="fitur-detail">
          <div className="fitur-detail-image">
            <img src="image1.png" />
          </div>
          <div className="fitur-detail-text">
            <h2>Designing Dashboard</h2>
            <label>2022</label>
            <label className="dashboard">Dashboard</label>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quis minus pariatur maiores ut
              nisi, cupiditate ipsa dicta nihil facere molestias neque mollitia odio voluptas praesentium sint
              tempore modi aut?
            </p>
          </div>
        </div>

        <div className="fitur-detail">
          <div className="fitur-detail-image">
            <img src="image2.png" />
          </div>
          <div className="fitur-detail-text">
            <h2>Designing Dashboard</h2>
            <label>2022</label>
            <label className="dashboard">Dashboard</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloribus maiores. Unde
              fugit labore dignissimos nobis voluptates vitae voluptate esse eius totam voluptatibus est,
              quisquam impedit natus, porro, adipisci ipsam?
            </p>
          </div>
        </div>

        <div className="fitur-detail">
          <div className="fitur-detail-image">
            <img src="image3.png" />
          </div>
          <div className="fitur-detail-text">
            <h2>Designing Dashboard</h2>
            <label>2022</label>
            <label className="dashboard">Dashboard</label>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum, molestiae optio at
              doloremque voluptatem delectus laudantium natus enim ratione voluptatibus incidunt vero minima?
              Aperiam velit error quae voluptate dolore.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- footer --> */}
      <div className="footer">
        <div className="footer-info">
          <div className="social-media-icon">
            <img src="fb.png" />
            <img src="ig.png" />
            <img src="twitter.png" />
            <img src="linkedin.png" />
          </div>
          <div className="copyright">
            Copyright ©2020 Yuan Levai Leo All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
