window.onload = function() {
            const addButton = document.getElementById('addButton');
            addButton.addEventListener('click', function() {
                const symbolInput = document.getElementById('symbolInput').value;
                const intervalInput = document.getElementById('intervalInput').value;
                const changeAmplInput = document.getElementById('changeAmplInput').value;

                if (symbolInput && intervalInput && changeAmplInput) {
                    const tableBody = document.querySelector('#alertTable tbody');
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${symbolInput}</td>
                        <td>${intervalInput}</td>
                        <td>${changeAmplInput}</td>
                        <td><button class="deleteButton">Xóa</button></td>
                    `;
                    tableBody.appendChild(newRow);
        
                    const deleteButton = newRow.querySelector('.deleteButton');
                    deleteButton.addEventListener('click', function() {
                        newRow.remove();
                    });
        
                    // Clear input fields after adding the new row
                    document.getElementById('symbolInput').value = '';
                    document.getElementById('intervalInput').value = '';
                    document.getElementById('changeAmplInput').value = '';
                } else {
                    alert('Vui lòng điền đủ thông tin cảnh báo.');
                }
            });
        };