
export function problem (lines) {
	
    const A = Number(lines[0]);
    const B = Number(lines[1]);
 
    const AVG = parseFloat(((A.toFixed(1) * 3.5) + (B.toFixed(1) * 7.5))/11);
 
    console.log(`MEDIA = ${AVG.toFixed(5)}`)

}
