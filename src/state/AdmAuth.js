class AdmAuth {
    checkAdminData(data) {
        const adminsData = JSON.parse(localStorage.getItem("admins"))
        const foundData = adminsData.find(item => item.login === data.login && item.password === data.password)
        this.setAdminToken()
        return this.loginAnswer(foundData)
    }

    loginAnswer(answer) {
        if(answer) {
            return "success"
        } else {
            return "not found"
        }
    }

    setAdminToken() {
        const symbols = 'abcdefgh0kl9mn8op7q6r5s43t2w1z'
        let token = ''
        for(let i = 0; i < 25; i++) {
            const math = Math.floor(Math.random() * symbols.length)
            token += symbols[math]
        }

        localStorage.setItem('admToken', token)
    }

    adminIsLogged() {
        return !!localStorage.getItem('admToken')
    }

    logout() {
        localStorage.removeItem("admToken")
    }

}
export default AdmAuth