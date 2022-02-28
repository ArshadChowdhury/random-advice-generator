const fetchData = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  var advice_number = document.getElementById("adviceNumber");
  advice_number.innerText = `ADVICE #${data.slip.id}`;
  var advice_text = document.getElementById("adviceText");
  advice_text.innerText = `“${data.slip.advice}”`;
};

fetchData();
