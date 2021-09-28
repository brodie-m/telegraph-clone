const host = "fp-telegraph-clone.herokuapp.com"

addentry.addEventListener("click", () => {
  if (title.value != "" && pseudo.value != "" && entry.value != "") {
    const options = {
      body: JSON.stringify({
        title: title.value,
        name: pseudo.value,
        entry: entry.value,
      }),
    };
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
