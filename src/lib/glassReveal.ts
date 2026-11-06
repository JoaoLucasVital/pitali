import { createRenderer, buildSdf, frameAt, BASE } from './vendor/glass-icon-reveal';

// Same MIT optical renderer cited by the selected 21st.dev reference.
export function startGlassReveal(canvas: HTMLCanvasElement, onReady: () => void): () => void {
 let disposed=false; let frame=0; let renderer: ReturnType<typeof createRenderer>;
 const image=new Image();
 const cleanup=()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();image.onload=null;renderer?.dispose();};
 const resize=()=>{const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(canvas.clientWidth*dpr);canvas.height=Math.round(canvas.clientHeight*dpr);};
 const observer=new ResizeObserver(resize); observer.observe(canvas); resize();
 image.onload=()=>{
  if(disposed)return;
  try {
   renderer=createRenderer(canvas);
   if(!renderer)return;
   const texture=document.createElement('canvas');texture.width=512;texture.height=512;
   const ctx=texture.getContext('2d',{willReadFrequently:true});if(!ctx)return;
   ctx.drawImage(image,64,215,384,82);
   renderer.setLogo({canvas:texture,sdf:buildSdf(texture)});
   const settings={...BASE,logo:'pitali',background:'#f8f6f0',logoColor:'#242422',plateColor:'#f8f6f0',logoScale:.8,finalScale:.95,present:1.55,startZoom:2.1,drift:.05,shadow:.65};
   const start=performance.now();let first=true;
   const draw=()=>{if(disposed||!renderer||renderer.gl.isContextLost())return;const time=(performance.now()-start)/1000;renderer.render(frameAt(time,settings),canvas.width,canvas.height,Math.min(canvas.width*.64,canvas.height*.64));if(first){first=false;onReady();}if(time<3.1)frame=requestAnimationFrame(draw);};
   frame=requestAnimationFrame(draw);
  }catch{renderer?.dispose();}
 };
 image.src='/images/pitali-wordmark-transparent.webp';
 return cleanup;
}
