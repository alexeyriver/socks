// top:
const form = document.querySelector('.signup')
console.log('signup');

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const { action, method } = e.target

    const body = {
        name, email, password
    }
console.log(name,email,password,action,method)
    const response = await fetch(action, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const result = await response.json()
    if(!result.success){
      console.log('invalid');
      const resphbs = await fetch('/template/login/invaliduseremail.hbs');
      const hbs = await resphbs.text();
      const template = Handlebars.compile(hbs);
      let div = document.querySelector('.wrapper-auth')
      // div.appendChild(template())
      let temp = template()
      if (div.innerHTML.match(temp)==null)
      { div.append(temp) }
     // continue top;
    }
    else if (result.success){
      window.location = '/'
    }
})
