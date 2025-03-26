if (localStorage.getItem('users') === undefined || !Array.isArray(JSON.parse(localStorage.getItem('users')))) {
    // Обнуляем хранилище логинов и паролей если его нет, или данные в нём не являются массивом
    localStorage.setItem('users', "[]");
}

function register(login, password) {
    var storedUsers = JSON.parse(localStorage.getItem("users"));
    var temporaryUserToRegister = {login: login, password: password};
    if (!userExists(temporaryUserToRegister)) {
        //TODO: Проверить отсутствие в массиве существующего пользователя
        storedUsers.push(temporaryUserToRegister)
    }
    localStorage.setItem('users', JSON.stringify(storedUsers))
}

function authorize(login, password) {
    var userToAuthorize = {login: login, password: password}
    if (userExists(userToAuthorize) && userExists(userToAuthorize).password === password) {
        return true;
    }
    return false;
}

function userExists(checkingUser) {
    //TODO: Возвращаем пользователя если он найден или false если его нет
    var cachedUsers = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < cachedUsers.length; i++) {
        var user = cachedUsers[i];
        if (user.login === checkingUser.login) {
            return user;
        }
    }
    return false;
}