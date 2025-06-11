import { useEffect, useRef } from "react";
import type { WheelProps, Canvas, CanvasContext } from "../types/wheel";

const Wheel = ({promotions, colors}: WheelProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
    )
    context.lineTo(centerX, centerY)
    context.lineWidth = 4;
    context.strokeStyle  = '#DB061C';
    context.stroke();
    context.fillStyle = index % 2 === 0 ? colors[0] : colors[1];
    context.fill();
    context.save();

    context.translate(centerX, centerY);
    context.rotate(
      (3 * 2 * Math.PI) / (numberSegments * numberSegments ) + (index * 2 * Math.PI) / numberSegments
    )
    context.translate(-centerX,-centerY);
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillStyle = '#111'
    context.restore()

  } 

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d')

      if(!canvas) return
      if(!ctx) return

      const numberSegments = promotions.length;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radio = 180;

      if(promotions.length > 0){
        for(let i = 0; i < promotions.length; i++){
          drawWheel(canvas, ctx, i, numberSegments, centerX, centerY, radio)
        }
      }
   

  },[promotions])

  return(
    <div>
      <canvas ref={canvasRef} width={400} height={400}></canvas>
    </div>
  )
}


export default Wheel;