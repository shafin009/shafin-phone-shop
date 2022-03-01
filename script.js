


const searchPhone = () => {
    const input = document.getElementById('input');
    const searchText = input.value;
    input.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data.slice(0, 20)))
    document.getElementById('error').innerText = ''

}

const displayResult = (phones) => {

    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = '';


    phones.forEach(phone => {

        // console.log(data)

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            
            <div class="card h-100">
                     <img src="${phone.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">Model-${phone.phone_name}</h5>
                     <h5 class="card-title">Brand-${phone.brand}</h5>
                     <button onclick="seeDetails('${phone.slug}')"type="button" class="btn btn-primary btn-sm">Details</button>
                 </div>
            </div>
        
            
            `;

        searchResult.appendChild(div);

    });



}

const seeDetails = (id) => {

    const url2 = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url2)
        .then(res => res.json())
        .then(data => information(data.data))


}
const information = (details) => {


    const mobileDetails = document.getElementById('mobile-details')
    mobileDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
    
    <div class="card p-3 shadow-lg">
        <img src="${details.image}" class="card-img-top img-fluid w-25 mx-auto" alt="...">
        <div class="card-body">
            <p class="card-title">Model-${details.name}</p>
            <p9 class="card-title">Brand-${details.brand}</p>
            
        </div>
    </div>
    
    
    `
    mobileDetails.appendChild(div);



}












