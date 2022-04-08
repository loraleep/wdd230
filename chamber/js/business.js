const requestURL = 'http://127.0.0.1:5500/chamber/data.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

.then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });



function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let telephone = document.createElement('p')
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${title}`;

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${title} Latter-day President Number ${prophet.order}`);
    portrait.setAttribute('loading', 'lazy');
    address.textContent = `Birth Date: ${prophet.address}`;
    telephone.textContent = `Birth Place: ${prophet.telephone}`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(telephone);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }