import React from 'react'
import _ from 'lodash'
import Loader from '../../components/UI/Loader'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
	fetchMovies,
	fetchFavorite,
	fetchWatchlist,
} from '../../redux/movies/movies.actions'
import { onChangePagination } from '../../redux/filters/filters.actions'

function MoviesHOC(Component) {
	return class extends React.Component {
		componentDidMount() {
			const {
				sorting: { sort_by, primary_release_year, with_genres },
				fetchMovies,
				pagination: { page },
				fetchFavorite,
				fetchWatchlist,
				session_id,
			} = this.props

			const queryStringParams = {
				language: 'en-EN',
				sort_by: sort_by,
				page: page,
				primary_release_year: primary_release_year,
			}
			if (with_genres.length > 0) {
				queryStringParams.with_genres = with_genres.join(',')
			}
			if (session_id) {
				fetchFavorite({ session_id: session_id })
				fetchWatchlist({ session_id: session_id })
			}

			fetchMovies(queryStringParams)
		}

		componentDidUpdate(state) {
			const {
				sorting,
				sorting: { sort_by, primary_release_year, with_genres },
				pagination: { page },
				onChangePagination,
				fetchMovies,
			} = this.props

			const queryStringParams = {
				language: 'en-EN',
				sort_by: sort_by,
				page: page,
				primary_release_year: primary_release_year,
			}
			if (with_genres.length > 0) {
				queryStringParams.with_genres = with_genres.join(',')
			}
			if (!_.isEqual(sorting, state.sorting)) {
				onChangePagination({ name: 'page', value: 1 })
				return fetchMovies(queryStringParams)
			} else if (page !== state.pagination.page) {
				return fetchMovies(queryStringParams)
			}
		}

		render() {
			const { movies, isLoading } = this.props
			return (
				<div className="container">
					{isLoading ? (
						<Loader />
					) : (
						<Component {...this.props} movies={movies} />
					)}
				</div>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		sorting: state.filters.sorting,
		pagination: state.filters.pagination,
		movies: state.movies.movies,
		isLoading: state.loader.general,
		session_id: state.auth.session_id,
	}
}

const mapDispatchToProps = {
	onChangePagination,
	fetchMovies,
	fetchFavorite,
	fetchWatchlist,
}

const composedHOC = compose(
	connect(mapStateToProps, mapDispatchToProps),
	MoviesHOC
)

export default composedHOC
