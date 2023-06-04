const express = require('express');
const fs = require('fs');

const app = express();

// Ruta para leer un archivo JSON
app.get('/api/datos', (req, res) => {
  fs.readFile('datos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer los datos');
      return;
    }

    const datos = JSON.parse(data);
    res.json(datos);
  });
});

app.get('/api/filtro', (req, res) => {
    fs.readFile('filtro.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al leer los datos');
        return;
      }
  
      const datos = JSON.parse(data);
      res.json(datos);
    });
  });

  app.get('/api/colorBase', (req, res) => {
    fs.readFile('colorBase.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al leer los datos');
        return;
      }
  
      const datos = JSON.parse(data);
      res.json(datos);
    });
  });

  app.get('/api/listaVinilos', (req, res) => {
    fs.readFile('listaVinilos.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al leer los datos');
        return;
      }
  
      const datos = JSON.parse(data);
      res.json(datos);
    });
  });

  app.get('/api/menu', (req, res) => {
    fs.readFile('menu.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al leer los datos');
        return;
      }
  
      const datos = JSON.parse(data);
      res.json(datos);
    });
  });

  app.get('/api/recomendaciones', (req, res) => {
    fs.readFile('recomendaciones.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al leer los datos');
        return;
      }
  
      const datos = JSON.parse(data);
      res.json(datos);
    });
  });

  app.get('/api/vendidos', (req, res) => {
    fs.readFile('vendidos.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al leer los datos');
        return;
      }
  
      const datos = JSON.parse(data);
      res.json(datos);
    });
  });

  app.get('/api/nuevos', (req, res) => {
    fs.readFile('nuevos.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al leer los datos');
        return;
      }
  
      const datos = JSON.parse(data);
      res.json(datos);
    });
  });
  
// Ruta para otro endpoint
// app.get('/api/otra-ruta', (req, res) => {
//   res.send('¡Hola desde otra ruta!');
// });

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
