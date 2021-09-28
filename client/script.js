const host = "fp-telegraph-clone.herokuapp.com"
const title = document.getElementById('title')
const pseudo = document.getElementById('pseudo');
const entry = document.getElementById('entry');


addentry.addEventListener("click", () => {
  console.log(title.value,pseudo.value,entry.value)
  if (title.value != "" && pseudo.value != "" && entry.value != "") {
    const options = {
      "method": 'POST',
      "Content-Type": "application/json",
      "body": JSON.stringify({
        title: title.value,
        author: pseudo.value,
        body: entry.value,
      }),
    };
    console.log(options)
    fetch(`https://${host}/add-post`, options).then((res) => alert(res.msg));
  } else {
    alert("Please complete the form.");
  }
});

revealall.addEventListener("click", (e) => {
  e.preventDefault();
  newentry.hidden = false;
});

cancel.addEventListener("click", (e) => {
  newentry.hidden = true;
  for(let o of inputs.children){o.value = ""}
});
