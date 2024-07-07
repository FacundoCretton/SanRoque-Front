export const addItemToCart = (cartItems, product) => {

    //productExist lo que va a hacer es buscar si el producto que estamos agregando al carrito ya existe en el carrito

    const productExist = cartItems.find((item) =>{ 
        return item.id === product.id});

    if (productExist) {

        return cartItems.map((item) =>{
            
           return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item}
            //Esta funcion lo que dice es que si el id del item que estamos mapeando es igual al id del producto que queremos agregar al carrito, lo que vamos a hacer es retornar un nuevo objeto con el item que estamos mapeando, y le vamos a sumar 1 a la cantidad de ese item, y si no, retornamos el item tal cual esta
        );

    }

    //Si el producto no existe en el carrito, lo que vamos a hacer es retornar un nuevo array con todos los items que ya estaban en el carrito, y le vamos a agregar el nuevo item con una cantidad de 1

    return [...cartItems, 
    { 
        ...product, quantity: 1 
    
    }];

}


export const removeItemFromCart = (cartItems, id) => {

    //productToRemove lo que va a hacer es buscar si el producto que estamos agregando al carrito ya existe en el carrito y con esto vamos a poder sacar el producto del carrito
    const productToRemove = cartItems.find((item) => {
        return item.id === id
    });


    if (productToRemove.quantity > 1) { 
        //Si la cantidad del producto que queremos remover es mayor a 1, lo que vamos a hacer es retornar un nuevo array con todos los items que ya estaban en el carrito, y le vamos a restar 1 a la cantidad del item que queremos remover
        return cartItems.map((item) =>{

            return item.id === id ? {...item, quantity: item.quantity -1} : item;


        })
        
    
    }

    
    return cartItems.filter((item) =>   { 
     //Esta funcion usa un filtro para retornar todos los items que no sean el item que queremos remover, o sea, el item que tiene el id que le pasamos como parametro a la funcion
        return   item.id !== productToRemove.id
    });
    




},


resetShippingCost = (cartItems, shippingCost) => {

    if (cartItems.length === 1 && cartItems[0].quantity === 1) {
        //Lo que queremos hacer con esta funcion es verificar si el carrito esta vacio, y si lo esta, que el costo de envio sea 0
        return  0;
    }

    return shippingCost;

}