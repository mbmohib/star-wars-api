function getData(url) {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'json';

        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText))
            }
        }

        request.onerror = () => {
            reject(Error('Network Error!'))
        }

        request.send();
    })
}

export default getData;