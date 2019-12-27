const email1 = 'user@gmail.com';
const email2 = 'admin@gmail.com';
const password1 = 'UserPass';
const password2 = 'AdminPass'
let password, confirmation,password_change,new_password,password_check;
let email = prompt('Enter your email');
const emailLength = 5;
const passwordLength =6;
if (email === null || email === '') {
    alert('Canceled');
} else {
    if (email.length < emailLength) {
        alert(`I don't know any emails having name length less than 5 symbols`)
    } else if (email === email1 || email === email2) {
        password = prompt('Enter your password');
        if (password === null || password=== '') {
            alert('Canceled');
        }else if (email===email1 && password===password1 || email===email2 && password===password2){
            confirmation =confirm('Do you want to change your password?')
            if (confirmation === true){
                password_change = prompt('Enter your password');
                if (password === password_change){
                    new_password = prompt('Enter your new password');
                    if (new_password === null || new_password === '') {
                        alert('Canceled');
                    }else if (new_password.length<passwordLength){
                        alert('It’s too short password. Sorry')
                    }else{
                        password_check = prompt('Enter your new password again');
                        if (password_check===new_password){
                            alert('You have successfully changed your password.')
                        }else{
                            alert('You wrote the wrong password.')
                        }
                    }
                
                }else{
                    alert('Wrong password');
                }
            
            }else{
                alert('You have failed the change');
            }
        }else{
            alert('Wrong password')
        }
    } else {
        alert('I don’t know you')
    }
}