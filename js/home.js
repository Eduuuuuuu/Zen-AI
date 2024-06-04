const button = document.getElementById('send')

const Traducao = document.getElementById('traducao')



const consultaGemini = (question) => {

    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle;


    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(requestData)
    }

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const responseTextIa = data.candidates[0].content.parts[0].text
        respostaIa(responseTextIa)
    })
    .catch(error => console.error('Error: ', error))
}



const textAreaPt = document.getElementById('answer-pt')
const respostaIa = (responseTextIa) => {
    textAreaPt.value = responseTextIa
}


function translate(){
    fetch(`https://api.mymemory.translated.net/get?q=${textAreaPt.value}&langpair=en`)
    .then((response) => response.json())
    .then((data) => {
        console.log(textAreaPt.value)
        console.log(data);
        Traducao.value = data})
    }



button.addEventListener('click', () => {
    const question = document.getElementById('ask').value
    consultaGemini(question)
    translate(textAreaPt.value)
})