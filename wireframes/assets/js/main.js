function filterList(listName) {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById(listName);
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    if (listName =="queryList") {
        label = ul.getElementsByTagName('label');
        for (i = 0; i < label.length; i++) {
            txtValue = label[i].textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                label[i].style.display = "";
            } else {
                label[i].style.display = "none";
            }
        }
        }
}