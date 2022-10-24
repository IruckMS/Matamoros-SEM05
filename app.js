const $=(selector)=>document.querySelector(selector);
const baseURL='https://rickandmortyapi.com/api';
const btn=$('#consumir')
const contenedor=$('.container');

btn.addEventListener('click',async()=>{
    const resp=await fetch(`${baseURL}/character`)
    const {results}=await resp.json();
    let html='';
    results.forEach(personaje => {
        html+=`
        <div style="display: inline-block;">
            <img src="${personaje.image}" alt="">
            <figcaption>Nombre: ${personaje.name} <br>
            Estado: ${personaje.satatus} <br>
            Especie: ${personaje.species} <br>
            Genero: ${personaje.gender}</figcaption>
            </div>
        `
    });
    contenedor.innerHTML=html;
})