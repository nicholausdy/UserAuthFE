const fetch = require('node-fetch'); //delete this on deployment


async function publicPostAPI(url = '', data = {}) {
    let result = {Status:'',Message:''}
    try {
        const response = await fetch(url, {
        method:'POST',
        mode: 'cors',
        cache: 'default',
        credentials:'omit',
        headers: {
            'Content-Type':'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
        });
        result = response.json();
    }
    catch (e) {
        result.Status = 'Failed'
        result.Code = 500
        result.Message = 'Fetch failed to get API response'
        result.Detail = e
    }
    finally {
        return result
    }
}

async function publicPutAPI(url = '', data = {}) {
    let result = {Status:'',Message:''}
    try {
        const response = await fetch(url, {
        method:'PUT',
        mode: 'cors',
        cache: 'default',
        credentials:'omit',
        headers: {
            'Content-Type':'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
        });
        result = response.json();
    }
    catch (e) {
        result.Status = 'Failed'
        result.Code = 500
        result.Message = 'Fetch failed to get API response'
        result.Detail = e
    }
    finally {
        return result
    }
}

async function privateGetAPI(url = '', access_token){
    let result = {Status:'',Message:''}
    try {
        const response = await fetch(url, {
        method:'GET',
        mode: 'cors',
        cache: 'default',
        credentials:'omit',
        headers: {
            'Authorization': access_token
        },
        redirect: 'follow',
        });
        result = response.json();
    }
    catch (e) {
        result.Status = 'Failed'
        result.Code = 500
        result.Message = 'Fetch failed to get API response'
        result.Detail = e
    }
    finally {
        return result
    }
}

async function privatePutAPI(url = '', access_token, data = {}) {
    let result = {Status:'',Message:''}
    try {
        const response = await fetch(url, {
        method:'PUT',
        mode: 'cors',
        cache: 'default',
        credentials:'omit',
        headers: {
            'Content-Type':'application/json',
            'Authorization': access_token
        },
        redirect: 'follow',
        body: JSON.stringify(data)
        });
        result = response.json();
    }
    catch (e) {
        result.Status = 'Failed'
        result.Code = 500
        result.Message = 'Fetch failed to get API response'
        result.Detail = e
    }
    finally {
        return result
    }
}

module.exports = {
    publicPostAPI : publicPostAPI,
    publicPutAPI : publicPutAPI,
    privateGetAPI : privateGetAPI, 
    privatePutAPI : privatePutAPI,
}

