window.onload = () => {
    console.log('로그인 페이지 연결 완료')
}
​
async function handleLogin() {
​
    const email = document.getElementById('id_email').value
    const password = document.getElementById('id_password').value
​
    const response = await fetch('http://127.0.0.1:8000/users/login/', {
​
        headers : {
            'Content-type': 'application/json',
        },
        method : 'POST',
        body : JSON.stringify({
            "email" : email,
            "password" : password
        })
    })
    console.log(response)
    if (response.status = 200) {
​
        const response_json = await response.json()
​
        localStorage.setItem("access", response_json.access)
        localStorage.setItem("refresh", response_json.refresh)
        
​
        const base64Url = response_json.access.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g,'/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
​
        localStorage.setItem("payload",jsonPayload);
​
        window.location.href = "http://127.0.0.1:5500/wish/main.html"
    } else {
        alert('로그인 실패. 다시 시도하세요')
    }
}

window.onload = () => {
    console.log("회원가입 페이지 연결 완료")
}
​
​
​
async function handleSignup() {
​
    const email = document.getElementById('id_email').value
    const password = document.getElementById('id_password').value
    const password2 = document.getElementById('id_password2').value
    const username = document.getElementById('id_username').value
    const profile_img = document.getElementById('id_profile_img').files[0]
    const birthday = document.getElementById('id_birthday').value
​
    if (password == password2) {
        
        const formdata = new FormData()
​
        console.log(formdata)
​
        formdata.append('email', email)
        formdata.append('password', password)
        formdata.append('username', username)
        if (profile_img) {
            formdata.append('profile_img', profile_img)
        }
        formdata.append('birthday', birthday)
​
        console.log(formdata)
​
        const response = await fetch('http://127.0.0.1:8000/users/signup/', {
            method : 'POST',
            body : formdata
        })
​
    if (response.status == 201) {
        alert('가입 완료')
        window.location.href = "http://127.0.0.1:5500/user/login.html"
    } else {
        alert('회원가입에 실패. 다시 시도하세요.')
    }
​
    } else {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다. 다시 시도하세요.');
    }

}