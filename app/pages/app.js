import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import unfetch from "unfetch";
import Card from "../components/card";
import { Wrapper } from "./styled/app.styled";

export default class App extends Component {
  static async getInitialProps() {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "text/plain" }
    });
    const joke = await res.text();

    return { jokes: [joke], joke: 0 };
  }

  state = { jokes: [], joke: 0 };

  componentDidMount() {
    if (!this.props.jokes) {
      unfetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "text/plain" }
      })
        .then(res => res.text())
        .then(joke => this.setState({ jokes: [joke], joke: 0 }));
    }
  }

  fetchJoke() {
    unfetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "text/plain" }
    })
      .then(res => res.text())
      .then(joke =>
        this.setState(({ jokes }) => {
          jokes.push(joke);

          return { jokes, joke: jokes.length - 1 };
        })
      );
  }

  getPreviousJoke() {
    this.setState(({ joke }) => ({ joke: Math.max(0, joke - 1) }));
  }

  getNextJoke() {
    if (this.state.jokes.length - 1 === this.state.joke) {
      return this.fetchJoke();
    }

    this.setState(({ jokes, joke }) => ({
      joke: Math.min(jokes.length, joke + 1)
    }));
  }

  render() {
    const jokes =
      this.state.jokes.length < 1 ? this.props.jokes : this.state.jokes;

    if (!jokes) return null;

    const currentJoke = jokes[this.state.joke];

    return (
      <Wrapper>
        <Card
          getNextJoke={this.getNextJoke.bind(this)}
          getPreviousJoke={this.getPreviousJoke.bind(this)}
          jokeCount={this.state.jokes.length}
          currentJoke={this.state.joke + 1}
        >
          {currentJoke}
        </Card>
      </Wrapper>
    );
  }
}
