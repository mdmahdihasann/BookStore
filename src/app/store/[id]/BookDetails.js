"use client";

import BooksCardDetails from "@/components/books/BooksCardDetails";
import { products } from "@/database/database"
import { useParams } from "next/navigation";

const BookDetails = () => {
    const {id} = useParams();

  const product = products.find(item => item.id == id);

  if (!product) return <p>Loading...</p>;

  return <div className="flex justify-center items-center w-full md:w-xl"><BooksCardDetails product={product} /></div>;
};

export default BookDetails;
