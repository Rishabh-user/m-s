import axios from "axios";

export const BASE_URL = "https://mnsapiqa.marksandspencers.co.in/api"

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

//Get Active PromoCode
export const GetActivePromotionbyUPC = async (upc) => {
  const response = await fetch(`${BASE_URL}/StorePortal/ActivePromotionByUPC`, {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json'
    },
    body: JSON.stringify({ upc: upc })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch running balance');
  }
  return response.json();
};

//Get GetLoyaltyEnrollment
export const GetLoyaltyEnrollment = async (storeNo, dateFrom, dateTo) => {
  const response = await fetch(`${BASE_URL}/StorePortal/LoyaltyEnrollmentSummary`, {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json'
    },
    body: JSON.stringify({ storeNo, dateFrom, dateTo })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch running balance');
  }
  return response.json();
};

//Get Get Missed Loyalty  Opportuniy
export const GetMissedLoyaltyOpp = async (storeNo, dateFrom, dateTo) => {
  const response = await fetch(`${BASE_URL}/StorePortal/MissedLoyaltyOpportunity`, {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json'
    },
    body: JSON.stringify({ storeNo, dateFrom, dateTo })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch running balance');
  }
  return response.json();
};

//Get Get Transaction Summary
export const GetTransactionSummary = async (storeNo, dateFrom, dateTo) => {
  const response = await fetch(`${BASE_URL}/StorePortal/TransactionSummaryByStore`, {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json'
    },
    body: JSON.stringify({ storeNo, dateFrom, dateTo })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch running balance');
  }
  return response.json();
};