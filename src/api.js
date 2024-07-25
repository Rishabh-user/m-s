const BASE_URL = "https://mnsapiqa.marksandspencers.co.in/api";

//Search Customer
export const searchCustomer = async (name, mobile, emailID) => {
  try {
    const response = await fetch(`${BASE_URL}/StorePortal/SearchCustomer`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',  // Changed to application/json if that is what the API expects
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, mobile, emailID })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching customer:', error);
    throw error;
  }
};
