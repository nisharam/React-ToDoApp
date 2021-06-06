const local = {
    app: {
        REACT_APP_BASE_URL: "https://jsonplaceholder.typicode.com",
    }
};

const dev = {
    app: {
        REACT_APP_BASE_URL: "https://jsonplaceholder.typicode.com",
    },
};

const uat = {
    app: {
        REACT_APP_BASE_URL: "https://jsonplaceholder.typicode.com",
    },
};

const prod = {
    app: {
        REACT_APP_BASE_URL: "https://jsonplaceholder.typicode.com",
    },
};

// console.log(process.env.NODE_ENV, 'REACT_APP_STAGE')
const config = process.env.NODE_ENV === 'production' ? prod :
    process.env.NODE_ENV === 'development' ? dev :
    process.env.NODE_ENV === 'uat' ? uat :
    local;

export default {
    // Add common config values here
    ...config
};