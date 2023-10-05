import Navbar from "@/components/navbar/Navbar";
import { client } from "@/lib/contentful/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";

import React from "react";
import Recipe from "@/components/products/Recipe";

interface productsProps {
  recipes: any;
}

const Products: React.FC<productsProps> = ({ recipes }) => {
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    async function checkSessionAndRedirect() {
      const session = await getSession();

      if (!session) {
        router.push("/auth"); // Redirect to the authentication page
      }
    }

    checkSessionAndRedirect();
  }, [session, router]);

  return (
    <>
      <Navbar />
      <h1>Recipes</h1>
      <div
        style={{
          maxWidth: "800px",
          padding: "20px",
        }}
      >
        {recipes.map((recipe: any, index: any) => (
          <Recipe key={index} recipe={recipe.fields} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: response.items,
      revalidate: 60,
    },
  };
};

export default Products;
