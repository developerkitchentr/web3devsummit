import Script from "next/script";

const MatrixRainEpic = () => {
    return (
        <>
            <div className="canvas-outer"><canvas id="matrix-rain-epic"></canvas></div>
            <Script id="matrix-rain" strategy="afterInteractive" defer={ true } type="text/javascript">
                { `function draw(){ctx.fillStyle="rgba(0, 0,0,0.03)",ctx.fillRect(0,0,c.width,c.height),ctx.fillStyle="#C013EA",ctx.font=font_size+"px arial";for(var a=0;a<drops.length;a++){var b=j[Math.floor(Math.random()*j.length)];ctx.fillText(b,a*font_size,drops[a]*font_size),drops[a]*font_size>c.height&&Math.random()>.975&&(drops[a]=0),drops[a]++}}var c=document.getElementById("matrix-rain-epic"),ctx=c.getContext("2d");c.height=window.innerHeight,c.width=window.innerWidth;var j="00101010101010101110101010000011101111101011001110";j=j.split("");for(var font_size=20,columns=c.width/font_size,drops=[],x=0;x<columns;x++)drops[x]=1;setInterval(draw,33);` }
            </Script>
        </>
    )
}

export default MatrixRainEpic