window.onload = () => {
    const routes = {
        '#': homePage(),
        '#page': page(),
        '#page1': page1(),
        '#page2': page2()
    }
    router(routes);
}

window.onhashchange = () => {
    const routes = {
        '#': homePage(),
        '#page': page(),
        '#page1': page1(),
        '#page2': page2()
    }
    router(routes);
}

const router = (routes) => {
    const mainContent = document.getElementById('mainContent');
    const route =  window.location.hash || "#";
    mainContent.innerHTML = routes[route];
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