import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Preparing data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

StateProvider.propTypes = {
	reducer: PropTypes.func.isRequired,
	initialState: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
};

// Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);

