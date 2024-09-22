import AddCommentForm from "@/components/comments/AddCommentForm";
import Comments from "@/components/comments/Comments";
import { Article } from "@/utils/types";

interface SingleArticleProps {
    params: { id: string }
}

const SingleArticle = async ({ params }: SingleArticleProps) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch l'article: ${params.id}`);
    }

    const article: Article = await response.json();

    return (
        <section className="container mx-auto p-6 max-w-4xl">
            <h2 className="text-lg text-gray-500 mb-2">Article ID: {article.id}</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">{article.title}</h1>
                <span className="text-sm text-gray-400 block mb-6">01-01-2024</span>
                <p className="text-gray-700 leading-relaxed">{article.body}</p>
            </div>
            <AddCommentForm/>
            <Comments/>
        </section>
    );
}

export default SingleArticle;
