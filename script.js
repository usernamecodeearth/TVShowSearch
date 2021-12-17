const form = document.querySelector('#searchForm');
const nameHere = document.querySelector('#nameHere');
const desc = document.querySelector('#titlesWithName')


form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const userSearch = form.elements.query.value;
  //query is what we named the form input
  const config = { params: { q: userSearch } }
  const resp = await axios.get('https://api.tvmaze.com/search/shows',config)
  const showImg = resp.data[0].show.image.medium;
  displayShows(resp.data);
  
  
})


const displayShows = (shows) => {
  for (let results of shows) {
    if (results.show.image.medium) {
      const newImg = document.createElement('img')
      newImg.src = results.show.image.medium
      document.body.append(newImg)
    }
  }
}

form.addEventListener('submit', () => {
  desc.classList.remove('noDisplay');
  nameHere.innerHTML = form.elements.query.value
})
