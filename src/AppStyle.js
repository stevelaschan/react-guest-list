/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export const guestListStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .firstNameList {
    font-size: 20px;
    padding-left: auto;
    padding-right: 0.2rem;
    font-weight: bold;
  }

  .lastNameList {
    font-size: 20px;
    padding-right: auto;
    padding-left: 0.2rem;
    font-weight: bold;
  }

  .attendingCheckBoxList {
    border-radius: 8px;
    margin-left: 16px;
  }

  span {
    font-size: 16px;
  }

  .deleteButton {
    display: flex;
    padding: 6px 8px 6px 8px;
    margin: 0px 8px 0px 8px;
    border-radius: 8px;
    color: black;
    background-color: #ecefed;
    font-size: 14px;
  }

  .deleteButton:hover {
    cursor: pointer;
  }

  div {
    display: flex;
    border: 2px solid white;
    border-radius: 8px;
    margin: 18px;
    padding: 18px 14px;
    width: 450px;
    justify-content: space-evenly;
  }
`;

export const firstLastNameForm = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 32px;

  span {
    font-size: 24px;
    margin-left: 32px;
  }

  .firstNameInput {
    font-size: 16px;
    border-radius: 8px;
    margin: 8px;
    padding: 4px;
  }

  .lastNameInput {
    font-size: 16px;
    border-radius: 8px;
    margin: 8px;
    padding: 4px;
  }

  .addGuestButton {
    font-size: 16px;
    border-radius: 12px;
    margin: 8px;
    padding: 8px;
    background-color: black;
  }

  .addGuestButton:hover {
    cursor: pointer;
  }
`;
