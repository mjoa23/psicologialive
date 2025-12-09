import "./Home.css";
import liveCompleto from "./assets/live-completo.png";

function Home() {
  return (
    <>
      <section className="home-container">
        <h1 className="home-title">Te acompañamos en tu proceso psicológico</h1>
        <button className="home-button">
          <a href="https://wa.me/593998873797">Quiero una cita</a>
        </button>
      </section>
      <section className="live-container">
        <img
          src={liveCompleto}
          alt="LiVe psicología online"
          className="live-image"
        />
        <div className="live-content">
          <p>
            Fundada con el propósito de <strong>transformar vidas</strong>, LiVe
            es una organización comprometida con la promoción de la{" "}
            <strong>salud mental</strong>.<br></br>
            Inspirados por los valores de{" "}
            <strong>empatía, autenticidad y accesibilidad</strong>, trabajamos
            para crear un impacto global a través de recursos innovadores,
            talleres, terapia y acompañamiento psicológico.
          </p>
          <p>
            Suscríbete <strong>gratis</strong> a nuestra boletín mensual
          </p>
          <form className="live-form">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="live-input"
            />
            <button type="submit" className="home-button live-button">
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
