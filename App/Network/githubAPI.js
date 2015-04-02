var githubUtils = {
  getBio: function(username){
    var url = "https://api.github.com/users/" + username;
    return fetch(url);
  },
  getRepos: function(username){
    var url = "https://api.github.com/users/" + username + "/repos";
    return fetch(url);
  }
};

module.exports = githubUtils;