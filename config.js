const config = {
    //User APIS provided by challenge
    USER_API: process.env.USER_API,
    PROFILE_API: process.env.PROFILE_API,

    //Ethereal Account Details
    ETHEREAL_HOST: process.env.ETHEREAL_HOST,
    ETHEREAL_PORT: process.env.ETHEREAL_PORT,
    ETHEREAL_USERNAME: process.env.ETHEREAL_USERNAME,
    ETHEREAL_PASSWORD: process.env.ETHEREAL_PASSWORD,

    //Email details
    NORTH_POLE_EMAIL: process.env.NORTH_POLE_EMAIL,
    SANTA_EMAIL: process.env.SANTA_EMAIL,

    //Fake db details
    CHILD_REQUEST_LIST_KEY: process.env.CHILD_REQUEST_LIST_KEY,
};

export default config;