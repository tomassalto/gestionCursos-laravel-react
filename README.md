# gestionCursos-laravel-react
Gestion de Cursos. 

Para este curso utilice Laravel + React + MYSQL + GITHUB <br />

Diagrama de la base de datos, link diagram: https://drive.google.com/file/d/1qtryqrzR_Rnxkt6SfZwI3kPdkwQv44YM/view?usp=sharing <br />

En este ejercicio opte por cargar los cursos yo mismo. Para hacerlo lo realice a traves de MYSQL. Ejemplo de creacion de cursos<br />

//primero creo la categoria
INSERT INTO categorias (id, nombre) VALUES (1, 'frontend');<br />
INSERT INTO categorias (id, nombre) VALUES (2, 'backend');<br />

//luego carga de cursos
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (1, "Javscript", 1, "Curso que muestra las bases de javascript");<br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (2, "Javscript", 2, "Curso que muestra las bases de javascript backend");<br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (3, "PHP", 1, "Curso que muestra las bases de PHP");<br />
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (4, "PHP", 1, "Curso que muestra las bases de PHP backend");<br />

Luego de esto, ya podria realizar cualquier operacion de del CRUD.  <br />

Muchas gracias por la oportunidad, quedo a la espera de su respuesta, saludos!!
