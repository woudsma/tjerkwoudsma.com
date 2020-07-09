/* eslint-disable no-return-await, camelcase */
import "./scss/Posts.scss";
import React, { Component } from "react";
import classNames from "classnames";
import axios from "axios";
import Post from "./Post";

const { REACT_APP_API_URL: API_URL, REACT_APP_API_KEY: API_KEY } = process.env;

const ENDPOINT = `${API_URL}/v2/blog/wousma.tumblr.com/posts?api_key=${API_KEY}`;

class Posts extends Component {
  state = {
    posts: [],
    next: undefined,
    photos: [],
    image_url: undefined,
    image_index: undefined,
    maximized: false,
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.nextPage();
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  nextPage = async () => {
    const { next, posts } = this.state;
    const url = posts.length === 0 && next === undefined ? ENDPOINT : next;
    return (
      (next || url) &&
      (await axios.get(url).then(({ data: { response } }) =>
        this.setState({
          posts: posts.concat(response.posts),
          next: response._links
            ? `${API_URL}${response._links.next.href}&api_key=${API_KEY}`
            : undefined,
        })
      ))
    );
  };

  handleScroll = (e) => {
    if (document.body.scrollHeight - window.scrollY < 7500) {
      this.nextPage();
    }
  };

  nextImage = (e) => {
    if (e.keyCode === 27) return this.minimize();
    const { image_index, photos } = this.state;
    const index =
      e.keyCode === 39
        ? (image_index + 1) % photos.length
        : e.keyCode === 37 && image_index - 1 < 0
        ? photos.length - 1
        : image_index - 1;
    this.setState({
      image_url: photos[index].original_size.url,
      image_index: index,
    });
  };

  maximize = (photos, index) => {
    window.addEventListener("keydown", this.nextImage);
    this.setState({
      photos,
      image_url: photos[index].original_size.url,
      image_index: index,
      maximized: true,
    });
  };

  minimize = () => {
    window.removeEventListener("keydown", this.nextImage);
    this.setState({
      photos: [],
      image_url: undefined,
      image_index: undefined,
      maximized: false,
    });
  };

  render() {
    const { posts, maximized, image_url } = this.state;
    const postsClass = classNames("Posts", { maximized });

    return (
      <div className={postsClass}>
        {posts.length && <p>Sketchbook</p>}
        {posts.map((post) => (
          <Post key={post.id} {...post} maximize={this.maximize} />
        ))}
        {maximized && image_url && (
          <div className="overlay" onClick={this.minimize}>
            <img className="maximized" src={image_url} />
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
