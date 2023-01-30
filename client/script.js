const dropzone = document.querySelector('#drop-zone')


$.ajax({
    method: 'GET',
    url: 'https://www.boredapi.com/api/activity',

}).done((data) => addCard(data))



const addCard = (data) => {
 $('.card').html( ` <h2>${data.activity}</h2>
 <div class="details">
     <h6 class="type pip">${data.type}</h6>
     <h6 class="price pip">${data.price}</h6>
     <h6 class="access pip">${data.accessibility}</h6>
     <h6 class="parti pip">${data.participants}</h6>
 </div>`)
}


['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((event) => {
    dropzone.addEventListener(event, (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
});


dropzone.addEventListener('drop', (e) => {
    const file = e.dataTransfer.files[0]

    fileManager2(file)
})


const fileManager1 = (file) => {
    const filereader = new FileReader()

    filereader.readAsDataURL(file)


    filereader.onload = () => {
        const f = this.result;
        console.log(f)

        call(f)
    }
}

const fileManager2 = (file) => {
    const imageForm = new FormData()

    imageForm.append('file',file,file.name)

    call(imageForm)
}

const call = async (payload) => {

    const response = await fetch('http://localhost:8000/upload',{
        method:'POST',
        body:JSON.stringify({
            payload:payload
        }),
        headers:{
            "Content-Type": "application/json"
        }
    })

    const result = await response.json()

    console.log(result)

}





