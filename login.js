
const Httpcall = new XMLHttpRequest();
const method = 'GET';
const url = 'http://127.0.0.1:3000/key/';




function login(){
    let user = document.querySelector('#user');
    let pass = document.querySelector('#pass');
    let container = document.querySelector('.container');
    console.log(user.value,pass.value);

    

    let userHash = md5(user.value);
    let passHash = md5(pass.value);
    let keyHash = userHash+passHash;
    let hashString = "";
    keyHash = md5(keyHash);
    console.log("keyHash : "+keyHash);
    console.log("User : "+userHash,"Pass : "+passHash);
    hashString = ('{\n\t"key" : "'+keyHash+'",\n\t"user" : "'+user.value+'",\n\t"pass" : "'+pass.value+'"\n}');
    console.log(hashString);
    let create_json = JSON.parse(hashString);
    console.log(create_json);
    




    Httpcall.open(method, url+keyHash,true);
    Httpcall.send();

    Httpcall.onreadystatechange = () =>{
        if(Httpcall.readyState===4)
        {
            console.log("This text : "+Httpcall.responseText)
            if(Httpcall.responseText == "")
            {
                alert("Wrong User or Pass");
            }
            else if(Httpcall.responseText  != "null")
            {
                alert("user : "+user.value+"\nLogin Success");
            }
            else{
                alert("Wrong User or Pass");
            }
        }
        
        
    };


}

