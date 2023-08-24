import style from "./HomePage.module.css";
import Atropos from "atropos/react";

const HomePage = () => {
  return (
    <div id="app" className={style.container}>
      <Atropos
        rotateXMax={1}
        rotateYMax={1}
        duration={2000}
        activeOffset={0}
        shadow={false}
        highlight={false}
        className={style.parallax}
      >
        <div className={style.vapour} data-atropos-offset="-10.1">
          <span style={{ "--v": 13 }}></span>
          <span style={{ "--v": 4 }}></span>
          <span style={{ "--v": 9 }}></span>
          <span style={{ "--v": 1 }}></span>
          <span style={{ "--v": 11 }}></span>
          <span style={{ "--v": 3 }}></span>
          <span style={{ "--v": 14 }}></span>
          <span style={{ "--v": 6 }}></span>
        </div>
        <div className={style.vignette}></div>
        <img src="Fondo.png" data-atropos-offset="-1.7" className={style.img} />
        <img
          src="Escritorio.png"
          data-atropos-offset="-1.1"
          className={style.img}
        />
        <img src="Silla.png" data-atropos-offset="-0.5" />
      </Atropos>
    </div>
  );
};

export default HomePage;
