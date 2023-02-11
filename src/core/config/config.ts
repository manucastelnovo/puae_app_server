const config = {

    env:process.env.NODE_ENV || "dev",
    isProduction:process.env.NODE_ENV === "production",
    dbUrl:process.env.DATABASE_URL,
    port:process.env.PORT || 4000,
    dbUser:process.env.DB_PASSWORD,
    dbHost:process.env.DB_HOST,
    dbName:process.env.NB_NAME,
    dbPort:process.env.DB_PORT,

}

export {config}