DROP database if exists almacen;
create database almacen;
USE almacen;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE almacenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(255)
);
CREATE TABLE medicamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id)
);

CREATE TABLE medicamentos_almacenes (
    id_medicamento INT,
    id_almacen INT,
    cantidad INT,
    PRIMARY KEY (id_medicamento, id_almacen),
    FOREIGN KEY (id_medicamento) REFERENCES medicamentos(id),
    FOREIGN KEY (id_almacen) REFERENCES almacenes(id)
);

/*insertar valores*/


insert into categorias(nombre) values('antibioticos'),('analgesicos'),('antinflamatorios');

insert into almacenes(nombre,direccion) values('almacen1','5 de mayo'),('almacen2','venustiano carranza'),('almacen3',null);

INSERT INTO medicamentos (nombre, descripcion, id_categoria) VALUES ('Amoxicilina', 'Antibiótico de amplio espectro', 1), ('Paracetamol', 'Analgésico y antipirético', 2);

INSERT INTO medicamentos_almacenes (id_medicamento, id_almacen, cantidad) VALUES (1, 1, 100), (1, 2, 50), (2, 1, 200);
