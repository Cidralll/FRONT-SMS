export default async function SendMsg(/*message: string, number: string*/) {
    console.log(process.env.REACT_APP_MENSSAGE_SMS)
    let form = {
        "message": `${process.env.REACT_APP_MENSSAGE_SMS}`,
        "number": `${process.env.REACT_APP_NUMBER_SMS}`
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
    let request = await fetch(`${process.env.REACT_APP_API_URL}` , {
        method: 'POST',
        body: JSON.stringify(form),
        headers: new Headers({
            'Content-Type': 'Application/Json'
        })
    })
    return request['status'];
}