import React, { useState, useEffect } from 'react';

const FormularioRegistro = ({ registro, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    Empresa: '',
    Marca: '',
    CC_Suc: '',
    Compania: '',
    Fecha_DFT: '',
    Periodo: '',
    Semana: '',
    Sucursal: '',
    Fecha_Inicio_Suc: '',
    Fecha_Fin_Suc: '',
    Fecha: '',
    Vtas_Netas: '',
    IVA_Comedor: '',
    Total_IVA_por_Pagar: '',
    IVA_Llevar: '',
    Descuentos: '',
    Vtas_Comedor: '',
    Vtas_Llevar: '',
    Vtas_Entrega: '',
    IVA_Entrega: '',
    IVA_Ventana: '',
    Vtas_Ventana: '',
    Reembolso_Cliente: ''
  });

  useEffect(() => {
    if (registro) {
      setFormData(registro);
    }
  }, [registro]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      <input name="Empresa" value={formData.Empresa} onChange={handleChange} placeholder="Empresa" required />
      <input name="Marca" value={formData.Marca} onChange={handleChange} placeholder="Marca" required />
      <input name="CC_Suc" type="number" value={formData.CC_Suc} onChange={handleChange} placeholder="CC_Suc" required />
      <input name="Compania" type="number" value={formData.Compania} onChange={handleChange} placeholder="Compania" required />
      <input name="Fecha_DFT" type="date" value={formData.Fecha_DFT} onChange={handleChange} placeholder="Fecha_DFT" required />
      <input name="Periodo" value={formData.Periodo} onChange={handleChange} placeholder="Periodo" required />
      <input name="Semana" value={formData.Semana} onChange={handleChange} placeholder="Semana" required />
      <input name="Sucursal" value={formData.Sucursal} onChange={handleChange} placeholder="Sucursal" required />
      <input name="Fecha_Inicio_Suc" type="date" value={formData.Fecha_Inicio_Suc} onChange={handleChange} placeholder="Fecha_Inicio_Suc" required />
      <input name="Fecha_Fin_Suc" type="date" value={formData.Fecha_Fin_Suc} onChange={handleChange} placeholder="Fecha_Fin_Suc" required />
      <input name="Fecha" type="date" value={formData.Fecha} onChange={handleChange} placeholder="Fecha" required />
      <input name="Vtas_Netas" type="number" step="0.01" value={formData.Vtas_Netas} onChange={handleChange} placeholder="Vtas_Netas" required />
      <input name="IVA_Comedor" type="number" step="0.01" value={formData.IVA_Comedor} onChange={handleChange} placeholder="IVA_Comedor" required />
      <input name="Total_IVA_por_Pagar" type="number" step="0.01" value={formData.Total_IVA_por_Pagar} onChange={handleChange} placeholder="Total_IVA_por_Pegar" required />
      <input name="IVA_Llevar" type="number" step="0.01" value={formData.IVA_Llevar} onChange={handleChange} placeholder="IVA_Llevar" required />
      <input name="Descuentos" type="number" step="0.01" value={formData.Descuentos} onChange={handleChange} placeholder="Descuento" required />
      <input name="Vtas_Comedor" type="number" step="0.01" value={formData.Vtas_Comedor} onChange={handleChange} placeholder="Vtas_Comedor" required />
      <input name="Vtas_Llevar" type="number" step="0.01" value={formData.Vtas_Llevar} onChange={handleChange} placeholder="Vtas_Llevar" required />
      <input name="Vtas_Entrega" type="number" step="0.01" value={formData.Vtas_Entrega} onChange={handleChange} placeholder="Vtas_Entrega" required />
      <input name="IVA_Entrega" type="number" step="0.01" value={formData.IVA_Entrega} onChange={handleChange} placeholder="IVA_Entrega" required />
      <input name="IVA_Ventana" type="number" step="0.01" value={formData.IVA_Ventana} onChange={handleChange} placeholder="IVA_Ventana" required />
      <input name="Vtas_Ventana" type="number" step="0.01" value={formData.Vtas_Ventana} onChange={handleChange} placeholder="Vtas_Ventana" required />
      <input name="Reembolso_Cliente" type="number" step="0.01" value={formData.Reembolso_Cliente} onChange={handleChange} placeholder="Reembolso_Cliente" required />
      
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default FormularioRegistro;