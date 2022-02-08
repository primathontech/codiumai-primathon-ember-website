import Route from '@ember/routing/route';

export default class OpenPositionRoute extends Route {
  async model() {
    const jobData = await (await fetch('https://primathon.in/blog/wp-json/wp/v2/jobs_posting')).json();
    console.log(jobData);
    return jobData;
  }
  afterModel() {
    window.scrollTo(0, 0);
  }
}
