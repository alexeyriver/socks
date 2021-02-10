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
    if(result.success){
        window.location = '/'
    }
})