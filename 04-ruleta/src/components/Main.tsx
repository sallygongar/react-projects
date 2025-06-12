import Wheel from "./Wheel";

const promotions = [
  '*30%*\nen pañales\n*Huggies*',
  '*15%*\nen\n*sopas*',
  '*5%*\nen Linea\n*Blanca*',
  '*Envio*\nGratis',
  '*20%*\nen toda\nla tienda',
  '*10%*\nen Refrescos',
  '*2 x 1*\nen suerox',
  '*4%*\nen Cristaleria\n*Hogar*'
];

const colors = ['#fff', '#DB061C'];

const Main = () => {
  
  return(
    <div className="ruleta">
      <Wheel promotions={promotions} colors={colors}/>
      <div className="ruleta_right_wrapper">Formulario</div>
    </div>
  )
}

export default Main;