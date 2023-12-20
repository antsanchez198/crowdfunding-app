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
            <button>Back this project</button>
            <button>Bookmark</button>
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
            32%
          </progress>
        </section>

        <section>
          <h3>About this Project</h3>
          <p>Something goes here</p>

          <div>
            <div>
              <div>
                <h3>Bamboo Stand</h3>
                <p>Pledge $25 or more</p>
              </div>

              <p>You get an ergoomic stand</p>

              <div>
                <div>
                  <h2>101</h2>
                  <p>left</p>
                </div>
                <button>Select Reawrd</button>
              </div>
            </div>

            <div>
              <div>
                <h3>Bamboo Stand</h3>
                <p>Pledge $25 or more</p>
              </div>

              <p>You get an ergoomic stand</p>

              <div>
                <div>
                  <h2>101</h2>
                  <p>left</p>
                </div>
                <button>Select Reawrd</button>
              </div>
            </div>

            <div>
              <div>
                <h3>Bamboo Stand</h3>
                <p>Pledge $25 or more</p>
              </div>

              <p>You get an ergoomic stand</p>

              <div>
                <div>
                  <h2>101</h2>
                  <p>left</p>
                </div>
                <button>Select Reawrd</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

export default App;
