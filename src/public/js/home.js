let cartId = null
let user = null
document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/users/current/session")
        .then(response => {
            if (response.ok) return response.json()
        }).then((data) => {
            if (data) {
                cartId = data.payload.cartId
                user = { name: data.payload.first_name, email: data.payload.email }
            }
        })
})
const buttons = document.querySelectorAll("th button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (e) => {
        if (!cartId) return document.location.href = "/librosalclic/session/login"
        const productId = e.target.id
        fetch(`/api/carts/${cartId}/product/${productId}`, { method: "PUT" })
            .catch(error => {
                console.error('Error :', error.message);
            })
    };
}
const buttonCart = document.getElementById("buttonCart");

buttonCart.addEventListener("click", () => {
    if (!cartId) return document.location.href = "/librosalclic/session/login";
    document.location.href = `/api/carts/${cartId}`
});
