addentry.addEventListener("click", () => {
  if (title.value != "" && pseudo.value != "" && entry.value != "") {
    const options = {
      body: JSON.stringify({
        title: title.value,
        name: pseudo.value,
        entry: entry.value,
      }),
    };
    fetch(`${host}/new`, options).then((res) => alert(res.msg));
  } else {
    alert("Please complete the form.");
  }
});
