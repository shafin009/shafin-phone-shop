
const searchPhone = () => {
    const input = document.getElementById('input');
    const searchText = input.value;


    input.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))

}
