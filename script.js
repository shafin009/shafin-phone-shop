




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

    //------------Error Message (Search Button)--------------------
    if (phones.length == 0) {
        const errorMessageDiv = document.getElementById("error");

        errorMessageDiv.innerHTML = `
                <p class="text-center fs-1 fw-bold bg-primary bg-opacity-75 rounded-pill text-light mx-5">Sorry !Your Search did not Found.</p>
             
              `;
    }
    //-------------------ForEach Section--------------------
    phones.forEach(phone => {

        const div = document.createElement('div');
        div.classList.add('col');

        //----------------innerHTML of Search Result Section------------------

        div.innerHTML = `
            
            <div class="card h-100 p-4">
                     <img src="${phone.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title"><span class="fw-bold">Model- </span>${phone.phone_name}</h5>
                     <h5 class="card-title"><span class="fw-bold">Brand- </span>${phone.brand}</h5>
                     <button onclick="seeDetails('${phone.slug}')"type="button" class="btn btn-success btn-sm">Details</button>
                 </div>
            </div>
        
            
            `;

        searchResult.appendChild(div);


    });


};

//---------------------Phone id Section------------
const seeDetails = (id) => {

    //----------------------2nd Fetch Section-------------
    const url2 = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url2)
        .then(res => res.json())
        .then(data => productDetails(data.data))


}
const productDetails = (details) => {

    if (details.others == null) {
        const errorMessageDiv = document.getElementById("error");

        errorMessageDiv.innerHTML = `
                <p class="text-center fs-1 fw-bold bg-primary bg-opacity-75 rounded-pill text-light mx-5">Sorry !Your Search did not Found.</p>
             
              `;
    }

    const mobileDetails = document.getElementById('mobile-details');
    mobileDetails.innerHTML = ' ';
    const div = document.createElement('div');
    div.classList.add('col')

    //-------------------innerHTML of Details Section------------------
    div.innerHTML = `
    
    <div class="card shadow-lg text-center mx-auto pt-4">
        <img src="${details.image}" class="card-img-top img-fluid w-25 mx-auto" alt="...">
     <div class="card-body">
            <p class="card-title"><span class="fw-bold">Model- </span>${details.name}</p>
            <p class="card-title"><span class="fw-bold">Brand- </span>${details.brand}</p>
            <p class="card-title"><span class="fw-bold">Memory- </span>${details.mainFeatures.memory}</p>
            <p class="card-title"><span class="fw-bold">Chipset- </span>${details.mainFeatures.chipSet}</p>
            <p class="card-title"><span class="fw-bold">Display Size- </span>${details.mainFeatures.displaySize}</p>
            <p class="card-title"><span class="fw-bold">Sensors- </span>${details.mainFeatures?.sensors}</p>
            <p class="card-title"><span class="fw-bold">Release Date- </span>${details?.releaseDate}</p>
            <p class="text-center text-success"><span class="fw-bold">More Details</span><br>_________</p>
            
            <p class="card-title"><span class="fw-bold">NFC- </span>${details.others?.NFC}</p>
            <p class="card-title"><span class="fw-bold">USB- </span>${details.others?.USB}</p>
            <p class="card-title"><span class="fw-bold">WLAN- </span>${details.others?.WLAN}</p>
            <p class="card-title"><span class="fw-bold">GPS- </span>${details.others?.GPS}</p>
            <p class="card-title"><span class="fw-bold">Radio- </span>${details.others?.Radio}</p>
            
            
        </div>    
    </div>
    
    `

    mobileDetails.appendChild(div);
    window.scrollTo(0, 1000);


};


// const errorMessage = () => {
//     const searchText = document.getElementById("input").value;
//     const errorMessageDiv = document.getElementById("error");
//     document.getElementById("product-info").innerHTML = "";

//     errorMessageDiv.innerHTML = ` <div class="card m-auto p-5 bg-warning" style="width: 18rem">
//             <h5 class="card-title">Dear Sir/Ma'am,</h5>
//             <p class="card-text">
//               Your search --<b>${searchText}</b>-- did not match any of our set meal. Please enter a
//               correct name.
//             </p>
//           </div>;
//           `
// };











