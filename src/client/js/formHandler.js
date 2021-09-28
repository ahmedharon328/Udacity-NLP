
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article-url').value
    // console.log(formText)
    if(Client.CheckURL(formText)){
        url('http://localhost:8085/clouds',{formText})
        .then((data) => updateUI(data))    
    }else{
        alert('Sorry Cant find that URl')
    }
}

const url = async (url='',data={})=>{
    const response = await fetch (url,{
        method :"POST",
        credentials: 'same-origin',
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    })
    try{
        const newData = await response.json()
        return newData
    }catch(err){
        console.log(err)
    }
}

const updateUI = (data)=>{
    document.getElementById('model').innerHTML =  data.model 
    document.getElementById('agreement').innerHTML = data.agreement
    document.getElementById('subjectivity').innerHTML = data.subjectivity
    document.getElementById('confidence').innerHTML = data.confidence
    document.getElementById('irony').innerHTML = data.irony
    document.getElementById('score_tag').innerHTML = data.score_tag
}

export { handleSubmit }
