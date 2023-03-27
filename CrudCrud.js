function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailid.value;

    const userData = {
        name,
        email
    }
    

// ********** Save Data to Cloud using CrudCrud and POSTMAN **********//

    axios.post("https://crudcrud.com/api/a42caac8ae7743bdbcecdb336dd450a6/appointmentdata",userData)
        .then((response) => {
            //console.log(response);
            showUserOnScreen(response.data);
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4>Ooops! Something Went Wrong.</h4>"
            console.log(err);
        })

}
function showUserOnScreen(userData){
    const ul = document.getElementById('items');
    const li = document.createElement('li');

    li.textContent = userData.name + '-' + userData.email;
    
    const Delete = document.createElement('input');
    Delete.type = 'button';
    Delete.value = 'Delete';
    
    Delete.onclick = ()=>{
        localStorage.removeItem(userData.email);
        ul.removeChild(li);    
    }
    const Edit = document.createElement('input');
    Edit.type = 'button';
    Edit.value = 'Edit';
    
    Edit.onclick = (event)=>{
        var lst = event.target.parentElement;
        let arr = lst.childNodes[0].textContent.split('-');
        
        ul.removeChild(li);   
        document.getElementById('name').value=arr[0];
        document.getElementById('email').value=arr[1]; 
        localStorage.removeItem(userData.email);
    }

    li.appendChild(Delete);
    li.appendChild(Edit);
    ul.appendChild(li);
    
}



    
    
    
