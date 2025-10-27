function generarQR() 
{
    // Obtener los datos.
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let input3 = document.getElementById('input3').value.trim();
    let input4 = document.getElementById('input4').value.trim();

    // Validar campos.
    let textoCompleto = [input1, input2, input3, input4].filter(Boolean).join(' ');
    if (textoCompleto === "")     
    {
        alert("Ingresa al menos un texto para generar el QR.");
        return;
    }

    // Evitar varios QRs. 
    let contenedor = document.getElementById('qr-code');
    contenedor.innerHTML = "";

    // Generar QR desde API.
    let qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=350x200&data=' + encodeURIComponent(textoCompleto);

    // Crear imagen del QR
    let qrImg = document.createElement('img');
    qrImg.src = qrCodeURL;
    qrImg.alt = 'Código QR generado';
    qrImg.style.marginTop = "20px";
    qrImg.classList.add('qr-code');

    // Mostrar el QR
    contenedor.appendChild(qrImg);

    // Borrar el QR
    let botonBorrar = document.createElement('button');
    botonBorrar.textContent = "Borrar QR";
    botonBorrar.style.display = "block";
    botonBorrar.style.margin = "15px auto";
    botonBorrar.onclick = function() 
    {
        contenedor.innerHTML = "";
        alert("Código QR eliminado.");
    };
    contenedor.appendChild(botonBorrar);
}