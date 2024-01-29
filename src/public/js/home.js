let cartId = null
document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/users/current/session")
        .then(response => {
            if (response.ok) return response.json()
        }).then((data) => { if (data) cartId = data.payload.cartId })
})
const button = document.querySelectorAll("button")
for (let i = 0; i < button.length; i++) {
    button[i].onclick = (e) => {
        if (!cartId) document.location.href = "/librosalclic/session/login"
        const productId = e.target.id
        fetch(`/api/carts/${cartId}/product/${productId}`, { method: "PUT" }).then(response => {
            if (response.ok) return response.json()
        })
            .then(data => console.log(data))
            .catch(error => {
                console.error('Error :', error.message);
            })
    };
}