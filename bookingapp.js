function saveData(event) {
	event.preventDefault();
	const userName = event.target.name.value;
	const mail = event.target.email.value;
	const userData = {
		userName,
		mail
	};
	localStorage.setItem(userData.userName, JSON.stringify(userData));
	showToDisplay(userData);
}

function showToDisplay(userData) {
	if (userData.userName === '' || userData.mail === '') {
		// alert('Please enter all fields');
		var msg = document.querySelector('.msg');
		msg.classList.add('error');
		msg.innerHTML = 'Please enter all fields';

		// Remove error after 3 seconds
		setTimeout(() => msg.remove(), 3000);
	} else {
		const userlist = document.querySelector('#users');
		// userlist.innerHTML = userlist.innerHTML + `<li> ${userData.userName} : ${userData.mail} </li>`;

		const li = document.createElement('li');
        li.textContent = userData.userName + " : " + userData.mail ;


        const deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = 'Delete';
        deleteButton.className = 'btn-danger';

        const updateButton = document.createElement('input');
        updateButton.type = 'button';
        updateButton.className = 'btn-update';
        updateButton.value = 'Edit';

        deleteButton.onclick = () => {
            localStorage.removeItem(userData.userName);
            userlist.remove(li);
        };

        updateButton.onclick = () =>{
			localStorage.removeItem(userData.userName);
            userlist.remove(li);
			document.querySelector('#name').value = userData.userName;
			document.querySelector('#email').value = userData.mail; 
		};

        li.appendChild(updateButton);
        li.appendChild(deleteButton);
        
        userlist.appendChild(li);

	}
}