

console.log('this is generator');

let parag = document.querySelectorAll('p')
let div = document.querySelector('div')

parag.forEach((el) => {
  el.addEventListener('click', async (e) => {
    console.log(e.target.innerText)   /// цвет по которому кликаем 
    const response = await fetch('http://localhost:3000/generator', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ colorName: e.target.innerText })
    })
    const frontResp = await response.json()
    console.log(frontResp.pic)
    const resphbs = await fetch('/template/generatepic.hbs');
    const hbs = await resphbs.text();
    const template = Handlebars.compile(hbs);
    div.innerHTML = template(frontResp.pic)

/// pic addevent
let parag = document.querySelectorAll('p')
parag.forEach((el) => {
  el.addEventListener('click', async (e) => {
    console.log(e.target.alt)

    const response = await fetch('http://localhost:3000/generator/img', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({imgName: e.target.alt })
    })
    const frontResp = await response.json()

      console.log(frontResp)
  })

})


  })
})
