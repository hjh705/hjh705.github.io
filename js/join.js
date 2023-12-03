const id = document.querySelector('input#id');
const pw = document.querySelector('input#pw');
const cPw = document.querySelector('input#cPw');
const email = document.querySelector('input#email');

class Member {
    constructor(id,pw,email){
        this.id = id;
        this.pw = pw;
        this.email = email;
    }
}

const saveMember = () => {
    const members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(new Member(id.value, pw.value, email.value))
    console.log(members);

    localStorage.setItem('members',JSON.stringify(members));

    id.value = '';
    pw.value = '';
    cPw.value = '';
    email.value = '';

    renderMembers();
}

const renderMembers = () => {
    const members = JSON.parse(localStorage.getItem("members")) || [];

    document.querySelector("table#memberList tbody").innerHTML =
    members.reduce((html,{id, email}, index) => {
        return`
        ${html}
        <tr>
            <td>${id}</td>
            <td>${email}</td>
        </tr>
        `
    }, "");
};

renderMembers();