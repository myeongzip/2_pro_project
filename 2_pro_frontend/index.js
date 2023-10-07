console.log('로딩되었습니다.')

window.onload = ()=>{   
    const payload = localStorage.getItem("payload"); // 스트링/오브젝트 형태로 가져오는 게 아니라서, 오브젝트로 바꿔주는 코드가 필요함.
    const payload_parce = JSON.parse(payload)           // 오브젝트로 바꿔주는 코드/json 형태로 바꿔주는 코드
    console.log(payload_parce.email)                    // 바로 .email 붙이면, 이메일만 딱 콘솔창에 띄워짐.

    const intro = document.getElementById("intro")
    intro.innerText = payload_parce.email
}