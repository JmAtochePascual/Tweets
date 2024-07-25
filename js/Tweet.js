class Tweet {
  #titulo;
  #id;

  constructor(titulo, id) {
    this.#titulo = titulo;
    this.#id = id;
  }

  getTweet() {
    return {
      titulo: this.#titulo,
      id: this.#id
    };
  }
}

export default Tweet;