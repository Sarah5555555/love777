async function loadGallery(jsonFile, containerId, type) {
  const res = await fetch(jsonFile);
  const items = await res.json();
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transition transform';

    if(type === 'image') {
      div.innerHTML = `<img src="${item.src}" class="w-full h-48 object-cover">`;
    } else if(type === 'video') {
      if(item.src.includes('youtube.com')) {
        div.innerHTML = `<iframe class="w-full h-48" src="${item.src}" allowfullscreen></iframe>`;
      } else {
        div.innerHTML = `<video class="w-full h-48" controls><source src="${item.src}" type="video/mp4"></video>`;
      }
    }

    container.appendChild(div);
  });
}
