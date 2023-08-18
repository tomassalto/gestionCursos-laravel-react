# Examen Técnico.
Gestion de Cursos. 


Diagrama de la base de datos, link diagram: https://drive.google.com/file/d/1qtryqrzR_Rnxkt6SfZwI3kPdkwQv44YM/view?usp=sharing <br />
## Instalacion

Para este Examen utilice Laravel + React + MYSQL + GITHUB <br />

1. Instalar Nodejs, en mi caso use la version 18.2.0 

```bash
npm install  
```

2. Instalar Laravel 10.18.0

```bash
composer install
```

3. Levantar el server backend con PHP artisan.

```bash
php artisan serve
```

4. Levantar el server frontend con Node.

```bash
npm start
```

5. Fijarse archivo .env.example la configuración de la base de datos, y crear en MySQL una DATABASE:

```bash
DB_CONNECTION=gestioncursos
DB_HOST=127.0.0.1
DB_PORT=3306
```

6. Escribir comando para crear las tablas y sus configuraciones de la base de datos:
   
```bash
php artisan migrate:fresh
```

## Uso

En este ejercicio opte por cargar los cursos yo mismo. Para hacerlo lo realice a traves de MYSQL. Ejemplo de creacion de cursos:<br />
primero creo la categoria <br />

Carga de Categoria
```sql
INSERT INTO categorias (id, nombre) VALUES (1, 'frontend');
INSERT INTO categorias (id, nombre) VALUES (2, 'backend');
```

Carga de Cursos
```sql
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (1, "Javscript", 1, "Curso que muestra las bases de javascript");
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (1, "Javscript", 1, "Curso que muestra las bases de javascript");
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (2, "Javscript", 2, "Curso que muestra las bases de javascript backend");
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (3, "PHP", 1, "Curso que muestra las bases de PHP");
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (4, "PHP", 2, "Curso que muestra las bases de PHP backend"); 
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (5, "React", 1, "Curso que muestra las bases de React backend");
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (6, "Laravel", 2, "Curso que muestra las bases de Laravel backend");
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (7, "MoongoDb", 2, "Curso que muestra las bases de MoongoDb"); 
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (8, "Node", 2, "Curso que muestra las bases de Nodejs backend"); 
INSERT INTO cursos (id, nombre, id_categoria, descripcion) VALUES (9, "Angular", 1, "Curso que muestra las bases de PHP");
```
      


Pantalla inicial:

[![Imagen-de-Whats-App-2023-08-18-a-las-15-55-57.jpg](https://i.postimg.cc/prvW0CvH/Imagen-de-Whats-App-2023-08-18-a-las-15-55-57.jpg)](https://postimg.cc/34LQNgWS) <br />

Pantalla de lista cursos:

[![image.png](https://i.postimg.cc/BZNf94cD/image.png)](https://postimg.cc/0r6B7g42) 

Pantalla de registro:

[![image.png](https://i.postimg.cc/5t5kBSsv/image.png)](https://postimg.cc/4Kd5ZVkN)

Pantalla de estadisticas:

[![image.png](https://i.postimg.cc/j5dvz0w0/image.png)](https://postimg.cc/WDCMvywX) 

Pantalla de desinscripcion:

[![image.png](https://i.postimg.cc/CxsQD4P8/image.png)](https://postimg.cc/68TcxCN6) 

Luego de esto, ya podria realizar cualquier operacion de del CRUD. 
No tendria problema en agregar la funcionalidad de crear un curso, pero al pensar en que el usuario no deberia ser capaz de crearlo decidi hacerlo de esta manera.
Muchas gracias por la oportunidad, quedo a la espera de su respuesta, saludos!!
