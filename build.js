const fs = require('fs-extra')
const getEmojis = require('./emojis.js')
const path = require('path')

const distDir = path.join(__dirname, '.dist')

;(async () => {
  try {
    await fs.emptyDir(distDir)
    await buildIndex()
    await fs.copy('styles.css', path.join(distDir, 'styles.css'))
    await fs.copy('ui.js', path.join(distDir, 'ui.js'))
  }
  catch (error) {
    console.log(`Build error (${error.message})`)
  }
})()

async function buildIndex() {
  const baseHtml = await fs.readFile('index.html', 'utf8')
  const emojisHtml = getEmojis().map((category) => {
    let html = '<div class="category">'
    html += category.items.split(' ').map((emoji) => `<button class="emoji js-emoji">${emoji}</button>`).join('\n')
    html += '</div>'
    return html
  }).join('\n')
  await fs.writeFile(path.join(distDir, 'index.html'), baseHtml.replace('__emojis__', emojisHtml), 'utf8')
}
