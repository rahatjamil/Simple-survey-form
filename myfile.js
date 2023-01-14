function Validate() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const radios = document.getElementsByName("job_preference");
    const checkbox = document.getElementsByName("Subjects");

    const nameRegex = /^\s*([A-Za-z]{1,}([\.,] |[-']| )?)+[A-Za-z]+\.?\s*$/;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z]+\.[a-zA-Z]+$/;

    if (!nameInput.value.match(nameRegex)) {
       alert('You have put ' + nameInput.value + ' as your name\n Please check');
       nameInput.focus();
       return false;
    }
    else if (!emailInput.value.match(emailRegex)) {
        alert('Invalid email address\n suggested format abc@example.xyz');
        emailInput.focus();
        return false;
    }
    else if (!Array.from(radios).map(e => e.checked).find(a => a === true)) {
        alert('Please select a sector preference for your career');
        radios[0].focus();
        return false;
    }
    else if (!Array.from(checkbox).map(e => e.checked).find(a => a === true)) {
        alert('Please select atleast one subject');
        checkbox[0].focus();
        return false;
    }
    else {
        return true;
    }
}