import * as React from "react";
import { graphql } from "gatsby";
import "./UserPosts.scss";

export const UserPosts = ({ data }) => {
  return (
    <section>
      <p className="post-label">User posts</p>
      <div className="posts-container">
        {data.map((p) => (
          <div key={p.id} className="post">
            <p>
              <b>Title - </b> {p.title}
            </p>
            <p>
              <b>Date - </b> {p.dateAdded}
            </p>
            <p>
              <b>Brief - </b> {p.brief}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
