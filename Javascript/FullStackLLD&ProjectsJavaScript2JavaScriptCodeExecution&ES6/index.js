var cartQuantity = 20;

if (cartQuantity > 0) {
    console.log('widget 1')
    cartQuantity++

} else if (cartQuantity > 10) {
    console.log('widget 2')
    cartQuantity++
} else {
    console.log('widget 3')
    cartQuantity++
}

cartQuantity > 0 ? console.log('widget 1') : console.log('widget 2')

console.log(cartQuantity)