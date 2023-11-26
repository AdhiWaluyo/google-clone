import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Search({ hideButtons = false }) {
	const [{ term }, dispatch] = useStateValue();

	const [searchInput, setSearchInput] = useState('');
	const navigate = useNavigate();

	const search = e => {
		e.preventDefault();

		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: searchInput
		});

		// navigate(`/search/${searchInput}`);
		navigate(`/search`);
	}

	return (
		<form className="search">
			<div className='search__input'>
				<SearchIcon className='search__inputIcon' />
				<input value={searchInput} onChange={e => setSearchInput(e.target.value)} />
				<MicIcon />
			</div>

			{!hideButtons ? (
				<div className="search__buttons">
					<Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
					<Button variant='outlined'>I`m Feeling Lucky</Button>
				</div>
			) : (
				<div className="search__buttons">
					<Button type='submit' className='search__buttonsHidden' onClick={search} variant='outlined'>Google Search</Button>
					<Button variant='outlined' className='search__buttonsHidden'>I`m Feeling Lucky</Button>
				</div>
			)}


		</form>
	)
}

Search.propTypes = {
	hideButtons: PropTypes.bool,
};

export default Search