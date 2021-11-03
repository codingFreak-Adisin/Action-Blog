let ul = document.querySelector('.links-container');

auth.onAuthStateChanged((user) => {
    if(user){
        // user is loggin
        ul.innerHTML += `
        <li class="link-item"><a href="#" onclick="logoutUser()" class="link">Logout</a></li>
        `
    } else{
        // no user logged in
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">Login</a></li>
        `
    }
})