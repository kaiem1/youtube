const loadTubeContent = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  const data = await res.json();
  const content = data.data;
  console.log(content);
  displayContent(content);
};

function displayContent(contents) {
  console.log(contents);

  const contentsection = document.getElementById("content-section");

  contentsection.innerHTML = "";

  contents.forEach((content) => {
    console.log(content);
    const contentCard = document.createElement("div");
    contentCard.classList = `card bg-base-100 shadow-[2px]`;
    // const image = document.querySelector('.card-body img');
    // image.classList.add('w-10 rounded-full');
    contentCard.innerHTML = ` 
        <figure class="" >
        <img
        src="${content.thumbnail}"
        alt="Shoes" class="border border-indigo-600 w-[312px] h-[200px]" />
        </figure>
        <div class="card-body">
        <div class="flex gap-4">
        <div>
        <img src="${content.authors[0].profile_picture}" class="w-12 h-12 rounded-full">
        </div>
        <div><h2 class="card-title">${content.title}</h2></div>  
          
        </div>
       <div class="pl-12 gap-1">
        <h2 class="card-title">${content.title}</h2>
        <p>${content.authors[0].profile_name}</p>
        <p>${content.others.views}</p>

       </div>
        
        </div>`;

    contentsection.appendChild(contentCard);
  });
}

const filterContent = async (categoryId, name) => {
  console.log("this is name from js:", name);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  displayContent(data.data);
  return;
};

// function newWindow() {
//      fetch("https://openapi.programming-hero.com/api/videos/category/1002") .then(response => response.json())
//       .then((data) => {
//          window.open(data.data);
//          })
//          .catch((error) => console.error("oops:",error));
//         }

// Add event listener to button to play music on click
//   document.getElementById('musicButton').addEventListener('click', playMusic);

loadTubeContent();
