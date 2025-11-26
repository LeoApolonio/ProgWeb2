// Verificar si se cargó toda la estructura.
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.modal').forEach(m => {
        m.style.display = 'none';
        m.setAttribute('aria-hidden', 'true');
    });

    // Mostrar el modal
    function openModal(id) {
        const m = document.getElementById(id);
        if (m) {
            m.style.display = 'flex';
            m.setAttribute('aria-hidden', 'false');
        }
    }

    // Ocultar el modal
    function closeModal(id) {
        const m = document.getElementById(id);
        if (m) {
            m.style.display = 'none';
            m.setAttribute('aria-hidden', 'true');
        }
    }

    // Botones para cerrar
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close')));
    });

    // Cerrar con dar click fuera
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
            }
        });
    });

    // Edición de usuario
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const id = row.dataset.id;
            const name = row.dataset.name || '';
            const email = row.dataset.email || '';
            const carrera = row.dataset.carrera || '';
            const semestre = row.dataset.semestre || '';

            document.getElementById('editId').value = id;
            document.getElementById('editName').value = name;
            document.getElementById('editEmail').value = email;
            document.getElementById('editCarrera').value = carrera;
            document.getElementById('editSemestre').value = semestre;
            document.getElementById('editMsg').textContent = '';

            openModal('modalEdit');
        });
    });

    // Envio de edición
    const formEdit = document.getElementById('formEdit');
    formEdit.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('editId').value;
        const name = document.getElementById('editName').value;
        const email = document.getElementById('editEmail').value;
        const carrera = document.getElementById('editCarrera').value;
        const semestre = document.getElementById('editSemestre').value;
        const msg = document.getElementById('editMsg');

        msg.textContent = 'Procesando...';

        try {
            const body = new URLSearchParams();
            body.append('name', name);
            body.append('email', email);
            body.append('carrera', carrera);
            body.append('semestre', semestre);

            const resp = await fetch(`/confirm-update/${encodeURIComponent(id)}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body.toString()
            });

            const data = await resp.json();
            if (!data.ok) {
                msg.textContent = data.msg || 'Error desconocido';
                return;
            }

            // Actualiza registro en tiempo real.
            const row = document.querySelector(`tr[data-id="${id}"]`);
            if (row) {
                row.dataset.name = name;
                row.dataset.email = email;
                row.dataset.carrera = carrera;
                row.dataset.semestre = semestre;

                row.children[1].textContent = name;
                row.children[2].textContent = email;
                row.children[3].textContent = carrera;
                row.children[4].textContent = semestre;
            }

            msg.textContent = 'Actualizado correctamente';
            setTimeout(() => {
                closeModal('modalEdit');
                msg.textContent = '';
            }, 700);

        } catch (err) {
            msg.textContent = 'Error en la petición';
            console.error(err);
        }
    });

    // Borrar registro
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const id = row.dataset.id;
            const name = row.dataset.name || '';

            document.getElementById('deleteId').textContent = id;
            document.getElementById('deleteName').textContent = name;
            document.getElementById('deleteMsg').textContent = '';

            const confirmBtn = document.getElementById('confirmDelete');
            confirmBtn.dataset.id = id;

            openModal('modalDelete');
        });
    });

    document.getElementById('confirmDelete').addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        const msg = document.getElementById('deleteMsg');

        msg.textContent = 'Procesando...';

        try {
            const resp = await fetch(`/confirm-delete/${encodeURIComponent(id)}`, {
                method: 'POST'
            });

            const data = await resp.json();
            if (!data.ok) {
                msg.textContent = data.msg || 'Error desconocido';
                return;
            }

            // Se elimina la fila.
            const row = document.querySelector(`tr[data-id="${id}"]`);
            if (row) row.remove();

            msg.textContent = 'Eliminado correctamente';
            setTimeout(() => {
                closeModal('modalDelete');
                msg.textContent = '';
            }, 600);

        } catch (err) {
            msg.textContent = 'Error en la petición';
            console.error(err);
        }
    });

    // Añadir registro
    document.getElementById('openAdd').addEventListener('click', () => {
        document.getElementById('addMsg').textContent = '';
        openModal('modalAdd');
    });
});
