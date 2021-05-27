import React from "react";
import Search from "../../components/search";
import Card from "../../components/Cards";
import fetch from "node-fetch";
import Layout from "../../layouts";
import Skeleton from "../../components/ローディング";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setJobs = this.setJobs.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.renderSkeleton = this.renderSkeleton.bind(this);
    this.state = {
      jobs: [],
      isLoading: true,
    };
  }

  setJobs(jobs) {
    this.setState({ jobs });
  }

  setIsLoading(isLoading) {
    this.setState({
      isLoading,
    });
  }

  renderSkeleton() {
    return (
      <div className="p-8 pt-0 mx-auto bg-white rounded-md shadow animate-pulse w-76 md:w-full min-h-card">
        <div className="text-white font-brand font-bold absolute grid w-12 h-12 p-2 transform -translate-y-1/2 place-items-center rounded-2xl bg-gray-400"></div>
        <div className="flex items-center pt-12 text-base font-normal leading-5 text-dark-grey font-brand">
          <p className="w-6/12 h-4 bg-gray-400 rounded" />
        </div>
        <div className="mt-3">
          <h2 className="w-8/12 h-4 text-lg font-bold leading-6 bg-gray-400 rounded font-brand text-very-dark-blue">
            {" "}
          </h2>
        </div>
        <div>
          <p className="w-5/12 h-4 mt-3 text-base font-normal leading-5 bg-gray-400 rounded font-brand text-dark-grey"></p>
        </div>
        <div>
          <p className="w-3/12 h-4 mt-10 text-sm font-bold bg-gray-400 rounded font-brand text-violet"></p>
        </div>
      </div>
    );
  }
  getArticles(callback) {
    var u = "http://rec-lab.work/articles";
    var x = new XMLHttpRequest();
    x.open("GET", u, true);
    x.send();
    x.onload = function (r) {
      callback(r);
    };
  }

  componentDidMount() {
    var cb = (r) =>
      this.setState({
        jobs: JSON.parse(r.currentTarget.responseText),
        isLoading: false,
      });
    var R = function (r) {
      cb(r);
    };
    this.getArticles(R);
  }

  render() {
    return (
      <Layout>
        <Search setJobs={this.setJobs} setIsLoading={this.setIsLoading} />
        {this.state.isLoading && <Skeleton />}
        {this.state.jobs.length && (
          <div className="dark:bg-midnight bg-normal-grey grid grid-cols-1 px-6 pt-4 gap-x-3 xl:gap-x-8 gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {this.state.jobs.map((job) => (
              <Card key={job.id} job={job} />
            ))}
          </div>
        )}
      </Layout>
    );
  }
}

export default App;
