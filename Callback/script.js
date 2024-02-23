const imagePaths = [
    'assets/batman.jpg',
    'assets/darth vader.jpg',
    'assets/spider man.jpg',
    'assets/kylo.jpg',
    'assets/minato.jpg',
    'assets/zephyrus.jpg',
  ];
  
  function displayImages(paths) {
    const gallery = document.querySelector('.gallery');

  
    paths.forEach(path => {
      const imgElement = document.createElement('img');
      imgElement.classList.add('image');
      imgElement.src = path;
      gallery.appendChild(imgElement);
      console.log('image added');
    });
  }
  
  setTimeout(function() {
    displayImages(imagePaths);
  }, 4000);
  
  // displayImages(imagePaths);
  