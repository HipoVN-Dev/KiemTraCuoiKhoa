const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");

// LOGIN GOOGLE
btnLogin.addEventListener("click", function () {
  var provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider).then(function (result) {
    alert("Đăng nhập thành công: " + result.user.displayName);
  });
})

// LOGOUT
btnLogout.addEventListener("click", function () {
 auth.signOut();

  alert("Đã đăng xuất");
})

// CREATE

function addProduct() {
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var image = document.getElementById("image").value;

  db.collection("products")
    .add({
      name: name,
      price: price,
      image: image
    })
    .then(function () {
      alert("Thêm thành công");
      loadProducts();
    });
}

// READ

function loadProducts() {
  db.collection("products")
    .get()
    .then(function (querySnapshot) {
      var html = "";

      querySnapshot.forEach(function (doc) {
        var data = doc.data();

        html += `

<div class="col-md-3">

<div class="card p-3">
<img src="${data.image}" class="card-img-top" alt="${data.name}" />
<h5>${data.name}</h5>

<p>${data.price} VND</p>

<button onclick="deleteProduct('${doc.id}')"
class="btn btn-danger">
Xóa
</button>

</div>

</div>

`;
      });

      document.getElementById("product-list").innerHTML = html;
    });
}

// DELETE

function deleteProduct(id) {
  db.collection("products")
    .doc(id)
    .delete()
    .then(function () {
      alert("Đã xóa");
      loadProducts();
    });
}

// load khi mở web

loadProducts();
