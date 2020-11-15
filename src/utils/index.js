export const trimString = str => {
    if(str != ""){
        str = str.split("");
        let arr = [];
        for(let i=0;i<100;i++){
            arr.push(str[i]);
        }
        return arr.join("").concat("...");
    }
    return "";
}