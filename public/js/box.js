let btn = document.querySelectorAll('.delete')
let btnless = document.querySelectorAll('.less')
let btnplus = document.querySelectorAll('.plus')

btn.forEach((el) => {
  el.addEventListener('click', async (e) => {
    const id = e.target.id
   
    const feta = await fetch(`/box/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await feta.json()
    console.log(result)
    if (result.id) {
      //let div = document.querySelector(`.${result.id}`)
      let div = document.getElementsByClassName(`${result.id}`)
      div[0].remove()
    }
  })
})

btnless.forEach((el) => {
  el.addEventListener('click', async (e) => {
    const id = e.target.id
    console.log(id)
    let newid = id.slice(0, -1)
    const feta = await fetch(`/box/less/${newid}`)
    const result = await feta.json()
    console.log(result)
    let div = document.getElementsByClassName(`${result.id}`)
    console.log(div)
    let text = div[0].querySelector('.count')
    console.log(text.innerText)
    console.dir(e.target.parentElement)
    text.innerText = `${result.amount} ШТ`
    if (result.status == 'delete') {
      // let div = document.querySelector(`.${result.id}`)
      div[0].remove()
    }
  })
})

btnplus.forEach((el) => {
  el.addEventListener('click', async (e) => {
    const id = e.target.id
    console.log(id)
    let newid = id.slice(0, -1)
    console.log(newid);
    const feta = await fetch(`/box/plus/${newid}`)
    const result = await feta.json()
    console.log(result)
    let div = document.getElementsByClassName(`${result.id}`)
    console.log(div)
    let text = div[0].querySelector('.count')
    console.log(text.innerText)
    console.dir(e.target.parentElement)
    text.innerText = `${result.amount} ШТ`
  })
})
