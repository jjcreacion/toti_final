function mascaraCPF(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = value;
}

function mascaraTelefono(event) {
    let tecla = event.key;
    let telefono = event.target.value.replace(/\D+/g, "");

    if (/^[0-9]$/i.test(tecla)) {
      telefono = telefono + tecla;
      let tamaño = telefono.length;

      if (tamaño >= 12) {
        return false;
      }

      if (tamaño > 10) {
        telefono = telefono.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
      } else if (tamaño > 5) {
        telefono = telefono.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      } else if (tamaño > 2) {
        telefono = telefono.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
      } else {
        telefono = telefono.replace(/^(\d*)/, "($1");
      }

      event.target.value = telefono;
    }

    if (!["Backspace", "Delete"].includes(tecla)) {
      return false;
    }
  }

  const ciudadesPorEstado = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá"],
    AL: ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo"],
    AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque"],
    AM: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari"],
   };
  
  document.getElementById('estados').addEventListener('change', function() {
    const estadoSeleccionado = this.value;
    const ciudadesSelect = document.getElementById('cidades');
    
    ciudadesSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
    
    if (estadoSeleccionado) {
      const ciudades = ciudadesPorEstado[estadoSeleccionado];
      ciudades.forEach(function(ciudad) {
        const option = document.createElement('option');
        option.value = ciudad;
        option.textContent = ciudad;
        ciudadesSelect.appendChild(option);
      });
    }
  });

  document.getElementById('cpe').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Elimina todo lo que no sea dígito
    value = value.replace(/^(\d{5})(\d)/, '$1-$2'); // Aplica la máscara
    e.target.value = value;
  });

  function limpiarFormulario() {
    document.getElementById('miForm').reset();
  }