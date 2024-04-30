const button = document.getElementById('login')

const validarLogin = () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value

    const urlLogin = 'https://back-login.vercel.app/usuarios'

    const ListUsers = await fetch(urlLogin)

    const objUsers = await ListUsers.json()

    if (email == '' || password == '') {
        alert('por favor preencha todos os campos !!')
    } else {

        let validaUser = false

        objUsers.forEach(user => {

            if (user.email == user && user.senha == password) {
                validaUser = true
                window.Location.href = '../html/home.html'
            }
        })

        if (!validaUser) {
            alert('Por favor verifique o email e senha !!')
        }
    }
}

button.addEventListener('click', () => {
    validarLogin()
})