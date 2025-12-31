document.addEventListener('DOMContentLoaded', () => {
    const checkStatusBtn = document.getElementById('checkStatus');
    const statusResult = document.getElementById('statusResult');

    checkStatusBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/health');
            const data = await response.json();
            
            statusResult.className = 'status-result success';
            statusResult.textContent = `✓ ${data.message} - Status: ${data.status}`;
        } catch (error) {
            statusResult.className = 'status-result error';
            statusResult.textContent = `✗ Error: ${error.message}`;
        }
    });
});
