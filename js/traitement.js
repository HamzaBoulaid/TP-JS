// function to show users data in grid mode
function showGrid() {
    var gabari = document.querySelector("#gabari .user");
    var dist = document.querySelector(".users .row");
    users.forEach(function(user, index) {
        let card = gabari.cloneNode(true);
        card.querySelector('.name').innerHTML = '<b>' + user.name.last + '</b> ' + user.name.first;
        card.querySelector('.email').innerText = user.email;
        card.querySelector('img').setAttribute('src', user.picture.large);
        card.classList.add(user.gender);
        card.querySelector('button').setAttribute('onclick', 'update(' + index +')');
        dist.appendChild(card);
    });
}
// function to show users data in table mode
function showTable() {
    var table = document.querySelector('table .rowModule');
    var dist = document.querySelector('.table tbody');
    users.forEach(function(user, index) {
        let row = table.cloneNode(true);
        row.querySelector('img').setAttribute('src', user.picture.thumbnail);
        row.querySelector('.name').innerHTML = '<b>' + user.name.last + '</b> ' + user.name.first;
        row.querySelector('.gender').innerText = user.gender;
        row.querySelector('.email').innerText = user.email;
        row.querySelector('button').setAttribute('onclick', 'update(' + index +')');
        row.classList.remove('rowModule');
        dist.appendChild(row);
    });
}

// this function used to enable modification and shows the modification form
function update(index){
    document.querySelector('.modificationForm').style.display = 'block';
    document.querySelector('#hideAll').style.display = 'block';
    document.querySelector('.modificationForm form').setAttribute('data-index', index); // data-index is an attribute
    //I created to hold the index of the user
}

// this function is used to save the changes of a user
// its change the data in the users table and the data in the web page,
// then its reload the content of the grid and the table
function saveModification(){
    var firstname = document.querySelector('#Firstname').value;
    var lastname = document.querySelector('#Lastname').value;
    var email = document.querySelector('#email').value;
    var index = document.querySelector('.modificationForm form').getAttribute('data-index');
    if(firstname != '') users[index].name.first = firstname;
    if(lastname != '') users[index].name.last = lastname;
    if(email != '') users[index].email = email;
    closeForm();
    document.querySelector('.users .row').innerHTML = '';
    document.querySelector('.table tbody').innerHTML = '';
    showGrid();
    showTable();
}

// to add the click event to the div hideAll, in order to hide it and the modification form when the user click on it
document.querySelector('#hideAll').addEventListener('click', function(){
    document.querySelector('.modificationForm').style.display = 'none';
    document.querySelector('#hideAll').style.display = 'none';
})

// this function to close the form where we modifie user's data
function closeForm(){
    document.querySelector('.modificationForm').style.display = 'none';
    document.querySelector('#hideAll').style.display = 'none';
}

//this function is used to switch between the grid mode and the table mode
function change() {
    var grid = document.querySelector(".users");
    var table = document.querySelector(".TableLayout");
    if(grid.style.display == "block") {
        grid.style.display = 'none';
        table.style.display = 'block';
        document.querySelector(".showbtn").innerText = 'Grid';
    }
    else {
        grid.style.display = 'block';
        table.style.display = 'none';
        document.querySelector(".showbtn").innerText = 'Table';
    }
}

showGrid();
showTable();