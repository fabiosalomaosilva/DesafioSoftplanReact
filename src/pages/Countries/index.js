import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Form, FloatingLabel } from 'react-bootstrap';

import Card from './Card';
import { getCountriesQuery } from '../../services/queries';
import { useSelector, useDispatch } from 'react-redux';
import { setCountries, setSelectedCountry } from '../../store/actions';
import { getAditionalInfoContries } from '../../services/ibgeService';

export default function Countries() {
	const countries = useSelector((state) => state.countries);
	const [btnNext, setBtnNext] = useState(false);
	const [btnPrev, setBtnPrev] = useState(false);
	const [search, setSearch] = useState('');

	const { loading, data } = useQuery(getCountriesQuery());
	const dispatch = useDispatch();

	const navigateNext = () => {
		let newIndex;
		let newOffset;

		if (countries.index + 24 < data.countries.length) {
			newIndex = countries.index + 12;
		} else {
			const da =
				data.countries.length -
				(data.countries.length - Math.floor(data.countries.length / 12) * 12);
			newIndex = da;
		}

		if (countries.offset + 12 < data.countries.length) {
			newOffset = countries.offset + 12;
		} else {
			newOffset = data.countries.length;
		}

		if (countries?.data.length > 0) {
			const listCountries = {
				index: newIndex,
				offset: newOffset,
				aditionalInfo: countries.listAditionalInfoCountries,
				data: [],
			};
			for (let i = newIndex; i < newOffset; i++) {
				listCountries.data.push(data.countries[i]);
			}
			dispatch(setCountries(listCountries));
		}
	};

	const navigatePrevios = () => {
		let newIndex;
		let newOffset;

		if (countries.index - 12 < 0) {
			newIndex = countries.index - 12;
		} else {
			newIndex = countries.index - 12;
		}

		if (countries.offset === data.countries.length) {
			newOffset =
				data.countries.length -
				(data.countries.length - Math.floor(data.countries.length / 12) * 12);
			console.log(newOffset);
		} else if (countries.offset - 12 < 0) {
			newOffset = 12;
		} else {
			newOffset = countries.offset - 12;
		}
		if (countries?.data.length > 0) {
			const listCountries = {
				index: newIndex,
				offset: newOffset,
				aditionalInfo: countries.listAditionalInfoCountries,
				data: [],
			};
			for (let i = newIndex; i < newOffset; i++) {
				listCountries.data.push(data.countries[i]);
			}
			dispatch(setCountries(listCountries));
		}
	};

	const enableButtons = () => {
		setBtnNext(countries.offset >= data.countries.length);
		setBtnPrev(countries.offset <= 12);
	};

	const getAditionalInfo = async () => {
		const listAditionalInfoCountries = await getAditionalInfoContries(
			data.countries
		);
		const listCountries = {
			index: countries.index,
			offset: countries.offset,
			aditionalInfo: listAditionalInfoCountries,
			data: [],
		};
		for (let i = countries.index; i < countries.offset; i++) {
			listCountries.data.push(data.countries[i]);
		}
		dispatch(setCountries(listCountries));
	};

	const handleSelectedCountry = () => {
		dispatch(setSelectedCountry(null));
	};

	const handleChangeValue = (e) => {
		setSearch(e.target.value);

		if (e.target.value.length > 2) {
			const resultCapitais = data.countries.filter((country) => {
				console.log(country)
				return country.capital?.toLowerCase()
					.includes(e.target.value.toLowerCase());
			});

			const resultCountries = data.countries.filter((country) => {
				return country.name
					.toLowerCase()
					.includes(e.target.value.toLowerCase());
			});
			
			const list = [...resultCountries, ...resultCapitais];

			const result = list.reduce((acc, current) => {
				const x = acc.find(item => item.name === current.name);
				if (!x) {
					return acc.concat([current]);
				} else {
					return acc;
				}
			}, []);
			
			if (result.length > 0) {
				const listCountriesSearch = {
					index: countries.index,
					offset: countries.offset,
					aditionalInfo: countries.aditionalInfo,
					data: result,
				};
				dispatch(setCountries(listCountriesSearch));
			} else {
				const listCountries = {
					index: countries.index,
					offset: countries.offset,
					aditionalInfo: countries.aditionalInfo,
					data: [],
				};
				for (let i = countries.index; i < countries.offset; i++) {
					listCountries.data.push(data.countries[i]);
				}
				dispatch(setCountries(listCountries));
			}
		}
	};

	useEffect(() => {
		if (!loading) {
			enableButtons();
			getAditionalInfo();
		}
	}, [data, loading]);

	useEffect(() => {
		if (!loading) {
			enableButtons();
		}
	}, [countries.offset]);

	return (
		<>
			<div className="header-sub-page">
				<h3>Países</h3>
				<FloatingLabel
					controlId="floatingInput"
					label="Digite o nome do país"
					className="mb-1 mt-3"
				>
					<Form.Control type="text" onChange={(e) => handleChangeValue(e)} />
				</FloatingLabel>
				<br />
			</div>
			<div className="box-countries">
				{!loading &&
					countries?.data &&
					countries.data.map((country) => {
						return (
							<div key={country.code} onClick={handleSelectedCountry()}>
								<Link to={`/dashboard/details/${country.code}`}>
									<Card
										name={country.name}
										code={country.code}
										capital={country.capital}
									/>
								</Link>
							</div>
						);
					})}
			</div>
			{!loading && countries?.data && (
				<div className="box-countries-nav">
					<button
						className="btn-paginate"
						onClick={() => navigatePrevios()}
						disabled={btnPrev}
					>
						Prev
					</button>
					<button
						className="btn-paginate"
						onClick={() => navigateNext()}
						disabled={btnNext}
					>
						Next
					</button>
				</div>
			)}
		</>
	);
}
