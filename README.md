## Configuración Whatsapp Integrator

1.- Ejecutar el siguiente comando
```bash
npm install
```

2.- Crear esquema de base de datos en MySQL relacionado al nombre del proyecto

3.- Pasos a seguir dependiendo ambiente

##### Local
1.- Crear un archivo con la misma configuración de .env.example que ya viene en el repositorio que se llame .env.local y cambiar las configuraciones acorde a lo que se tenga configurado localmente. Variables de entorno importantes a considerar:

2.- Ejecutar en consola desde la raíz del proyecto el comando:
```bash
npm run dev
```
En ese momento se inicializa el server y cualquier cambio que se haga en el código se va a reflejar en ese mismo momento.

#### Explicación comandos package.json

##### start
```bash
npm start
```
Este comando inicializa el server y cualquier cambio que se haga en el código se va a reflejar en ese momento. Se lo debe usar en ambiente local.

##### dev
```bash
npm run dev
```
(Replica de npm start) Este comando inicializa el server y cualquier cambio que se haga en el código se va a reflejar en ese momento. Se lo debe usar en el ambiente local.

##### lint
```bash
npm run lint
```
Este comando revisa el linting de todo el proyecto y arroja errores en donde no se cumpla el lint

##### prettier
```bash
npm run prettier
```
Este comando revisa cualquier error de forma seteado en la librería prettier

##### format
```bash
npm run format
```
Este comando corrige automáticamente cualquier error de forma encontrado por prettier

##### check-format
```bash
npm run check-format
```
Este comando revisa cualquier error de forma encontrado por prettier y arroja errores en los archivos que no estén con el formato correcto

##### build
```bash
npm run build
```
Este comando transpila el typescript a javascript utilizando babel generando un build en javascript en la carpeta build

## Cómo utilizar este repositorio AMBIENTE DEV con DOCKER

- Cómo hacer deploy del proyecto?

1. Construir la imagen
```
sudo docker build -t papagayodev/whatsapp-integrator:dev .
```
en caso de requerir usar una arquitectura diferente a la de la maquina que se use para la compilacion
```
docker buildx build --platform linux/amd64 -t papagayodev/whatsapp-integrator:dev .
```

2. Subir la imagen al Docker Hub (ejecutar "docker login" en caso de no estar logueado desde consola en dockerhub)

```
sudo docker push papagayodev/whatsapp-integrator:dev
```

3. En el server debe estar instalado y configurado Docker
4. Bajar la imagen el server a deployar

```
sudo docker pull papagayodev/whatsapp-integrator:dev
```

5. Construir el contenedor, este comando deja corriendo el contenedor

```
sudo docker run -v /var/logs/whatsapp-integrator:/var/www/html/whatsapp-integrator/logs -d -p 3001:3001 -it --log-opt max-size=10m --log-opt max-file=3 --name whatsapp-integrator --restart always papagayodev/whatsapp-integrator:dev
```

6. Para iniciar el contenedor

```
sudo docker start whatsapp-integrator
