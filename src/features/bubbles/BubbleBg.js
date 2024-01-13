import React from "react";

import Bubble from "./Bubble";
import styles from '../../styles/components/bubbles.module.scss';


function BubbleBg() {
  return (
    <div className={styles.bubblesBg}>
      
      <Bubble width="10%" top="2%" left="15%" bClass={styles.bubble1}/>
      <Bubble width="3.6%" top="35%" left="0" bClass={styles.bubble2}/>
      <Bubble width="3.6%" top="55%" left="10%" bClass={styles.bubble1}/>
      <Bubble width="12%" top="80%" left="17%" bClass={styles.bubble2}/>
      <Bubble width="4.3%" top="40%" left="30%" bClass={styles.bubble1}/>
      <Bubble width="3.1%" top="15%" left="45%" bClass={styles.bubble2}/>
      <Bubble width="3%" top="75%" left="40%" bClass={styles.bubble1}/>
      <Bubble width="4.6%" top="75%" left="65%" bClass={styles.bubble2}/>
      <Bubble width="4.7%" top="15%" left="70%" bClass={styles.bubble1}/>
      <Bubble width="8.5%" top="1%" left="93%" bClass={styles.bubble2}/>
      <Bubble width="8.5%" top="40%" left="90%" bClass={styles.bubble1}/>
      <Bubble width="4.7%" top="80%" left="85%" bClass={styles.bubble2}/>
      <Bubble width="5%" top="50%" left="60%" bClass={styles.bubble1}/>

      <Bubble width="5%" top="5%" left="20%" bClass={styles.bubble3}/>
    </div>
  )
}
export default BubbleBg