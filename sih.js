function herbal_plants() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let herbs = document.getElementsByClassName('herbs');

    for (let i = 0; i < herbs.length; i++) {
        if (!herbs[i].innerHTML.toLowerCase().includes(input)) {
            herbs[i].style.display = "none";
        } else {
            herbs[i].style.display = "list-item";
            herbs[i].onclick = function() {
                let herbName = herbs[i].innerHTML.toLowerCase().replace(/\s+/g, '');
                window.location.href = herbName + ".html";
            };
        }
    }
}
