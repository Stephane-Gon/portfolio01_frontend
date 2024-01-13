import { useState } from "react";
import { stringToArray } from '../helpers'

// HOOK THAT HANDLES THE TEXT ANIMATION BY SETTING A STATE OF VISIBILITY
function useAnimatedSlide(string) {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    visiblity && setVisibility(visiblity);
  };

  let objArray = stringToArray(string)

  return [isVisible, onChange, objArray]
}

export default useAnimatedSlide