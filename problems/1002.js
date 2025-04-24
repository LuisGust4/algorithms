
export function problem (lines) {
	
	// console.log(lines[0])
	const R = Number.parseFloat(lines[0]).toFixed(2)
	const pi = 3.14159

	const A = R**2 * pi

	console.log(`A=${A.toFixed(4)}`)

}
<