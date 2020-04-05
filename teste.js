let vsal;
let imp;

vsal = 3001;

if (vsal <= 1000) {
    console.log("ISENTO - PRIMEIRO IF")
} else if (vsal <= 3000) {
    imp = vsal * 0.03
    console.log("VC PAGA 3% - " + imp.toFixed(2) + " SEGUNDO IF");
} else if (vsal > 3000) {
    imp = vsal * 0.05
    console.log("VC PAGA 5% - " + imp.toFixed(2) + " terceiro  IF");
}