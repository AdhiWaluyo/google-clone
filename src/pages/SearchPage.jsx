import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Fragments/Search';
import SearchIcon from '@mui/icons-material/Search';
import { Description } from '@mui/icons-material';
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
	const [{ term = 'Real madrid' }, dispatch] = useStateValue();

	// Live API CALL
	const { data } = useGoogleSearch(term);

	// const data = response;

	console.log(data);

	return (
		<div className='searchPage'>
			<div className="searchPage__header">
				<Link to="/">
					<img className='searchPage__logo	' src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google_logo" />
				</Link>

				<div className="searchPage__headerBody">
					<Search hideButtons />

					<div className="searchPage__options">
						<div className="searchPage__optionsLeft">
							<div className="searchPage__option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>

							<div className="searchPage__option">
								<Description />
								<Link to="/news">News</Link>
							</div>


						</div>

						<div className="searchPage__optionsRight">
							<div className="searchPage__option">
								<Link to="/settings">Settings</Link>
							</div>

							<div className="searchPage__option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>

					</div>
				</div>
			</div>

			{term && (
				<div className="searchPage__results">
					<p className="searchPage__resultCount">
						About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
					</p>

					{data?.items.map(item => (
						<div className="searchPage__result" key={item.id}>
							<Link to={item.link}>
								{item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
									<img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
								)}
								{item.displayLink} ▽</Link>
							<Link className="searchPage__resultTitle" to={item.link}><h2>{item.title}</h2></Link>
							<p className="searchPage__resultSnippet" >{item.snippet}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SearchPage