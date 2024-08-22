// logic for filling table

const deletePasswords = (website)=>{
    let getData = localStorage.getItem("passwords");
    let arr = JSON.parse(getData);
    arrUpdated = arr.filter((e)=>{
        return e.website!= website;
    } )

    localStorage.setItem("passwords", JSON.stringify(arrUpdated));
    alert(`successfully delete ${website}`)
    showpasswords();




}

const showpasswords = ()=> {

let getTable = document.querySelector("table");
let getData = localStorage.getItem("passwords");

if(getData ==  null){
    getTable.innerHTML = "No data to show"
}
else{
    getTable.innerHTML= `<tr>
    <th>Website</th>
    <th>Username</th>
    <th>Password</th>
    <th>Delete</th>
</tr>
    `
    let arr = JSON.parse(getData);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let str =`<tr>
                    <td>${element.website}</td>
                    <td>${element.username}</td>
                    <td>${element.password}</td>
                    <td><button class="btn" onclick="deletePasswords('${element.website}')">Delete</button>
                    </td>
                </tr>`          
        getTable.innerHTML = getTable.innerHTML + str;   
    }
    

}




}

showpasswords();
document.querySelector('.btn').addEventListener('click', (e)=> {
    e.preventDefault();
    let getWebsite = document.querySelector('#website').value;
    let getUsername = document.querySelector('#username').value;
    let getPassword = document.querySelector('#password').value;

    let passwords = localStorage.getItem("passwords");
    if(passwords === null){
        let json = [];
        json.push({
            Website:getWebsite,
            Username: getUsername,
            Password: getPassword
        });
        localStorage.setItem("passwords", JSON.stringify(json));
        alert('saved')
    }

    else{
        let json = JSON.parse(passwords);
        json.push({
            website:getWebsite,
            username: getUsername,
            password: getPassword
        });
        localStorage.setItem("passwords", JSON.stringify(json))
        alert('saved')
    }
    showpasswords();
});




























// localStorage: localStorage is a property of the window object in web browsers. It allows web applications to store key-value pairs in a web browser with no expiration date. This data persists even after the browser window is closed.


//getItem(key): This method takes a single parameter, the key of the item you want to retrieve from the localStorage 
//key: A string representing the name of the key you want to retrieve the value for.


//localStorage.setItem() is a method in JavaScript used to store data in the web browser's localStorage object.
//setItem(key, value): This method takes two parameters:
// key: A string representing the name of the key under which the value will be stored.
// value: The value you want to store. This can be a string.




// JSON.stringify() is a method in JavaScript used to convert JavaScript objects into JSON strings.
// JSON.stringify() is commonly used when you need to send data from a client to a server or store complex data structures in localStorage or sessionStorage, as these storage mechanisms only support string values.