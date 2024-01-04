stdin.on("readable", function scanf(){
    let stdinBuffer = stdin.read();
    let stdinNumbers= stdinBuffer.toString().split("");
    let [H, M] = stdinNumbers.map(input => {
        return parseInt(input);
    });

    M= M-45;

    if(M >= 0){
    }
    else if(H == 0) {
        H = 23;
        M = 60+M
    }

    else{
        H--;
        M = 60+M
    }
    console.log(`${H} ${M}`);
    stdin.removeListener("readable", scanf);
});