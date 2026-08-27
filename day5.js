var products=[
{id:1,name:"Laptop",price:18500,category:"Electronics",quantity:4},
{id:2,name:"Mouse",price:180,category:"Electronics",quantity:25},
{id:3,name:"Notebook",price:35,category:"Stationery",quantity:100},
{id:4,name:"Desk Lamp",price:420,category:"Home",quantity:0}
];

//Task 1
function createProduct(name,price,category,quantity){
name=name.trim();
category=category.trim();
price=Number(price);
quantity=Number(quantity);
if(name===""){
return"Error: name is required";
}
if(isNaN(price)||price<=0){
return"Error: invalid price";
}
if(!Number.isInteger(quantity)||quantity<0){
return"Error: invalid quantity";
}
var newProduct={
id:products.length+1,
name:name,
price:price,
category:category,
quantity:quantity
};
products.push(newProduct);
return newProduct;
}

//Task 2
function printProducts(list){
console.table(list);
}
function getAllProducts(){
return products;
}

//Task 3
function getProductById(id){
id=Number(id);
var product=products.find(function(product){
return product.id===id;
});
if(!product){
return null;
}
return product;
}

//Task 4
function updateProduct(id,name,price,category,quantity){
id=Number(id);
var index=products.findIndex(function(product){
return product.id===id;
});
if(index===-1){
return"Error: product not found";
}
var product=products[index];
if(name!==null&&name.trim()!==""){
product.name=name.trim();
}
if(price!==null&&price!==""){
price=Number(price);
if(!isNaN(price)&&price>0){
product.price=price;
}
}
if(category!==null&&category.trim()!==""){
product.category=category.trim();
}
if(quantity!==null&&quantity!==""){
quantity=Number(quantity);
if(Number.isInteger(quantity)&&quantity>=0){
product.quantity=quantity;
}
}
return product;
}

//Task 5
function deleteProduct(id){
id=Number(id);
var index=products.findIndex(function(product){
return product.id===id;
});
if(index===-1){
return"Error: product not found";
}
var confirmed=confirm("Are you sure you want to delete this product?");
if(!confirmed){
return"Delete cancelled";
}
var deletedProduct=products.splice(index,1);
return deletedProduct[0];
}

//Task 6
function filterProducts(keyword){
keyword=keyword.trim().toLowerCase();
return products.filter(function(product){
return product.name.toLowerCase().includes(keyword)||product.category.toLowerCase().includes(keyword);
});
}

//Task 7
function startApp(){
var choice;
while(true){
choice=prompt("===== NTI Mini Store =====\n1) Add product\n2) Show all products\n3) Show product by ID\n4) Update product\n5) Delete product\n6) Search / Filter\n0) Exit");
if(choice===null||choice==="0"){
break;
}
switch(choice){
case"1":
var name=prompt("Enter product name:");
var price=prompt("Enter product price:");
var category=prompt("Enter product category:");
var quantity=prompt("Enter product quantity:");
console.log(createProduct(name||"",price,category||"",quantity));
break;
case"2":
printProducts(getAllProducts());
break;
case"3":
var id=prompt("Enter product ID:");
console.log(getProductById(id));
break;
case"4":
var updateId=prompt("Enter product ID:");
var updateName=prompt("Enter new name:");
var updatePrice=prompt("Enter new price:");
var updateCategory=prompt("Enter new category:");
var updateQuantity=prompt("Enter new quantity:");
console.log(updateProduct(updateId,updateName,updatePrice,updateCategory,updateQuantity));
break;
case"5":
var deleteId=prompt("Enter product ID:");
console.log(deleteProduct(deleteId));
break;
case"6":
var keyword=prompt("Enter search keyword:");
if(keyword!==null){
printProducts(filterProducts(keyword));
}
break;
default:
alert("Invalid choice");
}
}
}