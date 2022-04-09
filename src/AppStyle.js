/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export const firstLastNameForm = css`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: auto;
    margin: 50px 50px 16px 50px;
    border-radius: 16px;
    background-color: #424242;
    padding: 32px 32px 16px 32px;
  }

  div {
    background-color: #424242;
  }

  span {
    font-size: 24px;
    margin-right: 24px;
    margin-left: 24px;
    background-color: #424242;
  }

  .firstNameInput {
    font-size: 16px;
    border-radius: 8px;
    margin: 8px;
    padding: 4px;
    background-color: #2e2e2e;
  }

  .lastNameInput {
    font-size: 16px;
    border-radius: 8px;
    margin: 8px;
    padding: 4px;
    background-color: #2e2e2e;
  }

  .addGuestButton {
    font-size: 16px;
    border-radius: 14px;
    margin: 20px 8px 8px 8px;
    padding: 12px;
    background-color: #2e2e2e;
    box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15);
    transform: translate3d(0, -3px, 5px);
    font-weight: 500;
  }

  .addGuestButton:focus {
    outline: none;
  }

  .addGuestButton:hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
    box-shadow: none;
  }
  .deleteGuestsButton {
    font-size: 16px;
    border-radius: 14px;
    margin: 20px 8px 8px 8px;
    padding: 12px;
    background-color: #2e2e2e;
    box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15);
    transform: translate3d(0, -3px, 5px);
    font-weight: 500;
  }

  .deleteGuestsButton:focus {
    outline: none;
  }

  .deleteGuestsButton:hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
    box-shadow: none;
  }
`;

export const guestListStyle = css`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  padding: 8px;
  flex-direction: row;

  td {
    background-color: #424242;
  }

  .firstNameList {
    font-size: 20px;
    padding-left: auto;
    padding-right: 0.2rem;
    font-weight: bold;
    margin-top: 4px;
  }

  .lastNameList {
    font-size: 20px;
    padding-right: auto;
    padding-left: 0.2rem;
    font-weight: bold;
    margin-top: 4px;
  }

  .attendingCheckBoxList {
    border-radius: 8px;
    margin-left: 16px;
    margin-top: 6px;
  }

  span {
    font-size: 16px;
    background-color: #424242;
  }

  .deleteButton {
    display: flex;
    padding: 6px 8px 6px 8px;
    margin: 0px 8px 0px 8px;
    border-radius: 8px;
    background-color: #2e2e2e;
    font-size: 14px;
    font-weight: 500;
  }

  .deleteButton:hover {
    cursor: pointer;
    transform: translate3d(0, 2px, 5px);
  }

  div {
    display: flex;
    border: 2px solid #424242;
    border-radius: 8px;
    margin: 18px;
    padding: 18px 14px;
    width: 450px;
    justify-content: space-evenly;
    background-color: #424242;
  }
`;
