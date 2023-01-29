//prima card 
const ultimaCanzone =  async function () {
  try {

    let canzone = await fetch ("https://striveschool-api.herokuapp.com/api/deezer/search?q=save%20your%20tears%20ariana%20grande")
    if (canzone.ok) {
      // devo prendere la prima canzone 1
      let canzonecaricata = await canzone.json();
      console.log(canzonecaricata)
      let contenitore = document.querySelector('.container')
      canzonecaricata.data.forEach((el) => {
        contenitore.innerHTML =
       `<div class="card text-bg-dark rounded-0">
              <img src="${canzonecaricata.data[0].album.cover}" class="card-img rounded-0" alt="..." />
              <div class="card-img-overlay d-flex flex-column">
                <h5 class="card-title title">${canzonecaricata.data[0].title}</h5>
                <p class="card-text">
                  He is my favourite artist
                </p>
              </div>
            </div>
    
          `})
      
    }

  }



catch (error) {

  console.log(error)
}
}
ultimaCanzone()
/*

const getSpotify = async function () {
  try {

    let canzone = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=7rings/arianagrande")

    console.log(" ha caricato la", canzone);
    if (canzone.ok) {
      // canzone 1
      let canzonecaricata = await canzone.json();

      console.log(canzonecaricata)
      console.log(canzonecaricata.data[0].title)
      console.log(canzonecaricata.data[0].album.cover)


      let listReference = document.querySelector('.container')
      let col = document.createElement("div")
      col.classList.add("col")
      console.log(canzonecaricata.data[0].album.cover_big )
      let img = canzonecaricata.data[0].album.cover_big
      
      console.log(img)

      col.innerHTML = `

      <div class="card text-bg-dark rounded-0">
      <img src="${el.artist.picture_xl}" class="card-img rounded-0" alt="..." />
      <div class="card-img-overlay">
        <h5 class="card-title title">${canzonecaricata.data[0].title}</h5>
        <p class="card-text">
        ${canzonecaricata.data[0].artist.name}
        </p>
      </div>
    </div>
`
      listReference.appendChild(col)
    }


  } catch (error) {

    console.log(error)
  }
}
getSpotify()

// fine prima card  ORIZZONTALE 
*/


// inizio con canzoni 


const libreriaCanzonifunz = async function () {
  try {

    let libreriaCanzoni = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=ciao")
    // res è utilizzabile! 
    console.log(" ha caricato la", libreriaCanzoni);
    if (libreriaCanzoni.ok) {
      let canzoni = await libreriaCanzoni.json();
      console.log(canzoni)
      console.log(canzoni.data[0].title)   
      console.log(canzoni.data[1].title)


      let listReference2 = document.querySelector('.container2')

      canzoni.data.forEach(el => {
        let col = document.createElement("div")
        col.classList.add("col-3")

        col.innerHTML = `
          <div class="card my-4 mx-3 " id="oggettodaca" >
          <img src="${el.album.cover_big}" class="card-img-top heightimg"          alt="...">
          <div class="card-body">
          <h5 class="card-title"> ${el.title} .album.cover_big </h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" onclick="remove(oggettodaca) class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          `
        listReference2.appendChild(col)


        const modalText = document.getElementById("modalText")
        modalText.innerHTML =
        modalText.innerHTML +
        `
      <p>${el.title}</p>
      `;


      })
    } else {
      // finiremo qui se la chiamata ha contattato il server, ma c'è stato
      // un problema nella risposta!
      console.log('Qualcosa è andato storto con la nostra chiamata!')
    }

  } catch (error) {
    // finiremo qui se c'è stato un problema a monte, nel contattare il server!
    // ad es. un errore di rete, modalità aereo, etc.
    console.log(error)
  }
}




libreriaCanzonifunz()

 
const getcarosello = async () => {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=Blinding%20Lights"
    );
    console.log(res)

    if (res.ok) {
      let carousel = document.querySelector(".container3") 
      let data = await res.json();
      console.log(data);
      data.data.forEach((el, i) => {
        if (i === 0) {
          
         
          carousel.innerHTML =
            carousel.innerHTML +
            `
            <div class="carousel-item active">
                <img src="${el.album.cover_big}" class="d-block w-100" alt="..." />
            </div>
            `;
        } else {
          carousel.innerHTML =
            carousel.innerHTML +
            `
              <div class="carousel-item">
                  <img src="${el.album.cover_big}" class="d-block w-100" alt="..." />
              </div>
              `;
        }}
      
      
    )}
  } catch (error) {
    console.log(error);
  }
}
getcarosello()






 /*

const createCarousel = () => {
 const carousel = document.querySelector('.container3')
  data.data.forEach((el, i) => {
    if (i === 0) {
      
     
      carousel.innerHTML =
        carousel.innerHTML +
        `
        <div class="carousel-item active">
            <img src="${el.album.cover_big}" class="d-block w-100" alt="..." />
        </div>
        `;
    } else {
      carousel.innerHTML =
        carousel.innerHTML +
        `
          <div class="carousel-item">
              <img src="${el.album.cover_big}" class="d-block w-100" alt="..." />
          </div>
          `;
    }
  });
};

createCarousel()
       
       listReference3.innerHTML=
         `<div class="carousel-item active ">
         <img src=" ${el.album.cover_big} " class="d-block w-100" alt="...">
        </div> `
     
        console.log(listReference3)
         
      })
    }


carosello() /*

/*"data":[
     {"id":629899842,
     "readable":true,
     "title":"7 rings","title_short":"7 rings","title_version":"",   "link":"https://www.deezer.com/track/629899842","duration":178,   "rank":921756,"explicit_lyrics":true,"explicit_content_lyrics":1,   "explicit_content_cover":1,"preview":"https://cdns-preview-b.dzcdn.net/   stream/c-b0cfc898bd5b7455084955f306afa45b-6.mp3",   "md5_image":"49e86e935da829b44cb5ffae16826e55",
     "artist":
        {"id":1562681,"name":"Ariana Grande","link":"https://www.deezer.com/artist/1562681","picture":"https://api.deezer.com/artist/1562681/image","picture_small":"https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/56x56-000000-80-0-0.jpg","picture_medium":"https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/250x250-000000-80-0-0.jpg","picture_big":"https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/500x500-000000-80-0-0.jpg","picture_xl":"https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/1000x1000-000000-80-0-0.jpg","tracklist":"https://striveschool-api.herokuapp.com/api/deezer/artist/1562681/top?limit=50","type":"artist"},

  "album":
  {"id":86773062,"title":"thank u, next","cover":"https://api.deezer.com/album/86773062/image","cover_small":"https://e-cdns-images.dzcdn.net/images/cover/49e86e935da829b44cb5ffae16826e55/56x56-000000-80-0-0.jpg","cover_medium":"https://e-cdns-images.dzcdn.net/images/cover/49e86e935da829b44cb5ffae16826e55/250x250-000000-80-0-0.jpg","cover_big":"https://e-cdns-images.dzcdn.net/images/cover/49e86e935da829b44cb5ffae16826e55/500x500-000000-80-0-0.jpg","cover_xl":"https://e-cdns-images.dzcdn.net/images/cover/49e86e935da829b44cb5ffae16826e55/1000x1000-000000-80-0-0.jpg","md5_image":"49e86e935da829b44cb5ffae16826e55","tracklist":"https://api.deezer.com/album/86773062/tracks","type":"album"}
  ,"type":"track"}
]*/


