export const fetchToken = async (id:string|undefined, secret:string|undefined, endpoint:string)=>{
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(id + ":" + secret))
    let body = new FormData();

    body.append("grant_type","client_credentials");
    const {access_token} = await fetch(endpoint,{
            method:"POST",
            headers: headers,
            body: body
    }).then(response=> response.json()).then(json=>json)
    console.log(access_token);
    return access_token;
}