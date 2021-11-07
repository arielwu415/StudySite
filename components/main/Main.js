import styles from '../../styles/style.module.scss'
import Music from '../music/Music'

export default function Main({start, night, setStart}) {
   return (
    <main id={styles.main}>
        {
          !start &&
          <div className={styles.welcome}>
            <div className={styles.welcome_msg}>
              <h3><span>Welcome to</span></h3>
              <h1><span>the StudySite</span></h1>
            </div>
            <button className={styles.main_button} onClick={() => setStart(true)}><span>Get Started</span></button>
            
          </div>
        }
        {
          start &&
          <div className={styles.main_container}>
            <div className={styles.timer}>
              <span className={styles.digits}>0:00</span>
            </div>
            <div className={styles.timer_button_container}>
              <button className={styles.timer_button}>Start</button>
              <button className={styles.timer_button}>Reset</button>
            </div>
           
            <div className={styles.sound_button_container}>
              <Music id="rain" imgsrc="/rain.ico" src="/weather.mp3" volume={0.3} />
              <Music id="music" imgsrc="/music.ico" src="/lofi.mp3" alt="Music" volume={0.02}/>
            </div>
          </div> }
          
          <div className={styles.background_container}>
          {/* If not night, display sunset bcakground*/
            !night &&
            <video autoPlay loop muted className={styles.background}>
              <source src="/sunset.mp4" type="video/mp4" />
            </video>
          }
          {/* If night, display night bcakground*/
            night &&
            <video autoPlay loop muted className={styles.background}>
              <source src="/night.mp4" type="video/mp4" />
            </video>
          }
        </div>
        
        <div style={{
          position: "absolute",
          backgroundColor: "#3c515e",
          zIndex: "-2",
          width: "100%",
          height: "100%"
        }}>
        </div>
      </main>
   )
    }