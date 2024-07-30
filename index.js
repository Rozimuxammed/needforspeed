const car = document.querySelectorAll('.car')
const data = document.querySelector('.about-cars')
const aboutCar = document.querySelector('.about-car')
const userCard = document.querySelector('.users-cards')
const user = document.querySelector('.user-about')

const users = [
  {
    img: "./images/francisco.png",
    name: "Francisco Andrade",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sit iusto eaque. Nam, reiciendis? Voluptatibus ipsa magni veniam est facilis!",
    id: 0,
    userAbout: [
      {
        img: "./images/francisco.png",
        name: "Francisco Andrade",
        win: 26,
        car: "onix",
        phone: +1584937100521,
        balance: "1253 $",
        race: 3,
        carImg:"./images/onix-img.png"
      }
    ]
  },
  {
    img: "./images/alfredo.png",
    name: "Alfredo Torres",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sit iusto eaque. Nam, reiciendis? Voluptatibus ipsa magni veniam est facilis!",
    id: 1,
    userAbout: [
      {
        img: "./images/alfredo.png",
        name: "Alfredo Torres",
        win: 27,
        car: "nexia",
        phone: +5584914100521,
        balance: "1552 $",
        race: 4,
        carImg:"./images/nexiya-img.png"
      }
    ]
  },
  {
    img: "./images/benjamin.png",
    name: "Benjamin Shah",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sit iusto eaque. Nam, reiciendis? Voluptatibus ipsa magni veniam est facilis!",
    id: 2,
    userAbout: [
      {
        img: "./images/benjamin.png",
        name: "Benjamin Shah",
        win: 28,
        car: "gentra",
        phone: +3084937130521,
        balance: "1453 $",
        race: 2,
        carImg:"./images/gentra-img.png"
      }
    ]
  },
  {
    img: "./images/daniel.png",
    name: "Daniel Gallego",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sit iusto eaque. Nam, reiciendis? Voluptatibus ipsa magni veniam est facilis!",
    id: 3,
    userAbout: [
      {
        img: "./images/daniel.png",
        name: "Daniel Gallego",
        win: 23,
        car: "cobolt",
        phone: +1184937100421,
        balance: "1433 $",
        race: 5,
        carImg:"./images/kobald-img.png"
      }
    ]
  }
]
const carsAbout = [{
  cobolt: {
    title: 'cobolt',
    power: '180',
    color: 'blue',
    weight: '1080 kg',
    speed: '100 km/h',
    balance: '1253 $',
    img: './images/kobald-img.png'
  },
  nexia: {
    title: 'nexia',
    power: '220',
    color: 'white',
    weight: '1080 kg',
    speed: '200 km/h',
    balance: '2153 $',
    img: './images/nexiya-img.png'
  },
  onix: {
    title: 'onix',
    power: '250',
    color: 'gray',
    weight: '1100 kg',
    speed: '220 km/h',
    balance: '5132 $',
    img: './images/onix-img.png'
  },
  gentra: {
    title: 'gentra',
    power: '250',
    color: 'black',
    weight: '1100 kg',
    speed: '220 km/h',
    balance: '5321 $',
    img: './images/gentra-img.png'
  }
}]

car.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (index === 0) {
      coboltCar()
    } else if (index === 1) {
      nexiaCar()
    } else if (index === 2) {
      onixCar()
    } else if (index === 3) {
      gentraCar()
    }
  })
})

