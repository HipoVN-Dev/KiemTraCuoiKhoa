firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("user login");
        document.getElementById("btn-login").classList.add("d-none");
        document.getElementById("profile").classList.remove("d-none");
        document.getElementById("profile-img").src = user.photoURL;
    } else {
        console.log("user not login");
    }
});

document.getElementById("btn-logout").addEventListener("click", function () {
    firebase
        .auth()
        .signOut()
        .then(() => {
            alert("Đăng xuất thành công");
            document.getElementById("btn-login").classList.remove("d-none");
            document.getElementById("profile").classList.add("d-none");
        })
        .catch((error) => {
            console.error("Error during logout: ", error);
            alert("Đăng xuất thất bại: " + error.message);
        });
});
