DROP DATABASE IF EXISTS birthday_reminder;

CREATE DATABASE birthday_reminder;

USE birthday_reminder;

CREATE TABLE accounts (
  id int NOT NULL AUTO_INCREMENT,
  owner_name varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  pw varchar(50),
  date_created DATETIME NOT NULL,
  phone_number VARCHAR(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE birthdays (
  friend_id INT NOT NULL,
  friend_name varchar(50) NOT NULL,
  birthdate DATE NOT NULL,
  account_id INT,
  reminder_timer1 DATE,
  reminder_timer2 DATE,
  reminder_timer3 DATE,
  INDEX acc_ind (account_id),
  FOREIGN KEY (account_id)
    REFERENCES accounts(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *    MINE: mysql -u root -p < schema.sql
 *  to create the database and the tables.*/
