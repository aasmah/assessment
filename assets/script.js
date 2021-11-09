// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Aasia Mahmood" // HINT: Replace this with your own name!


// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // total= gb + cc + sugar

// Code to update name display 
document.getElementById('credit').textContent = "Created by Aasia Mahmood"

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb += 1
    document.getElementById('qty-gb').innerHTML = gb;
    total = gb + cc + sugar
    document.getElementById('qty-total').innerHTML = total
})

// HINT: You can delete this console.log after you no longer need it!
// console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+/- " button for "Gingerbread" is clicked(event listeners)

document.getElementById("minus-gb").addEventListener("click", function() {
    if (gb > 0) { gb -= 1 }
    document.getElementById('qty-gb').innerHTML = gb;
    total = gb + cc + sugar
    document.getElementById('qty-total').innerHTML = total
})

// TODO: Hook up event listeners for the rest of the buttons choccolate chip AND sprinkle
document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) cc -= 1
    document.getElementById('qty-cc').innerHTML = cc;
    total = gb + cc + sugar
    document.getElementById('qty-total').innerHTML = total
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc += 1
    document.getElementById('qty-cc').innerHTML = cc;
    total = gb + cc + sugar
    document.getElementById('qty-total').innerHTML = total
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0) sugar -= 1
    document.getElementById('qty-sugar').innerHTML = sugar;
    total = gb + cc + sugar
    document.getElementById('qty-total').innerHTML = total
})
document.getElementById('add-sugar').addEventListener('click', function() {
        sugar += 1
        document.getElementById('qty-sugar').innerHTML = sugar;
        total = gb + cc + sugar
        document.getElementById('qty-total').innerHTML = total
    })
    //To Do
    //      calculate total no. of cookies
    //     Total = gb +cc+sugar
    //     document.getElementsById('qty-total').innerHTML =total
    //

//