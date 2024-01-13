import React from "react";

import { useTheme } from "../../contexts/ThemeProvider";
import { bubbleColor } from "../../helpers";
import styles from '../../styles/components/bubbles.module.scss';

function Bubble({width, top ,left, bClass}) {
  let theme = useTheme()
  let bubbleStyles = bubbleColor(theme.mainColor)

  return (
    <div 
      className={`${styles.bubble} ${bClass}`} 
      style={{
        width : width,
        top: top,
        left: left,
        background : bubbleStyles.bubble1,
      }}>
      <div className={styles.bubbleElipse} style={{background : bubbleStyles.bubble2}}>
        <div className={styles.bubbleShinny}></div>
      </div>
    </div>
  )
}
export default Bubble