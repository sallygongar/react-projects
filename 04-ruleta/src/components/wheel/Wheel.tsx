import { useEffect, useRef } from "react";
import type { Canvas, CanvasContext } from "../../types/wheel";
import ping from '../../assets/images/ping.png';
import { isMobile } from 'react-device-detect';
import { useRoulette } from "../../context/roulette/rouletteHook";
import { useUser } from "../../context/User/userHook";
import { useForm } from "../../context/Form/formHook";

const Wheel = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { promotions, colors, degreeToFall, isSpinning, onIsDone, promotion, isDone, onClearRoulette } = useRoulette();
  const { onChangePrize, onClearUser } = useUser();
  const { onClearForm } = useForm();

  const drawWheel = (
    canvas: Canvas, 
    context: CanvasContext, 
    index: number, 
    numberSegments: number,
    centerX: any,
    centerY: any,
    radio: number
  ) => {
 
    if(!canvas) return;
    if(!context) return;

    context.beginPath();
    context.arc(
      centerX,
      centerY,
      radio,
      (index * 2 * Math.PI) / numberSegments,
      ((index + 1) * 2 * Math.PI) / numberSegments
    ) // Traza un arco (una porción del círculo)
    context.lineTo(centerX, centerY) // Cierra el arco al centro, creando una "rebanada"

    //Configura el estilo del borde y lo dibuja
    context.lineWidth = 8;
    context.strokeStyle  = '#DB061C';
    context.stroke();

    //Rellena el segmento con un color
    context.fillStyle = index % 2 === 0 ? colors[0] : colors[1];
    context.fill();

   // Transforma el contexto para preparar la escritura de texto
    context.save();
    context.translate(centerX, centerY);
    context.rotate(
      (3 * 2 * Math.PI) / (numberSegments * numberSegments ) + (index * 2 * Math.PI) / numberSegments
    )
    context.translate(-centerX,-centerY);
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillStyle = index % 2 === 0 ? '#111' : '#fff';

    const textPromotion = promotions[index].description;
    const valueX= (centerX / 2) * 3.2;
    const valueY = centerY - 10;

    drawText(context,textPromotion, valueX, valueY )
    context.restore()
  }

  function drawText(
    context: CanvasContext,
    text: string,
    x: number,
    y: number
  ){
    if(context){
      const lines = text.split('\n');
      let yOffset = 0;

      lines.forEach(line => {
        if(line.includes('*')){
          context.font = isMobile ? '600 12px Montserrat' : '600 14px Montserrat';
          context.fillText(line.replace(/\*/g, ''), x, y + yOffset)
        }else{
          context.font = isMobile ? '600 12px Montserrat' : '600 14px Montserrat';
          context.fillText(line, x, y + yOffset)
        }
        yOffset += 15 // Aumentamos el desplazamiento para la siguiente línea
      })

    }
  }

  useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const handleTransitionEnd = () => {
    onIsDone?.(true)
  };

  canvas.addEventListener('transitionend', handleTransitionEnd);

  return () => {
    canvas.removeEventListener('transitionend', handleTransitionEnd);
  };
}, []);


  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d')

      if(!canvas) return
      if(!ctx) return

      const numberSegments = promotions.length;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radio = isMobile ?  170 : 180;

      if(promotions.length > 0){
        for(let i = 0; i < promotions.length; i++){
          drawWheel(canvas, ctx, i, numberSegments, centerX, centerY, radio)
        }
      }
  },[promotions])

  useEffect(() => {
    if(degreeToFall && degreeToFall > 0){
      const canvas = canvasRef.current;
      if(!canvas) return

      canvas.style.transition = "transform 10s ease-out";
      canvas.style.transform = `rotate(${degreeToFall}deg)`;
    }
  },[degreeToFall])

  useEffect(() =>{
    if(isDone){
      let prize = {
        description: promotion?.description,
        code: promotion?.code,
        grade: promotion?.grade,
        isWin: promotion?.isWin
      }
      onChangePrize?.(prize)
      onClearRoulette?.()
      onClearForm?.()
      onClearUser?.()
      
    }
  },[promotion, isDone])


  return(
    <div className="ruleta_left_wrapper">
      <div className="ruleta_circle"></div>
      <div className={`ruleta_ping ${ isSpinning ? 'ruleta_animated_ping' : ''}`}><img src={ping} alt="ping" width="100%"/></div>
      <canvas ref={canvasRef} width={isMobile ? 375: 400} height={isMobile ? 375 : 400}></canvas>
    </div>
  )
}


export default Wheel;