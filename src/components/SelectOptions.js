import React from 'react';

const SelectOptions = props => {
	const { shelf, changeShelfHandler, book, selectValue } = props;
	return (
		<select onChange={e => { changeShelfHandler(e, book) }} value={selectValue} >
			<option disabled>Move to...</option>
			<option disabled={shelf === "currentlyReading"} value="currentlyReading">Reading</option>
			<option disabled={shelf === "wantToRead"} value="wantToRead">Want to Read</option>
			<option disabled={shelf === "read"} value="read">Read</option>
			<option value="none">None</option>
		</select>
	)
}

// TODO Generate the select options dynamicaly
// const configOptions = [
// 	{ id: 0, self: "moveTo", value: "moveTo", label: "Move to..." },
// 	{ id: 1, self: "currentlyReading", value: "currentlyReading", label: "Reading" },
// 	{ id: 2, self: "wantToRead", value: "wantToRead", label: "Want to read" },
// 	{ id: 3, self: "read", value: "read", label: "Read" },
// 	{ id: 4, self: "none", value: "none", label: "None" },
// ]

// const Option = props => configOptions.map(option => <Option disabled={props.shelf === option.shelf} key={option.id} value={option.value}> {option.label} </Option>)



export default SelectOptions