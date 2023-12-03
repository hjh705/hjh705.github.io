function showJoin() {
    var iframe = document.getElementById('joinWindow');
    var isVisible = iframe.style.opacity === '1';
    
    if(isVisible){
        iframe.style.opacity = '0';
        iframe.style.left = '-9999px';
    } else {
        iframe.style.opacity = '1';
        iframe.style.left = '10%';
    }
}

