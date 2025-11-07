function callService(service) {
  fetch(`http://localhost:${getPort(service)}/${service}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    });
}

function getPort(service) {
  const ports = {
    catalog: 3001,
    inventory: 3002,
    orders: 3003,
    payment: 3004,
    shipping: 3005,
    feedback: 3006
  };
  return ports[service];
}
