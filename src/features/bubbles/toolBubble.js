import React from "react";
import ReactTooltip from 'react-tooltip';

import { useTheme } from "../../contexts/ThemeProvider";
import { bubbleColor } from "../../helpers";
import styles from '../../styles/components/bubbles.module.scss';
import { dynamicUrl } from "../../helpers";



const ToolBubble = ({content, color}) => {
  let theme = useTheme()
  let bubbleStyles = bubbleColor(theme.mainColor)

  let name = theme.darkTheme ? content[`svg${color}`] : content['svg']
  let url = dynamicUrl('media', name)

  return (
    <div className={styles.tollBubbleBox} data-tip={content['description']}>
      <ReactTooltip 
        // offset="{'top': 10}"
        className="tollTip"
        arrowColor={theme.mainColor}
        textColor='#342E37'
        backgroundColor={theme.mainColor}
      />
      <div 
        className={`${styles.bubble} ${styles.toolBubble}`} 
        style={{
          background : bubbleStyles.bubble1,
        }}>
        <div className={styles.bubbleElipse} style={{background : bubbleStyles.bubble2}}>
          <div className={styles.bubbleShinny}></div>
        </div>
        <img
          src={ url }
          alt={`${content['title']} logo`}
          className={styles.bubbleToolLogo}
        />
      </div>
      <h2>{content['title']}</h2>

    </div>
    
  )
}

export default ToolBubble