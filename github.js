class Github {
  constructor() {
    this.client_id = '938603a89df5ff13241c';
    this.client_secret = 'a4cfaeb029358beafdbd2e524dd3f31329a2723f';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {

    //Get profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //Get repos 
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
   
    const repos = await repoResponse.json();
    return {
      profile,
      repos //if the values are same here, you can just use one word
    }
  }
}