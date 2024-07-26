//object array
const teamMembers = [
    {
        name: `Wayne Barnett`,
        role: `Founder & CEO`,
        image: `wayne-barnett-founder-ceo.jpg`,
    },
    {
        name: `Angela Caroll`,
        role: `Chief Editor`,
        image: `angela-caroll-chief-editor.jpg`,
    },
    {
        name: `Walter Gordon`,
        role: `Office Manager`,
        image: `walter-gordon-office-manager.jpg`,
    },
    {
        name: `Angela Lopez`,
        role: `Social Media Manager`,
        image: `angela-lopez-social-media-manager.jpg`,
    },
    {
        name: `Scott Estrada`,
        role: `Developer`,
        image: `scott-estrada-developer.jpg`,
    },
    {
        name: `Barbara Ramos`,
        role: `Graphic Designer`,
        image: `barbara-ramos-graphic-designer.jpg`,
    }
]
const teamContainer = document.getElementById(`team-container`);
// salva su console.log 
for (let i = 0; i < teamMembers.length; i++) {
    //console.log(`Name`, teamMembers[i]);

    console.log(`Name`, teamMembers[i].name);
    console.log(`Role`, teamMembers[i].role);
    console.log(`Image`, teamMembers[i].image);

    // stampa su html
    teamContainer.innerHTML += `
    <ul>
        <li>
            Name: <strong>${teamMembers[i].name}</strong>
        </li>    
        <li>
            Role: <strong>${teamMembers[i].role}</strong>
        </li>    
        <li>
            Image: 
            <div>
                <img src="img/${teamMembers[i].image}">
            </div>
        </li>
    </ul>
    <hr> 
    `;

}