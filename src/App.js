import React, { useState, useEffect } from 'react';
import TablaRegistros from './TablaRegistros';
import FormularioRegistro from './FormularioRegistro';
import { getRegistros, createRegistro, updateRegistro, deleteRegistro } from './api';

function App() {
  const [registros, setRegistros] = useState([]);
  const [registroEditando, setRegistroEditando] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    cargarRegistros();
  }, []);

  const cargarRegistros = async () => {
    try {
      const response = await getRegistros();
      setRegistros(response.data);
    } catch (error) {
      console.error('Error cargando registros:', error);
    }
  };

  const handleCreate = () => {
    setRegistroEditando(null);
    setMostrarFormulario(true);
  };

  const handleEdit = (registro) => {
    setRegistroEditando(registro);
    setMostrarFormulario(true);
  };

const handleSave = async (data) => {
    try {
      if (registroEditando) {
        await updateRegistro(registroEditando.IdDFT, data);
      } else {
        await createRegistro(data);
      }
      cargarRegistros();
      setMostrarFormulario(false);
    } catch (error) {
      console.error('Error guardando:', error);
      alert('Error guardando: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar?')) {
      try {
        await deleteRegistro(id);
        cargarRegistros();
      } catch (error) {
        console.error('Error eliminando:', error);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestión de Registros de Ventas</h1>
      <button onClick={handleCreate}>Crear Nuevo Registro</button>
      {mostrarFormulario ? (
        <FormularioRegistro
          registro={registroEditando}
          onSave={handleSave}
          onCancel={() => setMostrarFormulario(false)}
        />
      ) : (
        <TablaRegistros
          registros={registros}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
export default App;