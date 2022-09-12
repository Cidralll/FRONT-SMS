export default async function SendMsg(/*message: string, number: string*/) {
    let form = {
        "message": `Oi amor da minha vida!`,
        "number": `996263374`
    }

    let response = await sendRequest(form);
    let statusCode = (response);
    if(statusCode === 400){
        console.log('Error')
    }else if(statusCode === 500) {
        console.log('Error')
    }else if(statusCode === 201){
        return alert('Send MSG')
    }
}

async function sendRequest(form: any): Promise<Object> {
    let request = await fetch("http://localhost:3030/send", {
        method: 'POST',
        body: JSON.stringify(form),
        headers: new Headers({
            'Content-Type': 'Application/Json'
        })
    })
    return request['status'];
}