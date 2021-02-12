console.log('favourite');

let link = document.querySelectorAll('.tobox')
console.log(link)
link.forEach((el) => {
  el.addEventListener('click', async (e) => {
    e.preventDefault()
    console.log(e.target.href)
    let feta = await fetch(e.target.href)
    let result = await feta.json()
    console.log(result, '====', e.target.innerHTML)
    if (result) {
      e.target.innerHTML = 'Добавлено'
     
    }
  })
})
