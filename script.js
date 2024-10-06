
        // Faz a requisição à API quando a página carrega
        window.onload = function () {
            fetch('http://127.0.0.1:8000/contacts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(contacts => {
                console.log(contacts);  // Verifica os dados no console
                populateTable(contacts);  // Chama a função para preencher a tabela
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        };

        // Função para preencher a tabela com os dados da API
        function populateTable(contacts) {

            console.log(contacts);  // Verifica os dados no console

            const tbody = document.querySelector('#contacts-table tbody');  // Seleciona o tbody da tabela

            // Itera sobre os dados e cria as linhas da tabela
            contacts.forEach(contact => {
                const tr = document.createElement('tr');

                // Cria células para os dados
                const tdId = document.createElement('td');
                tdId.textContent = contact.con_name;  // Supondo que a API retorne 'id'
                tr.appendChild(tdId);

                const tdName = document.createElement('td');
                tdName.textContent = contact.con_email;  // Supondo que a API retorne 'name'
                tr.appendChild(tdName);

                const tdEmail = document.createElement('td');
                tdEmail.textContent = contact.con_phone;  // Supondo que a API retorne 'email'
                tr.appendChild(tdEmail);

                // Adiciona a linha ao corpo da tabela
                tbody.appendChild(tr);
            });
        }