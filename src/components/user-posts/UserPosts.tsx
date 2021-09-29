import * as React from "react";
import "./UserPosts.scss";
import { IUserPost } from "../../interfaces/UserPosts";

export const UserPosts = ({ data }: { data: IUserPost[] }) => {
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
