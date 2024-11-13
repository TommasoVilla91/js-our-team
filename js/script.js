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

const teamCardCont = document.querySelector("card");

const renderList = () => {
  let member = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const {name, role, email, img} = teamMembers[i];
    const memberCard = `
    <div class="row">
        <div class="col-4">
            <img src="./${img}" alt="" class="img-fluid rounded-start">
        </div> 
        <div class="col-8">
            <div class="card-body">
                <h3 class="card-name">${name}</h3>
                <p class="card-role">${role}</p>
                <p class="card-email">${email}</p>
            </div>
        </div>                    
    </div>
    `;
    console.log(memberCard);
    member += memberCard;
  }
  teamCardCont.innerHTML = member;
}

renderList();