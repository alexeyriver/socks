let a =0
let b=0
let foo = function () {

  const form = document.querySelector('.signin')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const { action, method } = e.target
    const body = {
      email, password
    }
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const result = await response.json()
    console.log(result);
    if (!result.success) {
    
        const resphbs = await fetch('/template/login/invaliddata.hbs');
      const hbs = await resphbs.text();
      const template = Handlebars.compile(hbs);
      let div = document.querySelector('div')
      div.innerHTML += template()

    }
    else if (result.success == 'invalid') {

      const resphbs2 = await fetch('/template/login/invalidpass.hbs');
      const hbs2 = await resphbs2.text();
      const template2 = Handlebars.compile(hbs2);
      let div = document.querySelector('div')
      div.innerHTML += template2()

  
    }
    else if (result.success) { window.location = '/' }
  })





}

foo()
