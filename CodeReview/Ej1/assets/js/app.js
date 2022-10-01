const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementsByClassName('name');
const $b = document.getElementsByClassName('blog');
const $l = document.getElementsByClassName('location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response =
  await fetch(`${usersEndpoint}/${username}`)
  .then((response)=> response.json())
  .then((data)=>console.log(data));

    $n.textContent = `${data.name}`,
    $b.textContent = `${data.blog}`,
    $l.textContent = `${data.location}`
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $name.textContent = `me gusta: ${err}`
}


displayUser('stolinski').catch(handleError);