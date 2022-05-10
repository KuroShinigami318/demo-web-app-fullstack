import gql from "graphql-tag";

export const GET_ALL_PHONES = gql`
query GetPhones {
  phones {
    maSP
    tenSp
    MoTa
    GiaCa
    SL
    phoneDetail {
      BoNhoTrong
      BoNho
      Pin
    	HinhAnh
    }
  }
}`