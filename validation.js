function Validation(){
    this.kiemTraRong = function(value, errorId, mess){
        if (value === "") {
            //error
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }

            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
    };
}

