const accountsStorageKey = 'accounts'

function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}

function addUser(login, user) {
    const users = getData(accountsStorageKey)
    users[login] = user;
    localStorage.setItem(accountsStorageKey, JSON.stringify(users));
}

function registration(login, user) {
    if (getData(accountsStorageKey) === null) {
        localStorage.setItem(accountsStorageKey, JSON.stringify({}))
    }
    if (!getExistingUser(login, getData(accountsStorageKey))) {
        addUser(login, user)
        return true;
    } else {
        return false;
    }
}


function logIn(login, password) {
    if (getData(accountsStorageKey) === null) {
        return false;
    }
    if (getExistingUser(login, getData(accountsStorageKey))) {
        var user = getExistingUser(login, getData(accountsStorageKey))
        if (user.password === password) {
            return user;
        } else {
            return false
        }
    } else {
        return false;
    }
}


function getExistingUser(login, usersHandleObject) {
    if (Array.isArray(usersHandleObject)) {
        for (const user of usersHandleObject) {
            if (user.login === login) {
                return user;
            }
        }
        return false;
    } else if (typeof usersHandleObject === 'object') {
        if (usersHandleObject.hasOwnProperty(login)) {
            return usersHandleObject[login]
        }
        return false;
    }
}