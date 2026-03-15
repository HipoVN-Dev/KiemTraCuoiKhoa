// Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyA9vZDa_9Bmm99tJHw8MYz3_GwmcFGNnu4",
  authDomain: "kiemtracuoiki-beb70.firebaseapp.com",
  projectId: "kiemtracuoiki-beb70",
};

// init
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var auth = firebase.auth();

// LOGIN GOOGLE

function login() {
  var provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider).then(function (result) {
    alert("Đăng nhập thành công: " + result.user.displayName);
  });
}

// LOGOUT

function logout() {
  auth.signOut();

  alert("Đã đăng xuất");
}

// CREATE

function addProduct() {
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;

  db.collection("products")
    .add({
      name: name,
      price: price,
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
