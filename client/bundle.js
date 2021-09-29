(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const host = "fp-telegraph-clone.herokuapp.com"
const clientURL = window.location.href
const clientURLArray = clientURL.split('/')
const title = document.getElementById('title')
const pseudo = document.getElementById('pseudo');
const entry = document.getElementById('entry');




addentry.addEventListener("click", async () => {
  console.log(title.value,pseudo.value,entry.value)
  if (title.value != "" && pseudo.value != "" && entry.value != "") {
    const options = {
      "method": 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        title: title.value,
        author: pseudo.value,
        body: entry.value,
      }),
    };
    console.log(options)
    await fetch(`https://${host}/add-post`, options).then((res) => {
      console.log(res)
      redirectToPost()
    });
    //trigger success message and redirect - grab id of most recent post and send client there
  } else {
    alert("Please complete the form.");
  }
});

async function redirectToPost() {
  const allPosts = await (await fetch(`https://${host}/all-posts`)).json()
  const recentPost = await allPosts[allPosts.length-1]
  const recentPostId = await recentPost._id;
  window.location.href = `./#single-post-${recentPostId}`
  
  
}



revealall.addEventListener("click", (e) => {
  e.preventDefault();
  newentry.hidden = false;
});

cancel.addEventListener("click", (e) => {
  newentry.hidden = true;
  for(let o of inputs.children){o.value = ""}
});


function renderPost() {
  const hash = window.location.hash
  const hashArr = hash.split('-')
  const postId = hashArr[hashArr.length-1]
  getPostData(postId)
}

async function getPostData(postId) {
  const data = await fetch(`https://${host}/single-post/${postId}`)
  const json = await data.json()
  renderSinglePost(json);
}
function renderSinglePost(data) {
  const container = document.createElement('div')
  const postTitle = document.createElement('h1')
  const postAuthor = document.createElement('h2')
  const postBody = document.createElement('p')
  container.appendChild(postTitle)
  container.appendChild(postAuthor)
  container.appendChild(postBody)
  postTitle.textContent = data.title;
  postAuthor.textContent = data.author;
  postBody.textContent = data.body;

}




},{}]},{},[1]);
