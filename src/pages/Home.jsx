import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../components/Fragments/Search';

function Home() {
	return (
		<div className='home'>
			<div className="home__header">
				<div className="home__headerLeft">
					<Link to='/about'>About</Link>
					<Link to='/store'>Store</Link>
				</div>

				<div className="home__headerRight">
					<Link to='/gmail'>Gmail</Link>
					<Link to='/images'>Images</Link>
					<AppsIcon />
					<Avatar />
					{/* Icon */}
					{/* Avatar */}
				</div>
			</div>

			<div className="home__body">
				<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google_logo" />

				<div className="home_inputContainer">
					<Search />
				</div>
			</div>
		</div>
	)
}

export default Home