function callApi() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginData = {};
    loginData.UserName = username;
    loginData.PassWord = password;
    var jsonData = JSON.stringify(loginData);
    //const apiUrl = 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify'; 
    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify2', {
         method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU7a26d964ff411a1d288de0ab383dd39bc5ed370e7134ea278a596b267d89a6073f87eca89b12e053b91d236390abd4c4'
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <p><strong>Status :</strong> ${data.status ? 'Success' : 'Failed'}</p>
            <p><strong>Name :</strong> ${data.displayname_en || 'N/A'}</p>
            <p><strong>Username :</strong> ${data.username|| 'N/A'}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<p>Error fetching data. Please try again.</p>';
    });
}