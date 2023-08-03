document.addEventListener('DOMContentLoaded', function() {
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let popup = document.getElementById('popup');
    let form = document.querySelector(".form");
    let saveBtn = document.getElementById('save');

    let isEditing = false; 
    let editIndex = -1; 
    function updateFormData(index, editedData) {
        formData[index] = editedData;
        localStorage.setItem("formData", JSON.stringify(formData));
    }

    function toggleEditMode(index) {
        isEditing = !isEditing;
        editIndex = isEditing ? index : -1;
        saveBtn.innerHTML = isEditing ? "Update" : "Save";
    }

    saveBtn.addEventListener("click", function(event) {
        event.preventDefault();
        let inputText = document.getElementById('title').value;
        let desc = document.getElementById('description').value;
        let data = {
            title: inputText,
            description: desc
        };

        if (isEditing) {
            if (editIndex > -1) {
                updateFormData(editIndex, data);
                toggleEditMode(-1);
            }
        } else {
            formData.push(data);
            localStorage.setItem("formData", JSON.stringify(formData));
        }

        console.log(formData);

        document.getElementById('title').value = "";
        document.getElementById('description').value = "";

        displayFormData();
    });

    function displayFormData() {
        const storedData = localStorage.getItem("formData");
        if (storedData) {
            formData = JSON.parse(storedData);
            const titleDisplayContainer = document.getElementById("titleDisplay");
            titleDisplayContainer.innerHTML = "";

            formData.forEach((data, index) => {
                let div = document.createElement("div");
                div.innerHTML = "Title: " + data.title;
                let dltBtn = document.createElement("button");
                dltBtn.innerHTML = "Delete";
                titleDisplayContainer.appendChild(div);
                titleDisplayContainer.appendChild(dltBtn);

                dltBtn.addEventListener('click', () => {
                    formData.splice(index, 1);
                    localStorage.setItem("formData", JSON.stringify(formData));
                    displayFormData();
                });

                div.addEventListener('click', (e) => {
                    e.preventDefault();
                    displayPopupData(data, index);
                });
            });
        }
    }

    function displayPopupData(data, index) {
        let para1 = document.createElement('h1');
        let para2 = document.createElement('p');
        let close = document.createElement('p');
        let btn = document.createElement('button');
        btn.innerHTML = "Edit";
        para1.innerHTML = data.title;
        close.innerHTML = "x";
        close.setAttribute("id", "close");
        para2.innerHTML = data.description;
        popup.innerHTML = "";
        popup.appendChild(close);
        popup.appendChild(para1);
        popup.appendChild(para2);
        popup.appendChild(btn);
        popup.style.display = "block";
        close.addEventListener("click", () => {
            popup.style.display = "none";
        });
        btn.addEventListener("click", () => {
            popup.style.display = "none";
            document.getElementById('title').value = data.title;
            document.getElementById('description').value = data.description;
            toggleEditMode(index);
        });
    }
    displayFormData();
});
