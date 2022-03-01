




// --------------------Search Button----------------
const searchPhone = () => {

    const mobileDetails = document.getElementById('mobile-details');
    mobileDetails.innerHTML = ' ';
    const input = document.getElementById('input');
    const searchText = input.value;
    input.value = '';
    const errorMessageDiv = document.getElementById("error");
    errorMessageDiv.textContent = '';

    //----------------------Fetch Section-------------------
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data.slice(0, 20)))



};


const displayResult = (phones) => {

    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';

    //-------------------For Each Section-----------------
    if (phones.length == 0) {
        const errorMessageDiv = document.getElementById("error");

        errorMessageDiv.innerHTML = `
                <p class="text-center text-light">Your search did not found</p>
             
              `;
    }

    phones.forEach(phone => {

        const div = document.createElement('div');
        div.classList.add('col');

        //----------------innerHTML of Search Result Section------------------

        div.innerHTML = `
            
            <div class="card h-100 p-4">
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


};

const seeDetails = (id) => {

    //----------------------2nd Fetch Section-------------
    const url2 = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url2)
        .then(res => res.json())
        .then(data => information(data.data))


}
const information = (details) => {



    const mobileDetails = document.getElementById('mobile-details');
    mobileDetails.innerHTML = ' ';
    const div = document.createElement('div');
    div.classList.add('col')

    //-------------------innerHTML of Details Section------------------
    div.innerHTML = `
    
    <div class="card shadow-lg text-center mx-auto pt-4">
        <img src="${details.image}" class="card-img-top img-fluid w-25 mx-auto" alt="...">
     <div class="card-body">
            <p class="card-title">Model- ${details.name}</p>
            <p class="card-title">Brand- ${details.brand}</p>
            <p class="card-title">Memory- ${details.mainFeatures.memory}</p>
            <p class="card-title">Chipset- ${details.mainFeatures.chipSet}</p>
            <p class="card-title">Display Size- ${details.mainFeatures.displaySize}</p>
            <p class="card-title">Sensors- ${details.mainFeatures?.sensors}</p>
            <p class="card-title">Release Date- ${details?.releaseDate}</p>
            <p class="text-center text-success">More Details <br>_________</p>
            
            <p class="card-title">NFC- ${details.others?.NFC}</p>
            <p class="card-title">USB- ${details.others?.USB}</p>
            <p class="card-title">WLAN- ${details.others?.WLAN}</p>
            <p class="card-title">GPS- ${details.others?.GPS}</p>
            <p class="card-title">Radio- ${details.others?.Radio}</p>
            
            
        </div>    
    </div>
    
    `

    mobileDetails.appendChild(div);
    window.scrollTo(0, 1000);


};


const errorMessage = () => {
    const searchText = document.getElementById("input").value;
    const errorMessageDiv = document.getElementById("error");
    document.getElementById("product-info").innerHTML = "";

    errorMessageDiv.innerHTML = ` <div class="card m-auto p-5 bg-warning" style="width: 18rem">
            <h5 class="card-title">Dear Sir/Ma'am,</h5>
            <p class="card-text">
              Your search --<b>${searchText}</b>-- did not match any of our set meal. Please enter a
              correct name.
            </p>
          </div>;
          `
};











