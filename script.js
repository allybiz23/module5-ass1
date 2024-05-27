function getTicket(ticketnum) {
    // Create the AJAX request
    const xhr = new XMLHttpRequest();
    const url = `https://jscript.rdm/ticketrequest.asp/?ticketnumber=${ticketnum}`;

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse the JSON response
            const response = JSON.parse(xhr.responseText);

            // Update the HTML elements with the ticket information
            document.getElementById('request-date').textContent = response.requestDate;
            document.getElementById('employee-id').textContent = response.employeeId;
            document.getElementById('user-first-name').textContent = response.userFirstName;
            document.getElementById('user-last-name').textContent = response.userLastName;
            document.getElementById('problem-description').textContent = response.problemDescription;
            document.getElementById('status').textContent = response.status;
            document.getElementById('response-provided').textContent = response.responseProvided;
        } else if (xhr.readyState === 4) {
            // Handle error case
            console.error('Failed to fetch ticket information.');
        }
    };

    xhr.send();
}

