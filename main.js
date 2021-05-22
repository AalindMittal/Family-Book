var Names = [
    "Shubh Adesh Mittal",
    "Tushar Mittal",
    "Kajal Mittal",
    "Brihad Mittal",
    "Nikita Mittal",
    "Aadya Mittal",
    "Aarnav Mittal",
    "Adhvik Mittal"
  ];
  
  var images = [
    "https://i.postimg.cc/FHR1ZbtX/d56cd25436d0d3f56ad2f143750f7455.png",
    "https://i.postimg.cc/Y9MqVQ43/image-removebg-preview-4.png",
    "https://i.postimg.cc/tJgRRyNn/image-3-removebg-preview.png",
    "https://i.postimg.cc/5tw2nsty/414-4146986-man-animation-png-businessman-clipart-transparent-background-png-removebg-preview.png",
    "https://i.postimg.cc/xT48Ck7f/153-1530978-pin-angry-child-clip-art-animation-of-a-woman-removebg-preview.png",
    "https://i.postimg.cc/mg1DFLfQ/image-1-removebg-preview.png",
    "https://i.postimg.cc/zvPzVMxt/image-2-removebg-preview.png",
    "https://i.postimg.cc/MZsKPMz7/image-removebg-preview.png"
  ];
  
  var j = 0;
  function Next() { document.getElementById("Names").innerHTML = Names[j];
    document.getElementById("cover").src = images[j];
    j++;
  }