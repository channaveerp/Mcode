// import { PortableText } from '@portabletext/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  Portabletext,
} from '../../lib/sanity';
import recipe from '../../recipeapp/schemas/recipe';

const recipesQuery = `*[type == "recipe" slug.current == $slug][0]{
  _id,
  name,
  slug,
  mainImage,
  ingredient[]{
    unit,
    wholeNumber,
    fraction,
    ingredient->{
      name
    }
  },
  instructions,
  likes
}`;

export default function OneRecipe({ data, preview }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { data: recipe } = usePreviewSubscription(recipesQuery, {
    params: { slug: data.recipe?.slug.current },
    initialData: data,
    enabled: preview,
  });
  const [likes, setLikes] = useState(data?.recipe?.likes);

  const addLike = async () => {
    const res = await fetch('/api/handle-like', {
      method: 'POST',
      body: JSON.stringify({ _id: recipe._id }),
    }).catch((error) => console.log(error));

    const data = await res.json();

    setLikes(data.likes);
  };

  console.log('Data', data);
  // const { recipes } = data;
  return (
    <article>
      <h1>{'recipes.name'}</h1>
      <button onClick={addLike}>{likes} ❤️</button>
      <main>
        <img src={urlFor(recipe?.mainImage).url()} />
        <div>
          <ul>
            {recipe.ingredient?.map((ingredient) => {
              <li key={ingredient._key}>
                {ingredient?.whooleNumber}
                {ingredient?.fraction} {ingredient?.whooleNumber}
                <br />
                {ingredient?.ingredient?.name}
              </li>;
            })}
          </ul>
          <PortableText blocks={recipe?.instructions} />
        </div>
      </main>
    </article>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[type == "recipe" && defined(slug.current)]{
    "params" : {
      "slug" : slug.current
    }
  }`
  );
  console.log('Paths', paths);
  return {
    paths,
    fallback: true, // it will not show 404 it will fall back to the previous page.
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params; // slug is as per file name[slug ]

  console.log('Slug', slug);

  const recipe = await sanityClient.fetch(recipesQuery, { slug });
  console.log('RECIPE', recipe);

  return { props: { data: { recipe }, preview: true } };
}
