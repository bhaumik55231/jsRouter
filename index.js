

window.onload = () => {
    router();
}

window.onhashchange = () => {
    router();
}

const router = () => {
    const mainContent = document.getElementById('mainContent');
    const hash = window.location.hash;
    const index = hash.indexOf('?');
    const query = hash.slice(index+1, hash.length);
    const parameters = getparameters(query);
    console.log(parameters);
    const route =  index !== -1 ? hash.slice(0, index) : hash || '#';
    const routes = allRoutes();
    mainContent.innerHTML = routes[route];
}

const page1_page2 = () => {
    return '<h1>page1/page2</h1>';
}

const homePage = () => {
    return '<h1>Home Page</h1>'
}

const page = () => {
    return '<h1>Page</h1>'
}

const page1 = () => {
    return '<h1>Page1</h1>'
}

const page2 = () => {
    return '<h1>Page2</h1>'
}

const allRoutes = () => {
    return {
        '#': homePage(),
        '#page': page(),
        '#page1': page1(),
        '#page2': page2(),
        '#page1/page2': page1_page2()
    }
}

const getparameters = (query) => {
    const array = query.split('&');
    let obj = {};
    array.forEach(value => {
        obj[value.split('=')[0]] = value.split('=')[1];
    });
    return obj;
}