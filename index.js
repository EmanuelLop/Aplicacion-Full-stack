const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error BD:', err);
    return;
  }
  console.log('BD conectada');
  
  db.run(`
    CREATE TABLE IF NOT EXISTS registros_ventas (
      IdDFT INTEGER PRIMARY KEY AUTOINCREMENT,
      Empresa TEXT,
      Marca TEXT,
      CC_Suc INTEGER,
      Compania INTEGER,
      Fecha_DFT TEXT,
      Periodo TEXT,
      Semana TEXT,
      Sucursal TEXT,
      Fecha_Inicio_Suc TEXT,
      Fecha_Fin_Suc TEXT,
      Fecha TEXT,
      Vtas_Netas REAL,
      IVA_Comedor REAL,
      Total_IVA_por_Pagar REAL,
      IVA_Llevar REAL,
      Descuentos REAL,
      Vtas_Comedor REAL,
      Vtas_Llevar REAL,
      Vtas_Entrega REAL,
      IVA_Entrega REAL,
      IVA_Ventana REAL,
      Vtas_Ventana REAL,
      Reembolso_Cliente REAL
    )
  `, (err) => {
    if (err) console.error('Error creando tabla:', err);
    else console.log('Tabla lista');
  });
});

// GET /registros
app.get('/registros', (req, res) => {
  db.all('SELECT * FROM registros_ventas', [], (err, rows) => {
    if (err) {
      console.error('Error GET:', err);
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// POST /registros
app.post('/registros', (req, res) => {
  console.log('POST recibido:', req.body);
  const {
    Empresa, Marca, CC_Suc, Compania, Fecha_DFT, Periodo, Semana, Sucursal, Fecha_Inicio_Suc,
    Fecha_Fin_Suc, Fecha, Vtas_Netas, IVA_Comedor, Total_IVA_por_Pagar, IVA_Llevar, Descuentos,
    Vtas_Comedor, Vtas_Llevar, Vtas_Entrega, IVA_Entrega, IVA_Ventana, Vtas_Ventana, Reembolso_Cliente
  } = req.body;

  if (!Empresa || !Marca) {
    return res.status(400).send('Campos requeridos faltan');
  }

  const query = `
    INSERT INTO registros_ventas 
    (Empresa, Marca, CC_Suc, Compania, Fecha_DFT, Periodo, Semana, Sucursal, Fecha_Inicio_Suc, Fecha_Fin_Suc, Fecha,
     Vtas_Netas, IVA_Comedor, Total_IVA_por_Pagar, IVA_Llevar, Descuentos, Vtas_Comedor, Vtas_Llevar, Vtas_Entrega,
     IVA_Entrega, IVA_Ventana, Vtas_Ventana, Reembolso_Cliente)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [
    Empresa, Marca, CC_Suc, Compania, Fecha_DFT, Periodo, Semana, Sucursal, Fecha_Inicio_Suc, Fecha_Fin_Suc, Fecha,
    Vtas_Netas, IVA_Comedor, Total_IVA_por_Pagar, IVA_Llevar, Descuentos, Vtas_Comedor, Vtas_Llevar, Vtas_Entrega,
    IVA_Entrega, IVA_Ventana, Vtas_Ventana, Reembolso_Cliente
  ], function(err) {
    if (err) {
      console.error('Error insertando:', err);
      res.status(500).send(err.message);
    } else {
      console.log('Insertado ID:', this.lastID);
      res.status(201).json({ id: this.lastID });
    }
  });
});

// PUT /registros/:id
app.put('/registros/:id', (req, res) => {
  const id = req.params.id;
  const {
    Empresa, Marca, CC_Suc, Compania, Fecha_DFT, Periodo, Semana, Sucursal, Fecha_Inicio_Suc, Fecha_Fin_Suc, Fecha,
    Vtas_Netas, IVA_Comedor, Total_IVA_por_Pagar, IVA_Llevar, Descuentos, Vtas_Comedor, Vtas_Llevar, Vtas_Entrega,
    IVA_Entrega, IVA_Ventana, Vtas_Ventana, Reembolso_Cliente
  } = req.body;

  const query = `
    UPDATE registros_ventas SET
    Empresa = ?, Marca = ?, CC_Suc = ?, Compania = ?, Fecha_DFT = ?, Periodo = ?, Semana = ?, Sucursal = ?,
    Fecha_Inicio_Suc = ?, Fecha_Fin_Suc = ?, Fecha = ?, Vtas_Netas = ?, IVA_Comedor = ?, Total_IVA_por_Pagar = ?,
    IVA_Llevar = ?, Descuentos = ?, Vtas_Comedor = ?, Vtas_Llevar = ?, Vtas_Entrega = ?, IVA_Entrega = ?,
    IVA_Ventana = ?, Vtas_Ventana = ?, Reembolso_Cliente = ?
    WHERE IdDFT = ?
  `;

  db.run(query, [
    Empresa, Marca, CC_Suc, Compania, Fecha_DFT, Periodo, Semana, Sucursal, Fecha_Inicio_Suc, Fecha_Fin_Suc, Fecha,
    Vtas_Netas, IVA_Comedor, Total_IVA_por_Pagar, IVA_Llevar, Descuentos, Vtas_Comedor, Vtas_Llevar, Vtas_Entrega,
    IVA_Entrega, IVA_Ventana, Vtas_Ventana, Reembolso_Cliente, id
  ], function(err) {
    if (err) {
      console.error('Error actualizando:', err);
      res.status(500).send(err.message);
    } else if (this.changes === 0) {
      res.status(404).send('Registro no encontrado');
    } else {
      res.send('Actualizado');
    }
  });
});

// DELETE /registros/:id
app.delete('/registros/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM registros_ventas WHERE IdDFT = ?', [id], function(err) {
    if (err) {
      console.error('Error eliminando:', err);
      res.status(500).send(err.message);
    } else if (this.changes === 0) {
      res.status(404).send('Registro no encontrado');
    } else {
      res.send('Eliminado');
    }
  });
});

app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:${port}');
});