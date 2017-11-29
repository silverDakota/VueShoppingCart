//vue.js
var app = new Vue({
el: '#app',
data: {
    cartitem: 0,
    itemselected: 'none yet',
    subtotal: 0,
    items: [
        { name: 'mozarkite', Desc: 'Big bulk chunks of orzarks own. 5lb loose', ordered: 0, imgsrc: 'img/mozarkite1.jpg', price: 4.55, inventory: 15},
        { name: 'Buckshot', Desc: 'Dime to Quarter sized mixed. 8lb', ordered: 0, imgsrc: 'img/riverrock1.jpg', price: 3.75, inventory: 25},
        { name: 'Buffalo', Desc: 'Large chunk mix of deep clay stained rock. 5lb', ordered: 0, imgsrc: 'img/riverrock2.jpg', price: 8.55, inventory: 35},
        { name: 'Cherokee ', Desc: 'red clay, washed cleaned and ready for you. 5lb', ordered: 0, imgsrc: 'img/riverrock3.jpg', price: 6.25, inventory: 45}

    ],
},
methods: {
    increment(){
            this.cartitem++;
            item.ordered++;
            item.inventory--;
            this.subtotal += item.price;
    },
    decrement(){
            this.cartitem--;
            item.ordered--;
            item.inventory++;
            this.subtotal -= item.price;
    },
    itemname(thename){
            this.itemselected = thename;
    },
    orderthis(item){
            item.ordered++;
            this.cartitem++;
            item.inventory--;
            this.subtotal += item.price;
    },
    removeonethis(item){
            item.ordered--;
            this.cartitem--;
            item.inventory++;
            this.subtotal -= item.price;
    },
    removeallthis(item){
            this.subtotal -= item.ordered * item.price;
            item.inventory += item.ordered;
            this.cartitem -= item.ordered;
            item.ordered = 0;
           
    },
}
});

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));