import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold">
                Not Found
            </h2>
            <p>
                Could not find the requested resource
            </p>
            branch : {process.env.ENV_BRANCH}
            <Link
                href="/"
                className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
            >
                Return Home
            </Link>
        </div>
    )
};

export default NotFound;
