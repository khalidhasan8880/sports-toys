import { useLocation } from "react-router-dom";
import usePageViews from "../main";

const Blog = () => {
    const location = useLocation()
    usePageViews(location)

    return (
        <div className="divide-y divide-solid my-12 ">
            <div className="my-9 py-6 ">
                <h3 className="text-2xl mb-3 font-semibold"># What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className="font-semibold text-xl">
                    <span className="font-bold">Ans:</span> Access token and a refresh token are both  an authentication and authorization process. Commonly used in web and mobile applications.
                    An access token is a short-lived token that is used to access protected resources.
                    An access token is a short-lived token.  The client site obtains access token. This code send including in headers with each request to server side for verify user Authorization.
                    The server then verifies the access token and grants access to the requested resource if the token is valid.
                    Access tokens are designed to be lightweight and contain the necessary information to identify the user.
                    <br />
                    Other hand refresh token is a long-lived. Refresh token used for when an access token expires to request a new access token from the authorization server. Refresh credentials used to obtain new access tokens when the current access token expires.
                </p>
            </div>
            <div className="my-9 py-6">
                <h3 className="text-2xl mb-3 font-semibold"># Compare SQL and NoSQL databases?</h3>
                <p className="font-semibold text-xl">
                    <span className="font-bold">Ans:</span>
                    Difference between NOSQL AND SQL 
                    <div className="grid grid-cols-2">
                        <p>SQL is a relational, table based, predefined schema, Powerful query language and Easy to scale</p>
                        <p>NoSQL is non relational, Document based, Dynamic schema, No Query language, Easy to scale</p>
                    </div>
                </p>
            </div>
            <div className="my-9 py-6">
                <h3 className="text-2xl mb-3 font-semibold"># What is express js? What is Nest JS ?</h3>
                <p className="font-semibold text-xl">
                    <span className="font-bold">Ans:</span>
                    Express, is a back end web application framework for building RESTful APIs with Node.js.
                    Express.js is a minimal and flexible. It is designed to build web applications and APIs with simplicity and ease. 
                    <br />
                    NestJS is a progressive Node.js framework that helps build server-side. This is TypeScript-based web application framework built on top of Express.js
                    NestJS provides many features out-of-the-box, such as built-in support for TypeScript, dependency injection, decorators for defining routes and controllers, middleware, and a powerful module system for organizing application components.
                </p>
            </div>
            <div className="my-9 py-6">
                <h3 className="text-2xl mb-3 font-semibold"># What is MongoDB aggregate and how does it work ?</h3>
                <p className="font-semibold text-xl">
                    <span className="font-bold">Ans:</span>
                    Aggregate function works by processing data through a series of stages. The aggregate function works by processing data through a series of stages pipeline. Each stage performs a specific operation. Here is some  aggregate pipeline names :
                    $match,
                    $group,
                    $project,
                    $sort,
                    $limit,
                    $skip,
                    $unwind
                </p>
            </div>

        </div>
    );
};

export default Blog;