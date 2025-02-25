const cognitoAuthConfig = {
	authority:
		'https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_Aejl4OMng',
	client_id: '5cs7hc4647n49i0002o00i5ug0',
	redirect_uri: 'http://localhost:5500/index.html',
	response_type: 'code'
};

// create a UserManager instance
export const userManager = new oidc.UserManager({
	...cognitoAuthConfig
});

export async function signOutRedirect() {
	const clientId = '5cs7hc4647n49i0002o00i5ug0';
	const logoutUri = '<logout uri>';
	const cognitoDomain =
		'https://eu-central-1aejl4omng.auth.eu-central-1.amazoncognito.com';
	window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
		logoutUri
	)}`;
}

export function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);

	return JSON.parse(jsonPayload);
}
