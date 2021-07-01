import React from 'react';

export const Main = () => {
	return (
		<div className='join-container'>
			<main className='join-main'>
				<form action='chat.html'>
					<div className='form-control'>
						<label for='username'>Username</label>
						<input
							type='text'
							name='username'
							id='username'
							placeholder='Enter username...'
							required
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='room'>Room</label>
						<select name='room' id='room'>
							<option value='Skyrim'>Skyrim</option>
							<option value='Dark Souls'>Dark Souls</option>
							<option value='Dragon Age'>Dragon Age</option>
							<option value='Legend of Zelda'>
								Legend of Zelda
							</option>
						</select>
					</div>
					<button type='submit' className='btn'>
						Join Chat
					</button>
				</form>
			</main>
		</div>
	);
};
