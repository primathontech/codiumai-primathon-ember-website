import Service from '@ember/service';
import fetch from 'fetch';

export default class ApiService extends Service {
  _API_HOST = 'https://prima-api.primathon.in';

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

  async sendCareerMail(payload) {
    return await this.request(`/career`, this.requestOptionDefaults(payload));
  }
}
