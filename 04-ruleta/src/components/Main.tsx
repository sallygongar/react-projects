import Wheel from "./Wheel";

const promotions = [
  {
    description: '*30%*\nen pañales\n*Huggies*',
    code: '30PAHU',
    probability: 20,
    isWin: true
  },
  {
    description: '*15%*\nen\n*sopas*',
    code: '15SOPAS',
    probability: 20,
    isWin: true
  },
  {
    description: '*5%*\nen Linea\n*Blanca*',
    code: '5ELINBA',
    probability: 15,
    isWin: true
  },
  {
    
    description: '*Envio*\nGratis',
    code: 'ENVIGRAT',
    probability: 15,
    isWin: true
  },
  {
    description:  '*20%*\nen toda\nla tienda',
    code: '20ETTENDA',
    probability: 10,
    isWin: true
  },
  {
    description: '*10%*\nen Refrescos',
    code: '10EREFRSC',
    probability: 10,
    isWin: true
  },
  {
    description: '*2 x 1*\nen suerox',
    code: '2x1SUEROX',
    probability: 5,
    isWin: true
  },
  {
    description: '*4%*\nen Cristaleria\n*Hogar*',
    code: '4CRISTAHG',
    probability: 5,
    isWin: true
  }
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