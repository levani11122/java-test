function lettersOnly(input){
    let regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
}
    let user_info = [];
    let i = 0;
function addrow(e){
    event.preventDefault();
    let user ={
        firstname : document.getElementById('name').value,
        lastname : document.getElementById('lastName').value ,
        dateofbirth : document.getElementById('date').value ,
        adress : document.getElementById('adress').value,
        gender : document.getElementById('gender').value 
    };
    i++; 
    document.getElementById("number").innerHTML= i;
    document.getElementById("tableName").innerHTML= user.firstname;
    document.getElementById("tableLastName").innerHTML = user.lastname;
    document.getElementById("tableDate").innerHTML = user.dateofbirth;
    document.getElementById("tableAdress").innerHTML = user.adress;
    document.getElementById("tableGender").innerHTML = user.gender;
    document.getElementById("pop").innerHTML += " ur name - " + user.firstname + " ur lastname - " + user.lastname + " ur date of birth- " + user.dateofbirth + " ur adress- " + user.adress + " ur gender= " + user.gender;

    user_info.push(user);
    document.querySelector('form').reset;
    localStorage.setItem('MyPersonalInfo', JSON.stringify(user_info));
};
function deleteNumber(){
    document.getElementById('number').innerHTML = "";
    document.getElementById('tableName').innerHTML = "";
    document.getElementById('tableLastName').innerHTML = "";
    document.getElementById('tableDate').innerHTML = "";
    document.getElementById('tableAdress').innerHTML = "";
    document.getElementById('tableGender').innerHTML = "";
}
let popup = document.getElementById('popup');
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

