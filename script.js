var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleLinkView");
    const folderView = document.querySelector(".folder-view-container");
    const listView = document.querySelector(".folder-list-container");
    folderView.classList.remove("d-none");
    listView.classList.add("d-none");
    toggleButton.innerHTML = '<i class="fa-solid fa-table-cells fs-5"></i>';
    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (folderView.classList.contains("d-none")) {
            folderView.classList.remove("d-none");
            listView.classList.add("d-none");
            toggleButton.innerHTML = '<i class="fa-solid fa-table-cells fs-5"></i>';
        } else {
            folderView.classList.add("d-none");
            listView.classList.remove("d-none");
            toggleButton.innerHTML = '<i class="fa-solid fa-list fs-5"></i>';
        }
    });
});