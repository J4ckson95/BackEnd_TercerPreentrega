# Problemas en el desarrollo del proyecto

### **Inconveniente con la ruta `/api/carts/:cid/product/:pid` :**

Se ha identificado un inconveniente con la ruta `/api/carts/:cid/product/:pid`. Dado que se solicita el ID del carrito desde el principio, sería necesario que el frontend decodificara la cookie para poder obtener dicho ID. O bien, seguir el enfoque actual que implica primero realizar una solicitud de búsqueda de datos del usuario a través de un fetch.

### **Problema con la visualización de los productos del carro**

No puede solucionar el inconvenite con el **Populate**, de poder traer los productos y mostrarlos en la vista de cart

### **Es necesario aplicar todas las capas ?**

Es necesario realizar todas las capas que solicita el ejercicio. Personalmente, considero que la capa de servicio podría omitirse por completo y desarrollar todo en el controlador. Básicamente, en el servicio, se repite lo mismo que en Mongo.
