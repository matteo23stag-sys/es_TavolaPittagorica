// Tavola pitagorica: crea una tabella HTML con i prodotti da 1 a n

function creaCella(tipo: "th" | "td", testo: string): HTMLTableCellElement {
  const cella: HTMLTableCellElement = document.createElement(tipo);
  cella.textContent = testo;
  return cella;
}

function creaTavola(n: number): HTMLTableElement {
  const tabella: HTMLTableElement = document.createElement("table");

  // Prima riga: angolo con il simbolo × e i numeri da 1 a n
  const intestazione: HTMLTableRowElement = document.createElement("tr");
  intestazione.appendChild(creaCella("th", "×"));
  for (let colonna = 1; colonna <= n; colonna++) {
    intestazione.appendChild(creaCella("th", String(colonna)));
  }
  tabella.appendChild(intestazione);

  // Righe successive: il numero di riga e poi i prodotti
  for (let riga = 1; riga <= n; riga++) {
    const tr: HTMLTableRowElement = document.createElement("tr");
    tr.appendChild(creaCella("th", String(riga)));

    for (let colonna = 1; colonna <= n; colonna++) {
      const td: HTMLTableCellElement = creaCella("td", String(riga * colonna));
      if (riga === colonna) {
        td.classList.add("quadrato"); // evidenzia la diagonale: 1, 4, 9, 16...
      }
      tr.appendChild(td);
    }
    tabella.appendChild(tr);
  }

  return tabella;
}

const contenitore: HTMLElement | null = document.getElementById("tavola");
if (contenitore !== null) {
  contenitore.appendChild(creaTavola(10));
}
