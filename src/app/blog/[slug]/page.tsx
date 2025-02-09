import BlogDetailSection from "@/components/sections/blog-detail-section";
import { getBlogDetails } from '@/graphql';
import { BlogProps } from '@/types';
import React from 'react'

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

const Blog = async ({ params }: Props) => {

    const { slug } = await params;

    const data: BlogProps = await getBlogDetails(slug);

    return (
        <main className="relative flex flex-col items-center justify-center px-0 md:px-4 py-20">
            <BlogDetailSection data={data} />
        </main>
    )
};

export default Blog
