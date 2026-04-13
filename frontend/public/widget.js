(function() {
  // Cấu hình
  const WIDGET_URL = 'http://localhost:3000/widget/chat';
  const PRIMARY_COLOR = '#2563eb';

  // Khởi tạo container
  const container = document.createElement('div');
  container.id = 'autoflow-widget-container';
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  container.style.zIndex = '999999';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'flex-end';
  document.body.appendChild(container);

  // Tạo Iframe (ẩn mặc định)
  const iframe = document.createElement('iframe');
  iframe.src = WIDGET_URL;
  iframe.style.width = '380px';
  iframe.style.height = '600px';
  iframe.style.maxHeight = 'calc(100vh - 100px)';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '16px';
  iframe.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';
  iframe.style.display = 'none';
  iframe.style.marginBottom = '15px';
  iframe.style.transition = 'all 0.3s ease-in-out';
  container.appendChild(iframe);

  // Tạo Nút Toggle
  const button = document.createElement('button');
  button.style.width = '60px';
  button.style.height = '60px';
  button.style.borderRadius = '50%';
  button.style.backgroundColor = PRIMARY_COLOR;
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.4)';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.transition = 'transform 0.2s';

  // Biểu tượng (dùng text hoặc icon)
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `;
  container.appendChild(button);

  // Logic Toggle
  let isOpen = false;
  button.onclick = () => {
    isOpen = !isOpen;
    if (isOpen) {
      iframe.style.display = 'block';
      button.style.transform = 'rotate(90deg)';
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
    } else {
      iframe.style.display = 'none';
      button.style.transform = 'rotate(0deg)';
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      `;
    }
  };

  // Hover Effect
  button.onmouseenter = () => button.style.transform = isOpen ? 'rotate(90deg) scale(1.1)' : 'scale(1.1)';
  button.onmouseleave = () => button.style.transform = isOpen ? 'rotate(90deg) scale(1)' : 'scale(1)';

})();
