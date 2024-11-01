const $model = document.querySelector('model-viewer')
const animation = $model.getAnimations()[0]

const updataValue = () => {
    let progress = animation.effect.getComputedTiming().progress * 1
    if (animation.playState === 'finished') progress = 1
    progress = Math.max(0.0, Math.min(1.0, progress)).toFixed(2)

    $model.orientation = `0deg 0deg ${progress * -360}deg`

    requestAnimationFrame(updataValue)
}

requestAnimationFrame(updataValue)