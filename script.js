


const searchPhone = () => {
    const input = document.getElementById('input');
    const searchText = input.value;

    input.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data))

}

const displayResult = phones => {

    const searchResult=document.getElementById('search-result');

    phones.forEach(data => {

        console.log(data)

        const div=document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        
        <div class="card h-100">
                 <img src="${data.image}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">Model-${data.phone_name}</h5>
                 <h5 class="card-title">Brand-${data.brand}</h5>
                 <p class="card-text">Details-${data.slug}</p>
             </div>
        </div>
        
        `;

        searchResult.appendChild(div);


        
    });
    


}













    // const loadPhone = () => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //         .then(response => response.json())
    //         .then(data => console.log(data.data));


    // }
    // loadPhone()

    // const displayPhone = phone => {
    //     const phone1Div = document.getElementById('phone1');
    //     phone1Div.innerHTML = `
    //         <h3 class="text-center text-uppercase text-light">Cases Sheet</h3>
    //         <h3 class='text-light'>${phone.brand}</h3>
    //         <h4 class='text-light'>Active Cases:</h4>
    //         <h4 class='text-light'>Today Cases: </h4>   
    //         <h4 class='text-light'>Active Per 1M:</h4>
    //         `
