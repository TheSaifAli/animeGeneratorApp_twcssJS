const btnEl = document.querySelector('button');
const imgEl = document.querySelector('img');
const linkEL = document.querySelector('a');
const artistName = document.querySelector('h2');
const animeContainer = document.querySelector('#animeContainer');


btnEl.addEventListener('click',async()=>{
    try{
        btnEl.disabled = true;
        btnEl.textContent='Loading...';
        artistName.textContent='Updating...';
        imgEl.src='loading.svg';
        const res = await fetch('https://catboys.com/api/img');
        const data = await res.json();
        console.log(data);
        btnEl.disabled=false;
        btnEl.textContent='Get Anime';
        animeContainer.style.display='flex';
        imgEl.src = data.url;
        linkEL.href= data.url;
        linkEL.target= '_blank'
        artistName.textContent=data.artist;
    }
    catch(error)
    {

    }
})