const SwitchLists = () => {
    const heading = document.getElementById('heading');
    const sweetTreatsIsChecked = document.getElementById('sweetTreats').checked;
    const savoryTreatsIsChecked = document.getElementById('savoryTreats').checked;

    const listContainer = document.getElementById('treatList'); 
    listContainer.innerHTML = ''; 

    if (sweetTreatsIsChecked) {
        heading.className = 'sweet-treats';
        listContainer.innerHTML = 
            <ul> 
                <li>BOOberry Pies</li>
                <li>Rice Krispie Brains</li>
                <li>Mummy Cake Pops</li>
                <li>Spiderweb Brownies</li>
                <li>Bat Cookies</li>
            </ul>

    } else if (savoryTreatsIsChecked) {
        heading.className = 'savory-treats';
        listContainer.innerHTML = ''; 
            <ul>
                <li>Eyeballs Appetixer</li>
                <li>Breadstick Serpents</li>
                <li>Pumpkin Baked Brie</li>
                <li>Spider Pizzas</li>
                <li>Ghost Veggies and Hummus</li>
            </ul>
    } else {
        heading.className = 'default';
        listContainer.innerHTML = ''; 
    }

    const items = ['sweet treats', 'savory treats'];
    items.forEach(item => {
        console.log(item); 
    })
} 


