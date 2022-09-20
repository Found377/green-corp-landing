const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }
    i++;
  }
  function setTimeOut() {}
}
