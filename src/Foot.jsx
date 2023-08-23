import { Instagram, Whatsapp, Facebook } from "react-bootstrap-icons";

export const Foot = () => {
  return (
    <footer className="sticky-footer bg-dark text-white p-3" id="foot">
      <h5>{new Date().getFullYear()}  © Rosero Jorge</h5>
      <div className="container d-flex justify-content-center">
        <a
          href="https://www.instagram.com/mmm_rafa/"
          className="btn btn-outline-light mx-2"
          target="_blank"
        >
          <Instagram size={32} />{""}
        </a>{" "}
        <a
          href="https://wa.link/vl6nk9"
          className="btn btn-outline-light mx-2"
          target="_blank"
        >
          <Whatsapp size={32} />{""}
        </a>{""}
        <a
          href="https://www.facebook.com/roserorafael2408/"
          className="btn btn-outline-light mx-2"
          target="_blank"
        >
          <Facebook size={32} />{""}
        </a>{" "}
      </div>
    </footer>
  );
};
