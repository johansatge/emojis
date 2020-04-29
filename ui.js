(() => {
  const bigNode = document.querySelector('.js-big')
  document.addEventListener('click', onClick)
  window.addEventListener('resize', onResize)

  onResize()
  onCloseBig()
  
  function onClick(evt) {
    if (evt.target.classList.contains('js-emoji')) {
      onSelectEmoji(evt.target.innerText)
    }
    if (evt.target.classList.contains('js-big')) {
      onCloseBig()
    }
  }
  
  function onSelectEmoji(emoji) {
    bigNode.innerText = emoji
    bigNode.style.display = 'block'
  }
  
  function onCloseBig() {
    bigNode.style.display = 'none'
  }
  
  function onResize() {
    bigNode.style.fontSize = `${Math.min(window.innerWidth, window.innerHeight) - 100}px`
    bigNode.style.lineHeight = `${window.innerHeight}px`
  }
})()
