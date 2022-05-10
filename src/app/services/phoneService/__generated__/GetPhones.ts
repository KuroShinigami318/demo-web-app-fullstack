/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPhones
// ====================================================

export interface GetPhones_phones_phoneDetail {
  __typename: "PhoneDetail";
  BoNhoTrong: string;
  BoNho: string;
  Pin: string;
  HinhAnh: string;
}

export interface GetPhones_phones {
  __typename: "Phone";
  maSP: number;
  tenSp: string;
  MoTa: string;
  GiaCa: number;
  SL: number;
  phoneDetail: GetPhones_phones_phoneDetail;
}

export interface GetPhones {
  phones: GetPhones_phones[];
}
