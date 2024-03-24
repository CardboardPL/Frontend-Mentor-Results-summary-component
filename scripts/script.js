const summaryListElem = document.querySelector('#summaryList')

function fetchJSON() {
  fetch('../data.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach(item => {
        const itemMarkup = 
          `<li class="summary-list-item">
            <span>
              <img src=${item.icon} alt="Category icon" aria-hidden="true">
              <span class="item-name">${item.category}</span>
            </span>
            <span class="item-score">${item.score} <span>/ 100</span></span>
          </li>`

        summaryListElem.insertAdjacentHTML('beforeend', itemMarkup);
      })
    });
}

fetchJSON();