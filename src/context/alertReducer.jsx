export default (state, action) => {
	switch (action.type) {
		case 'setAlert':
            return {...state , isAlert:true}
			break;

		default:
			break;
	}
};
