

// event listener oluşturma

button.addEventListener("click", ()=> {
    if(inputElement.value.trim() !== ""){
        const listItem = document.createElement("li")
        listItem.style.backgroundColor = "#f0f0f0"
        listItem.style.padding="8px"
        listItem.style.display ="flex"
        listItem.style.justifyContent ="space-between"
        listItem.style.width = "400px"
        const textSpan = document.createElement("span")
        textSpan.style.fontSize ="12px"
        textSpan.textContent = inputElement.value
    
        const deleteButton = document.createElement("button")
        deleteButton.textContent ="Sil"
        deleteButton.style.backgroundColor ="red"
        deleteButton.style.color ="white"
        deleteButton.style.cursor ="pointer"
    
        deleteButton.onclick = () => listItem.remove()
    
        listItem.appendChild(textSpan)
        listItem.appendChild(deleteButton)
        userList.appendChild(listItem)
        inputElement.value =""
   
    }

   
})



formContainer.appendChild(label)
formContainer.appendChild(inputElement)
formContainer.appendChild(button)
formContainer.appendChild(userList)
document.body.appendChild(formContainer)
