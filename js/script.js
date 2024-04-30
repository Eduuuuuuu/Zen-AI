const button = document.getElementById('send--question')


const consultarGemini = () => {

    const keyGoogle = ''

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle

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
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const respostaTextIa = data.cadidates[0].content.parts[0].text
        respostaIa(respostaTextIa)
    })
    .catch (error => console.error('Error: ', error))
}

const respostaIa = (respostaTextIa) => {
    const textAreaPt = document.getElementById('answer-pt')
    textAreaPt.value = respostaTextIa
}



button.addEventListener('click', () => {
    //id do input que o usuario vai fazer a pergunta
    const question = document.getElementById('ask--user')
    consultarGemini(question)
})