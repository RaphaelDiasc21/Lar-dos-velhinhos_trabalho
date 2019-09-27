const selection_update = document.querySelector("#selection");


selection_update.addEventListener("change",function(e){
        option = e.target.value;

        let active_before = document.querySelector(".active");
        active_before.classList = "card";
        document.getElementById(option).classList = "card active mt-5";
    })