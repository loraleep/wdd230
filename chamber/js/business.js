const requestURL = 'https://loraleep.github.io/wdd230/chamber/data.json';


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
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p')
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} Latter-day President Number ${prophet.order}`);
    portrait.setAttribute('loading', 'lazy');
    birthDate.textContent = ` ${prophet.birthdate}`;
    birthPlace.textContent = ` ${prophet.birthplace}`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }