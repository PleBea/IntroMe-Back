DROP DATABASE IF EXISTS INTROME;

CREATE DATABASE INTROME;
Use INTROME;

CREATE TABLE Users{
    ID VARCHAR(50) NOT NULL PRIMARY KEY,
    PW VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(50) NOT NULL,
    COMMENT VARCHAR(100) DEFAULT "undefined",
    URLJSON JSON
};
