import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="blog-container">
          <div className="blog-div" data-aos="zoom-in-down">
            <h1 className="blog-title">
              <span>Question-1:</span>Difference between javascript and nodejs?
            </h1>
            <p>
              <span>Answer:</span>
              Difference between Nodejs and JavaScript :
              <li>
                Javascript is a programming language that may be used to create
                website scripts. NodeJS, on the other hand, is a Javascript
                runtime environment.
              </li>
              <li>
                Javascript is a scripting language that can only be used in
                browsers. However, with the help of NodeJS, we can run
                Javascript outside of the browser.
              </li>
              <li>
                Javascript is primarily used on the client side of the
                application.Furthermore, Node JS is primarily used on the server
                side.
              </li>
              <li>
                Javascript has the ability to add HTML and manipulate the DOM.
                However, Nodejs lacks the ability to add HTML tags.
              </li>
              <li>
                Javascript can run in any browser engine, such as Safari's JS
                core and Firefox's Spidermonkey. V8, on the other hand, is
                node's Javascript engine. js that parses Javascript and executes
                it.
              </li>
              <li>
                In frontend development, Javascript is used. Nodejs, on the
                other hand, is utilized in server-side development.
              </li>
              <li>
                RamdaJS, TypedJS, and other javascript frameworks are
                examples.Lodash, express, and other Nodejs modules are examples.
                These modules will be downloaded through npm.
              </li>
            </p>
          </div>
          <div className="blog-div" data-aos="zoom-in-down">
            <h1 className="blog-title">
              <span>Question-2:</span> When should you use nodejs and when
              should you use mongodb?
            </h1>
            <p>
              <span>Answer: </span>
              <p>
                While JavaScript is a programming language, Node.js is a
                JS-based ecosystem that uses Google's V8 server engine. V8
                converts JavaScript code into quicker machine code that a
                computer can understand. When a project requires a programming
                environment and a runtime library that can build or interpret
                our code and provides basic programming tools and support that
                time we should use node.js. Nodejs is a tool for programming in
                the Javascript language. Other languages with similar tools
                include Python, Java, PHP, C#, C++, Go, and so on. So, if you we
                to develop a Javascript independent program or server, we can
                utilize nodejs.
              </p>
              <p>
                MongoDB is a NoSQL database that is object-oriented, simple,
                dynamic, and scalable. The model is based on the NoSQL document
                storage. Instead of storing the data in the columns and rows of
                a standard relational database, the data objects are saved as
                distinct documents within a collection. The MongoDB language was
                created with the goal of creating a data store with high
                performance, high availability, and autonomous scaling. If our
                application requires the capacity to save data so that it can be
                efficiently queried or updated later, then we will use the
                mongodb database
              </p>
            </p>
          </div>
          <div className="blog-div" data-aos="zoom-in-down">
            <h1 className="blog-title">
              <span>Question-3:</span>Differences between sql and nosql
              databases?
            </h1>
            <p>
              <span>Answer: </span>Differences between sql and nosql databases
              are:
              <li>
                The SQL database management system is a relational database
                management system. And no sql is a distributed database system
                that is non-relational.
              </li>
              <li>
                The schema of SQL databases is stable, static, or predetermined,
                but the schema of NoSQL databases is dynamic.
              </li>
              <li>
                SQl databases aren't designed for storing hierarchical data.
                However, no SQL databases are well-suited to storing
                hierarchical data.
              </li>
              <li>
                Complex queries are best served by SQL databases. Complex
                queries are not well served by NoSQL databases.
              </li>
              <li>
                SQL databases can be scaled vertically. However, NoSQL databases
                can scale horizontally.
              </li>
              <li>
                The ACID property is followed by SQL. CAP is followed by NoSQL
                (consistency, availability, partition tolerance)
              </li>
            </p>
          </div>
          <div className="blog-div" data-aos="zoom-in-down">
            <h1 className="blog-title">
              <span>Question-4:</span>What is the purpose of jwt and how does it
              work?
            </h1>
            <p>
              {" "}
              <span>Answer: </span>
              <p>
                JWT (JSON Web Token) is an open standard that allows two parties
                — a client and a server — to share security information. JSON
                items, containing a set of claims, are encoded in each JWT. JWTs
                are signed with a cryptographic algorithm to ensure that the
                claims can't be changed after they've been distributed.
              </p>
              <p>
                JSON Web Token is a standard for creating application access
                tokens.A JWT is a three-part string separated by dots (.) that
                is serialized using base64. We'll obtain two JSON strings after
                decoding: The header and the payload. The signature is
                important.The kind of token — JWT in this case — and the
                signature technique are both contained in the JOSE (JSON Object
                Signing and Encryption) header.
              </p>
              <p>
                The claims are contained in the payload. To keep the JWT small,
                this is shown as a JSON string with no more than a dozen fields.
                The server normally uses this information to verify that the
                user has authorization to do the activity requested. There are
                no mandatory claims in a JWT, but claims may be made mandatory
                by overlying standards. The signature verifies that the token
                hasn't been tampered with in any way. The person who creates the
                JWT signs the header and payload with a secret that both the
                issuer and receiver know about, or with a private key that only
                the sender knows about. The receiving party checks that the
                header and payload match the signature when the token is
                utilized.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
