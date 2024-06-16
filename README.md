
# Promotion Engine FrontEnd

A brief description of what this project does and how it works.

## Frameworks used:

- [Flowbite](https://flowbite.com/) (a library who adds more items, classes and dinamics things to Tailwind)
- charts.js and a reactjs library to make it easier [react-chartjs-2](https://react-chartjs-2.js.org/)
- [Vite](https://vitejs.dev/) to build the project

## TODO

- Fisish the stat system
- Refactor the requests and controllers (the entire project doesn't use Redux)
- Add rewards button.
- Add claim reward button.
- Add new stats to the voucher detail.

## Layout

There is a Layout file inside of the folder called `/components` wich contains all the sidebar and the main container to storage all the pages. You can modify the Sidebar there.

## Login System

First, inside of the folder called `/libs`, you have a file called isAuthenticated wich contains a function to check the localStorage and check if there is a key called `jwt`.

In `App.tsx` there is a useEffect function who checks if the user is Authenticated and if it is, it sends all requests with axios with a header for the authentication to make the API works. If the `jwt` is not valid, the requests won't work.

```javascript
useEffect(() => {
	if (isAuthenticated()) {
		axios.defaults.headers.common[
			"Authorization"
		] = `Bearer ${localStorage.getItem("jwt")}`;
	} else {
		axios.defaults.headers.common["Authorization"] = null;
	}
}, []);
```

In all pages, there is a system to check if the user is Authenticated, if not, it will redirect you to the login page.

```javascript
if (!isAuthenticated())
{
    return <Navigate to="/login" />;
} else {
    return (<>page content</>)
}

```

## Requests to the API

There is a folder called `/controllers` wich contains all controllers to make all the requests.

## Components

A folder called `/components` contains all components of the project. List of items, cards of items, elements, utils...
 
## .env

If you need to create a new .env variable, you can make it via adding VITE_ as a prefix of the variable.

Examples that the project use:

```
VITE_API_URL=http://localhost:3000
VITE_MAILER_URL=http://localhost:3003
```
