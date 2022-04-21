
function makePlumPhrase() {
    var arr = [
        "I am your plum", 
        "You are a plum", 
        "Thou shall love thou Plum", 
        "Plummer", 
        "Indoor Plumming", 
        "Outdoor Plumming",
        "I love you tiny plums",
        "Plant a plum tree",
        "Mario is a good Plummer",
        "Plum to meet you!",
        "Plum up you Bum, Whoops...",
        "I lost my plum 5 years ago",
        "My plum went out to buy a pack of ciggys and never came home :(("
    ]
    document.getElementById("plum_phrase").innerHTML = (arr[Math.floor(Math.random() * arr.length)]);


}
