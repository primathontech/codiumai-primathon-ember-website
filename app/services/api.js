import Service from '@ember/service';

export default class ApiService extends Service {
  // _API_HOST = 'https://prima-api.primathon.in';
  _API_HOST = 'https://rkd48nybcl.execute-api.us-east-1.amazonaws.com/dev';

  async request(url, data) {
    const res = await fetch(`${this._API_HOST}${url}`, data);

    if (!res.ok) {
      throw res;
    }

    return await res.json();
  }

  requestOptionDefaults(data = {}, headers = {}) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    };
  }

  async sendContactMail(payload) {
    return await this.request(`/contact`, this.requestOptionDefaults(payload));
  }
}
