import styles from '../../styles/style.module.scss'

export default function Music() {
    function playRain() {
        var myMusic = document.getElementById("rain");
        myMusic.volume = 0.2;
        myMusic.loop = true;
        return myMusic.paused ? myMusic.play() : myMusic.pause();
      };
    
      function playForest() {
        var myMusic = document.getElementById("forest")
        myMusic.loop = true;
        return myMusic.paused ? myMusic.play() : myMusic.pause()
      }
      return (
        <>
        <div id = "image">
          <img src="../../public/rain.ico" id= {styles.rain} alt="Rain" onClick = {playRain} type="button"/>
          <img src="../../public/forest.ico" id = {styles.forest} alt="Forest" onClick = {playForest} type="button"/>
        </div>
        <audio id = "rain" src = "../../public/weather.mp3" ></audio>
        <audio id = "forest" src = "../../public/forest.mp3" ></audio>
        </>
    
      )
}