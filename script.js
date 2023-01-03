function createCardElement(title, description, image_url, image_description) {
  let card_el = document.createElement("article");
  card_el.classList.add("card", "mb-2", "me-4");

  let img_el = createImage(image_url, image_description);
  img_el.classList.add("card-img-top");

  let card_body_el = document.createElement("div");
  card_body_el.classList.add("card-body");

  let title_el = document.createElement("h5");
  title_el.textContent = title;
  title_el.classList.add("card-title");

  let text_el = document.createElement("p");
  text_el.classList.add("card-text");
  text_el.textContent = description;

  card_body_el.appendChild(title_el);
  card_body_el.appendChild(text_el);

  card_el.appendChild(img_el);
  card_el.appendChild(card_body_el);

  return card_el;
}

function createImage(url, description) {
  let el;
  if (url && description) {
    el = document.createElement("img");
    el.src = url;
    el.alt = description;
  } else {
    el = document.createElement("div");
    el.classList.add("img-sample");
  }
  return el;
}

function createSampleCard(){
    return createCardElement('Carregando...', '...')
}