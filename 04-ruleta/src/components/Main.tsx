import Wheel from "./Wheel";

const promotions = [
  '*30%* en pañales Huggies',
  '*15%* en sopas',
  '5% en Linea Blanca',
  'Envio Gratis',
  '*20%* en toda la tienda',
  '*10* en Refrescos',
  '*2 x 1* en suerox',
  '*4* en Cristaleria Hogar'
];

const colors = ['#fff', '#DB061C'];

const Main = () => {
  
  return(
    <div>
      <Wheel promotions={promotions} colors={colors}/>
    </div>
  )
}

export default Main;