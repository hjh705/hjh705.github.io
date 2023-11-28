document.querySelector('input#id').addEventListener('blur', (e) => {
    const id = e.target.value;
    const regexps = [/^.{5,10}$/];

    // console.log('input#id.value');
    if(!regexps[0].test(id)){
        alert('아이디는 5자 이상, 10자 이하여야만 합니다.')
        return;
    }
});

document.querySelector('input#pw').addEventListener('blur', (e) =>{

});