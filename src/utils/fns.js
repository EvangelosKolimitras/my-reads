
export const filter = arr => fn => arr.filter(fn)
export const map = arr => fn => arr.map(fn)

export const log = data => console.log(data)

export const ifElse = check => (fn1, fn2) => check ? fn1() : fn2()

export const isArray = input => Array.isArray(input) ? [...input] : Array.from(input)

export const booksWithCategory = book => value => book === value

const FP = {
	filter, map, log, ifElse, isArray, booksWithCategory
}

export default FP