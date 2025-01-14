import React from 'react'

const ModalConfirmation = ({ isOpen, onAccept, onCancel }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center">
          <h2 className="text-lg font-bold mb-4">¿Desea finalizar la compra?</h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={onAccept}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Aceptar
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ModalConfirmation