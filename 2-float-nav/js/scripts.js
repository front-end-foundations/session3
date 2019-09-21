// scripts go here

// fetch(
//   'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0',
// )
//   .then(response => response.json())
//   .then(response => console.log(response.results));

const data = [
  {
    section: 'cuisines',
    story:
      'Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.',
  },
  {
    section: 'chefs',
    story:
      'Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.',
  },
  {
    section: 'reviews',
    story:
      'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.',
  },
  {
    section: 'delivery',
    story:
      'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.',
  },
];

const contentPara = document.querySelector('.content');
contentPara.innerHTML = data[0].story;

const tabs = document.querySelectorAll('.nav a');
tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
  makeInactive();
  event.target.classList.add('active');
  let activePage = document.querySelector('.active');
  let storyRef = activePage.dataset.story;
  // console.log(storyRef);

  for (let i = 0; i < data.length; i++) {
    if (data[i].section === storyRef) {
      // console.log(data[i].story);
      contentPara.innerHTML = data[i].story;
      makeHeader(storyRef);
    }
  }
  event.preventDefault();
}

function makeHeader(head) {
  const myHeader = document.createElement('h3');
  myHeader.innerText = head;
  console.log(myHeader);
  contentPara.prepend(myHeader);
}

function makeInactive() {
  tabs.forEach(tab => tab.classList.remove('active'));
}
