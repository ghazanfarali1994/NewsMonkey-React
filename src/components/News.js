import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  // articles= [
  //   {
  //   "source": {
  //   "id": "reuters",
  //   "name": "Reuters"
  //   },
  //   "author": null,
  //   "title": "Why are Peruvian politics such a mess? Inside the halls of its Congress",
  //   "description": "As deadly protests rage across Peru, a political battle is unfolding inside the halls of Congress, walled off from the streets by hundreds of police, armored vehicles and a maze of gates.",
  //   "url": "https://www.reuters.com/world/americas/why-are-peruvian-politics-such-mess-inside-halls-its-congress-${this.props.pageSize}23-02-04/",
  //   "urlToImage": "https://www.reuters.com/resizer/jr3-I7Dgdaz82LEKlXavGRJN-BI=/1${this.props.pageSize}0x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DVEZDDT625KWDKCZXFH5YRUK4I.jpg",
  //   "publishedAt": "${this.props.pageSize}23-02-04T11:06:24Z",
  //   "content": "LIMA, Feb 4 (Reuters) - As deadly protests rage across Peru, a political battle is unfolding inside the halls of Congress, walled off from the streets by hundreds of police, armored vehicles and a ma… [+4867 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "newsweek",
  //   "name": "Newsweek"
  //   },
  //   "author": "Jason Nichols",
  //   "title": "Newsweek",
  //   "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
  //   "url": "https://www.newsweek.com/",
  //   "urlToImage": "https://d.newsweek.com/en/full/2177067/comp-image-military-cadets-putin.jpg",
  //   "publishedAt": "${this.props.pageSize}23-01-12T13:22:38.0882552Z",
  //   "content": null
  //   },
  //   {
  //   "source": {
  //   "id": "the-washington-times",
  //   "name": "The Washington Times"
  //   },
  //   "author": "The Washington Times https://www.washingtontimes.com",
  //   "title": "Latest Quizzes",
  //   "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
  //   "url": "https://www.washingtontimes.com/quiz/",
  //   "urlToImage": null,
  //   "publishedAt": "${this.props.pageSize}22-08-30T16:37:43.8583104Z",
  //   "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "the-american-conservative",
  //   "name": "The American Conservative"
  //   },
  //   "author": null,
  //   "title": "Politics Archives - The American Conservative",
  //   "description": null,
  //   "url": "https://www.theamericanconservative.com/category/politics/",
  //   "urlToImage": null,
  //   "publishedAt": "${this.props.pageSize}22-07-07T21:37:27.3936289Z",
  //   "content": null
  //   },
  //   {
  //   "source": {
  //   "id": "usa-today",
  //   "name": "USA Today"
  //   },
  //   "author": null,
  //   "title": "Daily Briefing",
  //   "description": "The day's top stories, from sports to movies to politics to world events.",
  //   "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
  //   "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
  //   "publishedAt": "${this.props.pageSize}21-08-15T15:35:07+00:00",
  //   "content": "The day's top stories, from sports to movies to politics to world events."
  //   },
  //   {
  //   "source": {
  //   "id": "the-jerusalem-post",
  //   "name": "The Jerusalem Post"
  //   },
  //   "author": null,
  //   "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
  //   "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
  //   "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
  //   "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article${this.props.pageSize}16_ControlFaceDetect/448812",
  //   "publishedAt": "${this.props.pageSize}19-11-13T04:41:00Z",
  //   "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
  //   }
  //   ]

  constructor() {
    super();
    console.log("Hello i am a constructor");
    this.state = {
      // articles: this.articles, //to load articles  from above array
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=405dd9e5508b412b911829a863abdb46&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=405dd9e5508b412b911829a863abdb46&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=405dd9e5508b412b911829a863abdb46&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          { !this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
