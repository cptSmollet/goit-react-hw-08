// contactsOps.jsx
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations"; // Импортируйте экземпляр axios

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("contacts"); // Используйте instance
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await instance.post("contacts", contact); // Используйте instance
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`contacts/${contactId}`); // Используйте instance
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
