import React from 'react'
import './static/main.css'
import Nav from './nav.js'
import img from './assets/background.jpg'

const Main = () => {
  return (
    <>
      <Nav/>
    <main style={{backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: 2000
      }}>
        <div id='animal' className='animal1'>
          <img alt='broi' className='broi' src={require('./assets/Broiler.jpg')}/>
          <div className='cont'>
          <p className='p1'>Click on the button below to see an extensive research and
            explanation on poultry production and maintenance.
          </p>
          <button className='broibutn' to='/'>GO TO PAGE</button>
          </div>
        </div>

        <div id='animal' className='animal2'>
          <div className='cont'>
            <p className='p2'>Click on the
              button below to get see an extensive research and explanation on rabbit production in agriculture.
            </p>
            <button className='broibutn' to='/'>GO TO PAGE</button>
          </div>
          <img alt='rabbit' className='rabbit' src={require('./assets/Chinchilla.jpg')}/>
        </div>

        <div id='animal' className='animal3'>
          <img alt='broi' className='broi' src={require('./assets/head.jpg')}/>
          <div className='cont'>
            <p className='p3'>Click on the button below to see an extensive research and explanation on cattle production
                and maintenance.    
            </p>
            <button className='broibutn' to='/'>GO TO PAGE</button>
          </div>
        </div>

        <div id='animal' className='animal2'>
          <div className='cont'>
            <p className='p2'>
                Click on the button below to see an extensive research and explanation on goat and sheep production
                and maintenance in agriculture.
            </p>
            <button className='broibutn' to='/'>GO TO PAGE</button>
          </div>
          <img alt='rabbit' className='rabbit' src={require('./assets/yankasa.JPG')}/>
        </div>

        <div id='animal' className='animal3'>
          <img alt='broi' className='broi' src={require('./assets/pasture.jpg')}/>
          <div className='cont'>
            <p className='p3'>Click on the button below to see an extensive research and explanation on pasture
              production and mainatenance in livestock production.
            </p>
            <button className='broibutn' to='/'>GO TO PAGE</button>
          </div>
        </div>
    </main>
        
    </>
  )
}

export default Main
