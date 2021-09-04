import React from 'react'

const TextArea = ({ value, onChange }) => {
	return (
		<div>
			<label className="text-sm font-bold mb-1 block text-left">
				Description
			</label>
			<textarea
				value={value}
				onChange={onChange}
				className="w-full max-h-44 p-4 text-base block bg-lightGrey"
			/>
		</div>
	)
}

export default TextArea
