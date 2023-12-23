import imageHeroDesktop from "./images/image-hero-desktop.jpg";
import "./App.css";

function App() {
  return (
    <body>
      <img src={imageHeroDesktop}></img>
      <div className="container">
        {/* Section 1 */}
        <section>
          <h2>Mastercraft Bamboo Monitor Riser</h2>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="button-containers">
            <button className="greenBtn">Back this project</button>
            <button className="grayBtn">Bookmark</button>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="statistics-container">
            
            <div>
              <h2>$89,914</h2>
              <p>of $100,000 backed</p>
            </div>
            <span></span>

            <div>
              <h2>$89,914</h2>
              <p>total backers</p>
            </div>
            <span></span>

            <div>
              <h2>$89,914</h2>
              <p>days left</p>
            </div>
          </div>

          <progress className="progressBar" value="75" max="100">
          </progress>
        </section>

        <section>
          <h3>About this Project</h3>
          <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
          <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>

          <div className="rewardsContainer">
            <div>
              <div className="row-direction">
                <h3>Bamboo Stand</h3>
                <p>Pledge $25 or more</p>
              </div>

              <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>

              <div className="row-direction">
                <div>
                  <h2>101</h2>
                  <p>left</p>
                </div>
                <button className="greenBtn">Select Reward</button>
              </div>
            </div>

            <div>
              <div className="row-direction">
                <h3>Black Edition Stand</h3>
                <p>Pledge $75 or more</p>
              </div>

              <p>You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.
</p>

              <div className="row-direction">
                <div>
                  <h2>64</h2>
                  <p>left</p>
                </div>
                <button className="greenBtn">Select Reward</button>
              </div>
            </div>

            <div>
              <div className="row-direction">
                <h3>Mahogany Special Edition</h3>
                <p>Pledge $200 or more</p>
              </div>

              <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>

              <div className="row-direction">
                <div>
                  <h2>0</h2>
                  <p>left</p>
                </div>
                <button className="grayBtn">Out of Stock</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

export default App;
