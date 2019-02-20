// scripts go here

var cuisines =
  'Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.';

var chefs =
  'Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.';

var reviews =
  'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.';

var delivery =
  'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.';

var tabs = document.querySelectorAll('.nav a');

tabs.forEach(function(tab) {
  tab.addEventListener('click', makeActive);
});

function makeActive() {
  console.log(this.href);
  makeInactive();
  event.target.classList.add('active');
  if (this.href.includes('cuisines')) {
    contentPara.innerHTML = cuisines;
  } else if (this.href.includes('chefs')) {
    contentPara.innerHTML = chefs;
  } else if (this.href.includes('reviews')) {
    contentPara.innerHTML = reviews;
  } else if (this.href.includes('delivery')) {
    contentPara.innerHTML = delivery;
  }
  event.preventDefault();
}

function makeInactive() {
  tabs.forEach(tab => tab.classList.remove('active'));
}

var contentPara = document.querySelector('.content');
contentPara.innerHTML = cuisines;