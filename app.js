let cvArray = [{
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Raju Sonwani",
    gender: "male",
    city: "raipur",
    language: "python",
    framwork: "django"
}, {
    img: "https://randomuser.me/api/portraits/women/75.jpg",
    name: "Madhu Rani",
    gender: "female",
    city: "chandigarh",
    language: "java",
    framwork: ".net"
}, {
    img: "https://randomuser.me/api/portraits/men/35.jpg",
    name: "Manoj chandra",
    gender: "male",
    city: "delhi",
    language: "c++",
    framwork: "flask"
}, {
    img: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Jaya Sahu",
    gender: "male",
    city: "jaipur",
    language: "javaScript",
    framwork: "Angular"
}, {
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Rani Sonwani",
    gender: "female",
    city: "raipur",
    language: "python",
    framwork: "django"
}, {
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Raju Sonwani",
    gender: "male",
    city: "raipur",
    language: "none",
    framwork: "Ok"
}, {
    img: "https://randomuser.me/api/portraits/women/85.jpg",
    name: "Pooja Gupta",
    gender: "male",
    city: "raipur",
    language: "Machine Learning",
    framwork: "django"
}, {
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Raju Sonwani",
    gender: "male",
    city: "raipur",
    language: "python",
    framwork: "django"
}];


function cvIterator(cvArray) {
    let index = 0;
    return {
        next: function () {
            return (index < cvArray.length) ? { currentCv: cvArray[index++], done: false } : { done: true }
        }
    }
};

let rejust = cvIterator(cvArray)

function updateCv() {
    let x=rejust.next().currentCv;
    if(x==undefined){
        window.location.reload()
    }else{
    let profile = document.getElementById('profile');
    profile.innerHTML = `<ul>
        <img src=${x.img} alt="image">       
        <li>${x.name}</li>
        <li>${x.gender}</li>
        <li>${x.city}</li>
        <li>${x.language}</li>
        <li>${x.framwork}</li>
    </ul>`
    }
};

updateCv();

let next = document.getElementById('btn');
next.addEventListener("click", updateCv)
