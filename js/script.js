const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamCardCont = document.querySelector(".card-container");
const userForm = document.getElementById("member-form");
// const inputs = document.querySelectorAll("#memeber-form input");
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const emailInput = document.getElementById("email");
const imgInput = document.getElementById("image");

// funzione per creare card con dati dell'array
const memberCard = (member) => {
  const {name, role, email, img} = member;
  return `
    <div class="card col-lg-5 col-md-10">
      <div class="row">
          <div class="col-4 p-0">
              <img src="./${img}" alt="" class="card-img-top rounded-start">
          </div> 
          <div class="col-8">
              <div class="card-body pb-lg-1 d-flex flex-column align-items-center">
                  <h5 class="card-text">${name}</h5>
                  <p class="card-text">${role}</p>
                  <span class="card-email">${email}</span>
              </div>
          </div>                    
      </div>
    </div>
    `;
};

const renderList = () => {
  let elem = "";
  for (let i = 0; i < teamMembers.length; i++) {

    // prelievo dati di ogni membro nell'array
    const card = memberCard(teamMembers[i]);
    elem += card;
  }  
  teamCardCont.innerHTML = elem;
};

// funzione per trasformare dati form in una nuova card
const selfSubmit = (event) => {
  event.preventDefault();

  // prelevare tutti i dati del form
  const name = nameInput.value.trim();
  const role = roleInput.value.trim();
  const email = emailInput.value.trim();
  const img = imgInput.value.trim();

  // creo oggetto nuovo membro
  const newMember = {
    name,
    role,
    email,
    img
  }

  // aggiungo oggetto all'array
  teamMembers.push(newMember);
  
  // aggiungo card del nuovo membro alla pagina
  renderList();

  // reset del form dopo submit
  userForm.reset();
};

//////////////////////////
// INVOCAZIONI FUNZIONI //
//////////////////////////

// card membri attuali
renderList();

// submit form
userForm.addEventListener("submit", selfSubmit);