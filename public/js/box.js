const deleteListBtn = document.querySelectorAll('.deleteBtn')
    deleteListBtn.addEventListener('click', async (e) => {
        const div = e.target.parentElement.parentElement
        const id = e.target.id
        const response = await fetch(`/box/${id} `, {
            method: 'DELETE',
            header: {
                'Content-Type': 'application/json'
            },
            const result = await response.json()
            if(result.success) {
                div.remove()
            }
        })
    })