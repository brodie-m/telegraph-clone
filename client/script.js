const host = "fp-telegraph-clone.herokuapp.com"
const clientURL = window.location.href
const clientRouter = require('./routing')
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
  console.log(recentPost,recentPostId)
  console.log(clientURL)
  window.location.href = `./html/single-post.html`
  console.log(clientURL)
  
}
