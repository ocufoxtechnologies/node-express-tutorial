import Account, { findById, find, findByIdAndUpdate } from "../models/account";

export const createNewAccount = async account => {
  const newAccount = new Account(account);
  let createdAccount = await newAccount.save();
  return createdAccount.populate("customer").execPopulate();
};

export const getAccountById = id => {
  return findById(id).populate("customer");
};

export const getAccounts = () => {
  return find().populate("customer");
};

export const updateBalance = (id, amount) => {
  return findByIdAndUpdate(id, {
    $inc: {
      balance: amount
    }
  });
};
