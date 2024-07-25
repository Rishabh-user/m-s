const BASE_URL = "https://mnsapiqa.marksandspencers.co.in/api"

//Search Customer
export const searchCustomer = async (name, mobile, emailID) => {
    const response = await fetch(`${BASE_URL}/StorePortal/SearchCustomer`, {
      method: 'POST',
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json-patch+json'
      },
      body: JSON.stringify({ name, mobile, emailID })
    });
    return response.json();
};

//Get Loyalty Customer Running Balance
export const GetLCRunningBalance = async (membership_No) => {
  const response = await fetch(`${BASE_URL}/StorePortal/LCRunningBalance`, {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json'
    },
    body: JSON.stringify({ membership_No: membership_No })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch running balance');
  }
  return response.json();
};

//Get Coupen Code
export const GetCoupenCodeForAccountNoForStorePortal = async (accountNo) => {
  const response = await fetch(`${BASE_URL}/StorePortal/VouchersByAccountNoForStorePortal`, {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json'
    },
    body: JSON.stringify({ accountNo: accountNo })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch running balance');
  }
  return response.json();
};

//Get Today's Sale
export const GetTodaysSale = async (accountNo) => {
  const response = await fetch(`${BASE_URL}/StorePortal/SalesTracker`, {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json'
    },
    body: JSON.stringify({ accountNo: accountNo })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch running balance');
  }
  return response.json();
};