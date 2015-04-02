var api = {
  getBio(username){
    var url = `https://api.github.com/users/${username}`;
    return fetch(url);
  },
  getRepos(username){
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url);
  },
  getNotes(username){
    var url = `https://github-note-taker.firebaseio.com/notes/${username}.json`;
    return fetch(url);
  },
  addNote(username, note){
    var url = `https://native-gh-notetaker.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    });
  }
};

module.exports = api;