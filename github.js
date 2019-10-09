class Github {
  constructor() {
    this.client_id = '938603a89df5ff13241c';
    this.client_secret = 'a4cfaeb029358beafdbd2e524dd3f31329a2723f';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile //if the values are same here, you can just use one word
    }
  }
}