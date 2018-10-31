function easyHTTP() {
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function()   {
        if (self.http.status === 200)   {
            callback(null, self.http.responseText);
        }
        else    {
            callback(`Error: ${self.http.status}`, null);
        }
    }
    this.http.send();
}

easyHTTP.prototype.post = function(url, payload, callback)    {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;

    this.http.onload = function()    {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(payload));
}

easyHTTP.prototype.put = function(url, payload, callback)    {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;

    this.http.onload = function()    {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(payload));
}

easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function()   {
        if (self.http.status === 200)   {
            callback(null, 'Post deleted');
        }
        else    {
            callback(`Error: ${self.http.status}`, null);
        }
    }
    this.http.send();
}
