import React from "react";
import { registerContributor, contributeToProject, withdrawFromProject, getProjectBalance, getContributorBalance } from "./quadraticFundingContract";

const RegisterContributorButton = () => {
  const [isRegistered, setIsRegistered] = React.useState(false);

  const handleRegisterContributor = async () => {
    const transaction = await registerContributor();
    const result = await transaction.execute();

    if (result.status === "success") {
      setIsRegistered(true);
    }
  };

  if (isRegistered) {
    return <div>You are registered as a contributor.</div>;
  }

  return <button type="button" onClick={handleRegisterContributor}>Register as Contributor</button>;
};

const ContributeToProjectButton = ({ projectID }) => {
  const [contributionAmount, setContributionAmount] = React.useState(0);

  const handleContributeToProject = async () => {
    const transaction = await contributeToProject(projectID, contributionAmount);
    const result = await transaction.execute();

    if (result.status === "success") {
      // Handle the successful contribution
    }
  };

  return (
    <div>
      <input type="number" value={contributionAmount} onChange={(e) => setContributionAmount(e.target.value)} />
      <button type="button" onClick={handleContributeToProject}>Contribute to Project</button>
    </div>
  );
};

const WithdrawFromProjectButton = ({ projectID }) => {
  const [withdrawAmount, setWithdrawAmount] = React.useState(0);

  const handleWithdrawFromProject = async () => {
    const transaction = await withdrawFromProject(projectID, withdrawAmount);
    const result = await transaction.execute();

    if (result.status === "success") {
      // Handle the successful withdrawal
    }
  };

  return (
    <div>
      <input type="number" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} />
      <button type="button" onClick={handleWithdrawFromProject}>Withdraw from Project</button>
    </div>
  );
};

const GetProjectBalanceButton = ({ projectID }) => {
  const [projectBalance, setProjectBalance] = React.useState(0);

  const handleGetProjectBalance = async () => {
    const balance = await getProjectBalance(projectID);
    setProjectBalance(balance);
  };

  return (
    <div>
      <button type="button" onClick={handleGetProjectBalance}>Get Project Balance</button>
      <div>Project Balance: {projectBalance}</div>
    </div>
  );
};

const GetContributorBalanceButton = () => {
  const [contributorBalance, setContributorBalance] = React.useState(0);

  const handleGetContributorBalance = async () => {
    const balance = await getContributorBalance();
    setContributorBalance(balance);
  };

  return (
    <div>
      <button type="button" onClick={handleGetContributorBalance}>Get Contributor Balance</button>
      <div>Contributor Balance: {contributorBalance}</div>
    </div>
  );
};

export { RegisterContributorButton, ContributeToProjectButton, WithdrawFromProjectButton, GetProjectBalanceButton, GetContributorBalanceButton };
