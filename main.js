//taske1
localStorage.setItem('hi','Hello,world');
console.log(localStorage.getItem('hi'));


//taske2
localStorage.setItem('num',JSON.stringify(4444));
console.log(JSON.parse(localStorage.getItem('num')));


//taske3
localStorage.setItem('yes',JSON.stringify(true));
console.log(JSON.parse(localStorage.getItem('yes')));


//taske4
localStorage.removeItem('num');


//taske5
// localStorage.clear();


//taske 6
if (localStorage.getItem('yes')){
    console.log("exists");
}
else{
    console.log("not exists");
};



//taske7
localStorage.setItem('arrayofnum',JSON.stringify([1,5,8,0,8]));
console.log(JSON.parse(localStorage.getItem('arrayofnum')));




//taske8
localStorage.setItem('user',JSON.stringify({name:"rasha",age:"19"}))
console.log(JSON.parse(localStorage.getItem('user')));



//taske9
let nej = {
   nam:'nejar',
   age:17,
};
localStorage.setItem('multibule',JSON.stringify(nej));
const nadra = JSON.parse(localStorage.getItem('multibule'));
console.log(nadra.nam);
console.log(nadra.age);
//??????????????????????????????????????????????????????????????????



//taske 10
localStorage.setItem('name','nejar');
localStorage.setItem('name','Rasha');
console.log(localStorage.getItem('name'));



//taske1
sessionStorage.setItem('hi','Hello,world');
console.log(sessionStorage.getItem('hi'));


//taske2
sessionStorage.setItem('number',JSON.stringify(8765));
console.log(JSON.parse(sessionStorage.getItem('number')));


//taske3
sessionStorage.setItem('no',JSON.stringify(false));
console.log(JSON.parse(sessionStorage.getItem('no')));


//taske4
sessionStorage.removeItem('hi');


//taske5
// sessionStorage.clear();


//taske 6
if (sessionStorage.getItem('no')){
    console.log("exists");
}
else{
    console.log("not exists");
};



//taske7
sessionStorage.setItem('arraynum',JSON.stringify([8,8,7,7,8,8]));
console.log(JSON.parse(sessionStorage.getItem('arraynum')));




//taske8
sessionStorage.setItem('user',JSON.stringify({name:"rasha",age:"19"}))
console.log(JSON.parse(sessionStorage.getItem('user')));



//taske9
let rr = {
   nam:'relam',
   age:16,
};
sessionStorage.setItem('multibule',JSON.stringify(rr));
const what = JSON.parse(sessionStorage.getItem('multibule'));
console.log(what.nam);
console.log(what.age);
//??????????????????????????????????????????????????????????????????



//taske 10
sessionStorage.setItem('name','misho');
sessionStorage.setItem('name','tweety');
console.log(sessionStorage.getItem('name'));





