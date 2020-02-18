async function suutiZinju() {
    // Nolasa ievades lauka saturu
    let sk1Elem = document.getElementById("sk1");
    let sk2Elem = document.getElementById("sk2");
    let darbElem = document.getElementById("darb");
    let sk1 = sk1Elem.value;
    let sk2 = sk2Elem.value;
    let darb = darbElem.value;
    // izdzēš ievades lauku
    sk1Elem.value = "";
    sk2Elem.value = "";
    darbElem.value = "";

    const atbilde = await fetch('/calc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "sk1": sk1, "sk2":sk2, "darb":darb })
    });
    const datuObjekts = await atbilde.json();
    paraditRezultatu(datuObjekts);
}

function paraditRezultatu(dati) {
    var rezDiv = document.getElementById("rezultats");
    rezDiv.innerHTML = "<p>Rezultats " + dati["rez"] + "</p>";
}