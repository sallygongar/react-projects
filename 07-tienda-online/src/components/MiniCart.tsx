import bolsa from "../assets/bolsaDeCompra.png";

const Minicart = () => {
  return (
    <div className="minicart-wrapper">
      <img alt="bolsa" src={bolsa} className="minicart-icon__bag" />
      <p className="minicart-product__count">9</p>
    </div>
  );
};

export default Minicart;
