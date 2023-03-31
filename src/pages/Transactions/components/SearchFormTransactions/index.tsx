import { useForm } from "react-hook-form";
import { SearchForm } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../context/TransactionsContext";
import { Api } from "../../../../lib/axios";
const searchFormSchema = z.object({
  query: z.string(),
});
type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchFormTransactions = () => {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });
  const { setTransactions } = useContext(TransactionsContext);

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    reset({
      query: "",
    });
    const response = await Api.get("transactions",{
      params:{
        q: data.query
      }
    });
    setTransactions(response.data);
  };
  return (
    <SearchForm onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        {...register("query")}
        type="text"
        placeholder="Busque uma transação"
      />
      <button>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.0625 3.4375C5.9559 3.4375 3.4375 5.9559 3.4375 9.0625C3.4375 12.1691 5.9559 14.6875 9.0625 14.6875C12.1691 14.6875 14.6875 12.1691 14.6875 9.0625C14.6875 5.9559 12.1691 3.4375 9.0625 3.4375ZM1.5625 9.0625C1.5625 4.92036 4.92036 1.5625 9.0625 1.5625C13.2046 1.5625 16.5625 4.92036 16.5625 9.0625C16.5625 13.2046 13.2046 16.5625 9.0625 16.5625C4.92036 16.5625 1.5625 13.2046 1.5625 9.0625Z"
            fill="#00B37E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0402 13.0402C13.4063 12.6741 13.9999 12.6741 14.366 13.0402L18.1629 16.8371C18.529 17.2032 18.529 17.7968 18.1629 18.1629C17.7968 18.529 17.2032 18.529 16.8371 18.1629L13.0402 14.366C12.6741 13.9999 12.6741 13.4063 13.0402 13.0402Z"
            fill="#00B37E"
          />
        </svg>
        Buscar
      </button>
    </SearchForm>
  );
};
