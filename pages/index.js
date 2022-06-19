import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  return (
    <div className={styles.container}>

      <Parallax pages={6.5} style={{ color: 'white' }}>

        <ParallaxLayer
          factor={3}
          style={{
            backgroundImage: 'url(space.jpg)',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
          }}>


        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.1}>
          <div className={styles.firstPage} >

            <h1>DREAMS</h1>
            <h1>↓</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.5}>
          <div className={styles.secondPage}>

            <h1>They bring passion, purpose and meaning to your life. – Dreams give you energy and create excitement. – They empower you to set up your life trajectory and change your life. – Dreams give you the feeling of accomplishment and increase your self-esteem and self-confidence.</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5}>
          <div className={styles.secondPage}>

            <h1>We all have dreams right?</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0.5}>
          <div className={styles.secondPage}>

            <h1>Probably yes!</h1>
            <h1>However anyone can lose faith and motivation sometimes. These are dark stains in our lives.</h1>
            

          </div>
        </ParallaxLayer>

        <ParallaxLayer
        offset={3.5}
          factor={3}
          style={{
            backgroundImage: 'url(blackToBlue.jpg)',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
          }}>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0.5}>
          <div className={styles.secondPage}>

            <h1>For that case here are some brightful thoughts!</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5}>
          <div className={styles.rightQuote}>

            <h1>“Do what you have to do until you can do what you want to do„</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.1} speed={0.6}>
          <div className={styles.leftQuote}>

            <h1>“Ask yourself if what you’re doing today is getting you closer to where you want to be tomorrow„</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.30} speed={0.4}>
          <div className={styles.rightQuote}>

            <h1>“It feels good to be lost in the right direction„</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.50} speed={0.5}>
          <div className={styles.leftQuote}>

            <h1>“Don’t call it a dream call it a plan„</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.60} speed={0.6}>
          <div className={styles.rightQuote}>

            <h1>“Don’t tell people your dream. Show them„</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.70} speed={0.5}>
          <div className={styles.leftQuote}>

            <h1>“You attract what you are, not what you want. If you want great, then be great„</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.85} speed={0.4}>
          <div className={styles.rightQuote}>

            <h1>“It always seems impossible until it’s done„</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.99} speed={0.4}>
          <div className={styles.leftQuote}>

            <h1>“Sometimes the right path is not the easiest one„</h1>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5.9} speed={0.5}>
          <div className={styles.secondPage}>

            <h1 className={styles.endQuote}>True love has a good habit of coming back</h1>

          </div>
        </ParallaxLayer>

      </Parallax>

    </div>
  )
}
