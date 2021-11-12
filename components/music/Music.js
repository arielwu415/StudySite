import styles from '../../styles/style.module.scss';

export default function Music({id, src, imgsrc, alt, volume}) {
  
    function playMusic() {
        var myMusic = document.getElementById(id);
        myMusic.volume = parseFloat(volume);
        myMusic.loop = true;
        return myMusic.paused ? myMusic.play() : myMusic.pause();
      };
    
      return (
        <>
        <div id = "image">
          <img src={imgsrc} id={styles.rain} onClick = {playMusic} alt={alt} type="button" />
        </div>
        <audio id = {id} src = {src} ></audio>
        </>
    
      )
}