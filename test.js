document.addEventListener('DOMContentLoaded', function() {
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let popup=document.getElementById('popup');
    let form=document.getElementById("myForm")
    let saveBtn=document.getElementById('save');
    saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let inputtext=document.getElementById('title').value;
    let desc=document.getElementById('description').value;
    Data={
        title:inputtext,
        description:desc
    };
    formData.push(Data);

    console.log(formData);

    localStorage.setItem("formData", JSON.stringify(formData));
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
});

function displayPopupData(data) {
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
    });
  }

saveBtn.addEventListener("click", function() {
  const storedData = localStorage.getItem("formData");
  if (storedData) {
    formData = JSON.parse(storedData);
    const titleDisplayContainer = document.getElementById("titleDisplay");
    titleDisplayContainer.innerHTML = "";

      formData.forEach(data => {
        let div = document.createElement("div");
        div.innerHTML = "Title: " + data.title;
        let dltBtn = document.createElement("button");
        dltBtn.innerHTML = "Delete";
        titleDisplayContainer.appendChild(div);
        titleDisplayContainer.appendChild(dltBtn);

        dltBtn.addEventListener('click', () => {
          
          const index = formData.findIndex(item => item.title === data.title && item.description === data.description);
          if (index > -1) {
            formData.splice(index, 1);
            localStorage.setItem("formData", JSON.stringify(formData));
          }

          titleDisplayContainer.removeChild(div);
          titleDisplayContainer.removeChild(descrip);
          titleDisplayContainer.removeChild(dltBtn);
        });
        div.addEventListener('click', (e) => {
          e.preventDefault();
          displayPopupData(data);
        });
      });
    }
});
})
