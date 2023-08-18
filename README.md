# gestionCursos-laravel-react
Gestion de Cursos. 

Para este Examen utilice Laravel + React + MYSQL + GITHUB <br />

Diagrama de la base de datos, link diagram: https://drive.google.com/file/d/1qtryqrzR_Rnxkt6SfZwI3kPdkwQv44YM/view?usp=sharing <br />

En este ejercicio opte por cargar los cursos yo mismo. Para hacerlo lo realice a traves de MYSQL. Ejemplo de creacion de cursos<br />

//primero creo la categoria <br />
INSERT INTO categorias (id, nombre) VALUES (1, 'frontend');<br />
INSERT INTO categorias (id, nombre) VALUES (2, 'backend');<br />

//luego carga de cursos <br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (1, "Javscript", 1, "Curso que muestra las bases de javascript"); <br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (2, "Javscript", 2, "Curso que muestra las bases de javascript backend"); <br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (3, "PHP", 1, "Curso que muestra las bases de PHP"); <br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (4, "PHP", 2, "Curso que muestra las bases de PHP backend"); <br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (5, "React", 1, "Curso que muestra las bases de React backend"); <br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (6, "Laravel", 2, "Curso que muestra las bases de Laravel backend"); <br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (7, "MoongoDb", 2, "Curso que muestra las bases de MoongoDb"); <br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (8, "Node", 2, "Curso que muestra las bases de Nodejs backend"); <br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (9, "Angular", 1, "Curso que muestra las bases de PHP"); <br />


//pantalla inicial<br /> <br />
(https://prnt.sc/XIIPABCSWyUI) <br />

Luego de esto, ya podria realizar cualquier operacion de del CRUD.  <br />
No tendria problema en agregar la funcionalidad de crear un curso, pero al pensar en que el usuario no deberia ser capaz de crearlo decidi hacerlo de esta manera <br /><br />
Muchas gracias por la oportunidad, quedo a la espera de su respuesta, saludos!!