const coboltCar = () => {
  carsAbout.forEach((item) => {
    aboutCar.style.display = 'block';
    data.innerHTML += `<div class="about-car-title">
            <img class="about-car-fastImg" src="./images/fast.png" alt="" />
            <h1>${item.cobolt.title}</h1>
            <div class="about-car-list">
              <ul>
                <li>power</li>
                <li>color</li>
                <li>weight</li>
                <li>speed</li>
                <li>balance</li>
              </ul>
              <ul>
                <li>${item.cobolt.power}</li>
                <li>${item.cobolt.color}</li>
                <li>${item.cobolt.weight}</li>
                <li>${item.cobolt.speed}</li>
                <li>${item.cobolt.balance}</li>
              </ul>
            </div>
          </div>
          <div class="about-car-image">
            <img src=${item.cobolt.img} alt="" />
          </div>`
  })

}
const nexiaCar = () => {
  carsAbout.forEach((item) => {
    aboutCar.style.display = 'block';
    data.innerHTML += `<div class="about-car-title">
            <img class="about-car-fastImg" src="./images/fast.png" alt="" />
            <h1>${item.nexia.title}</h1>
            <div class="about-car-list">
              <ul>
                <li>power</li>
                <li>color</li>
                <li>weight</li>
                <li>speed</li>
                <li>balance</li>
              </ul>
              <ul>
                <li>${item.nexia.power}</li>
                <li>${item.nexia.color}</li>
                <li>${item.nexia.weight}</li>
                <li>${item.nexia.speed}</li>
                <li>${item.nexia.balance}</li>
              </ul>
            </div>
          </div>
          <div class="about-car-image">
            <img src=${item.nexia.img} alt="" />
          </div>`
  })
}
const onixCar = () => {
  carsAbout.forEach((item) => {
    aboutCar.style.display = 'block';
    data.innerHTML += `<div class="about-car-title">
            <img class="about-car-fastImg" src="./images/fast.png" alt="" />
            <h1>${item.onix.title}</h1>
            <div class="about-car-list">
              <ul>
                <li>power</li>
                <li>color</li>
                <li>weight</li>
                <li>speed</li>
                <li>balance</li>
              </ul>
              <ul>
                <li>${item.onix.power}</li>
                <li>${item.onix.color}</li>
                <li>${item.onix.weight}</li>
                <li>${item.onix.speed}</li>
                <li>${item.onix.balance}</li>
              </ul>
            </div>
          </div>
          <div class="about-car-image">
            <img src=${item.onix.img} alt="" />
          </div>`
  })
}
const gentraCar = () => {
  carsAbout.forEach((item) => {
    aboutCar.style.display = 'block';
    data.innerHTML += `<div class="about-car-title">
            <img class="about-car-fastImg" src="./images/fast.png" alt="" />
            <h1>${item.gentra.title}</h1>
            <div class="about-car-list">
              <ul>
                <li>power</li>
                <li>color</li>
                <li>weight</li>
                <li>speed</li>
                <li>balance</li>
              </ul>
              <ul>
                <li>${item.gentra.power}</li>
                <li>${item.gentra.color}</li>
                <li>${item.gentra.weight}</li>
                <li>${item.gentra.speed}</li>
                <li>${item.gentra.balance}</li>
              </ul>
            </div>
          </div>
          <div class="about-car-image">
            <img src=${item.gentra.img} alt="" />
          </div>`
  })
}


users.forEach((item) => {
  userCard.innerHTML += `
   <div onclick="filterData(${item.id})" class="user-card">
          <img src=${item.img} alt="">
          <h5>${item.name}</h5>
          <p>${item.title}</p>
        </div>`
})

const filterData = (id) => {
  const filteredData = users.filter((item) => {
    user.style.display = 'block';
    if (item.id === id) {
      return (
        user.innerHTML += `
     <nav class="navbar">
          <a href=""><button>back <img src="./images/left.svg" alt="" /></button></a>
          <img class="nav-image" src="./images/Screenshot_1.ico" alt="" />
     </nav>
        <div class="user-content">
          <div class="user-bio">
            <img class="user-bio-img" src=${item.userAbout[0].img} alt="" />
            <h3>${item.userAbout[0].name}</h3>
            <div class="user-list">
              <ul>
                <li>win</li>
                <li>car</li>
                <li>phone</li>
                <li>balance</li>
                <li>race</li>
              </ul>
              <ul>
                <li>${item.userAbout[0].win}</li>
                <li>${item.userAbout[0].car}</li>
                <li>${item.userAbout[0].phone}</li>
                <li>${item.userAbout[0].balance}</li>
                <li>${item.userAbout[0].race}</li>
              </ul>
            </div>
          </div>
          <div class="user-image">
            <h3>${item.userAbout[0].car}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              alias reiciendis ad repellat fugiat officia ea deleniti? Eum,
              distinctio expedita.
            </p>
            <img src=${item.userAbout[0].carImg} alt="" />
          </div>
        </div>
    `
      )
    }
  })
  filteredData()
}
