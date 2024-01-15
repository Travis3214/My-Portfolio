export default function Home() {
    return (
      <div className="bg-main">
        <div className="portfolio-card-container">
          <div className="portfolio-card">
            <img
            src="grad.jpg" 
            alt="Travis Rivera"
            className="profile-image"
            />
            <h1 className="card-name">Travis Rivera</h1>
            <h2 className="card-title">Full Stack Web Developer</h2>
            <p className="card-description">
              {/* maybe replace this with a description in the future? */}
            </p>
          </div>
        </div>
      </div>
    );
  }
  