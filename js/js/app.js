const directory = document.querySelector('.directory');
const formAddContact = document.forms[0];
const input = document.querySelectorAll('input');

let firstname, lastname, email;

formAddContact.onsubmit = function(e){
    e.preventDefault();

    firstname = input[0].value;
    lastname = input[1].value;
    email = input[2].value;

    creerContact(firstname,lastname,email);
}

// DECLARATIONS
const h1DirectoryTitle = document.createElement('h1');
const textDirectoryTitle = document.createTextNode('Mon répertoire');

// CONFIGURATION
h1DirectoryTitle.appendChild(textDirectoryTitle);

// INSERTION DANS LA PAGE WEB
directory.appendChild(h1DirectoryTitle);