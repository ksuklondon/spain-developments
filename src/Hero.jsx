import heroImg from "./assets/construction.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2>New Developments in Costa Blanca (built with Contentful)</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            adipisci libero aliquam, odit minus ducimus quas soluta
            reprehenderit doloribus modi iste harum architecto ex, temporibus
            quidem earum qui obcaecati dolorum?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
