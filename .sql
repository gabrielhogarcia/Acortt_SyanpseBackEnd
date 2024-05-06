CREATE DATABASE AcorttBanco;

use AcorttBanco;

CREATE TABLE Faculdade(
	facul_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    facul_nome VARCHAR(300),
    facul_site VARCHAR(500)
);

CREATE TABLE Usuarios(
	usu_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usu_nome VARCHAR(300),
    usu_email VARCHAR(300),
    usu_senha VARCHAR(300),
    usu_tel VARCHAR(300),
    usu_cidade VARCHAR(300),
    facul_id INT,
    FOREIGN KEY (facul_id) REFERENCES Faculdade(facul_id)
);

CREATE TABLE Produtos(
	prod_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    prod_nome VARCHAR(300),
    prod_marca VARCHAR(300),
    prod_preco VARCHAR(300),
    prod_descricao VARCHAR(500),
    prod_data_public DATE,
    prod_ativo BIT,
    prod_foto VARCHAR(300),
    usu_id INT,
    cat_id int,
    FOREIGN KEY (usu_id) REFERENCES Usuarios(usu_id),
    FOREIGN KEY (cat_id) REFERENCES Categoria(cat_id)
);

CREATE TABLE Categoria(
	cat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	categoria ENUM('Fatec Shunji Nishimura - BDAG', 'Fatec Shunji Nishimura - MAP')
);
