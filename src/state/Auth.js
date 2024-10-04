class Auth {

    setNewUserToStorage(userData) {
        const data = {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            password: userData.password
        }

        let storageUsers = localStorage.getItem('users')
        if (storageUsers) {
            storageUsers = JSON.parse(storageUsers);
        } else {
            storageUsers = [];
        }

        storageUsers.push(data);

        localStorage.setItem('users', JSON.stringify(storageUsers));

        return true
    }

    checkLoginData(loginData) {
        const storageUsers = JSON.parse(localStorage.getItem("users"))
        const findUser = storageUsers.find(item => item.email === loginData.email && item.password === loginData.password)

        if(findUser) {
            localStorage.setItem('loggedUser', loginData.email)

        }
        return findUser
    }

    userIsLogged() {
        const loggedUser = localStorage.getItem("loggedUser")
        return !!loggedUser
    }

    logoutUser() {
        localStorage.removeItem("loggedUser")
    }
}

export default Auth