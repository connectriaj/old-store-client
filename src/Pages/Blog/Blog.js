import React from "react";

const Blog = () => {
  return (
    <section className="mt-20">
      <div className="card lg:card-side bg-base-100 shadow-xl p-10 my-10">
        <div className="lg:w-1/2">
          <figure>
            <img
              className=""
              src="https://images.unsplash.com/photo-1611262588019-db6cc2032da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="Album"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>

          <p>
            Local (UI) state – Local state is data we manage in one or another
            component. Local state is most often managed in React using the
            useState hook. For example, local state would be needed to show or
            hide a modal component or to track values for a form component, such
            as form submission, when the form is disabled and the values of a
            form’s inputs.
          </p>
          <p>
            <small>Author: David Bomb | Publish date: 20-4-2021</small>
          </p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-10 mb-10">
        <div className="lg:w-1/2">
          <figure>
            <img
              className=""
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Album"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            How does prototypical inheritance work?
          </h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
          <p>
            <small>Author: Martin Mular | Publish date: 2-5-2021</small>
          </p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-10 mb-10">
        <div className="lg:w-1/2">
          <figure>
            <img
              className=""
              src="https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Album"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
          <p>
            <small>Author: Abdul Kuddus | Publish date: 10-10-2011</small>
          </p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-10 mb-10">
        <div className="lg:w-1/2">
          <figure>
            <img
              className=""
              src="https://images.unsplash.com/photo-1521931961826-fe48677230a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Album"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">React vs. Angular vs. Vue?</h2>
          <p>
            Angular has a steep learning curve, considering it is a complete
            solution, and mastering Angular requires you to learn associated
            concepts like TypeScript and MVC. React offers a Getting Started
            guide that should help one set up React in about an hour. Vue
            provides higher customizability and hence is easier to learn than
            Angular or React.
          </p>
          <p>
            <small>Author: Kamal Pasha | Publish date: 12-4-2020</small>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
