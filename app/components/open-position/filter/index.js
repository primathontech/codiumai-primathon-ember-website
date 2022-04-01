import Component from '@glimmer/component';

export default class OpenPositionFilterIndexComponent extends Component {
  get results() {
    let { data, query } = this.args;

    let ans = data;
    if (query) {
      if (query.keyword) ans = ans.filter((job) => job.title.includes(query.keyword));
      if (query.department) ans = ans.filter((job) => job.department == query.department);
      if (query.jobType) ans = ans.filter((job) => job.jobType == query.jobType);
    }
    return ans;
  }
}
