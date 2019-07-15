function creerContact(firstName,lastName,eMail) {
    const contact = document.createElement('div');
    const h2Contact = document.createElement('h2');
    const h3Contact = document.createElement('h3');
    const pContact = document.createElement('p');
    const btContact = document.createElement('button');
    contact.className = 'contact';
    contact.appendChild(h2Contact);
    contact.appendChild(h3Contact);
    contact.appendChild(pContact);
    contact.appendChild(btContact);
    h2Contact.textContent = firstName +' '+ lastName;
    h3Contact.textContent = 'Email: '+ eMail +' — Tel: 0565656565';
    pContact.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ipsam.';
    btContact.textContent = 'Appeler';
    directory.appendChild(contact)
}