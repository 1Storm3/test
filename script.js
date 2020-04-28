let num = 50;
if (num < 49) {
    console.log('neverno!')
} else if (num > 100) {
    console.log("mnogo!")
} else {
    console.log("verno!")
};

(num == 50) ? console.log('verno') : console.log('nevrno');

switch (num) {
    case num < 49:
        console.log('verno');
        break;
    case num > 100:
        console.log('mnogo');
        break;
    case num > 80:
        console.log("vse eshe mnogo");
        break;
    case  50:
        console.log('verno!');
        break;
    default:
        console.log("choto poshlo ne tak");
        break;
}