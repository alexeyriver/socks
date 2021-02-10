const form = document.querySelector('.signup')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value
    const { action, method } = e.target

    const body = {
        name, email, password
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