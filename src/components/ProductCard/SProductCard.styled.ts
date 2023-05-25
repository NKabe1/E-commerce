import styled from "styled-components";
import tw from "twin.macro";

export const SProductCard = styled.div`
  ${tw`max-w-lg p-6 bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200`}
  .img {
    height: 200px;
    width: 100%;
  }
  .card-title {
    display: flex;
    justify-content: space-between;
    .product-info {
      ${tw`mt-2 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white`}
    }
    .price {
      display: flex;
      align-items: center;
    }
  }

  .discount-info {
    display: flex;
    gap: 6px;
    .prev-price {
      display: flex;
      align-items: center;
      font-weight: bold;
      text-decoration: line-through;
    }
    .percentage {
      display: flex;
      align-items: center;
      color: red;
      & > h5 {
        margin-left: 6px;
      }
    }
  }

  .rating {
    margin-bottom: 12px;
  }
`;
