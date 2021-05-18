CREATE TABLE business(
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL DEFAULT 'Por definir',
    ruc INT(13) NOT NULL UNIQUE,
    rubro VARCHAR(150) NOT NULL DEFAULT 'Por definir',
    `address` TEXT NOT NULL DEFAULT 'Por definir',
    reference TEXT NOT NULL DEFAULT 'Por definir',
    anniversary date,
    `page` TEXT NOT NULL DEFAULT 'Por definir',
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE customers(
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_business BIGINT UNSIGNED,
    `name` VARCHAR(150) NOT NULL DEFAULT 'Por definir',
    position VARCHAR(150) NOT NULL DEFAULT 'Por definir',
    `address` TEXT NOT NULL DEFAULT 'Por definir',
    district VARCHAR(150) NOT NULL DEFAULT 'Por definir',
    province VARCHAR(150) NOT NULL DEFAULT 'Por definir',
    email VARCHAR(150) UNIQUE,
    phone VARCHAR(30) UNIQUE,
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_business) REFERENCES business(id)
);

CREATE TABLE people(
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL DEFAULT 'Por definir',
    last_name VARCHAR(150) NOT NULL DEFAULT 'Por definir',
    birthdate date,
    email VARCHAR(150) UNIQUE,
    phone VARCHAR(30) UNIQUE,
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE details_attention(
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_people BIGINT UNSIGNED NOT NULL,
    id_business BIGINT UNSIGNED NOT NULL,
    id_customer BIGINT UNSIGNED NOT NULL,
    `type` VARCHAR(100) NOT NULL DEFAULT 'Por definir',
    origin VARCHAR(100) NOT NULL DEFAULT 'Por definir',
    `status` VARCHAR(100) NOT NULL DEFAULT 'Por definir',
    date_notice date,
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_people) REFERENCES people(id),
    FOREIGN KEY (id_business) REFERENCES business(id),
    FOREIGN KEY (id_customer) REFERENCES customers(id)
);

CREATE TABLE history(
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_people BIGINT UNSIGNED,
    id_attencion BIGINT UNSIGNED,
    `text`TEXT NOT NULL DEFAULT 'Envie el texto por equivocación',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_people) REFERENCES people(id),
    FOREIGN KEY (id_attencion) REFERENCES details_attention(id)
);

CREATE TABLE requirements(
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    business VARCHAR(200) NOT NULL DEFAULT 'No existe DATO',
    `name` VARCHAR(150) NOT NULL DEFAULT 'No existe DATO',
    email VARCHAR(150) NOT NULL DEFAULT 'No existe DATO',
    phone VARCHAR(30) NOT NULL DEFAULT 'No existe DATO',
    `message` TEXT NOT NULL DEFAULT 'No existe DATO',
    page_web TEXT NOT NULL DEFAULT 'No existe DATO',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users(
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_people BIGINT UNSIGNED NOT NULL,
    user_login VARCHAR(150) NOT NULL DEFAULT 'Nuevo',
    `password` VARCHAR(50) NOT NULL DEFAULT '202cb962ac59075b964b07152d234b70',
    type_user VARCHAR(50) NOT NULL DEFAULT 'Tipo Nuevo',
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_people) REFERENCES people(id)
);

INSERT INTO people(`name`, last_name,birthdate, email, phone)
VALUES ('Admin',' ','2020-04-03','hola@compina.net','123');

INSERT INTO users(id_people,user_login,type_user)
VALUES (1,'admin','Administrador');