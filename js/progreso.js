window.addEventListener('load',()=>{
    const progreso = document.getElementById('ProgresPage');
    requestAnimationFrame(update);
})
function update(){
    const progreso = document.getElementById('ProgresPage');
    progreso.style.width=`${((window.scrollY)/(document.body.scrollHeight - window.innerHeight)*100)}%`;
    requestAnimationFrame(update);
}