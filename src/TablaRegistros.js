import React from 'react';

const TablaRegistros = ({ registros, onEdit, onDelete }) => {
  return (
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>IdDFT</th>
          <th>Empresa</th>
          <th>Marca</th>
          <th>CC_Suc</th>
          <th>Compania</th>
          <th>Fecha_DFT</th>
          <th>Periodo</th>
          <th>Semana</th>
          <th>Sucursal</th>
          <th>Fecha_Inicio_Suc</th>
          <th>Fecha_Fin_Suc</th>
          <th>Fecha</th>
          <th>Vtas_Netas</th>
          <th>IVA_Comedor</th>
          <th>Total_IVA_por_Pagar</th>
          <th>IVA_Llevar</th>
          <th>Descuentos</th>
          <th>Vtas_Comedor</th>
          <th>Vtas_Llevar</th>
          <th>Vtas_Entrega</th>
          <th>IVA_Entrega</th>
          <th>IVA_Ventana</th>
          <th>Vtas_Ventana</th>
          <th>Reembolso_Cliente</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {registros.map((reg) => (
          <tr key={reg.IdDFT}>
            <td>{reg.IdDFT}</td>
            <td>{reg.Empresa}</td>
            <td>{reg.Marca}</td>
            <td>{reg.CC_Suc}</td>
            <td>{reg.Compania}</td>
            <td>{reg.Fecha_DFT}</td>
            <td>{reg.Periodo}</td>
            <td>{reg.Semana}</td>
            <td>{reg.Sucursal}</td>
            <td>{reg.Fecha_Inicio_Suc}</td>
            <td>{reg.Fecha_Fin_Suc}</td>
            <td>{reg.Fecha}</td>
            <td>{reg.Vtas_Netas}</td>
            <td>{reg.IVA_Comedor}</td>
            <td>{reg.Total_IVA_por_Pagar}</td>
            <td>{reg.IVA_Llevar}</td>
            <td>{reg.Descuentos}</td>
            <td>{reg.Vtas_Comedor}</td>
            <td>{reg.Vtas_Llevar}</td>
            <td>{reg.Vtas_Entrega}</td>
            <td>{reg.IVA_Entrega}</td>
            <td>{reg.IVA_Ventana}</td>
            <td>{reg.Vtas_Ventana}</td>
            <td>{reg.Reembolso_Cliente}</td>
            <td>
              <button onClick={() => onEdit(reg)}>Editar</button>
              <button onClick={() => onDelete(reg.IdDFT)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaRegistros;