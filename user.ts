TypeScript
import { Algorand, Account, Transaction } from "algorand-sdk";

const algorand = new Algorand();

// Register a contributor
async function registerContributor(account: Account): Promise<Transaction> {
  const transaction = algorand.makeTransaction(account);
  transaction.addCall(quadraticFundingContract, "registerContributor");
  return transaction;
}

// Contribute to a project
async function contributeToProject(account: Account, projectID: number, contributionAmount: number): Promise<Transaction> {
  const transaction = algorand.makeTransaction(account);
  transaction.addCall(quadraticFundingContract, "contributeToProject", [projectID, contributionAmount]);
  return transaction;
}

// Withdraw from a project
async function withdrawFromProject(account: Account, projectID: number, withdrawAmount: number): Promise<Transaction> {
  const transaction = algorand.makeTransaction(account);
  transaction.addCall(quadraticFundingContract, "withdrawFromProject", [projectID, withdrawAmount]);
  return transaction;
}

// Get the project balance
async function getProjectBalance(projectID: number): Promise<number> {
  const transaction = algorand.makeTransaction(account);
  transaction.addCall(quadraticFundingContract, "getProjectBalance", [projectID]);
  const result = await transaction.execute();
  return result.callResults[0].value;
}

// Get the contributor balance
async function getContributorBalance(account: Account): Promise<number> {
  const transaction = algorand.makeTransaction(account);
  transaction.addCall(quadraticFundingContract, "getContributorBalance", [account.address]);
  const result = await transaction.execute();
  return result.callResults[0].value;
}