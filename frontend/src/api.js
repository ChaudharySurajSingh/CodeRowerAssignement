export const BASE_URL = 'http://localhost:8080';

export async function fetchConfig(id) {
  const res = await fetch(`${BASE_URL}/api/configurations/${id}`);
  if (!res.ok) throw new Error('Configuration not found');
  const data = await res.json();
  return data; 
}

export async function updateRemark(id, remark) {
  const res = await fetch(`${BASE_URL}/api/configurations/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ remark }),
  });
  if (!res.ok) throw new Error('Update failed');
  const data = await res.json();
  return data.message; 
}
